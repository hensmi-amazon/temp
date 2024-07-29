/**
 * ******************************************************
 * Copyright (C) 2022 VMware, Inc. All rights reserved.
 * *******************************************************
 *
 * @format
 */

import Utils from "./utils.js";
let MsgType = window.commonMsgType;

const SessionStatus = {
   IDLE: 0,
   STARTING: 1,
   STARTED: 2,
   ENDING: 3
};

const CallMgr = function() {
   this.id = "WebRTCRedirAppCallMgr";
   this.ws = null;
};

const answerButton = document.getElementById("answerCall");
const rejectButton = document.getElementById("rejectCall");

CallMgr.init = function (app) {
   let userId = document.getElementById("userName").value;
   CallMgr.log("Initialization...... with userId: " + userId);
   CallMgr.app = app;
   CallMgr.ui = app.ui;
   CallMgr.SDK = app.VMwareRedirSDK;

   CallMgr.userId = userId;
   CallMgr.status = SessionStatus.IDLE;

   if (!CallMgr.ui.defaultAudioOutput) {
      CallMgr.ui.getDeviceList();
   }

   CallMgr.initWS();
};

CallMgr.makeCall = async function (calleeId) {
   CallMgr.log("Start Making Call to: " + calleeId);
   CallMgr.status = SessionStatus.STARTING;

   CallMgr.ui.onHavingCall(calleeId);

   let callInfo = {
      callId: CallMgr.userId + Utils.getRandomNumber().toString(),
      from: CallMgr.userId,
      peer: calleeId
   };
   CallMgr.callInfo = callInfo;

   let _pc = CallMgr.createPeerConnection();
   let _audioMediaStream = null;
   let _videoMediaStream = null;
   let audioConstraint = {audio: true, video: false};
   let videoConstraint = {audio: false, video: true};
   try {
      if(CallMgr.app.isAgentConnected) {
         _audioMediaStream = await CallMgr.SDK.getUserMedia(audioConstraint);
         _videoMediaStream = await CallMgr.SDK.getUserMedia(videoConstraint);
      } else {
         _audioMediaStream = await navigator.mediaDevices.getUserMedia(audioConstraint);
         _videoMediaStream = await navigator.mediaDevices.getUserMedia(videoConstraint);
      }
   } catch(error) {
      CallMgr.logError("Failed to get local media: " + error);
      return;
   }

   CallMgr.audioStream = _audioMediaStream;
   CallMgr.videoStream = _videoMediaStream;
   CallMgr.pc = _pc;

   let audioTrack = _audioMediaStream.getAudioTracks()[0];
   let videoTrack = _videoMediaStream.getVideoTracks()[0];

   let audioSender = _pc.addTrack(audioTrack, _audioMediaStream);
   let videoSender = _pc.addTrack(videoTrack, _videoMediaStream);

   let _offer;
   try {
      _offer = await _pc.createOffer();
      await _pc.setLocalDescription(_offer);
   } catch(error) {
      CallMgr.logError("Failed to deal with local description: " + error);
      return;
   }

   let msg = {
      messageType: MsgType.SIGNALING,
      type: "offer",
      sdp: _offer.sdp,
   };
   CallMgr.log("Sending out offer to: " + calleeId);
   CallMgr.sendMsg(msg);
   CallMgr.ui.enableMeetingCtrlButtons(true);
   CallMgr.ui.onMuteMsg(calleeId, "muteMic", false);
   CallMgr.ui.onMuteMsg(calleeId, "muteCam", false);
};

