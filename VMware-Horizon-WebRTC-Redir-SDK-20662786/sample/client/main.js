/**
 * ******************************************************
 * Copyright (C) 2022 VMware, Inc. All rights reserved.
 * *******************************************************
 *
 * @format
 */

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const os = require('os');
const regedit = require('regedit');
const taskList = require('tasklist');
const fs = require('fs');
regedit.setExternalVBSLocation('regedit/vbs');

let win;

let sessionId;
let wssPortInfo = null;
let clientID = null;

app.disableHardwareAcceleration();

// ignore self-signed certificate error and gpu error
app.commandLine.appendSwitch('ignore-certificate-errors');
app.commandLine.appendSwitch('disable-gpu');

let wssPortRegistryPath = 'HKCU\\Software\\VMware, Inc.\\HTML5 Redirection Server\\';
let clientIDRegistryPath = 'HKCU\\Volatile Environment\\';

const OSType = os.platform();

// Read configure file for server information
let pageUlr = "";
let callServerUrl = "";

try {
   let rawdata = fs.readFileSync('serverInfo.json');
   let serverInfo = JSON.parse(rawdata);
   pageUlr = serverInfo.pageUlr;
   callServerUrl = serverInfo.callServerUrl;
} catch (error) {
   console.log("Main process ===> failed to read server info from config file:" + error);
}


async function createWindow () {
   win = new BrowserWindow({
      icon:"resource/VMware_icon.png",
      width: 1280,
      height: 720,

      webPreferences: {
         nodeIntegration: false,
         contextIsolation: true,
         enableRemoteModule: false,
         preload: path.join(__dirname, "preload.js")
      }
   });

   win.loadURL(pageUlr);

   if (OSType === "win32") {
      // Get session id. You might use some other ways
      let osTaskList = await taskList();
      for (let i = 0; i < osTaskList.length; i++) {
         let task = osTaskList[i];
         if (task.imageName === "electron.exe" || task.imageName === "HorizonWebRTCRedirApp.exe") {
            sessionId = task.sessionNumber;
            break;
         }
      }

      // Read registry for Horizon Agent WebSocket server port number
      let _wssPortRegistryPath = wssPortRegistryPath + sessionId.toString();
      let _clientIDRegistryPath = clientIDRegistryPath + sessionId.toString();
      try {
         regedit.list(_wssPortRegistryPath, function(err, result) {
            if (result && (result[_wssPortRegistryPath] || result[_wssPortRegistryPath].exists)) {
               wssPortInfo = result[_wssPortRegistryPath].values;
            }
         });

         regedit.list(_clientIDRegistryPath, function(err, result) {
            if (!result && err.stdout) {
               let _p = err.stdout.indexOf('ViewClient_Client_ID');
               let tmpStr = err.stdout.substring(_p);
               _p = tmpStr.indexOf('value');
               tmpStr = tmpStr.substring(_p);
               _p = tmpStr.indexOf('}');
               tmpStr = tmpStr.substring(0, _p);
               clientID = tmpStr.split('"')[2];
            } else if (result) {
               if (result[_clientIDRegistryPath] || result[_clientIDRegistryPath].exists) {
                  let clientIDInfo = result[_clientIDRegistryPath].values.ViewClient_Client_ID;
                  if (clientIDInfo) {
                     clientID = clientIDInfo.value;
                  }
               }
            }
         });
      } catch(error) {
         console.log("Main process ===> Could not read registry. Maybe not in VDI env.");
      }
   }
}

app.whenReady().then(() => {
   createWindow();
});

ipcMain.on("toMain", (event, args) => {
   console.log("Main process ===> receive msg from app: " + JSON.stringify(args));
   switch (args) {
      case "getEnvInfo":
         handleEnvInfoRequest();
         break;
      default:
         console.log("Main process ===> unknow event from app:" + args);
   }
});

const handleEnvInfoRequest = () => {
   let envInfo = {};
   envInfo.type = "envInfo";

   envInfo.callServerUrl = callServerUrl;
   if (OSType === "win32") {
      // window handle value
      let winHandle = win.getNativeWindowHandle();
      let handleValue =  winHandle.toString('hex');

      envInfo.winHandle = handleValue;

      // htmlt5server wss port info
      envInfo.wssPortInfo = wssPortInfo;

      // clientID
      envInfo.clientID = clientID;
   }

   win.webContents.send("fromMain", JSON.stringify(envInfo));
};
