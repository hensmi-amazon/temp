/**
 * ******************************************************
 * Copyright (C) 2022 VMware, Inc. All rights reserved.
 * *******************************************************
 *
 * @format
 */

import Utils from "./utils.js";
import CallMgr from "./callMgr.js";

const UI = function () {
   this.id = "WebRTCRedirAppUI";
};
UI.init = function() {
   // VM Agent connection status
   this.agentConnectionLabel = document.getElementById("agentConnectionStatus");

   // Device List UI
   this.audioInputList = document.getElementById("audioInputList");
   this.audioOutputList = document.getElementById("audioOutputList");
   this.videoInputList = document.getElementById("videoInputList");

   // Common buttons
   this.loginButton = document.getElementById("login");
   this.getDeviceButton = document.getElementById("getdevice");
   this.selfViewButton = document.getElementById("getSelfView");

   // Meeting control bar elements
   this.muteMicButton = document.getElementById("muteMic");
   this.muteCameraButton = document.getElementById("muteCam");
   this.shareScreenButton = document.getElementById("shareScreen");

   // video elements
   this.selfViewVideoWrapper = document.getElementById("selfViewWrapper");
   this.remoteVideoWrapper = document.getElementById("remoteVideoWrapper");
   this.miniRemoteVideoWrapper = document.getElementById("miniRemoteVideoWrapper");

   // call
   this.callButton = document.getElementById("makeCall");

   this.remoteMedisStatuDiv = document.getElementById("remoteMediaStatus");

   this.resetUI();
};

UI.clearDeviceList = function() {
   UI.audioInputList.innerText = null,
   UI.audioOutputList.innerText = null;
   UI.videoInputList.innerText = null;
};

UI.resetUI = function() {
   UI.muteMicButton.disabled = true;
   UI.muteCameraButton.disabled = true;
   UI.shareScreenButton.disabled = true;

   UI.agentConnectionLabel.innerHTML = "VMAgent not connceted";
   UI.agentConnectionLabel.style.color = "red";

   UI.loginButton.onclick = UI.login;
   UI.getDeviceButton.onclick = UI.getDeviceList;
   UI.selfViewButton.onclick = UI.startSelfView;


   UI.WebRTCRedirApp = window.WebRTCRedirApp;

   // VMware Agent connection status
   UI.WebRTCRedirApp.isAgentConnected = false;

   // Self View Status
   UI.WebRTCRedirApp.isSelfViewDisplaying = false;
   UI.clearDeviceList();

   // for p2p call
   UI.callButton.disabled = true;
   UI.callButton.onclick = UI.makeCall;
},

UI.login = function() {
   UI.loginButton.disabled = true;
   CallMgr.init(window.WebRTCRedirApp);
};

UI.logout = function() {
   UI.loginButton.innerHTML = "Login";
   UI.loginButton.onclick = UI.login;
   UI.callButton.disabled = true;

   CallMgr.disconnect();
};

UI.onLogout = function() {
   CallMgr.endCall();

   UI.loginButton.innerHTML = "Login";
   UI.loginButton.onclick = UI.login;
   UI.callButton.disabled = true;
};

UI.getDeviceList = async function() {
   UI.clearDeviceList();
   let deviceList;
   try {
      if (UI.WebRTCRedirApp.isAgentConnected) {
         deviceList = await UI.WebRTCRedirApp.VMwareRedirSDK.enumerateDevices();
      } else {
         deviceList = await navigator.mediaDevices.enumerateDevices();
      }
   } catch (error) {
      Utils.logError("UI", "Failed to get device list from enumerateDevices: " + JSON.stringify(error));
      return;
   }

   if (!deviceList || !deviceList.length) {
      return;
   }

   deviceList.forEach((device) => {
      let option = document.createElement("option");
      option.text = device.label;
      if (device.kind === "audioinput") {
         UI.audioInputList.add(option);
      } else if (device.kind === "audiooutput") {
         UI.audioOutputList.add(option);
         // filter out default devices(have no real deviceId) to make this app easier
         if (device.deviceId !== "default" && device.deviceId !== "communications" && !device.label.includes("Display Audio")) {
            UI.defaultAudioOutput = UI.defaultAudioOutput || device.deviceId;
         }
      } else if (device.kind === "videoinput") {
         UI.videoInputList.add(option);
      }
   });
};

UI.startSelfView = async function() {
   if (UI.WebRTCRedirApp.isSelfViewDisplaying) {
      return;
   }
   let videoStream;
   let constraints = {video: true, audio: false};
   let selfViewVideo = document.createElement('video');

   try {
      if (UI.WebRTCRedirApp.isAgentConnected) {
         UI.WebRTCRedirApp.VMwareRedirSDK.onVideoCreated(selfViewVideo, WebRTCRedirApp.winHandle);
         videoStream = await UI.WebRTCRedirApp.VMwareRedirSDK.getUserMedia(constraints);
      } else {
         videoStream = await navigator.mediaDevices.getUserMedia(constraints);
      }
   } catch(error) {
      Utils.logError("UI", "Failed to get video stream" );
      return;
   }


   selfViewVideo.srcObject = videoStream;
   UI.selfViewVideoWrapper.appendChild(selfViewVideo);
   selfViewVideo.autoplay = true;
   selfViewVideo.style.objectFit = "cover";
   selfViewVideo.style.width = "160px";
   selfViewVideo.style.height = "90px";

   UI.WebRTCRedirApp.localVideoStream = videoStream;
   UI.WebRTCRedirApp.isSelfViewDisplaying = true;
   UI.selfViewButton.innerHTML = "Stop Self View";
   UI.selfViewButton.onclick = UI.stopSelfView;
   UI.WebRTCRedirApp.selfViewVideo = selfViewVideo;
},