CallMgr.answerCall = async function() {
   let calleeId = CallMgr.callInfo ? CallMgr.callInfo.peer : null;
   if (!calleeId) {
      CallMgr.logError("No incoming call to be answer.");
      CallMgr.endCall();
      return;
   }
   CallMgr.status = SessionStatus.STARTING;
   CallMgr.log("Answering call from: " + calleeId);
   document.getElementById("incomingDialog").style.display = "none";
   CallMgr.ui.onHavingCall(calleeId);

   let _pc = CallMgr.createPeerConnection();
   let _audioMediaStream = null;
   let _videoMediaStream = null;
   let audioConstraint = {audio: true, video: false};
   let videoConstraint = {audio: false, video: true};

   try {
      if(CallMgr.app.isAgentConnected) {
         _audioMediaStream = await CallMgr.SDK.getUserMedia(audioConstraint);
         _videoMediaStream = await CallMgr.SDK.getUserMedia(videoConstraint);
      } else {
         _audioMediaStream = await navigator.mediaDevices.getUserMedia(audioConstraint);
         _videoMediaStream = await navigator.mediaDevices.getUserMedia(videoConstraint);
      }
   } catch(error) {
      CallMgr.logError("Failed to get local media stream: " + error);
      CallMgr.rejectCall();
      return;
   }

   CallMgr.audioStream = _audioMediaStream;
   CallMgr.videoStream = _videoMediaStream;
   CallMgr.pc = _pc;

   let audioTrack = _audioMediaStream.getAudioTracks()[0];
   let videoTrack = _videoMediaStream.getVideoTracks()[0];

   let audioSender = _pc.addTrack(audioTrack, _audioMediaStream);
   let videoSender = _pc.addTrack(videoTrack, _videoMediaStream);

   let _remoteDescription = {
      type: "offer",
      sdp: CallMgr.callInfo.remoteSDP
   };

   try {
      await _pc.setRemoteDescription(_remoteDescription);
   } catch(error) {
      CallMgr.logError("Failed to set remote description: " + error);
      CallMgr.rejectCall();
      return;
   }

   let _answer;
   try {
      _answer = await _pc.createAnswer();
      await _pc.setLocalDescription(_answer);
   } catch(error) {
      CallMgr.logError("Failed to deal with local description: " + error);
      CallMgr.rejectCall();
      return;
   }

   let reply = {
      messageType: MsgType.SIGNALING,
      type: "answer",
      sdp: _answer.sdp
   };
   CallMgr.log("Sending out answer to: " + CallMgr.callInfo.peer);
   CallMgr.sendMsg(reply);
   CallMgr.ui.enableMeetingCtrlButtons(true);
   CallMgr.ui.onMuteMsg(calleeId, "muteMic", false);
   CallMgr.ui.onMuteMsg(calleeId, "muteCam", false);
};

CallMgr.rejectCall = function() {
   let calleeId = CallMgr.callInfo ? CallMgr.callInfo.peer : null;
   if (!calleeId) {
      CallMgr.logError("No incoming call to be rejected.");
      CallMgr.endCall();
      return;
   }
   CallMgr.log("Rejecting call from: " + calleeId);
   document.getElementById("incomingDialog").style.display = "none";

   let reply = {
      messageType: MsgType.CALL_CTRL,
      action: "reject",
      reason: "BUSY",
   }
   CallMgr.log("Reject incoming call from:" + calleeId + ", current status: " + CallMgr.status);
   CallMgr.sendMsg(reply);
   CallMgr.endCall();
};

CallMgr.endCall = function (needToSendMsg) {
   CallMgr.status = SessionStatus.ENDING;
   if (needToSendMsg) {
      let msg = {
         messageType: MsgType.CALL_CTRL,
         action: "endCall"
      };
      CallMgr.sendMsg(msg);
   }

   CallMgr.log("Ending Call......");
   Utils.stopStream(CallMgr.audioStream);
   Utils.stopStream(CallMgr.videoStream);
   CallMgr.teardownScreenShare(false);
   CallMgr.pc && CallMgr.pc.close();
   CallMgr.status = SessionStatus.IDLE;
   CallMgr.audioStream = null;
   CallMgr.videoStream = null;
   CallMgr.pc = null;
   CallMgr.callInfo = null;
   CallMgr.ui.onCallEnded();
   CallMgr.log("Call was Ended.");
   document.getElementById("incomingDialog").style.display = "none";

   CallMgr.ui.callButton.innerHTML = "Call";
   CallMgr.ui.callButton.onclick = CallMgr.ui.makeCall;
};

CallMgr.muteAudio = function(isMute) {
   CallMgr.log((isMute ? "Mute" : "Unmute") + " local audio.");
   try {
      let audioTrack = CallMgr.audioStream.getAudioTracks()[0];
      audioTrack.enabled = !isMute;
   } catch(e) {
      CallMgr.logError("Failed to " + (isMute ? "mute " : "unmute ") + "local audio.");
   }
   let msg = {
      messageType: MsgType.CALL_CTRL,
      action: "muteMic",
      value: isMute
   };
   CallMgr.sendMsg(msg);
};

CallMgr.muteVideo = function(isMute) {
   CallMgr.log((isMute ? "Mute" : "Unmute") + " local video.");
   try {
      let videoTrack = CallMgr.videoStream.getVideoTracks()[0];
      videoTrack.enabled = !isMute;
   } catch(e) {
      CallMgr.logError("Failed to " + (isMute ? "mute " : "unmute ") + "local video.");
   }
   let msg = {
      messageType: MsgType.CALL_CTRL,
      action: "muteCam",
      value: isMute
   };
   CallMgr.sendMsg(msg);
};

