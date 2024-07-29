/**
 * ******************************************************
 * Copyright (C) 2022 VMware, Inc. All rights reserved.
 * *******************************************************
 *
 * @format
 */

import  UI from "./ui.js";

const WebRTCRedirApp = {
   callServerUrl: "",
   VMwareRedirSDK: window.VMwareWebRtcRedirectionAPI,
   ui: UI
};

window.WebRTCRedirApp = WebRTCRedirApp;

let wssPortNumber;
let clientID;

if (window.api) {
   window.api.receive("fromMain", (data) => {
      let event = JSON.parse(data);
      switch (event.type) {
         case "envInfo":
            handleEnvInfo(event);
            break;
         default:
            console.log("App Main ===> unknow event from app:" + event.type);
      }
   });
}

window.getWindowReference = async () => {
   return Promise.resolve(WebRTCRedirApp.winHandle);
};

window.getHorizonClientID = async () => {
   return Promise.resolve(clientID);
};

window.getHorizonWSSPort = async () => {
   let portNumber = wssPortNumber.toString();
   return Promise.resolve(portNumber);
};

const VMEventCBFun = function(evt) {
   let event = evt.event;
   console.log("App Main ===> get event from WebRTCRedirSDK: " + event);
   switch(event) {
      case "vdiClientConnected":
         UI.updateAgentConnectionStatus(true);
         break;
      case "vdiClientDisconnected":
         UI.updateAgentConnectionStatus(false);
         break;
      default:
         console.log("App Main ===> get unknow event from WebRTCRedirSDK: " + JSON.stringify(evt));
   }
};

// request for env information from main process
if (window.api) {
   setTimeout(() => {
      window.api.send("toMain", "getEnvInfo");
   }, 2000);
}

const handleEnvInfo = function(envInfo) {
   // callServerUrl WebRTCRedirApp
   if (envInfo.callServerUrl) {
      console.log("App Main ===> get callServerUrl from main process: " + envInfo.callServerUrl);
      WebRTCRedirApp.callServerUrl = envInfo.callServerUrl;
   }

   // window handle
   if (envInfo.winHandle) {
      console.log("App Main ===> get window handle from main process: " + envInfo.winHandle);
      window.winHandle = envInfo.winHandle;
      WebRTCRedirApp.winHandle = window.winHandle;
   }

   // wssPortNumber
   if (envInfo.wssPortInfo && envInfo.wssPortInfo.secureWebport) {
      wssPortNumber = envInfo.wssPortInfo.secureWebport.value;
      console.log("App Main ===> get wssPortNumber from main process: " + wssPortNumber);
   } else {
      console.warn("App Main ===> Could not figure out wss port number for html5server. App might be running on non-vdi environment.");
   }

   // clientID
   if (envInfo.clientID) {
      clientID = envInfo.clientID;
      console.log("App Main ===> get clientID from main process: " + clientID);
   } else {
      console.warn("App Main ===> Could not figure out clientID for VM View Client. App might be running on non-vdi environment.");
   }

   // init WebRTC Redir SDK if we have enough information
   if (window.winHandle && wssPortNumber && clientID && WebRTCRedirApp.VMwareRedirSDK) {
      console.log("App Main ===>App is running on vdi environment. Init redirection SDK.");
      WebRTCRedirApp.VMwareRedirSDK.initSDK({}, "VMware Electron Sample App", VMEventCBFun);
   }
};

navigator.mediaDevices.getDisplayMedia = async () => {
   const selectedSource = await globalThis.electronGetDisplayMedia();
   const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
         mandatory: {
            chromeMediaSource: "desktop",
            chromeMediaSourceId: selectedSource.id,
            minWidth: 1280,
            maxWidth: 1280,
            minHeight: 720,
            maxHeight: 720,
         },
      },
   });

   return stream;
};

WebRTCRedirApp.ui.init();