UI.stopSelfView = function() {
   if (!UI.WebRTCRedirApp.isSelfViewDisplaying) {
      return;
   }
   UI.WebRTCRedirApp.selfViewVideo.srcObject = null;
   UI.WebRTCRedirApp.isSelfViewDisplaying = false;
   UI.selfViewVideoWrapper.removeChild(UI.WebRTCRedirApp.selfViewVideo);
   UI.WebRTCRedirApp.selfViewVideo = null;

   Utils.stopStream(UI.WebRTCRedirApp.localVideoStream);
   UI.WebRTCRedirApp.localVideoStream = null;
   UI.selfViewButton.innerHTML = "Get Self View";
   UI.selfViewButton.onclick = UI.startSelfView;
},

UI.updateAgentConnectionStatus = function(isConnected) {
   if (isConnected) {
      UI.agentConnectionLabel.innerHTML = "VMAgent connceted";
      UI.agentConnectionLabel.style.color = "green";
      UI.WebRTCRedirApp.isAgentConnected = true;
   } else {
      UI.agentConnectionLabel.innerHTML = "VMAgent not connceted";
      UI.agentConnectionLabel.style.color = "red";
      UI.WebRTCRedirApp.isAgentConnected = false;
   }
};

UI.makeCall = function() {
   let calleeId = document.getElementById("callee").value;
   if (!calleeId) {
      Utils.logError("UI", "makeCall, there is no specified callee!!!");
      return;
   }
   UI.callButton.innerHTML = "End Call";
   UI.callButton.onclick = UI.endCall;
   CallMgr.makeCall(calleeId);
};

UI.endCall = function() {
   CallMgr.endCall(true);
};

UI.onLogin = function() {
   UI.loginButton.innerHTML = "Logout";
   UI.loginButton.onclick = UI.logout;
   UI.loginButton.disabled = "";

   UI.callButton.disabled = "";
   UI.callButton.onclick = UI.makeCall;
};

UI.onCallEnded = function() {
   UI.enableMeetingCtrlButtons(false);
   UI.callButton.innerHTML = "Call";
   UI.callButton.onclick = UI.makeCall;
   UI.remoteMedisStatuDiv.style.display = "none";
   document.getElementById("callingLabel").style.display = "none";
   document.getElementById("callee").disabled = false;

   try {
      if (UI.remoteShareVideoElement) {
         UI.remoteVideoWrapper.removeChild(UI.remoteShareVideoElement);
         UI.miniRemoteVideoWrapper.appendChild(UI.remoteVideoElement);
      } else {
         UI.remoteVideoWrapper.removeChild(UI.remoteVideoElement);
      }
      UI.remoteVideoElement = null;
      UI.remoteShareVideoElement = null;
   } catch(e) {
      Utils.log("UI", "no remote video element to remove");
   }
   try {
      UI.remoteVideoWrapper.removeChild(UI.remoteAudioElement);
      UI.remoteAudioElement = null;
   } catch(e) {
      Utils.log("UI", "no remote audio element to remove");
   }
   document.getElementById("remoteVideoArea").style.display = "none";
};

UI.enableMeetingCtrlButtons = function(isEnable) {
   UI.muteMicButton.disabled = isEnable ? "" : "true";
   UI.muteCameraButton.disabled = isEnable ? "" : "true";
   UI.shareScreenButton.disabled = isEnable ? "" : "true";
   if (!isEnable) {
      UI.muteMicButton.innerHTML = "Mute Mic";
      UI.muteCameraButton.innerHTML = "Mute Camera";
      UI.shareScreenButton.innerHTML = "Share Screen";
   } else {
      UI.muteMicButton.onclick = UI.muteMic.bind(UI, true);
      UI.muteCameraButton.onclick = UI.muteCam.bind(UI, true);
      UI.shareScreenButton.onclick = UI.startScreenShare.bind(UI);
   }
};

UI.muteMic = function(isMute) {
   UI.muteMicButton.innerHTML = (isMute ? "Unmute" : "Mute") + " Mic";
   UI.muteMicButton.onclick = UI.muteMic.bind(UI, !isMute);

   CallMgr.muteAudio(isMute);
};

UI.muteCam = function(isMute) {
   UI.muteCameraButton.innerHTML = (isMute ? "Unmute" : "Mute") + " Camera";
   UI.muteCameraButton.onclick = UI.muteCam.bind(UI, !isMute);
   CallMgr.muteVideo(isMute);
}