CallMgr.initWS = async function () {
   CallMgr.log("Connecting to Call Server...... set up WSS connection");
   try {
      CallMgr.ws = new WebSocket(this.app.callServerUrl);
   } catch (e) {
      CallMgr.log("Failed to set up WSS");
      return;
   }

   CallMgr.ws.onmessage = function(event) {
      CallMgr.log("Received message: " + event.data);
      let msg = JSON.parse(event.data);

      switch(msg.messageType) {
         case MsgType.CALL_CTRL:
            CallMgr.handleCallCtrl(msg);
            break;
         case MsgType.SIGNALING:
            CallMgr.handleSDPMsg(msg)
            break;
         case MsgType.ERROR:
            CallMgr.handleWSErrorMsg(msg);
            break;
         default:
            CallMgr.logError("Received unknow message type: " + msg.messageType);
      }
   };

   CallMgr.ws.onerror = function(error) {
      // TODO::Handle error
   };

   CallMgr.ws.onclose = function(closeEvent) {
      CallMgr.ui.onLogout();
   };

   CallMgr.ws.onopen = function() {
      let loginMsg = {
         messageType: MsgType.LOGIN
      };
      CallMgr.sendMsg(loginMsg);
      CallMgr.ui.onLogin();
   };
};

CallMgr.handleCallCtrl = function(msg) {
   CallMgr.log("Received call control message from: " + msg.userId + ", action: " + msg.action);
   let callId = msg.callId;
   if (callId !== CallMgr.callInfo.callId || !msg.action) {
      CallMgr.log("Call Id is not matched or invalid action. Ignore this message.");
      return;
   }
   switch(msg.action) {
      case "reject":
         CallMgr.onCallRejected(msg);
         break;
      case "endCall":
         CallMgr.endCall(false);
         break;
      case "muteMic":
      case "muteCam":
         CallMgr.handleMuteMsg(msg);
         break;
      case "teardownScreenShare":
         CallMgr.teardownScreenShare(false);
         break;
      default:
         CallMgr.log("Unknown action: " + msg.action + ", ignore.");
   }
};

CallMgr.handleSDPMsg = function(msg) {
   CallMgr.log("Received SDP msg from: " + msg.userId + ", type: " + msg.type);
   switch(msg.type) {
      case "offer":
         CallMgr.handleOffer(msg);
         break;
      case "answer":
         CallMgr.handleAnswer(msg);
         break;
      case "iceCandidate":
         CallMgr.handleIceCandidate(msg);
         break;
      default:
         CallMgr.logError("Received unknow SDP type: " + msg.type);
   }
};

CallMgr.handleOffer = function(msg) {
   if(CallMgr.status !== SessionStatus.IDLE && !msg.isShare) {
      let reply = {
         messageType: MsgType.CALL_CTRL,
         action: "reject",
         reason: "BUSY",
         to: msg.userId
      }
      CallMgr.log("Reject incoming call from:" + msg.userId + ", current status: " + CallMgr.status);
      CallMgr.sendMsg(reply);
      return;
   }

   if (msg.isShare) {
      CallMgr.handleScreenShareOffer(msg);
      return;
   }

   let callInfo = {
      callId: msg.callId,
      peer: msg.userId,
      remoteSDP: msg.sdp,
      sdpType: "offer"
   };
   CallMgr.callInfo = callInfo;
   // Show incoming call dialog
   document.getElementById("callerId").innerHTML = msg.userId;
   answerButton.onclick = CallMgr.answerCall;
   rejectButton.onclick = CallMgr.rejectCall;
   document.getElementById("incomingDialog").style.display = "";
};

CallMgr.handleAnswer = function(msg) {
   let callId = msg.callId;
   if (callId !== CallMgr.callInfo.callId) {
      CallMgr.logError("Received callid: " + callId + ", not matched local callid: " + CallMgr.callInfo.callId)
      return;
   }

   let _remoteDescription = {
      type: "answer",
      sdp: msg.sdp
   };
   if (msg.isShare) {
      CallMgr.sharePC.setRemoteDescription(_remoteDescription);
   } else {
      CallMgr.pc.setRemoteDescription(_remoteDescription);
   }
};

CallMgr.handleScreenShareOffer = async function(msg) {
   CallMgr.log("Receiving screen share from" + CallMgr.callInfo.peer);

   let _pc = CallMgr.createPeerConnection();

   CallMgr.sharePC = _pc;
   _pc.isScreenShare = true;

   let _remoteDescription = {
      type: "offer",
      sdp: msg.sdp
   };

   try {
      await _pc.setRemoteDescription(_remoteDescription);
   } catch(error) {
      CallMgr.logError("Failed to set remote description: " + error);
      CallMgr.teardownScreenShare();
      return;
   }
   let _answer;
   try {
      _answer = await _pc.createAnswer();
      await _pc.setLocalDescription(_answer);
   } catch(error) {
      CallMgr.logError("Failed to deal with local description: " + error);
      CallMgr.teardownScreenShare();
      return;
   }

   let reply = {
      messageType: MsgType.SIGNALING,
      type: "answer",
      sdp: _answer.sdp,
      isShare: true
   };
   CallMgr.log("Sending out answer to: " + CallMgr.callInfo.peer);
   CallMgr.sendMsg(reply);
}

CallMgr.handleIceCandidate = async function(msg) {
   let callId = msg.callId;
   if (callId !== CallMgr.callInfo.callId) {
      CallMgr.logError("Received callid: " + callId + ", not matched local callid: " + CallMgr.callInfo.callId)
      return;
   }
   try {
      let _candidate = new RTCIceCandidate(msg.candidate);
      if (!msg.isShare) {
         await CallMgr.pc.addIceCandidate(_candidate);
      } else {
         await CallMgr.sharePC.addIceCandidate(_candidate);
      }
    } catch (error) {
      CallMgr.log("Failed to add one iceCandidate from peer side. That might be OK")
    }
};

CallMgr.teardownScreenShare = function(needToSendMsg) {
   if (CallMgr.sharePC == null) {
      return;
   }

   if (needToSendMsg) {
      let msg = {
         messageType: MsgType.CALL_CTRL,
         action: "teardownScreenShare",
         to: CallMgr.callInfo.peer
      };
      CallMgr.sendMsg(msg);
   }

   CallMgr.sharePC.close();
   Utils.stopStream(CallMgr.shareMediaStream);
   CallMgr.ui.resetScreenShareUI();
};

CallMgr.handleWSErrorMsg = function(msg) {
   CallMgr.log("Received error msg: " + msg.text);
   CallMgr.endCall();
};

CallMgr.onCallRejected = function(msg) {
   CallMgr.endCall();
};

CallMgr.createPeerConnection = function() {
   let pc = null;
   /**************************************************************************
    *  This is just a turn server sample, better to use your own turn server.
    **************************************************************************
    */
   let config = {
      iceServers: [{
         urls: [ "stun:ws-turn2.xirsys.com" ]
      }, {
         username: "p6nZxzPrXbUvO_l1btEDzhw7v5ubmnyoYFZWVA3YNhjnrGo7skykkIRKWDfAt9gkAAAAAGHorfViZW5ydWlzaGU=",
         credential: "a7596482-7988-11ec-8a20-0242ac140004",
         urls: [
             "turn:ws-turn2.xirsys.com:80?transport=udp",
             "turn:ws-turn2.xirsys.com:3478?transport=udp",
             "turn:ws-turn2.xirsys.com:80?transport=tcp",
             "turn:ws-turn2.xirsys.com:3478?transport=tcp",
             "turns:ws-turn2.xirsys.com:443?transport=tcp",
             "turns:ws-turn2.xirsys.com:5349?transport=tcp"
         ]
      }]
   };

   if(CallMgr.app.isAgentConnected) {
      pc = CallMgr.SDK.newPeerConnection(config, {});
   } else {
      pc = new RTCPeerConnection(config);
   }

   pc.ontrack = function(event) {
      CallMgr.log("peerconnect ontrack event triggered......");
      let stream = event.streams && event.streams[0];
      let audioTrack = stream.getAudioTracks()[0];
      let videoTrack = stream.getVideoTracks()[0];

      if (videoTrack) {
         if (pc.isScreenShare) {
            CallMgr.ui.onRemoteShareStream(stream);
         } else {
            CallMgr.ui.onRemoteVideoStream(stream);
         }
      }

      if (audioTrack) {
         CallMgr.ui.onRemoteAudioStream(stream);
      }
   };

   pc.onaddstream = function(event) {
      CallMgr.log("peerconnection onaddstream...... ignore for unified-plan");
   };

   pc.onnegotiationneeded = (evt) => {
      CallMgr.log("peerconnection onnegotiationneeded......");
   };

   pc.onicecandidate = (evt) => {
      CallMgr.log("peerconnection onicecandidate......");
      if (evt.candidate) {
         CallMgr.log("peerconnection onicecandidate, sending out to peer.");
         let msg = {
            messageType: MsgType.SIGNALING,
            type: "iceCandidate",
            candidate: evt.candidate.toJSON ? evt.candidate.toJSON() : evt.candidate,
            isShare: pc.isScreenShare
         };
         CallMgr.sendMsg(msg);
      }
   };

   pc.onsignalingstatechange = (evt) => {
      CallMgr.log("peerconnection onsignalingstatechange: " + pc.signalingState);
   };

   pc.oniceconnectionstatechange = (evt) => {
      CallMgr.log("peerconnection oniceconnectionstatechange......");
      if (pc.iceConnectionState === "connected") {
         CallMgr.ui.onCallConnected();
      }
   };

   pc.onicegatheringstatechange = (evt) => {
      CallMgr.log("peerconnection onicegatheringstatechange: " + pc.iceGatheringState);
   };

   pc.onconnectionstatechange = (evt) => {
      CallMgr.log("peerconnection onconnectionstatechange: " + pc.connectionState);
   };
   return pc;
}