UI.startScreenShare = function() {
   UI.shareScreenButton.innerHTML = "Stop Share Screen";
   UI.shareScreenButton.onclick = UI.stopScreenShare.bind(UI, false);

   CallMgr.startScreenShare();
};

UI.stopScreenShare = function() {
   UI.resetScreenShareUI();
   CallMgr.teardownScreenShare(true);
};

UI.resetScreenShareUI = function() {
   UI.shareScreenButton.innerHTML = "Share Screen";
   UI.shareScreenButton.onclick = UI.startScreenShare.bind(UI);
   UI.shareScreenButton.disabled = "";

   if (UI.remoteShareVideoElement) {   // receiving
      UI.remoteVideoWrapper.removeChild(UI.remoteShareVideoElement);
      UI.remoteShareVideoElement = null;
      if (UI.remoteVideoElement) {
         UI.miniRemoteVideoWrapper.removeChild(UI.remoteVideoElement);
         UI.remoteVideoElement.style.width = "640px";
         UI.remoteVideoElement.style.height = "360px";
         UI.remoteVideoWrapper.appendChild(UI.remoteVideoElement);
      }
   }
};

UI.onHavingCall = function(peerId) {
   document.getElementById("callingLabel").innerHTML = "Connecting Call To: ";
   document.getElementById("callingLabel").style.display = "";
   document.getElementById("callee").value = peerId;
   document.getElementById("callee").disabled = true;

   UI.callButton.innerHTML = "End Call";
   UI.callButton.onclick = UI.endCall;
};

UI.onCallConnected = function() {
   Utils.log("UI", "call connected.");
   document.getElementById("callingLabel").innerHTML = "Having call with: ";
   UI.remoteMedisStatuDiv.style.display = "";
   // TODO:: Add related UI element to indicate this call status
}

UI.onRemoteVideoStream = function(videoStream) {
   let remoteVideo = document.createElement('video');

   if (UI.WebRTCRedirApp.isAgentConnected) {
      UI.WebRTCRedirApp.VMwareRedirSDK.onVideoCreated(remoteVideo, WebRTCRedirApp.winHandle);
   }
   remoteVideo.srcObject = videoStream;

   UI.remoteVideoWrapper.appendChild(remoteVideo);
   UI.remoteVideoElement = remoteVideo;
   remoteVideo.autoplay = true;
   remoteVideo.style.objectFit = "cover";
   remoteVideo.style.width = "640px";
   remoteVideo.style.height = "360px";
   document.getElementById("remoteVideoArea").style.display = "";
};

UI.onRemoteAudioStream = function(audioStream) {
   let remoteAudio = document.createElement('audio');

   if (UI.WebRTCRedirApp.isAgentConnected) {
      UI.WebRTCRedirApp.VMwareRedirSDK.onAudioCreated(remoteAudio, WebRTCRedirApp.winHandle);
   }
   remoteAudio.srcObject = audioStream;

   UI.remoteVideoWrapper.appendChild(remoteAudio);
   UI.remoteAudioElement = remoteAudio;
   remoteAudio.autoplay = true;
   remoteAudio.setSinkId(UI.defaultAudioOutput);
};

UI.onRemoteShareStream = function(shareStream) {
   if (UI.remoteVideoElement) {
      UI.remoteVideoWrapper.removeChild(UI.remoteVideoElement);
      UI.remoteVideoElement.style.width = "160px";
      UI.remoteVideoElement.style.height = "90px";
      UI.miniRemoteVideoWrapper.appendChild(UI.remoteVideoElement);
   }
   UI.shareScreenButton.disabled = true;

   let remoteShareVideo = document.createElement('video');

   if (UI.WebRTCRedirApp.isAgentConnected) {
      UI.WebRTCRedirApp.VMwareRedirSDK.onVideoCreated(remoteShareVideo, WebRTCRedirApp.winHandle);
   }
   remoteShareVideo.srcObject = shareStream;

   UI.remoteVideoWrapper.appendChild(remoteShareVideo);
   UI.remoteShareVideoElement = remoteShareVideo;
   remoteShareVideo.autoplay = true;
   remoteShareVideo.style.objectFit = "cover";
   remoteShareVideo.style.width = "640px";
   remoteShareVideo.style.height = "360px";
   document.getElementById("remoteVideoArea").style.display = "";
};

UI.onMuteMsg = function(userId, action, value) {
   if (action === "muteMic") {
      let audioStatusLabel = document.getElementById("remoteAudioStatus");
      let _text = userId + "'s audio: " + (value ? "Muted" : "Enabled");
      audioStatusLabel.innerHTML = _text;
      audioStatusLabel.style.color = value ? "red" : "green";
      return;
   }

   if (action === "muteCam") {
      let videotatusLabel = document.getElementById("remoteVideoStatus");
      let _text = userId + "'s video: " + (value ? "Muted" : "Enabled");
      videotatusLabel.innerHTML = _text;
      videotatusLabel.style.color = value ? "red" : "green";
      return;
   }
};

export default UI;