CallMgr.disconnect = function() {
   CallMgr.log("Disconnecting with Call server......");
   if (CallMgr.callInfo || CallMgr.status !== SessionStatus.IDLE) {
      CallMgr.endCall();
   }
   CallMgr.ws.close();
};

CallMgr.handleMuteMsg = function(msg) {
   CallMgr.log("Received mute msg from: " + msg.userId);
   if (!CallMgr.callInfo || CallMgr.status === SessionStatus.IDLE) {
      CallMgr.warn("Ignore the mute message since not in a call.");
   }
   CallMgr.ui.onMuteMsg(msg.userId, msg.action, msg.value);
};

CallMgr.startScreenShare = async function(pId) {
   CallMgr.log("Start screen share");
   let peerId = pId || CallMgr.callInfo.peer;

   let _pc = CallMgr.createPeerConnection();
   let _shareMediaStream = null;
   let constraint = {
      video: {
         width: { max: 1280 },
         height: {max: 720 },
         frameRate: 10
      }
   };
   try {
      if(CallMgr.app.isAgentConnected) {
         let screenInfo  = await CallMgr.SDK.getScreensInfo();
         if(screenInfo.length === 0 ) {
            CallMgr.logError("Failed to get local screen information.");
            return;
         }
         // skip the screen selectting step to make the sample app easier
         CallMgr.SDK.onScreenSelected(screenInfo[0].id);
         _shareMediaStream = await CallMgr.SDK.getDisplayMedia(constraint);
      } else {
         _shareMediaStream = await navigator.mediaDevices.getDisplayMedia(constraint);
      }
   } catch(error) {
      CallMgr.logError("Failed to get local screen media stream: " + error);
      return;
   }

   CallMgr.shareMediaStream = _shareMediaStream;
   CallMgr.sharePC = _pc;
   _pc.isScreenShare = true;

   let shareTrack = _shareMediaStream.getVideoTracks()[0];
   _pc.addTrack(shareTrack, _shareMediaStream);

   let _offer;
   try {
      _offer = await _pc.createOffer();
      await _pc.setLocalDescription(_offer);
   } catch(error) {
      CallMgr.logError("Failed to deal with local description: " + error);
      return;
   }

   let msg = {
      messageType: MsgType.SIGNALING,
      type: "offer",
      sdp: _offer.sdp,
      isShare: true
   };
   CallMgr.log("Sending out screen share offer to: " + peerId);
   CallMgr.sendMsg(msg);
};

CallMgr.sendMsg = function(msgObj) {
   msgObj.userId = CallMgr.userId;
   if (CallMgr.callInfo) {
      if (CallMgr.callInfo.peer) {
         msgObj.to = CallMgr.callInfo.peer;
      }
      if (CallMgr.callInfo.callId) {
         msgObj.callId = CallMgr.callInfo.callId;
      }
   }

   CallMgr.ws.send(JSON.stringify(msgObj));
};

CallMgr.log = function(text) {
   Utils.log("CallMgr", text);
};

CallMgr.logWarn = function(text) {
   Utils.logWarn("CallMgr", text);
};

CallMgr.logError = function(text) {
   Utils.logError("CallMgr", text);
};

export default CallMgr;
