(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    
    var _typeof2 = require("babel-runtime/helpers/typeof");
    
    var _typeof3 = _interopRequireDefault(_typeof2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    /* ******************************************************************************
     * Copyright 2018-2022 VMware, Inc.  All rights reserved. -- VMware Confidential
     * *****************************************************************************/
    
    /**
     *
     * HorizonSDKforWebRTCRedir.js
     *
     * Build: 20662786
     *
     */
    !function (e) {
      ("function" != typeof define || !define.amd) && "object" == (typeof module === "undefined" ? "undefined" : (0, _typeof3.default)(module)) && module.exports ? module.exports = e() : window.VMwareWebRtcRedirectionAPI = e();
    }(function (e, t) {
      "use strict";
      function a(e) {
        var t;M.multiwindow && O ? (t = pe(e)) ? ve[t] ? V.debug("ensureFrame skipped due to frame already registered.") : (O.send({ cmd: "newFrame", frame: t, browser: "electron", customClipRect: 1 }, -1), ve[t] = e) : V.debug("ensureFrame skipped due to no frameWnd") : V.debug("ensureFrame skipped due to feature not enabled or no connection.");
      }var B,
          p = { createInstance: 30, createInstanceResult: 31, newVideoElement: 32, removeVideoElement: 33, updateVideoElement: 34, newFrame: 36, removeFrame: 37, version: 40, enumDevices: 41, enumVideoDevice: 42, createPeerConnection: 43, createOffer: 44, createAnswer: 45, setLocalDescription: 46, setRemoteDescription: 47, addIceCandidate: 48, addStream: 49, getLocalStreams: 50, getStats: 51, removeStream: 52, close: 53, getUserMediaShim: 54, mediaTrkStop: 55, trackEnabled: 56, newAudioElement: 57, setSinkId: 58, updateSrcObject: 59, notifyAudio: 60, mediaStreamClone: 61, mediaTrackClone: 62, getDisplayMediaShim: 63, setDefaultSinkId: 64, shimLogToWebSocket: 65, insertDTMF: 66, getReceivers: 67, customClipRect: 69, applyConstraints: 70, getScreens: 71, setScreenId: 72, addTrack: 74, removeTrack: 75, senderCmd: 76, createMediaStream: 77, connectedStateChanged: 78, updateObjectFit: 79, transceiverCmd: 300, dataChannelCmd: 301, dataChannelEvent: 302 },
          g = { ERROR: 0, WARN: 1, INFO: 2, DEBUG: 3 },
          H = 2,
          m = 0,
          b = 1,
          S = 2,
          f = { DURATION: 100, INTERTONEGAP: 70 },
          o = 0,
          v = 1,
          z = 1,
          J = 2,
          G = "unified-plan",
          y = { TRANSCEIVER_ADD_TRANSCEIVER: 1, TRANSCEIVER_SET_CODECPREFERENCE: 2, TRANSCEIVER_STOP: 3, TRANSCEIVER_SET_DIRECTION: 4 },
          l = 0,
          q = 1,
          s = 1,
          X = 2,
          d = 4,
          K = 16,
          u = { RPF_ACTIVE: 1, RPF_CODEPAYLOADTYPE: 2, RPF_DTX: 4, RPF_MAXBITRATE: 8, RPF_MAXFRAMERATE: 16, RPF_PTIME: 32, RPF_RID: 64, RPF_SCALE_RESOLUTION_DOWNBY: 128 },
          Y = 0,
          Q = 1,
          C = 0,
          R = 1,
          Z = 4,
          $ = 32,
          ee = 2,
          n = "52406081",
          _ = "1.0.",
          T = (_ += "@" === n[0] ? "00000" : n, -1),
          w = -1,
          te = -1,
          ne = 0,
          i = 0,
          ie = 0,
          re = 0,
          oe = 0,
          ae = 0,
          c = {},
          k = {},
          E = {},
          se = {},
          de = {},
          ce = window.navigator.mediaDevices.enumerateDevices,
          ue = null,
          I = {},
          le = {},
          he = {},
          fe = {},
          O = null,
          r = null,
          P = [],
          D = [],
          M = {},
          ve = {},
          j = {},
          A = !1,
          V = { logLevel: g.DEBUG, websocketlogLevel: g.INFO, logToConsole: !1, updateLogLevel: function updateLogLevel(e, t) {
          V.logLevel = e, V.websocketlogLevel = t;
        }, error: function error(e) {
          V.log("ERROR", e), r && "function" == typeof r.error && r.error(e);
        }, warn: function warn(e) {
          V.log("WARN", e), r && "function" == typeof r.warn && r.warn(e);
        }, info: function info(e) {
          V.log("INFO", e), r && "function" == typeof r.info && r.info(e);
        }, debug: function debug(e) {
          V.log("DEBUG", e);
        }, log: function log(e, t) {
          try {
            g[e] <= V.logLevel && (V.logToConsole && console && ("object" == (typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t)) ? console.log(t) : console.log(e + ": " + t)), "string" == typeof t && g[e] <= V.websocketlogLevel && O.sendLogToWebSocket(t, e));
          } catch (e) {}
        } },
          pe = function pe(e) {
        return e;
      };function ge(e, t, n) {
        var i,
            r,
            o = "_id#",
            a = e.indexOf(t);return -1 == a ? e + t + "1" + o + n : (i = e.substring(0, a), r = e.indexOf(o, a + t.length), e = Number(e.substring(a + t.length, r)), i + t + ((e = isNaN(e) ? 0 : e) + 1) + o + n);
      }function me(e, t) {
        function n() {
          return 1 <= arguments.length && "function" == typeof arguments[0];
        }function i() {
          return 2 <= arguments.length && "function" == typeof arguments[1];
        }function r(a, s, d, c) {
          return new Promise(function (e, t) {
            var n = new DOMException("createOffer cancelled", "OperationError"),
                i = new DOMException("The RTCPeerConnection is closed", "InvalidStateError"),
                r = a ? e : d,
                o = a ? t : c;O.send({ cmd: "createOffer", options: s }, u.id, function (e) {
              k[u.id] ? void 0 === e.error ? (V.debug("createOffer done"), V.debug(e.desc), e.transceivers && p(e.transceivers), r(e.desc)) : o(n) : o(i);
            });
          });
        }function o(a, s, d, c) {
          return new Promise(function (e, t) {
            var n = new DOMException("createAnswer cancelled", "OperationError"),
                i = new DOMException("The RTCPeerConnection is closed", "InvalidStateError"),
                r = a ? e : d,
                o = a ? t : c;O.send({ cmd: "createAnswer", options: s }, u.id, function (e) {
              k[u.id] ? void 0 === e.error ? (V.debug("createAnswer done"), V.debug(e.desc), e.transceivers && p(e.transceivers), r(e.desc)) : o(n) : o(i);
            });
          });
        }function a(a, s, d, c) {
          return u._remoteDescription = s, new Promise(function (e, t) {
            var n = new DOMException("setRemoteDescription cancelled", "OperationError"),
                i = new DOMException("The RTCPeerConnection is closed", "InvalidStateError"),
                r = a ? e : d,
                o = a ? t : c;O.send({ cmd: "setRemoteDescription", desc: s }, u.id, function (e) {
              k[u.id] ? void 0 === e.error ? (e.transceivers && p(e.transceivers, e.transceiversRemoved), r()) : o(n) : o(i);
            });
          });
        }function s(a, s, d, c) {
          return u._localDescription = s, new Promise(function (e, t) {
            var n = new DOMException("setLocalDescription cancelled", "OperationError"),
                i = new DOMException("The RTCPeerConnection is closed", "InvalidStateError"),
                r = a ? e : d,
                o = a ? t : c;O.send({ cmd: "setLocalDescription", desc: s }, u.id, function (e) {
              k[u.id] ? void 0 === e.error ? (e.transceivers && p(e.transceivers, e.transceiversRemoved), r()) : o(n) : o(i);
            });
          });
        }function d(a, s, d, c) {
          return new Promise(function (e, t) {
            var n = new DOMException("addIceCandidate cancelled", "OperationError"),
                i = new DOMException("The RTCPeerConnection is closed", "InvalidStateError"),
                r = a ? e : d,
                o = a ? t : c;O.send({ cmd: "addIceCandidate", candidate: s }, u.id, function (e) {
              k[u.id] ? void 0 === e.error ? r() : o(n) : o(i);
            });
          });
        }function c(i, r) {
          return new Promise(function (e, t) {
            new DOMException("getStats cancelled", "InvalidAccessError");var n = i ? e : r,
                e = { cmd: "getStats" };i == R && (e.capability = Z), O.send(e, u.id, function (e) {
              var t;"function" == typeof n && (void 0 === e.error && void 0 !== e.stats && void 0 !== k[u.id] ? i == R ? n(e.stats) : ((t = new be())._create(e.stats), n(t)) : n({}));
            });
          });
        }var u = this,
            l = {},
            h = {},
            f = {},
            v = !1,
            p = (this.id = ++te, this._localStreams = [], this._remoteStreams = [], this._dataChannelMap = {}, this._dataChannelIdToShimIdMap = {}, this._iceConnectionState = "new", e && e.sdpSemantics === G && (v = !0), this.isUnifiedPlan = function () {
          return v;
        }, Object.defineProperty(this, "iceConnectionState", { get: function get() {
            return V.debug("get iceConnectionState:" + this._iceConnectionState), this._iceConnectionState;
          }, configurable: !0 }), this._iceGatheringState = "new", Object.defineProperty(this, "iceGatheringState", { get: function get() {
            return V.debug("get iceGatheringState:" + this._iceGatheringState), this._iceGatheringState;
          }, configurable: !0 }), this._signalingState = "stable", Object.defineProperty(this, "signalingState", { get: function get() {
            return V.debug("get signalingState:" + this._signalingState), this._signalingState;
          }, configurable: !0 }), this._connectionState = "new", M.connectionState && Object.defineProperty(this, "connectionState", { get: function get() {
            return V.debug("get connectionState:" + this._connectionState), this._connectionState;
          }, configurable: !0 }), this._localDescription = null, Object.defineProperty(this, "localDescription", { get: function get() {
            return V.debug("get localDescription:" + this._localDescription), this._localDescription;
          }, configurable: !0 }), this._remoteDescription = null, Object.defineProperty(this, "remoteDescription", { get: function get() {
            return V.debug("get remoteDescription:" + this._remoteDescription), this._remoteDescription;
          }, configurable: !0 }), this.cleanUp = function () {
          var e;"complete" !== this._iceGatheringState && (e = { type: "icecandidate", candidate: null, target: this }, this.onicecandidate && this.onicecandidate(e), this._iceGatheringState = "complete", this.onicegatheringstatechange && this.onicegatheringstatechange({ type: "icegatheringstatechange", target: this })), "disconnected" != this._iceConnectionState && (this._iceConnectionState = "disconnected", e = { type: "iceconnectionstatechange", target: this }, this.oniceconnectionstatechange && this.oniceconnectionstatechange(e)), this._localStreams = [], this._remoteStreams = [];
        }, this.createOfferV0 = function (e, t, n) {
          r(C, n, e, t);
        }, this.createOfferV1 = function () {
          return n.apply(null, arguments) ? this.createOfferV0.apply(this, arguments) : r(R, arguments[0]);
        }, this.createAnswerV0 = function (e, t, n) {
          o(C, n, e, t);
        }, this.createAnswerV1 = function () {
          return n.apply(null, arguments) ? this.createAnswerV0.apply(this, arguments) : o(R, arguments[0]);
        }, this.setRemoteDescriptionV0 = function (e, t, n) {
          a(C, e, t, n);
        }, this.setRemoteDescriptionV1 = function () {
          return i.apply(null, arguments) ? this.setRemoteDescriptionV0.apply(this, arguments) : a(R, arguments[0]);
        }, this.setLocalDescriptionV0 = function (e, t, n) {
          s(C, e, t, n);
        }, this.setLocalDescriptionV1 = function () {
          return i.apply(null, arguments) ? this.setLocalDescriptionV0.apply(this, arguments) : s(R, arguments[0]);
        }, this.addIceCandidateV0 = function (e, t, n) {
          d(C, e, t, n);
        }, this.addIceCandidateV1 = function () {
          return i.apply(null, arguments) ? this.addIceCandidateV0.apply(this, arugments) : d(R, arguments[0]);
        }, this.createDTMFSender = function (e) {
          var t;return "audio" !== e.kind ? (V.error("DTMF only could be associated with audio track."), null) : ((t = new Se()).initPlanB(u.id, e), de[e.id] = t);
        }, this.getStatsV0 = function (e) {
          return c(C, e);
        }, this.getStatsV1 = function () {
          return n.apply(null, arguments) ? this.getStatsV0.apply(this, arguments) : c(R);
        }, this.getLocalStreams = function () {
          return v ? (V.warn("getLocalStreams is not supported in the unified plan, use getSenders()"), []) : (V.debug("getLocalStreams():" + this._localStreams.length), this._localStreams);
        }, this.getRemoteStreams = function () {
          return v ? (V.warn("getRemoteStreams is not supported in the unified plan, use getReceivers()"), []) : (V.debug("getRemoteStreams():" + this._remoteStreams.length), this._remoteStreams);
        }, this.addStream = function (e) {
          this._localStreams.push(e), O.send({ cmd: "addStream", sid: e.id }, u.id);
        }, this.removeStream = function (e) {
          V.debug("RTCPeerConnection.removeStream(): " + e.id);var t = this._localStreams.indexOf(e);-1 != t ? this._localStreams.splice(t, 1) : V.error("RTCPeerConnection.removeStream(): Failed to find stream: " + e.id), O.send({ cmd: "removeStream", sid: e.id }, u.id);
        }, this.addTrackImplV1 = function (e, t) {
          var n, i;if (e && t) return v ? ((n = new F(u)).initTrackOrKind(e), (i = (f[n.id] = n).sender).setTrack(e, t), O.send({ cmd: "addTrack", transceiverId: n.id, tid: e.id, sid: t.id }, u.id, function (e) {
            void 0 === e.error ? p(e.transceivers) : delete f[n.id];
          })) : (i = h[e.id]) ? V.warn("RTCPeerConnection.addTrack: sender already exists.") : ((i = new U(u)).initPlanB(e, t), h[i.id] = i, O.send({ cmd: "addTrack", transceiverId: "", tid: e.id, sid: t.id }, u.id, function (e) {
            void 0 !== e.error && delete h[i.id];
          })), i;throw new Error("both media track and stream need to be provided");
        }, this.removeTrackImplV1 = function (e) {
          e ? void 0 === e._cap ? V.error("sender object doesn't have the capability bits") : e.id ? (e.removeTrack(), v || delete h[e.id]) : V.error("RTCPeerConnection.removeTrack: not a valid sender object") : V.error("RTCPeerConnection.removeTrack: invalid sender.");
        }, this.getSendersImplV1 = function () {
          V.debug("RTCPeerConnection.getSendersImplV1");var e = [];if (v) for (var t in f) {
            var n = f[t].sender;n && e.push(n);
          } else for (var t in h) {
            h[t] && e.push(h[t]);
          }return e;
        }, this.getTranceiversImplV1 = function () {
          V.debug("RTCPeerConnection.getTranceiversImplV1");var e,
              t = [];for (e in f) {
            V.debug("RTCPeerConnection.getTranceiversImplV1 id=" + e), t.push(f[e]);
          }return t;
        }, this.addTransceiverImplV1 = function (e, t) {
          var n = new F(u),
              i = (n.initTrackOrKind(e, t), f[n.id] = n, { cmd: "transceiverCmd", transceiverCmd: y.TRANSCEIVER_ADD_TRANSCEIVER, hint: "RTCRtpTransceiver.addTransceiver", transceiverId: n.id });if ("audio" === e || "video" === e) i.trackOrKind = e;else {
            if (!(e instanceof L)) return V.error("addTranceiver: Unknown type"), null;V.debug("addTranceiver with track is not Implemented"), i.trackOrKind = e.id;
          }e = {};if (t.direction && (e.direction = t.direction), t.sendEncodings && (e.sendEncodings = t.sendEncodings), t.streams) {
            for (var r in streamIds = [], t.streams) {
              streamIds.push(r.id);
            }e.streams = streamIds;
          }return i.init = e, O.send(i, u.id, function (e) {
            void 0 === e.error && p(e.transceivers);
          }), n;
        }, this.createDataChannelImplV1 = function (e, t) {
          var n, i;return V.debug("RTCPeerConnection.createDataChannel: " + e + " option: " + JSON.stringify(this.options)), e ? (n = ++ae, (i = new _e(u.id, n))._createChannel(e, t), u._dataChannelMap[n] = i) : (V.error("RTCPeerConnection.createDataChannel: missing label"), null);
        }, this._untrackDataChannel = function (e, t) {
          void 0 !== t && u._dataChannelMap[t] && (V.debug("Untrack datachannel: " + e + " shimId: " + t), delete u._dataChannelMap[t]), e != w && u._dataChannelIdToShimIdMap[e] && (V.debug("Remove mapped datachannel: " + e + " shimId:" + t), delete u._dataChannelIdToShimIdMap[e]);
        }, function (e, t) {
          for (var n in e) {
            var i,
                r = e[n],
                o = f[r.id];(o || (o = r.id, V.debug("_updateTransceivers: addTransceiver id=" + o), (i = new F(u)).initId(o), f[o] = i)).update(r);
          }if (t) for (var n in t) {
            var a = t[n];V.debug("_updateTransceivers: removeTransceiver id=" + a), delete f[a];
          }
        }),
            g = (this.close = function () {
          g = null, O.send({ cmd: "close" }, u.id, function (e) {
            delete k[u.id];
          }, !0);
        }, null);this.getReceivers = function () {
          if (v) {
            var e = [];if (f) for (var t in f) {
              var n = f[t].receiver;n && e.push(n);
            }
          } else {
            g || (g = {}, O.send({ cmd: "getReceivers" }, u.id, function (e) {}, !0));e = [];for (t in g) {
              g[t] && e.push(g[t]);
            }
          }return e;
        }, this.addEventListener = function (e, t) {
          V.debug("RTCPeerConnection.addEventListener(): " + e), "function" != typeof t ? V.error("RTCPeerConnection.addEventListener(): The listener handler is invalid.") : "string" != typeof e ? V.error("RTCPeerConnection.addEventListener(): The event name is invalid.") : (void 0 === l[e] && (l[event] = { listeners: [] }), l[e].listeners.push(t));
        }, this.removeEventListener = function (e, t) {
          V.debug("RTCPeerConnection.removeEventListener(): " + e), void 0 === l[e] ? V.error("RTCPeerConnection.removeEventListener(): Event does not exist = " + e) : l[e].listeners = l[e].listeners.filter(function (e) {
            return e.toString() !== t.toString();
          });
        }, this._onReceiveDataChannelEvent = function (e) {
          var t;void 0 === e.shimId ? V.error("RTCPeerConnection._onReceiveDataChannelEvent: missing shimId") : ((t = e.shimId) == w && e.channel && void 0 !== e.channel.id && (V.debug("Try to find mapped " + e.channel.id + " in:" + JSON.stringify(u._dataChannelIdToShimIdMap)), void 0 !== u._dataChannelIdToShimIdMap[e.channel.id] && (t = u._dataChannelIdToShimIdMap[e.channel.id], V.debug("RTCPeerConnection._onReceiveDataChannelEvent: use mapped shimId: " + t))), t != w && u._dataChannelMap[t] ? u._dataChannelMap[t]._onReceiveEvent(e) : V.error("RTCPeerConnection._onReceiveDataChannelEvent: dataChannle " + t + " not existed"));
        }, this._onReceiveEvent = function (e) {
          if (void 0 === e || void 0 === e.evt) V.error("_onReceiveEvent(): evt property is invalid.");else {
            var t = { type: e.evt, target: this };switch (e.details && this._updateVars(e.details), e.evt) {case "connectionstatechange":
                this.onconnectionstatechange && this.onconnectionstatechange(t);break;case "negotiationneeded":
                this.onnegotiationneeded && this.onnegotiationneeded(t);break;case "icecandidate":
                t.candidate = e.candidate, this.onicecandidate && this.onicecandidate(t);break;case "icegatheringstatechange":
                this.onicegatheringstatechange && this.onicegatheringstatechange(t);break;case "iceconnectionstatechange":
                this.oniceconnectionstatechange && this.oniceconnectionstatechange(t);break;case "signalingstatechange":
                this.onsignalingstatechange && this.onsignalingstatechange(t);break;case "ondatachannel":
                e.channel ? this.ondatachannel && (r = ++ae, o = new _e(u.id, r), void 0 !== e.channel.id && (V.debug("ondatachannel shimId: " + e.channel.id + " mapped to " + r), u._dataChannelIdToShimIdMap[e.channel.id] = r), (u._dataChannelMap[r] = o)._updateChannel(e.channel), t.channel = o, V.debug("ondatachannel shimId: " + r + " channel:" + JSON.stringify(e.channel)), this.ondatachannel(t)) : V.warn("ondatachannel from legacy client");break;case "addStream":
                void 0 === e.stream ? V.debug("_onReceiveEvent(): stream property is invalid.") : (t.stream = new x(), t.stream._create(e.stream, e.peer), this._remoteStreams.push(t.stream), this.onaddstream && this.onaddstream(t));break;case "removeStream":
                void 0 === e.stream ? V.debug("_onReceiveEvent(): stream property is invalid.") : (t.stream = se[e.stream], void 0 === t.stream ? V.debug("_onReceiveEvent(): no stream found.") : (-1 != (o = this._remoteStreams.indexOf(t.stream)) && (e.trackId && t.stream.removeTrackById(e.trackId), this._remoteStreams.splice(o, 1)), this.onremovestream && this.onremovestream(t)));break;case "ontrack":
                void 0 === e.transceiver || void 0 === e.stream ? V.error("_onReceiveEvent ontrack property is invalid") : (n = e.transceiver.id, (i = f[n]) || (V.debug("ontrack: add transceiver id=" + n), (i = new F(u)).initId(n), f[n] = i), i.update(e.transceiver), (r = new x())._create(e.stream, e.peer), this._remoteStreams.push(r), t.transceiver = i, t.receiver = i.receiver, t.streams = [r], t.track = r.track[0], this.ontrack && this.ontrack(t));break;case "tonechange":
                var n,
                    i,
                    r,
                    o = null;(o = v ? (n = e.transceiverId, (r = (i = f ? f[n] : null) ? i.sender : null) ? r.dtmf : null) : de[e.tid]) ? o.ontonechange && o.ontonechange(e) : V.debug("_onReceiveEvent(): tonechange, dtmfId is invalid  or not found.");break;case "onreceivers":
                (n = e.receivers) && n.forEach(function (e) {
                  var t, n;e.id && (t = e.id, "-" === e.op ? delete g[t] : ("+" === e.op && delete g[t], (n = g[t]) || (n = new W(), g[t] = n), n.update(e)));
                });break;case "onsenders":
                (i = e.senders) && i.forEach(function (e) {
                  var t = h[e.id];t && t.update(e);
                });break;case "ontransceivers":
                p(e.transceivers);}
          }
        }, this._updateVars = function (e) {
          e.iceConnectionState && (this._iceConnectionState = e.iceConnectionState), e.iceGatheringState && (this._iceGatheringState = e.iceGatheringState), e.signalingState && (this._signalingState = e.signalingState), e.connectionState && (this._connectionState = e.connectionState), e.localDescription && (this._localDescription = e.localDescription), e.remoteDescription && (this._remoteDescription = e.remoteDescription);
        };
      }function be() {
        this.reports = [], this.result = function () {
          return this.reports;
        }, this._create = function (e) {
          var n = this;e.forEach(function (e) {
            var t = new we();t._create(e), n.reports.push(t);
          });
        };
      }function Se() {
        this.canInsertDTMF = !0;var r = void 0,
            o = null,
            t = "",
            a = null,
            s = null;this.initPlanB = function (e, t) {
          r = e, o = t;
        }, this.initUnifiedPlan = function (e, t, n, i) {
          t && n ? (r = e, o = i, a = t, s = n) : V.error("RTCDTMFSender.initUnifiedPlan: invalid transceiver or sender");
        }, Object.defineProperty(this, "toneBuffer", { get: function get() {
            return V.debug("get DTMF tone buffer" + t), t;
          }, set: function set(e) {
            void 0 === e && V.warn("Set RTCDTMFSender.toneBuffer to undefined."), V.debug("set DTMF tone buffer" + e), t = e;
          }, configurable: !0 }), this.insertDTMF = function (e, t, n) {
          V.debug("insertDTMF audio tones: " + e), void 0 === t && (V.debug("Duration is not set, use default"), t = f.DURATION), void 0 === n && (V.debug("Gap is not set, use default"), n = f.INTERTONEGAP), O.send({ cmd: "insertDTMF", transceiverId: a ? a.id : "", senderId: s ? s.id : "", tid: o.id, tones: e, duration: t, gap: n }, r);
        };
      }function F(e) {
        function t(e) {
          V.info(e + "(" + i + ")");
        }var i,
            r = this,
            o = e,
            n = "inactive",
            a = "inactive",
            s = null,
            d = !1,
            c = null,
            u = null;this.initId = function (e) {
          i = e, (c = new U(o)).initUnifiedPlan(r, null), u = new W();
        }, this.initTrackOrKind = function (e, t) {
          var e = e instanceof L ? e.kind : e,
              n = "";"audio" === e ? n = "A" : "video" === e && (n = "V"), i = "Transceiver#" + n + oe.toString(), oe++, (c = new U(o)).initUnifiedPlan(r, t), u = new W(), t && t.direction && (a = t.direction), t && t.stream && V.debug("RTCRtpTransceiver.init with stream is not implemented.");
        }, this.update = function (e) {
          e.currentDirection && (n = e.currentDirection), e.direction && (a = e.direction), e.mid && (s = e.mid), void 0 !== e.stopped && (d = e.stopped), e.sender && c && c.update(e.sender), e.receiver && u && u.update(e.receiver);
        }, Object.defineProperty(this, "id", { get: function get() {
            return i;
          }, configurable: !0 }), Object.defineProperty(this, "mid", { get: function get() {
            return t("RTCRtpTransceiver.mid=" + s), s;
          } }), Object.defineProperty(this, "currentDirection", { get: function get() {
            return t("RTCRtpTransceiver.currentDirection"), n;
          }, configurable: !0 }), Object.defineProperty(this, "direction", { get: function get() {
            return t("RTCRtpTransceiver.direction=" + a), a;
          }, set: function set(e) {
            t("RTCRtpTransceiver.direction setter"), a = e;e = { cmd: "transceiverCmd", transceiverCmd: y.TRANSCEIVER_SET_DIRECTION, hint: "RTCRtpTransceiver.direction", transceiverId: i, value: e };O.send(e, o.id);
          }, configurable: !0 }), Object.defineProperty(this, "receiver", { get: function get() {
            return t("RTCRtpTransceiver.receiver"), u;
          }, configurable: !0 }), Object.defineProperty(this, "sender", { get: function get() {
            return t("RTCRtpTransceiver.sender"), c;
          }, configurable: !0 }), Object.defineProperty(this, "stopped", { get: function get() {
            return t("RTCRtpTransceiver stopped"), d;
          }, set: function set(e) {
            t("RTCRtpTransceiver stopped setter"), d = e;
          }, configurable: !0 }), this.setCodecPreferences = function (e) {
          t("RTCRtpTransceiver setCodecPreferences"), O.send({ cmd: "transceiverCmd", transceiverCmd: y.TRANSCEIVER_SET_CODECPREFERENCE, hint: "RTCRtpTransceiver.setCodecPreference", transceiverId: i, codecs: e }, o.id, function (e) {
            void 0 !== e.error && t("RTCRtpTransceiver.setCodecPreferences failed.");
          });
        }, this.stop = function () {
          t("RTCRtpTransceiver stop"), O.send({ cmd: "transceiverCmd", transceiverCmd: y.TRANSCEIVER_STOP, hint: "RTCRtpTransceiver.stop", transceiverId: i }, o.id, function (e) {
            void 0 !== e.error && t("RTCRtpTransceiver.stop failed.");
          });
        };
      }function ye(t, e) {
        var r = this,
            n = e;this._srcObject = t.srcObject, this._id = i++, this._rawAudio = t, this.sendAudioElement = function () {
          var e = { cmd: "newAudioElement", audioId: this._id };t.setAttribute("data-vdi_audioid", this._id), O.send(e, -1);
        }, Object.defineProperty(t, "srcObject", { get: function get() {
            return r._srcObject;
          }, set: function set(e) {
            void 0 === e && V.warn("Set audio.srcObject to undefined."), V.debug("Setting srcObject for audio element: " + r._id), V.debug(e), r._srcObject = void 0 === e ? null : e, r.sendSrcObject();
          }, configurable: !0 }), this.sendSrcObject = function () {
          var e = this._srcObject ? this._srcObject.id : "null",
              t = this._srcObject ? this._srcObject.peer : T;O.send({ cmd: "updateSrcObject", mediaStreamId: e, audioId: this._id, type: "audio", streamPeer: t }, -1);
        }, Object.defineProperty(t, "sinkId", { get: function get() {
            return r._sinkId;
          }, set: function set(e) {}, configurable: !0 }), t.setSinkId = function (i) {
          return r._sinkId = i, V.debug("Audio.setSinkId for ID = " + r._id + " Value = " + i), 0 === (void 0 !== M.setSinkId ? M.setSinkId : 0) ? new Promise(function (e, t) {
            O.send({ cmd: "setSinkId", deviceId: i, audioId: r._id, context: "audioElement" }, -1), e();
          }) : new Promise(function (t, n) {
            O.send({ cmd: "setSinkId", deviceId: i, audioId: r._id, context: "audioElement" }, -1, function (e) {
              void 0 === e.error ? t() : n(e.error);
            });
          });
        }, t.play = function () {
          return Promise.resolve();
        }, this.init = function () {
          a(n), this.sendAudioElement(), this._srcObject && (V.debug("srcObject already set for audio: " + this._id), this.sendSrcObject()), V.debug(t);
        }, this.init();
      }function Ce(r, e) {
        var t = this,
            n = e,
            o = pe(e),
            i = !1,
            s = (this._srcObject = r.srcObject, this._videoWidth = r.videoWidth, this._videoHeight = r.videoHeight, this._cloaked = !1, this._id = ne++, this._clientRect = null, this._bodyClientRect = null, this._colorKey = null, this._rawVideo = r, this._removeTimer = null, this._removed = !1, this._objectFit = r.style.objectFit, this._transform, this._dpiServerTranslate = !!M.multiwindow && 0 != (M.multiwindow & ee), this._styleObserver = new MutationObserver(function (e) {
          e.forEach(function (e) {
            t.handleStyleChanges(e, r);
          });
        }), function (e) {
          e = Number(e).toString(16);return e = e.length < 2 ? "0" + e : e;
        });this.sendVideoElement = function () {
          this._colorKey = function () {
            for (var e = ""; "" == e;) {
              var t,
                  n = Math.floor(16 * Math.random()) + 1,
                  i = Math.floor(16 * Math.random()) + 1,
                  r = Math.floor(16 * Math.random()) + 1,
                  e = "#" + s(n) + s(i) + s(r),
                  o = Object.keys(I);for (t in o) {
                var a = I[o[t]];if (a && a._colorKey == e) {
                  e = "";break;
                }
              }
            }return e;
          }();var e,
              t = { cmd: "newVideoElement", videoId: this._id, colorKey: this._colorKey, requestDpiTranslate: this._dpiServerTranslate ? 1 : 0, body: {} };for (e in o && (t.frame = o), this._clientRect) {
            t[e] = this._clientRect[e];
          }for (e in this._bodyClientRect) {
            t.body[e] = this._bodyClientRect[e];
          }"" !== this._objectFit && (t.objectFit = this._objectFit), r.setAttribute("data-vdi_videoid", this._id), r.setAttribute("data-vmw_videoid", this._id), O.send(t, -1);
        }, this.updateVideoElement = function () {
          var e = this.getBoundingClientRect(r),
              t = (this._cloaked || (e.right = e.left, e.bottom = e.top), this.getBoundingClientRect(document.body));if (e.left == this._clientRect.left && e.right == this._clientRect.right && e.top == this._clientRect.top && e.bottom == this._clientRect.bottom && t.left == this._bodyClientRect.left && t.right == this._bodyClientRect.right && t.top == this._bodyClientRect.top && t.bottom == this._bodyClientRect.bottom) return !1;this._clientRect = e, this._bodyClientRect = t;var n,
              i = { cmd: "updateVideoElement", videoId: this._id, requestDpiTranslate: this._dpiServerTranslate ? 1 : 0, transform: r.style.transform, body: {} };for (n in o && (i.frame = o), e) {
            i[n] = e[n];
          }for (n in t) {
            i.body[n] = t[n];
          }"" !== this._objectFit && (i.objectFit = this._objectFit), V.debug(i), O.send(i, -1);
        }, this.removeVideoElement = function () {
          var e = { cmd: "removeVideoElement", videoId: t._id };o && (e.frame = o), V.debug("RemoveVideoElement: " + t._id), O.send(e, -1), delete I[t._id], t._removeTimer = null, t._removed = !0;
        }, this.disposeVideo = function () {
          i = !0;
        }, this.cloak = function () {
          !0 !== this._cloaked && (this._colorKey ? (r.style.backgroundColor = this._colorKey, this._styleObserver.observe(r, { attributes: !0, attributeFilter: ["style"] }), this._cloaked = !0, this._poll = setInterval(function () {
            t.updateVideoElement();
          }, 500)) : V.error("cloak(): Invalid color key."));
        }, this.uncloak = function () {
          if (!1 === this._cloaked) return !1;r.style.backgroundColor = "", this._styleObserver.disconnect(), clearInterval(this._poll), this._cloaked = !1, this.updateVideoElement();
        }, this.getBoundingClientRect = function (e) {
          var e = e.getBoundingClientRect(),
              t = 1;return this._dpiServerTranslate || "number" != typeof window.devicePixelRatio || (t = window.devicePixelRatio), { left: e.left * t, top: e.top * t, bottom: e.bottom * t, right: e.right * t, width: e.width * t, height: e.height * t };
        }, this.onReceiveEvent = function (e) {
          var t;void 0 === e || void 0 === e.evt ? V.error("onReceiveEvent(): evt property is invalid.") : this._rawVideo ? "loadedmetadata" === e.evt && ("" == this._objectFit && "" !== (t = window.getComputedStyle(this._rawVideo).objectFit) && (V.debug("onReceiveEvent(): updating objectfit to " + t), this._objectFit = t, this.sendObjectFit()), void 0 !== e.videoWidth && (this._videoWidth = e.videoWidth), void 0 !== e.videoHeight && (this._videoHeight = e.videoHeight), t = new Event(e.evt), this._rawVideo.dispatchEvent(t)) : V.error("onReceiveEvent(): Invalid rawVideo object.");
        }, this.sendSrcObject = function () {
          var e = this._srcObject ? this._srcObject.id : "null",
              t = this._srcObject ? this._srcObject.peer : T;O.send({ cmd: "updateSrcObject", mediaStreamId: e, videoId: this._id, type: "video", streamPeer: t }, -1), this._srcObject ? this.cloak() : this.uncloak();
        }, this.sendObjectFit = function () {
          O.send({ cmd: "updateObjectFit", videoId: this._id, objectFit: this._objectFit }, -1);
        }, Object.defineProperty(r, "srcObject", { get: function get() {
            return t._srcObject;
          }, set: function set(e) {
            t._removed ? V.warn("Setting srcObject of zombie video element: " + t._id) : (t._removeTimer && (clearTimeout(t._removeTimer), t._removeTimer = null), void 0 === e && V.warn("Set video.srcObject to undefined."), V.debug("Setting srcObject for video element: " + t._id), V.debug(e), t._srcObject = e, t.sendSrcObject(), t._srcObject || (i ? t.removeVideoElement() : (V.debug("srcObject is null, setup removeTimer for " + t._id), t._removeTimer = setTimeout(t.removeVideoElement, 5e3))));
          }, configurable: !0 }), Object.defineProperty(r, "videoWidth", { get: function get() {
            return t._videoWidth;
          }, configurable: !0 }), Object.defineProperty(r, "videoHeight", { get: function get() {
            return t._videoHeight;
          }, configurable: !0 }), Object.defineProperty(r.style, "objectFit", { get: function get() {
            return console.log("keyword defineProperty get objectFit " + t._objectFit), t._objectFit;
          }, set: function set(e) {
            console.log("keyword defineProperty set objectFit " + e), t._objectFit = e, t.sendObjectFit();
          }, configurable: !0 }), Ce.prototype.handleStyleChanges = function (e, t) {
          "attributes" === e.type && "style" === e.attributeName && (V.debug("video style change in id = " + this._id + ", object-fit = " + t.style.objectFit), V.debug(t), this._objectFit !== t.style.objectFit && (V.debug("change in object-fit. Old = " + this._objectFit + ", new = " + t.style.objectFit), this._objectFit = t.style.objectFit, this.sendObjectFit()), this._transform != t.style.transform && (this._transform = t.style.transform, this.updateVideoElement()));
        }, this.init = function () {
          this._clientRect = this.getBoundingClientRect(r), this._bodyClientRect = this.getBoundingClientRect(document.body), a(n), this.sendVideoElement(), this._srcObject && (V.debug("srcObject already set for video: " + this._id), this.sendSrcObject()), V.debug(r);
        }, this.init();
      }function N(e) {
        "function" == typeof ue ? (V.info("onVMEvent(): Fire event = " + JSON.stringify(e)), ue(e)) : V.warn("onVMEvent(): setVMEventCallback is not called yet.");
      }function Re() {
        var a = this,
            o = null,
            s = m,
            R = {},
            d = 0,
            r = null,
            c = !1,
            t = !0,
            n = (Object.defineProperty(this, "state", { get: function get() {
            return s;
          }, configurable: !0 }), Object.defineProperty(this, "shortPollingIntervalMs", { get: function get() {
            return 1e3;
          } }), Object.defineProperty(this, "shortPollingTimeout", { get: function get() {
            return 1e4;
          } }), Object.defineProperty(this, "longPollingIntervalMs", { get: function get() {
            return 5e3;
          } }), Object.defineProperty(this, "isHorizonRegistryPresent", { get: function get() {
            return c;
          }, set: function set(e) {
            c = e;
          }, configurable: !0 }), Object.defineProperty(this, "sendVdiClientEventsOnError", { get: function get() {
            return t;
          }, set: function set(e) {
            t = e;
          }, configurable: !0 }), this.sendLogToWebSocket = function (e, t) {
          return "string" == typeof e && 0 !== e.length && s === S && (h({ cmd: "shimLogToWebSocket", message: e, level: t }, -1), !0);
        }, this.isSocketConnected = function () {
          return s === S;
        }, this.isSocketOpen = function () {
          return !!o && o.readyState === WebSocket.OPEN;
        }, this.init = function () {
          V.info("RequestManager.init(): Initializing Request Manager."), this.startPolling(1e3, 1e4, this.sendEvents);
        }, this.startPolling = function (e, t, n) {
          var i;V.info("RequestManager.startPolling(): stop the old polling timer(if there is any) and start a new one"), a.stopPolling(), s !== m ? V.info("RequestManager.startPolling(): Socket state not disconnected, exiting") : (i = t, V.info("intervalMs " + e + " timeout " + t), r = setInterval(function () {
            a.connectToHorizon(), void 0 !== i && (i -= e, c || a.queryHorizonRegistry()), void 0 !== i && i <= 0 && (a.stopPolling(), n && !0 === c && n());
          }, e));
        }, this.stopPolling = function () {
          null !== r && (clearInterval(r), r = null, V.info("Stopped polling websocket"));
        }, this.sendEvents = function () {
          var e = {},
              e = (e.shimVersion = _, { event: "vdiClientConnected", version: e });try {
            N(e);
          } catch (e) {
            V.warn("Catch exception in onVMEvent()" + JSON.stringify(e));
          }try {
            N({ event: "vdiClientDisconnected", reason: "endpointUnsupported" });
          } catch (e) {
            V.warn("Catch exception in onVMEvent()" + JSON.stringify(e));
          }O.startPolling(5e3);
        }, this.queryHorizonRegistry = function () {
          window.getHorizonClientID().then(function (e) {
            V.info("queryHorizonRegistry(): Horizon Client ID " + e), e && O && (O.isHorizonRegistryPresent = !0, V.info("queryHorizonRegistry(): isHorizonRegistryPresent true"));
          }, function () {
            return V.error("queryHorizonRegistry(): Failed to query Horizon Client ID"), !1;
          });
        }, this.connectToHorizon = function () {
          s === m && window.getHorizonWSSPort().then(function (e) {
            "string" != typeof e || 0 === e.length ? (V.error("connectToHorizon(): Port is not valid"), v("VMware HTML5 Server port not valid")) : (V.info("connectToHorizon(): port is " + e), s = b, (o = new WebSocket("wss://view-localhost:" + e + "/")).binaryType = "arraybuffer", o.onopen = n, o.onclose = i, o.onerror = u, o.onmessage = l);
          }, function () {
            V.error("connectToHorizon(): Failed to receive port number"), v("Failed to receive port number");
          });
        }, function () {
          V.info("onWebSocketOpen(): Websocket opened"), O.stopPolling(), h({ cmd: "createInstance", hwnd: he.hwnd, shimVersion: _, shimMinAgentVersion: 1, customClipRect: 1, allowFeatureChange: 1, supportObjectFit: 1, supportE911: 0, streamBundleWithPeer: 1, appName: B, appType: H }, -1, function (e) {
            if (s != m) {
              e.uid && V.info("onWebSocketOpen(): [" + e.uid + "] createInstanceDone"), "true" === e.traceEnabled && V.updateLogLevel(g.DEBUG, g.DEBUG);var t = ["agentOsVersion", "clientOsVersion", "haVersion", "hcVersion", "shimVersion", "webrtcClientVer", "webRTCRedirAgentVersion", "webRTCRedirClientVersion"],
                  n = {};V.logToConsole = 1 === e.logToConsole, V.debug("VDI Shim: Log to console = " + V.logToConsole);for (var i = 0; i < t.length; i++) {
                e[t[i]] ? (n[t[i]] = e[t[i]], V.debug("onWebSocketOpen(): " + t[i] + " = " + e[t[i]])) : V.warn("onWebSocketOpen(): Could not find property " + t[i]);
              }e.clientOsVersion ? e.clientOsVersion.startsWith("Win") ? n.clientPlatform = "Windows" : e.clientOsVersion.startsWith("Mac") ? n.clientPlatform = "Mac" : e.clientOsVersion.startsWith("Lin") ? n.clientPlatform = "Linux" : (V.error("Unknown client os: " + e.clientOsVersion), n.clientPlatform = "Unknown") : (V.error("Missing client os information."), n.clientPlatform = "Unknown"), V.debug("onWebSocketOpen(): clientPlatform = " + n.clientPlatform);var r = { event: "vdiClientConnected", version: n };if (e.hcId && (r.endpointId = e.hcId, V.debug("onWebSocketOpen(): ClientId = " + e.hcId)), "true" === e.allow && "Windows" === n.clientPlatform) {
                if (s = S, M = e["api-capabilities"] || {}, j = e.rtpCapabilities || {}, Array.isArray(e.featuresSupported)) {
                  if (e.appSessionMode && "true" === e.appSessionMode) {
                    A = !0;for (i = 0; i < e.featuresSupported.length; i++) {
                      "screenshare" !== e.featuresSupported.length[i] && "multimonitorscreenshare" !== e.featuresSupported.length[i] && P.push(e.featuresSupported[i]);
                    }
                  } else P = e.featuresSupported;V.info("onWebSocketOpen(): Supported features = " + JSON.stringify(P));
                } else V.warn("onWebSocketOpen(): featureSupported property not valid");try {
                  N(r);
                } catch (e) {
                  V.warn("Catch exception in onVMEvent()" + JSON.stringify(e));
                }a.invokeDeviceChange();
              } else {
                try {
                  N(r);
                } catch (e) {
                  V.warn("Catch exception in onVMEvent()" + JSON.stringify(e));
                }for (var o = "", t = ["errorCode", "errorMsg"], i = 0; i < t.length; i++) {
                  void 0 !== e[t[i]] ? (V.debug("onWebSocketOpen(): " + t[i] + ": " + e[t[i]]), o += t[i] + " = " + e[t[i]], i != t.length - 1 && (o += "; ")) : V.warn("onWebSocketOpen(): Could not find property " + t[i]);
                }try {
                  N({ event: "vdiClientDisconnected", reason: "endpointUnsupported", msg: o });
                } catch (e) {
                  V.warn("Catch exception in onVMEvent()" + JSON.stringify(e));
                }v("VMware HTML5 Server connection not allowed");
              }
            }
          });
        }),
            i = function i() {
          V.info("onWebSocketClose(): Websocket closed"), v("VMware HTML5 Server connection closed");
        },
            u = function u(e) {
          V.debug("onWebSocketError(): Websocket error");var t = m;O && (t = O.state), v("VMware HTML5 Server connection error: " + e.message), t == b && (V.debug("Error in connecting socket"), O && O.sendVdiClientEventsOnError && (V.error("Error in connecting to websocket"), O.stopPolling(), O.sendEvents(), O.sendVdiClientEventsOnError = !1));
        },
            l = function l(e) {
          if ("object" == (0, _typeof3.default)(e.data)) {
            var t = new Uint8Array(e.data),
                n = new DataView(e.data),
                i = n.getInt32(0),
                r = n.getInt32(36);if (1396920910 != i) V.warn("Unsupport binary data: " + i.toString(16));else {
              M.getScreens && M.getScreens & $ && V.warn("New client should return string for getScreen.");for (var o = 40, a = []; o + 12 < t.length;) {
                var s = n.getInt32(o),
                    d = (p = n.getInt32(o + 4)) * (g = n.getInt32(o + 8)) * 4;if (p < 0 || g < 0 || o + 12 + d > t.length) {
                  V.warn("Invalid screen " + p + "X" + g + " offs:" + o + " size:" + d + " len:" + t.length);break;
                }o += 12;var c = new Uint8ClampedArray(t.buffer, o, d),
                    u = new ImageData(c, p, g),
                    l = new Te(s, "Screen " + s, u);o += d, a.push(l), V.debug("Screen:" + s + ": " + p + "X" + g + " offs:" + o + " size:" + d + " len:" + t.length);
              }var h = R[r];delete R[r], void 0 !== h && "function" == typeof h.responseCb && h.responseCb(a);
            }
          } else if ("string" != typeof e.data) V.error("onWebSocketMessage(): invalid data type: " + (0, _typeof3.default)(e.data));else {
            var i = e.data,
                f = JSON.parse(i);if (V.logToConsole && console.log("onWebSocketMessage(): " + i), "number" == typeof f.id && 0 < f.id) {
              h = R[f.id];if (delete R[f.id], h && "function" == typeof h.responseCb) if ("getScreens" !== f.evt || f.screens) h.responseCb(f);else if (f.error) h.responseCb(f);else {
                var a = [],
                    v = "number" == typeof f.screens ? f.screens : 1;for (s = 1; s <= v; s++) {
                  for (var p, g, m = 4 * (p = 100) * (g = 100), c = new Uint8ClampedArray(m), b = 0; b < m; b += 4) {
                    c[b] = 81, c[b + 1] = 144, c[b + 2] = 201, c[b + 3] = 255;
                  }u = new ImageData(c, p, g), l = new Te(s, "Screen " + s, u);a.push(l);
                }h.responseCb(a);
              }
            } else if (void 0 === f.evt) V.error("onWebSocketMessage(): evt property is invalid");else switch (f.evt) {case "version":
                void 0 === f.ver ? V.error("onWebSocketMessage(): ver property is invalid.") : V.info("onWebSocketMessage(): version = " + f.ver);break;case "negotiationneeded":case "icecandidate":case "icegatheringstatechange":case "iceconnectionstatechange":case "signalingstatechange":case "connectionstatechange":case "addStream":case "ontrack":case "tonechange":case "onreceivers":case "onsenders":case "ontransceivers":case "ondatachannel":case "removeStream":
                void 0 !== f.peer && void 0 !== k[f.peer] ? k[f.peer]._onReceiveEvent(f) : V.error("onWebSocketMessage(): peerConnection is invalid.");break;case "loadedmetadata":
                void 0 !== f.videoId && void 0 !== I[f.videoId] ? I[f.videoId].onReceiveEvent(f) : V.error("onReceiveCommand(): Invalid context.");break;case "devicechange":
                var S = new Event("devicechange");navigator.mediaDevices.dispatchEvent(S);break;case "vdiScreenTopologyChanged":
                try {
                  N({ event: "vdiScreenTopologyChanged" });
                } catch (e) {
                  V.warn("Catch exception in onVMEvent()" + JSON.stringify(e));
                }break;case "featuresSupportedChanged":
                for (var b in f.features) {
                  var y = f.features[b],
                      C = P.indexOf(y.feature);"+" == y.op && C < 0 ? A && ("screenshare" === y.feature || "multimonitorscreenshare" === y.feature) || P.push(y.feature) : "-" == y.op && 0 <= C && P.splice(C, 1);
                }N({ event: "vdiFeatureSupportedChanged", reason: f.reason || "endpoint changes supported features" });break;case "vdiE911InfoChanged":
                f.event = "vdiE911InfoChanged", N(f);break;case "powerevent":
                S = f.eventData;T(S);break;case "dconopen":case "dconbufferedamountlow":case "dconclosing":case "dconerror":case "dconmessage":case "dconclose":
                void 0 !== f.peer && void 0 !== k[f.peer] ? k[f.peer]._onReceiveDataChannelEvent(f) : V.error("Datachannel event: peerConnection is invalid.");}
          }
        },
            h = function h(e, t, n, i) {
          var r;t = null == t ? -1 : t, void 0 === e ? (r = new DOMException("Invalid command, operation cancelled", "OperationError"), n ? n({ error: r }) : V.error(r)) : -1 === t || k[t] ? (e.feature = 3, e.commandId = p[e.cmd], e.id = ++d, e.peer = t, e.browser = "electron", e.player = 1, "createInstance" === e.cmd && (e.uid = 2147483647 & Date.now(), V.info("sendHelper(): [" + e.uid + "] createInstance")), "createInstance" !== e.cmd && s !== S || (n && (i ? n() : R[e.id] = { id: e.id, webCommandId: e.commandId, responseCb: n }), o.send(JSON.stringify(e)))) : (r = new DOMException("peer Id is not found, operation cancelled", "OperationError"), n ? n({ error: r }) : V.error(r));
        },
            f = (this.send = function (e, t, n, i) {
          "getStats" != e.cmd && V.debug(JSON.stringify(e)), h(e, t, n, i);
        }, this.invokeDeviceChange = function () {
          setTimeout(function () {
            V.info("invokeDeviceChange(): Fire devicechange event");var e = new Event("devicechange");navigator.mediaDevices.dispatchEvent(e);
          }, 0);
        }, this.sendBinary = function (e) {
          s === S ? o.send(e) : V.warn("sendBinary(): WSS is not connected.");
        }, function () {
          var e = Math.random() * Number.MAX_SAFE_INTEGER,
              e = Math.floor(e),
              e = "v=0\no=- " + String(e) + " 2 IP4 127.0.0.1\n";return (e += "s=-\n") + "t= 0 0\n" + "a=msid-semantic: WMS";
        }),
            T = function T(e) {
          if (e == Y) try {
            V.info("onPowerEvent(): received suspend"), N({ event: "vdiRequestEndCalls", reason: "vdiClientPowerEventSuspend" });
          } catch (e) {
            V.warn("Catch exception in onVMEvent()" + JSON.stringify(e));
          } else if (e == Q) {
            V.info("onPowerEvent(): received resume");try {
              N({ event: "vdiRequestEndCalls", reason: "vdiClientPowerEventResume" });
            } catch (e) {
              V.warn("Catch exception in onVMEvent()" + JSON.stringify(e));
            }
          } else V.error("powerevent: Invalid param.");
        },
            v = function v(i, e) {
          var t = s;if (s = e ? b : m, Object.keys(R).forEach(function (e) {
            var t,
                n = new DOMException(i, "OperationError");R[e].responseCb ? R[e].webCommandId === p.createOffer || R[e].webCommandId === p.createAnswer ? (t = { desc: { sdp: f() } }, V.debug("Resolving createoffer/createAnswer with desc " + t.desc), R[e].responseCb(t)) : R[e].responseCb({ error: n }) : V.error(n);
          }), R = {}, o && o.readyState === WebSocket.OPEN && s == m && o.close(), o = null, Object.keys(k).forEach(function (e) {
            k[e].cleanUp();
          }), k = {}, Object.keys(E).forEach(function (e) {
            e = E[e];e.onended && e.onended();
          }), E = {}, se = {}, P = [], D = [], ve = {}, A = !(j = {}), t === S) {
            try {
              N({ event: "vdiClientDisconnected", reason: "endpointDisconnected" });
            } catch (e) {
              V.warn("Catch exception in onVMEvent()" + JSON.stringify(e));
            }a.invokeDeviceChange();
          }M = {};
        };
      }function Te(e, t, n, i) {
        var r = this;this.id = e, this.name = t, this.image = n, this.icon = void 0, this.bounds = i || { x: 0, y: 0, width: 0, height: 0 }, this.getId = function () {
          return V.debug("getId " + r.id), r.id;
        }, this.getDeviceId = function () {
          return V.debug("getDeviceId " + r.id), Oe + "-" + r.id;
        }, this.getType = function () {
          return Ie.Monitor;
        }, this.getPreview = function (e, t, n) {
          return V.debug("ScreensAsync getPreview "), new Promise(function (e, t) {
            t();
          });
        }, this.getPreviewAsync = function (e, t, n) {
          return V.debug("ScreensAsync getPreviewAsync"), n ? new Promise(function (e, t) {
            var n = document.createElement("canvas");n.getContext("2d").putImageData(r.image, 0, 0), e({ data: n.toDataURL().replace("data:image/png;base64,", "") });
          }) : new Promise(function (e, t) {
            e(r.image);
          });
        }, this.getDescription = function () {
          return V.debug("ScreensAsync getDescription "), r.name;
        }, this.getIcon = function (e, t) {
          return V.debug("ScreensAsync getIcon"), new Promise(function (e, t) {
            e(r.image);
          });
        }, this.getAppName = function () {
          return V.warn("getAppName: not support."), null;
        }, this.getBounds = function () {
          return (r.bounds.width <= 0 || r.bounds.height <= 0) && V.warn("getBounds: invalid bounds."), r.bounds;
        };
      }function _e(e, t) {
        var s = this,
            d = (this.id = w, this.binaryType = "arraybuffer", this.bufferedAmount = 0, this.maxPacketLifeTime = 0, this.maxRetransmits = 0, this.negotiated = !1, this.ordered = !0, this.protocol = "", this.readyState = !1, this.reliable = !0, this.label = "", t),
            c = e,
            n = 0;Object.defineProperty(this, "bufferedAmountLowThreshold", { get: function get() {
            return n;
          }, set: function set(e) {
            void 0 === e && V.warn("RTCDataChannel bufferedAmountLowThreshold value undefined."), s.id != w && O.send({ cmd: "dataChannelCmd", hint: "setBufferAmountLowThreshold", dataChannelCmd: h.SET_BUFFER_AMOUNT_LOW_THRESHOLD, dataChannelId: s.id, shimId: d, label: s.label, threshold: e }, c), n = e;
          }, configurable: !0 }), this._createChannel = function (e, t) {
          s.id == w ? (s.label = e, O.send({ cmd: "dataChannelCmd", hint: "create", label: e, shimId: d, options: t, dataChannelCmd: h.CREATE }, c)) : V.warn("RTCDataChannel.create channel " + s.id + " already existed");
        }, this._updateChannel = function (e) {
          s.id = e.id, s.binaryType = e.binaryType, s.bufferedAmount = e.bufferedAmount, s.maxPacketLifeTime = e.maxPacketLifeTime, s.maxRetransmits = e.maxRetransmits, s.negotiated = e.negotiated, s.ordered = e.ordered, s.protocol = e.protocol, s.readyState = e.readyState, s.reliable = e.reliable, s.label = e.label;
        }, this.send = function (e) {
          if (s.id != w) {
            if (e instanceof Blob) {
              e.arrayBuffer();e.arrayBuffer().then(function (e) {
                for (var t = new Uint8Array(e), n = t.byteLength, i = "", r = 0; r < n; r++) {
                  i += String.fromCharCode(t[r]);
                }O.send({ cmd: "dataChannelCmd", label: s.label, dataChannelId: s.id, shimId: d, dataChannelCmd: h.SEND, hint: "send", data: window.btoa(i), dataType: "binary", dataLen: n }, c);
              });
            } else {
              var t = null,
                  n = 0,
                  i = "binary";if ("string" == typeof e || e instanceof String) t = window.btoa(e), i = "string", n = e.length;else {
                for (var r = new Uint8Array(e), n = r.byteLength, o = "", a = 0; a < n; a++) {
                  o += String.fromCharCode(r[a]);
                }o && (t = window.btoa(o));
              }t ? O.send({ cmd: "dataChannelCmd", label: s.label, dataChannelId: s.id, shimId: d, hint: "send", dataChannelCmd: h.SEND, data: t, dataType: i, dataLen: n }, c) : V.warn("RTCDataChannel.send: Unsupported data format");
            }
          } else V.error("RTCDataChannel.send: invalid datachannel id.");
        }, this.close = function () {
          k[c] ? (O.send({ cmd: "dataChannelCmd", hint: "close", label: s.label, dataChannelId: s.id, shimId: d, dataChannelCmd: h.CLOSE }, c), k[c]._untrackDataChannel(s.id, d)) : V.warn("RTCDataChannel.close: peerconnection is untracked.");
        }, this._onReceiveEvent = function (e) {
          if (void 0 === e || void 0 === e.evt) V.error("_onReceiveEvent(): evt property is invalid.");else {
            var t = { target: this };switch (e.evt) {case "dconopen":
                this.onopen && (this._updateChannel(e.channel), this.onopen(t));break;case "dconbufferedamountlow":
                this.onbufferedamountlow && this.onbufferedamountlow(t);break;case "dconerror":
                this.onerror && this.onerror(t);break;case "dconmessage":
                if (this.onmessage) {
                  if ("string" === e.dataType) t.data = window.atob(e.data);else {
                    var n = window.atob(e.data),
                        i = n.length;t.data = new Uint8Array(i);for (var r = 0; r < i; r++) {
                      t.data[r] = n.charCodeAt(r);
                    }
                  }this.onmessage(t);
                }break;case "dconclose":
                this.onclose && this.onclose(t);}
          }
        };
      }var x = function x(e) {
        var n = this,
            i = {};this._objectId = ++ie, this.id = "", this.peer = T, this.active = !1, this.ended = !1, this.cloned = null, this.track = [], this.createMediaStream = function (e) {
          void 0 === e || Array.isArray(e) ? (this.id = "Stream#" + n._objectId, V.debug("MediaStream.createMediaStream() with " + n.id + "MediaStreamTracks num =" + !(e = e) ? 0 : e.length), this.active = !1, this.track = [], void 0 !== e && e.forEach(function (e) {
            e && e instanceof L && n.track.push(e);
          }), O.send({ cmd: "createMediaStream", sid: n.id, tracks: n.track }, -1)) : V.debug("MediaStream.createMediaStream failed with invalid parameter");
        }, this._create = function (e, t) {
          this.id = e.id, this.peer = t, this.active = e.active, this.track = [], e.track.forEach(function (e) {
            var t = new L();t._create(e), n.track.push(t);
          }), se[this.id] = this;
        }, this.dispatchEvent = function (t) {
          V.debug("MediaStream.dispatchEvent(): " + t.type), void 0 !== i[event.type] && i[event.type].listeners.forEach(function (e) {
            e(t);
          }), "active" === t.type ? this.onactive && this.onactive(t) : "addtrack" === t.type ? this.onaddtrack && this.onaddtrack(t) : "inactive" === t.type ? this.oninactive && this.oninactive(t) : "removetrack" === t.type ? this.onremovetrack && this.onremovetrack(t) : V.debug("MediaStream.dispatchEvent(): Undefined event: ", t.type);
        }, this.addEventListener = function (e, t) {
          V.debug("MediaStream.addEventListener(): " + e), "function" != typeof t ? V.error("MediaStream.addEventListener(): The listener handler is invalid.") : "string" != typeof e ? V.error("MediaStream.addEventListener(): The event name is invalid.") : (void 0 === i[e] && (i[event] = { listeners: [] }), i[e].listeners.push(t));
        }, this.removeEventListener = function (e, t) {
          V.debug("MediaStream.removeEventListener(): " + e), void 0 === i[e] ? V.error("MediaStream.removeEventListener(): Event does not exist = " + e) : i[e].listeners = i[e].listeners.filter(function (e) {
            return e.toString() !== t.toString();
          });
        }, this.addTrack = function (t) {
          V.debug("MediaStream.addTrack(): " + t.id);var n = !1;this.track.forEach(function (e) {
            e.id == t.id && (n = !0);
          }), n || this.track.push(t);
        }, this.removeTrack = function (e) {
          V.debug("MediaStream.removeTrack(): " + e.id);for (var t = 0; t < this.track.length; t++) {
            if (this.track[t].id == e.id) return void this.track.splice(t, 1);
          }
        }, this.removeTrackById = function (e) {
          V.debug("MediaStream.removeTrackById(): " + e);for (var t, n = 0; n < this.track.length; n++) {
            if (this.track[n].id == e) return t = { type: "removetrack", track: this.track[n] }, this.dispatchEvent(t), void this.track.splice(n, 1);
          }
        }, this.getTracks = function () {
          return V.debug("[" + this.id + "]MediaStream.getTracks(): " + this.track.length), V.debug(this.track), this.track;
        }, this.getAudioTracks = function () {
          var t = [];return this.track.forEach(function (e) {
            "audio" == e.kind && t.push(e);
          }), V.debug("MediaStream.getAudioTracks(): Audio tracks = " + t.length), t;
        }, this.getVideoTracks = function () {
          var t = [];return this.track.forEach(function (e) {
            "video" == e.kind && t.push(e);
          }), V.debug("MediaStream.getVideoTracks(): Video tracks = " + t.length), t;
        }, this.getTrackById = function (t) {
          var n = null;return V.debug("MediaStream.getTrackById(): " + t), this.track.forEach(function (e) {
            e.id == t && (n = e);
          }), n;
        }, this.clone = function () {
          if (V.debug("MediaStream.clone(): Clone mediaStream = " + this.id), this.cloned) return V.debug("MediaStream.clone(): Use cached clone: " + this.cloned.id), this.cloned;var e = new x(),
              t = ge(this.id, "StreamCln#", e._objectId),
              n = [];e._create({ id: t, active: this.active, track: [] }, this.peer);for (var i = 0; i < this.track.length; i++) {
            var r = this.track[i]._internalClone();e.track.push(r), n.push({ tid: this.track[i].id, cid: r.id });
          }return O.send({ cmd: "mediaStreamClone", sid: this.id, cid: e.id, streamPeer: this.peer, trackClones: n }, -1), V.debug("MediaStream.clone(): MediaStream cloned = " + e.id + " from = " + this.id), e;
        };
      },
          L = function L() {
        var n = {};this._objectId = ++re, this.remote = !1, this.readonly = !1, this.contentHint = "", this.id = "", this.kind = "", this.label = "", this.muted = !1, this.readyState = "", this._enabled = !1, Object.defineProperty(this, "enabled", { get: function get() {
            return this._enabled;
          }, set: function set(e) {
            void 0 === (this._enabled = e) && V.warn("Set MediaStreamTrack.enabled to undefined."), O.send({ cmd: "trackEnabled", trackId: this.id, enabled: e }, -1);
          }, configurable: !0 }), this._create = function (e) {
          this._update(e), E[this.id] = this;
        }, this._update = function (e) {
          e && (this.contentHint = e.contentHint, this.id = e.id, this.kind = e.kind, this.label = e.label, this._enabled = e.enabled, this.muted = e.muted, this.readyState = e.readyState, this.remote = e.remote, this.readonly = e.readonly, this.settings = e.settings);
        }, this.dispatchEvent = function (e) {
          "started" == e.type ? this.onstarted && this.onstarted(e) : "ended" == e.type ? this.onended && this.onended(e) : "isolationchange" == e.type ? this.onisolationchange && this.onisolationchange(e) : "mute" == e.type ? this.onmute && this.onmute(e) : "unmute" == e.type ? this.onunmute && this.onunmute(e) : "overconstrained" == e.type ? this.onoverconstrained && this.onoverconstrained(e) : V.debug("Undefined media track evt: ", e.type);
        }, this.addEventListener = function (e, t) {
          V.debug("MediaStreamTrack.addEventListener(): " + e), "function" != typeof t ? V.error("MediaStreamTrack.addEventListener(): The listener handler is invalid.") : "string" != typeof e ? V.error("MediaStreamTrack.addEventListener(): The event name is invalid.") : (void 0 === n[e] && (n[event] = { listeners: [] }), n[e].listeners.push(t));
        }, this.removeEventListener = function (e, t) {
          V.debug("MediaStreamTrack.removeEventListener(): " + e), void 0 === n[e] ? V.error("MediaStreamTrack.removeEventListener(): Event does not exist = " + e) : n[e].listeners = n[e].listeners.filter(function (e) {
            return e.toString() !== t.toString();
          });
        }, this.applyConstraints = function (e) {
          var r = this.id,
              o = this.settings;return V.debug("MediaStreamTrack.applyConstraints()"), new Promise(function (t, n) {
            var i = new DOMException("applyConstraints failed", "OperationError");O.send({ cmd: "applyConstraints", constraints: e, trkid: r }, -1, function (e) {
              void 0 === e.error ? (void 0 !== e.settings.width && void 0 !== e.settings.height && (o.width = e.settings.width, o.height = e.settings.height), t()) : n(i);
            });
          });
        }, this.getConstraints = function () {
          V.debug("MediaStreamTrack.getConstraints(): Not implemented");
        }, this.getCapabilities = function () {
          V.debug("MediaStreamTrack.getCapabilities(): Not implemented");
        }, this.getSettings = function () {
          return V.debug("MediaStreamTrack.getSettings(): " + JSON.stringify(this.settings)), this.settings;
        }, this.stop = function () {
          O.send({ cmd: "mediaTrkStop", trkid: this.id });
        }, this._internalClone = function () {
          var e = new L(),
              t = ge(this.id, "TrackCln#", e._objectId);return e._create({ id: t, kind: this.kind, label: this.label, enabled: this.enabled, muted: this.muted, readyState: this.readyState, remoate: this.remote, readonly: this.readonly, settings: this.settings }), e;
        }, this.clone = function () {
          var e = this._internalClone();return O.send({ cmd: "mediaTrackClone", tid: this.id, cid: e.id }, -1), e;
        };
      },
          we = function we() {
        this.stats = {}, this._create = function (e) {
          this.stats = e, this.type = e.type, this.id = e.id, this.timestamp = e.timestamp, delete this.stats.type, delete this.stats.id, delete this.stats.timestamp;
        }, this.names = function () {
          return Object.keys(this.stats);
        }, this.stat = function (e) {
          return this.stats[e];
        };
      },
          W = function W() {
        function e(e) {
          var t,
              n = [];for (t in r) {
            var i = r[t];i.type && i.type === e && n.push(i);
          }return n;
        }var n = {},
            r = {};this.update = function (e) {
          var t;(t = e) && ("+" === t.op && (n = null, r = {}), t.track && (n ? Object.keys(t.track).forEach(function (e) {
            "enabled" != e ? n[e] = t.track[e] : n._enabled = t.track[e];
          }) : (n = new L())._update(t.track)), t.sources && t.sources.forEach(function (t) {
            var n,
                e = t.source;"-" === t.op ? delete r[e] : ("+" === t.op && (delete r[e], r[e] = {}), n = r[e], Object.keys(t).forEach(function (e) {
              n[e] = t[e];
            }));
          }));
        }, Object.defineProperty(this, "track", { get: function get() {
            return n;
          }, configurable: !0 }), this.getContributingSources = function () {
          return e(v);
        }, this.getSynchronizationSources = function () {
          return e(o);
        };
      },
          U = (W.getCapabilities = function (e) {
        if (V.info("RTCRtpReceiver.getCapabilities for kind = " + e), j.receiver && j.receiver[e]) return j.receiver[e];
      }, function (e) {
        var i = this,
            n = !1,
            r = (this._cap = M.sender || 0, e),
            o = null,
            a = null,
            t = l,
            s = "",
            d = null,
            c = null,
            u = null;this.initPlanB = function (e, t) {
          V.debug("RtcRtpSender.initPlanB"), n = !1, o = t, s = e ? e.id : "", a = e, d = new ke(i);
        }, this.initUnifiedPlan = function (e, t) {
          e ? (n = !0, c = e, d = new ke(i), t && t.sendEncodings) : V.error("RTCRtpSender.initUnifiedPlan: Invalid transceiver");
        }, Object.defineProperty(this, "dtmf", { get: function get() {
            return n ? (u || (u = new Se()).initUnifiedPlan(r.id, c, this, a), u) : r ? r.createDTMFSender(a) : null;
          }, configurable: !0 }), Object.defineProperty(this, "rtcpTransport", { get: function get() {
            V.debug("RTCRtpSender.rtcpTransport getter: Not implemented");
          }, configurable: !0 }), Object.defineProperty(this, "track", { get: function get() {
            return V.debug("RTCRtpSender.track Transceiver=" + (c ? c.id : "") + ")"), a;
          }, configurable: !0 }), Object.defineProperty(this, "transport", { get: function get() {
            V.debug("RTCRtpSender.transport getter: Not implemented");
          }, configurable: !0 }), Object.defineProperty(this, "id", { get: function get() {
            return V.debug("RTCRtpSender.id:" + s), s;
          }, configurable: !0 }), Object.defineProperty(this, "proxyState", { get: function get() {
            return t;
          }, configurable: !0 }), this.setTrack = function (e, t) {
          a = e, o = t;
        }, this.removeTrack = function () {
          a ? r ? (O.send({ cmd: "removeTrack", transceiverId: c ? c.id : "", senderId: s }, r.id), a = d = null) : V.error("RTCRtpSender.removeTrack: invalid peer object.") : V.error("RTCRtpSender.removeTrack: track is already removed.");
        }, this.update = function (e) {
          if (r) {
            if (e) {
              if (c) e.id ? s = e.id : V.error("RTCRtpSender.update invalid id");else if (s != e.id || !d) return void V.error("RTCRtpSender.update Invalid state detected, self = " + JSON.stringify(i));e.track && a && a._update(e.track), e.parameters && d && d.update(e.parameters), t = q;
            } else V.error("RTCRtpSender.update: invalid sender object.");
          } else V.error("RTCRtpSender.update: invalid peer object.");
        }, this.getParameters = function () {
          return V.debug("RTCRtpSender.getParameters"), r ? (t === l && V.warn("RTCRtpSender.getParameters without peer, use cached value and the behavior will be undefined."), d) : (V.error("RTCRtpSender.getParameters: invalid peer object."), null);
        }, this.setParameters = function (e) {
          return V.debug("RTCRtpSender.setParameters"), new Promise(function (n, i) {
            r ? O.send({ cmd: "senderCmd", senderCmd: z, hint: "setParameter", transceiverId: c ? c.id : "", senderId: s, parameters: e.modifiedValues() }, r.id, function (e) {
              var t;void 0 === e.error ? (t = Array.isArray(e.senders) && 0 < e.senders.length ? e.senders[0] : null) && t.id == s ? (d.update(t.parameters), n()) : (V.debug("RTCRtpSender.setParameters invaild response."), t = new DOMException("setParameters failed", "OperationError"), i(t)) : i(e.error);
            }) : i(new DOMException("RTCRtpSender.setParameters: invalid peer object", "OperationError"));
          });
        }, this.getStats = function () {
          V.debug("RTCRtpSender.getStats: Not implemented");
        }, this.replaceTrack = function (e) {
          return V.debug("RTCRtpSender.replaceTrack"), new Promise(function (t, n) {
            r ? (O.send({ cmd: "senderCmd", senderCmd: J, hint: "replaceTrack", transceiverId: c ? c.id : "", senderId: s, sid: o ? o.id : "", trackId: a ? a.id : "", newTrackId: e ? e.id : "" }, r.id, function (e) {
              void 0 === e.error ? t() : n(e.error);
            }), a = e, d = new ke(i)) : n(new DOMException("RTCRtpSender.replaceTrack no peer", "OperationError"));
          });
        };
      }),
          ke = (U.getCapabilities = function (e) {
        if (V.info("RTCRtpSender.getCapabilities for kind = " + e), j.sender && j.sender[e]) return j.sender[e];
      }, function (t) {
        function e(e) {
          t && t.proxyState != l ? V.debug("RTCRtpSendParameters." + e) : V.warn("RTCRtpSendParameters." + e + ": sender is pending.");
        }var n,
            i,
            r,
            o = [],
            a = 0;o[0] = new Ee();Object.defineProperty(this, "degradationPreference", { get: function get() {
            return e("degradationPreference getter"), n;
          }, set: function set(e) {
            n = e, a |= s;
          }, configurable: !0 }), Object.defineProperty(this, "encodings", { get: function get() {
            return e("encodings getter"), o;
          }, set: function set(e) {
            o = e, a |= X;
          }, configurable: !0 }), Object.defineProperty(this, "priority", { get: function get() {
            return e("priority getter"), i;
          }, set: function set(e) {
            i = e, a |= d;
          }, configurable: !0 }), Object.defineProperty(this, "transactionId", { get: function get() {
            return e("transactionId getter"), r;
          }, set: function set(e) {
            r = e, a |= K;
          }, configurable: !0 }), this.update = function (e) {
          0 == (a & s) && (n = e.degradationPreference), 0 == (a & X) && e.encodings && (o = [], e.encodings.forEach(function (e) {
            var t = new Ee();t.update(e), o.push(t);
          })), 0 == (a & d) && (i = e.priority), 0 == (a & K) && (r = e.transactionId);
        }, this.modifiedValues = function () {
          var e = {},
              t = ((a & s || void 0 !== n) && (e.degradationPreference = n), []);return o.forEach(function (e) {
            e = e.modifiedValues();Object.keys(e).length && t.push(e);
          }), t.length && (e.encodings = t), (a & d || void 0 !== i) && (e.priority = i), a = 0, e;
        };
      }),
          Ee = function Ee() {
        var t,
            n,
            i,
            r,
            o,
            a,
            s,
            d = !0,
            c = 0;Object.defineProperty(this, "active", { get: function get() {
            return d;
          }, set: function set(e) {
            d = e, c |= u.RPF_ACTIVE;
          }, configurable: !0 }), Object.defineProperty(this, "codecPayloadType", { get: function get() {
            return t;
          }, configurable: !0 }), Object.defineProperty(this, "dtx", { get: function get() {
            return n;
          }, set: function set(e) {
            dtx = e, c |= u.RPF_DTX;
          }, configurable: !0 }), Object.defineProperty(this, "maxBitrate", { get: function get() {
            return i;
          }, set: function set(e) {
            i = e, c |= u.RPF_MAXBITRATE;
          }, configurable: !0 }), Object.defineProperty(this, "maxFramerate", { get: function get() {
            return r;
          }, set: function set(e) {
            r = e, c |= u.RPF_MAXFRAMERATE;
          }, configurable: !0 }), Object.defineProperty(this, "ptime", { get: function get() {
            return o;
          }, set: function set(e) {
            o = e, c |= u.RPF_PTIME;
          }, configurable: !0 }), Object.defineProperty(this, "rid", { get: function get() {
            return a;
          }, set: function set(e) {
            a = e, c |= u.RPF_RID;
          }, configurable: !0 }), Object.defineProperty(this, "scaleResolutionDownBy", { get: function get() {
            return s;
          }, set: function set(e) {
            s = e, c |= u.RPF_SCALE_RESOLUTION_DOWNBY;
          }, configurable: !0 }), this.update = function (e) {
          0 == (c & u.RPF_ACTIVE) && (d = e.active), 0 == (c & u.RPF_CODEPAYLOADTYPE) && (t = e.codecPayloadType), 0 == (c & u.RPF_DTX) && (n = e.dtx), 0 == (c & u.RPF_MAXBITRATE) && (i = e.maxBitrate), 0 == (c & u.RPF_MAXFRAMERATE) && (r = e.maxFramerate), 0 == (c & u.RPF_PTIME_) && (o = e.ptime), 0 == (c & u.RPF_RID) && (a = e.rid), 0 == (c & u.RPF_SCALE_RESOLUTION_DOWNBY) && (s = e.scaleResolutionDownBy);
        }, this.modifiedValues = function () {
          var e = {};return (c & u.RPF_ACTIVE || void 0 !== d) && (e.active = d), (c & u.RPF_CODEPAYLOADTYPE || void 0 !== t) && (e.codecPayloadType = t), (c & u.RPF_DTX || void 0 !== n) && (e.dtx = n), (c & u.RPF_MAXBITRATE || void 0 !== i) && (e.maxBitrate = i), (c & u.RPF_MAXFRAMERATE || void 0 !== r) && (e.maxFramerate = r), (c & u.RPF_PTIME || void 0 !== o) && (e.ptime = o), (c & u.RPF_RID || void 0 !== a) && (e.rid = a), (c & u.RPF_SCALE_RESOLUTION_DOWNBY || void 0 !== s) && (e.scaleResolutionDownBy = s), c = 0, e;
        };
      },
          Ie = { Monitor: 1, Window: 2, Camera: 3 },
          Oe = "VDI_Mon",
          h = { CREATE: 1, SEND: 2, SET_BUFFER_AMOUNT_LOW_THRESHOLD: 3, CLOSE: 4 };return { initSDK: function initSDK(e, t, n) {
          return "function" != typeof n ? (V.error("initSDK(): The event callback function is not valid."), !1) : (V.info("setVMEventCallback(): Set event callback"), ue = n, B = t || "", r = e, V.info("init(): VMware VDI shim version = " + _), window.getWindowReference().then(function (e) {
            V.info("init(): HWND: " + e), he.hwnd = e, (O = new Re()).init();
          }, function (e) {
            V.error("init(): Failed to retrieve window handle: " + e.message);
          }), !0);
        }, newPeerConnection: function newPeerConnection(e, t) {
          if (O) {
            if (O.isSocketConnected()) {
              var n = new me(e);if (M.sender) n.createOffer = n.createOfferV1, n.createAnswer = n.createAnswerV1, n.setRemoteDescription = n.setRemoteDescriptionV1, n.setLocalDescription = n.setLocalDescriptionV1, n.addIceCandidate = n.addIceCandidateV1, n.getStats = n.getStatsV1, n.addTrack = n.addTrackImplV1, n.removeTrack = n.removeTrackImplV1, n.getSenders = n.getSendersImplV1, n.getTransceivers = n.getTranceiversImplV1, n.addTransceiver = n.addTransceiverImplV1;else {
                if (n.isUnifiedPlan()) throw V.error("createPeerConnection failed due to endpoint does not support unified plan"), "endpoint does not support unified plan";n.createOffer = n.createOfferV0, n.createAnswer = n.createAnswerV0, n.setRemoteDescription = n.setRemoteDescriptionV0, n.setLocalDescription = n.setLocalDescriptionV0, n.addIceCandidate = n.addIceCandidateV0, n.getStats = n.getStatsV0;
              }return n.createDataChannel = n.createDataChannelImplV1, k[n.id] = n, O.send({ cmd: "createPeerConnection", arg1: e, arg2: t }, n.id), V.debug("createPeerConnection(): Create peer: " + n.id), n;
            }V.error("createPeerConnection: WebSocket is not in connected state");
          } else V.error("createPeerConnection: gRequestManager is not created yet.");
        }, newMediaStream: function newMediaStream(e) {
          var t = new x();return t.createMediaStream(e), t;
        }, getDisplayMedia: function getDisplayMedia(e) {
          var t;if (O.isSocketConnected()) return A ? (t = new DOMException("getDisplayMedia is not support in App mode", "OperationError"), Promise.reject(t)) : new Promise(function (n, i) {
            V.debug("getDisplayMediaShim(): Constraints = " + JSON.stringify(e)), O.send({ cmd: "getDisplayMediaShim", constraints: e }, -1, function (e) {
              var t;void 0 === e.error ? ((t = new x())._create(e.stream, T), V.debug("getDisplayMediaShim(): Media =" + t.id), n(t)) : i(e.error);
            });
          });V.error("getDisplayMediaShim: WebSocket is not in connected state");
        }, getUserMedia: function getUserMedia(e) {
          if (!O.isSocketConnected()) return Promise.reject({ name: "NotFoundError", message: "WebSocket is not in connected state" });if (void 0 !== e.video && void 0 !== e.video.mandatory && void 0 !== e.video.mandatory.sourceId && void 0 !== fe[e.video.mandatory.sourceId]) {
            var t = 0,
                n = 0,
                i = 0,
                r = !1,
                o = e.video.mandatory.sourceId,
                a = e.video.mandatory.minWidth,
                s = e.video.mandatory.maxWidth,
                d = e.video.mandatory.minHeight,
                c = e.video.mandatory.maxHeight,
                u = e.video.mandatory.maxFrameRate,
                l = a,
                h = d,
                f = { width: 0, height: 0 },
                v = { width: 0, height: 0 },
                o = (fe[o].forEach(function (e) {
              (void 0 === a || e.width >= a) && (void 0 === s || e.width <= s) && (void 0 === d || e.height >= d) && (void 0 === c || e.height <= c) && (void 0 === u || e.fps >= u) ? (e.width * e.height > f.width * f.height && (f = e), l && h && l * e.height == h * e.width && e.width * e.height > v.width * v.height && (v = e)) : (void 0 !== a && e.width >= a || void 0 !== s && e.width >= s) && (r = !0);
            }), 0 < v.width ? v : f);if (o && (t = o.width, n = o.height, i = o.fps), 0 < t && 0 < n && 0 < i) V.debug("Constraints: " + JSON.stringify(e) + " ==> " + t + "x" + n + " @" + i + ":" + (u || "undefined")), u && (e.video.mandatory.origFps = u), e.video.mandatory.maxFrameRate = i, e.video.mandatory.maxWidth = e.video.mandatory.minWidth = t, e.video.mandatory.maxHeight = e.video.mandatory.minHeight = n;else {
              if (!r) return V.debug("getUserMediaShim(): constraints does not match."), void reject({ name: "OverconstrainedError", message: null });V.debug("getUserMediaShim(): low resolution video forward to client.");
            }
          }return new Promise(function (i, r) {
            O.send({ cmd: "getUserMediaShim", constraints: e }, -1, function (e) {
              var t, n;void 0 === e.error ? (t = null, void 0 !== e.clone && ((t = new x())._create(e.clone, T), V.debug("Media cloned:" + t.id)), (n = new x())._create(e.stream, T), n.cloned = t, V.debug("Media:" + n.id), i(n)) : (new DOMException("Abort", "AbortError"), r(e.error));
            });
          });
        }, enumerateDevices: function enumerateDevices() {
          return O.isSocketConnected() ? new Promise(function (e, n) {
            O.send({ cmd: "enumDevices" }, -1, function (t) {
              void 0 === t.error ? (e(t.devices), void 0 !== t.caps && Object.keys(t.caps).forEach(function (e) {
                fe[e] = t.caps[e];
              })) : n("enumDevices cancelled.");
            });
          }) : (V.info("enumerateDevicesShim(): Use fallback mode."), new Promise(function (t, n) {
            ce.call(navigator.mediaDevices).then(function (e) {
              t(e), O.isSocketConnected() && (V.info("enumerateDevicesShim(): [Resolve] Fallback cancelled. Invoke device change."), O.invokeDeviceChange());
            }, function (e) {
              O.isSocketConnected() ? (V.info("enumerateDevicesShim(): [Reject] Fallback cancelled. Invoke device change."), t([]), O.invokeDeviceChange()) : n(e);
            });
          }));
        }, onVideoCreated: function onVideoCreated(e, t) {
          if (O.isSocketConnected()) {
            V.debug("newVideoElement: New video element from app.");for (var n = Object.keys(I), i = 0; i < n.length; i++) {
              var r = n[i];if (I[r]._rawVideo === e) return void V.debug("newVideoElement(): Video already found");
            }t = new Ce(e, t);I[t._id] = t, e._context = t;
          } else V.error("newVideoElement: WebSocket is not in connected state");
        }, onAudioCreated: function onAudioCreated(e, t) {
          if (O.isSocketConnected()) {
            V.debug("newAudioElement(): A new audio element created.");for (var n = Object.keys(le), i = 0; i < n.length; i++) {
              var r = n[i];if (le[r]._rawAudio === e) return void V.debug("newAudioElement(): Audio already found");
            }t = new ye(e, t);le[t._id] = t, e._context = t;
          } else V.error("newAudioElement: WebSocket is not in connected state");
        }, onVideoDisposed: function onVideoDisposed(e, t) {
          e && e._context && e._context.disposeVideo();e = e && e._context ? e._context._id : void 0;V.info("disposeElement video id=" + e);
        }, onAudioDisposed: function onAudioDisposed(e, t) {
          e && e._context && e._context._id;V.info("disposeElement audio id=" + _id);
        }, playRingtone: function playRingtone(e, r, t) {
          var o, a;O.isSocketConnected() ? r ? (e, V.debug("playNotifyAudio(): id = " + e + " src = " + r + " loop = " + t), void 0 === (o = c[e]) && (o = i++, c[e] = o), O.send({ cmd: "notifyAudio", action: "play", src: r, audid: o, loop: t }, -1), (a = new XMLHttpRequest()).open("GET", r, !0), a.responseType = "arraybuffer", a.onreadystatechange = function () {
            var e, t, n, i;a.readyState == XMLHttpRequest.DONE && 200 == a.status ? (e = 16 + a.response.byteLength, (t = new Uint8Array(16))[0] = 65, t[1] = 78, t[2] = 84, t[3] = 70, t[4] = e >> 24 & 255, t[5] = e >> 16 & 255, t[6] = e >> 8 & 255, t[7] = 255 & e, t[8] = o >> 24 & 255, t[9] = o >> 16 & 255, t[10] = o >> 8 & 255, t[11] = 255 & o, n = new Uint8Array(e), i = new Uint8Array(a.response), n.set(t, 0), n.set(i, 16), O.sendBinary(n), V.debug("onreadystatechange(): Send " + e + "bytes")) : V.debug("onreadystatechange(): Download " + r + " status = " + a.status);
          }, a.send()) : V.error("playNotifyAudio(): src cannot be null or undefined") : V.error("playNotifyAudio(): WebSocket is not in connected state");
        }, pauseRingtone: function pauseRingtone(e) {
          var t;O.isSocketConnected() ? (V.debug("pauseNotifyAudio(): id = " + e), void 0 === (t = c[e]) ? V.warn("pauseNotifyAudio(): id = " + e + " did not play yet.") : O.send({ cmd: "notifyAudio", action: "pause", audid: t }, -1)) : V.error("playNotifyAudio: WebSocket is not in connected state");
        }, setVideoClipRegion: function setVideoClipRegion(e, t, n) {
          V.debug("setVideoClipRegion: " + e + ", " + JSON.stringify(t)), O.isSocketConnected() ? (e = { cmd: "customClipRect", op: e ? 0 : 1, clip: JSON.parse(JSON.stringify(t)) }, (t = pe(n)) && (a(n), e.frame = t), O.send(e, -1)) : V.error("setVideoClipRegion: WebSocket is not in connected state.");
        }, getReceiverCapabilities: function getReceiverCapabilities(e) {
          return V.debug("getCapabilitiesShim"), W.getCapabilities(e);
        }, setSinkId: function setSinkId(e, t) {
          var n;O.isSocketConnected() ? (void 0 === (n = c[e]) && (n = i++, c[e] = n), V.debug("setSinkId id = " + n + " srcId = " + e + " Value = " + t), O.send({ cmd: "setSinkId", deviceId: t, audioId: n, srcId: e, context: "global" }, -1, function (e) {})) : V.error("setSinkId: WebSocket is not in connected state");
        }, setPrimarySinkId: function setPrimarySinkId(e) {
          V.debug("setDefaultSinkId = " + e), O.isSocketConnected() ? O.send({ cmd: "setDefaultSinkId", deviceId: e }, -1) : V.error("setDefaultSinkId: WebSocket is not in connected state");
        }, isFeatureSupported: function isFeatureSupported(e) {
          var t;return "string" != typeof e ? (V.debug("isFeatureSupported(): Invalid feature parameter"), !1) : !(!O || O.state !== S) && ("datachannel" === e ? M.datachannel ? 1 == M.datachannel || (V.debug("isFeatureSupported(): disable datachannel by settings."), !1) : (V.debug("isFeatureSupported(): disable datachannel for old client."), !1) : (t = !1, (t = Array.isArray(P) && -1 != P.indexOf(e) ? !0 : t) || V.debug("isFeatureSupported(): Input feature string not supported = " + e), t));
        }, getScreensInfo: function getScreensInfo() {
          var e;if (V.debug("getScreensAsync get called."), O.isSocketConnected()) return A ? (e = new DOMException("getScreensInfo is not support in App mode", "OperationError"), Promise.reject(e)) : new Promise(function (f, v) {
            var e = 0;M.getScreens && M.getScreens & $ && (e = 1), O.send({ cmd: "getScreens", bounds: e }, -1, function (e) {
              if (Array.isArray(e)) f(D = t = e);else if (e.screens && Array.isArray(e.screens)) {
                for (var t = [], n = 0; n < e.screens.length; n++) {
                  var i = e.screens[n].w,
                      r = e.screens[n].h,
                      o = e.screens[n].id,
                      a = e.screens[n].bounds,
                      s = e.screens[n].imageData;if (0 < i && 0 < r && o && a && s) {
                    for (var d = window.atob(s), c = d.length, u = new Uint8ClampedArray(c), l = 0; l < c; l++) {
                      u[l] = d.charCodeAt(l);
                    }s = new ImageData(u, i, r), i = new Te(o, "Screen " + o, s, a);t.push(i), V.debug("Screen:" + o + ":  image size:" + c);
                  } else V.error("Invalid screen data:" + JSON.stringify(e.screens[n]));
                }f(D = t);
              } else {
                var h = e.error && e.error.message ? e.error.message : "Invalid getScreen response";v(new DOMException(h, "OperationError"));
              }
            });
          });V.error("getScreensAsync: WebSocket is not in connected state");
        }, onScreenSelected: function onScreenSelected(e) {
          V.debug("setScreenSharePanelId = " + e + " for getDisplayMedia"), O.isSocketConnected() ? O.send({ cmd: "setScreenId", scrnId: e, numScreens: D.length }, -1) : V.error("setScreenSharePanelId: WebSocket is not in connected state");
        }, onWindowSessionConnected: function onWindowSessionConnected(e) {
          V.info("connectedStateChanged called " + e), O && (O.state === S && O.send({ cmd: "connectedStateChanged", connectionState: !0 === e ? 1 : 0 }, -1), !0 === e ? (O.sendVdiClientEventsOnError = !0, O.startPolling(O.shortPollingIntervalMs, O.shortPollingTimeout, O.sendEvents)) : (O.sendVdiClientEventsOnError = !1, O.isHorizonRegistryPresent = !1, V.info("connectedStateChanged(): isHorizonRegistryPresent false"), O.stopPolling()));
        } };
    });
    
    },{"babel-runtime/helpers/typeof":17}],2:[function(require,module,exports){
    (function (global){(function (){
    //===============================================
    // By using these Developer Materials, you accept and agree to comply with
    // the terms of the Cloud Software Group Developer Terms of Use found here
    // (https://www.cloud.com/legal)
    //===============================================
    
    
    
    var $jscomp={scope:{},getGlobal:function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global?global:e}};$jscomp.global=$jscomp.getGlobal(this);$jscomp.initSymbol=function(){$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol);$jscomp.initSymbol=function(){}};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return"jscomp_symbol_"+e+$jscomp.symbolCounter_++};
    $jscomp.initSymbolIterator=function(){$jscomp.initSymbol();$jscomp.global.Symbol.iterator||($jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));$jscomp.initSymbolIterator=function(){}};$jscomp.makeIterator=function(e){$jscomp.initSymbolIterator();if(e[$jscomp.global.Symbol.iterator])return e[$jscomp.global.Symbol.iterator]();var l=0;return{next:function(){return l==e.length?{done:!0}:{done:!1,value:e[l++]}}}};
    $jscomp.arrayFromIterator=function(e){for(var l,p=[];!(l=e.next()).done;)p.push(l.value);return p};$jscomp.arrayFromIterable=function(e){return e instanceof Array?e:$jscomp.arrayFromIterator($jscomp.makeIterator(e))};
    $jscomp.inherits=function(e,l){function p(){}p.prototype=l.prototype;e.prototype=new p;e.prototype.constructor=e;for(var b in l)if($jscomp.global.Object.defineProperties){var a=$jscomp.global.Object.getOwnPropertyDescriptor(l,b);a&&$jscomp.global.Object.defineProperty(e,b,a)}else e[b]=l[b]};$jscomp.array=$jscomp.array||{};$jscomp.array.done_=function(){return{done:!0,value:void 0}};
    $jscomp.array.arrayIterator_=function(e,l){e instanceof String&&(e=String(e));var p=0;$jscomp.initSymbol();$jscomp.initSymbolIterator();var b={},a=(b.next=function(){if(p<e.length){var b=p++;return{value:l(b,e[b]),done:!1}}a.next=$jscomp.array.done_;return $jscomp.array.done_()},b[Symbol.iterator]=function(){return a},b);return a};
    $jscomp.array.findInternal_=function(e,l,p){e instanceof String&&(e=String(e));for(var b=e.length,a=0;a<b;a++){var c=e[a];if(l.call(p,c,a,e))return{i:a,v:c}}return{i:-1,v:void 0}};
    $jscomp.array.from=function(e,l,p){l=void 0===l?function(a){return a}:l;var b=[];$jscomp.initSymbol();$jscomp.initSymbolIterator();if(e[Symbol.iterator]){$jscomp.initSymbol();$jscomp.initSymbolIterator();e=e[Symbol.iterator]();for(var a;!(a=e.next()).done;)b.push(l.call(p,a.value))}else{a=e.length;for(var c=0;c<a;c++)b.push(l.call(p,e[c]))}return b};$jscomp.array.of=function(e){for(var l=[],p=0;p<arguments.length;++p)l[p-0]=arguments[p];return $jscomp.array.from(l)};
    $jscomp.array.entries=function(){return $jscomp.array.arrayIterator_(this,function(e,l){return[e,l]})};$jscomp.array.entries$install=function(){Array.prototype.entries||(Array.prototype.entries=$jscomp.array.entries)};$jscomp.array.keys=function(){return $jscomp.array.arrayIterator_(this,function(e){return e})};$jscomp.array.keys$install=function(){Array.prototype.keys||(Array.prototype.keys=$jscomp.array.keys)};$jscomp.array.values=function(){return $jscomp.array.arrayIterator_(this,function(e,l){return l})};
    $jscomp.array.values$install=function(){Array.prototype.values||(Array.prototype.values=$jscomp.array.values)};$jscomp.array.copyWithin=function(e,l,p){var b=this.length;e=Number(e);l=Number(l);p=Number(null!=p?p:b);if(e<l)for(p=Math.min(p,b);l<p;)l in this?this[e++]=this[l++]:(delete this[e++],l++);else for(p=Math.min(p,b+l-e),e+=p-l;p>l;)--p in this?this[--e]=this[p]:delete this[e];return this};$jscomp.array.copyWithin$install=function(){Array.prototype.copyWithin||(Array.prototype.copyWithin=$jscomp.array.copyWithin)};
    $jscomp.array.fill=function(e,l,p){null!=p&&e.length||(p=this.length||0);p=Number(p);for(l=Number((void 0===l?0:l)||0);l<p;l++)this[l]=e;return this};$jscomp.array.fill$install=function(){Array.prototype.fill||(Array.prototype.fill=$jscomp.array.fill)};$jscomp.array.find=function(e,l){return $jscomp.array.findInternal_(this,e,l).v};$jscomp.array.find$install=function(){Array.prototype.find||(Array.prototype.find=$jscomp.array.find)};
    $jscomp.array.findIndex=function(e,l){return $jscomp.array.findInternal_(this,e,l).i};$jscomp.array.findIndex$install=function(){Array.prototype.findIndex||(Array.prototype.findIndex=$jscomp.array.findIndex)};$jscomp.Map=function(e){e=void 0===e?[]:e;this.data_={};this.head_=$jscomp.Map.createHead_();this.size=0;if(e){e=$jscomp.makeIterator(e);for(var l=e.next();!l.done;l=e.next())l=l.value,this.set(l[0],l[1])}};
    $jscomp.Map.checkBrowserConformance_=function(){var e=$jscomp.global.Map;if(!e||!e.prototype.entries||!Object.seal)return!1;try{var l=Object.seal({x:4}),p=new e($jscomp.makeIterator([[l,"s"]]));if("s"!=p.get(l)||1!=p.size||p.get({x:4})||p.set({x:4},"t")!=p||2!=p.size)return!1;var b=p.entries(),a=b.next();if(a.done||a.value[0]!=l||"s"!=a.value[1])return!1;a=b.next();return a.done||4!=a.value[0].x||"t"!=a.value[1]||!b.next().done?!1:!0}catch(c){return!1}};
    $jscomp.Map.createHead_=function(){var e={};return e.previous=e.next=e.head=e};$jscomp.Map.getId_=function(e){if(!(e instanceof Object))return String(e);$jscomp.Map.key_ in e||e instanceof Object&&Object.isExtensible&&Object.isExtensible(e)&&$jscomp.Map.defineProperty_(e,$jscomp.Map.key_,++$jscomp.Map.index_);return $jscomp.Map.key_ in e?e[$jscomp.Map.key_]:" "+e};
    $jscomp.Map.prototype.set=function(e,l){var p=this.maybeGetEntry_(e),b=p.id,a=p.list,p=p.entry;a||(a=this.data_[b]=[]);p?p.value=l:(p={next:this.head_,previous:this.head_.previous,head:this.head_,key:e,value:l},a.push(p),this.head_.previous.next=p,this.head_.previous=p,this.size++);return this};
    $jscomp.Map.prototype["delete"]=function(e){var l=this.maybeGetEntry_(e);e=l.id;var p=l.list,b=l.index;return(l=l.entry)&&p?(p.splice(b,1),p.length||delete this.data_[e],l.previous.next=l.next,l.next.previous=l.previous,l.head=null,this.size--,!0):!1};$jscomp.Map.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=$jscomp.Map.createHead_();this.size=0};$jscomp.Map.prototype.has=function(e){return!!this.maybeGetEntry_(e).entry};
    $jscomp.Map.prototype.get=function(e){return(e=this.maybeGetEntry_(e).entry)&&e.value};$jscomp.Map.prototype.maybeGetEntry_=function(e){var l=$jscomp.Map.getId_(e),p=this.data_[l];if(p)for(var b=0;b<p.length;b++){var a=p[b];if(e!==e&&a.key!==a.key||e===a.key)return{id:l,list:p,index:b,entry:a}}return{id:l,list:p,index:-1,entry:void 0}};$jscomp.Map.prototype.entries=function(){return this.iter_(function(e){return[e.key,e.value]})};$jscomp.Map.prototype.keys=function(){return this.iter_(function(e){return e.key})};
    $jscomp.Map.prototype.values=function(){return this.iter_(function(e){return e.value})};$jscomp.Map.prototype.forEach=function(e,l){for(var p=$jscomp.makeIterator(this.entries()),b=p.next();!b.done;b=p.next())b=b.value,e.call(l,b[1],b[0],this)};
    $jscomp.Map.prototype.iter_=function(e){var l=this,p=this.head_;$jscomp.initSymbol();$jscomp.initSymbolIterator();var b={};return b.next=function(){if(p){for(;p.head!=l.head_;)p=p.previous;for(;p.next!=p.head;)return p=p.next,{done:!1,value:e(p)};p=null}return{done:!0,value:void 0}},b[Symbol.iterator]=function(){return this},b};$jscomp.Map.index_=0;$jscomp.Map.defineProperty_=Object.defineProperty?function(e,l,p){Object.defineProperty(e,l,{value:String(p)})}:function(e,l,p){e[l]=String(p)};
    $jscomp.Map.Entry_=function(){};$jscomp.Map.ASSUME_NO_NATIVE=!1;$jscomp.Map$install=function(){$jscomp.initSymbol();$jscomp.initSymbolIterator();!$jscomp.Map.ASSUME_NO_NATIVE&&$jscomp.Map.checkBrowserConformance_()?$jscomp.Map=$jscomp.global.Map:($jscomp.initSymbol(),$jscomp.initSymbolIterator(),$jscomp.Map.prototype[Symbol.iterator]=$jscomp.Map.prototype.entries,$jscomp.initSymbol(),$jscomp.Map.key_=Symbol("map-id-key"));$jscomp.Map$install=function(){}};$jscomp.math=$jscomp.math||{};
    $jscomp.math.clz32=function(e){e=Number(e)>>>0;if(0===e)return 32;var l=0;0===(e&4294901760)&&(e<<=16,l+=16);0===(e&4278190080)&&(e<<=8,l+=8);0===(e&4026531840)&&(e<<=4,l+=4);0===(e&3221225472)&&(e<<=2,l+=2);0===(e&2147483648)&&l++;return l};$jscomp.math.imul=function(e,l){e=Number(e);l=Number(l);var p=e&65535,b=l&65535;return p*b+((e>>>16&65535)*b+p*(l>>>16&65535)<<16>>>0)|0};$jscomp.math.sign=function(e){e=Number(e);return 0===e||isNaN(e)?e:0<e?1:-1};
    $jscomp.math.log10=function(e){return Math.log(e)/Math.LN10};$jscomp.math.log2=function(e){return Math.log(e)/Math.LN2};$jscomp.math.log1p=function(e){e=Number(e);if(.25>e&&-.25<e){for(var l=e,p=1,b=e,a=0,c=1;a!=b;)l*=e,c*=-1,b=(a=b)+c*l/++p;return b}return Math.log(1+e)};$jscomp.math.expm1=function(e){e=Number(e);if(.25>e&&-.25<e){for(var l=e,p=1,b=e,a=0;a!=b;)l*=e/++p,b=(a=b)+l;return b}return Math.exp(e)-1};$jscomp.math.cosh=function(e){e=Number(e);return(Math.exp(e)+Math.exp(-e))/2};
    $jscomp.math.sinh=function(e){e=Number(e);return 0===e?e:(Math.exp(e)-Math.exp(-e))/2};$jscomp.math.tanh=function(e){e=Number(e);if(0===e)return e;var l=Math.exp(2*-Math.abs(e)),l=(1-l)/(1+l);return 0>e?-l:l};$jscomp.math.acosh=function(e){e=Number(e);return Math.log(e+Math.sqrt(e*e-1))};$jscomp.math.asinh=function(e){e=Number(e);if(0===e)return e;var l=Math.log(Math.abs(e)+Math.sqrt(e*e+1));return 0>e?-l:l};
    $jscomp.math.atanh=function(e){e=Number(e);return($jscomp.math.log1p(e)-$jscomp.math.log1p(-e))/2};
    $jscomp.math.hypot=function(e,l,p){for(var b=[],a=2;a<arguments.length;++a)b[a-2]=arguments[a];e=Number(e);l=Number(l);for(var c=Math.max(Math.abs(e),Math.abs(l)),Q=$jscomp.makeIterator(b),a=Q.next();!a.done;a=Q.next())c=Math.max(c,Math.abs(a.value));if(1E100<c||1E-100>c){e/=c;l/=c;Q=e*e+l*l;b=$jscomp.makeIterator(b);for(a=b.next();!a.done;a=b.next())a=a.value,a=Number(a)/c,Q+=a*a;return Math.sqrt(Q)*c}c=e*e+l*l;b=$jscomp.makeIterator(b);for(a=b.next();!a.done;a=b.next())a=a.value,a=Number(a),c+=
    a*a;return Math.sqrt(c)};$jscomp.math.trunc=function(e){e=Number(e);if(isNaN(e)||Infinity===e||-Infinity===e||0===e)return e;var l=Math.floor(Math.abs(e));return 0>e?-l:l};$jscomp.math.cbrt=function(e){if(0===e)return e;e=Number(e);var l=Math.pow(Math.abs(e),1/3);return 0>e?-l:l};$jscomp.number=$jscomp.number||{};$jscomp.number.isFinite=function(e){return"number"!==typeof e?!1:!isNaN(e)&&Infinity!==e&&-Infinity!==e};
    $jscomp.number.isInteger=function(e){return $jscomp.number.isFinite(e)?e===Math.floor(e):!1};$jscomp.number.isNaN=function(e){return"number"===typeof e&&isNaN(e)};$jscomp.number.isSafeInteger=function(e){return $jscomp.number.isInteger(e)&&Math.abs(e)<=$jscomp.number.MAX_SAFE_INTEGER};$jscomp.number.EPSILON=Math.pow(2,-52);$jscomp.number.MAX_SAFE_INTEGER=9007199254740991;$jscomp.number.MIN_SAFE_INTEGER=-9007199254740991;$jscomp.object=$jscomp.object||{};
    $jscomp.object.assign=function(e,l){for(var p=[],b=1;b<arguments.length;++b)p[b-1]=arguments[b];p=$jscomp.makeIterator(p);for(b=p.next();!b.done;b=p.next())if(b=b.value)for(var a in b)Object.prototype.hasOwnProperty.call(b,a)&&(e[a]=b[a]);return e};$jscomp.object.is=function(e,l){return e===l?0!==e||1/e===1/l:e!==e&&l!==l};$jscomp.Set=function(e){e=void 0===e?[]:e;this.map_=new $jscomp.Map;if(e){e=$jscomp.makeIterator(e);for(var l=e.next();!l.done;l=e.next())this.add(l.value)}this.size=this.map_.size};
    $jscomp.Set.checkBrowserConformance_=function(){var e=$jscomp.global.Set;if(!e||!e.prototype.entries||!Object.seal)return!1;var l=Object.seal({x:4}),e=new e($jscomp.makeIterator([l]));if(e.has(l)||1!=e.size||e.add(l)!=e||1!=e.size||e.add({x:4})!=e||2!=e.size)return!1;var e=e.entries(),p=e.next();if(p.done||p.value[0]!=l||p.value[1]!=l)return!1;p=e.next();return p.done||p.value[0]==l||4!=p.value[0].x||p.value[1]!=p.value[0]?!1:e.next().done};
    $jscomp.Set.prototype.add=function(e){this.map_.set(e,e);this.size=this.map_.size;return this};$jscomp.Set.prototype["delete"]=function(e){e=this.map_["delete"](e);this.size=this.map_.size;return e};$jscomp.Set.prototype.clear=function(){this.map_.clear();this.size=0};$jscomp.Set.prototype.has=function(e){return this.map_.has(e)};$jscomp.Set.prototype.entries=function(){return this.map_.entries()};$jscomp.Set.prototype.values=function(){return this.map_.values()};
    $jscomp.Set.prototype.forEach=function(e,l){var p=this;this.map_.forEach(function(b){return e.call(l,b,b,p)})};$jscomp.Set.ASSUME_NO_NATIVE=!1;$jscomp.Set$install=function(){!$jscomp.Set.ASSUME_NO_NATIVE&&$jscomp.Set.checkBrowserConformance_()?$jscomp.Set=$jscomp.global.Set:($jscomp.Map$install(),$jscomp.initSymbol(),$jscomp.initSymbolIterator(),$jscomp.Set.prototype[Symbol.iterator]=$jscomp.Set.prototype.values);$jscomp.Set$install=function(){}};$jscomp.string=$jscomp.string||{};
    $jscomp.string.noRegExp_=function(e,l){if(e instanceof RegExp)throw new TypeError("First argument to String.prototype."+l+" must not be a regular expression");};
    $jscomp.string.fromCodePoint=function(e){for(var l=[],p=0;p<arguments.length;++p)l[p-0]=arguments[p];for(var p="",l=$jscomp.makeIterator(l),b=l.next();!b.done;b=l.next()){b=b.value;b=+b;if(0>b||1114111<b||b!==Math.floor(b))throw new RangeError("invalid_code_point "+b);65535>=b?p+=String.fromCharCode(b):(b-=65536,p+=String.fromCharCode(b>>>10&1023|55296),p+=String.fromCharCode(b&1023|56320))}return p};
    $jscomp.string.repeat=function(e){var l=this.toString();if(0>e||1342177279<e)throw new RangeError("Invalid count value");e|=0;for(var p="";e;)if(e&1&&(p+=l),e>>>=1)l+=l;return p};$jscomp.string.repeat$install=function(){String.prototype.repeat||(String.prototype.repeat=$jscomp.string.repeat)};
    $jscomp.string.codePointAt=function(e){var l=this.toString(),p=l.length;e=Number(e)||0;if(0<=e&&e<p){e|=0;var b=l.charCodeAt(e);if(55296>b||56319<b||e+1===p)return b;e=l.charCodeAt(e+1);return 56320>e||57343<e?b:1024*(b-55296)+e+9216}};$jscomp.string.codePointAt$install=function(){String.prototype.codePointAt||(String.prototype.codePointAt=$jscomp.string.codePointAt)};
    $jscomp.string.includes=function(e,l){l=void 0===l?0:l;$jscomp.string.noRegExp_(e,"includes");return-1!==this.toString().indexOf(e,l)};$jscomp.string.includes$install=function(){String.prototype.includes||(String.prototype.includes=$jscomp.string.includes)};
    $jscomp.string.startsWith=function(e,l){l=void 0===l?0:l;$jscomp.string.noRegExp_(e,"startsWith");var p=this.toString();e+="";for(var b=p.length,a=e.length,c=Math.max(0,Math.min(l|0,p.length)),Q=0;Q<a&&c<b;)if(p[c++]!=e[Q++])return!1;return Q>=a};$jscomp.string.startsWith$install=function(){String.prototype.startsWith||(String.prototype.startsWith=$jscomp.string.startsWith)};
    $jscomp.string.endsWith=function(e,l){$jscomp.string.noRegExp_(e,"endsWith");var p=this.toString();e+="";void 0===l&&(l=p.length);for(var b=Math.max(0,Math.min(l|0,p.length)),a=e.length;0<a&&0<b;)if(p[--b]!=e[--a])return!1;return 0>=a};$jscomp.string.endsWith$install=function(){String.prototype.endsWith||(String.prototype.endsWith=$jscomp.string.endsWith)};
    (function(e,l){"object"===typeof exports&&"object"===typeof module?module.exports=l():"function"===typeof define&&define.amd?define([],l):"object"===typeof exports?exports.CitrixWebRTC=l():e.CitrixWebRTC=l()})(self,function(){return function(){function e(b){var a=p[b];if(void 0!==a)return a.exports;a=p[b]={exports:{}};l[b].call(a.exports,a,a.exports,e);return a.exports}var l={945:function(b,a,c){var e=this&&this.__extends||function(){var a=function(k,v){a=Object.setPrototypeOf||{__proto__:[]}instanceof
    Array&&function(a,g){a.__proto__=g}||function(a,g){for(var k in g)g.hasOwnProperty(k)&&(a[k]=g[k])};return a(k,v)};return function(k,v){function b(){this.constructor=k}a(k,v);k.prototype=null===v?Object.create(v):(b.prototype=v.prototype,new b)}}();Object.defineProperty(a,"__esModule",{value:!0});a.AudioElement=void 0;var u=c(658),h=c(550),d=c(851),w=c(946),q;(function(a){a.Init="Init";a.PlayStarted="PlayStarted";a.PauseCalled="PauseCalled"})(q||(q={}));b=function(a){function k(){var k=a.call(this,
    null,h.class_id_t.AudioElement,0,u.ProxyMode.Local)||this;k.sinkId_="";k.srcObject_=null;k.loop_=!1;k.notiState=q.Init;return k}e(k,a);k.prototype.setSinkId=function(a){var k=this;d.logger.log(this.user_friendly_id()+".setSinkId: set sinkId to "+a);return new Promise(function(g,b){k.waitUntilConnected("AudioElement.sinkId").then(function(){var b=k.remoteInvoke(!0,h.method_id_AudioElement_t.sinkId,a);w.getRedirector().getFeatureValue(h.FEATURE_ms_teams_pstn)||(k.sinkId_=a,g());return b}).then(function(){d.logger.log(k.user_friendly_id()+
    ".setSinkId: success! resolving...");k.sinkId_=a;g()})["catch"](function(a){a=k.logRemoteInvokeError(a,".sinkId setter: failed to connect!");b(a)})})};Object.defineProperty(k.prototype,"sinkId",{get:function(){return this.sinkId_},set:function(a){this.setSinkId(a)},enumerable:!1,configurable:!0});Object.defineProperty(k.prototype,"srcObject",{get:function(){return this.srcObject_},set:function(a){var k=this;d.logger.log(this.user_friendly_id()+".srcObject: set srcObject to "+JSON.stringify(a));a!==
    this.srcObject_&&(this.srcObject_=a,this.waitUntilConnected("AudioElement.srcObject").then(function(){return a.syncBarrier()}).then(function(a){d.logger.log(k.user_friendly_id()+".srcObject: set srcObject to s "+JSON.stringify(a));return k.remoteInvoke(!0,h.method_id_AudioElement_t.srcObject,null!==a&&void 0!==a?a.id:"null")}).then(function(){d.logger.log(k.user_friendly_id()+".srcObject setter: remote success!")})["catch"](function(a){k.logRemoteInvokeError(a,".srcObject setter: failed to connect!")}))},
    enumerable:!1,configurable:!0});Object.defineProperty(k.prototype,"src",{get:function(){return this.src_},set:function(a){var k=this;d.logger.log(this.user_friendly_id()+".src: set src to "+a);this.src_=a;this.waitUntilConnected("AudioElement.src").then(function(){k.remoteInvoke(!0,h.method_id_AudioElement_t.src,a)})["catch"](function(a){k.logRemoteInvokeError(a,".src setter: failed to connect!")})},enumerable:!1,configurable:!0});k.prototype.play=function(){var a=this;d.logger.log(this.user_friendly_id()+
    ".play() called.");this.toggleAudio(!0);return new Promise(function(k,g){a.waitUntilConnected("AudioElement.play").then(function(){return a.remoteInvoke(!1,h.method_id_AudioElement_t.play)}).then(function(){k()})["catch"](function(k){a.logRemoteInvokeError(k,".play: failed to connect!");g(k)})})};k.prototype.playEx=function(a,k,g){var b=this;d.logger.log(this.user_friendly_id()+".playEx() src:"+a+" sinkId:"+k+" loop:"+g);this.notiState=q.PlayStarted;this.waitUntilConnected("AudioElement.playEx").then(function(){var a=
    [];k&&a.push(b.setSinkId(k));void 0!==g&&null!==g&&(b.loop_=g,a.push(b.remoteInvoke(!0,h.method_id_AudioElement_t.loop,g)));return Promise.all(a)}).then(function(){b.src_=a;return b.remoteInvoke(!0,h.method_id_AudioElement_t.src,a)}).then(function(){return b.play()}).then(function(){if(b.notiState==q.PauseCalled)return d.logger.log(b.user_friendly_id()+".playEx() run deferred pause"),b.doPauseAndDispose()}).then(function(){b.notiState=q.Init;d.logger.log(b.user_friendly_id()+".playEx() done")})["catch"](function(a){b.notiState=
    q.Init;b.logRemoteInvokeError(a,".playEx() failed!")})};k.prototype.pause=function(){var a=this;d.logger.log(this.user_friendly_id()+".pause() called.");this.toggleAudio(!1);return new Promise(function(k,g){a.waitUntilConnected("AudioElement.pause").then(function(){return a.remoteInvoke(!1,h.method_id_AudioElement_t.pause)}).then(function(){k()})["catch"](function(k){a.logRemoteInvokeError(k,".pause: failed!");g()})})};k.prototype.doPauseAndDispose=function(){var a=this;d.logger.log(this.user_friendly_id()+
    ".doPauseAndDispose() called.");this.toggleAudio(!1);return new Promise(function(k,g){a.waitUntilConnected("AudioElement.doPauseAndDispose").then(function(){return a.remoteInvoke(!1,h.method_id_AudioElement_t.pause,[])}).then(function(){d.logger.log(a.user_friendly_id()+".doPauseAndDispose() resolving...");k();a.dispose()})["catch"](function(g){a.logRemoteInvokeError(g,".doPauseAndDispose: failed to connect!")})})};k.prototype.pauseAndDispose=function(){this.notiState==q.PlayStarted?(d.logger.log(this.user_friendly_id()+
    ".pauseAndDispose() deferred"),this.notiState=q.PauseCalled):this.doPauseAndDispose()};k.prototype.toggleAudio=function(a){this.srcObject_&&(d.logger.log(this.user_friendly_id()+".toggleAudio() toggle audio tracks:"+a),this.srcObject_.toggleAudio(a))};Object.defineProperty(k.prototype,"loop",{get:function(){return this.loop_},set:function(a){var k=this;d.logger.log(this.user_friendly_id()+".loop: set loop to "+a);this.loop_=a;this.waitUntilConnected("AudioElement.loop").then(function(){k.remoteInvoke(!0,
    h.method_id_AudioElement_t.loop,a)})["catch"](function(a){k.logRemoteInvokeError(a,".loop setter: failed to connect!")})},enumerable:!1,configurable:!0});k.prototype.dispose=function(){d.logger.log(this.user_friendly_id()+".dispose()");this.src_=this.sinkId_="";this.srcObject_=null;this.loop_=!1;this.release()};return k}(u.ProxyObject);a.AudioElement=b},239:function(b,a,c){a.E=void 0;var e=c(945),u=c(851),h=function(){function a(){this.sinkId=void 0;this.src="";this.loop=void 0;this.element=null}
    a.prototype.getSrc=function(){return this.src};a.prototype.setSinkId=function(a){this.sinkId=a};a.prototype.getLoop=function(){return!0===this.loop};a.prototype.setLoop=function(a){this.loop=a};a.prototype.play=function(a){this.element=new e.AudioElement;this.src=a;this.element.playEx(this.src,this.sinkId,this.loop)};a.prototype.pause=function(){this.element&&(this.element.pauseAndDispose(),this.element=null)};a.prototype.release=function(){this.element&&(this.element.dispose(),this.element=null)};
    return a}();b=function(){function a(){this.audioIdMap=null;this.audioIdMap=new Map}a.prototype.getNotificationInfo=function(a){if(this.audioIdMap.has(a))return this.audioIdMap.get(a);var b=new h;this.audioIdMap.set(a,b);return b};a.prototype.playNotifyAudio=function(a,b){b&&(u.logger.log("AudioNotification.playNotifyAudio, Remote to Thin Client audioId:"+a+" src:"+b),this.getNotificationInfo(a).play(b))};a.prototype.pauseNotifyAudio=function(a,b){if(this.audioIdMap.has(a)){var d=this.audioIdMap.get(a);
    b&&b!=d.getSrc()&&u.logger.log("AudioNotification.pauseNotifyAudio warning: for audioId:"+a+", different param src:"+b+" from org src:"+d.getSrc());d.pause()}else u.logger.log("AudioNotification.pauseNotifyAudio no audioId:"+a+" src:"+b)};a.prototype.setSinkId=function(a,b){if(null!=b&&b.startsWith("speaker:")){u.logger.log("AudioNotification.setSinkId before parsing audioId:"+a+" sinkId:"+b);var d=b.slice(8);u.logger.log("AudioNotification.setSinkId after parsing audioId:"+a+" speakersinkId:"+d);
    b=d}this.getNotificationInfo(a).setSinkId(b)};a.prototype.getLoop=function(a){return this.getNotificationInfo(a).getLoop()};a.prototype.setLoop=function(a,b){this.getNotificationInfo(a).setLoop(b)};a.prototype.release=function(){this.audioIdMap.forEach(function(a,b,d){a.release()});this.audioIdMap.clear()};return a}();a.E=b},613:function(b,a,c){var e=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,
    b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])};return a(b,d)};return function(b,d){function k(){this.constructor=b}a(b,d);b.prototype=null===d?Object.create(d):(k.prototype=d.prototype,new k)}}();Object.defineProperty(a,"__esModule",{value:!0});a.E911Service=void 0;var u=c(550),h=c(658),d=c(851);b=function(a){function b(){var d=a.call(this,null,u.class_id_t.E911Service,0,h.ProxyMode.Local)||this;d.preE911Info_=null;return d}e(b,a);b.prototype.isSameInfo=function(a){if(null==this.preE911Info_&&
    null!=a||null!=this.preE911Info_&&null==a||this.preE911Info_.e911.length!=a.e911.length||this.preE911Info_.bssid!=a.bssid||this.preE911Info_.ipv4!=a.ipv4||this.preE911Info_.subnetLengthIpv4!=a.subnetLengthIpv4||this.preE911Info_.ipv6!=a.ipv6||this.preE911Info_.subnetLengthIpv6!=a.subnetLengthIpv6||this.preE911Info_.mac!=a.mac||1E-4<=Math.abs(this.preE911Info_.latitude-a.latitude)||1E-4<=Math.abs(this.preE911Info_.longitude-a.longitude))return!1;for(var k=0;k<a.e911.length;k++)if(this.preE911Info_.e911[k].chassisId!=
    a.e911[k].chassisId||this.preE911Info_.e911[k].portId!=a.e911[k].portId)return!1;return!0};Object.defineProperty(b.prototype,"onupdate",{get:function(){return this.onupdate_},set:function(a){var k=this;this.onupdate_=a;this.waitUntilConnected(this.user_friendly_id()+".onupdate").then(function(){var a=k.registerCallbacks(!1,k.isNullCallback(k.onupdate_),u.method_id_E911Service_t.onupdate);a.then(function(a){a=a.params;var g=a[0];a.slice(1);null!==k.preE911Info_&&k.isSameInfo(g)||(d.logger.log(k.user_friendly_id()+
    ".onupdate",JSON.stringify(g)),k.onupdate_&&k.onupdate_(g),k.preE911Info_=g)});return k.remoteInvoke(!0,u.method_id_E911Service_t.onupdate,a.success)})["catch"](function(){return d.logger.log(k.user_friendly_id()+".onupdate, could not set listener")})},enumerable:!1,configurable:!0});b.prototype.getE911Info=function(){var a=this;return new Promise(function(k,b){a.waitUntilConnected(a.user_friendly_id()+".getE911Info").then(function(){return a.remoteInvoke(!1,u.method_id_E911Service_t.getE911Info)}).then(function(b){d.logger.log(a.user_friendly_id()+
    ".getE911Info",JSON.stringify(a.param0(b)));k(a.param0(b))})["catch"](function(){d.logger.log(a.user_friendly_id()+".getE911Info promise rejected");b()})})};b.prototype.updateE911Info=function(){var a=this;this.getE911Info().then(function(b){return a.onupdate&&a.onupdate(b)})["catch"](function(){return d.logger.log("Fail to get e911 information!")})};return b}(h.ProxyObject);a.E911Service=b},9:function(b,a,c){var e=this&&this.__extends||function(){var a=function(b,k){a=Object.setPrototypeOf||{__proto__:[]}instanceof
    Array&&function(a,b){a.__proto__=b}||function(a,b){for(var g in b)b.hasOwnProperty(g)&&(a[g]=b[g])};return a(b,k)};return function(b,k){function d(){this.constructor=b}a(b,k);b.prototype=null===k?Object.create(k):(d.prototype=k.prototype,new d)}}();Object.defineProperty(a,"__esModule",{value:!0});a.EngineControl=a.VersionType=void 0;var u=c(550),h=c(946),d=c(658),w=c(851);(function(a){a[a.Webrpc=0]="Webrpc";a[a.WebrtcCodecs=1]="WebrtcCodecs";a[a.Receiver=2]="Receiver";a[a.Vda=3]="Vda";a[a.Endpoint=
    4]="Endpoint";a[a.TypeScript=5]="TypeScript";a[a.HdxRtcEngine=6]="HdxRtcEngine";a[a.Max=7]="Max"})(a.VersionType||(a.VersionType={}));b=function(a){function b(k){var c=a.call(this,null,u.class_id_t.EngineControl,0,d.ProxyMode.Local)||this;c.clientInfo_="";c.clientInfo_=k;return c}e(b,a);b.prototype.bind=function(){w.logger.log(this.user_friendly_id()+".bind() called.");this.reconstructor(null,u.class_id_t.EngineControl,0)};b.prototype.syncBarrier=function(){var a=this;w.logger.log(this.user_friendly_id()+
    ".syncBarrier() called.");return new Promise(function(b,d){a.syncBarrierDeep(b,d)&&a.waitUntilConnected("EngineControl.syncBarrier").then(function(){return Promise.all([a.remoteInvoke(!1,u.method_id_EngineControl_t.version,{major:0,minor:0,revision:0,build:0}),a.remoteInvoke(!1,u.method_id_EngineControl_t.feature_flags,[])])}).then(function(b){w.logger.log(a.user_friendly_id()+"received webrpc version and supported feature list.");b=b.map(function(b){return a.param0(b)});a.version_=b[0];a.features_=
    b[1];h.getRedirector().setFeatures(a.features_);a.remoteInvoke(!1,u.method_id_EngineControl_t.set_client_info,(a.clientInfo_||"Unknown")+"; vdiShim/"+u.HDXMS_VERSION,h.getRedirector().sessionClientId)["catch"](function(){return w.logger.log(a.user_friendly_id()+" could not set client info")});b=[];for(var d=0,t=a.features_;d<t.length;d++){var m=t[d];"ms_teams_desktop_sharing"===m.name&&m.value?b.push(a.remoteInvoke(!1,u.method_id_EngineControl_t.version_info,[])):"ms_teams_osinfo"===m.name&&m.value?
    b.push(a.remoteInvoke(!1,u.method_id_EngineControl_t.osinfo,{family:"",version:"",architecture:"",distro:"",edition:""})):"ms_teams_endpoint_id"===m.name&&m.value?b.push(a.remoteInvoke(!1,u.method_id_EngineControl_t.endpoint_id,{machine_id:"",user_id:""})):"ms_teams_hardware_info"===m.name&&m.value&&b.push(a.remoteInvoke(!1,u.method_id_EngineControl_t.hardware_info))}if(0<b.length)return Promise.all(b)}).then(function(b){if(void 0===b)w.logger.log(a.user_friendly_id()+"release-1905 client.");else{w.logger.log(a.user_friendly_id()+
    "release-1906 or later client: received detailed client version list.");for(var d=0;d<b.length;d++){var t=b[d];t.hdr.proc.iid==u.class_id_t.EngineControl&&t.hdr.proc.methodid==u.method_id_EngineControl_t.version_info?a.versions_=a.param0(t):t.hdr.proc.iid==u.class_id_t.EngineControl&&t.hdr.proc.methodid==u.method_id_EngineControl_t.osinfo?a.osinfo_=a.param0(t):t.hdr.proc.iid==u.class_id_t.EngineControl&&t.hdr.proc.methodid==u.method_id_EngineControl_t.endpoint_id?a.endpointid_=a.param0(t):t.hdr.proc.iid==
    u.class_id_t.EngineControl&&t.hdr.proc.methodid==u.method_id_EngineControl_t.hardware_info&&(a.hardwareinfo_=a.param0(t))}}a.syncBarrierResolve(a)})["catch"](function(b){b=a.logRemoteInvokeError(b,"failure to retrieve version/feature related client info.");a.syncBarrierReject(b)})})};return b}(d.ProxyObject);a.EngineControl=b},368:function(b,a,c){Object.defineProperty(a,"__esModule",{value:!0});a.Frames=a.FrameTracker=void 0;var e=c(851),u=c(946),h=c(679),d=function(){return function(a,b){this.resolve=
    a;this.reject=b}}(),w=function(){function a(){this.name="overlay";this.reqs_=[];u.getRedirector().addProtocolHandler(this)}a.prototype.init=function(a){};a.prototype.reset=function(){this.reqs_.forEach(function(a,b){a.reject()});this.reqs_=[]};a.prototype.on_message=function(a){var b=this;e.logger.log("HDXMS: Overlay <<< "+JSON.stringify(a));if("capabilities"==a.command)new Promise(function(a,k){b.reqs_.push(new d(a,k));u.getRedirector().WSSendObject({v:"overlay",command:"configure",caps:[]})});else{var c=
    this.reqs_.shift();void 0!=c?1==a.status&&("track_window"==a.command?c.resolve(a.windowId):"untrack_window"==a.command?c.resolve(a.windowHandle):"configure"==a.command?c.resolve({}):c.reject({})):e.logger.log("spurious response for message: "+a.command)}};a.prototype.registerWindowWithService=function(a){var b=this;return new Promise(function(c,g){var B=u.getRedirector();if(void 0==a){e.logger.log("FrameTrackerProtocol.registerWindowWithService: legacy case");var t=window.getWindowHandleAsHex.bind(window);
    if(void 0===t||null===t)e.logger.log("FrameTrackerProtocol.registerWindowWithService: getWindowHandle method is undefined or null"),g({});Promise.all([t(),B.startRedirection(!1,"registerWindowWithService")]).then(function(a){e.logger.log("FrameTracker.registerWindowWithService: set window handle: "+a[0]);B.WSSendObject({v:"overlay",command:"window",windowHandle:a[0]});c(void 0)})}else e.logger.log("FrameTrackerProtocol.registerWindowWithService: new MW case"),B.startRedirection(!1,"registerWindowWithService").then(function(){b.reqs_.push(new d(c,
    g));B.WSSendObject({v:"overlay",command:"track_window",windowHandle:a})})})};a.prototype.unregisterWindowWithService=function(a){var b=this;e.logger.log("FrameTrackerProtocol.unregisterWindowWithService(handle: "+a+")");return new Promise(function(c,g){void 0==a?g({}):(b.reqs_.push(new d(c,g)),u.getRedirector().WSSendObject({v:"overlay",command:"untrack_window",windowHandle:a}))})};return a}(),q=function(){function a(b){var d=this;this.running_=!1;this.elements_=[];this.clipRects=new Set;this.videos_=
    [];this.connected_=!1;this.yClientAreaOffset_=this.xClientAreaOffset_=0;this.wheelEventHandler=function(a){setTimeout(function(){d.updateAll()},10)};this.scrollEventHandler=function(a){d.updateAll()};this.keyupEventHandler=function(a){"Tab"!=a.code&&"ArrowUp"!=a.code&&"ArrowDown"!=a.code&&"ArrowLeft"!=a.code&&"ArrowRight"!=a.code&&"PageUp"!=a.code&&"PageDown"!=a.code&&"Home"!=a.code&&"End"!=a.code||d.updateAll()};this.resizeEventHandler=function(a){e.logger.log("onWindowResize... update video elements position");
    d.updateAll()};e.logger.log("FrameTracker.constructor: (handle: "+b+")");this.handle_=b;this.connectToService();this.observer_=new MutationObserver(function(a){d.updateAll()})}a.prototype.connectToService=function(){var b=this;a.Protocol.registerWindowWithService(this.handle_).then(function(a){e.logger.log("FrameTracker: connected to service. (windowId="+a+")");b.connected_=!0;b.windowId_=a;b.videos_.forEach(function(a){a.sinkId=JSON.stringify(b.windowId_)});b.videos_=[]})};Object.defineProperty(a.prototype,
    "handle",{get:function(){return this.handle_},enumerable:!1,configurable:!0});a.prototype.getWindowFromElement=function(a){return a.ownerDocument.defaultView};a.prototype.rectanglesIntersect=function(a,b){return a.x<b.x+b.width&&a.x+a.width>b.x&&a.y<b.y+b.height&&a.y+a.height>b.y?!0:!1};a.prototype.intersectingRect=function(a,b){var d=Math.max(a.left,b.left),g=Math.max(a.top,b.top);return new DOMRect(d,g,Math.min(a.right,b.right)-d,Math.min(a.bottom,b.bottom)-g)};a.prototype.pedigreeCount=function(a,
    b){for(var d=0,g=a.parentElement;null!=g&&g!=b;)d++,g=g.parentElement;return{isAncestor:null!=g,pedigree:d}};a.prototype.selectTopmost=function(a,b){var d=this.getBoundingClientRect(a),g=this.getBoundingClientRect(b),d=this.intersectingRect(d,g),g=a.ownerDocument.elementFromPoint(d.left+d.width/2,d.top+d.height/2);if(g==a)return a;if(g==b)return b;d=this.pedigreeCount(a,g);g=this.pedigreeCount(b,g);if(d.isAncestor&&g.isAncestor){if(d.pedigree<g.pedigree)return a;if(g.pedigree<d.pedigree)return b}else{if(d.isAncestor)return a;
    if(g.isAncestor)return b}};a.prototype.checkOverlappingVideos=function(a){var b=this,d=this.getBoundingClientRect(a.target);a.overlaps.forEach(function(b){a.target.remoteVideoElement.removeClipRect(b.rect)});a.overlaps=[];this.elements_.forEach(function(g){if(g!=a){var c=g.overlaps.map(function(a){return a.element}).indexOf(a.target);-1!=c&&(c=g.overlaps.splice(c,1)[0],g.target.remoteVideoElement.removeClipRect(c.rect));c=b.getBoundingClientRect(g.target);if(b.rectanglesIntersect(d,c)){var t=b.selectTopmost(a.target,
    g.target);t==a.target?(g.overlaps.push({element:a.target,rect:d}),g.target.remoteVideoElement.addClipRect(d)):t==g.target&&(a.overlaps.push({element:g.target,rect:c}),a.target.remoteVideoElement.addClipRect(c))}}})};a.prototype.updateAll=function(){var a=this;this.elements_.forEach(function(b){var d=a.getBoundingClientRect(b.target);if(void 0!==d){var g=b.clientRect;if(void 0===g||g.x!==d.x||g.y!==d.y||g.width!==d.width||g.height!==d.height)b.clientRect=d,b.callback(d),a.checkOverlappingVideos(b)}})};
    a.prototype.track=function(a,b){var d=this,g=this.getBoundingClientRect(a);e.logger.log("Track (handle: "+this.handle_+") element frame",a,JSON.stringify(g));console.log(a);this.elements_.push({target:a,clientRect:void 0,callback:b,overlaps:[]});try{e.logger.log("[HdxWebRTC.js] Initializing occlusion for new videoElement"),this.clipRects.forEach(function(b){d.applyOcclusion(a,JSON.parse(b))})}catch(c){e.logger.log("[HdxWebRTC.js] addOcclusionInit failed! "+c)}this.running_||(e.logger.log("Start FrameTracker observer..."),
    this.observer_.observe(a.ownerDocument.body,{attributes:!0,childList:!0,subtree:!0}),g=this.getWindowFromElement(a),g.addEventListener("wheel",this.wheelEventHandler),g.addEventListener("scroll",this.scrollEventHandler),g.addEventListener("keyup",this.keyupEventHandler),g.addEventListener("resize",this.resizeEventHandler),this.running_=!0);this.updateAll()};a.prototype.untrack=function(a){e.logger.log("Untrack (handle: "+this.handle_+") element frame",a);var b=-1;this.elements_.forEach(function(g,
    d){g.target===a&&(b=d)});if(0<=b&&(this.elements_.splice(b,1),0===this.elements_.length)){e.logger.log("Stop FrameTracker observer...");this.observer_.disconnect();var d=this.getWindowFromElement(a);d.removeEventListener("wheel",this.wheelEventHandler);d.removeEventListener("scroll",this.scrollEventHandler);d.removeEventListener("keyup",this.keyupEventHandler);d.removeEventListener("resize",this.resizeEventHandler);this.running_=!1}};a.prototype.applyOcclusion=function(a,b){var d=this.getBoundingClientRect(a);
    this.rectanglesIntersect(b,d)&&void 0!==a.remoteVideoElement&&a.remoteVideoElement.addClipRect(b)};a.prototype.addOcclusion=function(a){var b=this;e.logger.log("[HdxWebRTC.js] Adding occlusion "+JSON.stringify(a));e.logger.log("[HdxWebRTC.js] Tracking '"+this.elements_.length+"' elements.");this.clipRects.add(JSON.stringify(a));this.elements_.forEach(function(d){b.applyOcclusion(d.target,a)})};a.prototype.removeOcclusion=function(a){e.logger.log("[HdxWebRTC.js] Removing occlusion "+JSON.stringify(a));
    e.logger.log("[HdxWebRTC.js] Tracking '"+this.elements_.length+"' elements.");this.clipRects["delete"](JSON.stringify(a));this.elements_.forEach(function(b){void 0!==b.target.remoteVideoElement&&b.target.remoteVideoElement.removeClipRect(a)})};a.prototype.setClientAreaOffset=function(a,b){this.xClientAreaOffset_=a;this.yClientAreaOffset_=b};a.prototype.getBoundingClientRect=function(a){a=a.getBoundingClientRect();a.x+=this.xClientAreaOffset_;a.y+=this.yClientAreaOffset_;return a};a.prototype.newVideoElement=
    function(b){var d=this;e.logger.log("FrameTracker.newVideoElement: (id: "+b.id+")");if(void 0!==b.remoteVideoElement)e.logger.log("Video element is already configured!!!");else{b.id||(b.id="ctx-vid-"+a.videoElementIDs++);var c=new h.VideoElement(b.id,this.getWindowFromElement(b));this.connected_?(e.logger.log("FrameTracker.newVideoElement: initializing video element with sink id "+this.windowId_),c.sinkId=JSON.stringify(this.windowId_)):(e.logger.log("FrameTracker.newVideoElement: video element awaiting stable window state"),
    this.videos_.push(c));c.onloadedmetadata=function(){b.dispatchEvent(new Event("loadedmetadata"))};c.ontimeupdate=function(){b.dispatchEvent(new Event("timeupdate"))};c.onconnectionstatechange=function(){"connected"==c.connectionState?d.track(b,function(a){c.setFrame(a)}):d.untrack(b)};delete b.remoteVideoElement;Object.defineProperty(b,"remoteVideoElement",{writable:!0,configurable:!0,value:null});b.remoteVideoElement=c;delete b.srcObject;Object.defineProperty(b,"srcObject",{configurable:!0,get:function(){return c.srcObject},
    set:function(a){e.logger.log("VDI Shim set video element srcObject "+a);c.srcObject=a}});delete b.videoWidth;Object.defineProperty(b,"videoWidth",{configurable:!0,get:function(){return c.videoWidth}});delete b.videoHeight;Object.defineProperty(b,"videoHeight",{configurable:!0,get:function(){return c.videoHeight}})}};a.prototype.disposeVideoElement=function(a){e.logger.log("FrameTracker.disposeVideoElement: (id: "+a.id+")");var b=a.remoteVideoElement;if(void 0!=b){var d=this.videos_.findIndex(function(a){return a.Id==
    b.Id});-1<d&&this.videos_.splice(d,1);b.dispose();a.remoteVideoElement=void 0}};a.videoElementIDs=0;a.Protocol=new w;return a}();a.FrameTracker=q;b=function(){function a(b){this.frames_=[];b&&this.frames_.push(new q(void 0))}a.prototype.newFrame=function(a){e.logger.log("Frames.newFrame: (handle: "+a+")");var b=this.findFrame(a);void 0==b&&(b=new q(a),this.frames_.push(b));return b};a.prototype.disposeFrame=function(a){e.logger.log("Frames.disposeFrame: (handle: "+a+")");var b=this.frames_.findIndex(function(b){return b.handle==
    a});-1<b&&(q.Protocol.unregisterWindowWithService(a).then(function(a){e.logger.log("Untrack window (handle: "+a+") successful")}),this.frames_.splice(b,1))};a.prototype.findFrame=function(a){e.logger.log("Frames.findFrame: (handle: "+a+")");return void 0!=a?this.frames_.find(function(b){return b.handle==a}):this.frames_[0]};a.prototype.reconnect=function(){e.logger.log("Frames.reconnect()");this.frames_.forEach(function(a){a.connectToService()})};return a}();a.Frames=b},247:function(b,a){Object.defineProperty(a,
    "__esModule",{value:!0});a.getGC=a.GC=void 0;var c=function(){function a(b){this.parent_=this.object_=null;this.children_=[];this.object_=b}a.prototype.addChild=function(a){a.parent_!=this&&(a.parent_=this,this.children_.push(a))};a.prototype.removeChild=function(a){var b=this.children_.indexOf(a);this.children_.splice(b,1);a.parent_=null};return a}(),e=function(){function a(){this.root_=new c(null)}a.prototype.trackObject=function(a,b){void 0===b&&(b=null);if(null===this.findNode(a,this.root_)){var e=
    this.findNode(b,this.root_),h=new c(a);e?e.addChild(h):this.root_.addChild(h)}};a.prototype.releaseObject=function(a){a=this.findNode(a,this.root_);if(null===a||a===this.root_)return!1;this.destroyNodeObjectRecurse(a);a.parent_.removeChild(a);return!0};a.prototype.destroyNodeObjectRecurse=function(a){for(var b=0,c=a.children_;b<c.length;b++)this.destroyNodeObjectRecurse(c[b]);a.object_.destroy()};a.prototype.setParent=function(a,b){var c=this.findNode(a,this.root_);if(null===c)return!1;var e=this.findNode(b,
    this.root_);if(null===e)return!1;if(c.parent_===e)return!0;c.parent_.removeChild(c);e.addChild(c);return!0};a.prototype.reset=function(){this.root_.children_=[]};a.prototype.findNode=function(a,b){if(b.object_===a)return b;for(var c=null,e=0,k=b.children_;e<k.length&&(c=this.findNode(a,k[e]),null===c);e++);return c};return a}();a.GC=e;var u=new e;a.getGC=function(){return u}},946:function(b,a,c){Object.defineProperty(a,"__esModule",{value:!0});a.getRedirector=a.HdxMediaStream=a.RedirectionStatus=
    a.WebrpcStatusCode=void 0;var e=c(658),u=c(851),h=c(550),d=c(545),w=c(394),q=c(691),n=function(){return function(a,b,d,m,c,k,x,r){void 0===r&&(r=void 0);this.resolve=a;this.reject=b;this.iid=d;this.oid=m;this.cbid=c;this.oneShot=k;this.mid=x;this.completion_cb=r}}(),k;(function(a){a[a.rpc_status_success=0]="rpc_status_success";a[a.rpc_status_unspecified_error=1]="rpc_status_unspecified_error";a[a.rpc_status_unexpected=2]="rpc_status_unexpected";a[a.rpc_status_index_out_of_bounds=3]="rpc_status_index_out_of_bounds";
    a[a.rpc_status_missing_parameter=4]="rpc_status_missing_parameter";a[a.rpc_status_missing_return_value=5]="rpc_status_missing_return_value";a[a.rpc_status_invalid_object=6]="rpc_status_invalid_object";a[a.rpc_status_user_exception=7]="rpc_status_user_exception";a[a.rpc_status_system_error=8]="rpc_status_system_error"})(k=a.WebrpcStatusCode||(a.WebrpcStatusCode={}));var v;(function(a){a[a.NotRedirected=0]="NotRedirected";a[a.Connecting=1]="Connecting";a[a.Binding=2]="Binding";a[a.Redirected=3]="Redirected"})(v=
    a.RedirectionStatus||(a.RedirectionStatus={}));b=function(){function a(){this.sessionId_="";this.handlers_=[];this.pingactive=!1;this.status=v.NotRedirected;this.reqs=[];this.cbs=[];this.deferredActions=[];this.telemetry_=new w.Telemetry;this.screenshare_=new q.ScreenShareUtil;this.stateChangeNotifcations=[];this.vdafeatures_=[]}Object.defineProperty(a.prototype,"telemetry",{get:function(){return this.telemetry_},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"screenshare",{get:function(){return this.screenshare_},
    enumerable:!1,configurable:!0});a.prototype.setRemoteSessionInfoCb=function(a){this.remoteSessionInfoCb=a};a.prototype.setFeatures=function(a){this.features=a;this.screenshare.onInitComplete();this.handlers_.forEach(function(b,d){b.init(a)})};a.prototype.getFeatureValue=function(a){if(this.features){var b=this.features.find(function(b){return b.name===a});return void 0!==b?b.value:!1}return!1};a.prototype.getVDAFeatureValue=function(a){return void 0!==this.vdafeatures_.find(function(b){return b===
    a})?!0:!1};a.prototype.onRedirectionComplete=function(){for(;this.deferredActions&&0<this.deferredActions.length;)this.deferredActions.shift().post(this.status==v.Redirected)};a.prototype.connectToService=function(){u.logger.log("Redirection status: Connecting...");this.status=v.Connecting;return new Promise(function(a,b){var d=new WebSocket("wss://127.0.0.1:9002");d.onopen=function(){a(d)};d.onerror=function(a){u.logger.log("websocket connection error: "+a.type);b(a)}})};a.prototype.waitUntilRedirected=
    function(a){var b=this;return new Promise(function(d,c){b.status==v.Redirected?d():0>=a?c():setTimeout(function(){u.logger.log("waitUntilRedirected() timeout. count="+a);b.status!=v.Redirected?b.waitUntilRedirected(--a).then(function(){d()})["catch"](function(){c()}):d()},2E3)})};a.prototype.handleRemoteSessionInfo=function(){var a=this;u.logger.log("handleRemoteSessionInfo called.");var b=this;b.remoteSessionInfoCb?b.remoteSessionInfoCb().then(function(d){u.logger.log("remoteSessionInfo success! info:"+
    JSON.stringify(d));u.logger.log("Redirection status: Redirected");b.status=v.Redirected;b.pingConnectionEnd();(d=window.onVdiClientConnected)&&d();a.telemetry.SendTelemetryInit();b.onRedirectionComplete()})["catch"](function(){u.logger.log("remoteSessionInfo failure!");b.suspendRedirection(!0);b.onRedirectionComplete()}):(u.logger.log("remoteSessionInfoCb is invalid!"),b.suspendRedirection(!0),b.onRedirectionComplete())};a.prototype.startRedirection=function(a,b){var d=this,c=window.onVdiClientDisconnected;
    return new Promise(function(g,k){d.status!=v.Redirected?(u.logger.log("Attempting to start redirection: "+b),!1===a?d.deferredActions.push(new e.deferred_action(g,k,b)):d.connectToService().then(function(a){u.logger.log("Redirection status: Binding...");d.status=v.Binding;d.websocket=a;d.websocket.onmessage=function(a){d.onWSMessage(a)};d.websocket.onclose=function(a){d.onWSClose(a)};g();d.handleRemoteSessionInfo()})["catch"](function(a){u.logger.log("Unable to connect to websocket service! "+a);
    k();d.suspendRedirection(!0);d.onRedirectionComplete();c&&c(!0)})):(u.logger.log("Redirection already started."),g())})};a.prototype.terminateOptimization=function(){this.websocket.close(1E3,"normal disconnecting!")};a.prototype.suspendRedirection=function(a){var b=this;u.logger.log("Suspending redirection.");this.handlers_.forEach(function(a,b){a.reset()});var d=window.onVdiClientDisconnected;try{d&&d(!1)}catch(c){u.logger.log("suspendRedirection(): exception during vdiClientDisconnect: "+c.message)}u.logger.log("Redirection status: NotRedirected");
    var g=this.status;this.status=v.NotRedirected;var k=!1,d=window.getCitrixMSTeamsRedir,x=window.getCitrixWebrtcRedir,r;d?r=d:x&&(r=x);r&&r().then(function(d){u.logger.log("sucesss on disconnect"+d);"1"==d&&(k=!0,u.logger.log("Reg key exists while disconnecting"));a&&g===v.Redirected&&1==k&&(u.logger.log("Calling ping not normal disconnect"),b.pingConnectionBegin(!1))})["catch"](function(){u.logger.log("Failure to Read MS Teams redir Reg Key, not retrying...")});this.dispatchStateChangeNotifications()};
    a.prototype.onWSOpen=function(){};a.prototype.onWSClose=function(a){u.logger.log("disconnected from websocket service. "+JSON.stringify(a));try{a&&1E3==a.code?this.suspendRedirection(!1):this.suspendRedirection(!0)}catch(b){u.logger.log("suspendRedirection(): exception closing WebSocket: "+b.message)}};a.prototype.onWSError=function(){try{this.suspendRedirection(!0)}catch(a){u.logger.log("suspendRedirection(): exception on WebSocket error: "+a.message)}};a.prototype.WSSendObjectWrapper=function(a,
    b,d,c){var g=!0;b!=h.class_id_t.EngineControl||d!=h.method_id_EngineControl_t.ctor&&d!=h.method_id_EngineControl_t.version&&d!=h.method_id_EngineControl_t.feature_flags||(g=!1);var k=!0;if(g&&(k=!1,void 0!=this.features))for(var g=0,r=this.features;g<r.length;g++){var A=r[g];if(!0===A.value&&A.name==a){k=!0;break}}return 1==k?this.WSSendObject(c):Promise.reject("Cannot invoke method that is not supported by webrpc: iid("+b+") mid("+d+")")};a.prototype.WSSendObject=function(a){var b=this;return new Promise(function(d,
    c){if("webrtc"==a.v){var g=a.hdr.proc.iid,k=a.hdr.proc.methodid,r=a.objref.oid;a.hdr.destroy||(g=new n(d,c,g,r,0,!0,k),b.reqs.push(g));g=JSON.stringify(a);u.logger.trace("WSSendObject: >>> "+h.WebrpcClassLibInfoUtil.composeClassInfoData(a)+" "+g);try{b.websocket.readyState==WebSocket.OPEN?b.websocket.send(g):(u.logger.log("WSSendObject(): warinig: web socket is not open, dropping the message!"),d({}))}catch(A){u.logger.log("WSSendObject(): exception: "+A.message),c(A.message)}}else if("overlay"==
    a.v){g=JSON.stringify(a);u.logger.log("HDXMS: SendOverlayData: >>> "+g+"'");try{b.websocket.readyState==WebSocket.OPEN?b.websocket.send(g):(u.logger.log("WSSendObject(): warinig: web socket is not open, dropping the message!"),d({}))}catch(A){u.logger.log("WSSendObject(): exception: "+A.message),c(A.message)}}else if("telemetry"==a.v){g=JSON.stringify(a);u.logger.log("HDXMS: SendTelemetryData: >>> "+g+"'");try{b.websocket.readyState==WebSocket.OPEN?b.websocket.send(g):(u.logger.log("WSSendObject(): warinig: web socket is not open, dropping the message!"),
    d({}))}catch(A){u.logger.log("WSSendObject(): exception: "+A.message),c(A.message)}}else if("appsharing"==a.v){g=JSON.stringify(a);u.logger.log("HDXMS: SendScreenSharingData: >>> "+g+"'");try{b.websocket.readyState==WebSocket.OPEN?b.websocket.send(g):(u.logger.log("WSSendObject(): warinig: web socket is not open, dropping the message!"),d({}))}catch(A){u.logger.log("WSSendObject(): exception: "+A.message),c(A.message)}}else u.logger.log("HDXMS: WSSendObject: Unknown protocol: '"+JSON.stringify(a)+
    "'")})};a.prototype.webrpcStatusCodeToName=function(a){switch(a){case k.rpc_status_success:a="rpc_status_success";break;case k.rpc_status_unspecified_error:a="rpc_status_unspecified_error";break;case k.rpc_status_unexpected:a="rpc_status_unexpected";break;case k.rpc_status_index_out_of_bounds:a="rpc_status_index_out_of_bounds";break;case k.rpc_status_missing_parameter:a="rpc_status_missing_parameter";break;case k.rpc_status_missing_return_value:a="rpc_status_missing_return_value";break;case k.rpc_status_invalid_object:a=
    "rpc_status_invalid_object";break;case k.rpc_status_user_exception:a="rpc_status_user_exception";break;case k.rpc_status_system_error:a="rpc_status_system_error";break;default:a="unknown"}return a};a.prototype.parceWebrpcError=function(a,b){void 0===a&&(a=b&&0<b.length?b[0].category||b[0].code||b[0].message?k.rpc_status_system_error:k.rpc_status_user_exception:k.rpc_status_unspecified_error);var d;switch(a){case k.rpc_status_unspecified_error:case k.rpc_status_unexpected:case k.rpc_status_index_out_of_bounds:case k.rpc_status_missing_parameter:case k.rpc_status_missing_return_value:case k.rpc_status_invalid_object:d=
    new DOMException(this.webrpcStatusCodeToName(a),this.webrpcStatusCodeToName(a));break;case k.rpc_status_user_exception:d=b&&0<b.length?new DOMException(b[0],this.webrpcStatusCodeToName(a)):new DOMException(this.webrpcStatusCodeToName(a),this.webrpcStatusCodeToName(a));break;case k.rpc_status_system_error:if(b&&0<b.length){d=Object.create(DOMException);var g={value:null,writable:!0,enumerable:!1,Configurable:!0};g.value=b[0].category;Object.defineProperty(d,"name",g);g.value=b[0].code;Object.defineProperty(d,
    "code",g);g.value=b[0].message;Object.defineProperty(d,"message",g)}else d=new DOMException(this.webrpcStatusCodeToName(a),this.webrpcStatusCodeToName(a))}return d};a.prototype.onWSMessage=function(a){a=a.data;var b;try{b=JSON.parse(a)}catch(g){u.logger.log("invalid JSON!!!");u.logger.log(g);u.logger.log(a);return}if("webrtc"==b.v){u.logger.trace("onWSMessage: <<< "+h.WebrpcClassLibInfoUtil.composeClassInfoData(b)+" "+a);var c=b.hdr.proc.iid,k=b.hdr.proc.methodid,e=b.objref.oid,x=b.status;if(b.hdr.msg_type==
    d.WsJsonUtil.getMsgType(d.ws_msg_type_t.reply))a=this.reqs.findIndex(function(a){return a.iid==c&&a.oid==e&&a.mid==k}),0<=a?0==x?this.reqs.splice(a,1).shift().resolve(b):(x=this.parceWebrpcError(x,b.params),this.reqs.splice(a,1).shift().reject(x)):(u.logger.log("HDXMS didnt find this one. (reqs)"),u.logger.log(this.reqs));else if(b.hdr.msg_type==d.WsJsonUtil.getMsgType(d.ws_msg_type_t.event_req)){var r=b.func.id;a=this.cbs.findIndex(function(a){return a.iid==c&&a.oid==e&&a.cbid==r>>16});0<=a?(0==
    (r&65535)?this.cbs[a].resolve(b):(x=this.parceWebrpcError(x,b.params),this.cbs[a].reject(x)),1==this.cbs[a].oneShot&&(this.cbs[a].completion_cb?this.cbs[a].completion_cb(this.cbs[a].cbid,this.cbs[a].mid):u.logger.log("HDXMS didnt find completion_cb for oneShot callback, something went wrong!!!! cbid="+this.cbs[a].cbid+" (iid, mid)=("+this.cbs[a].iid,","+this.cbs[a].mid+")"))):(u.logger.log("HDXMS didnt find this one. (cbs)"),u.logger.log(JSON.stringify(this.cbs)))}else u.logger.log("HDXMS Received bogus message: "+
    a+"'")}else if("telemetry"==b.v)0==b.status&&(x=b.hdr.command,2==(x&2147483647)&&(a=b.hdr.id,this.telemetry.onInitialized(a),u.logger.log("Telemetry init response received")));else if("features"==b.v){a=b.features;if("feature-support"==b.command)for(u.logger.log("features capabilities received, features:"+a),this.vdafeatures_=a,x=0;x<a.length;x++)if(a[x]===h.FEATURE_vda_app_sharing)this.screenshare.onInitialized(!0);this.clientViewportMode_=b.client_viewport_mode;u.logger.log("features client_viewport_mode value: "+
    this.clientViewportMode_);this.sessionId_=b.client_session_id}else if("appsharing"==b.v)a=b.status,0==a?(x=b.hdr.command,a=b.hdr.id,(x&2147483647)==q.sshare_cmd.GetSources?(u.logger.log("appsharing GetSources response received"),x=b.data,this.screenshare.onGetSources(a,x)):(x&2147483647)==q.sshare_cmd.SetActive?(u.logger.log("appsharing SetActive response received"),x=b.data,this.screenshare.onSetActive(a,x)):(x&2147483647)==q.sshare_cmd.TopologyChanged?(u.logger.log("appsharing Window topology changed cmd received"),
    this.screenshare.onToplogyChanged()):(u.logger.log("invalid command reply:"+x),this.screenshare.onError(a))):(u.logger.log("invalid status reply:"+a),a=b.hdr.id,this.screenshare.onError(a));else if(x=this.handlers_.find(function(a){return a.name==b.v}),void 0!=x)x.on_message(b);else u.logger.log("HDXMS: onWSMessage: Unknown protocol: "+a+"'")};a.prototype.clearReqs=function(){u.logger.log("clearReqs()");this.reqs.forEach(function(a,b){a.reject()});this.reqs=[]};a.prototype.registerHandler=function(a,
    b,d,g){a=new n(g.resolve.bind(g),g.reject.bind(g),a,b,g.id,g.oneShot,d,g.completion_cb);this.cbs.push(a)};a.prototype.unregisterHandler=function(a,b,d){var g=this.cbs.findIndex(function(g){return g.iid==a&&g.oid==b&&g.cbid==d});0<=g?this.cbs.splice(g,1):(u.logger.log("HDXMS Didnt find this callback in the list!"),u.logger.log(JSON.stringify(this.cbs)))};a.prototype.isRedirected=function(){return this.status===v.Redirected||this.status===v.Binding||this.status===v.Connecting};a.prototype.isConnected=
    function(){return this.status==v.Redirected};a.prototype.isPingActive=function(){return this.pingactive};a.prototype.pingConnectionBegin=function(a){u.logger.log("Started timer");this.pingactive=!0;var b=window.onVdiClientDisconnectedTimer;1==a?(u.logger.log("checking if we are connected..."),b()):this.conntimer=setTimeout(function(){u.logger.log("checking if we are connected...");b&&b()},15E3)};a.prototype.pingConnectionEnd=function(){this.pingactive=!1;clearTimeout(this.conntimer)};a.prototype.SendTelemetryData_Speaker=
    function(a){this.telemetry.SendTelemetryData(w.tel_cmd.Data,w.tel_key_SpeakerDeviceUsed,a,0)};a.prototype.registerStateChangeNotification=function(a){this.stateChangeNotifcations.push(a)};a.prototype.unregisterStateChangeNotification=function(a){this.stateChangeNotifcations=this.stateChangeNotifcations.filter(function(b){return b!=a})};a.prototype.dispatchStateChangeNotifications=function(){this.stateChangeNotifcations.forEach(function(a){a()})};a.prototype.vdabufferNoLimit=function(){for(var a=!1,
    b=0,d=this.vdafeatures_;b<d.length;b++)if(d[b]===h.FEATURE_vda_service_no_buffer_limit){a=!0;break}return a};Object.defineProperty(a.prototype,"clientViewportMode",{get:function(){return this.clientViewportMode_||"unknown"},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"sessionClientId",{get:function(){return this.sessionId_||""},enumerable:!1,configurable:!0});a.prototype.addProtocolHandler=function(a){void 0==this.handlers_.find(function(b){return b.name==a.name})&&this.handlers_.push(a)};
    return a}();a.HdxMediaStream=b;var z=new b;a.getRedirector=function(){return z}},985:function(b,a,c){var e=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])};return a(b,d)};return function(b,d){function c(){this.constructor=b}a(b,d);b.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)}}(),u=this&&this.__spreadArrays||function(){for(var a=
    0,b=0,d=arguments.length;b<d;b++)a+=arguments[b].length;for(var a=Array(a),c=0,b=0;b<d;b++)for(var e=arguments[b],g=0,h=e.length;g<h;g++,c++)a[c]=e[g];return a};Object.defineProperty(a,"__esModule",{value:!0});a.IceCandidatePair=a.IceCandidate=void 0;var h=c(658),d=c(550),w=c(851);b=function(a){function b(c,e,z){for(var g=[],h=3;h<arguments.length;h++)g[h-3]=arguments[h];return a.apply(this,u([c,d.class_id_t.RTCIceCandidate,e,z,null,[]],g))||this}e(b,a);Object.defineProperty(b.prototype,"candidate",
    {get:function(){return this.candidate_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"sdpMid",{get:function(){return this.sdpMid_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"sdpMLineIndex",{get:function(){return this.sdpMLineIndex_},enumerable:!1,configurable:!0});b.prototype.syncBarrier=function(){var a=this;w.logger.log(this.user_friendly_id()+".syncBarrier() called.");return new Promise(function(b,c){a.syncBarrierDeep(b,c)&&a.waitUntilConnected("IceCandidate.syncBarrier").then(function(){return Promise.all([a.remoteInvoke(!1,
    d.method_id_RTCIceCandidate_t.candidate,""),a.remoteInvoke(!1,d.method_id_RTCIceCandidate_t.sdpMid,""),a.remoteInvoke(!1,d.method_id_RTCIceCandidate_t.sdpMLineIndex,0)])}).then(function(b){b=b.map(function(b){return a.param0(b)});a.candidate_=b[0];a.sdpMid_=b[1];a.sdpMLineIndex_=b[2];a.syncBarrierResolve(a)})["catch"](function(b){b=a.logRemoteInvokeError(b,".syncBarrier failed!");a.syncBarrierReject(b)})})};return b}(h.ProxyObject);a.IceCandidate=b;b=function(a){function b(c,e){return a.call(this,
    c,d.class_id_t.RTCIceCandidatePair,e,h.ProxyMode.Remote)||this}e(b,a);Object.defineProperty(b.prototype,"local",{get:function(){return this.local_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"remote",{get:function(){return this.remote_},enumerable:!1,configurable:!0});b.prototype.syncBarrier=function(){var a=this;w.logger.log(this.user_friendly_id()+".syncBarrier() called.");return new Promise(function(b,c){a.syncBarrierDeep(b,c)&&a.waitUntilConnected("IceCandidatePair.syncBarrier").then(function(){return Promise.all([a.remoteInvoke(!1,
    d.method_id_RTCIceCandidatePair_t.local,{}),a.remoteInvoke(!1,d.method_id_RTCIceCandidatePair_t.remote,{})])}).then(function(b){b=b.map(function(b){return a.param0(b)});a.local_=b[0];a.remote_=b[1];a.syncBarrierResolve(a)})["catch"](function(b){b=a.logRemoteInvokeError(b,".syncBarrier failed!");a.syncBarrierReject(b)})})};return b}(h.ProxyObject);a.IceCandidatePair=b},851:function(b,a,c){Object.defineProperty(a,"__esModule",{value:!0});a.logger=a.Logger=void 0;var e=c(550);b=function(){function a(b){this.tracing=
    !1;this.mslogger_=void 0;this.enable_timestamp_=!1;this.tag=b;this.enabled=!0;e.BUILD_TYPE_SDK&&(this.enable_timestamp_=!0)}a.prototype.setMSLogger=function(a,b){this.mslogger_=a;void 0!=b&&(this.enable_timestamp_=b)};a.prototype.log=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];this.enabled&&(a=this.tag+" "+a,this.enable_timestamp_&&(b=new Date,a="["+b.getTime()+"] "+b.toISOString()+" "+a),void 0!=this.mslogger_?this.mslogger_.info(a):console.log(a))};a.prototype.logx=function(a){for(var b=
    [],c=1;c<arguments.length;c++)b[c-1]=arguments[c];a||this.log(b)};a.prototype.trace=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];this.tracing&&this.log.apply(this,a)};return a}();a.Logger=b;a.logger=new b("[HdxWebRTC.js]");a.logger.enabled=!0},360:function(b,a,c){var e=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])};return a(b,
    d)};return function(b,d){function f(){this.constructor=b}a(b,d);b.prototype=null===d?Object.create(d):(f.prototype=d.prototype,new f)}}(),u=this&&this.__awaiter||function(a,b,d,f){function c(a){return a instanceof d?a:new d(function(f){f(a)})}return new (d||(d=Promise))(function(d,K){function g(a){try{m(f.next(a))}catch(b){K(b)}}function r(a){try{m(f["throw"](a))}catch(b){K(b)}}function m(a){a.done?d(a.value):c(a.value).then(g,r)}m((f=f.apply(a,b||[])).next())})},h=this&&this.__generator||function(a,
    b){function d(a){return function(b){return f([a,b])}}function f(f){if(g)throw new TypeError("Generator is already executing.");for(;c;)try{if(g=1,r&&(m=f[0]&2?r["return"]:f[0]?r["throw"]||((m=r["return"])&&m.call(r),0):r.next)&&!(m=m.call(r,f[1])).done)return m;if(r=0,m)f=[f[0]&2,m.value];switch(f[0]){case 0:case 1:m=f;break;case 4:return c.label++,{value:f[1],done:!1};case 5:c.label++;r=f[1];f=[0];continue;case 7:f=c.ops.pop();c.trys.pop();continue;default:if(!(m=c.trys,m=0<m.length&&m[m.length-
    1])&&(6===f[0]||2===f[0])){c=0;continue}if(3===f[0]&&(!m||f[1]>m[0]&&f[1]<m[3]))c.label=f[1];else if(6===f[0]&&c.label<m[1])c.label=m[1],m=f;else if(m&&c.label<m[2])c.label=m[2],c.ops.push(f);else{m[2]&&c.ops.pop();c.trys.pop();continue}}f=b.call(a,c)}catch(d){f=[6,d],r=0}finally{g=m=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}var c={label:0,sent:function(){if(m[0]&1)throw m[1];return m[1]},trys:[],ops:[]},g,r,m,e;$jscomp.initSymbol();$jscomp.initSymbol();$jscomp.initSymbolIterator();
    return e={next:d(0),"throw":d(1),"return":d(2)},"function"===typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e},d=this&&this.__spreadArrays||function(){for(var a=0,b=0,d=arguments.length;b<d;b++)a+=arguments[b].length;for(var a=Array(a),f=0,b=0;b<d;b++)for(var c=arguments[b],g=0,r=c.length;g<r;g++,f++)a[f]=c[g];return a};Object.defineProperty(a,"__esModule",{value:!0});a.PeerConnection=a.SessionDescription=a.SessionDescriptionInit=a.RtcConfiguration=a.RtcIceServer=a.IceCandidateEvent=
    void 0;var w=c(946),q=c(144),n=c(589),k=c(658),v=c(985),z=c(377),g=c(650),B=c(24),t=c(550),m=c(851),D=c(517),y=c(394),x=function(a){function b(d,f,c){d=a.call(this,d,t.class_id_t.RTCIceCandidateEvent,f,k.ProxyMode.Remote)||this;d.target=c;d.type="icecandidate";return d}e(b,a);Object.defineProperty(b.prototype,"candidate",{get:function(){return this.candidate_},enumerable:!1,configurable:!0});b.prototype.syncBarrier=function(){var a=this;m.logger.log(this.user_friendly_id()+".syncBarrier() called.");
    return new Promise(function(f,b){a.syncBarrierDeep(f,b)&&a.waitUntilConnected(a.user_friendly_id()+".syncBarrier").then(function(){return a.remoteInvoke(!1,t.method_id_RTCIceCandidateEvent_t.candidate,{oid:0})}).then(function(f){f=a.param0(f);return!1===f.is_null?(new v.IceCandidate(a,f.oid,k.ProxyMode.Remote)).syncBarrier():Promise.resolve(null)}).then(function(f){m.logger.log(a.user_friendly_id()+".onicecandidate: icecandidate available!");a.candidate_=f;a.syncBarrierResolve(a)})["catch"](function(f){f=
    a.logRemoteInvokeError(f,".onicecandidate() failed!");a.syncBarrierReject(f)})})};return b}(k.ProxyObject);a.IceCandidateEvent=x;var r=function(){function a(b,d){this.state_="new";this.candidates_=[];this.gatheringstateupdatecb_=void 0;this.pc_=b;this.gatheringstateupdatecb_=d}a.prototype.pushState=function(a){m.logger.log(this.pc_.user_friendly_id()+".onicegatheringstatechange: new state is "+a);this.state_=a;"gathering"==this.state_?(this.candidates_=[],this.postUpdate()):this.processRemaining()};
    a.prototype.addIceCandidate=function(a){var b=this;this.candidates_.push(a);var f=[];f.push(a.syncBarrier());f.push(this.pc_.updateSdpDescription(!0));Promise.all(f).then(function(a){m.logger.log(b.pc_.user_friendly_id()+".onicecandidate: icecandidate available!");b.postIceCandidate(a[0])})};a.prototype.postIceCandidate=function(a){m.logger.log(this.pc_.user_friendly_id()+".onicecandidate: posting ice candidate now!");if(null!=this.pc_.onicecandidate)this.pc_.onicecandidate(a);else m.logger.log(this.pc_.user_friendly_id()+
    "onicecandidate is NULL!!!");this.candidates_.shift();this.processRemaining()};a.prototype.postUpdate=function(){m.logger.log(this.pc_.user_friendly_id()+".onicegatheringstatechange: posting event now!");var a=new p("onicegatheringstatechange",this.pc_);this.gatheringstateupdatecb_&&this.gatheringstateupdatecb_(this.state_);this.pc_.onicegatheringstatechange(a)};a.prototype.processRemaining=function(){0==this.candidates_.length&&"complete"==this.state_?(this.pc_.onicecandidate({candidate:null,target:this}),
    this.postUpdate()):m.logger.log(this.pc_.user_friendly_id()+".onicecandidate: candidates remaining=["+this.candidates_.map(function(a){return a.object_id()})+"], state="+this.state_)};return a}(),A=function(){function a(){}a.toRtcIceServer=function(a,b){var f={urls:[],credential:"",username:""};a&&(a.urls?Array.isArray(a.urls)?f.urls=a.urls:f.urls.push(a.urls):m.logger.log("RtcIceServer.toRtcIceServer().urls property is missing! this is required property!"),a.credential&&(a.credential.hasOwnProperty("accessToken")?
    f.credential=a.credential.accessToken:f.credential=a.credential),a.username&&(f.username=a.username));if(1==b)for(var d in a)"urls"!=d&&"credential"!=d&&"username"!=d&&m.logger.log("RtcIceServer.toRtcIceServer() warning: unsupported property:"+d);return f};return a}();a.RtcIceServer=A;var M=function(){function a(){}a.toRtcConfiguration=function(a,b){1==b&&m.logger.log("RtcConfiguration.toRtcConfiguration() in RTCConfiguration config:"+JSON.stringify(a));var f={};if(a){if(a.iceServers){f.iceServers=
    [];for(var d=0,c=a.iceServers;d<c.length;d++)f.iceServers.push(A.toRtcIceServer(c[d],b))}a.iceTransportPolicy&&(f.iceTransportPolicy=a.iceTransportPolicy);a.bundlePolicy&&(f.bundlePolicy=a.bundlePolicy);a.rtcpMuxPolicy&&(f.rtcpMuxPolicy=a.rtcpMuxPolicy);a.iceTransports&&(f.iceTransports=a.iceTransports);a.sdpSemantics&&(f.sdpSemantics=a.sdpSemantics);a.enableDtlsSrtp&&(f.enableDtlsSrtp=a.enableDtlsSrtp);a.enableDscp&&(f.enableDscp=a.enableDscp)}if(1==b){for(var g in a)"iceServers"!=g&&"iceTransportPolicy"!=
    g&&"bundlePolicy"!=g&&"rtcpMuxPolicy"!=g&&"iceTransports"!=g&&"sdpSemantics"!=g&&"enableDtlsSrtp"!=g&&"enableDscp"!=g&&m.logger.log("RtcConfiguration.toRtcConfiguration() warning: unsupported property:"+g);m.logger.log("RtcConfiguration.toRtcConfiguration() converted RtcConfiguration config:"+JSON.stringify(f))}return f};return a}();a.RtcConfiguration=M;var F=function(){return function(a,b){this.sdp=b;this.type=a}}();a.SessionDescriptionInit=F;var l=function(a){function b(c,f,g){for(var r=[],m=3;m<
    arguments.length;m++)r[m-3]=arguments[m];return a.apply(this,d([c,t.class_id_t.RTCSessionDescription,f,g,null,[]],r))||this}e(b,a);b.prototype.toJSON=function(){return{type:this.type_,sdp:this.sdp_}};Object.defineProperty(b.prototype,"sdp",{get:function(){return this.sdp_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"type",{get:function(){return this.type_},enumerable:!1,configurable:!0});b.prototype.syncBarrier=function(){var a=this;m.logger.log(this.user_friendly_id()+".syncBarrier() called.");
    return new Promise(function(f,b){a.syncBarrierDeep(f,b)&&a.waitUntilConnected(a.user_friendly_id()+".syncBarrier").then(function(){return Promise.all([a.remoteInvoke(!1,t.method_id_RTCSessionDescription_t.type,0),a.remoteInvoke(!1,t.method_id_RTCSessionDescription_t.sdp,"")])}).then(function(f){a.type_=a.convertType(a.param0(f[0]));a.sdp_=a.param0(f[1]);a.syncBarrierResolve(a)})["catch"](function(f){f=a.logRemoteInvokeError(f,".syncBarrier() failed!");a.syncBarrierReject(f)})})};b.prototype.convertType=
    function(a){return 0==a?"offer":1==a?"pranswer":2==a?"answer":"rollback"};b.convertC2H=function(a){return"offer"==a?0:"pranswer"==a?1:"answer"==a?2:3};return b}(k.ProxyObject);a.SessionDescription=l;var p=function(){return function(a,b){this.type=a;this.target=b}}(),L=function(){return function(){}}(),P=function(){function a(b,d){this.local=b;this.remote=d}Object.defineProperty(a.prototype,"active",{get:function(){var a=!1;if(1==this.local||1==this.remote)a=!0;return a},enumerable:!1,configurable:!0});
    return a}();b=function(a){function b(d){var f=a.call(this,null,t.class_id_t.RTCPeerConnection,0,k.ProxyMode.Local,null,[],b.ensure_config_defined(d,!1),{})||this;f.timeerstarted_=!1;f.firsttimeremoteoffer_=!1;f.firststable_=!1;f.firsttimelocaloffer_=!1;f.audiocall_=new P(!1,!1);f.videocall_=new P(!1,!1);f.screensharingcall_=new P(!1,!1);f.conferencecall_=!1;f.incomingcall_=!1;f.outgoingcall_=!1;f.usingasynconly_=!1;f.rtcconfig_=b.ensure_config_defined(d,!0);m.logger.log(f.user_friendly_id()+".constructor sdpSemantics="+
    f.rtcconfig_.sdpSemantics);if(!t.BUILD_TYPE_SDK&&f.isUnified()&&!w.getRedirector().getFeatureValue(t.FEATURE_ms_teams_webrtc_1dot0))throw new DOMException("CWA client does not support unified sdpSemantic","createPeerConnection");f.pendingtransceiver_=0;f.pendingtrack_=0;f.deferredOfferAnswers=[];f.localStreams=[];f.remoteStreams=[];f.onaddstream_=null;f.signalingState_="stable";f.iceConnectionState_="new";f.iceGatheringState_="new";f.iceQ_=new r(f,function(a){f.onicegatheringstateupdate(a)});f.receivers_=
    [];f.senders_=[];f.transceivers_=[];f.registerStateChangeNotification(f.onStateChange);f.localdatachannel_=null;f.remotedatachannel_=null;return f}e(b,a);b.ensure_config_defined=function(a,f){return M.toRtcConfiguration(a,f)};b.prototype.dumpSdp=function(a){m.logger.log(this.user_friendly_id()+".dumpSdp");a&&(m.logger.log(this.user_friendly_id()+"  -- type: "+a.type),m.logger.log(this.user_friendly_id()+"  -- sdp: "+a.sdp))};Object.defineProperty(b.prototype,"localDescription",{get:function(){m.logger.log(this.user_friendly_id()+
    ".get_localDescription() called.");return this.localDescription_},set:function(a){m.logger.log(this.user_friendly_id()+".set_localDescription() called.");this.localDescription_=a},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"remoteDescription",{get:function(){m.logger.log(this.user_friendly_id()+".get_remoteDescription() called.");return this.remoteDescription_},set:function(a){m.logger.log(this.user_friendly_id()+".get_remoteDescription() called.");this.remoteDescription_=a},
    enumerable:!1,configurable:!0});b.prototype.isUnified=function(){return"unified"==this.rtcconfig_.sdpSemantics||"unified-plan"==this.rtcconfig_.sdpSemantics};b.prototype.onStateChange=function(){var a=new p("iceconnectionstatechange",this);if(this.oniceconnectionstatechange_)this.oniceconnectionstatechange_(a)};b.prototype.addIceCandidate=function(a){var f=this;m.logger.log(this.user_friendly_id()+".addIceCandidate() called.");this.waitUntilConnected(this.user_friendly_id()+".addIceCandidate").then(function(){var b=
    {candidate:a.candidate,sdpMid:a.sdpMid,sdpMLineIndex:a.sdpMLineIndex};if(void 0==b.candidate||null==b.candidate)b.candidate="";void 0==b.sdpMid&&(b.sdpMid=null);void 0==b.sdpMLineIndex&&(b.sdpMLineIndex=null);return(new v.IceCandidate(f,0,k.ProxyMode.Local,b)).syncBarrier()}).then(function(a){return f.remoteInvokeEx(!1,t.method_id_RTCPeerConnection_t.addIceCandidate,[a],{})}).then(function(){m.logger.log(f.user_friendly_id()+".addIceCandidate() success.");return f.updateSdpDescription(!1)}).then(function(){m.logger.log(f.user_friendly_id()+
    ".addIceCandidate() - sync remote sdp success.")})["catch"](function(a){f.logRemoteInvokeError(a,".addIceCandidate() failed!")})};Object.defineProperty(b.prototype,"onicecandidate",{get:function(){return this.onicecandidate_},set:function(a){var f=this;m.logger.log(this.user_friendly_id()+".set_onicecandidate() called.");this.onicecandidate_=a;this.waitUntilConnected(this.user_friendly_id()+".onicecandidate").then(function(){var b=f.registerCallbacks(!1,f.isNullCallback(a),t.method_id_RTCPeerConnection_t.onicecandidate);
    b.then(function(a){m.logger.log(f.user_friendly_id()+".onicecandidate callback received!!!");a=new x(f,f.param0(a).oid,f);null!=f.iceQ_&&f.iceQ_.addIceCandidate(a)});return f.remoteInvoke(!0,t.method_id_RTCPeerConnection_t.onicecandidate,b.success)})["catch"](function(a){f.logRemoteInvokeError(a,".set_onicecandidate() failed!")})},enumerable:!1,configurable:!0});b.prototype.convertIceConnectionState=function(a){return 0==a?"new":1==a?"checking":2==a?"connected":3==a?"completed":4==a?"failed":5==a?
    "disconnected":"closed"};b.prototype.convertConnectionState=function(a){if(0!=a){if(1==a)return"connecting";if(2==a)return"connected";if(3==a)return"disconnected";if(4==a)return"failed";if(5==a)return"closed"}return"new"};Object.defineProperty(b.prototype,"onconnectionstatechange",{get:function(){return this.onconnectionstatechange_},set:function(a){var f=this;m.logger.log(this.user_friendly_id()+".set_onconnectionstatechange() called.");this.onconnectionstatechange_=a;this.waitUntilConnected(this.user_friendly_id()+
    ".onconnectionstatechange").then(function(){var b=f.registerCallbacks(!1,f.isNullCallback(a),t.method_id_RTCPeerConnection_t.onconnectionstatechange);b.then(function(a){m.logger.log(f.user_friendly_id()+".onconnectionstatechange(): success callback received!!!");f.connectionState_=f.convertConnectionState(f.param0(a));m.logger.log(f.user_friendly_id()+" connectionState=:"+f.connectionState_);a=new p("connectionstatechange",f);if(f.onconnectionstatechange_)f.onconnectionstatechange_(a)});return f.remoteInvoke(!0,
    t.method_id_RTCPeerConnection_t.onconnectionstatechange,b.success)})["catch"](function(a){f.logRemoteInvokeError(a,".set_onconnectionstatechange() failed!")})},enumerable:!1,configurable:!0});b.prototype.get_connectionState=function(){m.logger.log(this.user_friendly_id()+".get_connectionState() called, value = "+this.connectionState_);return this.isRedirected()?this.connectionState_:"failed"};Object.defineProperty(b.prototype,"oniceconnectionstatechange",{get:function(){return this.oniceconnectionstatechange_},
    set:function(a){var f=this;m.logger.log(this.user_friendly_id()+".set_oniceconnectionstatechange() called.");this.oniceconnectionstatechange_=a;this.waitUntilConnected(this.user_friendly_id()+".oniceconnectionstatechange").then(function(){var b=f.registerCallbacks(!1,f.isNullCallback(a),t.method_id_RTCPeerConnection_t.oniceconnectionstatechange);b.then(function(a){m.logger.log(f.user_friendly_id()+".oniceconnectionstatechange(): success callback received!!!");f.iceConnectionState_=f.convertIceConnectionState(f.param0(a));
    a=new p("iceconnectionstatechange",f);if(f.oniceconnectionstatechange_)f.oniceconnectionstatechange_(a)});return f.remoteInvoke(!0,t.method_id_RTCPeerConnection_t.oniceconnectionstatechange,b.success)})["catch"](function(a){f.logRemoteInvokeError(a,".set_oniceconnectionstatechange() failed!")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"iceConnectionState",{get:function(){m.logger.log(this.user_friendly_id()+".get_iceConnectionState() called, value = "+this.iceConnectionState_);
    return this.isRedirected()?this.iceConnectionState_:"failed"},enumerable:!1,configurable:!0});b.prototype.convertIceGatheringState=function(a){return 0==a?"new":1==a?"gathering":"complete"};b.prototype.onicegatheringstateupdate=function(a){m.logger.log(this.user_friendly_id()+".onicegatheringstateupdate() current:"+this.iceGatheringState_+" updating to:"+a);this.iceGatheringState_=a;m.logger.log(this.user_friendly_id()+".onicegatheringstateupdate() after update: iceGatheringState_:"+this.iceGatheringState_)};
    Object.defineProperty(b.prototype,"onicegatheringstatechange",{get:function(){return this.onicegatheringstatechange_},set:function(a){var f=this;m.logger.log(this.user_friendly_id()+".set_onicegatheringstatechange() called.");this.onicegatheringstatechange_=a;this.waitUntilConnected(this.user_friendly_id()+".onicegatheringstatechange").then(function(){var b=f.registerCallbacks(!1,f.isNullCallback(a),t.method_id_RTCPeerConnection_t.onicegatheringstatechange);b.then(function(a){m.logger.log(f.user_friendly_id()+
    ".onicegatheringstatechange(): callback received!!!");a=f.convertIceGatheringState(f.param0(a));null!=f.iceQ_&&f.iceQ_.pushState(a)});return f.remoteInvoke(!0,t.method_id_RTCPeerConnection_t.onicegatheringstatechange,b.success)})["catch"](function(a){f.logRemoteInvokeError(a,".set_onicegatheringstatechange() failed!")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"iceGatheringState",{get:function(){m.logger.log(this.user_friendly_id()+".get_iceGatheringState() called, value = "+
    this.iceGatheringState_);return this.iceGatheringState_},enumerable:!1,configurable:!0});b.prototype.convertSignalState=function(a){return 0==a?"stable":1==a?"have-local-offer":2==a?"have-local-pranswer":3==a?"have-remote-offer":4==a?"have-remote-pranswer":"closed"};b.prototype.TelemtryReadings_=function(){var a=this;"have-local-offer"==this.signalingState_&&0==this.firsttimelocaloffer_&&0==this.firsttimeremoteoffer_&&(this.outgoingcallstart_=(new Date).getTime(),0==this.outgoingcall_&&(this.SendTelemetryData(y.tel_key_PerfCallState,
    y.tel_CallState.active,1),this.SendTelemetryData(y.tel_key_PerfCallDirection,y.tel_CallDirection.outgoing,1),this.outgoingcall_=!0),this.firsttimelocaloffer_=!0);"have-remote-offer"==this.signalingState_&&0==this.firsttimeremoteoffer_&&0==this.firsttimelocaloffer_&&(this.incomingcallstart_=(new Date).getTime(),0==this.incomingcall_&&(this.SendTelemetryData(y.tel_key_PerfCallState,y.tel_CallState.active,1),this.SendTelemetryData(y.tel_key_PerfCallDirection,y.tel_CallDirection.incoming,1),this.incomingcall_=
    !0),this.firsttimeremoteoffer_=!0);"stable"==this.signalingState_&&0==this.firststable_&&(this.callstartTime_=(new Date).getTime(),this.firststable_=this.timeerstarted_=!0);if("stable"==this.signalingState_){for(var f=0,b=this.localStreams;f<b.length;f++){var d=b[f];1<=d.getAudioTracks().length&&0==this.audiocall_.local&&(this.SendTelemetryData(y.tel_key_PerfCallType,y.tel_CallType.audio,1),this.audiocall_.local=!0);d=d.getVideoTracks();if(1<=d.length)for(var c=0,g=d;c<g.length;c++)d=g[c],1==d.getSettings().deviceId.includes("display")?
    0==this.screensharingcall_.local&&(this.SendTelemetryData(y.tel_key_PerfCallType,y.tel_CallType.dshare,1),this.screensharingcall_.local=!0):0==this.videocall_.local&&(this.SendTelemetryData(y.tel_key_PerfCallType,y.tel_CallType.video,1),this.videocall_.local=!0)}f=0;for(b=this.remoteStreams;f<b.length;f++)if(d=b[f],1<=d.getAudioTracks().length&&0==this.audiocall_.remote&&(this.SendTelemetryData(y.tel_key_PerfCallType,y.tel_CallType.audio,1),this.audiocall_.remote=!0),c=d.getVideoTracks(),1<=c.length)for(d=
    0;d<c.length;d++)1==c[d].id.includes("applicationsharingVideo")?0==this.screensharingcall_.remote&&(this.SendTelemetryData(y.tel_key_PerfCallType,y.tel_CallType.dshare,1),this.screensharingcall_.remote=!0):0==this.videocall_.remote&&(this.SendTelemetryData(y.tel_key_PerfCallType,y.tel_CallType.video,1),this.videocall_.remote=!0);this.getReceiversAsync().then(function(f){2<f.length&&0==a.conferencecall_&&(a.SendTelemetryData(y.tel_key_PerfCallType,y.tel_CallType.multi,1),a.conferencecall_=!0)})}};
    Object.defineProperty(b.prototype,"onsignalingstatechange",{set:function(a){var f=this;m.logger.log(this.user_friendly_id()+".set_onsignalingstatechange() called.");this.onsignalingstatechange_=a;this.waitUntilConnected(this.user_friendly_id()+".onsignalingstatechanged").then(function(){var b=f.registerCallbacks(!1,f.isNullCallback(a),t.method_id_RTCPeerConnection_t.onsignalingstatechange);b.then(function(a){m.logger.log(f.user_friendly_id()+".onsignalingstatechange(): callback received!!!");f.signalingState_=
    f.convertSignalState(f.param0(a));a=new p("onsignalingstatechange",f);if(f.onsignalingstatechange_)f.onsignalingstatechange_(a);f.TelemtryReadings_()});return f.remoteInvoke(!0,t.method_id_RTCPeerConnection_t.onsignalingstatechange,b.success)})["catch"](function(a){f.logRemoteInvokeError(a,".set_onsignalingstatechange() failed!")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onsignalingstatechanged",{get:function(){return this.onsignalingstatechange_},enumerable:!1,configurable:!0});
    Object.defineProperty(b.prototype,"ontrack",{get:function(){return this.ontrack_},set:function(a){var f=this;m.logger.log(this.user_friendly_id()+".set_ontrack() called.");this.ontrack_=a;this.waitUntilConnected(this.user_friendly_id()+".ontrack").then(function(){var b=f.registerCallbacks(!1,f.isNullCallback(a),t.method_id_RTCPeerConnection_t.ontrack);b.then(function(a){return u(f,void 0,void 0,function(){var f,b,d,c,r,K,C,e,x,A,t,v=this;return h(this,function(h){m.logger.log(this.user_friendly_id()+
    ".ontrack(): callback received!!!");f=new L;b=[];d=this.param0(a);void 0!=d.track&&!1===d.track.is_null&&(m.logger.log(this.user_friendly_id()+" adding a RemoteMediaTrack with oid:"+d.track.oid),c=new q.RemoteMediaTrack(this,d.track.oid),b.push(c.syncBarrier()));f.track=c;void 0!=d.receiver&&!1===d.receiver.is_null&&(r=this.receivers_.find(function(a){return a.object_id()===d.receiver.oid}),void 0===r&&(m.logger.log(this.user_friendly_id()+" adding a RtpReceiver with oid:"+d.receiver.oid),r=new n.RtpReceiver(this,
    d.receiver.oid,k.ProxyMode.Remote,this.isUnified(),c)),b.push(r.syncBarrier()));f.receiver=r;g.RemoteSession.isFeatureWebrtc1dot0Supported()&&void 0!=d.transceiver&&!1===d.transceiver.is_null&&(K=this.transceivers_.find(function(a){return a.object_id()===d.transceiver.oid}),void 0===K&&(m.logger.log(this.user_friendly_id()+" adding a RtpTransceiver with oid:"+d.transceiver.oid),K=new z.RtpTransceiver(this,d.transceiver.oid,k.ProxyMode.Remote,this.isUnified(),z.RtcRtpTransceiverDirection.inactive,
    r),this.transceivers_.push(K)),b.push(K.syncBarrier()));f.transceiver=K;f.streams=[];if(void 0!=d.streams)for(C=function(a){var d=e.remoteStreams.find(function(f){return!1===a.is_null&&f.object_id()===a.oid});void 0===d&&(m.logger.log(e.user_friendly_id()+" adding a RemoteStream with oid:"+a.oid),d=new q.RemoteStream(e,a.oid,k.ProxyMode.Remote),e.remoteStreams.push(d));b.push(d.syncBarrier());f.streams.push(d)},e=this,x=0,A=d.streams;x<A.length;x++)t=A[x],C(t);m.logger.log(this.user_friendly_id()+
    ".ontrack(): .prop.syncBarrier start");Promise.all(b).then(function(){m.logger.log(v.user_friendly_id()+".ontrack(): notified!!! with evt: "+f);for(var a=0,b=f.streams;a<b.length;a++)b[a].toggleAudio(!1);if(v.ontrack_)v.ontrack_(f)})["catch"](function(a){v.logRemoteInvokeError(a,".ontrack(): .prop.syncBarrier failed.")});return[2]})})});return f.remoteInvoke(!0,t.method_id_RTCPeerConnection_t.ontrack,b.success)})["catch"](function(a){f.logRemoteInvokeError(a,".set_ontrack(): failed.")})},enumerable:!1,
    configurable:!0});Object.defineProperty(b.prototype,"signalingState",{get:function(){m.logger.log(this.user_friendly_id()+".get_signalingState() called, value = "+this.signalingState_);return this.signalingState_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onnegotiationneeded",{get:function(){return this.onnegotiationneeded_},set:function(a){var f=this;m.logger.log(this.user_friendly_id()+".set_onnegotiationneeded() called.");this.onnegotiationneeded_=a;this.waitUntilConnected(this.user_friendly_id()+
    ".onnegotiationneeded").then(function(){var b=f.registerCallbacks(!1,f.isNullCallback(a),t.method_id_RTCPeerConnection_t.onnegotiationneeded);b.then(function(){m.logger.log(f.user_friendly_id()+".onnegotiationneeded(): callback received!!!");var a=new p("negotiationneeded",f);if(f.onnegotiationneeded_)f.onnegotiationneeded_(a)});return f.remoteInvoke(!0,t.method_id_RTCPeerConnection_t.onnegotiationneeded,b.success)})["catch"](function(a){f.logRemoteInvokeError(a,".set_onnegotiationneeded(): failed.")})},
    enumerable:!1,configurable:!0});b.prototype.dumpConstraints=function(a){m.logger.log(this.user_friendly_id()+"constraints: "+a);void 0!==a&&0!==Object.keys(a).length||m.logger.log(this.user_friendly_id()+"constraints either undefined or empty!");a&&(m.logger.log(this.user_friendly_id()+"  -- video: "+a.offerToReceiveVideo),m.logger.log(this.user_friendly_id()+"  -- audio: "+a.offerToReceiveAudio),m.logger.log(this.user_friendly_id()+"  -- iceRestart: "+a.iceRestart),m.logger.log(this.user_friendly_id()+
    "  -- voiceActivityDetection: "+a.voiceActivityDetection))};b.prototype.fix_constraints=function(a){this.dumpConstraints(a);var f={};this.isUnified()||(f={audio:!0,video:!0});if(a){if(void 0!==a.video||void 0!==a.offerToReceiveVideo)f.video=a.offerToReceiveVideo;if(void 0!==a.audio||void 0!==a.offerToReceiveAudio)f.audio=a.offerToReceiveAudio;void 0!==a.iceRestart&&(f.iceRestart=a.iceRestart);void 0!==a.voiceActivityDetection&&(f.voiceActivityDetection=a.voiceActivityDetection)}return f};b.prototype.createOffer=
    function(a,f,b){m.logger.log(this.user_friendly_id()+".createOffer() called.",JSON.stringify(a));return this.isUnified()?void 0==a?this.createOffer_v2():a?this.createOffer_v2(a):this.createOffer_v1(a,f,b):this.createOffer_v1(a,f,b)};b.prototype.createOffer_v2=function(a){var f=this;m.logger.log(this.user_friendly_id()+".createOffer_v2() called.",JSON.stringify(a));return new Promise(function(b,d){f.createOffer_v1(function(a){m.logger.log(f.user_friendly_id()+".createOffer_v2(): got sdp!!!",JSON.stringify(a));
    a=new F(a.type,a.sdp);b(a)},function(a){void 0!=a&&(a=f.logRemoteInvokeError(a,".createOffer_v2() failed."),d(a))},a)})};b.prototype.createOffer_v1=function(a,f,b){var d=this;m.logger.log(this.user_friendly_id()+".createOffer_v1().",JSON.stringify(b));var c=[this.waitUntilConnected(this.user_friendly_id()+".createOffer_v1"),this.waitTransceiverAndTrackReady(this.user_friendly_id()+".createOffer_v1")];Promise.all(c).then(function(){var a=d.registerCallbacks(!0,!1,t.method_id_RTCPeerConnection_t.createOffer);
    d.remoteInvoke(!1,t.method_id_RTCPeerConnection_t.createOffer,a.success,a.fail,d.fix_constraints(b));return a.prom()}).then(function(a){m.logger.log(d.user_friendly_id()+".createOffer_v1(): success callback received!!!");return(new l(d,d.param0(a).oid,k.ProxyMode.Remote)).syncBarrier()}).then(function(f){a&&a(f)})["catch"](function(a){void 0!=a&&(a=d.logRemoteInvokeError(a,".createOffer_v1() failed."),f&&f(a))})};b.prototype.createAnswer=function(a,f,b){m.logger.log(this.user_friendly_id()+".createAnswer() called.",
    JSON.stringify(a));return this.isUnified()?void 0==a?this.createAnswer_v2():a?this.createAnswer_v2(a):this.createAnswer_v1(a,f,b):this.createAnswer_v1(a,f,b)};b.prototype.createAnswer_v2=function(a){var f=this;m.logger.log(this.user_friendly_id()+".createAnswer_v2() called.",JSON.stringify(a));return new Promise(function(b,d){f.createAnswer_v1(function(a){m.logger.log(f.user_friendly_id()+".createAnswer_v2(): got sdp!!!",JSON.stringify(a));a=new F(a.type,a.sdp);b(a)},function(a){void 0!=a&&(a=f.logRemoteInvokeError(a,
    ".createAnswer_v2() failed."),d(a))},a)})};b.prototype.createAnswer_v1=function(a,f,b){var d=this;m.logger.log(this.user_friendly_id()+".createAnswer_v1() called.",JSON.stringify(b));var c=[this.waitUntilConnected(this.user_friendly_id()+".createAnswer_v1"),this.waitTransceiverAndTrackReady(this.user_friendly_id()+".createAnswer_v1")];Promise.all(c).then(function(){var a=d.registerCallbacks(!0,!1,t.method_id_RTCPeerConnection_t.createAnswer);d.remoteInvoke(!1,t.method_id_RTCPeerConnection_t.createAnswer,
    a.success,a.fail,d.fix_constraints(b),{});return a.prom()}).then(function(a){m.logger.log(d.user_friendly_id()+".createAnswer_v1(): success callback received!!!");return(new l(d,d.param0(a).oid,k.ProxyMode.Remote)).syncBarrier()}).then(function(f){a&&a(f)})["catch"](function(a){a=d.logRemoteInvokeError(a,".createAnswer_v1() failed.");f&&f(a.message)})};b.prototype.updateSdpDescription=function(a){m.logger.log(this.user_friendly_id()+".updateSdpDescription() called.");var f=this;return new Promise(function(b,
    d){var c=[];1==a?c.push(f.remoteInvoke(!1,t.method_id_RTCPeerConnection_t.localDescription,{oid:0})):c.push(f.remoteInvoke(!1,t.method_id_RTCPeerConnection_t.remoteDescription,{oid:0}));Promise.all(c).then(function(a){m.logger.log(f.user_friendly_id()+".updateSdpDescription() resolved.");return(new l(f,f.param0(a[0]).oid,k.ProxyMode.Remote)).syncBarrier()}).then(function(d){1==a?f.localDescription_=d:f.remoteDescription_=d;m.logger.log(f.user_friendly_id()+".updateSdpDescription() updated sdp");b()})["catch"](function(a){f.logRemoteInvokeError(a,
    "sdp.syncBarrier() failed!");d()})})};b.prototype.sdpToString=function(a){var f="",b=0;for(a=a?a.split(/\r?\n/):[];b<a.length;b++){var d=a[b];-1!=d.indexOf("m=",0)?f+=d+"\\r\\n":-1!=d.indexOf("o=-",0)?f+=d+"\\r\\n":-1!=d.indexOf("a=ssrc",0)&&(f+=d+"\\r\\n")}return f};b.prototype.setLocalDescription=function(a,f,b){m.logger.log(this.user_friendly_id()+".setLocalDescription() called.",this.sdpToString(a.sdp));if(a instanceof F)return this.setLocalDescription_v2(a);if(a instanceof RTCSessionDescription&&
    f)return this.setLocalDescription_v1(a,f,b);f=void 0;a?f=new F(a.type,a.sdp):(m.logger.log(this.user_friendly_id()+".setLocalDescription() empty param1, setting sdp type to rollback"),a=void 0,a="have-remote-offer"==this.signalingState_?"answer":"have-local-pranswer"==this.signalingState_||"have-remote-pranswer"==this.signalingState_?"pranswer":"offer",f=new F(a,""));return this.setLocalDescription_v2(f)};b.prototype.setLocalDescription_v2=function(a){var f=this;m.logger.log(this.user_friendly_id()+
    ".setLocalDescription_v2() called.");return new Promise(function(b,d){f.waitUntilConnected(f.user_friendly_id()+".setLocalDescription_v2").then(function(){return(new l(f,0,k.ProxyMode.Local,{type:l.convertC2H(a.type),sdp:a.sdp})).syncBarrier()}).then(function(c){var g=f.registerCallbacks(!0,!1,t.method_id_RTCPeerConnection_t.setLocalDescription_v2),r={type:l.convertC2H(a.type),sdp:a.sdp};f.remoteInvoke(!1,t.method_id_RTCPeerConnection_t.setLocalDescription_v2,r,g.success,g.fail);g.prom().then(function(){m.logger.log(f.user_friendly_id()+
    ".setLocalDescription_v2(): success callback received!!!");f.localDescription_=c;m.logger.log(f.user_friendly_id()+".setLocalDescription_v2(): updated localDescription_");Promise.all([]).then(function(){m.logger.log(f.user_friendly_id()+".setLocalDescription_v2() success.");b()})["catch"](function(a){a=f.logRemoteInvokeError(a,".prop.setLocalDescription_v2() failed!");d(a)})})["catch"](function(a){a=f.logRemoteInvokeError(a,"setLocalDescription_v2() error callback received!");d(a)})})["catch"](function(a){a=
    f.logRemoteInvokeError(a,".setLocalDescription_v2() failed.");d(a)})})};b.prototype.setLocalDescription_v1=function(a,f,b){var d=this;m.logger.log(this.user_friendly_id()+".setLocalDescription_v1() called.");this.waitUntilConnected(this.user_friendly_id()+".setLocalDescription_v1").then(function(){return(new l(d,0,k.ProxyMode.Local,{type:l.convertC2H(a.type),sdp:a.sdp})).syncBarrier()}).then(function(a){var c=d.registerCallbacks(!0,!1,t.method_id_RTCPeerConnection_t.setLocalDescription);d.remoteInvokeEx(!1,
    t.method_id_RTCPeerConnection_t.setLocalDescription,[a],c.success,c.fail);c.prom().then(function(){m.logger.log(d.user_friendly_id()+".setLocalDescription_v1(): success callback received!!!");d.localDescription_=a;m.logger.log(d.user_friendly_id()+".setLocalDescription_v1(): updated localDescription_");Promise.all([]).then(function(){m.logger.log(d.user_friendly_id()+".setLocalDescription_v1() success.");f&&f()})["catch"](function(a){a=d.logRemoteInvokeError(a,".prop.setLocalDescription_v1() failed.");
    b&&b(a.message)})})["catch"](function(a){a=d.logRemoteInvokeError(a,".setLocalDescription_v1() error callback received.");b&&b(a.message)})})["catch"](function(a){a=d.logRemoteInvokeError(a,".setLocalDescription_v1() failed.");b&&b(a.message)})};b.prototype.setRemoteDescription=function(a,f,b){m.logger.log(this.user_friendly_id()+".setRemoteDescription() called.",this.sdpToString(a.sdp));if(a instanceof F)return this.setRemoteDescription_v2(a);if(a instanceof RTCSessionDescription&&f)return this.setRemoteDescription_v1(a,
    f,b);f=void 0;a?f=new F(a.type,a.sdp):(m.logger.log(this.user_friendly_id()+".setRemoteDescription() empty param1, setting sdp type to rollback"),a=void 0,a="have-remote-offer"==this.signalingState_?"answer":"have-local-pranswer"==this.signalingState_||"have-remote-pranswer"==this.signalingState_?"pranswer":"offer",f=new F(a,""));return this.setRemoteDescription_v2(f)};b.prototype.setRemoteDescription_v2=function(a){var f=this;m.logger.log(this.user_friendly_id()+".setRemoteDescription_v2() called.");
    return new Promise(function(b,d){f.waitUntilConnected(f.user_friendly_id()+".setRemoteDescription_v2").then(function(){var c=new l(f,0,k.ProxyMode.Local,{type:l.convertC2H(a.type),sdp:a.sdp}),g=[];g.push(c.syncBarrier());var c=f.registerCallbacks(!0,!1,t.method_id_RTCPeerConnection_t.setRemoteDescription_v2),r={type:l.convertC2H(a.type),sdp:a.sdp};f.remoteInvoke(!1,t.method_id_RTCPeerConnection_t.setRemoteDescription_v2,r,c.success,c.fail);g.push(c.prom());Promise.all(g).then(function(a){m.logger.log(f.user_friendly_id()+
    ".setRemoteDescription_v2(): remote success.");f.remoteDescription_=a[0];g=[];f.usingasynconly_||(f.isUnified()?g.push(f.getTransceiversAsync()):g.push(f.getSendersAsync()));Promise.all(g).then(function(a){m.logger.log(f.user_friendly_id()+".setRemoteDescription_v2(): final success.");b()})["catch"](function(a){a=f.logRemoteInvokeError(a,".prop.setRemoteDescription_v2() final failed.");d(a)})})["catch"](function(a){a=f.logRemoteInvokeError(a,".prop.setRemoteDescription_v2() remote failed.");d(a)})})["catch"](function(a){a=
    f.logRemoteInvokeError(a,".setRemoteDescription_v2() failed.");d(a)})})};b.prototype.setRemoteDescription_v1=function(a,f,b){var d=this;m.logger.log(this.user_friendly_id()+".setRemoteDescription_v1() called.");this.waitUntilConnected(this.user_friendly_id()+".setRemoteDescription_v1").then(function(){return(new l(d,0,k.ProxyMode.Local,{type:l.convertC2H(a.type),sdp:a.sdp})).syncBarrier()}).then(function(a){var c=d.registerCallbacks(!0,!1,t.method_id_RTCPeerConnection_t.setRemoteDescription);d.remoteInvokeEx(!1,
    t.method_id_RTCPeerConnection_t.setRemoteDescription,[a],c.success,c.fail);c.prom().then(function(){m.logger.log(d.user_friendly_id()+".setRemoteDescription_v1(): success callback received!!!");d.remoteDescription_=a;m.logger.log(d.user_friendly_id()+".setRemoteDescription_v1(): updated remoteDescription_");var c=[];d.usingasynconly_||(d.isUnified()?c.push(d.getTransceiversAsync()):c.push(d.getSendersAsync()));Promise.all(c).then(function(){m.logger.log(d.user_friendly_id()+".setRemoteDescription_v1(): success.");
    f&&f()})["catch"](function(a){a=d.logRemoteInvokeError(a,".prop.setRemoteDescription_v1() failed.");b&&b(a.message)})})})["catch"](function(a){a=d.logRemoteInvokeError(a,".setRemoteDescription_v1() failed.");b&&b(a.message)})};b.prototype.getLocalStreams=function(){m.logger.log("PeerConnection.getLocalStreams() called. [oid="+this.object_id()+"]");for(var a=0,f=this.localStreams;a<f.length;a++)m.logger.log(JSON.stringify(f[a]));return this.localStreams};b.prototype.getRemoteStreams=function(){m.logger.log(this.user_friendly_id()+
    ".getRemoteStreams() called.");for(var a=0,f=this.remoteStreams;a<f.length;a++)m.logger.log(JSON.stringify(f[a]));return this.remoteStreams};b.prototype.addTrack=function(a,f){return this.addTrackInternal(a,f,!1)};b.prototype.addTrackAsync=function(a,f){return this.addTrackInternal(a,f,!0)};b.prototype.addTrackInternal=function(a,f,b){var d=this;m.logger.log(this.user_friendly_id()+".addTrackInternal() called. track.id = "+a.id+", streams = "+JSON.stringify(f)+", isAsync = "+b);this.incrementPendingTrackCount();
    var c=[];if(f)if(f instanceof q.RemoteStream)c.push(f.id),this.localStreams.push(f);else for(var g=0;g<f.length;g++)c.push(f[g].id),this.localStreams.push(f[g]);else m.logger.log(this.user_friendly_id()+".addTrackInternal() empty streams passed in, continue with empty array");var r=new n.RtpSender(this,0,k.ProxyMode.Pseudo,this.isUnified());this.senders_.push(r);f=new Promise(function(f,b){d.waitUntilConnected(d.user_friendly_id()+".addTrackInternal").then(function(){return d.remoteInvokeEx(!1,t.method_id_RTCPeerConnection_t.addTrack,
    [a],c)}).then(function(a){m.logger.log(d.user_friendly_id()+".addTrackInternal() success with oid: "+d.param0(a).oid);r.bind(d,d.param0(a).oid);r.syncBarrier().then(function(){m.logger.log(d.user_friendly_id()+"sender.syncBarrier(): success");!d.usingasynconly_&&d.isUnified()?d.getTransceiversAsync().then(function(){d.decrementPendingTrackCount();f(r)})["catch"](function(a){d.logRemoteInvokeError(a,".addTrackInternal() getTransceiversAsync() failed!");d.decrementPendingTrackCount();b()}):(d.decrementPendingTrackCount(),
    f(r))})["catch"](function(a){d.logRemoteInvokeError(a,"sender.syncBarrier() failed!");d.decrementPendingTrackCount();b()})})["catch"](function(a){d.logRemoteInvokeError(a,"addTrack() failed!");d.decrementPendingTrackCount();b()})});if(b)return f;m.logger.log(this.user_friendly_id()+".addTrack() returning: "+r);return r};b.prototype.removeTrack=function(a){m.logger.log(this.user_friendly_id()+".removeTrack() called.");this.removeTrackAsync(a)};b.prototype.removeTrackAsync=function(a){var f=this;m.logger.log(this.user_friendly_id()+
    ".removeTrackAsync() called.");this.incrementPendingTrackCount();for(var b=0;b<this.senders_.length;b++)this.senders_[b]==a&&this.senders_.splice(b,1);return new Promise(function(b,d){f.waitUntilConnected(f.user_friendly_id()+".removeTrackAsync").then(function(){return f.remoteInvokeEx(!1,t.method_id_RTCPeerConnection_t.removeTrack,[a])}).then(function(){m.logger.log(f.user_friendly_id()+".removeTrackAsync() success.");!f.usingasynconly_&&f.isUnified()?f.getTransceiversAsync().then(function(){f.decrementPendingTrackCount();
    b()})["catch"](function(a){f.logRemoteInvokeError(a,"removeTrackAsync() getTransceiversAsync() failed!");f.decrementPendingTrackCount();d(a)}):(f.decrementPendingTrackCount(),b())})["catch"](function(a){f.logRemoteInvokeError(a,"removeTrackAsync() failed!");f.decrementPendingTrackCount();d(a)})})};b.prototype.addStream=function(a){var b=this;m.logger.log(this.user_friendly_id()+".addStream() called: "+JSON.stringify(a));this.localStreams.push(a);this.waitUntilConnected(this.user_friendly_id()+".addStream").then(function(){return b.remoteInvokeEx(!1,
    t.method_id_RTCPeerConnection_t.addStream,[a],{})}).then(function(){m.logger.log(b.user_friendly_id()+".addStream() success.")})["catch"](function(a){b.logRemoteInvokeError(a,"addStream() failed.")})};b.prototype.removeStream=function(a){var b=this;m.logger.log(this.user_friendly_id()+".removeStream() called: "+JSON.stringify(a));for(var d=0;d<this.localStreams.length;d++)this.localStreams[d]==a&&this.localStreams.splice(d,1);this.waitUntilConnected(this.user_friendly_id()+".removeStream").then(function(){return b.remoteInvokeEx(!1,
    t.method_id_RTCPeerConnection_t.removeStream,[a])}).then(function(){m.logger.log(b.user_friendly_id()+".removeStream() success.")})["catch"](function(a){b.logRemoteInvokeError(a,"removeStream() failed.")})};Object.defineProperty(b.prototype,"onaddstream",{get:function(){return this.onaddstream_},set:function(a){var b=this;m.logger.log(this.user_friendly_id()+".set_onaddstream() called.");this.onaddstream_=a;this.waitUntilConnected(this.user_friendly_id()+".onaddstream").then(function(){var d=b.registerCallbacks(!1,
    b.isNullCallback(a),t.method_id_RTCPeerConnection_t.onaddstream);d.then(function(a){(new q.RemoteStreamEvent(b,b.param0(a).oid)).syncBarrier().then(function(a){m.logger.log(b.user_friendly_id()+".onaddstream callback received!");void 0===b.remoteStreams.find(function(b){return void 0!=a.stream&&b.object_id()===a.stream.object_id()})&&b.remoteStreams.push(a.stream);b.onaddstream_&&(m.logger.log(b.user_friendly_id()+".onaddstream notified!!! "+a.stream.id),b.onaddstream_(a))})});return b.remoteInvoke(!0,
    t.method_id_RTCPeerConnection_t.onaddstream,d.success)})["catch"](function(a){b.logRemoteInvokeError(a,"set_onaddstream() failed!")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onremovestream",{get:function(){return this.onremovestream_},set:function(a){var b=this;m.logger.log(this.user_friendly_id()+".set_onremovestream() called.");this.onremovestream_=a;this.waitUntilConnected(this.user_friendly_id()+".onremovestream").then(function(){var d=b.registerCallbacks(!1,b.isNullCallback(a),
    t.method_id_RTCPeerConnection_t.onremovestream);d.then(function(a){(new q.RemoteStreamEvent(b,b.param0(a).oid)).syncBarrier().then(function(a){m.logger.log(b.user_friendly_id()+".onremovestream callback received! "+a.stream.id);var d=b.remoteStreams.findIndex(function(b){return b.id==a.stream.id});0<=d&&b.remoteStreams.splice(d,1);if(b.onremovestream_)b.onremovestream_(a)})});return b.remoteInvoke(!0,t.method_id_RTCPeerConnection_t.onremovestream,d.success)})["catch"](function(a){b.logRemoteInvokeError(a,
    "set_onremovestream() failed!")})},enumerable:!1,configurable:!0});b.prototype.getStats=function(a){var b=this;return new Promise(function(d,c){b.isRedirected()?b.waitUntilConnected(b.user_friendly_id()+".getStats").then(function(){var c=b.registerCallbacks(!0,!1,t.method_id_RTCPeerConnection_t.getStats);c.then(function(b){void 0===b.params||0===b.params.length||0===b.params[0].length?d():a?(a(D.StatsReport.fromJSON(JSON.parse(b.params[0]))),d()):d(D.StatsReport.toRTCStatsReport(JSON.parse(b.params[0])))});
    return a?b.remoteInvoke(!1,t.method_id_RTCPeerConnection_t.getStats,c.success):b.remoteInvoke(!1,t.method_id_RTCPeerConnection_t.getStats_v2,c.success)})["catch"](function(a){b&&(a=b.logRemoteInvokeError(a,".getStats() failed!"),c(a))}):(a({}),d())})};b.prototype.SendTelemetryData=function(a,b,d){w.getRedirector().telemetry.SendTelemetryData(y.tel_cmd.Data,a,b,d)};b.prototype.MillisecondstoDisplayformat_=function(a){var b,d;d=Math.floor(a/1E3);b=Math.floor(d/60);a=Math.floor(b/60);m.logger.log(Math.floor(a/
    24)+":"+a%24+":"+b%60+":"+d%60)};b.prototype.CalculateCallDurationandType_=function(){if(1==this.timeerstarted_){this.timeerstarted_=!1;this.callendTime_=(new Date).getTime();var a=this.callendTime_-this.callstartTime_;this.MillisecondstoDisplayformat_(a);a=Math.round(a/1E3);m.logger.log("Call Duration "+a);1==this.conferencecall_?this.SendTelemetryData(y.tel_key_ConferenceCallDuration,a,1):(1==this.audiocall_.active&&this.SendTelemetryData(y.tel_key_AudioCallDuration,a,1),1==this.videocall_.active&&
    this.SendTelemetryData(y.tel_key_VideoCallDuration,a,1),1==this.screensharingcall_.active&&this.SendTelemetryData(y.tel_key_ScreensharingCallDuration,a,1));var b;1==this.firsttimelocaloffer_&&(b=this.callstartTime_-this.outgoingcallstart_);1==this.firsttimeremoteoffer_&&(b=this.callstartTime_-this.incomingcallstart_);this.MillisecondstoDisplayformat_(b);b=Math.round(b/1E3);m.logger.log("Call Establish Time "+b);1==this.incomingcall_?this.SendTelemetryData(y.tel_key_CallEstIncoming,b,1):1==this.outgoingcall_&&
    this.SendTelemetryData(y.tel_key_CallEstOutgoing,b,1);this.SendTelemetryData(y.tel_key_PerfCallState,y.tel_CallState.idle,1)}};b.prototype.close=function(){var a=this;m.logger.log(this.user_friendly_id()+".close() called.");this.CalculateCallDurationandType_();this.unregisterStateChangeNotification(this.onStateChange);this.onnegotiationneeded=this.onsignalingstatechange=this.onicegatheringstatechange=this.oniceconnectionstatechange=this.onicecandidate=this.onaddstream=null;this.waitUntilConnected(this.user_friendly_id()+
    ".close").then(function(){return a.remoteInvoke(!1,t.method_id_RTCPeerConnection_t.close)}).then(function(){a.iceQ_=null;a.release();m.logger.log(a.user_friendly_id()+".close() success.")})["catch"](function(b){a.logRemoteInvokeError(b,".close() failed.");a.iceQ_=null;a.release()})};b.prototype.createDTMFSender=function(a){m.logger.log(this.user_friendly_id()+".createDTMFSender() called.");var b,d=this.senders_;if(void 0===d||0===d.length)d=this.getSenders();void 0!=d&&(d=d.find(function(b){return b.track.id===
    a.id}),void 0!=d&&(m.logger.log(this.user_friendly_id()+" returning RtpSender with oid:"+d.object_id()),b=d.dtmf));return b};Object.defineProperty(b.prototype,"usingAsyncOnly",{get:function(){return this.usingasynconly_},set:function(a){m.logger.log(this.user_friendly_id()+".usingAsyncOnly() called with async:"+a);void 0!=a&&null!=a&&(this.usingasynconly_=a)},enumerable:!1,configurable:!0});b.prototype.getSendersAsync=function(){m.logger.log(this.user_friendly_id()+".getSendersAsync() called.");return this.getSendersAsyncInternal()};
    b.prototype.getSenders=function(){m.logger.log(this.user_friendly_id()+".getSenders() called. ");if(this.usingasynconly_)throw m.logger.log(this.user_friendly_id()+".getSenders(): throwing exception: not allowed when usingAsyncOnly is true!!!"),new DOMException(".getSenders() not allowed when usingAsyncOnly is true!!!");this.getSendersAsyncInternal();m.logger.log(this.user_friendly_id()+".getSenders() returning:"+this.senders_.length+" items");return this.senders_};b.prototype.getSendersAsyncInternal=
    function(){var a=this;m.logger.log(this.user_friendly_id()+".getSendersAsyncInternal() called. "+this.senders_);return new Promise(function(b,d){a.waitUntilConnected(a.user_friendly_id()+".getSendersAsyncInternal").then(function(){m.logger.log(a.user_friendly_id()+".getSendersAsyncInternal invoking remote");return a.remoteInvoke(!1,t.method_id_RTCPeerConnection_t.getSenders)}).then(function(d){m.logger.log(a.user_friendly_id()+".getSendersAsyncInternal remote success");var c=[],g=[];d.params[0].forEach(function(b){var f=
    a.senders_.find(function(a){return a.object_id()===b.oid});void 0===f&&(m.logger.log(a.user_friendly_id()+" adding a RtpSender with oid:"+b.oid),f=new n.RtpSender(a,b.oid,k.ProxyMode.Remote,a.isUnified()));g.push(f.syncBarrier());c.push(f)});Promise.all(g).then(function(){a.senders_=c;m.logger.log(a.user_friendly_id()+".getSendersAsyncInternal: returning senders with ids ["+a.senders_.map(function(a){return a.object_id()})+"]");b(a.senders_)})["catch"](function(d){a.logRemoteInvokeError(d,".prop.getSendersAsyncInternal() failed.");
    a.senders_=[];b(a.senders_)})})["catch"](function(d){a.logRemoteInvokeError(d,".getSendersAsyncInternal() failed.");a.senders_=[];b(a.senders_)})})};b.prototype.getReceiversAsync=function(){m.logger.log(this.user_friendly_id()+".getReceiversAsync() called.");return this.getReceiversAsyncInternal()};b.prototype.getReceivers=function(){m.logger.log(this.user_friendly_id()+".getReceivers() called. ");if(this.usingasynconly_)throw m.logger.log(this.user_friendly_id()+".getReceivers(): throwing exception: not allowed when usingAsyncOnly is true!!!"),
    new DOMException(".getReceivers() not allowed when usingAsyncOnly is true!!!");this.getReceiversAsyncInternal();m.logger.log(this.user_friendly_id()+".getReceivers() returning:"+this.receivers_.length+" items");return this.receivers_};b.prototype.getReceiversAsyncInternal=function(){var a=this;m.logger.log(this.user_friendly_id()+".getReceiversAsyncInternal() called. "+this.receivers_);return new Promise(function(b,d){a.waitUntilConnected(a.user_friendly_id()+".getReceiversAsyncInternal").then(function(){return a.remoteInvoke(!1,
    t.method_id_RTCPeerConnection_t.getReceivers)}).then(function(d){m.logger.log(a.user_friendly_id()+".getReceiversAsyncInternal: remote success.");var c=[],g=[];d.params[0].forEach(function(b){var f=a.receivers_.find(function(a){return a.object_id()===b.oid});void 0===f&&(m.logger.log(a.user_friendly_id()+" adding a RtpReceiver with oid:"+b.oid),f=new n.RtpReceiver(a,b.oid,k.ProxyMode.Remote,a.isUnified()));g.push(f.syncBarrier());c.push(f)});Promise.all(g).then(function(){a.receivers_=c;m.logger.log(a.user_friendly_id()+
    ".getReceiversAsyncInternal: returning receiver with ids ["+a.receivers_.map(function(a){return a.object_id()})+"]");b(a.receivers_)})["catch"](function(d){a.logRemoteInvokeError(d,".prop.getReceiversAsyncInternal() failed!");a.receivers_=[];b(a.receivers_)})})["catch"](function(d){a.logRemoteInvokeError(d,".getReceiversAsyncInternal() failed!");a.receivers_=[];b(a.receivers_)})})};b.prototype.addTransceiver=function(a,b){m.logger.log(this.user_friendly_id()+".addTransceiver() called: "+JSON.stringify(a)+
    " init="+JSON.stringify(b));return this.addTransceiverInternal(a,b,!1)};b.prototype.addTransceiverAsync=function(a,b){m.logger.log(this.user_friendly_id()+".addTransceiverAsync() called: "+JSON.stringify(a)+" init="+JSON.stringify(b));return this.addTransceiverInternal(a,b,!0)};b.prototype.addTransceiverInternal=function(a,b,d){var c=this;m.logger.log(this.user_friendly_id()+".addTransceiverInternal() called: "+JSON.stringify(a)+" init="+JSON.stringify(b));this.incrementPendingTransceiverCount();
    var r=z.RtcRtpTransceiverDirection.sendrecv,e=void 0;b&&(e=z.RtcRtpTransceiverInit.toRtcRtpTransceiverInit(b),e.direction&&(r=e.direction));var C=b;g.RemoteSession.isFeatureCallConstraintsSupported()&&(C=e);var x=new z.RtpTransceiver(this,0,k.ProxyMode.Pseudo,this.isUnified(),r);this.transceivers_.push(x);b=new Promise(function(b,f){c.waitUntilConnected(c.user_friendly_id()+".addTransceiverInternal").then(function(){return"string"===typeof a?c.remoteInvoke(!1,t.method_id_RTCPeerConnection_t.addTransceiverWithKind,
    a,C):c.remoteInvokeEx(!1,t.method_id_RTCPeerConnection_t.addTransceiverWithTrack,[a],C)}).then(function(a){m.logger.log(c.user_friendly_id()+".addTransceiverInternal() success with oid: "+c.param0(a).oid);x.bind(c,c.param0(a).oid);x.syncBarrier().then(function(){m.logger.log(c.user_friendly_id()+".addTransceiverInternal(): success");c.decrementPendingTransceiverCount();b(x)})["catch"](function(a){c.logRemoteInvokeError(a,".prop.addTransceiverInternal() failed!");c.decrementPendingTransceiverCount();
    f()})})["catch"](function(a){c.logRemoteInvokeError(a,"addTransceiverInternal() failed!");c.decrementPendingTransceiverCount();f()})});m.logger.log(this.user_friendly_id()+".addTransceiverInternal() returning:");return d?b:x};b.prototype.incrementPendingTransceiverCount=function(){++this.pendingtransceiver_};b.prototype.decrementPendingTransceiverCount=function(){0<this.pendingtransceiver_&&--this.pendingtransceiver_};b.prototype.incrementPendingTrackCount=function(){++this.pendingtrack_};b.prototype.decrementPendingTrackCount=
    function(){0<this.pendingtrack_&&--this.pendingtrack_};b.prototype.waitTransceiverAndTrackReady=function(a){var b=this;return new Promise(function(d,c){m.logger.trace(b.user_friendly_id()+".waitTransceiverAndTrackReady(): pendingtransceiver_="+b.pendingtransceiver_+", pendingtrack_="+b.pendingtrack_);if(0==b.pendingtransceiver_&&0==b.pendingtrack_){for(;b.deferredOfferAnswers&&0<b.deferredOfferAnswers.length;)b.deferredOfferAnswers.shift().post(!0);d()}else b.deferredOfferAnswers.push(new k.deferred_action(d,
    c,a)),b.checkTransceiverAndTrack(600,25)})};b.prototype.checkTransceiverAndTrack=function(a,b){var d=this;if(0>=a)for(m.logger.log(".checkTransceiverAndTrack() timeout waiting for transceiver ready!");this.deferredOfferAnswers&&0<this.deferredOfferAnswers.length;)this.deferredOfferAnswers.shift().post(!1);else setTimeout(function(a){if(0==d.pendingtransceiver_&&0==d.pendingtrack_)for(;d.deferredOfferAnswers&&0<d.deferredOfferAnswers.length;)d.deferredOfferAnswers.shift().post(!0);else m.logger.log('.checkTransceiverAndTrack(): count= "'+
    a),d.checkTransceiverAndTrack(--a,b)},b,a)};b.prototype.getTransceivers=function(){m.logger.log(this.user_friendly_id()+".getTransceivers() called. ");if(this.usingasynconly_)throw m.logger.log(this.user_friendly_id()+".getTransceivers(): throwing exception: not allowed when usingAsyncOnly is true!!!"),new DOMException(".getTransceivers() not allowed when usingAsyncOnly is true!!!");this.getTransceiversAsync();m.logger.log(this.user_friendly_id()+".getTransceivers() returning:"+this.transceivers_.length+
    " items");return this.transceivers_};b.prototype.getTransceiversAsync=function(){var a=this;m.logger.log(this.user_friendly_id()+".getTransceiversAsync() called. ");return new Promise(function(b,d){if(!a.isUnified())return m.logger.log(a.user_friendly_id()+".getTransceiversAsync() called in non-Unified. "),Promise.resolve(a.transceivers_);a.waitUntilConnected(a.user_friendly_id()+".getTransceiversAsync").then(function(){return a.remoteInvoke(!1,t.method_id_RTCPeerConnection_t.getTransceivers)}).then(function(d){m.logger.log(a.user_friendly_id()+
    ".getTransceiversAsync() remote success.");var c=[],g=[];d.params[0].forEach(function(b){var f=a.transceivers_.find(function(a){return a.object_id()===b.oid});void 0===f&&(m.logger.log(a.user_friendly_id()+" adding a RtpTransceiver with oid:"+b.oid),f=new z.RtpTransceiver(a,b.oid,k.ProxyMode.Remote,a.isUnified()));g.push(f.syncBarrier());c.push(f)});Promise.all(g).then(function(){a.transceivers_=c;m.logger.log(a.user_friendly_id()+".prop.getTransceiversAsync: returning transceiver with ids ["+a.transceivers_.map(function(a){return a.object_id()})+
    "]");b(a.transceivers_)})["catch"](function(d){a.logRemoteInvokeError(d,".prop.getTransceiversAsync() failed!");a.transceivers_=[];b(a.transceivers_)})})["catch"](function(d){a.logRemoteInvokeError(d,".getTransceiversAsync() failed!");a.transceivers_=[];b(a.transceivers_)})})};Object.defineProperty(b.prototype,"sctp",{get:function(){return this.sctp_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"ondatachannel",{get:function(){return this.ondatachannel_},set:function(a){var b=
    this;m.logger.log(this.user_friendly_id()+".set_ondatachannel() called.");this.ondatachannel_=a;this.waitUntilConnected(this.user_friendly_id()+".ondatachannel").then(function(){var d=b.registerCallbacks(!1,b.isNullCallback(a),t.method_id_RTCPeerConnection_t.ondatachannel);d.then(function(a){m.logger.log(b.user_friendly_id()+".ondatachannel callback received!!!");if(null===b.remotedatachannel_||b.remotedatachannel_.object_id()!=b.param0(a).oid)b.remotedatachannel_=new B.RtcDataChannel(b,b.param0(a).oid,
    k.ProxyMode.Remote),b.remotedatachannel_.syncBarrier().then(function(){m.logger.log(b.user_friendly_id()+"remotedatachannel_.syncBarrier(): success");var a=new Event("ondatachannel");a.channel=b.remotedatachannel_;if(b.localdatachannel_&&!b.localdatachannel_.isdestroyed())b.localdatachannel_.syncBarrier().then(function(){m.logger.log(b.user_friendly_id()+"ondatachannel(): notifying...");if(b.ondatachannel_)b.ondatachannel_(a)})["catch"](function(){m.logger.log(b.user_friendly_id()+"localdatachannel_.syncBarrier(): failed!")});
    else if(m.logger.log(b.user_friendly_id()+"ondatachannel(): notifying..."),b.ondatachannel_)b.ondatachannel_(a)})["catch"](function(){m.logger.log(b.user_friendly_id()+"remotedatachannel_.syncBarrier(): failed!")})});return b.remoteInvoke(!0,t.method_id_RTCPeerConnection_t.ondatachannel,d.success)})["catch"](function(){m.logger.log(b.user_friendly_id()+".ondatachannel() failed.")})},enumerable:!1,configurable:!0});b.prototype.fixDataChannelConfig=function(a){m.logger.log(this.user_friendly_id()+".fixDataChannelConfig() called: "+
    a);void 0==a&&(a={});void 0==a.negotiated&&void 0==a.id&&(a.negotiated=!1,a.id=-1);return a};b.prototype.createDataChannel=function(a,b){var d=this;m.logger.log(this.user_friendly_id()+".createDataChannel() called. label:"+a);this.localdatachannel_=new B.RtcDataChannel(this,0,k.ProxyMode.Pseudo);this.waitUntilConnected(this.user_friendly_id()+".createDataChannel").then(function(){return d.remoteInvoke(!1,t.method_id_RTCPeerConnection_t.createDataChannel,a,d.fixDataChannelConfig(b))}).then(function(a){m.logger.log(d.user_friendly_id()+
    ".createDataChannel() success with oid: "+d.param0(a).oid);d.localdatachannel_.bind(d,d.param0(a).oid);d.localdatachannel_.syncBarrier().then(function(){m.logger.log(d.user_friendly_id()+"channel.syncBarrier(): success")})["catch"](function(){m.logger.log(d.user_friendly_id()+"channel.syncBarrier(): failed!")})})["catch"](function(a){a=d.param0(a);m.logger.log(d.user_friendly_id()+".createDataChannel() failed with error: "+a)});m.logger.log(this.user_friendly_id()+".createDataChannel() returning: "+
    this.localdatachannel_);return this.localdatachannel_};return b}(k.ProxyObject);a.PeerConnection=b},658:function(b,a,c){var e=this&&this.__spreadArrays||function(){for(var a=0,b=0,d=arguments.length;b<d;b++)a+=arguments[b].length;for(var a=Array(a),c=0,b=0;b<d;b++)for(var g=arguments[b],r=0,e=g.length;r<e;r++,c++)a[c]=g[r];return a};Object.defineProperty(a,"__esModule",{value:!0});a.ProxyObject=a.ProxyMode=a.ProxyReadyState=a.number_allocator=a.callback=a.rpc_callback=a.deferred_action=void 0;var u=
    c(946),h=c(851),d=c(545),w=c(247),q=c(550),n=function(){function a(b,d,c){this.resolve=b;this.reject=d;this.name_=c}Object.defineProperty(a.prototype,"name",{get:function(){return this.name_},enumerable:!1,configurable:!0});a.prototype.post=function(a){1==a?(h.logger.log('deferred_action.post(): resolving "'+this.name_+'"'),this.resolve()):(h.logger.log('deferred_action.post(): rejecting "'+this.name_+'"'),this.reject())};a.prototype.postWithResult=function(a,b){1==a?(h.logger.log('deferred_action.post(): resolving "'+
    this.name_+'"'),this.resolve(b)):(h.logger.log('deferred_action.post(): rejecting "'+this.name_+'"'),this.reject())};a.prototype.postResolve=function(a){this.resolve(a)};a.prototype.postReject=function(a){void 0==a?this.reject():this.reject(a)};return a}();a.deferred_action=n;var k=function(){return function(a,b){this.id=a;this.is_null=b}}();a.rpc_callback=k;var v=function(){function a(b,d,c){this.success=new k(b<<16,d);this.fail=new k(b<<16|1,d);this.id=b;this.oneShot=c}a.prototype.resolve=function(a){h.logger.trace("callback.resolve() called. [id="+
    this.id+"]");null!=this.handler&&this.handler(a)};a.prototype.reject=function(a){null!=this.err_handler&&this.err_handler(a)};a.prototype.then=function(a){this.handler=a};a.prototype.prom=function(){var a=this;return new Promise(function(b,d){a.handler=b;a.err_handler=d})};return a}();a.callback=v;var z=function(){function a(b,d,c){this.min_=b<a.BOUND_LOW||b>a.BOUND_HIGH?a.DEF_MIN:b;this.max_=d<a.BOUND_LOW||d>a.BOUND_HIGH?a.DEF_MAX:d;this.interval_=c<a.BOUND_LOW||c>a.BOUND_HIGH?a.DEF_INTERVAL:c;this.numbers_=
    new Map;this.numbers_.set(this.min_,this.max_)}Object.defineProperty(a.prototype,"max",{get:function(){return this.max_},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"min",{get:function(){return this.min_},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"interval",{get:function(){return this.interval_},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"numbers",{get:function(){return this.numbers_},enumerable:!1,configurable:!0});a.prototype.allocate=
    function(){var a=-1;if(0<this.numbers_.size){var b=Array.from(this.numbers_.keys()).sort(function(a,b){return a-b})[0],d=this.numbers_.get(b),a=this.min_+(b-this.min_)*this.interval_;this.numbers_["delete"](b);b+=1;b<d&&this.numbers_.set(b,d)}return a};a.prototype.deallocate=function(a){var b=Array.from(this.numbers_.keys()).sort(function(a,b){return a-b});a=(a-this.min_)/this.interval_;for(var d=!1,c=0;c<b.length&&(b[c]==a+1?(this.numbers_.set(a,this.numbers_.get(b[c])),this.numbers_["delete"](b[c]),
    d=!0):this.numbers_.get(b[c])==a&&(this.numbers_.set(b[c],a+1),c+1<b.length&&b[c+1]==a+1&&(this.numbers_.set(b[c],this.numbers_.get(b[c+1])),this.numbers_["delete"](b[c+1])),d=!0),!d);c++);d||this.numbers_.set(a,a+1)};a.BOUND_LOW=0;a.BOUND_HIGH=4294967295;a.DEF_MIN=0;a.DEF_MAX=1024;a.DEF_INTERVAL=1;return a}();a.number_allocator=z;var g;(function(a){a[a.NotConfigured=0]="NotConfigured";a[a.Configured=1]="Configured";a[a.Error=2]="Error";a[a.Destroyed=3]="Destroyed"})(g=a.ProxyReadyState||(a.ProxyReadyState=
    {}));var B;(function(a){a[a.Local=0]="Local";a[a.Remote=1]="Remote";a[a.Pseudo=2]="Pseudo"})(B=a.ProxyMode||(a.ProxyMode={}));b=function(){function a(b,c,k,x,r,A){var z=this;void 0===r&&(r=null);void 0===A&&(A=[]);for(var v=[],n=6;n<arguments.length;n++)v[n-6]=arguments[n];this.hdxms=u.getRedirector();this.iid=c;this.oid=k;this.mode=x;this.proxystate=g.NotConfigured;this.deferredActions=[];this.pendingSyncBarriers=[];this.cbs=new Map;if(x===B.Local){n=!1;this.iid===q.class_id_t.EngineControl&&(n=
    !0);var l=this;this.hdxms.startRedirection(n,this.user_friendly_id()).then(function(){z.oid=a.nextId++;h.logger.log(z.user_friendly_id()+" assigned local oid:"+z.oid);return new Promise(function(a,b){l.waitUntilConnectedEx(l.user_friendly_id()+".ctor()",A).then(function(){h.logger.log(l.user_friendly_id()+".ctor() all parameter rpc objects are ready.");var a=l.oidsFromProxyOjbects(A).concat(v),b=q.WebrpcClassLibInfoUtil.getMethodFeatureByid(c,0);return l.hdxms.WSSendObjectWrapper(b,c,0,d.WsJsonUtil.createMessageByid.apply(d.WsJsonUtil,
    e([!1,!1,d.ws_msg_type_t.req,c,0,l.oid],a)))}).then(function(b){h.logger.log(l.user_friendly_id()+".ctor() success.");a(b)})["catch"](function(){h.logger.log(l.user_friendly_id()+".ctor() failed.");b()})})}).then(function(a){h.logger.trace("ProxyObject: setting state to configured. (iid: "+z.iid+" oid: "+z.oid+")");var d=z.oid;l.proxystate=g.Configured;l.oid=z.param0(a);h.logger.log(z.user_friendly_id()+" assigned remote oid for local oid:"+d);l.onConnected();r&&r();w.getGC().trackObject(z,b)})["catch"](function(){l.proxystate=
    g.Error;l.onConnected()})}else x===B.Remote&&(this.proxystate=g.Configured,w.getGC().trackObject(this,b))}a.prototype.syncBarrierDeep=function(a,b){var d=!0;0<this.pendingSyncBarriers.length&&(d=!1);this.pendingSyncBarriers.push(new n(a,b,this.user_friendly_id()+".syncBarrier"));h.logger.log(this.user_friendly_id()+".syncBarrierDeep() queing request for:"+this.oid+", rv:"+d+", items:"+this.pendingSyncBarriers.length);return d};a.prototype.syncBarrierResolve=function(a){for(h.logger.log(this.user_friendly_id()+
    ".syncBarrierResolve() items:"+this.pendingSyncBarriers.length);this.pendingSyncBarriers&&0<this.pendingSyncBarriers.length;)h.logger.log(this.user_friendly_id()+".syncBarrierResolve() items:"+this.pendingSyncBarriers.length+" resolving request for:"+this.oid),this.pendingSyncBarriers.shift().postResolve(a)};a.prototype.syncBarrierReject=function(a){for(h.logger.log(this.user_friendly_id()+".syncBarrierReject() items:"+this.pendingSyncBarriers.length);this.pendingSyncBarriers&&0<this.pendingSyncBarriers.length;)h.logger.log(this.user_friendly_id()+
    ".syncBarrierReject() rejecting request for:"+this.oid),this.pendingSyncBarriers.shift().postReject(a)};Object.defineProperty(a.prototype,"proxyreadystate",{get:function(){return this.proxystate},set:function(a){this.proxystate=a},enumerable:!1,configurable:!0});a.prototype.bind=function(a,b){h.logger.trace("ProxyObject: binding object. (iid: "+this.iid+" oid: "+b+" mode: "+this.mode+")");if(this.mode===B.Pseudo){this.proxystate=g.Configured;var d=this.oid;this.oid=b;h.logger.log(this.user_friendly_id()+
    " assigned remote oid for local oid:"+d);this.onConnected();w.getGC().trackObject(this,a);this.mode=B.Remote}else this.mode===B.Remote?h.logger.log("ProxyObject: binding already complete."):h.logger.log("ProxyObject: binding failure. incorrect mode!")};a.prototype.reconstructor=function(a,b,c){for(var x=this,r=[],A=3;A<arguments.length;A++)r[A-3]=arguments[A];this.proxystate=g.NotConfigured;this.deferredActions=[];A=q.WebrpcClassLibInfoUtil.getMethodFeatureByid(b,0);this.hdxms.WSSendObjectWrapper(A,
    b,0,d.WsJsonUtil.createMessageByid.apply(d.WsJsonUtil,e([!1,!1,d.ws_msg_type_t.req,b,0,this.oid],r))).then(function(b){h.logger.trace("ProxyObject: setting state to configured. (iid: "+x.iid+" oid: "+x.oid+")");var d=x.oid;x.proxystate=g.Configured;x.oid=x.param0(b);h.logger.log(x.user_friendly_id()+" assigned remote oid for local oid:"+d);x.onConnected();w.getGC().trackObject(x,a)})["catch"](function(){x.proxystate=g.Error;x.onConnected()})};a.prototype.setParent=function(a){w.getGC().setParent(this,
    a)};a.prototype.release=function(){h.logger.log(this.user_friendly_id()+".release() called.");w.getGC().releaseObject(this)};a.prototype.destroy=function(){h.logger.log(this.user_friendly_id()+".destroy() called.");this.proxystate=g.Destroyed;var a=q.WebrpcClassLibInfoUtil.getMethodFeatureByid(this.iid,0);this.hdxms.WSSendObjectWrapper(a,this.iid,0,d.WsJsonUtil.createMessageByid(!1,!0,d.ws_msg_type_t.req,this.iid,0,this.oid));this.clearCallbacks()};a.prototype.isdestroyed=function(){return this.proxystate==
    g.Destroyed};a.prototype.onConnected=function(){for(;this.deferredActions&&0<this.deferredActions.length;)this.deferredActions.shift().post(this.proxystate==g.Configured)};a.prototype.isPseudo=function(){return this.mode==B.Pseudo};a.prototype.checkState=function(a,b,d){var c=this;0>=a?(h.logger.log("ProxyObject.checkState() timeout waiting for connection response! failed. (iid: "+c.iid+" oid: "+c.oid+"name: "+d+")"),c.onConnected()):setTimeout(function(a,d){if(c.proxystate==g.Configured)c.onConnected();
    else if(c.proxystate==g.Error)c.onConnected();else if(c.proxystate==g.Destroyed)c.onConnected();else c.checkState(--a,b,d)},b,a,d)};a.prototype.waitUntilConnected=function(a){var b=this;return new Promise(function(d,c){b?(h.logger.trace("ProxyObject.waitUntilConnected(): readyState="+b.proxystate+". (iid: "+b.iid+" oid: "+b.oid+")"),b.proxystate==g.Destroyed?(b.onConnected(),h.logger.trace("rejecting already destroyed Object:"+b.user_friendly_id()),c("Object already destroyed :"+b.user_friendly_id())):
    b.proxystate==g.Configured?(b.onConnected(),d()):b.proxystate==g.Error?(h.logger.trace("ProxyObject.waitUntilConnected(): readyState="+b.proxystate+". (iid: "+b.iid+" oid: "+b.oid+")"),b.onConnected(),c()):(h.logger.log('ProxyObject.waitUntilConnected(): deferring action "'+a+'". (iid: '+b.iid+" oid: "+b.oid+")"),b.deferredActions.push(new n(d,c,a)),b.checkState(600,25,a))):c("Invalid Object")})};a.prototype.remoteInvoke=function(a,b){for(var c=[],k=2;k<arguments.length;k++)c[k-2]=arguments[k];if(this.proxystate==
    g.Destroyed)return h.logger.trace("rejecting already destroyed Object:"+this.user_friendly_id()),Promise.reject("Cannot invoke destroyed object :"+this.user_friendly_id());if(this.proxystate==g.Error)return h.logger.trace("rejecting already error state Object:"+this.user_friendly_id()),Promise.reject("Cannot invoke object in Error state:"+this.user_friendly_id());k=q.WebrpcClassLibInfoUtil.getMethodFeatureByid(this.iid,b);return this.hdxms.WSSendObjectWrapper(k,this.iid,b,d.WsJsonUtil.createMessageByid.apply(d.WsJsonUtil,
    e([a,!1,d.ws_msg_type_t.req,this.iid,b,this.oid],c)))};a.prototype.waitUntilConnectedEx=function(a,b){var d=this;return new Promise(function(c,g){if(d){for(var e=[],k=0;k<b.length;k++){var z=b[k];if(z instanceof Array)for(var v=0;v<z.length;v++){var t=z[v];e.push(t.waitUntilConnected(a+"."+t.user_friendly_id()))}else e.push(z.waitUntilConnected(a+"."+z.user_friendly_id()))}Promise.all(e).then(function(){h.logger.log(d.user_friendly_id()+".waitUntilConnectedEx() success.");c()})["catch"](function(a){d.logRemoteInvokeError(a,
    ".waitUntilConnectedEx(): failed.");g()})}else g("Invalid Object")})};a.prototype.oidsFromProxyOjbects=function(a){for(var b=[],d=0;d<a.length;d++){var c=a[d];if(c instanceof Array){for(var g=[],e=0;e<c.length;e++)g.push({oid:c[e].object_id()});b.push(g)}else b.push({oid:c.object_id()})}return b};a.prototype.remoteInvokeEx=function(a,b,c){for(var k=[],r=3;r<arguments.length;r++)k[r-3]=arguments[r];if(this.proxystate==g.Destroyed)return h.logger.trace("rejecting already destroyed Object:"+this.user_friendly_id()),
    Promise.reject("Cannot invoke destroyed object :"+this.user_friendly_id());if(this.proxystate==g.Error)return h.logger.trace("rejecting already error state Object:"+this.user_friendly_id()),Promise.reject("Cannot invoke object in Error state:"+this.user_friendly_id());var A=this;return new Promise(function(g,r){A.waitUntilConnectedEx(A.user_friendly_id()+".remoteInvokeEx",c).then(function(){h.logger.log(A.user_friendly_id()+".remoteInvokeEx() all parameter rpc objects are ready.");var g=A.oidsFromProxyOjbects(c).concat(k),
    r=q.WebrpcClassLibInfoUtil.getMethodFeatureByid(A.iid,b);return A.hdxms.WSSendObjectWrapper(r,A.iid,b,d.WsJsonUtil.createMessageByid.apply(d.WsJsonUtil,e([a,!1,d.ws_msg_type_t.req,A.iid,b,A.oid],g)))}).then(function(a){h.logger.log(A.user_friendly_id()+".remoteInvokeEx() success.");g(a)})["catch"](function(){h.logger.log(A.user_friendly_id()+".remoteInvokeEx() failed.");r()})})};a.prototype.logRemoteInvokeError=function(a,b){var d="",c=a;c?d=b+" with error: "+JSON.stringify(c.message):(d=this.param0(a),
    c=0!==Object.keys(d).length?new DOMException(b+" with error: "+JSON.stringify(d),this.user_friendly_id()):new DOMException(b,this.user_friendly_id()),d=c.message);h.logger.logx(this.isdestroyed(),this.user_friendly_id()+d);return c};a.prototype.allocate_cbid=function(){return a.cbid_allocator_.allocate()};a.prototype.deallocate_cbid=function(b){a.cbid_allocator_.deallocate(b)};a.prototype.registerCallbacks=function(a,b,d){var c=this,g=this.allocate_cbid();a=new v(g,b,a);0>g&&h.logger.log(this.user_friendly_id()+
    ".registerCallbacks(). !!!! ran out of cbid !!!!");b||(this.cbs.set(g,d),a.completion_cb=function(a,b){c.unregisterCallbacks(a)},this.hdxms.registerHandler(this.iid,this.oid,d,a));return a};a.prototype.unregisterCallbacks=function(a){this.cbs.has(a)?(this.hdxms.unregisterHandler(this.iid,this.oid,a),this.deallocate_cbid(a),this.cbs["delete"](a)):h.logger.log(this.user_friendly_id()+".unregisterCallbacks(). mid="+this.cbs.get(a)+" cbid="+a+" Cant find callback handler registration!!!!")};a.prototype.clearCallbacks=
    function(){h.logger.log(this.user_friendly_id()+".clearCallbacks().");for(var a=0,b=Array.from(this.cbs.keys());a<b.length;a++){var d=b[a];this.hdxms.unregisterHandler(this.iid,this.oid,d);this.deallocate_cbid(d)}this.cbs.clear()};a.prototype.object_id=function(){return this.oid};a.prototype.param0=function(a){var b={};a&&a.params&&(b=a.params[0]);return b};a.prototype.isNullCallback=function(a){return void 0==a||null==a};a.prototype.user_friendly_id=function(){var a=this.constructor.name;0<=this.iid&&
    (a=q.class_id_t[this.iid]);return a+"["+this.oid+"]"};a.prototype.isRedirected=function(){return this.hdxms.isRedirected()};a.prototype.isValid=function(){return!(this.proxystate===g.Error||this.proxystate===g.Destroyed)};a.prototype.registerStateChangeNotification=function(a){this.hdxms.registerStateChangeNotification(a)};a.prototype.unregisterStateChangeNotification=function(a){this.hdxms.unregisterStateChangeNotification(a)};a.nextId=0;a.CBID_MAX=65536;a.cbid_allocator_=new z(0,a.CBID_MAX,1);return a}();
    a.ProxyObject=b},144:function(b,a,c){var e=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f])};return a(b,d)};return function(b,d){function c(){this.constructor=b}a(b,d);b.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)}}(),u=this&&this.__awaiter||function(a,b,d,c){function g(a){return a instanceof d?a:new d(function(b){b(a)})}return new (d||
    (d=Promise))(function(f,d){function r(a){try{C(c.next(a))}catch(b){d(b)}}function e(a){try{C(c["throw"](a))}catch(b){d(b)}}function C(a){a.done?f(a.value):g(a.value).then(r,e)}C((c=c.apply(a,b||[])).next())})},h=this&&this.__generator||function(a,b){function d(a){return function(b){return c([a,b])}}function c(d){if(f)throw new TypeError("Generator is already executing.");for(;g;)try{if(f=1,r&&(e=d[0]&2?r["return"]:d[0]?r["throw"]||((e=r["return"])&&e.call(r),0):r.next)&&!(e=e.call(r,d[1])).done)return e;
    if(r=0,e)d=[d[0]&2,e.value];switch(d[0]){case 0:case 1:e=d;break;case 4:return g.label++,{value:d[1],done:!1};case 5:g.label++;r=d[1];d=[0];continue;case 7:d=g.ops.pop();g.trys.pop();continue;default:if(!(e=g.trys,e=0<e.length&&e[e.length-1])&&(6===d[0]||2===d[0])){g=0;continue}if(3===d[0]&&(!e||d[1]>e[0]&&d[1]<e[3]))g.label=d[1];else if(6===d[0]&&g.label<e[1])g.label=e[1],e=d;else if(e&&g.label<e[2])g.label=e[2],g.ops.push(d);else{e[2]&&g.ops.pop();g.trys.pop();continue}}d=b.call(a,g)}catch(C){d=
    [6,C],r=0}finally{f=e=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}var g={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},f,r,e,k;$jscomp.initSymbol();$jscomp.initSymbol();$jscomp.initSymbolIterator();return k={next:d(0),"throw":d(1),"return":d(2)},"function"===typeof Symbol&&(k[Symbol.iterator]=function(){return this}),k};Object.defineProperty(a,"__esModule",{value:!0});a.NavigatorUserMedia=a.RemoteMediaStreamConstraints=a.RemoteMediaTrackConstraints=a.RemoteMediaTrackConstraintSet=
    a.RemoteDevices=a.RemoteDeviceInfo=a.DeviceInfo=a.RemoteStreamEvent=a.RemoteStream=a.RemoteMediaTrack=a.enumeratedDevices=void 0;var d=c(550),w=c(658),q=c(851),n=c(946),k=c(394),v=c(259),z=c(650),g=c(973),l;a.enumeratedDevices=l;var t=function(){return function(a,b){this.type=a;this.target=b}}(),m=function(){function a(){this.is_local_clone=!1;this.clone_id=this.clone_count=0}a.prototype.clone=function(){this.clone_count++;var b=new a;b.is_local_clone=!0;b.clone_id=this.clone_count;return b};a.prototype.synchronize=
    function(a){return u(this,void 0,void 0,function(){return h(this,function(b){return this.is_local_clone?[2,a.asyncClone()]:[2,Promise.resolve(a)]})})};return a}(),p=function(a){function b(c,g,r){void 0===r&&(r=w.ProxyMode.Remote);c=a.call(this,c,d.class_id_t.MediaStreamTrack,g,r)||this;c.refCount_=0;c.refCount_++;c.clone_state=new m;return c}e(b,a);b.prototype.dumpInfo=function(){q.logger.log(this.user_friendly_id()+".dumpInfo() [id="+this.id+"] kind="+this.kind+" label="+this.label+" refcount="+
    this.refcount+" enabled="+this.enabled+" readyState="+this.readyState)};Object.defineProperty(b.prototype,"refcount",{get:function(){return this.refCount_},enumerable:!1,configurable:!0});b.prototype.addRef=function(){this.refCount_++;q.logger.log(this.user_friendly_id()+".addRef() called. [id="+this.id+"] refcount="+this.refCount_)};Object.defineProperty(b.prototype,"onended",{get:function(){q.logger.log(this.user_friendly_id()+".get_onended() called. [id="+this.id+"]");return this.onended_},set:function(a){var b=
    this;q.logger.log(this.user_friendly_id()+".set_onended() called. [id="+this.id+"]");this.onended_=a;this.waitUntilConnected("MediaStreamTrack.onended").then(function(){var c=b.registerCallbacks(!1,b.isNullCallback(a),d.method_id_MediaStreamTrack_t.onended);c.then(function(a){q.logger.log(b.user_friendly_id()+"onended event received!!!");a=new t("ended",b);b.readyState_="ended";b.onended_(a)});return b.remoteInvoke(!0,d.method_id_MediaStreamTrack_t.onended,c.success)})["catch"](function(a){b.logRemoteInvokeError(a,
    ".onended failed!")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onmute",{get:function(){q.logger.log(this.user_friendly_id()+".get_onmute() called. [id="+this.id+"]");return this.onmute_},set:function(a){var b=this;q.logger.log(this.user_friendly_id()+".set_onmute() called. [id="+this.id+"]");this.onmute_=a;this.waitUntilConnected("MediaStreamTrack.onmute").then(function(){var c=b.registerCallbacks(!1,b.isNullCallback(a),d.method_id_MediaStreamTrack_t.onmute);c.then(function(a){q.logger.log(b.user_friendly_id()+
    "onmute event received!!!");a=new t("mute",b);b.muted=!0;b.onmute_(a)});return b.remoteInvoke(!0,d.method_id_MediaStreamTrack_t.onmute,c.success)})["catch"](function(a){b.logRemoteInvokeError(a,".onmute failed!")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onunmute",{get:function(){q.logger.log(this.user_friendly_id()+".get_onunmute() called. [id="+this.id+"]");return this.onunmute_},set:function(a){var b=this;q.logger.log(this.user_friendly_id()+".set_onunmute() called. [id="+
    this.id+"]");this.onunmute_=a;this.waitUntilConnected("MediaStreamTrack.onunmute").then(function(){var c=b.registerCallbacks(!1,b.isNullCallback(a),d.method_id_MediaStreamTrack_t.onunmute);c.then(function(a){q.logger.log("onunmute event received!!!");a=new t("unmute",b);b.muted=!1;b.onunmute_(a)});return b.remoteInvoke(!0,d.method_id_MediaStreamTrack_t.onunmute,c.success)})["catch"](function(a){b.logRemoteInvokeError(a,".onunmute failed!")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,
    "onstop",{set:function(a){this.onstop_=a},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"enabled",{get:function(){q.logger.log(this.user_friendly_id()+".get_enabled() called. [id="+this.id+", value="+this.enabled_+"]");return this.enabled_},set:function(a){q.logger.log(this.user_friendly_id()+".set_enabled() called. [id="+this.id+", value="+a+"]");this.enabled_=a;this.remoteInvoke(!0,d.method_id_MediaStreamTrack_t.enabled,a)},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,
    "readyState",{get:function(){q.logger.log(this.user_friendly_id()+".get_readyState() called. [id="+this.id+"]");return this.readyState_},enumerable:!1,configurable:!0});b.prototype.asyncClone=function(){return u(this,void 0,void 0,function(){var a,c,g;return h(this,function(f){switch(f.label){case 0:return[4,this.waitUntilConnected("RemoteMediaTrack.asyncClone")];case 1:return f.sent(),[4,this.remoteInvoke(!1,d.method_id_MediaStreamTrack_t.clone)];case 2:return a=f.sent(),c=this.param0(a),g=new b(this,
    c.oid),[2,g.syncBarrier()]}})})};b.prototype.deepClone=function(a){var c=this;q.logger.log(this.user_friendly_id()+".deepClone() called. [id="+this.id+"]");if(z.RemoteSession.isFeatureTrackCloneWithIdSupported()){var g=new b(null,0,w.ProxyMode.Pseudo),f=new m;g.id=a?a:this.id+"."+f.clone_id.toString();g.label=this.label;g.kind=this.kind;g.enabled_=this.enabled_;g.muted=this.muted;g.readyState_=this.readyState_;g.trackSettings_=this.trackSettings_;g.clone_state=f;g.constraints_=this.constraints_;g.capabilities_=
    this.capabilities_;g.onended=this.onended;g.onmute=this.onmute;g.onunmute=this.onunmute;g.onstop=this.onstop;this.waitUntilConnected("RemoteMediaTrack.deepClone").then(function(){return c.remoteInvoke(!1,d.method_id_MediaStreamTrack_t.clone,g.id)}).then(function(a){q.logger.log(c.user_friendly_id()+".deepClone() success with oid: "+c.param0(a).oid);g.bind(null,c.param0(a).oid);g.syncBarrier().then(function(){q.logger.log(c.user_friendly_id()+"track.syncBarrier(): success")})["catch"](function(a){c.logRemoteInvokeError(a,
    "track.syncBarrier() failed!")})})["catch"](function(a){c.logRemoteInvokeError(a,".deepClone() failed!")});return g}q.logger.log(this.user_friendly_id()+".deepClone() is not supported!")};b.prototype.localClone=function(){q.logger.log(this.user_friendly_id()+".localClone() called. [id="+this.id+"]");var a=this.clone_state.clone(),d=new b(this,this.object_id());d.id=this.id+"."+a.clone_id.toString();d.label=this.label;d.kind=this.kind;d.enabled_=this.enabled_;d.muted=this.muted;d.readyState_=this.readyState_;
    d.trackSettings_=this.trackSettings_;d.clone_state=a;d.constraints_=this.constraints_;d.capabilities_=this.capabilities_;return d};b.prototype.clone=function(){q.logger.log(this.user_friendly_id()+".clone() called. [id="+this.id+"]");return z.RemoteSession.isFeatureTrackCloneWithIdSupported()?this.deepClone():this.localClone()};b.prototype.stop=function(){var a=this;q.logger.log(this.user_friendly_id()+".stop() called. [id="+this.id+"] refcount="+this.refCount_);this.readyState_="ended";if(0<this.refCount_&&
    (this.refCount_--,0===this.refCount_&&(q.logger.log(this.user_friendly_id()+".stop() called. [id="+this.id+"] remote invoking..."),this.remoteInvoke(!1,d.method_id_MediaStreamTrack_t.stop)["catch"](function(b){a.logRemoteInvokeError(b,".stop failed!")}),"video"==this.kind&&"remoteapp-track"==this.label&&g.ScreenSharing.screenSharingInstance().stopAppshare(),null!==this.onstop_&&void 0!=this.onstop_)))this.onstop_()};b.prototype.getCapabilities=function(){return this.capabilities_};b.prototype.getConstraints=
    function(){return this.constraints_};b.prototype.getSettings=function(){return"audio"==this.kind?function(a){return{deviceId:a.deviceId,echoCancellation:a.echoCancellation}}(this.trackSettings_):function(a){return{aspectRatio:a.aspectRatio,deviceId:a.deviceId,frameRate:a.frameRate,height:a.height,width:a.width}}(this.trackSettings_)};b.prototype.getChannelCount=function(){return 2};b.prototype.applyConstraints=function(a){var b=this;q.logger.log(this.user_friendly_id()+".applyConstraints() called.");
    return new Promise(function(c,f){b.waitUntilConnected("MediaStreamTrack.applyConstraints").then(function(){return Promise.all([b.remoteInvoke(!1,d.method_id_MediaStreamTrack_t.applyConstraints,a),b.syncBarrier()])})["catch"](function(a){b.logRemoteInvokeError(a,"applyConstraints failed!");f({name:"OverconstrainedError",message:"Failed to apply constraints."})}).then(function(){b.constraints_=a;return b.remoteInvoke(!1,d.method_id_MediaStreamTrack_t.getConstraints)}).then(function(a){b.constraints_=
    b.param0(a)})["catch"](function(a){b.logRemoteInvokeError(a,".syncBarrier() remote client does not support getConstraints method. Ignore it")}).then(function(){return c()})})};b.convertReadyState=function(a){return 0==a?"live":"ended"};b.prototype.syncBarrier=function(){var a=this;q.logger.log(this.user_friendly_id()+".syncBarrier() called.");return new Promise(function(c,g){a.syncBarrierDeep(c,g)&&a.waitUntilConnected("MediaStreamTrack.syncBarrier").then(function(){return Promise.all([a.remoteInvoke(!1,
    d.method_id_MediaStreamTrack_t.kind,""),a.remoteInvoke(!1,d.method_id_MediaStreamTrack_t.id,""),a.remoteInvoke(!1,d.method_id_MediaStreamTrack_t.label,""),a.remoteInvoke(!1,d.method_id_MediaStreamTrack_t.enabled,!1),a.remoteInvoke(!1,d.method_id_MediaStreamTrack_t.muted,!1),a.remoteInvoke(!1,d.method_id_MediaStreamTrack_t.readyState,0),a.remoteInvoke(!1,d.method_id_MediaStreamTrack_t.getSettings),a.remoteInvoke(!1,d.method_id_MediaStreamTrack_t.getCapabilities)])}).then(function(f){var d=0;f=f.map(function(b){return a.param0(b)});
    a.kind=f[0];a.id=f[1];a.label=f[2];a.enabled_=f[3];a.muted=f[4];d=f[5];a.trackSettings_=f[6];a.capabilities_=f[7];a.readyState_=b.convertReadyState(d);a.syncBarrierResolve(a)})["catch"](function(b){b=a.logRemoteInvokeError(b,".syncBarrier() failed!");a.syncBarrierReject(b)})})};b.prototype.dispose=function(){q.logger.log(this.user_friendly_id()+".dispose() called. [id="+this.id+"]");this.stop();0===this.refCount_&&this.release()};return b}(w.ProxyObject);a.RemoteMediaTrack=p;var y=function(){return function(){}}(),
    x=function(a){function b(c,g,r,f,e){void 0===r&&(r=w.ProxyMode.Local);void 0===f&&(f=[]);var k=this;q.logger.log("RemoteStream.ctor() streamid="+e+" num tracks="+f.length);r==w.ProxyMode.Remote||e||(e=b.uuidv4());k=e&&z.RemoteSession.isFeatureTrackCloneWithIdSupported()?a.call(this,c,d.class_id_t.MediaStream,g,r,null,[f],e)||this:a.call(this,c,d.class_id_t.MediaStream,g,r,null,[f])||this;k.id=e;k.tracks_=f;k.clone_state=new m;k.active_=!0;k.tracks_.forEach(function(a){a.setParent(k)});return k}e(b,
    a);b.uuidv4=function(){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,function(a){return(a^crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16)})};b.prototype.dumpInfo=function(){q.logger.log(this.user_friendly_id()+".dumpInfo() [id="+this.id+"] active="+this.active_+" num tracks="+this.tracks_.length);for(var a=0,b=this.tracks_;a<b.length;a++){var d=b[a];d&&d.dumpInfo()}};b.prototype.toggleAudio=function(a){q.logger.log(this.user_friendly_id()+".toggleAudio() called: "+
    a);for(var b=0,d=this.getAudioTracks();b<d.length;b++)d[b].enabled=a};b.prototype.toJSON=function(){var a=new y;a.id=this.id;a.active=this.active_;a.oid=this.object_id();return"RemoteStream:"+JSON.stringify(a)};Object.defineProperty(b.prototype,"active",{get:function(){var a=this;q.logger.log(this.user_friendly_id()+".get active() called. [id="+this.id+"] active="+this.active_);n.getRedirector().getFeatureValue(d.FEATURE_ms_teams_stream_active_status)?this.waitUntilConnected("MediaStream.active").then(function(){q.logger.log(a.user_friendly_id()+
    ".get active() remote invoking");return a.remoteInvoke(!1,d.method_id_MediaStream_t.active,!1)}).then(function(b){a.active_=a.param0(b);q.logger.log(a.user_friendly_id()+".get active() success, active="+a.active_)})["catch"](function(b){a.active_=!0;a.logRemoteInvokeError(b,".get active() failed! active="+a.active_)}):this.active_=!0;return this.active_},enumerable:!1,configurable:!0});b.prototype.getAudioTracks=function(){q.logger.log(this.user_friendly_id()+".getAudioTracks() called. [id="+this.id+
    "]");for(var a=[],b=0,d=this.tracks_;b<d.length;b++){var f=d[b];"audio"==f.kind&&a.push(f)}return a};b.prototype.getVideoTracks=function(){q.logger.log(this.user_friendly_id()+".getVideoTracks() called. [id="+this.id+"]");for(var a=[],b=0,d=this.tracks_;b<d.length;b++){var f=d[b];"video"==f.kind&&a.push(f)}return a};b.prototype.getTracks=function(){q.logger.log(this.user_friendly_id()+".getTracks() called. [id="+this.id+"]");return this.tracks_};b.prototype.getTrackById=function(a){q.logger.log(this.user_friendly_id()+
    ".getTrackById() called. [id="+this.id+"]");for(var b=0,d=this.tracks_;b<d.length;b++){var f=d[b];if(f.id==a)return f}};b.prototype.addTrack=function(a){var b=this;q.logger.log(this.user_friendly_id()+".addTrack() called. [id="+this.id+"]");this.tracks_.push(a);a&&a.dumpInfo();var c=this;this.waitUntilConnected("MediaStream.addTrack").then(function(){q.logger.log(c.user_friendly_id()+".addTrack remote invoking");return c.remoteInvokeEx(!1,d.method_id_MediaStream_t.addTrack,[a])}).then(function(){q.logger.log(c.user_friendly_id()+
    ".addTrack success")})["catch"](function(a){b.logRemoteInvokeError(a,".addTrack failed!")})};b.prototype.removeTrack=function(a){var b=this;q.logger.log(this.user_friendly_id()+".removeTrack() called. [id="+this.id+"]");var c=this.tracks_.indexOf(a);this.tracks_.splice(c,1);var f=this;this.waitUntilConnected("MediaStream.removeTrack").then(function(){q.logger.log(f.user_friendly_id()+".removeTrack remote invoking");return f.remoteInvokeEx(!1,d.method_id_MediaStream_t.removeTrack,[a])}).then(function(){q.logger.log(f.user_friendly_id()+
    ".removeTrack success")})["catch"](function(a){b.logRemoteInvokeError(a,".removeTrack failed!")})};b.prototype.asyncClone=function(){return u(this,void 0,void 0,function(){var a,c,g;return h(this,function(f){switch(f.label){case 0:return q.logger.log(this.user_friendly_id()+".asyncClone() called. [id="+this.id+"]"),[4,this.waitUntilConnected("asyncClone")];case 1:return f.sent(),[4,this.remoteInvoke(!1,d.method_id_MediaStream_t.clone)];case 2:return a=f.sent(),q.logger.log(a),c=this.param0(a),g=new b(this,
    c.oid,w.ProxyMode.Remote),[2,g.syncBarrier()]}})})};b.prototype.deepClone=function(a){var d=this;q.logger.log(this.user_friendly_id()+".deepClone() called. [id="+this.id+"]");if(z.RemoteSession.isFeatureTrackCloneWithIdSupported()){var c=[];this.tracks_.forEach(function(a){c.push(a.deepClone())});var f=new m;a=a?a:this.id+"."+f.clone_id.toString();var g=new b(null,0,w.ProxyMode.Local,c,a);g.id=a;g.active_=this.active_;g.clone_state=f;g.tracks_=c;g.waitUntilConnected("RemoteStream.deepClone").then(function(){g.syncBarrier().then(function(){q.logger.log(d.user_friendly_id()+
    "stream.syncBarrier(): success")})["catch"](function(a){d.logRemoteInvokeError(a,"stream.syncBarrier() failed!")})})["catch"](function(a){d.logRemoteInvokeError(a,".deepClone() failed!")});return g}q.logger.log(this.user_friendly_id()+".deepClone() is not supported!")};b.prototype.localClone=function(){q.logger.log(this.user_friendly_id()+".localClone() called. [id="+this.id+"]");var a=this.clone_state.clone(),d=new b(this,this.object_id(),w.ProxyMode.Remote);d.id=this.id+"."+a.clone_id.toString();
    d.active_=this.active_;this.tracks_.forEach(function(a){a.addRef()});d.tracks_=this.tracks_;d.clone_state=a;return d};b.prototype.clone=function(){q.logger.log(this.user_friendly_id()+".clone() called. [id="+this.id+"]");return z.RemoteSession.isFeatureTrackCloneWithIdSupported()?this.deepClone():this.localClone()};b.prototype.syncBarrier=function(){var a=this;q.logger.log(this.user_friendly_id()+".syncBarrier() called. [id="+this.id+"]");return new Promise(function(b,c){a.syncBarrierDeep(b,c)&&a.waitUntilConnected("MediaStream.syncBarrier").then(function(){var b=
    [];b.push(a.remoteInvoke(!1,d.method_id_MediaStream_t.id,""));n.getRedirector().getFeatureValue(d.FEATURE_ms_teams_stream_active_status)&&b.push(a.remoteInvoke(!1,d.method_id_MediaStream_t.active,!0));b.push(a.remoteInvoke(!1,d.method_id_MediaStream_t.getTracks));return Promise.all(b)}).then(function(b){q.logger.log(a.user_friendly_id()+".syncBarrier() remote success");var c;n.getRedirector().getFeatureValue(d.FEATURE_ms_teams_stream_active_status)?(b=b.map(function(b){return a.param0(b)}),a.id=b[0],
    a.active_=b[1],c=b[2]):(b=b.map(function(b){return a.param0(b)}),a.id=b[0],c=b[1],a.active_=!0);var g=[];b=function(b){var f=a.tracks_.find(function(a){return a.object_id()===b.oid});void 0===f&&(q.logger.log(a.user_friendly_id()+" adding a RemoteMediaTrack with oid:"+b.oid),f=new p(a,b.oid));g.push(f.syncBarrier())};for(var r=0;r<c.length;r++)b(c[r]);return Promise.all(g)}).then(function(b){a.tracks_=[];b.forEach(function(b){d.BUILD_TYPE_SDK||(b.onstop=function(){var b=!0;a.tracks_.forEach(function(a){"ended"!=
    a.readyState&&(b=!1)});b&&a.release()});a.tracks_.push(b)});a.syncBarrierResolve(a)})["catch"](function(b){a.logRemoteInvokeError(b,".syncBarrier failed!");a.syncBarrierReject()})})};b.prototype.dispose=function(){q.logger.log(this.user_friendly_id()+".dispose() called. [id="+this.id+"]");this.tracks_.forEach(function(a){a.dispose()});this.release()};return b}(w.ProxyObject);a.RemoteStream=x;b=function(a){function b(c,g){return a.call(this,c,d.class_id_t.MediaStreamEvent,g,w.ProxyMode.Remote)||this}
    e(b,a);b.prototype.syncBarrier=function(){var a=this;q.logger.log(this.user_friendly_id()+".syncBarrier() called.");return new Promise(function(b,c){a.syncBarrierDeep(b,c)&&a.waitUntilConnected("MediaStreamEvent.syncBarrier").then(function(){return a.remoteInvoke(!1,d.method_id_MediaStreamEvent_t.stream,{oid:0})}).then(function(b){return(new x(a,b.params[0].oid,w.ProxyMode.Remote)).syncBarrier()}).then(function(b){a.stream=b;a.syncBarrierResolve(a)})["catch"](function(b){b=a.logRemoteInvokeError(b,
    ".syncBarrier() failed!");a.syncBarrierReject(b)})})};return b}(w.ProxyObject);a.RemoteStreamEvent=b;var r=function(){return function(a,b,d,c){this.deviceId=a;this.groupId=b;this.kind=d;this.label=c}}();a.DeviceInfo=r;var A=function(a){function b(c){return a.call(this,null,d.class_id_t.MediaDeviceInfo,c,w.ProxyMode.Remote)||this}e(b,a);b.convertKind=function(a){return 0==a?"audioinput":1==a?"audiooutput":"videoinput"};b.prototype.syncBarrier=function(){var a=this;q.logger.log(this.user_friendly_id()+
    ".syncBarrier() called.");return new Promise(function(c,g){a.syncBarrierDeep(c,g)&&a.waitUntilConnected("RemoteDeviceInfo.syncBarrier").then(function(){return Promise.all([a.remoteInvoke(!1,d.method_id_MediaDeviceInfo_t.deviceId,""),a.remoteInvoke(!1,d.method_id_MediaDeviceInfo_t.kind,0),a.remoteInvoke(!1,d.method_id_MediaDeviceInfo_t.label,""),a.remoteInvoke(!1,d.method_id_MediaDeviceInfo_t.groupId,"")])}).then(function(f){a.kind=b.convertKind(a.param0(f.splice(1,1)[0]));f=f.map(function(b){return a.param0(b)});
    a.deviceId=f[0];a.label=f[1];a.groupId=f[2];a.syncBarrierResolve(a)})["catch"](function(b){b=a.logRemoteInvokeError(b,".syncBarrier() failed!");a.syncBarrierReject(b)})})};return b}(w.ProxyObject);a.RemoteDeviceInfo=A;b=function(b){function c(){var a=b.call(this,null,d.class_id_t.MediaDevices,0,w.ProxyMode.Local,function(){a.setDeviceChangeCallback()})||this;a.devices_=[];a.enumerateMarker="enumerateDevicesPrivate";a.enumerateRemoteMarker="enumeratedDevicesPrivate-Remote";a.shareSystemAudio_=!1;a.pendingEnumerateDevice_=
    [];a.panelid_=-1;return a}e(c,b);Object.defineProperty(c.prototype,"panelid",{set:function(a){this.panelid_=a},enumerable:!1,configurable:!0});c.prototype.clearPanelId=function(){this.panelid_=-1};c.prototype.enumerateDevices=function(){var a=this;return 0<this.devices_.length&&0==this.pendingEnumerateDevice_.length?new Promise(function(b,d){q.logger.log(a.user_friendly_id()+".enumerateDevices: returning cached devices");b(a.devices_)}):this.enumerateDevicesPrivate(!1)};c.prototype.enumerateDevicesPrivate=
    function(a){return n.getRedirector().getFeatureValue(d.FEATURE_ms_teams_enumerate_devices_v2)?this.enumerateDevicesPrivateV2(a):this.enumerateDevicesPrivateV1(a)};c.prototype.postEnumerateDevicesResult=function(){for(var a=!0,b=0,d=0,f=this.pendingEnumerateDevice_;d<f.length;d++){var c=f[d];if(0==a&&c.name==this.enumerateRemoteMarker)break;c.postWithResult(!0,this.devices_);b++;a=!1}0<b&&this.pendingEnumerateDevice_.splice(0,b)};c.prototype.enumerateDevicesPrivateV2=function(b){var c=this;q.logger.log(this.user_friendly_id()+
    ".enumerateDevicesPrivateV2() called. refresh:"+b+" pending:"+this.pendingEnumerateDevice_.length);return new Promise(function(g,f){1==b||0==c.pendingEnumerateDevice_.length?(c.pendingEnumerateDevice_.push(new w.deferred_action(g,f,c.enumerateRemoteMarker)),c.waitUntilConnected("RemoteDevices.enumerateDevicesPrivateV2").then(function(){q.logger.log(c.user_friendly_id()+".enumerateDevicesPrivateV2() remote invoking...");return c.remoteInvoke(!1,d.method_id_MediaDevices_t.enumerateDevicesV2)}).then(function(b){var f=
    [];b.params[0].forEach(function(a){a=new r(a.deviceId,a.groupId,A.convertKind(a.kind),a.label);f.push(a)});c.devices_=f;a.enumeratedDevices=l=f;q.logger.log(c.user_friendly_id()+".enumerateDevicesPrivateV2: resolving enumerated devices: "+JSON.stringify(c.devices_));c.postEnumerateDevicesResult()})["catch"](function(b){c.devices_=[];a.enumeratedDevices=l=[];c.logRemoteInvokeError(b,".enumerateDevicesPrivateV2() failed, resolving with empty list.");c.postEnumerateDevicesResult()})):(c.pendingEnumerateDevice_.push(new w.deferred_action(g,
    f,c.enumerateMarker)),q.logger.log(c.user_friendly_id()+".enumerateDevicesPrivateV2() not remoting this call..."))})};c.prototype.enumerateDevicesPrivateV1=function(b){var c=this;q.logger.log(this.user_friendly_id()+".enumerateDevicesPrivateV1() called. refresh:"+b+" pending:"+this.pendingEnumerateDevice_.length);return new Promise(function(g,f){1==b||0==c.pendingEnumerateDevice_.length?(c.pendingEnumerateDevice_.push(new w.deferred_action(g,f,c.enumerateRemoteMarker)),c.waitUntilConnected("RemoteDevices.enumerateDevicesPrivateV1").then(function(){q.logger.log(c.user_friendly_id()+
    ".enumerateDevicesPrivateV1() remote invoking...");return c.remoteInvoke(!1,d.method_id_MediaDevices_t.enumerateDevices)}).then(function(a){var b=[];a.params[0].forEach(function(a){a=new A(a.oid);b.push(a.syncBarrier())});return Promise.all(b)}).then(function(b){var f=[];b.forEach(function(a){var b=new r(a.deviceId,a.groupId,a.kind,a.label);f.push(b);a.release()});c.devices_=f;a.enumeratedDevices=l=f;q.logger.log(c.user_friendly_id()+".enumerateDevicesPrivateV1: resolving enumerated devices: "+JSON.stringify(c.devices_));
    c.postEnumerateDevicesResult()})["catch"](function(b){a.enumeratedDevices=l=[];c.devices_=[];c.logRemoteInvokeError(b,".enumerateDevicesPrivateV1() failed, resolving with empty list.");c.postEnumerateDevicesResult()})):(c.pendingEnumerateDevice_.push(new w.deferred_action(g,f,c.enumerateMarker)),q.logger.log(c.user_friendly_id()+".enumerateDevicesPrivateV1() not remoting this call..."))})};c.prototype.getDisplayMedia=function(a){var b=this;return new Promise(function(c,f){b.waitUntilConnected("RemoteDevices.getDisplayMedia").then(function(){return g.ScreenSharing.screenSharingInstance().setActiveSource(b.panelid_,
    z.RemoteSession.isFeaturAppshareSupported())}).then(function(f){void 0!==a.video&&null!==a.video&&void 0!==f&&(a.video.deviceId=f);n.getRedirector().getFeatureValue(d.FEATURE_ms_teams_share_system_audio)&&(void 0!==a.audio&&"boolean"!==typeof a.audio?q.logger.log("Non-boolean audio constraints"):a.audio=a.audio||b.shareSystemAudio_);f=b.prepareDisplayConstraints(a);f=J.toRemoteMediaStreamConstraints(f,!0);return b.remoteInvoke(!1,d.method_id_MediaDevices_t.getDisplayMedia,f)}).then(function(a){return(new x(null,
    a.params[0].oid,w.ProxyMode.Remote)).syncBarrier()}).then(function(a){c(a)})["catch"](function(a){g.ScreenSharing.screenSharingInstance().isAppshareActive()&&g.ScreenSharing.screenSharingInstance().stopAppshare();a=b.logRemoteInvokeError(a,".getDisplayMedia() failed!");f(a)})})};c.prototype.setDeviceChangeCallback=function(){var a=this;q.logger.log(this.user_friendly_id()+".set_DeviceChangeCallback() called.");this.waitUntilConnected("MediaDevices.ondevicechange").then(function(){var b=a.registerCallbacks(!1,
    !1,d.method_id_MediaDevices_t.ondevicechange);b.then(function(){q.logger.log(a.user_friendly_id()+".ondevicechange(): callback received!!!");a.enumerateDevicesPrivate(!0).then(function(){navigator.mediaDevices.dispatchEvent(new CustomEvent("devicechange"))})["catch"](function(){navigator.mediaDevices.dispatchEvent(new CustomEvent("devicechange"))})});return a.remoteInvoke(!0,d.method_id_MediaDevices_t.ondevicechange,b.success)})["catch"](function(b){a.logRemoteInvokeError(b,".set_ondevicechange() failed!")})};
    c.prototype.prepareDisplayConstraints=function(a){if(n.getRedirector().getFeatureValue(d.FEATURE_ms_teams_common_media_constraints))return a;var b={frameRate:15,width:{max:1920},height:{max:1080}};if(void 0!==a.video&&null!==a.video){var c=a.video;void 0!==c.frameRate&&void 0!==c.width&&void 0!==c.height&&(b.frameRate=c.frameRate,b.width.max=c.width.max||c.width,b.height.max=c.height.max||c.height)}return a.audio?{video:b,audio:a.audio}:{video:b}};return c}(w.ProxyObject);a.RemoteDevices=b;var M=
    function(){function a(){}a.toRemoteMediaTrackConstraintSet=function(a){var b=void 0;v.Util.hasValue(a)&&(b={},v.Util.hasValue(a.width)&&(b.width=a.width),v.Util.hasValue(a.height)&&(b.height=a.height),v.Util.hasValue(a.aspectRatio)&&(b.aspectRatio=a.aspectRatio),v.Util.hasValue(a.frameRate)&&(b.frameRate=a.frameRate),v.Util.hasValue(a.facingMode)&&(b.facingMode=a.facingMode),v.Util.hasValue(a.sampleRate)&&(b.sampleRate=a.sampleRate),v.Util.hasValue(a.sampleSize)&&(b.sampleSize=a.sampleSize),v.Util.hasValue(a.volume)&&
    (b.volume=a.volume),v.Util.hasValue(a.echoCancellation)&&(b.echoCancellation=a.echoCancellation),v.Util.hasValue(a.autoGainControl)&&(b.autoGainControl=a.autoGainControl),v.Util.hasValue(a.noiseSuppression)&&(b.noiseSuppression=a.noiseSuppression),v.Util.hasValue(a.latency)&&(b.latency=a.latency),v.Util.hasValue(a.channelCount)&&(b.channelCount=a.channelCount),v.Util.hasValue(a.deviceId)&&(b.deviceId=a.deviceId),v.Util.hasValue(a.groupId)&&(b.groupId=a.groupId),v.Util.hasValue(a.maxFrameRate)&&(b.maxFrameRate=
    a.maxFrameRate),v.Util.hasValue(a.maxHeight)&&(b.maxHeight=a.maxHeight),v.Util.hasValue(a.maxWidth)&&(b.maxWidth=a.maxWidth),v.Util.hasValue(a.minHeight)&&(b.minHeight=a.minHeight),v.Util.hasValue(a.minWidth)&&(b.minWidth=a.minWidth),v.Util.hasValue(a.sourceId)&&(b.sourceId=a.sourceId));return b};return a}();a.RemoteMediaTrackConstraintSet=M;var F=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}e(b,a);b.defMandatory=function(a){var b=a;v.Util.hasValue(a)?(v.Util.hasValue(a.maxFrameRate)||
    (b.maxFrameRate=30),v.Util.hasValue(a.minWidth)||(b.minWidth=360),v.Util.hasValue(a.maxWidth)||(b.maxWidth=1920),v.Util.hasValue(a.minHeight)||(b.minHeight=180),v.Util.hasValue(a.maxHeight)||(b.maxHeight=1080)):b={maxFrameRate:30,minWidth:360,maxWidth:1920,minHeight:180,maxHeight:1080};return b};b.toRemoteMediaTrackConstraints=function(a){var b=void 0;v.Util.hasValue(a)&&(b=M.toRemoteMediaTrackConstraintSet(a),b.advanced=[],v.Util.hasValue(a.advanced)&&a.advanced.forEach(function(a){a=M.toRemoteMediaTrackConstraintSet(a);
    b.advanced.push(a)}),v.Util.hasValue(a.mandatory)&&(b.mandatory="boolean"!=typeof a.mandatory?M.toRemoteMediaTrackConstraintSet(a.mandatory):a.mandatory));return b};return b}(M);a.RemoteMediaTrackConstraints=F;var J=function(){function a(){}a.getDefaultAudioDeviceId=function(){if(void 0!==l){var a=l.find(function(a){return"audioinput"===a.kind&&"default"===a.deviceId});if(void 0!==a)return a.deviceId}return""};a.getDefaultVideoDeviceId=function(){if(void 0!==l){var a=l.find(function(a){return"videoinput"===
    a.kind});if(void 0!==a)return a.deviceId}return""};a.toRemoteMediaStreamConstraints=function(b,c){void 0===c&&(c=!1);q.logger.log("RemoteMediaStreamConstraints.toRemoteMediaStreamConstraints() in constraints:"+JSON.stringify(b));var g={};v.Util.hasValue(b)&&(v.Util.hasValue(b.audio)&&("boolean"!=typeof b.audio?(g.audio=F.toRemoteMediaTrackConstraints(b.audio),0!=Object.keys(g.audio).length&&v.Util.hasValue(g.audio)||(g.audio={dummy:1}),d.BUILD_TYPE_SDK&&0==c&&a.isConstraintsAudioDeviceIdEmpty(b)&&
    (g.audio.deviceId=a.getDefaultAudioDeviceId(),q.logger.log("RemoteMediaStreamConstraints.toRemoteMediaStreamConstraints() set default audio deviceId:'"+g.audio.deviceId+"'"))):g.audio=b.audio),v.Util.hasValue(b.peerIdentity)&&(g.peerIdentity=b.peerIdentity),v.Util.hasValue(b.video)&&("boolean"!=typeof b.video?(g.video=F.toRemoteMediaTrackConstraints(b.video),0==c&&"boolean"!=typeof g.video.mandatory&&(g.video.mandatory=F.defMandatory(g.video.mandatory),d.BUILD_TYPE_SDK&&a.isConstraintsVideoSourceIdEmpty(b)&&
    (g.video.mandatory.sourceId=a.getDefaultVideoDeviceId(),q.logger.log("RemoteMediaStreamConstraints.toRemoteMediaStreamConstraints() set default video sourceId:'"+g.video.mandatory.sourceId+"'")))):(g.video=b.video,1==b.video&&0==c&&d.BUILD_TYPE_SDK&&a.isConstraintsVideoSourceIdEmpty(b)&&(g.video={},g.video.mandatory=F.defMandatory(void 0),g.video.mandatory.sourceId=a.getDefaultVideoDeviceId(),q.logger.log("RemoteMediaStreamConstraints.toRemoteMediaStreamConstraints() set default video sourceId:'"+
    g.video.mandatory.sourceId+"'")))));q.logger.log("RemoteMediaStreamConstraints.toRemoteMediaStreamConstraints() out constraints:"+JSON.stringify(g));return g};a.isConstraintsAudioDeviceIdEmpty=function(a){var b=!1;v.Util.hasValue(a)&&v.Util.hasValue(a.audio)&&("boolean"==typeof a.audio?1==a.audio&&(b=!0):(a=a.audio,!a||!1!==v.Util.hasValue(a.deviceId)&&""!==a.deviceId||(b=!0)));return b};a.isConstraintsVideoSourceIdEmpty=function(a){var b=!1;if(v.Util.hasValue(a)&&v.Util.hasValue(a.video))if("boolean"==
    typeof a.video)1==a.video&&(b=!0);else if(a=a.video)(a=a.mandatory)&&!1!==v.Util.hasValue(a.sourceId)&&""!==a.sourceId||(b=!0);return b};return a}();a.RemoteMediaStreamConstraints=J;var G=function(){function a(){this.video=this.audio=a.EmptyCapabilities}a.EmptyCapabilities={codecs:[],headerExtensions:[]};return a}();b=function(a){function b(){return a.call(this,null,d.class_id_t.NavigatorUserMedia,0,w.ProxyMode.Local)||this}e(b,a);b.getCapabilities=function(a){q.logger.log("NavigatorUserMedia.getCapabilities for type="+
    a+" capabilities="+JSON.stringify(b.capabilities[a]));return b.capabilities[a]};b.resetCapabilities=function(){b.capabilities=new G};b.prototype.getCapabilities=function(){var a=this;q.logger.log(this.user_friendly_id()+".getCapabilities...");return new Promise(function(c,g){a.waitUntilConnected("NavigatorUserMedia.getCapabilities").then(function(){return Promise.all([a.remoteInvoke(!1,d.method_id_NavigatorUserMedia_t.getCapabilities,"audio"),a.remoteInvoke(!1,d.method_id_NavigatorUserMedia_t.getCapabilities,
    "video")])}).then(function(f){b.capabilities.audio=a.param0(f[0]);b.capabilities.video=a.param0(f[1]);q.logger.log(a.user_friendly_id()+".getCapabilities capabilities="+JSON.stringify(b.capabilities));c(b.capabilities)})["catch"](function(b){g(a.logRemoteInvokeError(b,".getCapabilities failed!"))})})};b.prototype.setCodecCapabilities=function(a){var b=this;q.logger.log(this.user_friendly_id()+".setCodecCapabilities : set codecCapabilities to "+JSON.stringify(a));return new Promise(function(c,f){b.waitUntilConnected("NavigatorUserMedia.setCodecCapabilities").then(function(){return b.remoteInvoke(!1,
    d.method_id_NavigatorUserMedia_t.setCodecCapabilities,a)}).then(function(){q.logger.log(b.user_friendly_id()+".setCodecCapabilities() success.");c(!0);b.getCapabilities()})["catch"](function(a){a=b.logRemoteInvokeError(a,".setCodecCapabilities() failed!");f(a)})})};b.prototype.webkitGetUserMedia=function(a,b,d){return this.getUserMedia(a,b,d)};b.prototype.LogTelemetryDevice_=function(a){try{if("undefined"!==typeof a.audio){var b=a.audio.deviceId,d;l.forEach(function(a){b==a.deviceId&&(d=a.label)});
    q.logger.log(d);this.SendTelemetryData(k.tel_key_AudioDeviceUsed,d,0)}if("undefined"!==typeof a.video){var f=a.video.mandatory,c;f&&l.forEach(function(a){f.sourceId==a.deviceId&&(c=a.label)});q.logger.log(c);this.SendTelemetryData(k.tel_key_VideoDeviceUsed,c,0)}}catch(g){q.logger.log(g)}};b.prototype.getUserMedia=function(a,b,d){q.logger.log(this.user_friendly_id()+".getUserMedia() called: "+JSON.stringify(a));return b&&d?this.getUserMedia_v1(a,b,d):this.getUserMedia_v2(a)};b.prototype.getUserMedia_v2=
    function(a){var b=this;q.logger.log(this.user_friendly_id()+".getUserMedia_v2() called: "+JSON.stringify(a));return new Promise(function(d,f){b.getUserMediaPrivate(a,function(a){q.logger.log(b.user_friendly_id()+"getUserMedia_v2: resolving stream");d(a)},function(a){q.logger.log(b.user_friendly_id()+"getUserMedia_v2: rejecting stream");f(a)})})};b.prototype.getUserMedia_v1=function(a,b,d){q.logger.log(this.user_friendly_id()+".getUserMedia_v1() called: "+JSON.stringify(a));return this.getUserMediaPrivate(a,
    b,d)};b.prototype.getUserMediaPrivate=function(a,b,c){var f=this;this.waitUntilConnected("NavigatorUserMedia.getUserMediaPrivate").then(function(){var b=f.registerCallbacks(!0,!1,d.method_id_NavigatorUserMedia_t.getUserMedia),c=J.toRemoteMediaStreamConstraints(a);f.remoteInvoke(!1,d.method_id_NavigatorUserMedia_t.getUserMedia,c,b.success,b.fail);return b.prom()}).then(function(a){q.logger.log(f.user_friendly_id()+".getUserMediaPrivate: received success callback!");return(new x(null,f.param0(a).oid,
    w.ProxyMode.Remote)).syncBarrier()}).then(function(d){q.logger.log(f.user_friendly_id()+".getUserMediaPrivate: MediaStream ready to deliver",JSON.stringify(d));0==d.getTracks().length?(q.logger.log(f.user_friendly_id()+".getUserMediaPrivate: reporting no tracks as error."),c({constraintName:"",name:"OverconstrainedError",message:""})):(f.LogTelemetryDevice_(a),b(d))})["catch"](function(a){f.logRemoteInvokeError(a,".getUserMediaPrivate() failed!");n.getRedirector().getFeatureValue(d.FEATURE_ms_teams_1912)?
    f.param0&&a?c(f.param0(a)):c({constraintName:"",name:"OverconstrainedError",message:""}):c({constraintName:"",name:"OverconstrainedError",message:""})})};b.prototype.SendTelemetryData=function(a,b,d){n.getRedirector().telemetry.SendTelemetryData(k.tel_cmd.Data,a,b,d)};b.capabilities=new G;return b}(w.ProxyObject);a.NavigatorUserMedia=b},650:function(b,a,c){Object.defineProperty(a,"__esModule",{value:!0});a.RemoteSession=a.SessionInfo=a.RemoteType=void 0;var e=c(946),l=c(550),h=c(9),d=c(851),w=c(550),
    q=c(394),n;(function(a){a[a.Unknown=0]="Unknown";a[a.Windows=1]="Windows";a[a.Linux=2]="Linux"})(n=a.RemoteType||(a.RemoteType={}));var k=function(){return function(){}}();a.SessionInfo=k;b=function(){function a(b,d){var c=this;this.isremote_=!1;this.isremote_=!0;this.type_=n.Windows;this.address_="0.0.0.0";this.sessioninfo_=null;e.getRedirector().setRemoteSessionInfoCb(function(){return c.remoteSessionInfo()});this.enginecontrol_=new h.EngineControl(b+"::"+d)}a.prototype.release=function(){e.getRedirector().setRemoteSessionInfoCb(null)};
    a.prototype.user_friendly_id=function(){return"[RemoteSession]"};a.prototype.getFeatureFlags=function(){var a={};null!==this.enginecontrol_&&null!==this.enginecontrol_.features_&&void 0!==this.enginecontrol_.features_&&this.enginecontrol_.features_.forEach(function(b){a[b.name]=b.value});return a};a.prototype.isFeatureSupported=function(a){if("video"===a)return!0;if("givecontrol"===a&&this.sessioninfo_.clientPlatform.includes("Linux")||!(a in w.featureNameMap))return!1;for(var b=w.featureNameMap[a],
    d=this.getFeatureFlags(),c=0;c<b.length;c++)if(!(b[c]in d)||!0!==d[b[c]])return!1;return a in w.vdaFeatureNameMap?w.vdaFeatureNameMap[a].map(function(a){return e.getRedirector().getVDAFeatureValue(a)}).reduce(function(a,b){return a&&b},!0):!0};a.isFeaturePstnSupported=function(){return a.pstn_};a.isFeatureDtmfSupported=function(){return a.dtmfswitch_};a.isFeaturAppshareSupported=function(){return a.appshare_};a.isFeatureWebrtc1dot0Supported=function(){return a.webrtc1dot0_};a.isFeatureDataChannelSupported=
    function(){return a.datachannel_};a.isFeatureVdNoBufferLimitSupported=function(){return a.vdnobuflimit_};a.isFeatureCallConstraintsSupported=function(){return a.callconstraints_};a.isFeatureTrackCloneWithIdSupported=function(){return a.trackclonewithid_};a.isFeatureSenderStatsFixSupported=function(){return a.senderstatsfix_};a.prototype.getSessionInfo=function(){d.logger.log(this.user_friendly_id()+".getSessionInfo() called.");return null!=this.sessioninfo_?Promise.resolve(this.sessioninfo_):Promise.reject()};
    a.prototype.remoteSessionInfo=function(){var b=this,c=this;d.logger.log(c.user_friendly_id()+".remoteSessionInfo() called.");return new Promise(function(n,t){c.enginecontrol_.syncBarrier().then(function(e){d.logger.log(c.user_friendly_id()+"enginecontrol info received!");c.sessioninfo_=new k;c.sessioninfo_.type_script=l.HDXMS_VERSION;c.sessioninfo_.webrpc=e.version_.major.toString()+"."+e.version_.minor.toString()+"."+e.version_.revision.toString()+"."+e.version_.build.toString();if(void 0!=e.versions_&&
    null!=e.versions_){c.SendTelemetryData(q.tel_key_VerTypeScript,l.HDXMS_VERSION,0);for(var t=0,y=0,x=e.versions_;y<x.length;y++){var r=x[y],r=r.major.toString()+"."+r.minor.toString()+"."+r.revision.toString()+"."+r.build.toString();switch(t){case h.VersionType.Webrpc:c.sessioninfo_.webrpc=r;c.SendTelemetryData(q.tel_key_VerWebrpc,r,0);break;case h.VersionType.WebrtcCodecs:c.sessioninfo_.webrtc_codecs=r;c.SendTelemetryData(q.tel_key_VerWebrtcCodecs,r,0);break;case h.VersionType.Receiver:c.sessioninfo_.receiver=
    r;c.SendTelemetryData(q.tel_key_VerReceiver,r,0);break;case h.VersionType.Vda:c.sessioninfo_.vda=r;c.SendTelemetryData(q.tel_key_VerVda,r,0);break;case h.VersionType.Endpoint:c.sessioninfo_.endpoint=r;c.SendTelemetryData(q.tel_key_VerEndpoint,r,0);break;case h.VersionType.HdxRtcEngine:c.sessioninfo_.hdxrtcengine=r;c.SendTelemetryData(q.tel_key_VerHdxRtcEngine,r,0);break;default:d.logger.log(c.user_friendly_id()+"Unknown version type!")}t++}}void 0!=e.osinfo_&&null!=e.osinfo_&&(c.sessioninfo_.osinfo=
    e.osinfo_,e.osinfo_.family.includes("Darwin")&&["Mac OS X","macOS","OS X"].some(function(a){return e.osinfo_.edition.startsWith(a)})?c.sessioninfo_.clientPlatform="Mac":c.sessioninfo_.clientPlatform=e.osinfo_.family,c.SendTelemetryData(q.tel_key_OSFamily,e.osinfo_.family,0),c.SendTelemetryData(q.tel_key_OSVersion,e.osinfo_.version,0),c.SendTelemetryData(q.tel_key_OSArchitecture,e.osinfo_.architecture,0),c.SendTelemetryData(q.tel_key_OSDistro,e.osinfo_.distro,0),c.SendTelemetryData(q.tel_key_OSEdition,
    e.osinfo_.edition,0));void 0!=e.endpointid_&&null!=e.endpointid_&&(c.sessioninfo_.endpointId=e.endpointid_.machine_id);void 0!=e.hardwareinfo_&&null!=e.hardwareinfo_&&(c.sessioninfo_.hardware_info=e.hardwareinfo_,c.SendTelemetryData(q.tel_key_CPUModel,e.hardwareinfo_.cpu_info.cpumodel,0),c.SendTelemetryData(q.tel_key_CPUProcessors,e.hardwareinfo_.cpu_info.numberofprocessors,0),c.SendTelemetryData(q.tel_key_CPUGpuinfo,JSON.stringify(e.hardwareinfo_.gpu_info.gpus),0),c.SendTelemetryData(q.tel_key_CPUTotalmemory,
    e.hardwareinfo_.memory_info.totalmemory,0));a.pstn_=b.isFeatureSupported(l.Features.FEATURE_public_pstn);a.dtmfswitch_=b.isFeatureSupported(l.Features.FEATURE_public_dtmf);a.appshare_=b.isFeatureSupported(l.Features.FEATURE_public_app_sharing);a.webrtc1dot0_=b.isFeatureSupported(l.Features.FEATURE_public_webrtc1dot0);a.datachannel_=b.isFeatureSupported(l.Features.FEATURE_public_data_channel);a.vdnobuflimit_=b.isFeatureSupported(l.Features.FEATURE_public_vdnobuflimit);a.callconstraints_=b.isFeatureSupported(l.Features.FEATURE_public_stream_resolution);
    a.trackclonewithid_=b.isFeatureSupported(l.Features.FEATURE_public_track_clone_with_id);a.senderstatsfix_=b.isFeatureSupported(l.Features.FEATURE_public_sender_stats_fix);n(c.sessioninfo_);c.enginecontrol_.release()})["catch"](function(){e.getRedirector().isPingActive()?c.retrySessionInfo():(t(),c.enginecontrol_.release(),c.enginecontrol_=null)})})};a.prototype.retrySessionInfo=function(){var a=this;setTimeout(function(){d.logger.log("checking if we are connected...");a.enginecontrol_.bind();e.getRedirector().handleRemoteSessionInfo()},
    15E3)};a.prototype.SendTelemetryData=function(a,b,d){e.getRedirector().telemetry.SendTelemetryData(q.tel_cmd.Data,a,b,d)};a.pstn_=!1;a.dtmfswitch_=!1;a.appshare_=!1;a.webrtc1dot0_=!1;a.datachannel_=!1;a.vdnobuflimit_=!1;a.callconstraints_=!1;a.trackclonewithid_=!1;a.senderstatsfix_=!1;return a}();a.RemoteSession=b},24:function(b,a,c){var e=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&
    (a[d]=b[d])};return a(b,d)};return function(b,d){function c(){this.constructor=b}a(b,d);b.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)}}();Object.defineProperty(a,"__esModule",{value:!0});a.RtcDataChannel=a.RTCSctpTransport=void 0;var l=c(658),h=c(550),d=c(851),w=c(589),q;(function(a){a[a["new"]=0]="new";a[a.connecting=1]="connecting";a[a.connected=2]="connected";a[a.closed=3]="closed";a[a.max=4]="max"})(q||(q={}));b=function(a){function b(c,g){var e=a.call(this,c,h.class_id_t.RTCSctpTransport,
    g,l.ProxyMode.Remote)||this;d.logger.log(e.user_friendly_id()+".constructor");return e}e(b,a);b.prototype.syncBarrier=function(){var a=this;d.logger.log(this.user_friendly_id()+".syncBarrier() called.");return new Promise(function(b,c){a.syncBarrierDeep(b,c)&&a.waitUntilConnected("RTCSctpTransport.syncBarrier").then(function(){d.logger.log(a.user_friendly_id()+".syncBarrierBase success.");return Promise.all([a.remoteInvoke(!1,h.method_id_RTCSctpTransport_t.transport,{oid:0}),a.remoteInvoke(!1,h.method_id_RTCSctpTransport_t.state,
    0),a.remoteInvoke(!1,h.method_id_RTCSctpTransport_t.maxMessageSize,0),a.remoteInvoke(!1,h.method_id_RTCSctpTransport_t.maxChannels,0)])}).then(function(b){var c;c=b.map(function(b){return a.param0(b)});b=c[0];a.sctpstate_=c[1];a.maxMessageSize_=c[2];a.maxChannels_=c[3];c=a.transport_;void 0==b||!1!==b.is_null||null!==a.transport_&&a.transport_.object_id()==b.oid||(c=new w.DtlsTransport(a,b.oid));c.syncBarrier().then(function(b){d.logger.log(a.user_friendly_id()+"transport.syncBarrier(): success");
    a.transport_=b;a.syncBarrierResolve(a)})["catch"](function(){d.logger.log(a.user_friendly_id()+"transport.syncBarrier(): failed!");a.transport_=null;a.syncBarrierResolve(a)})})["catch"](function(b){b=a.logRemoteInvokeError(b,".syncBarrier() failed!");a.syncBarrierReject(b)})})};Object.defineProperty(b.prototype,"transport",{get:function(){d.logger.log(this.user_friendly_id()+".get_transport() called: "+this.transport_);return this.transport_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,
    "state",{get:function(){d.logger.log(this.user_friendly_id()+".get_state() called: "+this.sctpstate_);return this.sctpstate_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"maxMessageSize",{get:function(){d.logger.log(this.user_friendly_id()+".get_maxMessageSize() called: "+this.maxMessageSize_);return this.maxMessageSize_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"maxChannels",{get:function(){d.logger.log(this.user_friendly_id()+".get_maxChannels() called: "+
    this.maxChannels_);return this.maxChannels_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onstatechange",{get:function(){d.logger.log(this.user_friendly_id()+".get_onstatechange() called: "+this.onstatechange_);return this.onstatechange_},set:function(a){var c=this;d.logger.log(this.user_friendly_id()+".set_onstatechange() called.");this.onstatechange_=a;this.waitUntilConnected(this.user_friendly_id()+".onstatechange").then(function(){var e=c.registerCallbacks(!1,c.isNullCallback(a),
    h.method_id_RTCSctpTransport_t.onstatechange);e.then(function(a){d.logger.log(c.user_friendly_id()+".onstatechange callback received!!!");c.sctpstate_=b.convertState(c.param0(a));d.logger.log(c.user_friendly_id()+"sctpstate_: "+c.sctpstate_);a=new Event("onstatechange");c.onstatechange_(a)});return c.remoteInvoke(!0,h.method_id_RTCSctpTransport_t.onstatechange,e.success)})["catch"](function(){d.logger.log(c.user_friendly_id()+".onstatechange() failed.")})},enumerable:!1,configurable:!0});b.convertState=
    function(a){return a==q["new"]?"closed":a==q.connecting?"connecting":a==q.connected?"connected":"closed"};return b}(l.ProxyObject);a.RTCSctpTransport=b;var n;(function(a){a[a.connecting=0]="connecting";a[a.open=1]="open";a[a.closing=2]="closing";a[a.closed=3]="closed"})(n||(n={}));b=function(a){function b(c,g,e){c=a.call(this,c,h.class_id_t.RTCDataChannel,g,e)||this;c.binaryType_="blob";d.logger.log(c.user_friendly_id()+".constructor");return c}e(b,a);b.prototype.syncBarrier=function(){var a=this;
    d.logger.log(this.user_friendly_id()+".syncBarrier() called.");return new Promise(function(b,c){a.syncBarrierDeep(b,c)&&a.waitUntilConnected("RtcDataChannel.syncBarrier").then(function(){d.logger.log(a.user_friendly_id()+".syncBarrier remote invoking.");return Promise.all([a.remoteInvoke(!1,h.method_id_RTCDataChannel_t.label,""),a.remoteInvoke(!1,h.method_id_RTCDataChannel_t.ordered,!0),a.remoteInvoke(!1,h.method_id_RTCDataChannel_t.maxPacketLifeTime,0),a.remoteInvoke(!1,h.method_id_RTCDataChannel_t.maxRetransmits,
    0),a.remoteInvoke(!1,h.method_id_RTCDataChannel_t.protocol,""),a.remoteInvoke(!1,h.method_id_RTCDataChannel_t.negotiated,!1),a.remoteInvoke(!1,h.method_id_RTCDataChannel_t.id,0),a.remoteInvoke(!1,h.method_id_RTCDataChannel_t.readyState,0),a.remoteInvoke(!1,h.method_id_RTCDataChannel_t.bufferedAmount,0),a.remoteInvoke(!1,h.method_id_RTCDataChannel_t.bufferedAmountLowThreshold,0)])}).then(function(b){d.logger.log(a.user_friendly_id()+".syncBarrier success.");var c;b=b.map(function(b){return a.param0(b)});
    a.label_=b[0];a.ordered_=b[1];a.maxPacketLifeTime_=b[2];a.maxRetransmits_=b[3];a.protocol_=b[4];a.negotiated_=b[5];a.id_=b[6];c=b[7];a.bufferedAmount_=b[8];a.bufferedAmountLowThreshold_=b[9];a.readyState_=a.toRTCDataChannelState(c);a.syncBarrierResolve(a)})["catch"](function(b){b=a.logRemoteInvokeError(b,".syncBarrier() failed!");a.syncBarrierReject(b)})})};Object.defineProperty(b.prototype,"label",{get:function(){d.logger.log(this.user_friendly_id()+".get_label() called: "+this.label_);return this.label_},
    enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"ordered",{get:function(){d.logger.log(this.user_friendly_id()+".get_ordered() called: "+this.ordered_);return this.ordered_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"maxPacketLifeTime",{get:function(){d.logger.log(this.user_friendly_id()+".get_maxPacketLifeTime() called: "+this.maxPacketLifeTime_);return this.maxPacketLifeTime_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"maxRetransmits",
    {get:function(){d.logger.log(this.user_friendly_id()+".get_maxRetransmits() called: "+this.maxRetransmits_);return this.maxRetransmits_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"protocol",{get:function(){d.logger.log(this.user_friendly_id()+".get_protocol() called: "+this.protocol_);return this.protocol_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"negotiated",{get:function(){d.logger.log(this.user_friendly_id()+".get_negotiated() called: "+this.negotiated_);
    return this.negotiated_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"id",{get:function(){d.logger.log(this.user_friendly_id()+".get_id() called: "+this.id_);return this.id_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"readyState",{get:function(){d.logger.log(this.user_friendly_id()+".get_readyState() called: "+this.readyState_);return this.readyState_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"bufferedAmount",{get:function(){d.logger.log(this.user_friendly_id()+
    ".get_bufferedAmount() called: "+this.bufferedAmount_);return this.bufferedAmount_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"bufferedAmountLowThreshold",{get:function(){d.logger.log(this.user_friendly_id()+".get_bufferedAmountLowThreshold() called: "+this.bufferedAmountLowThreshold_);return this.bufferedAmountLowThreshold_},set:function(a){d.logger.log(this.user_friendly_id()+".get_bufferedAmountLowThreshold() called: "+a);this.bufferedAmountLowThreshold_=a},enumerable:!1,
    configurable:!0});Object.defineProperty(b.prototype,"binaryType",{get:function(){d.logger.log(this.user_friendly_id()+".get_binaryType() called: "+this.binaryType_);return this.binaryType_},set:function(a){d.logger.log(this.user_friendly_id()+".set_binaryType() called: "+a);this.binaryType_="blob"==a||"arraybuffer"==a?a:"blob"},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onopen",{get:function(){d.logger.log(this.user_friendly_id()+".get_onopen() called.");return this.onopen_},
    set:function(a){var b=this;d.logger.log(this.user_friendly_id()+".set_onopen() called.");this.onopen_=a;this.waitUntilConnected(this.user_friendly_id()+".onopen").then(function(){var c=b.registerCallbacks(!1,b.isNullCallback(a),h.method_id_RTCDataChannel_t.onopen);c.then(function(a){d.logger.log(b.user_friendly_id()+".onopen callback received!!!");b.syncBarrier().then(function(){d.logger.log(b.user_friendly_id()+".onopen notifying...");var a=new Event("open",{});Object.defineProperty(a,"target",{writable:!1,
    value:b});b.onopen_(a)})["catch"](function(){d.logger.log(b.user_friendly_id()+".syncBarrier(): failed!")})});return b.remoteInvoke(!0,h.method_id_RTCDataChannel_t.onopen,c.success)})["catch"](function(){d.logger.log(b.user_friendly_id()+".onopen() failed.")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onbufferedamountlow",{get:function(){d.logger.log(this.user_friendly_id()+".get_onbufferedamountlow() called.");return this.onbufferedamountlow_},set:function(a){var b=this;
    d.logger.log(this.user_friendly_id()+".set_onbufferedamountlow() called.");this.onbufferedamountlow_=a;this.waitUntilConnected(this.user_friendly_id()+".onbufferedamountlow").then(function(){var c=b.registerCallbacks(!1,b.isNullCallback(a),h.method_id_RTCDataChannel_t.onbufferedamountlow);c.then(function(a){d.logger.log(b.user_friendly_id()+".onbufferedamountlow callback received!!!");a=new Event("onbufferedamountlow");Object.defineProperty(a,"target",{writable:!1,value:b});b.onbufferedamountlow_(a)});
    return b.remoteInvoke(!0,h.method_id_RTCDataChannel_t.onbufferedamountlow,c.success)})["catch"](function(){d.logger.log(b.user_friendly_id()+".onbufferedamountlows() failed.")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onerror",{get:function(){d.logger.log(this.user_friendly_id()+".get_onerror() called.");return this.onerror_},set:function(a){var b=this;d.logger.log(this.user_friendly_id()+".set_onerror() called.");this.onerror_=a;this.waitUntilConnected(this.user_friendly_id()+
    ".onerror").then(function(){var c=b.registerCallbacks(!1,b.isNullCallback(a),h.method_id_RTCDataChannel_t.onerror);c.then(function(a){d.logger.log(b.user_friendly_id()+".onerror callback received!");a=b.param0(a);d.logger.log(b.user_friendly_id()+"error: "+a);a=new Event("onerror");Object.defineProperty(a,"target",{writable:!1,value:b});b.onerror_(a)});return b.remoteInvoke(!0,h.method_id_RTCDataChannel_t.onerror,c.success)})["catch"](function(){d.logger.log(b.user_friendly_id()+".onerror() failed.")})},
    enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onclosing",{get:function(){d.logger.log(this.user_friendly_id()+".get_onclosing() called.");return this.onclosing_},set:function(a){var b=this;d.logger.log(this.user_friendly_id()+".set_onclosing() called.");this.onclosing_=a;this.waitUntilConnected(this.user_friendly_id()+".onclosing").then(function(){var c=b.registerCallbacks(!1,b.isNullCallback(a),h.method_id_RTCDataChannel_t.onclosing);c.then(function(a){d.logger.log(b.user_friendly_id()+
    ".onclosing callback received!!!");a=new Event("onclosing");Object.defineProperty(a,"target",{writable:!1,value:b});b.onclosing_(a)});return b.remoteInvoke(!0,h.method_id_RTCDataChannel_t.onclosing,c.success)})["catch"](function(){d.logger.log(b.user_friendly_id()+".onclosing() failed.")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onclose",{get:function(){d.logger.log(this.user_friendly_id()+".get_onclose() called.");return this.onclose_},set:function(a){var b=this;d.logger.log(this.user_friendly_id()+
    ".set_onclose() called.");this.onclose_=a;this.waitUntilConnected(this.user_friendly_id()+".onclose").then(function(){var c=b.registerCallbacks(!1,b.isNullCallback(a),h.method_id_RTCDataChannel_t.onclose);c.then(function(a){d.logger.log(b.user_friendly_id()+".onclose callback received!!!");a=new Event("onclose");Object.defineProperty(a,"target",{writable:!1,value:b});b.onclose_(a)});return b.remoteInvoke(!0,h.method_id_RTCDataChannel_t.onclose,c.success)})["catch"](function(){d.logger.log(b.user_friendly_id()+
    ".onclose() failed.")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onmessage",{get:function(){d.logger.log(this.user_friendly_id()+".get_onmessage() called.");return this.onmessage_},set:function(a){var b=this;d.logger.log(this.user_friendly_id()+".set_onmessage() called.");this.onmessage_=a;this.waitUntilConnected(this.user_friendly_id()+".onmessage").then(function(){var c=b.registerCallbacks(!1,b.isNullCallback(a),h.method_id_RTCDataChannel_t.onmessage);c.then(function(a){d.logger.log(b.user_friendly_id()+
    ".onmessage callback received!!!");var c=b.param0(a);a=new Event("onmessage");c.binary?a.data=c.data_ab:(c=atob(c.data_sz),a.data=c);b.onmessage_(a)});return b.remoteInvoke(!0,h.method_id_RTCDataChannel_t.onmessage,c.success)})["catch"](function(){d.logger.log(b.user_friendly_id()+".onmessage() failed.")})},enumerable:!1,configurable:!0});b.prototype.close=function(){var a=this;d.logger.log(this.user_friendly_id()+".close() called.");this.waitUntilConnected("RTCDataChannel.close").then(function(){return a.remoteInvoke(!1,
    h.method_id_RTCDataChannel_t.close)}).then(function(){d.logger.log(a.user_friendly_id()+".close: success.")})["catch"](function(){d.logger.log(a.user_friendly_id()+".close: failed.")})};b.prototype.toByteArray=function(a){var b=[];a=new Uint8Array(a instanceof ArrayBuffer?a:a.buffer);for(var d in a)b.push(a[d]);return b};b.prototype.send=function(a){var b=this;d.logger.log(this.user_friendly_id()+".send() called.");this.waitUntilConnected("RTCDataChannel.send").then(function(){if("string"===typeof a)return d.logger.log(b.user_friendly_id()+
    "data(string): "+a),b.remoteInvoke(!1,h.method_id_RTCDataChannel_t.send_text,a);if(a instanceof Blob)a.arrayBuffer().then(function(a){a=b.toByteArray(a);return b.remoteInvoke(!1,h.method_id_RTCDataChannel_t.send_binary,a)})["catch"](function(){d.logger.log(b.user_friendly_id()+".arrayBuffer(): failed.")});else{var c=b.toByteArray(a);return b.remoteInvoke(!1,h.method_id_RTCDataChannel_t.send_binary,c)}}).then(function(){d.logger.log(b.user_friendly_id()+".send: success.")})["catch"](function(){d.logger.log(b.user_friendly_id()+
    ".send: failed.")})};b.prototype.toRTCDataChannelState=function(a){var b="closed";a==n.connecting?b="connecting":a==n.open?b="open":a==n.closing?b="closing":a==n.closed&&(b="closed");return b};return b}(l.ProxyObject);a.RtcDataChannel=b},484:function(b,a,c){var e=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])};return a(b,d)};return function(b,d){function c(){this.constructor=
    b}a(b,d);b.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)}}();Object.defineProperty(a,"__esModule",{value:!0});a.RtcRtpReceiveParameters=a.RtcRtpSendParameters=a.RtcRtpEncodingParameters=a.RtcRtpParameters=a.RtcRtcpParameters=a.RtcRtpHeaderExtensionParameters=a.RtcRtpCodecParameters=void 0;var l=c(851),h=function(){function a(){}a.defRtcRtpCodecParameters=function(){return{mimeType:"",payloadType:0,sdpFmtpLine:""}};a.defRTCRtpCodecParameters=function(){return{clockRate:0,mimeType:"",
    payloadType:0}};a.toRtcRtpCodecParameters=function(b){var d=a.defRtcRtpCodecParameters();b&&(b.channels&&(d.channels=b.channels),b.clockRate&&(d.clockRate=b.clockRate),b.mimeType&&(d.mimeType=b.mimeType),b.payloadType&&(d.payloadType=b.payloadType),b.sdpFmtpLine&&(d.sdpFmtpLine=b.sdpFmtpLine));return d};a.toRTCRtpCodecParameters=function(b){var d=a.defRTCRtpCodecParameters();b&&(b.channels&&(d.channels=b.channels),b.clockRate&&(d.clockRate=b.clockRate),b.mimeType&&(d.mimeType=b.mimeType),b.payloadType&&
    (d.payloadType=b.payloadType),b.sdpFmtpLine&&(d.sdpFmtpLine=b.sdpFmtpLine));return d};return a}();a.RtcRtpCodecParameters=h;var d=function(){function a(){}a.defRtcRtpHeaderExtensionParameters=function(){return{encrypted:!1,id:0,uri:""}};a.defRTCRtpHeaderExtensionParameters=function(){return{id:0,uri:""}};a.toRtcRtpHeaderExtensionParameters=function(b){var d=a.defRtcRtpHeaderExtensionParameters();if(b){var c=b.encrypted;void 0!=c&&null!=c&&(d.encrypted=c);b.id&&(d.id=b.id);b.uri&&(d.uri=b.uri)}return d};
    a.toRTCRtpHeaderExtensionParameters=function(b){var d=a.defRTCRtpHeaderExtensionParameters();if(b){var c=b.encrypted;void 0!=c&&null!=c&&(d.encrypted=c);b.id&&(d.id=b.id);b.uri&&(d.uri=b.uri)}return d};return a}();a.RtcRtpHeaderExtensionParameters=d;var w=function(){function a(){}a.defRtcRtcpParameters=function(){return{cname:"",reducedSize:!1}};a.defRTCRtcpParameters=function(){return{}};a.toRtcRtcpParameters=function(b){var d=a.defRtcRtcpParameters();b&&(b.cname&&(d.cname=b.cname),b=b.reducedSize,
    void 0!=b&&null!=b&&(d.reducedSize=b));return d};a.toRTCRtcpParameters=function(b){var d=a.defRTCRtcpParameters();b&&(b.cname&&(d.cname=b.cname),b=b.reducedSize,void 0!=b&&null!=b&&(d.reducedSize=b));return d};return a}();a.RtcRtcpParameters=w;var q=function(){function a(){}a.defRtcRtpParameters=function(){return{codecs:[],headerExtensions:[],rtcp:w.defRtcRtcpParameters()}};a.defRTCRtpParameters=function(){return{codecs:[],headerExtensions:[],rtcp:w.defRTCRtcpParameters()}};a.toRtcRtpParameters=function(b){var c=
    a.defRtcRtpParameters();if(b){if(b.codecs)for(var g=0,e=b.codecs;g<e.length;g++)c.codecs.push(h.toRtcRtpCodecParameters(e[g]));if(b.headerExtensions)for(g=0,e=b.headerExtensions;g<e.length;g++)c.headerExtensions.push(d.toRtcRtpHeaderExtensionParameters(e[g]));b.rtcp&&(c.rtcp=w.toRtcRtcpParameters(b.rtcp))}return c};a.toRTCRtpParameters=function(b){var c=a.defRTCRtpParameters();if(b){if(b.codecs)for(var e=0,n=b.codecs;e<n.length;e++)c.codecs.push(h.toRTCRtpCodecParameters(n[e]));if(b.headerExtensions)for(e=
    0,n=b.headerExtensions;e<n.length;e++)c.headerExtensions.push(d.toRTCRtpHeaderExtensionParameters(n[e]));b.rtcp&&(c.rtcp=w.toRtcRtcpParameters(b.rtcp))}return c};return a}();a.RtcRtpParameters=q;var n=function(){function a(){}a.defRtcRtpEncodingParameters=function(){return{active:!0,rid:""}};a.defRTCRtpEncodingParameters=function(){return{}};a.toRtcRtpEncodingParameters=function(b){var d=a.defRtcRtpEncodingParameters();if(b){var c=b.active;void 0!=c&&null!=c&&(d.active=c);b.maxBitrate&&(d.maxBitrate=
    b.maxBitrate);b.maxFramerate&&(d.maxFramerate=b.maxFramerate);b.scaleResolutionDownBy&&(d.scaleResolutionDownBy=b.scaleResolutionDownBy);b.rid&&(d.rid=b.rid);b.networkPriority&&(d.networkPriority=b.networkPriority)}return d};a.toRTCRtpEncodingParameters=function(b){var d=a.defRTCRtpEncodingParameters();if(b){var c=b.active;void 0!=c&&null!=c&&(d.active=c);b.maxBitrate&&(d.maxBitrate=b.maxBitrate);b.maxFramerate&&(d.maxFramerate=b.maxFramerate);b.scaleResolutionDownBy&&(d.scaleResolutionDownBy=b.scaleResolutionDownBy);
    b.rid&&(d.rid=b.rid);b.networkPriority&&(d.networkPriority=b.networkPriority)}return d};return a}();a.RtcRtpEncodingParameters=n;b=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}e(b,a);b.defRtcRtpSendParameters=function(){var a=q.defRtcRtpParameters();a.encodings=[];a.transaction_id="";return a};b.defRTCRtpSendParameters=function(){var a=q.defRTCRtpParameters();a.encodings=[];a.transactionId="";return a};b.toRtcRtpSendParameters=function(a){l.logger.log("RtcRtpSendParameters.toRtcRtpSendParameters() in param:"+
    JSON.stringify(a));var d=b.defRtcRtpSendParameters(),c=q.toRtcRtpParameters(a);c.codecs.forEach(function(a){return d.codecs.push(a)});c.headerExtensions.forEach(function(a){return d.headerExtensions.push(a)});d.rtcp=c.rtcp;if(a){if(a.encodings)for(var c=0,e=a.encodings;c<e.length;c++)d.encodings.push(n.toRtcRtpEncodingParameters(e[c]));a.transactionId&&(d.transaction_id=a.transactionId)}l.logger.log("RtcRtpSendParameters.toRtcRtpSendParameters() out param:"+JSON.stringify(d));return d};b.toRTCRtpSendParameters=
    function(a){l.logger.log("RtcRtpSendParameters.toRTCRtpSendParameters() in param:"+JSON.stringify(a));var d=b.defRTCRtpSendParameters(),c=q.toRTCRtpParameters(a);c.codecs.forEach(function(a){return d.codecs.push(a)});c.headerExtensions.forEach(function(a){return d.headerExtensions.push(a)});d.rtcp=c.rtcp;if(a){if(a.encodings)for(var c=0,e=a.encodings;c<e.length;c++)d.encodings.push(n.toRTCRtpEncodingParameters(e[c]));a.transaction_id&&(d.transactionId=a.transaction_id)}l.logger.log("RtcRtpSendParameters.toRTCRtpSendParameters() out param:"+
    JSON.stringify(d));return d};return b}(q);a.RtcRtpSendParameters=b;b=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}e(b,a);b.defRtcRtpReceiveParameters=function(){return q.defRtcRtpParameters()};b.defRTCRtpReceiveParameters=function(){return q.defRTCRtpParameters()};b.toRtcRtpReceiveParameters=function(a){l.logger.log("RtcRtpReceiveParameters.toRtcRtpReceiveParameters() in param:"+JSON.stringify(a));a=q.toRtcRtpParameters(a);l.logger.log("RtcRtpReceiveParameters.toRtcRtpReceiveParameters() out param:"+
    JSON.stringify(a));return a};b.toRTCRtpReceiveParameters=function(a){l.logger.log("RtcRtpReceiveParameters.toRTCRtpReceiveParameters() in param:"+JSON.stringify(a));a=q.toRTCRtpParameters(a);l.logger.log("RtcRtpReceiveParameters.toRTCRtpReceiveParameters() out param:"+JSON.stringify(a));return a};return b}(q);a.RtcRtpReceiveParameters=b},589:function(b,a,c){var e=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=
    b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])};return a(b,d)};return function(b,d){function c(){this.constructor=b}a(b,d);b.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)}}();Object.defineProperty(a,"__esModule",{value:!0});a.RtpReceiver=a.RtpSender=a.RtpSenderReceiver=a.DtlsTransport=a.IceTransport=a.DtmfSender=a.DTMFToneChangeEvent=void 0;var l=c(658),h=c(550),d=c(851),w=c(144),q=c(517),n=c(650),k=c(484),v=function(a){function b(c,e){var g=a.call(this,c,
    h.class_id_t.RTCDTMFToneChangeEvent,e,l.ProxyMode.Remote)||this;d.logger.log(g.user_friendly_id()+".constructor");return g}e(b,a);b.prototype.syncBarrier=function(){var a=this;d.logger.log(this.user_friendly_id()+".syncBarrier() called.");return new Promise(function(b,c){a.syncBarrierDeep(b,c)&&a.waitUntilConnected(a.user_friendly_id()+".syncBarrier").then(function(){Promise.all([a.remoteInvoke(!1,h.method_id_RTCDTMFToneChangeEvent_t.tone,""),a.remoteInvoke(!1,h.method_id_RTCDTMFToneChangeEvent_t.tone_buffer,
    "")]).then(function(b){d.logger.log(a.user_friendly_id()+".syncBarrier(): success.");b=b.map(function(b){return a.param0(b)});a.tone=b[0];a.tone_buffer_=b[1];a.syncBarrierResolve(a)})["catch"](function(b){b=a.logRemoteInvokeError(b,".prop.syncBarrier() failed.");a.syncBarrierReject(b)})})["catch"](function(b){b=a.logRemoteInvokeError(b,".syncBarrier() failed.");a.syncBarrierReject(b)})})};Object.defineProperty(b.prototype,"tone_buffer",{get:function(){return this.tone_buffer_},enumerable:!1,configurable:!0});
    return b}(l.ProxyObject);a.DTMFToneChangeEvent=v;var p=function(a){function b(c,e){var g=a.call(this,c,h.class_id_t.RTCDTMFSender,e,l.ProxyMode.Remote)||this;d.logger.log(g.user_friendly_id()+".constructor");g.canInsertDTMF=!0;g.toneBuffer_="";return g}e(b,a);b.prototype.insertDTMF=function(a,b,c){var e=this;void 0===b&&(b=100);void 0===c&&(c=70);d.logger.log(this.user_friendly_id()+".insertDTMF() called, tones: "+a);this.waitUntilConnected("DtmfSender.insertDTMF").then(function(){return e.remoteInvoke(!1,
    h.method_id_RTCDTMFSender_t.insertDTMF,a,b,c)}).then(function(){d.logger.log(e.user_friendly_id()+".insertDTMF() success, tones: "+a)})["catch"](function(a){e.logRemoteInvokeError(a,".insertDTMF() failed!")})};Object.defineProperty(b.prototype,"ontonechange",{get:function(){return this.ontonechange_},set:function(a){var b=this;d.logger.log(this.user_friendly_id()+".set_ontonechange() called.");this.ontonechange_=a;this.waitUntilConnected("DtmfSender.ontonechange").then(function(){var c=b.registerCallbacks(!1,
    b.isNullCallback(a),h.method_id_RTCDTMFSender_t.ontonechange);c.then(function(a){d.logger.log(b.user_friendly_id()+".ontonechange callback received!");(new v(b,b.param0(a).oid)).syncBarrier().then(function(a){d.logger.log(b.user_friendly_id()+"tone: "+a.tone+" tone_buffer: "+a.tone_buffer);b.toneBuffer_=a.tone_buffer;b.ontonechange_(a)})["catch"](function(a){b.logRemoteInvokeError(a,".toneEvt.syncBarrier() failed!")})});return b.remoteInvoke(!0,h.method_id_RTCDTMFSender_t.ontonechange,c.success)})["catch"](function(a){b.logRemoteInvokeError(a,
    ".set_ontonechange() failed!")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"toneBuffer",{get:function(){d.logger.log(this.user_friendly_id()+".toneBuffer() called.");return this.toneBuffer_},enumerable:!1,configurable:!0});return b}(l.ProxyObject);a.DtmfSender=p;var g=function(a){function b(c,e){var g=a.call(this,c,h.class_id_t.RTCIceTransport,e,l.ProxyMode.Remote)||this;d.logger.log(g.user_friendly_id()+".constructor");g.selectedPair=null;g.localCandidates_=[];g.remoteCandidates_=
    [];return g}e(b,a);b.prototype.syncBarrier=function(){var a=this;d.logger.log(this.user_friendly_id()+".syncBarrier() called.");return new Promise(function(c,e){a.syncBarrierDeep(c,e)&&a.waitUntilConnected("IceTransport.syncBarrier").then(function(){return Promise.all([a.remoteInvoke(!1,h.method_id_RTCIceTransport_t.role,0),a.remoteInvoke(!1,h.method_id_RTCIceTransport_t.component,0),a.remoteInvoke(!1,h.method_id_RTCIceTransport_t.state,0),a.remoteInvoke(!1,h.method_id_RTCIceTransport_t.gatheringState,
    0)])}).then(function(c){d.logger.log(a.user_friendly_id()+".syncBarrier success.");var e=0,g=0;c=c.map(function(b){return a.param0(b)});a.role_=c[0];a.component_=c[1];e=c[2];g=c[3];a.state_=b.convertState(e);a.gatheringState_=b.convertGatheringState(g);a.syncBarrierResolve(a)})["catch"](function(b){b=a.logRemoteInvokeError(b,".syncBarrier() failed!");a.syncBarrierReject(b)})})};b.prototype.syncCandidates=function(){var a=this;d.logger.log(this.user_friendly_id()+".syncCandidates() called.");return new Promise(function(b,
    c){a.waitUntilConnected("IceTransport.syncCandidates").then(function(){return Promise.all([a.remoteInvoke(!1,h.method_id_RTCIceTransport_t.localcandidates,[]),a.remoteInvoke(!1,h.method_id_RTCIceTransport_t.remotecandidates,[])])}).then(function(c){d.logger.log(a.user_friendly_id()+".syncCandidates success.");c=c.map(function(b){return a.param0(b)});a.localCandidates_=c[0];a.remoteCandidates_=c[1];b(a)})["catch"](function(b){b=a.logRemoteInvokeError(b,".syncCandidates() failed!");c(b)})})};Object.defineProperty(b.prototype,
    "role",{get:function(){return this.role_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"component",{get:function(){return this.component_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"State",{get:function(){return this.state_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"gatheringState",{get:function(){return this.gatheringState_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onstatechange",{get:function(){return this.onstatechange_},
    set:function(a){var c=this;d.logger.log(this.user_friendly_id()+".set_onstatechange() called.");this.onstatechange_=a;this.waitUntilConnected("IceTransport.onstatechange").then(function(){var e=c.registerCallbacks(!1,c.isNullCallback(a),h.method_id_RTCIceTransport_t.onstatechange);e.then(function(a){d.logger.log(c.user_friendly_id()+".onstatechange callback received!");c.syncCandidates().then(function(a){d.logger.log(c.user_friendly_id()+"received updated ice candidates!")});c.state_=b.convertState(c.param0(a));
    d.logger.log(c.user_friendly_id()+"state: "+c.state_);c.onstatechange_()});return c.remoteInvoke(!0,h.method_id_RTCIceTransport_t.onstatechange,e.success)})["catch"](function(a){c.logRemoteInvokeError(a,".set_onstatechange failed!")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"ongatheringstatechange",{get:function(){return this.ongatheringstatechange_},set:function(a){var c=this;d.logger.log(this.user_friendly_id()+".set_ongatheringstatechange() called.");this.ongatheringstatechange_=
    a;this.waitUntilConnected("IceTransport.ongatheringstatechange").then(function(){var e=c.registerCallbacks(!1,c.isNullCallback(a),h.method_id_RTCIceTransport_t.ongatheringstatechange);e.then(function(a){d.logger.log(c.user_friendly_id()+".ongatheringstatechange callback received!");c.syncCandidates().then(function(a){d.logger.log(c.user_friendly_id()+"received updated ice candidates!")});c.gatheringState_=b.convertGatheringState(c.param0(a));d.logger.log(c.user_friendly_id()+"gatheringState: "+c.gatheringState_);
    c.ongatheringstatechange_()});return c.remoteInvoke(!0,h.method_id_RTCIceTransport_t.ongatheringstatechange,e.success)})["catch"](function(a){c.logRemoteInvokeError(a,".set_ongatheringstatechange failed!")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onselectedcandidatepairchange",{get:function(){return this.onselectedcandidatepairchange_},set:function(a){var b=this;d.logger.log(this.user_friendly_id()+".set_onselectedcandidatepairchange() called.");this.onselectedcandidatepairchange_=
    a;this.waitUntilConnected("IceTransport.onselectedcandidatepairchange").then(function(){var c=b.registerCallbacks(!1,b.isNullCallback(a),h.method_id_RTCIceTransport_t.onselectedcandidatepairchange);c.then(function(a){d.logger.log(b.user_friendly_id()+".onselectedcandidatepairchange callback received!");b.syncCandidates().then(function(a){d.logger.log(b.user_friendly_id()+"received updated ice candidates!")});b.selectedPair=b.param0(a);d.logger.log(b.user_friendly_id()+"selectedPair: "+b.selectedPair);
    b.onselectedcandidatepairchange_()});return b.remoteInvoke(!0,h.method_id_RTCIceTransport_t.onselectedcandidatepairchange,c.success)})["catch"](function(a){b.logRemoteInvokeError(a,".set_onselectedcandidatepairchange failed!")})},enumerable:!1,configurable:!0});b.prototype.getLocalCandidates=function(){return this.localCandidates_};b.prototype.getRemoteCandidates=function(){return this.remoteCandidates_};b.prototype.getLocalParameters=function(){return null};b.prototype.getRemoteParameters=function(){return null};
    b.prototype.getSelectedCandidatePair=function(){return this.selectedPair};b.convertState=function(a){return 0==a?"new":1==a?"checking":2==a?"connected":3==a?"completed":4==a?"failed":5==a?"disconnected":"closed"};b.convertGatheringState=function(a){return 0==a?"new":1==a?"gathering":"complete"};return b}(l.ProxyObject);a.IceTransport=g;var B;(function(a){a[a["new"]=0]="new";a[a.connecting=1]="connecting";a[a.connected=2]="connected";a[a.closed=3]="closed";a[a.failed=4]="failed";a[a.max=5]="max"})(B||
    (B={}));var t=function(a){function b(c,e){var g=a.call(this,c,h.class_id_t.RTCDtlsTransport,e,l.ProxyMode.Remote)||this;d.logger.log(g.user_friendly_id()+".constructor");g.state_="new";g.transport_=null;g.remoteCertificates_=[];return g}e(b,a);b.prototype.dumpInfo=function(){d.logger.log("DtlsTransport["+this.object_id()+"].dumpInfo():");d.logger.log("    - state:"+this.state_);d.logger.log("    - transport:"+this.transport_)};b.prototype.syncBarrier=function(){var a=this;d.logger.log(this.user_friendly_id()+
    ".syncBarrier() called.");return new Promise(function(c,e){a.syncBarrierDeep(c,e)&&a.waitUntilConnected("DtlsTransport.syncBarrier").then(function(){return Promise.all([a.remoteInvoke(!1,h.method_id_RTCDtlsTransport_t.transport,{}),a.remoteInvoke(!1,h.method_id_RTCDtlsTransport_t.state,0),a.remoteInvoke(!1,h.method_id_RTCDtlsTransport_t.getRemoteCertificates)])}).then(function(c){var e;d.logger.log(a.user_friendly_id()+".syncBarrier remote success.");var h;e=c.map(function(b){return a.param0(b)});
    c=e[0];h=e[1];a.remoteCertificates_=e[2];a.state_=b.convertState(h);e=[];if(void 0!=c&&0==c.is_null){h=a.transport_;if(null===a.transport_||a.transport_.object_id()!=c.oid)h=new g(a,c.oid);e.push(h.syncBarrier())}else e.push(Promise.resolve(null));Promise.all(e).then(function(b){d.logger.log(a.user_friendly_id()+".syncBarrier success");a.transport_=b[0];a.syncBarrierResolve(a)})["catch"](function(b){b=a.logRemoteInvokeError(b,".prop.syncBarrier failed!");a.syncBarrierReject(b)})})["catch"](function(b){b=
    a.logRemoteInvokeError(b,".syncBarrier failed!");a.syncBarrierReject(b)})})};Object.defineProperty(b.prototype,"transport",{get:function(){return this.transport_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){d.logger.log(this.user_friendly_id()+".get_state() called: "+this.state_);return this.state_},enumerable:!1,configurable:!0});b.prototype.getRemoteCertificates=function(){return this.remoteCertificates_};Object.defineProperty(b.prototype,"onstatechange",
    {get:function(){return this.onstatechange_},set:function(a){var c=this;d.logger.log(this.user_friendly_id()+".set_onstatechange() called.");this.onstatechange_=a;this.waitUntilConnected("DtlsTransport.onstatechange").then(function(){var e=c.registerCallbacks(!1,c.isNullCallback(a),h.method_id_RTCDtlsTransport_t.onstatechange);e.then(function(a){d.logger.log(c.user_friendly_id()+".onstatechange callback received!");c.state_=b.convertState(c.param0(a));d.logger.log(c.user_friendly_id()+"state_: "+c.state_);
    c.onstatechange_()});return c.remoteInvoke(!0,h.method_id_RTCDtlsTransport_t.onstatechange,e.success)})["catch"](function(a){c.logRemoteInvokeError(a,".set_onstatechange failed!")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onerror",{get:function(){return this.onerror_},set:function(a){var b=this;d.logger.log(this.user_friendly_id()+".set_onerror() called.");this.onerror_=a;this.waitUntilConnected("DtlsTransport.onerror").then(function(){var c=b.registerCallbacks(!1,b.isNullCallback(a),
    h.method_id_RTCDtlsTransport_t.onerror);c.then(function(a){d.logger.log(b.user_friendly_id()+".onerror callback received!");a=b.param0(a);d.logger.log(b.user_friendly_id()+"error: "+a);b.onerror_(a)});return b.remoteInvoke(!0,h.method_id_RTCDtlsTransport_t.onerror,c.success)})["catch"](function(a){b.logRemoteInvokeError(a,".set_onerror failed!")})},enumerable:!1,configurable:!0});b.convertState=function(a){return a==B["new"]?"new":a==B.connecting?"connecting":a==B.connected?"connected":a==B.closed?
    "closed":"failed"};return b}(l.ProxyObject);a.DtlsTransport=t;b=function(a){function b(c,e,g,h){c=a.call(this,c,e,g,h)||this;d.logger.log(c.user_friendly_id()+".constructor base");c.track_=null;c.transport_=null;return c}e(b,a);b.prototype.syncBarrierBase=function(){d.logger.log(this.user_friendly_id()+".syncBarrierBase() called.");var a=[],b,c;this instanceof m?(b=h.method_id_RTCRtpSender_t.track,c=h.method_id_RTCRtpSender_t.transport):this instanceof D&&(b=h.method_id_RTCRtpReceiver_t.track,c=h.method_id_RTCRtpReceiver_t.transport);
    n.RemoteSession.isFeaturePstnSupported()&&n.RemoteSession.isFeatureDtmfSupported()?(a.push(this.remoteInvoke(!1,b,{oid:0})),a.push(this.remoteInvoke(!1,c,{oid:0}))):a.push(this.remoteInvoke(!1,b,{oid:0}));return a};b.prototype.syncBarrierBaseResults=function(a){var b,c=this;b=0;d.logger.log(this.user_friendly_id()+".syncBarrierBaseResults");var e;n.RemoteSession.isFeaturePstnSupported()&&n.RemoteSession.isFeatureDtmfSupported()?(b=a.map(function(a){return c.param0(a)}),a=b[0],e=b[1],b=2):(a=a.map(function(a){return c.param0(a)})[0],
    b=1);var g=[];if(void 0!=a&&!1===a.is_null){var h=this.track_;null===this.track_||this.track_.object_id()!=a.oid?h=new w.RemoteMediaTrack(this,a.oid):this.track_.bind(this,a.oid);g.push(h.syncBarrier())}else g.push(Promise.resolve(null));if(void 0!=e&&!1===e.is_null){a=this.transport_;if(null===this.transport_||this.transport_.object_id()!=e.oid)a=new t(this,e.oid);g.push(a.syncBarrier())}else g.push(Promise.resolve(null));return[b,g]};b.prototype.syncBarrierBaseResultsWithAllPromisesFulFilled=function(a){this.track_=
    a[0];this.transport_=a[1]};Object.defineProperty(b.prototype,"transport",{get:function(){d.logger.log(this.user_friendly_id()+".get transport() called.");return this.transport_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"rtcpTransport",{get:function(){d.logger.log(this.user_friendly_id()+".get rtcpTransport() called.");return this.transport_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"track",{get:function(){return this.track_},enumerable:!1,configurable:!0});
    b.prototype.reinitTrack=function(a){this.track_=a};b.prototype.getStats=function(){d.logger.log(this.user_friendly_id()+".getStats() called.");var a=this;return new Promise(function(b,c){a.isRedirected()?a.waitUntilConnected("RtpReceiver.getStats").then(function(){if(n.RemoteSession.isFeatureSenderStatsFixSupported()){var d;a instanceof m?d=h.method_id_RTCRtpSender_t.getStats:a instanceof D&&(d=h.method_id_RTCRtpReceiver_t.getStats);var c=a.registerCallbacks(!0,!1,d);c.then(function(a){void 0===a.params||
    0===a.params.length||0===a.params[0].length?b():b(q.StatsReport.fromJSON(JSON.parse(a.params[0])))});return a.remoteInvoke(!1,d,c.success)}b()})["catch"](function(b){b=a.logRemoteInvokeError(b,".getStats() failed!");c(b)}):(d.logger.log(a.user_friendly_id()+".getStats(): not in active redirection!"),b())})};return b}(l.ProxyObject);a.RtpSenderReceiver=b;var m=function(a){function b(c,e,g,m){c=a.call(this,c,h.class_id_t.RTCRtpSender,e,g)||this;d.logger.log(c.user_friendly_id()+".constructor");c.dtmf_=
    null;c.params_=k.RtcRtpSendParameters.defRtcRtpSendParameters();c.unified_=m;return c}e(b,a);b.prototype.dumpInfo=function(){d.logger.log("RtpSender["+this.object_id()+"].dumpInfo():");this.track&&this.track.dumpInfo()};b.prototype.syncBarrier=function(){var b=this;d.logger.log(this.user_friendly_id()+".syncBarrier() called.");return new Promise(function(c,e){b.syncBarrierDeep(c,e)&&b.waitUntilConnected("RtpSender.syncBarrier").then(function(){var c=a.prototype.syncBarrierBase.call(b);n.RemoteSession.isFeaturePstnSupported()&&
    n.RemoteSession.isFeatureDtmfSupported()&&(c.push(b.remoteInvoke(!1,h.method_id_RTCRtpSender_t.dtmf,{oid:0})),c.push(b.remoteInvoke(!1,h.method_id_RTCRtpSender_t.getParameters)));return Promise.all(c)}).then(function(a){var c,e;c=b.syncBarrierBaseResults(a);e=c[0];c=c[1];a=a.slice(e).map(function(a){return b.param0(a)});e=a[0];b.params_=a[1];void 0==e||!1!==e.is_null||null!==b.dtmf_&&b.dtmf_.object_id()==e.oid||(b.dtmf_=new p(b,e.oid));Promise.all(c).then(function(a){b.syncBarrierBaseResultsWithAllPromisesFulFilled(a);
    d.logger.log(b.user_friendly_id()+".syncBarrierBase success.");b.syncBarrierResolve(b)})["catch"](function(a){a=b.logRemoteInvokeError(a,".syncBarrier() promises_base failed!");b.syncBarrierReject(a)})})["catch"](function(a){a=b.logRemoteInvokeError(a,".syncBarrier failed!");b.syncBarrierReject(a)})})};b.getCapabilities=function(a){d.logger.log(this.constructor.name+".getCapabilities() called.");return w.NavigatorUserMedia.getCapabilities(a)};Object.defineProperty(b.prototype,"dtmf",{get:function(){d.logger.log(this.user_friendly_id()+
    ".get dtmf() called.");return this.dtmf_},enumerable:!1,configurable:!0});b.prototype.setParameters=function(a){return this.setParametersAsync(a)};b.prototype.setParametersAsync=function(a){var b=this;d.logger.log(this.user_friendly_id()+".setParametersAsync() called.");return new Promise(function(c,e){b.waitUntilConnected("RtpSender.setParametersAsync").then(function(){return Promise.all([b.remoteInvoke(!1,h.method_id_RTCRtpSender_t.setParameters,k.RtcRtpSendParameters.toRtcRtpSendParameters(a))])}).then(function(e){d.logger.log(b.user_friendly_id()+
    ".setParametersAsync(): success.");c();b.params_=k.RtcRtpSendParameters.toRtcRtpSendParameters(a)})["catch"](function(a){a=b.logRemoteInvokeError(a,".setParametersAsync() failed!");e(a)})})};b.prototype.getParameters=function(){d.logger.log(this.user_friendly_id()+".getParameters() called.");return this.getParametersInternal(!1)};b.prototype.getParametersAsync=function(){d.logger.log(this.user_friendly_id()+".getParametersAsync() called.");return this.getParametersInternal(!0)};b.prototype.getParametersInternal=
    function(a){var b=this,c=new Promise(function(a,c){b.waitUntilConnected(b.user_friendly_id()+".getParametersInternal").then(function(){d.logger.log(b.user_friendly_id()+".getParametersInternal() remote invoking");return b.remoteInvoke(!1,h.method_id_RTCRtpSender_t.getParameters)}).then(function(c){b.params_=b.param0(c);d.logger.log(b.user_friendly_id()+".getParametersInternal() success returning: "+b.params_);a(k.RtcRtpSendParameters.toRTCRtpSendParameters(b.params_))})["catch"](function(a){a=b.logRemoteInvokeError(a,
    ".getParametersInternal() failed!");c(a)})});if(a)return c;d.logger.log(this.user_friendly_id()+".getParametersInternal() returning: "+this.params_);return k.RtcRtpSendParameters.toRTCRtpSendParameters(this.params_)};b.prototype.replaceTrack=function(a){var b=this;d.logger.log(this.user_friendly_id()+".replaceTrack() called. current track:"+(this.track_?this.track_.object_id():"null")+" with track="+(a?a.object_id():"null"));return new Promise(function(c,e){b.waitUntilConnected("RtpSender.replaceTrack").then(function(){return a||
    n.RemoteSession.isFeatureWebrtc1dot0Supported()?a?b.remoteInvokeEx(!1,h.method_id_RTCRtpSender_t.replaceTrack,[a]):b.remoteInvoke(!1,h.method_id_RTCRtpSender_t.replaceTrack,{oid:-1}):Promise.reject(new DOMException("Does not support replace track with null in non-Unified SDP semantic!"))}).then(function(e){d.logger.log(b.user_friendly_id()+".replaceTrack(): success.");c();b.reinitTrack(a)})["catch"](function(a){a=b.logRemoteInvokeError(a,".replaceTrack() failed!");e(a)})})};return b}(b);a.RtpSender=
    m;var D=function(a){function b(c,e,g,m,x){c=a.call(this,c,h.class_id_t.RTCRtpReceiver,e,g)||this;d.logger.log(c.user_friendly_id()+".constructor");c.contribsources_=[];c.syncsources_=[];c.params_=k.RtcRtpParameters.defRtcRtpParameters();c.unified_=m;x&&(c.track_=x);return c}e(b,a);b.prototype.dumpInfo=function(){d.logger.log("RtpReceiver["+this.object_id()+"].dumpInfo():");this.track&&this.track.dumpInfo();this.transport&&this.transport.dumpInfo()};b.prototype.syncBarrier=function(){var b=this;d.logger.log(this.user_friendly_id()+
    ".syncBarrier() called.");return new Promise(function(c,e){b.syncBarrierDeep(c,e)&&b.waitUntilConnected("RtpReceiver.syncBarrier").then(function(){var c=a.prototype.syncBarrierBase.call(b);n.RemoteSession.isFeaturePstnSupported()&&n.RemoteSession.isFeatureDtmfSupported()?(c.push(b.remoteInvoke(!1,h.method_id_RTCRtpReceiver_t.getContributingSources)),c.push(b.remoteInvoke(!1,h.method_id_RTCRtpReceiver_t.getSynchronizationSources)),c.push(b.remoteInvoke(!1,h.method_id_RTCRtpReceiver_t.getParameters))):
    c.push(b.remoteInvoke(!1,h.method_id_RTCRtpReceiver_t.getContributingSources));return Promise.all(c)}).then(function(a){var c,e;c=b.syncBarrierBaseResults(a);e=c[0];c=c[1];a=a.slice(e).map(function(a){return b.param0(a)});b.contribsources_=a[0];b.syncsources_=a[1];b.params_=a[2];Promise.all(c).then(function(a){b.syncBarrierBaseResultsWithAllPromisesFulFilled(a);d.logger.log(b.user_friendly_id()+".syncBarrier success.");b.syncBarrierResolve(b)})["catch"](function(a){a=b.logRemoteInvokeError(a,".syncBarrier() promises_base failed!");
    b.syncBarrierReject(a)})})["catch"](function(a){a=b.logRemoteInvokeError(a,".syncBarrier() failed!");b.syncBarrierReject(a)})})};b.getCapabilities=function(a){d.logger.log(this.constructor.name+".getCapabilities() called.");return w.NavigatorUserMedia.getCapabilities(a)};b.prototype.getContributingSources=function(){var a=this;d.logger.log(this.user_friendly_id()+".getContributingSources() called. "+JSON.stringify(this.contribsources_));this.waitUntilConnected("RtpReceiver.getContributingSources").then(function(){return Promise.all([a.remoteInvoke(!1,
    h.method_id_RTCRtpReceiver_t.getContributingSources)])}).then(function(b){a.contribsources_=b.map(function(b){return a.param0(b)})[0];d.logger.log(a.user_friendly_id(),".getContributingSources() success: "+JSON.stringify(a.contribsources_))})["catch"](function(b){a.logRemoteInvokeError(b,".getContributingSources() failed!");a.contribsources_=[]});return this.contribsources_};b.prototype.getParameters=function(){var a=this;d.logger.log(this.user_friendly_id()+".getParameters() called.");this.waitUntilConnected(this.user_friendly_id()+
    ".getParameters").then(function(){d.logger.log(a.user_friendly_id()+".getParameters() remote invoking");return a.remoteInvoke(!1,h.method_id_RTCRtpReceiver_t.getParameters)}).then(function(b){d.logger.log(a.user_friendly_id()+".getParameters() success");a.params_=a.param0(b)})["catch"](function(b){a.logRemoteInvokeError(b,".getParameters() failed!")});d.logger.log(this.user_friendly_id()+".getParameters() returning: "+this.params_);return k.RtcRtpReceiveParameters.toRTCRtpReceiveParameters(this.params_)};
    b.prototype.getSynchronizationSources=function(){d.logger.log(this.user_friendly_id()+".getSynchronizationSources() called.");return this.syncsources_};return b}(b);a.RtpReceiver=D},377:function(b,a,c){var e=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=null===
    c?Object.create(c):(d.prototype=c.prototype,new d)}}();Object.defineProperty(a,"__esModule",{value:!0});a.RtpTransceiver=a.RtcRtpTransceiverInit=a.RtcRtpTransceiverDirection=void 0;var l=c(658),h=c(550),d=c(851),w=c(589),q=c(484),n;(function(a){a[a.sendrecv=0]="sendrecv";a[a.sendonly=1]="sendonly";a[a.recvonly=2]="recvonly";a[a.inactive=3]="inactive";a[a.stopped=4]="stopped"})(n=a.RtcRtpTransceiverDirection||(a.RtcRtpTransceiverDirection={}));var k=function(){function a(){}a.toRtcRtpTransceiverDirection=
    function(a){switch(a){case "inactive":a=n.inactive;break;case "recvonly":a=n.recvonly;break;case "sendonly":a=n.sendonly;break;case "sendrecv":a=n.sendrecv;break;case "stopped":a=n.stopped;break;default:a=n.sendrecv}return a};a.toRTCRtpTransceiverDirection=function(a){switch(a){case n.inactive:a="inactive";break;case n.recvonly:a="recvonly";break;case n.sendonly:a="sendonly";break;case n.sendrecv:a="sendrecv";break;case n.stopped:a="stopped";break;default:a="sendrecv"}return a};a.toRtcRtpTransceiverInit=
    function(b){d.logger.log("RtcRtpTransceiverInit.toRtcRtpTransceiverInit() in init:"+JSON.stringify(b));var c={};b&&(b.direction&&(c.direction=a.toRtcRtpTransceiverDirection(b.direction)),b.sendEncodings&&(c.sendEncodings=[],b.sendEncodings.forEach(function(a){return c.sendEncodings.push(q.RtcRtpEncodingParameters.toRtcRtpEncodingParameters(a))})),b.streams&&(c.streams=b.streams));d.logger.log("RtcRtpTransceiverInit.toRtcRtpTransceiverInit() out init:"+JSON.stringify(c));return c};return a}();a.RtcRtpTransceiverInit=
    k;b=function(a){function b(c,e,k,m,q,y){c=a.call(this,c,h.class_id_t.RTCRtpTransceiver,e,k)||this;d.logger.log(c.user_friendly_id()+".constructor");c.unified_=m;c.sender_=new w.RtpSender(c,0,l.ProxyMode.Pseudo,m);c.receiver_=y?y:new w.RtpReceiver(c,0,l.ProxyMode.Pseudo,m);q?(c.direction_=q,c.currentDirection_=q):(c.direction_=n.sendrecv,c.currentDirection_=n.sendrecv);return c}e(b,a);b.prototype.dumpInfo=function(){d.logger.log(this.user_friendly_id()+".dumpInfo() [id="+this.mid+"] direction="+k.toRTCRtpTransceiverDirection(this.direction_)+
    " currentDirection="+k.toRTCRtpTransceiverDirection(this.currentDirection_));this.sender&&this.sender.dumpInfo();this.receiver&&this.receiver.dumpInfo()};b.prototype.syncBarrier=function(){var a=this;d.logger.log(this.user_friendly_id()+".syncBarrier() called.");return new Promise(function(b,c){a.syncBarrierDeep(b,c)&&a.waitUntilConnected("RtpTransceiver.syncBarrier").then(function(){return Promise.all([a.remoteInvoke(!1,h.method_id_RTCRtpTransceiver_t.mid,""),a.remoteInvoke(!1,h.method_id_RTCRtpTransceiver_t.direction,
    0),a.remoteInvoke(!1,h.method_id_RTCRtpTransceiver_t.currentDirection,0),a.remoteInvoke(!1,h.method_id_RTCRtpTransceiver_t.sender,{oid:0}),a.remoteInvoke(!1,h.method_id_RTCRtpTransceiver_t.receiver,{oid:0})])}).then(function(b){var c;d.logger.log(a.user_friendly_id()+".syncBarrier remote success.");c=b.map(function(b){return a.param0(b)});a.mid_=c[0];a.direction_=c[1];a.currentDirection_=c[2];b=c[3];c=c[4];var e=[];void 0!=b&&!1===b.is_null&&(a.sender_.bind(a,b.oid),e.push(a.sender_.syncBarrier()));
    void 0!=c&&!1===c.is_null&&(a.receiver_.bind(a,c.oid),e.push(a.receiver_.syncBarrier()));if(0==e.length)d.logger.log(a.user_friendly_id()+".syncBarrier success"),a.syncBarrierResolve(a);else return d.logger.log(a.user_friendly_id()+".prop.syncBarrier start"),Promise.all(e)}).then(function(){d.logger.log(a.user_friendly_id()+".syncBarrier success");a.syncBarrierResolve(a)})["catch"](function(b){b=a.logRemoteInvokeError(b,".syncBarrier() failed!");a.syncBarrierReject(b)})})};Object.defineProperty(b.prototype,
    "mid",{get:function(){d.logger.log(this.user_friendly_id()+".get_mid() called: "+this.mid_);return this.mid_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"sender",{get:function(){return this.sender_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"receiver",{get:function(){return this.receiver_},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"direction",{get:function(){d.logger.log(this.user_friendly_id()+".get_direction() called. "+k.toRTCRtpTransceiverDirection(this.direction_));
    return k.toRTCRtpTransceiverDirection(this.direction_)},set:function(a){var b=this;d.logger.log(this.user_friendly_id()+".set_direction() called. "+a);this.direction_=k.toRtcRtpTransceiverDirection(a);this.waitUntilConnected("RtpTransceiver.set_direction").then(function(){return b.remoteInvoke(!0,h.method_id_RTCRtpTransceiver_t.direction,k.toRtcRtpTransceiverDirection(a))}).then(function(){d.logger.log(b.user_friendly_id()+".set_direction: success.")})["catch"](function(a){b.logRemoteInvokeError(a,
    ".set_direction() failed!")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"currentDirection",{get:function(){d.logger.log(this.user_friendly_id()+".get_currentDirection() called. "+k.toRTCRtpTransceiverDirection(this.currentDirection_));return k.toRTCRtpTransceiverDirection(this.currentDirection_)},enumerable:!1,configurable:!0});b.prototype.stop=function(){var a=this;d.logger.log(this.user_friendly_id()+".stop() called.");this.waitUntilConnected("RtpTransceiver.stop").then(function(){return a.remoteInvoke(!0,
    h.method_id_RTCRtpTransceiver_t.stop)}).then(function(){d.logger.log(a.user_friendly_id()+".stop: success.")})["catch"](function(b){a.logRemoteInvokeError(b,".stop() failed!")})};b.prototype.setCodecPreferences=function(a){var b=this;d.logger.log(this.user_friendly_id()+".setCodecPreferences() called.");this.waitUntilConnected("RtpTransceiver.setCodecPreferences").then(function(){return b.remoteInvoke(!0,h.method_id_RTCRtpTransceiver_t.setCodecPreferences,a)}).then(function(){d.logger.log(b.user_friendly_id()+
    ".setCodecPreferences: success.")})["catch"](function(a){b.logRemoteInvokeError(a,".setCodecPreferences() failed!")})};return b}(l.ProxyObject);a.RtpTransceiver=b},973:function(b,a,c){function e(a,b){return void 0!==a.find(function(a){return a===b})}function l(a,b,c){b/=a.width;c/=a.height;var d=document.createElement("canvas"),e=d.getContext("2d");d.width=a.width*b;d.height=a.height*c;e.putImageData(a,0,0);if(1!=b||1!=c)e.scale(b,c),e.drawImage(d,0,0);return d}function h(a,b,c){a=l(a,b,c);b=document.createElement("img");
    b.src=a.toDataURL();return b}function d(a,b,c,d){c="undefined"!==typeof c?c:D.Width;d="undefined"!==typeof d?d:D.Height;if(!0===b)return h(a,c,d);b=null;c==a.width&&d===a.height?b=a:(a=l(a,c,d),b=a.getContext("2d").getImageData(0,0,a.width,a.height));return b}var w=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,
    c){function d(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();Object.defineProperty(a,"__esModule",{value:!0});a.ScreenSource=a.ScreenSourceVda=a.ScreenSharingVda=a.ScreenSharingRemote=a.ScreenSharing=a.ImageDataRemote=void 0;var q=c(658),n=c(550),k=c(851),p=c(946),z=c(691),g=c(650),B;(function(a){a[a.Legacy=0]="Legacy";a[a.MonitorsAndApps=10]="MonitorsAndApps"})(B||(B={}));b=function(){return function(a,b,c){this.data=a;this.height=b;this.width=
    c}}();a.ImageDataRemote=b;b=function(){function a(){this.local_=this.remote_=null}a.screenSharingInstance=function(b){a.instance||(a.instance=new a,b&&(a.instance.onscreentopologychanged=b));return a.instance};a.destroyInstance=function(){a.instance&&a.instance.remote_&&a.instance.remote_.release();a.instance=null};a.prototype.user_friendly_id=function(){return this.constructor.name+"[]"};Object.defineProperty(a.prototype,"onscreentopologychanged",{set:function(a){this.remote_||(this.remote_=new t);
    this.remote_.onscreentopologychanged=a;this.local_||(this.local_=new m);this.local_.onscreentopologychanged=a},enumerable:!1,configurable:!0});a.prototype.getWindowsAsync=function(){var a=this;k.logger.log(this.user_friendly_id()+".getWindowsAsync() called.");null==this.local_&&(this.local_=new m);return new Promise(function(b,c){var d=[];a.local_.getWindowsAsync().then(function(c){c&&(d=c);k.logger.log(a.user_friendly_id()+".getWindowsAsync() returning sources");b(d)})["catch"](function(){k.logger.log("ScreenSharing.getWindowsAsync(): rejected");
    b(d)})})};a.prototype.getScreensAsync=function(){var a=this;k.logger.log(this.user_friendly_id()+".getScreensAsync() called.");null==this.remote_&&(this.remote_=new t);return new Promise(function(b,c){var d=[];a.remote_.getScreensAsync().then(function(c){c&&(d=c);k.logger.log(a.user_friendly_id()+".getScreensAsync() returning sources");b(d)})["catch"](function(){k.logger.log("ScreenSharing.getScreensAsync(): rejected");b(d)})})};a.prototype.setActiveSource=function(a,b){var c=this;k.logger.log(this.user_friendly_id()+
    ".setActiveSource() called. id="+a+" appshare="+b);return new Promise(function(d,e){c.remote_.contains(a)?c.remote_.setActive(a).then(function(a){d(a)})["catch"](function(){k.logger.log("ScreenSharing.setActiveSource(): rejected");e()}):b?c.local_.contains(a)?c.local_.setActive(!0,a).then(function(a){d(a)})["catch"](function(){k.logger.log("ScreenSharing.setActiveSource(): rejected");e()}):(k.logger.log("ScreenSharing.setActiveSource(): legacy screen sharing"),d("")):(k.logger.log("ScreenSharing.setActiveSource(): legacy screen sharing"),
    d(""))})};a.prototype.isAppshareActive=function(){return this.local_&&-1!==this.local_.lastActive};a.prototype.stopAppshare=function(){k.logger.log(this.user_friendly_id()+".stopAppshare() called.");this.local_&&this.local_.setActive(!1).then(function(a){k.logger.log("ScreenSharing.stopAppshare(): success, deviceid=",a)})["catch"](function(){k.logger.log("ScreenSharing.stopAppshare(): failure or timeout due to nonresponsive WS Agent")})};a.instance=null;return a}();a.ScreenSharing=b;var t=function(a){function b(){var c=
    a.call(this,null,n.class_id_t.ScreenSharingRemote,0,q.ProxyMode.Local)||this;k.logger.log(c.user_friendly_id()+".constructor");c.sources_=[];return c}w(b,a);b.prototype.getSourceById=function(a){return this.sources_.find(function(b){return b.getId()==a})};b.prototype.contains=function(a){return void 0!==this.getSourceById(a)};Object.defineProperty(b.prototype,"onscreentopologychanged",{get:function(){return this.onscreentopologychanged_},set:function(a){var b=this;this.onscreentopologychanged_=a;
    this.waitUntilConnected(this.user_friendly_id()+".onscreentopologychanged").then(function(){var a=b.registerCallbacks(!1,b.isNullCallback(b.onscreentopologychanged_),n.method_id_VDISharingRemote_t.onscreentopologychanged);a.then(function(){k.logger.log(b.user_friendly_id()+"onscreentopologychanged event received!!!");b.onscreentopologychanged_&&b.onscreentopologychanged_()});return b.remoteInvoke(!0,n.method_id_VDISharingRemote_t.onscreentopologychanged,a.success)})["catch"](function(a){b.logRemoteInvokeError(a,
    ".set_onscreentopologychanged() failed!")})},enumerable:!1,configurable:!0});b.prototype.getScreensAsync=function(){var a=this;k.logger.log(this.user_friendly_id()+".getScreensAsync() called.");var b=this.sources_;this.sources_=[];var c=p.getRedirector().vdabufferNoLimit()&&g.RemoteSession.isFeatureVdNoBufferLimitSupported();return new Promise(function(d,g){a.waitUntilConnected(a.user_friendly_id()+".getScreensAsync").then(function(){return a.remoteInvoke(!1,n.method_id_VDISharingRemote_t.getScreensAsync,
    c)}).then(function(c){var h=[];c.params[0].forEach(function(c){var d=b.find(function(a){return a.object_id()===c.oid});void 0===d&&(k.logger.log(a.user_friendly_id()+" create a ScreenSource with oid:"+c.oid),d=new y(a,c.oid,q.ProxyMode.Remote));h.push(d.syncBarrier())});Promise.all(h.map(function(a){return a.then(function(a){return{value:a,status:"fulfilled"}},function(a){return{value:a,status:"rejected"}})})).then(function(c){var g=c.filter(function(a){return"fulfilled"===a.status}).map(function(a){return a.value});
    a.sources_=g;b.filter(function(a){return!e(g,a)}).forEach(function(a){return a.release()});d(g)})["catch"](function(c){c=a.logRemoteInvokeError(c,".getScreensAsync() failed!");b.forEach(function(a){a.release()});g(c)})})["catch"](function(c){c=a.logRemoteInvokeError(c,".getScreensAsync() failed!");b.forEach(function(a){a.release()});g(c)})})};b.prototype.setActive=function(a){var b=this;k.logger.log(this.user_friendly_id()+".setActive() called. uniqueid="+a);return new Promise(function(c,d){-1!=a?
    c(b.getSourceById(a).getDeviceId()):d()})};return b}(q.ProxyObject);a.ScreenSharingRemote=t;var m=function(){function a(){k.logger.log(this.user_friendly_id()+".constructor");this.sources_=[];this.lastactive_=-1}a.prototype.user_friendly_id=function(){return this.constructor.name+"[]"};Object.defineProperty(a.prototype,"onscreentopologychanged",{set:function(a){p.getRedirector().screenshare.setTopologyChangeCB(a)},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"lastActive",{get:function(){return this.lastactive_},
    enumerable:!1,configurable:!0});a.prototype.getSourceById=function(a){return this.sources_.find(function(b){return b.getId()==a})};a.prototype.contains=function(a){return void 0!==this.getSourceById(a)};a.prototype.getWindowsAsync=function(){var a=this;k.logger.log(this.user_friendly_id()+".getWindowsAsync() called.");var b=this.sources_;this.sources_=[];return new Promise(function(c,d){p.getRedirector().screenshare.getSources(new z.getSourcesReqData(2)).then(function(d){d=d.map(function(c){var d=
    b.find(function(a){return a.equivalent(c)});return void 0!==d?(d.setDescription(c.getDescription()),c.getIcon().then(function(a){d.setIcon(a)})["catch"](function(){k.logger.log(a.user_friendly_id()+".getWindowsAsync() failed to retrieve new icon.")}),c.getPreviewAsync().then(function(a){d.setPreview(a)})["catch"](function(){k.logger.log(a.user_friendly_id()+".getWindowsAsync() failed to retrieve new preview.")}),d):c});if(-1!=a.lastactive_){var e=b.find(function(b){return b.getId()==a.lastactive_}),
    g=d.find(function(b){return b.getId()==a.lastactive_});void 0!==e&&void 0===g&&d.push(e)}a.sources_=d;c(a.sources_)})["catch"](function(){k.logger.log(a.user_friendly_id()+".getWindowsAsync(): rejected");d()})})};a.prototype.activateSource=function(a,b){var c=this;return new Promise(function(d,e){var g=b?"activate":"deactivate";k.logger.log(c.user_friendly_id()+".activateSource() called. action="+g);var h=new z.setActiveReqData(a.srcid,a.hwnd,a.origin,a.pid,!0,!0,b);p.getRedirector().screenshare.setActive(h).then(function(b){k.logger.log(c.user_friendly_id()+
    ": "+g+" success: srcid="+b.srcid+" deviceid="+b.bufferid);a.deviceid=b.bufferid;d(b.bufferid)})["catch"](function(){k.logger.log(c.user_friendly_id()+"failed to "+g+": srcid="+a.srcid+", maybe WS Agent is too slow to respond");e()})})};a.prototype.setActive=function(a,b){var c=this;k.logger.log(this.user_friendly_id()+".setActive() called. uniqueid="+b);return new Promise(function(d,e){a||(b=c.lastactive_);-1!=b?(a?(b!=c.lastactive_&&-1!=c.lastactive_&&c.activateSource(c.getSourceById(c.lastactive_),
    !1),c.lastactive_=b):c.lastactive_=-1,c.activateSource(c.getSourceById(b),a).then(function(b){d(a?"RemoteApplication-"+b:b)})["catch"](function(){e()})):e()})};return a}();a.ScreenSharingVda=m;var D=function(){function a(){}a.Width=140;a.Height=90;return a}();b=function(){function a(b,c,d,e,g,h,k,m,n,l){this.uniqueid_=y.nextId_++;this.srcid_=b;this.deviceid_=c;this.type_=d;this.imagedata_=e;this.icon_=g;this.name_=h;this.hwnd_=k;this.origin_=m;this.caption_=n;this.pid_=l}a.prototype.user_friendly_id=
    function(){return this.constructor.name+"["+this.uniqueid_+"]"};Object.defineProperty(a.prototype,"srcid",{get:function(){return this.srcid_},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"hwnd",{get:function(){return this.hwnd_},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"origin",{get:function(){return this.origin_},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"pid",{get:function(){return this.pid_},enumerable:!1,configurable:!0});a.prototype.getId=
    function(){return this.uniqueid_};a.prototype.getDeviceId=function(){return this.deviceid_};Object.defineProperty(a.prototype,"deviceid",{set:function(a){this.deviceid_=a},enumerable:!1,configurable:!0});a.prototype.getType=function(){return 2};a.prototype.getPreview=function(a,b,c){k.logger.log(this.user_friendly_id()+".getPreview() called, width:"+a+" height:"+b+" asImage:"+c);return Promise.reject(null)};a.prototype.setPreview=function(a){this.imagedata_=a};a.prototype.getPreviewAsync=function(a,
    b,c){k.logger.log(this.user_friendly_id()+".getPreviewAsync() called, width:"+a+" height:"+b);return!0===c?(a=h(this.imagedata_,D.Width,D.Height),Promise.resolve({data:a.src.replace(/^data:image\/(png|jpg);base64,/,"")})):Promise.resolve(this.imagedata_)};a.prototype.getPreviewImage=function(a,b,c){k.logger.log(this.user_friendly_id()+".getPreviewImage() called, width:"+b+" height:"+c);return Promise.resolve(d(this.imagedata_,a,b,c))};a.prototype.getDescription=function(){return this.name_};a.prototype.setDescription=
    function(a){this.name_=a};a.prototype.getIcon=function(a,b,c){return!0===c?(a=h(this.icon_,D.Width,D.Height),Promise.resolve({data:a.src.replace(/^data:image\/(png|jpg);base64,/,"")})):Promise.resolve(this.icon_)};a.prototype.getIconImage=function(a,b,c){k.logger.log(this.user_friendly_id()+".getIconImage() called, width:"+b+" height:"+c);return Promise.resolve(d(this.icon_,a,"undefined"!==typeof b?b:this.icon_.width,"undefined"!==typeof c?c:this.icon_.height))};a.prototype.setIcon=function(a){this.icon_=
    a};a.prototype.getBounds=function(){return{x:0,y:0,width:0,height:0}};a.prototype.equivalent=function(a){return this.pid_===a.pid_&&this.hwnd_===a.hwnd_};return a}();a.ScreenSourceVda=b;var y=function(a){function b(c,d,e){c=a.call(this,c,n.class_id_t.ScreenSource,d,e)||this;c.screenshare_=new z.ScreenShareUtil;c.uniqueid_=b.nextId_++;k.logger.log(c.user_friendly_id()+".constructor");return c}w(b,a);b.prototype.user_friendly_id=function(){return this.constructor.name+"["+this.uniqueid_+"]"};b.prototype.toJSImageData=
    function(a){var b=atob(a.data.toString()),b=this.screenshare_.str2ab(b),b=new Uint8ClampedArray(b,0,b.byteLength);this.imagedata_=new ImageData(b,a.width,a.height)};b.prototype.syncBarrier=function(){var a=this;k.logger.log(this.user_friendly_id()+".syncBarrier() called.");return new Promise(function(b,c){a.syncBarrierDeep(b,c)&&a.waitUntilConnected(a.user_friendly_id()+".syncBarrier").then(function(){Promise.all([a.remoteInvoke(!1,n.method_id_ScreenSource_t.srcid,0),a.remoteInvoke(!1,n.method_id_ScreenSource_t.deviceid,
    ""),a.remoteInvoke(!1,n.method_id_ScreenSource_t.type,0),a.remoteInvoke(!1,n.method_id_ScreenSource_t.name,""),a.remoteInvoke(!1,n.method_id_ScreenSource_t.imagedata),a.remoteInvoke(!1,n.method_id_ScreenSource_t.hwnd,""),a.remoteInvoke(!1,n.method_id_ScreenSource_t.origin,0),a.remoteInvoke(!1,n.method_id_ScreenSource_t.caption,""),a.remoteInvoke(!1,n.method_id_ScreenSource_t.pid,0)]).then(function(b){k.logger.log(a.user_friendly_id()+".syncBarrier(): success.");var c;b=b.map(function(b){return a.param0(b)});
    a.srcid_=b[0];a.deviceid_=b[1];a.type_=b[2];a.name_=b[3];c=b[4];a.hwnd_=b[5];a.origin_=b[6];a.caption_=b[7];a.pid_=b[8];a.toJSImageData(c);a.remoteInvoke(!1,n.method_id_ScreenSource_t.bounds,0).then(function(b){a.bounds_=a.param0(b);a.syncBarrierResolve(a)})["catch"](function(b){a.bounds_=void 0;b=a.logRemoteInvokeError(b,".prop.syncBarrier() getBounds failed.");a.syncBarrierReject(b)})})["catch"](function(b){b=a.logRemoteInvokeError(b,".prop.syncBarrier() failed.");a.syncBarrierReject(b)})})["catch"](function(b){b=
    a.logRemoteInvokeError(b,".syncBarrier() failed.");a.syncBarrierReject(b)})})};b.prototype.getId=function(){return this.uniqueid_};b.prototype.getDeviceId=function(){return this.deviceid_};b.prototype.getType=function(){return 1};b.prototype.getPreview=function(a,b,c){k.logger.log(this.user_friendly_id()+".getPreview() called, width:"+a+" height:"+b+" asImage:"+c);return Promise.reject(null)};b.prototype.getPreviewAsync=function(a,b,c){k.logger.log(this.user_friendly_id()+".getPreviewAsync() called, width:"+
    a+" height:"+b);return!0===c?(a=h(this.imagedata_,D.Width,D.Height),Promise.resolve({data:a.src.replace(/^data:image\/(png|jpg);base64,/,"")})):Promise.resolve(this.imagedata_)};b.prototype.getPreviewImage=function(a,b,c){k.logger.log(this.user_friendly_id()+".getPreviewImage() called, width:"+b+" height:"+c);return Promise.resolve(d(this.imagedata_,a,b,c))};b.prototype.getDescription=function(){return this.name_};b.prototype.getIcon=function(a,b){return Promise.resolve(this.imagedata_)};b.prototype.getBounds=
    function(){return this.bounds_||{x:0,y:0,width:0,height:0}};b.nextId_=B.MonitorsAndApps;return b}(q.ProxyObject);a.ScreenSource=y},691:function(b,a,c){Object.defineProperty(a,"__esModule",{value:!0});a.ScreenShareUtil=a.Bitmap=a.BitmapInfoHeader=a.BitmapFileHeader=a.setActiveRespData=a.setActiveReqData=a.getSourcesReqData=a.sshare_state=a.sshare_cmd=void 0;var e=c(946),l=c(973),h=c(851),d;(function(a){a[a.Unknown=0]="Unknown";a[a.Cap=1]="Cap";a[a.GetSources=2]="GetSources";a[a.SetActive=3]="SetActive";
    a[a.TopologyChanged=4]="TopologyChanged"})(d=a.sshare_cmd||(a.sshare_cmd={}));var w;(function(a){a[a.Unknown=0]="Unknown";a[a.Initialized=1]="Initialized";a[a.Error=2]="Error"})(w=a.sshare_state||(a.sshare_state={}));b=function(){return function(a){this.origin=a}}();a.getSourcesReqData=b;b=function(){return function(a,b,c,d,e,h,k){this.srcid=a;this.hwnd=b;this.origin=c;this.pid=d;this.border=e;this.cursor=h;this.activate=k}}();a.setActiveReqData=b;var q=function(){return function(a,b,c){this.srcid=
    a;this.origin=b;this.bufferid=c}}();a.setActiveRespData=q;var n=function(){function a(b,c,d,e,g){this.id_=b;this.resolve_=c;this.reject_=d;this.cmd_=e;this.data_=g;this.sent_=!1;this.timeoutId=void 0}a.prototype.user_friendly_id=function(){return this.constructor.name+"["+this.id_+"]"};a.prototype.cmdString=function(){return this.cmd_==d.Cap?"Cap":this.cmd_==d.GetSources?"GetSources":this.cmd_==d.SetActive?"SetActive":"Unknown"};return a}(),k=function(){return function(){}}();a.BitmapFileHeader=k;
    var p=function(){return function(){}}();a.BitmapInfoHeader=p;var z=function(){return function(){}}();a.Bitmap=z;b=function(){function a(){this.cmdque_=[]}a.prototype.reqid=function(){return a.nextId++};a.prototype.user_friendly_id=function(){return this.constructor.name+"[]"};a.prototype.stateString=function(){return a.state_==w.Initialized?"Initialized":a.state_==w.Error?"Error":"Unknown"};a.prototype.reset=function(){a.state_=w.Unknown;this.cmdque_=[]};a.prototype.dispatchCmds=function(){var b=
    this;a.state_==w.Initialized?this.cmdque_.forEach(function(a){0==a.sent_&&(a.cmd_==d.GetSources?(b.WSSendGetSources(a.id_,a.data_),a.sent_=!0,a.timeoutId=setTimeout(b.abortCmd.bind(b,a.id_),5E3)):a.cmd_==d.SetActive?(b.WSSendSetActive(a.id_,a.data_),a.sent_=!0,a.timeoutId=setTimeout(b.abortCmd.bind(b,a.id_),5E3)):h.logger.log(a.user_friendly_id()+".dispatchCmds(): invalid cmd: "+a.cmdString()))}):a.state_==w.Error?(this.cmdque_.forEach(function(a){h.logger.log(a.user_friendly_id()+".dispatchCmds(): purging cmd: "+
    a.cmdString());a.reject_()}),this.cmdque_=[]):h.logger.log(this.user_friendly_id()+".dispatchCmds(): invalid state: "+this.stateString())};a.prototype.abortCmd=function(a){var b=this.cmdque_.findIndex(function(b){return b.id_===a});-1!==b?(b=this.cmdque_.splice(b,1)[0],h.logger.log(b.user_friendly_id()+NaN+b.cmdString()+"]: aborted due to nonresponsive WS Agent!"),b.cmd_===d.SetActive&&b.data_.activate&&l.ScreenSharing.screenSharingInstance().stopAppshare(),b.reject_()):h.logger.log(this.user_friendly_id()+
    ".abortCmd(): Cmd not found!")};a.prototype.finalizeCmd=function(a,b,c){for(var d=0;d<this.cmdque_.length;d++){var e=this.cmdque_[d];if(void 0!=b&&b==e.id_&&1==e.sent_||void 0==b&&1==e.sent_){clearTimeout(e.timeoutId);h.logger.log(e.user_friendly_id()+".finalizeCmd(): purging cmd: "+e.cmdString());a?void 0!=c?e.resolve_(c):e.resolve_():e.reject_();this.cmdque_.splice(d,1);break}}};a.prototype.onInitialized=function(b){h.logger.log(this.user_friendly_id()+".onInitialized(): init: "+b+" state:"+this.stateString());
    a.state_!=w.Initialized&&(a.state_=b?w.Initialized:w.Error);this.dispatchCmds()};a.prototype.onInitComplete=function(){h.logger.log(this.user_friendly_id()+".onInitComplete(): state:"+this.stateString());a.state_==w.Unknown&&(a.state_=w.Error,h.logger.log(this.user_friendly_id()+".onInitComplete(): items in queue:"+this.cmdque_.length),this.dispatchCmds())};a.prototype.onError=function(b){h.logger.log(this.user_friendly_id()+".onError(): state: "+this.stateString());a.state_==w.Unknown?(a.state_=
    w.Error,this.dispatchCmds()):a.state_==w.Initialized&&this.finalizeCmd(!1,b)};a.prototype.ab2str=function(a){return String.fromCharCode.apply(null,new Uint8Array(a))};a.prototype.str2ab=function(a){for(var b=new ArrayBuffer(a.length),c=new Uint8Array(b),d=0,e=a.length;d<e;d++)c[d]=a.charCodeAt(d);return b};a.prototype.getBMP=function(a){var b=new DataView(a),c=new z;c.fileheader=new k;c.fileheader.bfType=b.getUint16(0,!0);c.fileheader.bfSize=b.getUint32(2,!0);c.fileheader.bfReserved1=b.getUint16(6,
    !0);c.fileheader.bfReserved2=b.getUint16(8,!0);c.fileheader.bfOffBits=b.getUint32(10,!0);c.infoheader=new p;c.infoheader.biSize=b.getUint32(14,!0);c.infoheader.biWidth=b.getUint32(18,!0);c.infoheader.biHeight=b.getUint32(22,!0);c.infoheader.biPlanes=b.getUint16(26,!0);c.infoheader.biBitCount=b.getUint16(28,!0);c.infoheader.biCompression=b.getUint32(30,!0);c.infoheader.biSizeImage=b.getUint32(34,!0);c.infoheader.biXPelsPerMeter=b.getUint32(38,!0);c.infoheader.biYPelsPerMeter=b.getUint32(42,!0);c.infoheader.biClrUsed=
    b.getUint32(46,!0);c.infoheader.biClrImportant=b.getUint32(50,!0);b=c.fileheader.bfOffBits;c.stride=4*Math.floor((c.infoheader.biBitCount*c.infoheader.biWidth+31)/32);c.pixels=new Uint8Array(a,b);return c};a.prototype.convertToImageData=function(a){var b=document.createElement("canvas").getContext("2d"),c=a.infoheader.biWidth,d=a.infoheader.biHeight,b=b.createImageData(c,d),e=b.data,g=a.pixels;a=a.stride;for(var h=0;h<d;++h)for(var k=0;k<c;++k){var l=4*(k+c*(d-h)),n=4*k+a*h;e[l]=g[n+2];e[l+1]=g[n+
    1];e[l+2]=g[n];e[l+3]=255}return b};a.prototype.onGetSources=function(a,b){this.sources_=[];var c=this;b.sources.forEach(function(a){var b=a.image,d=atob(b.data),d=c.str2ab(d),d=new Uint8ClampedArray(d,0,d.byteLength),b=new ImageData(d,b.width,b.height),d=a.icon,e=atob(d.data),e=c.str2ab(e),e=new Uint8ClampedArray(e,0,e.byteLength),d=new ImageData(e,d.width,d.height);a=new l.ScreenSourceVda(a.srcid,a.devicdid,a.type,b,d,a.name,a.hwnd,a.origin,a.caption,a.pid);c.sources_.push(a)});this.finalizeCmd(!0,
    a,this.sources_)};a.prototype.getSources=function(b){var c=this;return new Promise(function(e,h){if(a.state_!=w.Error){var k=new n(c.reqid(),e,h,d.GetSources,b);c.cmdque_.push(k)}else h();a.state_==w.Initialized&&c.dispatchCmds()})};a.prototype.onSetActive=function(a,b){var c=new q(b.srcid,b.origin,b.bufferid);this.finalizeCmd(!0,a,c)};a.prototype.setActive=function(b){var c=this;return new Promise(function(e,h){if(a.state_!=w.Error){var k=new n(c.reqid(),e,h,d.SetActive,b);c.cmdque_.push(k)}else h();
    a.state_==w.Initialized&&c.dispatchCmds()})};a.prototype.setTopologyChangeCB=function(a){this.onwindowtopologychanged_=a};a.prototype.onToplogyChanged=function(){if(this.onwindowtopologychanged_)this.onwindowtopologychanged_()};a.prototype.WSSendGetSources=function(a,b){try{e.getRedirector().WSSendObject({v:"appsharing",hdr:{command:d.GetSources,id:a},data:{origin:b.origin}})}catch(c){h.logger.log(c)}};a.prototype.WSSendSetActive=function(a,b){try{e.getRedirector().WSSendObject({v:"appsharing",hdr:{command:d.SetActive,
    id:a},data:{srcid:b.srcid,hwnd:b.hwnd,origin:b.origin,pid:b.pid,border:b.border,cursor:b.cursor,activate:b.activate}})}catch(c){h.logger.log(c)}};a.state_=w.Unknown;a.nextId=0;return a}();a.ScreenShareUtil=b},517:function(b,a){Object.defineProperty(a,"__esModule",{value:!0});a.Stats=a.StatsReport=void 0;var c=function(){function a(){this.items=[]}a.fromJSON=function(b){for(var c=new a,l=0;l<b.length;l++){var q=e.fromJSON(b[l]);c.items.push(q)}return c};a.toRTCStatsReport=function(a){return a};a.prototype.toJSON=
    function(){return JSON.stringify(this.items)};a.prototype.result=function(){return this.items};return a}();a.StatsReport=c;var e=function(){function a(){this.names_=[];this.stat_=new Map;this.id="";this.timestamp=0;this.type=""}a.fromJSON=function(b){var c=new a;c.id=b.id||"";c.timestamp=b.timestamp||"";c.type=b.type||"";Object.keys(b).forEach(function(a){"id"!==a&&"timestamp"!==a&&"type"!==a&&(c.names_.push(a),c.stat_.set(a,b[a]))});return c};a.prototype.toJSON=function(){return JSON.stringify({id:this.id,
    timestamp:this.timestamp,type:this.type,stat:this.stat_})};a.prototype.names=function(){return this.names_};a.prototype.stat=function(a){return this.stat_.get(a)};return a}();a.Stats=e},704:function(b,a,c){var e=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=
    null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();Object.defineProperty(a,"__esModule",{value:!0});a.StreamResolution=a.RemoteCallConstraints=void 0;var l=c(550),h=c(658),d=c(851);b=function(){return function(){}}();a.RemoteCallConstraints=b;b=function(a){function b(){var c=a.call(this,null,l.class_id_t.StreamResolution,0,h.ProxyMode.Local)||this;c.lastSentConstraints_=null;return c}e(b,a);Object.defineProperty(b.prototype,"onupdate",{get:function(){return this.onupdate_},set:function(a){var c=
    this;this.onupdate_=a;this.waitUntilConnected(this.user_friendly_id()+".onupdate").then(function(){var a=c.registerCallbacks(!1,c.isNullCallback(c.onupdate_),l.method_id_StreamResolution_t.onupdate);a.then(function(a){a=a.params;var e=a[0];a.slice(1);d.logger.log(c.user_friendly_id()+".onupdate",JSON.stringify(e));c.lastSentConstraints_&&JSON.stringify(c.lastSentConstraints_)==JSON.stringify(e)?d.logger.log(c.user_friendly_id()+".onupdate constraints unchanged, ignoring"):c.onupdate_&&(b.isValidRemoteConstraints(e)?
    (c.lastSentConstraints_=e,c.onupdate_(c.toICallConstraints(c.lastSentConstraints_))):d.logger.log(c.user_friendly_id()+".onupdate invalid RemoteCallConstraints"))});return c.remoteInvoke(!0,l.method_id_StreamResolution_t.onupdate,a.success)})["catch"](function(){return d.logger.log(c.user_friendly_id()+".onupdate, could not set listener")})},enumerable:!1,configurable:!0});b.prototype.toICallConstraints=function(a){var b={maxParticipantResolutions:null};if(a.max_participant_resolutions_dynamic){b.maxParticipantResolutions=
    {};for(var c=0,e=a.max_participant_resolutions_dynamic;c<e.length;c++){var g=e[c];b.maxParticipantResolutions[g.count]=g.resolution}}else a.max_participant_resolutions_static&&(b.maxParticipantResolutions=a.max_participant_resolutions_static);b.maxIncomingStreams=a.max_incoming_streams;b.maxOutgoingResolution=a.max_outgoing_resolution;b.maxSimulcastLayers=a.max_simulcast_layers;d.logger.log(this.user_friendly_id()+".toICallConstraints: "+JSON.stringify(b));return b};b.isValidRemoteConstraints=function(a){return null!=
    a&&(null!=a.max_participant_resolutions_dynamic||null!=a.max_participant_resolutions_static)&&null!=a.max_incoming_streams&&null!=a.max_outgoing_resolution&&null!=a.max_simulcast_layers};b.prototype.getCallConstraints=function(){var a=this;return new Promise(function(c,e){a.waitUntilConnected(a.user_friendly_id()+".getCallConstraints").then(function(){return a.remoteInvoke(!1,l.method_id_StreamResolution_t.getCallConstraints)}).then(function(h){h=a.param0(h);d.logger.log(a.user_friendly_id()+".getCallConstraints",
    JSON.stringify(h));b.isValidRemoteConstraints(h)?(a.onupdate_&&(a.lastSentConstraints_=h),c(a.toICallConstraints(h))):(d.logger.log(a.user_friendly_id()+".getCallConstraints invalid RemoteCallConstraints"),e())})["catch"](function(){d.logger.log(a.user_friendly_id()+".getCallConstraints promise rejected");e()})})};b.getDefaultConstraints=function(){var a={maxParticipantResolutions:{1:720,2:720,3:360,more:360},maxIncomingStreams:4,maxOutgoingResolution:720,maxSimulcastLayers:0};d.logger.log("StreamResolution.getDefaultConstraints: "+
    JSON.stringify(a));return a};b.prototype.updateStreamResolution=function(){var a=this;this.getCallConstraints().then(function(b){return a.onupdate&&a.onupdate(b)})["catch"](function(){return d.logger.log("Failed to get stream resolution information!")})};return b}(h.ProxyObject);a.StreamResolution=b},394:function(b,a,c){Object.defineProperty(a,"__esModule",{value:!0});a.Telemetry=a.tel_key_CPUTotalmemory=a.tel_key_CPUGpuinfo=a.tel_key_CPUMachineid=a.tel_key_CPUProcessors=a.tel_key_CPUCores=a.tel_key_CPUModel=
    a.tel_key_CPUSpeed=a.tel_key_OSEdition=a.tel_key_OSDistro=a.tel_key_OSArchitecture=a.tel_key_OSVersion=a.tel_key_OSFamily=a.tel_key_VerHdxRtcEngine=a.tel_key_VerTypeScript=a.tel_key_VerEndpoint=a.tel_key_VerVda=a.tel_key_VerReceiver=a.tel_key_VerWebrtcCodecs=a.tel_key_VerWebrpc=a.tel_key_PerfCallType=a.tel_key_PerfCallState=a.tel_key_PerfCallDirection=a.tel_key_SpeakerDeviceUsed=a.tel_key_VideoDeviceUsed=a.tel_key_AudioDeviceUsed=a.tel_key_CallEstOutgoing=a.tel_key_CallEstIncoming=a.tel_key_ScreensharingCallDuration=
    a.tel_key_VideoCallDuration=a.tel_key_AudioCallDuration=a.tel_key_ConferenceCallDuration=a.tel_cmd=a.tel_CallType=a.tel_CallDirection=a.tel_CallState=void 0;var e=c(946),l=c(851);(function(a){a[a.unknown=0]="unknown";a[a.active=1]="active";a[a.idle=2]="idle"})(a.tel_CallState||(a.tel_CallState={}));(function(a){a[a.unknown=0]="unknown";a[a.incoming=1]="incoming";a[a.outgoing=2]="outgoing"})(a.tel_CallDirection||(a.tel_CallDirection={}));(function(a){a[a.unknown=0]="unknown";a[a.audio=1]="audio";a[a.video=
    2]="video";a[a.multi=3]="multi";a[a.dshare=4]="dshare"})(a.tel_CallType||(a.tel_CallType={}));var h;(function(a){a[a.Unknown=0]="Unknown";a[a.Cap=1]="Cap";a[a.Init=2]="Init";a[a.Data=3]="Data"})(h=a.tel_cmd||(a.tel_cmd={}));a.tel_key_ConferenceCallDuration="ConferenceCallDuration";a.tel_key_AudioCallDuration="AudioCallDuration";a.tel_key_VideoCallDuration="VideoCallDuration";a.tel_key_ScreensharingCallDuration="ScreensharingCallDuration";a.tel_key_CallEstIncoming="CallEstIncoming";a.tel_key_CallEstOutgoing=
    "CallEstOutgoing";a.tel_key_AudioDeviceUsed="AudioDeviceUsed";a.tel_key_VideoDeviceUsed="VideoDeviceUsed";a.tel_key_SpeakerDeviceUsed="SpeakerDeviceUsed";a.tel_key_PerfCallDirection="PerfCallDirection";a.tel_key_PerfCallState="PerfCallState";a.tel_key_PerfCallType="PerfCallType";a.tel_key_VerWebrpc="VerWebrpc";a.tel_key_VerWebrtcCodecs="VerWebrtcCodecs";a.tel_key_VerReceiver="VerReceiver";a.tel_key_VerVda="VerVda";a.tel_key_VerEndpoint="VerEndpoint";a.tel_key_VerTypeScript="VerTypeScript";a.tel_key_VerHdxRtcEngine=
    "VerHdxRtcEngine";a.tel_key_OSFamily="OSFamily";a.tel_key_OSVersion="OSVersion";a.tel_key_OSArchitecture="OSArchitecture";a.tel_key_OSDistro="OSDistro";a.tel_key_OSEdition="OSEdition";a.tel_key_CPUSpeed="CPUSpeed";a.tel_key_CPUModel="CPUModel";a.tel_key_CPUCores="CPUCores";a.tel_key_CPUProcessors="CPUProcessors";a.tel_key_CPUMachineid="CPUMachineid";a.tel_key_CPUGpuinfo="CPUGpuinfo";a.tel_key_CPUTotalmemory="CPUTotalmemory";var d=function(){function a(b,c,d,e){this.cmd=b;this.key=c;this.value=d;this.flags=
    e}a.prototype.SendTelemetryData=function(a){a.SendTelemetryData(this.cmd,this.key,this.value,this.flags)};return a}();b=function(){function a(){this.id=0;this.deferredData=[]}a.prototype.reset=function(){this.id=0;this.deferredData=[]};a.prototype.onInitialized=function(a){for(this.id=a;this.deferredData&&0<this.deferredData.length;)this.deferredData.shift().SendTelemetryData(this)};a.prototype.SendTelemetryInit=function(){0<this.id&&this.reset();try{e.getRedirector().WSSendObject({v:"telemetry",
    hdr:{command:h.Init,id:0},init:{domain:"HDXMM Teams",subdomain:"Teams",feature:"msteams",version:"1.1.1.1"}})}catch(a){l.logger.log(a)}};a.prototype.SendTelemetryData=function(a,b,c,w){if(a!=h.Data)l.logger.log("invalid telemetry command!");else if(0==this.id)this.deferredData.push(new d(a,b,c,w));else try{e.getRedirector().WSSendObject({v:"telemetry",hdr:{command:a,id:this.id},data:{key:b,value:c,flags:w}})}catch(p){l.logger.log(p)}};return a}();a.Telemetry=b},259:function(b,a,c){Object.defineProperty(a,
    "__esModule",{value:!0});a.Util=void 0;var e=c(851);b=function(){function a(){}a.stringifyArray=function(a){for(var b="[",c=0;c<a.length;++c)0!=c&&(b+=","),b+=this.stringify(a[c]);return b+"]"};a.stringifyObject=function(a){var b="{",c=!0,e;for(e in a)c?c=!1:b+=",",b=b+'"'+e+'":',b=a[e]instanceof Array?b+this.stringifyArray(a[e]):"object"==typeof a[e]?b+this.stringifyObject(a[e]):b+JSON.stringify(a[e]);return b+"}"};a.stringify=function(a){return"object"==typeof a?"[object Array]"==Object.prototype.toString.call(a)?
    this.stringifyArray(a):this.stringifyObject(a):JSON.stringify(a)};a.GetObjectPropertyDescriptor=function(a,b){for(var c=void 0;a!=Object.prototype;){c=Object.getOwnPropertyDescriptor(a,b);if(void 0!==c)break;a=a.__proto__}return c};a.sendEvent=function(a,b){try{var c=document.createEvent("Event");c.initEvent(b,!0,!0);a.dispatchEvent(c)}catch(l){e.logger.log('sendEvent(): exception dispatching "'+b+'" event: '+l.message)}};a.hasValue=function(a){var b=!1;null!==a&&void 0!==a&&(b=!0);return b};return a}();
    a.Util=b},307:function(b,a,c){var e=this&&this.__awaiter||function(a,b,c,d){function e(a){return a instanceof c?a:new c(function(b){b(a)})}return new (c||(c=Promise))(function(c,g){function h(a){try{l(d.next(a))}catch(b){g(b)}}function k(a){try{l(d["throw"](a))}catch(b){g(b)}}function l(a){a.done?c(a.value):e(a.value).then(h,k)}l((d=d.apply(a,b||[])).next())})},l=this&&this.__generator||function(a,b){function c(a){return function(b){return d([a,b])}}function d(c){if(g)throw new TypeError("Generator is already executing.");
    for(;e;)try{if(g=1,h&&(k=c[0]&2?h["return"]:c[0]?h["throw"]||((k=h["return"])&&k.call(h),0):h.next)&&!(k=k.call(h,c[1])).done)return k;if(h=0,k)c=[c[0]&2,k.value];switch(c[0]){case 0:case 1:k=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++;h=c[1];c=[0];continue;case 7:c=e.ops.pop();e.trys.pop();continue;default:if(!(k=e.trys,k=0<k.length&&k[k.length-1])&&(6===c[0]||2===c[0])){e=0;continue}if(3===c[0]&&(!k||c[1]>k[0]&&c[1]<k[3]))e.label=c[1];else if(6===c[0]&&e.label<k[1])e.label=
    k[1],k=c;else if(k&&e.label<k[2])e.label=k[2],e.ops.push(c);else{k[2]&&e.ops.pop();e.trys.pop();continue}}c=b.call(a,e)}catch(l){c=[6,l],h=0}finally{g=k=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}var e={label:0,sent:function(){if(k[0]&1)throw k[1];return k[1]},trys:[],ops:[]},g,h,k,l;$jscomp.initSymbol();$jscomp.initSymbol();$jscomp.initSymbolIterator();return l={next:c(0),"throw":c(1),"return":c(2)},"function"===typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l},h=
    c(360),d=c(144);c(679);var p=c(945),q=c(368),n=c(851).logger,k=c(650),v=c(973),z=c(247).getGC,g=c(946),B=c(613).E911Service;b=c(550);var t=b.Features,m=b.FEATURE_vda_delete_viewport,D=c(704).StreamResolution,y=c(239).E;(function(a,b){a.CitrixWebRTC=b()})("undefined"!==typeof self?self:this,function(){function a(b,c){n.log("VDI Shim createMediaStreamInternal");G();var f=new d.RemoteStream(null,0,0,b),e=new Promise(function(a,b){f.syncBarrier().then(function(b){n.log("stream.syncBarrier(): success.");
    a(b)})["catch"](function(a){n.log("stream.syncBarrier(): failed with error: "+JSON.stringify(a));f.release();b()})});return c?e:f}function b(a){null==Y&&(Y=new q.Frames(!O.isFeatureSupported(t.FEATURE_public_multi_window)));a(Y)}function c(a,d){b(function(b){var c=b.findFrame(a);void 0==c&&(c=b.newFrame(a));d(c)})}function M(a,c){b(function(b){b=b.findFrame(a);null!=b&&c(b)})}function F(a){g.getRedirector().SendTelemetryData_Speaker(a)}function J(a,b){if(S)try{"vdiE911InfoChanged"===a?a="vdiE911DataChanged":
    "vdiCallConstraintsChanged"===a&&(a="vdiStreamConstraintsChanged");var c=Object.assign({event:a},b);n.log("Dispatching VM event:"+JSON.stringify(c));S(c)}catch(d){n.log("Exception onVMEvent(), eventName:"+a+" message:"+d.message)}}function G(){var a=window.getCitrixWebrtcRedir;void 0!==a?a().then(function(a){n.log("sucesss on connect, getCitrixWebrtcRedir reg value:"+a);"1"!==a||O||(n.log("supported client"),P(W))})["catch"](function(){n.log("Failure to Read Webrtc redir Reg Key");f()}):(n.log("window.getCitrixWebrtcRedir() method is not available yet"),
    f())}function L(a){n.log("VDI Event: vdiClientDisconnected");ba();if(!0===a&&!1===aa){n.log("VDI Event: vdiClientDisconnected with failure reported");aa=!0;try{S({event:"vdiClientDisconnected",reason:"failure",msg:"Websocket Connection Failure"})}catch(b){n.log("onVMEvent(): exception: "+b.message)}}else{aa=!1;try{S({event:"vdiClientDisconnected",reason:"endpointDisconnected"})}catch(b){n.log("onVMEvent(): exception: "+b.message)}}}function P(a){n.log("initRemoteSession with vendor:"+a);O||(O=new k.RemoteSession("CitrixWebRTCSDK",
    a))}function C(){n.log("VDI Event: onVdiClientDisconnectedTimer");P(W)}function R(){var a=this;n.log("VDI Shim onVdiClientConnected...");O?O.getSessionInfo().then(function(c){return e(a,void 0,void 0,function(){return l(this,function(a){switch(a.label){case 0:return n.log("VDI Shim onVdiClientConnected, client endpoint info:"+JSON.stringify(c)),H&&H.isValid()||(H=new d.RemoteDevices),I&&I.isValid()||(I=new d.NavigatorUserMedia),b(function(a){a.reconnect()}),J("vdiClientConnected",{version:c,endpointId:c.endpointId}),
    [4,I.getCapabilities().then(function(a){n.log("VDI Shim onVdiClientConnected, caps = "+a)})["catch"](function(){n.log("VDI Shim onVdiClientConnected, could not get capabilities")})];case 1:return a.sent(),T||(T=new B,T.onupdate=function(a){J("vdiE911InfoChanged",a)},T.updateE911Info()),U||(J("vdiCallConstraintsChanged",D.getDefaultConstraints()),null!==O&&k.RemoteSession.isFeatureCallConstraintsSupported()&&(U=new D,U.onupdate=function(a){J("vdiCallConstraintsChanged",a)},U.updateStreamResolution())),
    navigator.mediaDevices.dispatchEvent(new CustomEvent("devicechange")),[2]}})})})["catch"](function(){n.log("VDI Shim onVdiClientConnected, getSessionInfo failure! Session is not fully connected yet...")}):n.log("VDI Shim onVdiClientConnected, remoteSession does not exist")}function K(a){if("1"===a)n.log("Supported client"),g.getRedirector().pingConnectionBegin(!0);else if("0"===a){n.log("VDI Event: Unsupported client reported");try{S({event:"vdiClientDisconnected",reason:"endpointUnsupported",msg:"Unsupported endpoint connected"})}catch(b){n.log("onVMEvent(): exception: "+
    b.message)}}else n.log("Citrix Webrtc Redir Reg Key value is incorrect")}function f(){!1===Z&&(n.log("starting MS Reg retry..."),Z=!0,X(10))}function X(a){if(0>=a){Z=!1;n.log("VDI Event: Reg Key not Updated after timer reported, Fallback");try{S({event:"vdiClientDisconnected",reason:"failure",msg:"Citrix Webrtc Redir Reg Key not Present"})}catch(b){n.log("onVMEvent(): exception: "+b.message)}}else{var c=window.getCitrixWebrtcRedir;void 0!==c?c().then(function(b){n.log("CitrixMSTeamsRedir reg value:"+
    b);"0"===b||"1"===b?(K(b),Z=!1):(n.log("MS Teams Redir Reg key not updated - Start timer"),setTimeout(function(){n.log("Timer waiting for registry to be updated count :"+a);X(--a)},1E3))})["catch"](function(){n.log("Failure to Read MS Teams redir Reg Key - Start timer");setTimeout(function(){n.log("Timer waiting for registry to be updated count :"+a);X(--a)},1E3)}):(n.log("window.getCitrixWebrtcRedir() method is not available yet"),setTimeout(function(){n.log("Timer waiting for registry to be updated count :"+
    a);X(--a)},1E3))}}function ba(){n.log("VDI : cleanup");g.getRedirector().clearReqs();d.NavigatorUserMedia.resetCapabilities();Y=H=I=null;N&&N.release();O&&O.release();O=null;v.ScreenSharing.destroyInstance();T&&(T.release(),T=null);U&&(U.release(),U=null);z().reset();n.log("VDI : cleanup done")}function ca(){return v.ScreenSharing.screenSharingInstance(function(){if(S)try{S({event:"vdiScreenTopologyChanged"})}catch(a){n.log("onVMEvent('vdiScreenTopologyChanged'): exception: "+a.message)}})}function E(a){if(!V)throw n.log("VDI Shim "+
    a+": throwing exception: not initialized!!"),new DOMException("UCSDK is not initialized!!!");}var I=null,da=d.NavigatorUserMedia.getCapabilities,H=null,Y=null,N=null,S=null,T=null,U=null,aa=!1,O=void 0,Z=!1,V=!1,W=void 0;return{Features:t,CitrixPeerConnection:h.PeerConnection,getUserMedia:function(a,b,c){E("getUserMedia");G();n.log("VDI Shim getUserMedia");null!==I&&I.isValid()||(I=new d.NavigatorUserMedia);var f=d.RemoteMediaStreamConstraints.isConstraintsAudioDeviceIdEmpty(a),e=d.RemoteMediaStreamConstraints.isConstraintsVideoSourceIdEmpty(a);
    return f||e?new Promise(function(d,f){H.enumerateDevices().then(function(d){return I.webkitGetUserMedia(a,b,c)}).then(function(a){n.log("webkitGetUserMedia for default was resolved");d(a)})["catch"](function(a){n.log("getUserMedia() for default failed with error:"+JSON.stringify(a));f()})}):I.webkitGetUserMedia(a,b,c)},getDisplayMedia:function(a){E("getDisplayMedia");G();n.log("VDI Shim getDisplayMedia");null!==H&&H.isValid()||(H=new d.RemoteDevices);return H.getDisplayMedia(a)},enumerateDevices:function(){E("enumerateDevices");
    G();n.log("VDI Shim enumerateDevices");null!==H&&H.isValid()||(H=new d.RemoteDevices);return H.enumerateDevices()},onWindowClose:function(a,c,d){E("onWindowClose");n.log("VDI Shim onWindowClose: (handle: "+a+")");g.getRedirector().getVDAFeatureValue(m)&&b(function(b){b.disposeFrame(a)})},setClientAreaOffset:function(a,b,d){E("setClientAreaOffset");n.log("VDI setClientAreaOffset with xOffset = "+a+", yOffset = "+b+", windowHandle = "+d);G();c(d,function(c){c.setClientAreaOffset(a,b)})},mapVideoElement:function(a,
    b){E("mapVideoElement");n.log("VDI New Video Element Created, Creating Mapping to Thin Client DOM");G();c(b,function(b){b.newVideoElement(a)})},mapAudioElement:function(a){E("mapAudioElement");n.log("VDI New Audio Element Created, Creating Mapping to VDA");if(void 0!==a.remoteAudioElement)n.log("Audio element is already configured!");else{G();delete a.remoteAudioElement;Object.defineProperty(a,"remoteAudioElement",{writable:!0,configurable:!0,value:null});a.remoteAudioElement=new p.AudioElement;delete a.sinkId;
    Object.defineProperty(a,"sinkId",{configurable:!0,get:function(){return a.remoteAudioElement?a.remoteAudioElement.sinkId:void 0},set:function(b){n.log("VDI Shim set audio element SinkId value = "+b);a.setSinkId(b).then(function(){n.log("VDI Shim set audio element SinkId success")})["catch"](function(){n.log("VDI Shim set audio element SinkId failure")})}});var b=a.remoteAudioElement.play;a.play=function(){n.log("VDI Shim remote audio play");return b.apply(a.remoteAudioElement,arguments)};var c=a.remoteAudioElement.pause;
    a.pause=function(){n.log("VDI Shim remote audio pause");return c.apply(a.remoteAudioElement,arguments)};a.setSinkId=function(b){n.log("VDI Shim set audio element SinkId value = "+b);var c=a.remoteAudioElement.setSinkId(b),f;d.enumeratedDevices.forEach(function(a){b===a.deviceId&&(f=a.label)});F(f);return c};delete a.srcObject;Object.defineProperty(a,"srcObject",{configurable:!0,get:function(){return a.remoteAudioElement?a.remoteAudioElement.srcObject:void 0},set:function(b){n.log("VDI Shim set audio element srcObject "+
    JSON.stringify(b));a.remoteAudioElement.srcObject=b}})}},disposeVideoElement:function(a,b){E("disposeVideoElement");n.log("VDI Shim disposeVideoElement: ");M(b,function(b){b.disposeVideoElement(a)})},disposeAudioElement:function(a,b,c){E("disposeAudioElement");n.log("VDI Shim disposeAudioElement: ");a&&(b=a.remoteAudioElement)&&(b.dispose(),a.remoteAudioElement=void 0)},setVMEventCallback:function(a){var b=this;S=a;g.getRedirector().isConnected()&&O.getSessionInfo().then(function(a){return e(b,void 0,
    void 0,function(){return l(this,function(b){n.log("VDI Shim onVdiClientConnected, client endpoint info:"+JSON.stringify(a));J("vdiClientConnected",{version:a,endpointId:a.endpointId});return[2]})})});n.log("VDI Event Callback Set")},playNotifyAudio:function(a,b){E("playNotifyAudio");n.log("VDI Shim Audio playNotifyAudio audioId:"+a+" src:"+b);N&&N.playNotifyAudio(a,b)},stopNotifyAudio:function(a,b){E("stopNotifyAudio");n.log("VDI Shim Audio pauseNotifyAudio audioId:"+a+" src:"+b);N&&N.pauseNotifyAudio(a,
    b)},setSinkId:function(a,b){E("setSinkId");n.log("VDI Shim Audio setSinkId audioId:"+a+" sinkId:"+b);N&&N.setSinkId(a,b)},getLoop:function(a){E("getLoop");var b;N&&(b=N.getLoop(a));n.log("VDI Shim Audio getLoop audioId:"+a+" loop: "+b);return b},setLoop:function(a,b){E("setLoop");n.log("VDI Shim Audio setLoop audioId:"+a+" bool:"+b);N&&N.setLoop(a,b)},addClipRect:function(a,b){E("addClipRect");n.log("VDI Adding Occlusion "+JSON.stringify(a));c(b,function(b){b.addOcclusion(a)})},removeClipRect:function(a,
    b){E("removeClipRect");n.log("VDI Removing Occlusion "+JSON.stringify(a));c(b,function(b){b.removeOcclusion(a)})},initLog:function(a,b){n.setMSLogger(a,b);n.log("VDI init logger")},isFeatureOn:function(a){E("isFeatureOn");return O?O.isFeatureSupported(a):!1},onConnectionChange:function(a){E("onConnectionChange");n.log("VDI : onConnectionChange to "+a);!1===a?n.log("Disconnecting from the VDA"):(n.log("Connecting to the VDA"),a=window.getCitrixWebrtcRedir,void 0!==a?a().then(function(a){n.log("Sucesss on connect, CitrixRedir reg value:"+
    a);"0"===a||"1"===a?K(a):(n.log("MS Teams Redir Reg key not updated yet"),f())})["catch"](function(){n.log("Failure to Read MS Teams redir Reg Key");f()}):(n.log("window.getCitrixWebrtcRedir() method is not available yet"),f()))},getScreensAsync:function(){E("getScreensAsync");n.log("VDI Shim getScreensAsync");G();var a=ca();return a.getScreensAsync.apply(a,arguments)},getWindowsAsync:function(){E("getWindowsAsync");n.log("VDI Shim getWindowsAsync");G();var a=ca();return a.getWindowsAsync.apply(a,
    arguments)},setScreenSharePanelId:function(a){E("setScreenSharePanelId");n.log("VDI: setScreenSharePanelId set to "+JSON.stringify(a));G();null!==H&&H.isValid()||(H=new d.RemoteDevices);H.panelid=a},setCodecCapabilities:function(a){E("setCodecCapabilities");G();n.log("VDI Shim setCodecCapabilities");null!==I&&I.isValid()||(I=new d.NavigatorUserMedia);return I.setCodecCapabilities(a)},getE911Data:function(){E("getE911Data");return T?T.getE911Info():null},createMediaStream:function(b){E("createMediaStream");
    n.log("VDI Shim createMediaStream");return a(b,!1)},createMediaStreamAsync:function(b){E("createMediaStreamAsync");n.log("VDI Shim createMediaStreamAsync");return a(b,!0)},disposeMediaStream:function(a){E("disposeMediaStream");n.log("VDI Shim disposeMediaStream: ");for(var b=0;b<a.length;b++){var c=a[b];c&&c.dispose()}},getCapabilities:function(a){E("getCapabilities");G();n.log("VDI Shim getCapabilities");null!==I&&I.isValid()||(I=new d.NavigatorUserMedia,da=d.NavigatorUserMedia.getCapabilities);
    return da.apply(I,arguments)},initUCSDK:function(a){n.log("VDI Shim initUCSDK vendor:"+a);var b=!0;void 0==a||null==a||"string"!==typeof a||0==a.length?b=!1:0==a.split(" ").join("").length&&(b=!1);if(!b)throw n.log("VDI Shim initUCSDK: throwing exception: vendor info cannot be empty!!!"),new DOMException("vendor info cannot be empty, please pass vendor info string!!!");V||(W=a,I=new d.NavigatorUserMedia,H=new d.RemoteDevices,N=new y,H=new d.RemoteDevices,P(W),window.onVdiClientDisconnected=L,window.onVdiClientDisconnectedTimer=
    C,window.onVdiClientConnected=R,V=!0)},deinitUCSDK:function(){n.log("VDI Shim deinitUCSDK");V&&(g.getRedirector().terminateOptimization(),ba(),window.onVdiClientDisconnected=void 0,window.onVdiClientDisconnectedTimer=void 0,W=window.onVdiClientConnected=void 0,V=!1)}}})},679:function(b,a,c){var e=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};
    return a(b,c)};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();Object.defineProperty(a,"__esModule",{value:!0});a.VideoElement=a.VideoRect=void 0;var l=c(658),h=c(550),d=c(851),p=c(946),q=c(550),n=function(){return function(a,b){this.x=Math.round(a.x)*b.devicePixelRatio;this.y=Math.round(a.y)*b.devicePixelRatio;this.width=Math.round(a.width)*b.devicePixelRatio;this.height=Math.round(a.height)*b.devicePixelRatio}}();
    a.VideoRect=n;var k;(function(a){a[a.pixels=0]="pixels";a[a.percent=1]="percent"})(k||(k={}));var v=function(){function a(b){this.value=parseInt(b);this.units=this.detectUnits(b)}a.prototype.detectUnits=function(a){return-1===a.toLowerCase().indexOf("px")?k.pixels:k.percent};return a}(),z;(function(a){a[a.fill=0]="fill";a[a.contain=1]="contain";a[a.cover=2]="cover"})(z||(z={}));var g=function(){return function(a,b){this.x=a;this.y=b}}(),B=function(){function a(b,c,d){this.fit=this.convertFit(b);this.position=
    new g(c,d)}a.prototype.convertFit=function(a){return"fill"==a?z.fill:"contain"==a?z.contain:"cover"==a?z.cover:z.fill};return a}(),t;(function(a){a[a.NotReady=0]="NotReady";a[a.Ready=1]="Ready"})(t||(t={}));b=function(a){function b(c,e){var g=a.call(this,null,h.class_id_t.VideoElement,0,l.ProxyMode.Local)||this;g.srcObject_=null;g.sinkId_="";g.videoWidth=0;g.videoHeight=0;g.isLoaded=!1;g.connectionState="disconnected";g.styleObserver=null;g.readyState_=t.NotReady;g.deferredVideoActions=[];g.pendingRelease_=
    !1;g.activeConnectionEvent_=null;g.connectionEventQueue_=[];g.window_=e;g.elementId=c;d.logger.log("VideoElement.constructor (elementid: "+c+")");return g}e(b,a);b.prototype.dispose=function(){var a=this;d.logger.log("VideoElement.dispose (elementId: "+this.elementId+" oid: "+this.object_id()+")");this.pendingRelease_=!0;this.srcObject=this.ontimeupdate=this.onloadedmetadata=null;this.waitUntilReady("VideoElement.dispose").then(function(){})["catch"](function(){a.pendingRelease_=!1;a.setState("disconnected");
    a.onconnectionstatechange=null;a.release()});this.onReady()};b.prototype.setState=function(a){this.connectionState=a;if(this.onconnectionstatechange_)this.onconnectionstatechange_()};Object.defineProperty(b.prototype,"Id",{get:function(){return this.elementId},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"sinkId",{get:function(){return this.sinkId_},set:function(a){var b=this;d.logger.log("VideoElement.sinkId: (id="+a+")");this.waitUntilConnected("VideoElement.sinkId").then(function(){return void 0!=
    a?b.remoteInvoke(!0,h.method_id_VideoElement_t.sinkId,a):new Promise(function(a){return a(void 0)})}).then(function(){d.logger.log("videoElement: setting state to ready. (oid: "+b.object_id()+")");b.sinkId_=a;b.readyState_=t.Ready;b.onReady()})["catch"](function(a){b.logRemoteInvokeError(a,".set_sinkId() failed!")})},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"srcObject",{get:function(){return this.srcObject_},set:function(a){d.logger.log(this.user_friendly_id()+".srcObject: set srcObject... this.srcObject:"+
    this.srcObject+" obj:"+a);if(this.srcObject_!==a){var b=p.getRedirector().getFeatureValue(q.FEATURE_ms_teams_1911);null!==this.srcObject_&&(null===a&&b&&this.disconnect(),b||this.disconnect(),this.isLoaded=!1);this.srcObject_=a;null!==this.srcObject_&&this.connectTo(this.srcObject_)}},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onconnectionstatechange",{get:function(){return this.onconnectionstatechange_},set:function(a){d.logger.log(this.user_friendly_id()+".set_onconnectionstatechange() called.");
    this.onconnectionstatechange_=a},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"onloadedmetadata",{set:function(a){d.logger.log(this.user_friendly_id()+".set_onloadedmetadata() called.");this.onloadedmetadata_=a},enumerable:!1,configurable:!0});b.prototype.setupOnVideoFrameChanged=function(){var a=this,b=this.registerCallbacks(!1,!1,h.method_id_VideoElement_t.onvideoframechanged);b.then(function(b){d.logger.log(a.user_friendly_id()+".onvideoframechanged",b.params);a.videoWidth=
    b.params[0]||0;a.videoHeight=b.params[1]||0;a.isLoaded||(a.isLoaded=!0,a.onloadedmetadata_&&a.onloadedmetadata_())});this.remoteInvoke(!0,h.method_id_VideoElement_t.onvideoframechanged,b.success)};b.prototype.processConnectionEvent=function(){var a=this;if(0!==this.connectionEventQueue_.length&&!this.activeConnectionEvent_){var b=this.connectionEventQueue_.pop();"connectTo"==b.operation?this.activeConnectionEvent_=this.connectToAsync(b.param):"disconnect"==b.operation&&(this.activeConnectionEvent_=
    this.disconnectAsync());this.activeConnectionEvent_.then(function(){a.activeConnectionEvent_=void 0;a.processConnectionEvent()})["catch"](function(){d.logger.log(a.user_friendly_id()+" : Failed to handle connection event! ");a.activeConnectionEvent_=void 0;a.processConnectionEvent()})}};b.prototype.connectTo=function(a){this.connectionEventQueue_.push({operation:"connectTo",param:a});this.processConnectionEvent()};b.prototype.disconnect=function(){this.connectionEventQueue_.push({operation:"disconnect",
    param:null});this.processConnectionEvent()};b.prototype.connectToAsync=function(a){var b=this;return new Promise(function(c,e){d.logger.log(b.user_friendly_id()+".connectTo: connect media stream with id = "+a.id+", clone_id = "+a.clone_state.clone_id);b.streamId_=a.id;b.waitUntilReady("VideoElement.connectTo").then(function(){return a.waitUntilConnected("MediaStream.connectTo")}).then(function(){b.setupOnVideoFrameChanged();return a.clone_state.synchronize(a)}).then(function(a){d.logger.log(b.user_friendly_id()+
    ".connectTo: remote invoking");var c=b.registerCallbacks(!0,!1,h.method_id_VideoElement_t.connectTo);return Promise.all([b.remoteInvokeEx(!1,h.method_id_VideoElement_t.connectTo,[a],c.success,c.fail),c.prom()])}).then(function(a){d.logger.log(b.user_friendly_id()+".connectTo: remote media stream is connected!");b.setState("connected");b.watch();b.updateTimer=setInterval(function(){b.ontimeupdate&&b.ontimeupdate()},250);(a=b.window_.document.getElementById(b.elementId))&&b.updateStyle(a);c()})["catch"](function(a){b.logRemoteInvokeError(a,
    ".connectTo: failed to connect!");e()})})};b.prototype.disconnectAsync=function(){var a=this;return new Promise(function(b,c){d.logger.log(a.user_friendly_id()+".disconnect: disconnecting stream : "+a.streamId_);a.unwatch();a.waitUntilReady("VideoElement.disconnect").then(function(){a.updateTimer&&clearInterval(a.updateTimer);var b=a.registerCallbacks(!1,!0,h.method_id_VideoElement_t.onvideoframechanged);a.remoteInvoke(!0,h.method_id_VideoElement_t.onvideoframechanged,b.success);return a.remoteInvoke(!1,
    h.method_id_VideoElement_t.disconnect)}).then(function(){d.logger.log(a.user_friendly_id()+".disconnect: remote media stream is disconnected!");a.setState("disconnected");1==a.pendingRelease_&&(a.pendingRelease_=!1,a.onconnectionstatechange=null,a.release());b()})["catch"](function(b){a.logRemoteInvokeError(b,".disconnect: failed to connect!");c()})})};b.prototype.setFrame=function(a){var b=this;d.logger.log(this.user_friendly_id()+".setFrame: set video frame to",a.x,a.y,a.width,a.height);this.waitUntilReady("VideoElement.setFrame").then(function(){var c=
    new n(a,b.window_);return b.remoteInvoke(!1,h.method_id_VideoElement_t.setFrame,c)}).then(function(){d.logger.log(b.user_friendly_id()+".setFrame: success!")})["catch"](function(a){b.logRemoteInvokeError(a,".setFrame: failed to connect!")})};b.prototype.addClipRect=function(a){var b=this;d.logger.log(this.user_friendly_id()+".addClipRect: ",JSON.stringify(a));this.waitUntilReady("VideoElement.addClipRect").then(function(){var c=new n(a,b.window_);return b.remoteInvoke(!1,h.method_id_VideoElement_t.addClipRect,
    c)})["catch"](function(a){b.logRemoteInvokeError(a,".addClipRect failed!")})};b.prototype.removeClipRect=function(a){var b=this;d.logger.log(this.user_friendly_id()+".removeClipRect: ",JSON.stringify(a));this.waitUntilReady("VideoElement.removeClipRect").then(function(){var c=new n(a,b.window_);return b.remoteInvoke(!1,h.method_id_VideoElement_t.removeClipRect,c)})["catch"](function(a){b.logRemoteInvokeError(a,".removeClipRect failed!")})};b.prototype.watch=function(){var a=this;if(p.getRedirector().getFeatureValue(q.FEATURE_ms_teams_video_placement)){var b=
    this.window_.document.getElementById(this.elementId);b&&(this.unwatch(),this.styleObserver=new MutationObserver(function(b){b.forEach(function(b){"style"==b.attributeName?a.updateStyle(b.target):a.elementId=b.target.id})}),this.styleObserver.observe(b,{attributes:!0,attributeOldValue:!0,attributeFilter:["style","id"]}))}};b.prototype.unwatch=function(){this.styleObserver&&(this.styleObserver.disconnect(),this.styleObserver=null)};b.prototype.updateStyle=function(a){if("connected"==this.connectionState){var b=
    this.window_.getComputedStyle(a).getPropertyValue("object-fit"),c=this.window_.getComputedStyle(a).getPropertyValue("object-position").split(" ");a=new v(c[0]);c=new v(c[1]);this.placement=new B(b,a,c)}else d.logger.log(this.user_friendly_id()+".updateStyle: video element is not connected")};Object.defineProperty(b.prototype,"placement",{get:function(){return this.placement_},set:function(a){var b=this;p.getRedirector().getFeatureValue(q.FEATURE_ms_teams_video_placement)?this.waitUntilReady("VideoElement.placement").then(function(){return b.remoteInvoke(!0,
    h.method_id_VideoElement_t.placement,a)}).then(function(){b.placement_=a})["catch"](function(a){b.logRemoteInvokeError(a,".placement setter: failed to connect!")}):d.logger.log(this.user_friendly_id()+".placement: video placement feature is not supported on a client")},enumerable:!1,configurable:!0});b.prototype.waitUntilReady=function(a){var b=this;return new Promise(function(c,e){d.logger.log("VideoElement.waitUntilReady(): readyState="+b.readyState_+". (oid: "+b.object_id()+")");b.readyState_==
    t.Ready?c():(d.logger.log('videoElement.waitUntilReady(): deferring action "'+a+'". (oid: '+b.object_id()+")"),b.deferredVideoActions.push(new l.deferred_action(c,e,a)))})};b.prototype.onReady=function(){for(;this.deferredVideoActions&&0<this.deferredVideoActions.length;)this.deferredVideoActions.shift().post(this.readyState_==t.Ready)};return b}(l.ProxyObject);a.VideoElement=b},269:function(b,a){Object.defineProperty(a,"__esModule",{value:!0});a.HardwareInfo=a.MemoryInfo=a.GPUInfo=a.GPU=a.CPUInfo=
    a.WebrpcClassLibInfo=a.WebrpcClassInfo=a.WebrpcMethodInfo=a.EndpointId=a.OSInfo=a.WebrpcFeatureInfo=a.FeatureData=a.VersionData=a.FEATURE_unsupported=a.FEATURE_ms_teams_redirection=void 0;a.FEATURE_ms_teams_redirection="ms_teams_redirection";a.FEATURE_unsupported="unsupported";var c=function(){return function(a,b,c,d){this.major=a;this.minor=b;this.revision=c;this.build=d}}();a.VersionData=c;c=function(){return function(){}}();a.FeatureData=c;c=function(){return function(a,b){this.fature=a;this.version=
    b}}();a.WebrpcFeatureInfo=c;c=function(){return function(a,b,c,d,e){this.family=a;this.version=b;this.architecture=c;this.distro=d;this.edition=e}}();a.OSInfo=c;c=function(){return function(a,b){this.machine_id=a;this.user_id=b}}();a.EndpointId=c;c=function(){return function(b,c,e,d,l){void 0===l&&(l=a.FEATURE_ms_teams_redirection);this.iid=b;this.mid=c;this.name=e;this.isprop=d;this.feature=l}}();a.WebrpcMethodInfo=c;c=function(){return function(a,b,c){this.id=a;this.name=b;this.methods=c}}();a.WebrpcClassInfo=
    c;c=function(){return function(a,b){this.name=a;this.classes=b}}();a.WebrpcClassLibInfo=c;c=function(){return function(a,b){this.cpumodel=a;this.numberofprocessors=b}}();a.CPUInfo=c;c=function(){return function(a,b){this.name=a;this.driver=b}}();a.GPU=c;c=function(){return function(a){this.gpus=a}}();a.GPUInfo=c;c=function(){return function(a){this.totalmemory=a}}();a.MemoryInfo=c;c=function(){return function(a,b,c){this.cpu_info=a;this.gpu_info=b;this.memory_info=c}}();a.HardwareInfo=c},550:function(b,
    a,c){var e=this&&this.__createBinding||(Object.create?function(a,b,c,e){void 0===e&&(e=c);Object.defineProperty(a,e,{enumerable:!0,get:function(){return b[c]}})}:function(a,b,c,e){void 0===e&&(e=c);a[e]=b[c]});b=this&&this.__exportStar||function(a,b){for(var c in a)"default"===c||b.hasOwnProperty(c)||e(b,a,c)};Object.defineProperty(a,"__esModule",{value:!0});a.WebrpcClassLibInfoUtil=void 0;var l=c(187);b(c(187),a);c=function(){function a(){}a.getInterfaceByid=function(a){for(var b=0,c=l.class_lib_info.classes;b<
    c.length;b++){var e=c[b];if(e.id==a)return e}return null};a.getMethodByid=function(a,b){var c=this.getInterfaceByid(a);if(null!=c)for(var e=0,c=c.methods;e<c.length;e++){var k=c[e];if(k.mid==b)return k}return null};a.getMethodFeatureByid=function(a,b){var c=this.getInterfaceByid(a);if(null!=c)for(var e=0,c=c.methods;e<c.length;e++){var k=c[e];if(k.mid==b)return k.feature}return null};a.composeClassInfoData=function(a){a=a.hdr;if(void 0==a)return"*** Invalid packet: Couldn't find hdr object ***";var b=
    a.proc;if(void 0==b)return"";a=b.iid;for(var b=b.methodid,c=0,e=l.class_lib_info.classes;c<e.length;c++){var k=e[c];if(k.id==a)for(var h=0,p=k.methods;h<p.length;h++){var g=p[h];if(g.mid==b)return k.name+"::"+g.name}}return""};return a}();a.WebrpcClassLibInfoUtil=c},187:function(b,a,c){Object.defineProperty(a,"__esModule",{value:!0});a.class_lib_info=a.method_id_StreamResolution_t=a.method_id_RTCSctpTransport_t=a.method_id_RTCDataChannel_t=a.method_id_E911Service_t=a.method_id_ScreenSource_t=a.method_id_VDISharingRemote_t=
    a.method_id_RTCRtpTransceiver_t=a.method_id_RTCIceCandidatePair_t=a.method_id_RTCDTMFToneChangeEvent_t=a.method_id_RTCDTMFSender_t=a.method_id_RTCIceTransport_t=a.method_id_RTCDtlsTransport_t=a.method_id_RTCRtpSender_t=a.method_id_RTCRtpReceiver_t=a.method_id_AudioElement_t=a.method_id_VideoElement_t=a.method_id_MediaStreamEvent_t=a.method_id_RTCIceCandidateEvent_t=a.method_id_RTCIceCandidate_t=a.method_id_NavigatorUserMedia_t=a.method_id_MediaStream_t=a.method_id_MediaStreamTrack_t=a.method_id_RTCSessionDescription_t=
    a.method_id_MediaDeviceInfo_t=a.method_id_MediaDevices_t=a.method_id_RTCPeerConnection_t=a.method_id_EngineControl_t=a.class_id_t=a.vdaFeatureNameMap=a.featureNameMap=a.Features=a.FEATURE_ms_teams_sender_stats_fix=a.FEATURE_ms_teams_enumerate_devices_v2=a.FEATURE_ms_teams_track_clone_with_id=a.FEATURE_ms_teams_audio_notifications_loop=a.FEATURE_ms_teams_share_system_audio=a.FEATURE_ms_teams_stream_active_status=a.FEATURE_ms_teams_hardware_info=a.FEATURE_ms_teams_secondary_audio_notifications=a.FEATURE_ms_teams_stream_resolution=
    a.FEATURE_ms_teams_client_info=a.FEATURE_ms_teams_no_vd_buffer_limit=a.FEATURE_ms_teams_data_channel=a.FEATURE_ms_teams_webrtc_1dot0=a.FEATURE_ms_teams_multi_window=a.FEATURE_ms_teams_gtc=a.FEATURE_ms_teams_e911=a.FEATURE_ms_teams_codec_capability=a.FEATURE_ms_teams_app_sharing=a.FEATURE_ms_teams_monitor_sharing=a.FEATURE_ms_teams_video_placement=a.FEATURE_ms_teams_dtmf=a.FEATURE_ms_teams_device_group_id=a.FEATURE_ms_teams_remote_audio_notifications=a.FEATURE_ms_teams_endpoint_id=a.FEATURE_ms_teams_osinfo=
    a.FEATURE_ms_teams_mstrack_constraints=a.FEATURE_ms_teams_1912=a.FEATURE_ms_teams_pstn=a.FEATURE_ms_teams_1911=a.FEATURE_ms_teams_common_media_constraints=a.FEATURE_ms_teams_speaking_indicator=a.FEATURE_ms_teams_desktop_sharing=a.FEATURE_vda_delete_viewport=a.FEATURE_vda_multi_window=a.FEATURE_vda_app_sharing=a.FEATURE_vda_service_no_buffer_limit=a.HDXMS_VERSION=a.BUILD_TYPE_SDK=void 0;b=c(269);var e=c(269);Object.defineProperty(a,"VersionData",{enumerable:!0,get:function(){return e.VersionData}});
    Object.defineProperty(a,"FeatureData",{enumerable:!0,get:function(){return e.FeatureData}});Object.defineProperty(a,"OSInfo",{enumerable:!0,get:function(){return e.OSInfo}});Object.defineProperty(a,"EndpointId",{enumerable:!0,get:function(){return e.EndpointId}});Object.defineProperty(a,"HardwareInfo",{enumerable:!0,get:function(){return e.HardwareInfo}});a.BUILD_TYPE_SDK=!0;a.HDXMS_VERSION="3.1.0";a.FEATURE_vda_service_no_buffer_limit="wsservice_no_buffer_limit";a.FEATURE_vda_app_sharing="webrtc_app_sharing";
    a.FEATURE_vda_multi_window="webrtc_multi_window";a.FEATURE_vda_delete_viewport="overlay_delete_viewport";a.FEATURE_ms_teams_desktop_sharing="ms_teams_desktop_sharing";a.FEATURE_ms_teams_speaking_indicator="ms_teams_speaking_indicator";a.FEATURE_ms_teams_common_media_constraints="ms_teams_common_media_constraints";a.FEATURE_ms_teams_1911="ms_teams_1911";a.FEATURE_ms_teams_pstn="ms_teams_pstn";a.FEATURE_ms_teams_1912="ms_teams_1912";a.FEATURE_ms_teams_mstrack_constraints="ms_teams_mstrack_constraints";
    a.FEATURE_ms_teams_osinfo="ms_teams_osinfo";a.FEATURE_ms_teams_endpoint_id="ms_teams_endpoint_id";a.FEATURE_ms_teams_remote_audio_notifications="ms_teams_remote_audio_notifications";a.FEATURE_ms_teams_device_group_id="ms_teams_device_group_id";a.FEATURE_ms_teams_dtmf="ms_teams_dtmf";a.FEATURE_ms_teams_video_placement="ms_teams_video_placement";a.FEATURE_ms_teams_monitor_sharing="ms_teams_multi_monitor_sharing";a.FEATURE_ms_teams_app_sharing="ms_teams_app_sharing";a.FEATURE_ms_teams_codec_capability=
    "ms_teams_codec_capability";a.FEATURE_ms_teams_e911="ms_teams_e911";a.FEATURE_ms_teams_gtc="ms_teams_gtc";a.FEATURE_ms_teams_multi_window="ms_teams_multi_windows";a.FEATURE_ms_teams_webrtc_1dot0="ms_teams_webrtc_1.0";a.FEATURE_ms_teams_data_channel="ms_teams_data_channel";a.FEATURE_ms_teams_no_vd_buffer_limit="ms_teams_no_vd_buffer_limit";a.FEATURE_ms_teams_client_info="ms_teams_client_info";a.FEATURE_ms_teams_stream_resolution="ms_teams_stream_resolution";a.FEATURE_ms_teams_secondary_audio_notifications=
    "ms_teams_secondary_audio_notifications";a.FEATURE_ms_teams_hardware_info="ms_teams_hardware_info";a.FEATURE_ms_teams_stream_active_status="ms_teams_stream_active_status";a.FEATURE_ms_teams_share_system_audio="ms_teams_share_system_audio";a.FEATURE_ms_teams_audio_notifications_loop="ms_teams_audio_notifications_loop";a.FEATURE_ms_teams_track_clone_with_id="ms_teams_track_clone_with_id";a.FEATURE_ms_teams_enumerate_devices_v2="ms_teams_enumerate_devices_v2";a.FEATURE_ms_teams_sender_stats_fix="ms_teams_sender_stats_fix";
    new b.WebrpcFeatureInfo(b.FEATURE_ms_teams_redirection,new b.VersionData(1,1,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_desktop_sharing,new b.VersionData(1,2,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_speaking_indicator,new b.VersionData(1,2,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_common_media_constraints,new b.VersionData(1,4,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_1911,new b.VersionData(1,4,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_1912,new b.VersionData(1,5,
    0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_mstrack_constraints,new b.VersionData(1,6,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_pstn,new b.VersionData(1,6,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_osinfo,new b.VersionData(1,7,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_endpoint_id,new b.VersionData(1,7,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_remote_audio_notifications,new b.VersionData(1,7,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_device_group_id,new b.VersionData(1,
    7,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_codec_capability,new b.VersionData(1,7,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_dtmf,new b.VersionData(1,7,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_video_placement,new b.VersionData(1,7,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_monitor_sharing,new b.VersionData(1,7,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_app_sharing,new b.VersionData(1,8,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_webrtc_1dot0,new b.VersionData(1,
    8,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_data_channel,new b.VersionData(1,8,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_e911,new b.VersionData(1,13,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_multi_window,new b.VersionData(1,14,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_client_info,new b.VersionData(1,19,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_stream_resolution,new b.VersionData(1,25,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_secondary_audio_notifications,
    new b.VersionData(1,21,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_hardware_info,new b.VersionData(1,35,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_stream_active_status,new b.VersionData(1,32,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_audio_notifications_loop,new b.VersionData(1,33,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_track_clone_with_id,new b.VersionData(1,33,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_enumerate_devices_v2,new b.VersionData(1,35,0,0));new b.WebrpcFeatureInfo(a.FEATURE_ms_teams_sender_stats_fix,
    new b.VersionData(1,36,0,0));c=function(){function a(){}a.FEATURE_public_screenshare="screenshare";a.FEATURE_public_redirection="redirection";a.FEATURE_public_speaking_indicator="speaking_indicator";a.FEATURE_public_pstn="pstn";a.FEATURE_public_osinfo="osinfo";a.FEATURE_public_endpoint_id="endpointid";a.FEATURE_public_remote_audio_notifications="remoteaudionotifications";a.FEATURE_public_device_group_id="compositedevices";a.FEATURE_public_dtmf="dtmf";a.FEATURE_public_monitor_sharing="multimonitorscreenshare";
    a.FEATURE_public_app_sharing="appshare";a.FEATURE_public_codec_capability="codec_capability";a.FEATURE_public_e911="e911";a.FEATURE_public_webrtc1dot0="webrtc1.0";a.FEATURE_public_data_channel="datachannel";a.FEATURE_public_vdnobuflimit="vdnobuflimit";a.FEATURE_public_multi_window="multiwindow";a.FEATURE_public_secondary_audio_notifications="secondaryringer";a.FEATURE_public_stream_resolution="streamresolution";a.FEATURE_public_track_clone_with_id="track_clone_with_id";a.FEATURE_public_sender_stats_fix=
    "sender_stats_fix";a.FEATURE_public_audio_notification_loop="loop";return a}();a.Features=c;a.featureNameMap={};a.featureNameMap[c.FEATURE_public_screenshare]=[a.FEATURE_ms_teams_desktop_sharing];a.featureNameMap[c.FEATURE_public_redirection]=[b.FEATURE_ms_teams_redirection];a.featureNameMap[c.FEATURE_public_speaking_indicator]=[a.FEATURE_ms_teams_speaking_indicator];a.featureNameMap[c.FEATURE_public_pstn]=[a.FEATURE_ms_teams_pstn];a.featureNameMap[c.FEATURE_public_osinfo]=[a.FEATURE_ms_teams_osinfo];
    a.featureNameMap[c.FEATURE_public_endpoint_id]=[a.FEATURE_ms_teams_endpoint_id];a.featureNameMap[c.FEATURE_public_remote_audio_notifications]=[a.FEATURE_ms_teams_remote_audio_notifications,a.FEATURE_ms_teams_secondary_audio_notifications];a.featureNameMap[c.FEATURE_public_device_group_id]=[a.FEATURE_ms_teams_device_group_id];a.featureNameMap[c.FEATURE_public_dtmf]=[a.FEATURE_ms_teams_dtmf];a.featureNameMap[c.FEATURE_public_monitor_sharing]=[a.FEATURE_ms_teams_monitor_sharing];a.featureNameMap[c.FEATURE_public_app_sharing]=
    [a.FEATURE_ms_teams_app_sharing];a.featureNameMap[c.FEATURE_public_codec_capability]=[a.FEATURE_ms_teams_codec_capability];a.featureNameMap[c.FEATURE_public_e911]=[a.FEATURE_ms_teams_e911];a.featureNameMap[c.FEATURE_public_webrtc1dot0]=[a.FEATURE_ms_teams_webrtc_1dot0];a.featureNameMap[c.FEATURE_public_multi_window]=[a.FEATURE_ms_teams_multi_window];a.featureNameMap[c.FEATURE_public_data_channel]=[a.FEATURE_ms_teams_data_channel];a.featureNameMap[c.FEATURE_public_vdnobuflimit]=[a.FEATURE_ms_teams_no_vd_buffer_limit];
    a.featureNameMap[c.FEATURE_public_secondary_audio_notifications]=[a.FEATURE_ms_teams_remote_audio_notifications,a.FEATURE_ms_teams_secondary_audio_notifications];a.featureNameMap[c.FEATURE_public_stream_resolution]=[a.FEATURE_ms_teams_stream_resolution];a.featureNameMap[c.FEATURE_public_track_clone_with_id]=[a.FEATURE_ms_teams_track_clone_with_id];a.featureNameMap[c.FEATURE_public_sender_stats_fix]=[a.FEATURE_ms_teams_sender_stats_fix];a.featureNameMap[c.FEATURE_public_audio_notification_loop]=[a.FEATURE_ms_teams_audio_notifications_loop];
    a.vdaFeatureNameMap={};a.vdaFeatureNameMap[c.FEATURE_public_multi_window]=[a.FEATURE_vda_multi_window];a.vdaFeatureNameMap[c.FEATURE_public_app_sharing]=[a.FEATURE_vda_app_sharing];(function(a){a[a.EngineControl=0]="EngineControl";a[a.RTCPeerConnection=1]="RTCPeerConnection";a[a.RTCSessionDescription=2]="RTCSessionDescription";a[a.RTCIceCandidate=3]="RTCIceCandidate";a[a.RTCIceCandidateEvent=4]="RTCIceCandidateEvent";a[a.MediaDevices=5]="MediaDevices";a[a.MediaDeviceInfo=6]="MediaDeviceInfo";a[a.MediaStreamTrack=
    7]="MediaStreamTrack";a[a.MediaStreamEvent=8]="MediaStreamEvent";a[a.MediaStream=9]="MediaStream";a[a.NavigatorUserMedia=10]="NavigatorUserMedia";a[a.VideoElement=11]="VideoElement";a[a.AudioElement=12]="AudioElement";a[a.RTCRtpReceiver=13]="RTCRtpReceiver";a[a.RTCRtpSender=14]="RTCRtpSender";a[a.RTCDtlsTransport=15]="RTCDtlsTransport";a[a.RTCIceTransport=16]="RTCIceTransport";a[a.RTCDTMFSender=17]="RTCDTMFSender";a[a.RTCDTMFToneChangeEvent=18]="RTCDTMFToneChangeEvent";a[a.RTCIceCandidatePair=19]=
    "RTCIceCandidatePair";a[a.RTCRtpTransceiver=20]="RTCRtpTransceiver";a[a.ScreenSharingRemote=21]="ScreenSharingRemote";a[a.ScreenSource=22]="ScreenSource";a[a.E911Service=23]="E911Service";a[a.reserved2=24]="reserved2";a[a.RTCDataChannel=25]="RTCDataChannel";a[a.RTCSctpTransport=26]="RTCSctpTransport";a[a.StreamResolution=27]="StreamResolution";a[a.VideoEffect=28]="VideoEffect";a[a.reserved6=29]="reserved6";a[a.reserved7=30]="reserved7";a[a.reserved8=31]="reserved8"})(c=a.class_id_t||(a.class_id_t=
    {}));var l;(function(a){a[a.ctor=0]="ctor";a[a.version=1]="version";a[a.feature_flags=2]="feature_flags";a[a.version_info=3]="version_info";a[a.osinfo=4]="osinfo";a[a.endpoint_id=5]="endpoint_id";a[a.set_client_info=6]="set_client_info";a[a.hardware_info=7]="hardware_info"})(l=a.method_id_EngineControl_t||(a.method_id_EngineControl_t={}));var h;(function(a){a[a.ctor=0]="ctor";a[a.localDescription=1]="localDescription";a[a.remoteDescription=2]="remoteDescription";a[a.readyState=3]="readyState";a[a.iceState=
    4]="iceState";a[a.localStreams=5]="localStreams";a[a.remoteStreams=6]="remoteStreams";a[a.createOffer=7]="createOffer";a[a.createAnswer=8]="createAnswer";a[a.setLocalDescription=9]="setLocalDescription";a[a.setRemoteDescription=10]="setRemoteDescription";a[a.updateIce=11]="updateIce";a[a.addIceCandidate=12]="addIceCandidate";a[a.addStream=13]="addStream";a[a.removeStream=14]="removeStream";a[a.close=15]="close";a[a.iceConnectionState=16]="iceConnectionState";a[a.iceGatheringState=17]="iceGatheringState";
    a[a.signalingState=18]="signalingState";a[a.onaddstream=19]="onaddstream";a[a.onicecandidate=20]="onicecandidate";a[a.oniceconnectionstatechange=21]="oniceconnectionstatechange";a[a.onicegatheringstatechange=22]="onicegatheringstatechange";a[a.onsignalingstatechange=23]="onsignalingstatechange";a[a.onnegotiationneeded=24]="onnegotiationneeded";a[a.onremovestream=25]="onremovestream";a[a.getStats=26]="getStats";a[a.getReceivers=27]="getReceivers";a[a.getSenders=28]="getSenders";a[a.addTrack=29]="addTrack";
    a[a.removeTrack=30]="removeTrack";a[a.ontrack=31]="ontrack";a[a.setLocalDescription_v2=32]="setLocalDescription_v2";a[a.setRemoteDescription_v2=33]="setRemoteDescription_v2";a[a.addTransceiverWithTrack=34]="addTransceiverWithTrack";a[a.addTransceiverWithKind=35]="addTransceiverWithKind";a[a.getTransceivers=36]="getTransceivers";a[a.onconnectionstatechange=37]="onconnectionstatechange";a[a.sctp=38]="sctp";a[a.ondatachannel=39]="ondatachannel";a[a.createDataChannel=40]="createDataChannel";a[a.getStats_v2=
    41]="getStats_v2"})(h=a.method_id_RTCPeerConnection_t||(a.method_id_RTCPeerConnection_t={}));var d;(function(a){a[a.ctor=0]="ctor";a[a.enumerateDevices=1]="enumerateDevices";a[a.getDisplayMedia=2]="getDisplayMedia";a[a.ondevicechange=3]="ondevicechange";a[a.enumerateDevicesV2=4]="enumerateDevicesV2"})(d=a.method_id_MediaDevices_t||(a.method_id_MediaDevices_t={}));var p;(function(a){a[a.ctor=0]="ctor";a[a.deviceId=1]="deviceId";a[a.kind=2]="kind";a[a.label=3]="label";a[a.groupId=4]="groupId"})(p=a.method_id_MediaDeviceInfo_t||
    (a.method_id_MediaDeviceInfo_t={}));var q;(function(a){a[a.ctor=0]="ctor";a[a.type=1]="type";a[a.sdp=2]="sdp"})(q=a.method_id_RTCSessionDescription_t||(a.method_id_RTCSessionDescription_t={}));var n;(function(a){a[a.ctor=0]="ctor";a[a.kind=1]="kind";a[a.id=2]="id";a[a.label=3]="label";a[a.enabled=4]="enabled";a[a.muted=5]="muted";a[a.readyState=6]="readyState";a[a.onended=7]="onended";a[a.onmute=8]="onmute";a[a.onunmute=9]="onunmute";a[a.clone=10]="clone";a[a.stop=11]="stop";a[a.getCapabilities=12]=
    "getCapabilities";a[a.getSettings=13]="getSettings";a[a.applyConstraints=14]="applyConstraints";a[a.getConstraints=15]="getConstraints"})(n=a.method_id_MediaStreamTrack_t||(a.method_id_MediaStreamTrack_t={}));var k;(function(a){a[a.ctor=0]="ctor";a[a.id=1]="id";a[a.getAudioTracks=2]="getAudioTracks";a[a.getVideoTracks=3]="getVideoTracks";a[a.getTracks=4]="getTracks";a[a.getTrackById=5]="getTrackById";a[a.addTrack=6]="addTrack";a[a.removeTrack=7]="removeTrack";a[a.clone=8]="clone";a[a.active=9]="active"})(k=
    a.method_id_MediaStream_t||(a.method_id_MediaStream_t={}));var v;(function(a){a[a.ctor=0]="ctor";a[a.getUserMedia=1]="getUserMedia";a[a.setCodecCapabilities=2]="setCodecCapabilities";a[a.getCapabilities=3]="getCapabilities"})(v=a.method_id_NavigatorUserMedia_t||(a.method_id_NavigatorUserMedia_t={}));var z;(function(a){a[a.ctor=0]="ctor";a[a.candidate=1]="candidate";a[a.sdpMid=2]="sdpMid";a[a.sdpMLineIndex=3]="sdpMLineIndex"})(z=a.method_id_RTCIceCandidate_t||(a.method_id_RTCIceCandidate_t={}));var g;
    (function(a){a[a.ctor=0]="ctor";a[a.candidate=1]="candidate"})(g=a.method_id_RTCIceCandidateEvent_t||(a.method_id_RTCIceCandidateEvent_t={}));var B;(function(a){a[a.ctor=0]="ctor";a[a.stream=1]="stream"})(B=a.method_id_MediaStreamEvent_t||(a.method_id_MediaStreamEvent_t={}));var t;(function(a){a[a.ctor=0]="ctor";a[a.sinkId=1]="sinkId";a[a.connectTo=2]="connectTo";a[a.disconnect=3]="disconnect";a[a.setFrame=4]="setFrame";a[a.addClipRect=5]="addClipRect";a[a.removeClipRect=6]="removeClipRect";a[a.onerror=
    7]="onerror";a[a.onvideoframechanged=8]="onvideoframechanged";a[a.placement=9]="placement"})(t=a.method_id_VideoElement_t||(a.method_id_VideoElement_t={}));var m;(function(a){a[a.ctor=0]="ctor";a[a.sinkId=1]="sinkId";a[a.srcObject=2]="srcObject";a[a.src=3]="src";a[a.play=4]="play";a[a.pause=5]="pause";a[a.loop=6]="loop"})(m=a.method_id_AudioElement_t||(a.method_id_AudioElement_t={}));var D;(function(a){a[a.ctor=0]="ctor";a[a.track=1]="track";a[a.getContributingSources=2]="getContributingSources";
    a[a.getSynchronizationSources=3]="getSynchronizationSources";a[a.transport=4]="transport";a[a.rtcpTransport=5]="rtcpTransport";a[a.getCapabilities=6]="getCapabilities";a[a.getParameters=7]="getParameters";a[a.getStats=8]="getStats";a[a.getCapabilities_v2=9]="getCapabilities_v2"})(D=a.method_id_RTCRtpReceiver_t||(a.method_id_RTCRtpReceiver_t={}));var y;(function(a){a[a.ctor=0]="ctor";a[a.track=1]="track";a[a.transport=2]="transport";a[a.rtcpTransport=3]="rtcpTransport";a[a.dtmf=4]="dtmf";a[a.getCapabilities=
    5]="getCapabilities";a[a.getParameters=6]="getParameters";a[a.setParameters=7]="setParameters";a[a.replaceTrack=8]="replaceTrack";a[a.getStats=9]="getStats";a[a.setStreams=10]="setStreams";a[a.getCapabilities_v2=11]="getCapabilities_v2"})(y=a.method_id_RTCRtpSender_t||(a.method_id_RTCRtpSender_t={}));var x;(function(a){a[a.ctor=0]="ctor";a[a.transport=1]="transport";a[a.state=2]="state";a[a.getRemoteCertificates=3]="getRemoteCertificates";a[a.onstatechange=4]="onstatechange";a[a.onerror=5]="onerror"})(x=
    a.method_id_RTCDtlsTransport_t||(a.method_id_RTCDtlsTransport_t={}));var r;(function(a){a[a.ctor=0]="ctor";a[a.role=1]="role";a[a.component=2]="component";a[a.state=3]="state";a[a.gatheringState=4]="gatheringState";a[a.localcandidates=5]="localcandidates";a[a.remotecandidates=6]="remotecandidates";a[a.onstatechange=7]="onstatechange";a[a.ongatheringstatechange=8]="ongatheringstatechange";a[a.onselectedcandidatepairchange=9]="onselectedcandidatepairchange"})(r=a.method_id_RTCIceTransport_t||(a.method_id_RTCIceTransport_t=
    {}));var A;(function(a){a[a.ctor=0]="ctor";a[a.insertDTMF=1]="insertDTMF";a[a.ontonechange=2]="ontonechange";a[a.canInsertDTMF=3]="canInsertDTMF";a[a.toneBuffer=4]="toneBuffer"})(A=a.method_id_RTCDTMFSender_t||(a.method_id_RTCDTMFSender_t={}));var M;(function(a){a[a.ctor=0]="ctor";a[a.tone=1]="tone";a[a.tone_buffer=2]="tone_buffer"})(M=a.method_id_RTCDTMFToneChangeEvent_t||(a.method_id_RTCDTMFToneChangeEvent_t={}));var F;(function(a){a[a.ctor=0]="ctor";a[a.local=1]="local";a[a.remote=2]="remote"})(F=
    a.method_id_RTCIceCandidatePair_t||(a.method_id_RTCIceCandidatePair_t={}));var J;(function(a){a[a.ctor=0]="ctor";a[a.mid=1]="mid";a[a.sender=2]="sender";a[a.receiver=3]="receiver";a[a.direction=4]="direction";a[a.currentDirection=5]="currentDirection";a[a.stop=6]="stop";a[a.setCodecPreferences=7]="setCodecPreferences"})(J=a.method_id_RTCRtpTransceiver_t||(a.method_id_RTCRtpTransceiver_t={}));var G;(function(a){a[a.ctor=0]="ctor";a[a.getScreensAsync=1]="getScreensAsync";a[a.onscreentopologychanged=
    2]="onscreentopologychanged"})(G=a.method_id_VDISharingRemote_t||(a.method_id_VDISharingRemote_t={}));var L;(function(a){a[a.ctor=0]="ctor";a[a.srcid=1]="srcid";a[a.deviceid=2]="deviceid";a[a.type=3]="type";a[a.name=4]="name";a[a.imagedata=5]="imagedata";a[a.hwnd=6]="hwnd";a[a.origin=7]="origin";a[a.caption=8]="caption";a[a.pid=9]="pid";a[a.bounds=10]="bounds"})(L=a.method_id_ScreenSource_t||(a.method_id_ScreenSource_t={}));var P;(function(a){a[a.ctor=0]="ctor";a[a.getE911Info=1]="getE911Info";a[a.onupdate=
    2]="onupdate"})(P=a.method_id_E911Service_t||(a.method_id_E911Service_t={}));var C;(function(a){a[a.ctor=0]="ctor";a[a.label=1]="label";a[a.ordered=2]="ordered";a[a.maxPacketLifeTime=3]="maxPacketLifeTime";a[a.maxRetransmits=4]="maxRetransmits";a[a.protocol=5]="protocol";a[a.negotiated=6]="negotiated";a[a.id=7]="id";a[a.readyState=8]="readyState";a[a.bufferedAmount=9]="bufferedAmount";a[a.bufferedAmountLowThreshold=10]="bufferedAmountLowThreshold";a[a.onopen=11]="onopen";a[a.onbufferedamountlow=12]=
    "onbufferedamountlow";a[a.onerror=13]="onerror";a[a.onclosing=14]="onclosing";a[a.onclose=15]="onclose";a[a.onmessage=16]="onmessage";a[a.close=17]="close";a[a.send_text=18]="send_text";a[a.send_binary=19]="send_binary"})(C=a.method_id_RTCDataChannel_t||(a.method_id_RTCDataChannel_t={}));var R;(function(a){a[a.ctor=0]="ctor";a[a.transport=1]="transport";a[a.state=2]="state";a[a.maxMessageSize=3]="maxMessageSize";a[a.maxChannels=4]="maxChannels";a[a.onstatechange=5]="onstatechange"})(R=a.method_id_RTCSctpTransport_t||
    (a.method_id_RTCSctpTransport_t={}));var K;(function(a){a[a.ctor=0]="ctor";a[a.getCallConstraints=1]="getCallConstraints";a[a.onupdate=2]="onupdate"})(K=a.method_id_StreamResolution_t||(a.method_id_StreamResolution_t={}));a.class_lib_info=new b.WebrpcClassLibInfo("webrpc_class_library",[new b.WebrpcClassInfo(c.EngineControl,"EngineControl",[new b.WebrpcMethodInfo(c.EngineControl,l.ctor,"ctor",!1),new b.WebrpcMethodInfo(c.EngineControl,l.version,"version",!0),new b.WebrpcMethodInfo(c.EngineControl,
    l.feature_flags,"feature_flags",!0),new b.WebrpcMethodInfo(c.EngineControl,l.version_info,"version_info",!0,a.FEATURE_ms_teams_desktop_sharing),new b.WebrpcMethodInfo(c.EngineControl,l.osinfo,"osinfo",!0,a.FEATURE_ms_teams_osinfo),new b.WebrpcMethodInfo(c.EngineControl,l.endpoint_id,"endpoint_id",!0,a.FEATURE_ms_teams_endpoint_id),new b.WebrpcMethodInfo(c.EngineControl,l.set_client_info,"set_client_info",!1,a.FEATURE_ms_teams_client_info),new b.WebrpcMethodInfo(c.EngineControl,l.hardware_info,"hardware_info",
    !0,a.FEATURE_ms_teams_hardware_info)]),new b.WebrpcClassInfo(c.RTCPeerConnection,"RTCPeerConnection",[new b.WebrpcMethodInfo(c.RTCPeerConnection,h.ctor,"ctor",!1),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.localDescription,"localDescription",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.remoteDescription,"remoteDescription",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.readyState,"readyState",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.iceState,"iceState",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,
    h.localStreams,"localStreams",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.remoteStreams,"remoteStreams",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.createOffer,"createOffer",!1),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.createAnswer,"createAnswer",!1),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.setLocalDescription,"setLocalDescription",!1),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.setRemoteDescription,"setRemoteDescription",!1),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.updateIce,
    "updateIce",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.addIceCandidate,"addIceCandidate",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.addStream,"addStream",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.removeStream,"removeStream",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.close,"close",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.iceConnectionState,"iceConnectionState",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.iceGatheringState,"iceGatheringState",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,
    h.signalingState,"signalingState",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.onaddstream,"onaddstream",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.onicecandidate,"onicecandidate",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.oniceconnectionstatechange,"oniceconnectionstatechange",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.onicegatheringstatechange,"onicegatheringstatechange",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.onsignalingstatechange,"onsignalingstatechange",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,
    h.onnegotiationneeded,"onnegotiationneeded",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.onremovestream,"onremovestream",!0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.getStats,"getStats",!1),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.getReceivers,"getReceivers",!1,a.FEATURE_ms_teams_speaking_indicator),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.getSenders,"getSenders",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.addTrack,"addTrack",!1,a.FEATURE_ms_teams_pstn),
    new b.WebrpcMethodInfo(c.RTCPeerConnection,h.removeTrack,"removeTrack",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.ontrack,"ontrack",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.setLocalDescription_v2,"setLocalDescription_v2",!1,a.FEATURE_ms_teams_webrtc_1dot0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.setRemoteDescription_v2,"setRemoteDescription_v2",!1,a.FEATURE_ms_teams_webrtc_1dot0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.addTransceiverWithTrack,
    "addTransceiverWithTrack",!1,a.FEATURE_ms_teams_webrtc_1dot0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.addTransceiverWithKind,"addTransceiverWithKind",!1,a.FEATURE_ms_teams_webrtc_1dot0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.getTransceivers,"getTransceivers",!1,a.FEATURE_ms_teams_webrtc_1dot0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.onconnectionstatechange,"onconnectionstatechange",!0,a.FEATURE_ms_teams_webrtc_1dot0),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.sctp,"sctp",!0,a.FEATURE_ms_teams_data_channel),
    new b.WebrpcMethodInfo(c.RTCPeerConnection,h.ondatachannel,"ondatachannel",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.createDataChannel,"createDataChannel",!1,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCPeerConnection,h.getStats_v2,"getStats_v2",!1,a.FEATURE_ms_teams_webrtc_1dot0)]),new b.WebrpcClassInfo(c.RTCSessionDescription,"RTCSessionDescription",[new b.WebrpcMethodInfo(c.RTCSessionDescription,q.ctor,"ctor",!1),new b.WebrpcMethodInfo(c.RTCSessionDescription,
    q.type,"type",!0),new b.WebrpcMethodInfo(c.RTCSessionDescription,q.sdp,"sdp",!0)]),new b.WebrpcClassInfo(c.RTCIceCandidate,"RTCIceCandidate",[new b.WebrpcMethodInfo(c.RTCIceCandidate,z.ctor,"ctor",!1),new b.WebrpcMethodInfo(c.RTCIceCandidate,z.candidate,"candidate",!0),new b.WebrpcMethodInfo(c.RTCIceCandidate,z.sdpMid,"sdpMid",!0),new b.WebrpcMethodInfo(c.RTCIceCandidate,z.sdpMLineIndex,"sdpMLineIndex",!0)]),new b.WebrpcClassInfo(c.RTCIceCandidateEvent,"RTCIceCandidateEvent",[new b.WebrpcMethodInfo(c.RTCIceCandidateEvent,
    g.ctor,"ctor",!1),new b.WebrpcMethodInfo(c.RTCIceCandidateEvent,g.candidate,"candidate",!0)]),new b.WebrpcClassInfo(c.MediaDevices,"MediaDevices",[new b.WebrpcMethodInfo(c.MediaDevices,d.ctor,"ctor",!1),new b.WebrpcMethodInfo(c.MediaDevices,d.enumerateDevices,"enumerateDevices",!1),new b.WebrpcMethodInfo(c.MediaDevices,d.getDisplayMedia,"getDisplayMedia",!1,a.FEATURE_ms_teams_desktop_sharing),new b.WebrpcMethodInfo(c.MediaDevices,d.ondevicechange,"ondevicechange",!0,a.FEATURE_ms_teams_speaking_indicator),
    new b.WebrpcMethodInfo(c.MediaDevices,d.enumerateDevicesV2,"enuerateDevicesV2",!1,a.FEATURE_ms_teams_enumerate_devices_v2)]),new b.WebrpcClassInfo(c.MediaDeviceInfo,"MediaDeviceInfo",[new b.WebrpcMethodInfo(c.MediaDeviceInfo,p.ctor,"ctor",!1),new b.WebrpcMethodInfo(c.MediaDeviceInfo,p.deviceId,"deviceId",!0),new b.WebrpcMethodInfo(c.MediaDeviceInfo,p.kind,"kind",!0),new b.WebrpcMethodInfo(c.MediaDeviceInfo,p.label,"label",!0),new b.WebrpcMethodInfo(c.MediaDeviceInfo,p.groupId,"groupId",!0)]),new b.WebrpcClassInfo(c.MediaStreamTrack,
    "MediaStreamTrack",[new b.WebrpcMethodInfo(c.MediaStreamTrack,n.ctor,"ctor",!1),new b.WebrpcMethodInfo(c.MediaStreamTrack,n.clone,"clone",!1),new b.WebrpcMethodInfo(c.MediaStreamTrack,n.stop,"stop",!1),new b.WebrpcMethodInfo(c.MediaStreamTrack,n.getCapabilities,"getCapabilities",!1),new b.WebrpcMethodInfo(c.MediaStreamTrack,n.getSettings,"getSettings",!1),new b.WebrpcMethodInfo(c.MediaStreamTrack,n.applyConstraints,"applyConstraints",!1,a.FEATURE_ms_teams_desktop_sharing),new b.WebrpcMethodInfo(c.MediaStreamTrack,
    n.kind,"kind",!0),new b.WebrpcMethodInfo(c.MediaStreamTrack,n.id,"id",!0),new b.WebrpcMethodInfo(c.MediaStreamTrack,n.label,"label",!0),new b.WebrpcMethodInfo(c.MediaStreamTrack,n.enabled,"enabled",!0),new b.WebrpcMethodInfo(c.MediaStreamTrack,n.muted,"muted",!0),new b.WebrpcMethodInfo(c.MediaStreamTrack,n.readyState,"readyState",!0),new b.WebrpcMethodInfo(c.MediaStreamTrack,n.onended,"onended",!0),new b.WebrpcMethodInfo(c.MediaStreamTrack,n.onmute,"onmute",!0),new b.WebrpcMethodInfo(c.MediaStreamTrack,
    n.onunmute,"onunmute",!0),new b.WebrpcMethodInfo(c.MediaStreamTrack,n.getConstraints,"getConstraints",!1,a.FEATURE_ms_teams_mstrack_constraints)]),new b.WebrpcClassInfo(c.MediaStream,"MediaStream",[new b.WebrpcMethodInfo(c.MediaStream,k.ctor,"ctor",!1),new b.WebrpcMethodInfo(c.MediaStream,k.id,"id",!0),new b.WebrpcMethodInfo(c.MediaStream,k.getAudioTracks,"getAudioTracks",!1),new b.WebrpcMethodInfo(c.MediaStream,k.getVideoTracks,"getVideoTracks",!1),new b.WebrpcMethodInfo(c.MediaStream,k.getTracks,
    "getTracks",!1),new b.WebrpcMethodInfo(c.MediaStream,k.getTrackById,"getTrackById",!1),new b.WebrpcMethodInfo(c.MediaStream,k.addTrack,"addTrack",!1),new b.WebrpcMethodInfo(c.MediaStream,k.removeTrack,"removeTrack",!1),new b.WebrpcMethodInfo(c.MediaStream,k.clone,"clone",!0),new b.WebrpcMethodInfo(c.MediaStream,k.active,"active",!0)]),new b.WebrpcClassInfo(c.NavigatorUserMedia,"NavigatorUserMedia",[new b.WebrpcMethodInfo(c.NavigatorUserMedia,v.ctor,"ctor",!1),new b.WebrpcMethodInfo(c.NavigatorUserMedia,
    v.getUserMedia,"getUserMedia",!1),new b.WebrpcMethodInfo(c.NavigatorUserMedia,v.setCodecCapabilities,"setCodecCapabilities",!1,a.FEATURE_ms_teams_codec_capability),new b.WebrpcMethodInfo(c.NavigatorUserMedia,v.getCapabilities,"getRtpCapabilities",!1,a.FEATURE_ms_teams_webrtc_1dot0)]),new b.WebrpcClassInfo(c.MediaStreamEvent,"MediaStreamEvent",[new b.WebrpcMethodInfo(c.MediaStreamEvent,B.ctor,"ctor",!1),new b.WebrpcMethodInfo(c.MediaStreamEvent,B.stream,"stream",!0)]),new b.WebrpcClassInfo(c.VideoElement,
    "VideoElement",[new b.WebrpcMethodInfo(c.VideoElement,t.ctor,"ctor",!1),new b.WebrpcMethodInfo(c.VideoElement,t.sinkId,"sinkId",!0),new b.WebrpcMethodInfo(c.VideoElement,t.connectTo,"connectTo",!1),new b.WebrpcMethodInfo(c.VideoElement,t.disconnect,"disconnect",!1),new b.WebrpcMethodInfo(c.VideoElement,t.setFrame,"setFrame",!1),new b.WebrpcMethodInfo(c.VideoElement,t.addClipRect,"addClipRect",!1),new b.WebrpcMethodInfo(c.VideoElement,t.removeClipRect,"removeClipRect",!1),new b.WebrpcMethodInfo(c.VideoElement,
    t.onerror,"onerror",!0),new b.WebrpcMethodInfo(c.VideoElement,t.onvideoframechanged,"onvideoframechanged",!0),new b.WebrpcMethodInfo(c.VideoElement,t.placement,"placement",!0,a.FEATURE_ms_teams_video_placement)]),new b.WebrpcClassInfo(c.AudioElement,"AudioElement",[new b.WebrpcMethodInfo(c.AudioElement,m.ctor,"ctor",!1),new b.WebrpcMethodInfo(c.AudioElement,m.sinkId,"sinkId",!0),new b.WebrpcMethodInfo(c.AudioElement,m.srcObject,"srcObject",!0),new b.WebrpcMethodInfo(c.AudioElement,m.src,"src",!0),
    new b.WebrpcMethodInfo(c.AudioElement,m.play,"play",!1),new b.WebrpcMethodInfo(c.AudioElement,m.pause,"pause",!1),new b.WebrpcMethodInfo(c.AudioElement,m.loop,"loop",!0,a.FEATURE_ms_teams_audio_notifications_loop)]),new b.WebrpcClassInfo(c.RTCRtpReceiver,"RTCRtpReceiver",[new b.WebrpcMethodInfo(c.RTCRtpReceiver,D.ctor,"ctor",!1,a.FEATURE_ms_teams_speaking_indicator),new b.WebrpcMethodInfo(c.RTCRtpReceiver,D.track,"track",!0,a.FEATURE_ms_teams_speaking_indicator),new b.WebrpcMethodInfo(c.RTCRtpReceiver,
    D.getContributingSources,"getContributingSources",!1,a.FEATURE_ms_teams_speaking_indicator),new b.WebrpcMethodInfo(c.RTCRtpReceiver,D.getSynchronizationSources,"getSynchronizationSources",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCRtpReceiver,D.transport,"transport",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCRtpReceiver,D.rtcpTransport,"rtcptransport",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCRtpReceiver,D.getCapabilities,"getCapabilities",!1,a.FEATURE_ms_teams_pstn),
    new b.WebrpcMethodInfo(c.RTCRtpReceiver,D.getParameters,"getParameters",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCRtpReceiver,D.getStats,"getStats",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCRtpReceiver,D.getCapabilities_v2,"getCapabilities_v2",!1,a.FEATURE_ms_teams_webrtc_1dot0)]),new b.WebrpcClassInfo(c.RTCRtpSender,"RTCRtpSender",[new b.WebrpcMethodInfo(c.RTCRtpSender,y.ctor,"ctor",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCRtpSender,y.track,"track",!0,a.FEATURE_ms_teams_pstn),
    new b.WebrpcMethodInfo(c.RTCRtpSender,y.transport,"transport",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCRtpSender,y.rtcpTransport,"rtcpTransport",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCRtpSender,y.dtmf,"dtmf",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCRtpSender,y.getCapabilities,"getCapabilities",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCRtpSender,y.getParameters,"getParameters",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCRtpSender,
    y.setParameters,"setParameters",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCRtpSender,y.replaceTrack,"replaceTrack",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCRtpSender,y.getStats,"getStats",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCRtpSender,y.setStreams,"setStreams",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCRtpSender,y.getCapabilities_v2,"getCapabilities_v2",!1,a.FEATURE_ms_teams_webrtc_1dot0)]),new b.WebrpcClassInfo(c.RTCDtlsTransport,"RTCDtlsTransport",
    [new b.WebrpcMethodInfo(c.RTCDtlsTransport,x.ctor,"ctor",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCDtlsTransport,x.transport,"transport",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCDtlsTransport,x.state,"state",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCDtlsTransport,x.getRemoteCertificates,"getRemoteCertificates",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCDtlsTransport,x.onstatechange,"onstatechange",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCDtlsTransport,
    x.onerror,"onerror",!0,a.FEATURE_ms_teams_pstn)]),new b.WebrpcClassInfo(c.RTCIceTransport,"RTCIceTransport",[new b.WebrpcMethodInfo(c.RTCIceTransport,r.ctor,"ctor",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCIceTransport,r.role,"role",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCIceTransport,r.component,"component",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCIceTransport,r.state,"state",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCIceTransport,r.gatheringState,
    "gatheringState",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCIceTransport,r.localcandidates,"localcandidates",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCIceTransport,r.remotecandidates,"remotecandidates",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCIceTransport,r.onstatechange,"onstatechange",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCIceTransport,r.ongatheringstatechange,"ongatheringstatechange",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCIceTransport,
    r.onselectedcandidatepairchange,"onselectedcandidatepairchange",!0,a.FEATURE_ms_teams_pstn)]),new b.WebrpcClassInfo(c.RTCDTMFSender,"RTCDTMFSender",[new b.WebrpcMethodInfo(c.RTCDTMFSender,A.ctor,"ctor",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCDTMFSender,A.insertDTMF,"insertDTMF",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCDTMFSender,A.ontonechange,"ontonechange",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCDTMFSender,A.canInsertDTMF,"canInsertDTMF",!0,a.FEATURE_ms_teams_pstn),
    new b.WebrpcMethodInfo(c.RTCDTMFSender,A.toneBuffer,"toneBuffer",!0,a.FEATURE_ms_teams_pstn)]),new b.WebrpcClassInfo(c.RTCDTMFToneChangeEvent,"RTCDTMFToneChangeEvent",[new b.WebrpcMethodInfo(c.RTCDTMFToneChangeEvent,M.ctor,"ctor",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCDTMFToneChangeEvent,M.tone,"tone",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCDTMFToneChangeEvent,M.tone_buffer,"tone_buffer",!0,a.FEATURE_ms_teams_pstn)]),new b.WebrpcClassInfo(c.RTCIceCandidatePair,"RTCIceCandidatePair",
    [new b.WebrpcMethodInfo(c.RTCIceCandidatePair,F.ctor,"ctor",!1,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCIceCandidatePair,F.local,"local",!0,a.FEATURE_ms_teams_pstn),new b.WebrpcMethodInfo(c.RTCIceCandidatePair,F.remote,"remote",!0,a.FEATURE_ms_teams_pstn)]),new b.WebrpcClassInfo(c.RTCRtpTransceiver,"RTCRtpTransceiver",[new b.WebrpcMethodInfo(c.RTCRtpTransceiver,J.ctor,"ctor",!1,a.FEATURE_ms_teams_webrtc_1dot0),new b.WebrpcMethodInfo(c.RTCRtpTransceiver,J.mid,"mid",!0,a.FEATURE_ms_teams_webrtc_1dot0),
    new b.WebrpcMethodInfo(c.RTCRtpTransceiver,J.sender,"sender",!0,a.FEATURE_ms_teams_webrtc_1dot0),new b.WebrpcMethodInfo(c.RTCRtpTransceiver,J.receiver,"receiver",!0,a.FEATURE_ms_teams_webrtc_1dot0),new b.WebrpcMethodInfo(c.RTCRtpTransceiver,J.direction,"direction",!0,a.FEATURE_ms_teams_webrtc_1dot0),new b.WebrpcMethodInfo(c.RTCRtpTransceiver,J.currentDirection,"currentDirection",!0,a.FEATURE_ms_teams_webrtc_1dot0),new b.WebrpcMethodInfo(c.RTCRtpTransceiver,J.stop,"stop",!1,a.FEATURE_ms_teams_webrtc_1dot0),
    new b.WebrpcMethodInfo(c.RTCRtpTransceiver,J.setCodecPreferences,"setCodecPreferences",!1,a.FEATURE_ms_teams_webrtc_1dot0)]),new b.WebrpcClassInfo(c.ScreenSharingRemote,"ScreenSharingRemote",[new b.WebrpcMethodInfo(c.ScreenSharingRemote,G.ctor,"ctor",!1,a.FEATURE_ms_teams_monitor_sharing),new b.WebrpcMethodInfo(c.ScreenSharingRemote,G.getScreensAsync,"getScreensAsync",!1,a.FEATURE_ms_teams_monitor_sharing),new b.WebrpcMethodInfo(c.ScreenSharingRemote,G.onscreentopologychanged,"onscreentopologychanged",
    !0,a.FEATURE_ms_teams_monitor_sharing)]),new b.WebrpcClassInfo(c.ScreenSource,"ScreenSource",[new b.WebrpcMethodInfo(c.ScreenSource,L.ctor,"ctor",!1,a.FEATURE_ms_teams_monitor_sharing),new b.WebrpcMethodInfo(c.ScreenSource,L.srcid,"srcid",!0,a.FEATURE_ms_teams_monitor_sharing),new b.WebrpcMethodInfo(c.ScreenSource,L.deviceid,"deviceid",!0,a.FEATURE_ms_teams_monitor_sharing),new b.WebrpcMethodInfo(c.ScreenSource,L.type,"type",!0,a.FEATURE_ms_teams_monitor_sharing),new b.WebrpcMethodInfo(c.ScreenSource,
    L.name,"name",!0,a.FEATURE_ms_teams_monitor_sharing),new b.WebrpcMethodInfo(c.ScreenSource,L.imagedata,"imagedata",!0,a.FEATURE_ms_teams_monitor_sharing),new b.WebrpcMethodInfo(c.ScreenSource,L.hwnd,"hwnd",!0,a.FEATURE_ms_teams_monitor_sharing),new b.WebrpcMethodInfo(c.ScreenSource,L.origin,"origin",!0,a.FEATURE_ms_teams_monitor_sharing),new b.WebrpcMethodInfo(c.ScreenSource,L.caption,"caption",!0,a.FEATURE_ms_teams_monitor_sharing),new b.WebrpcMethodInfo(c.ScreenSource,L.pid,"pid",!0,a.FEATURE_ms_teams_monitor_sharing),
    new b.WebrpcMethodInfo(c.ScreenSource,L.bounds,"bounds",!0,a.FEATURE_ms_teams_gtc)]),new b.WebrpcClassInfo(c.E911Service,"E911Service",[new b.WebrpcMethodInfo(c.E911Service,P.ctor,"ctor",!1,a.FEATURE_ms_teams_e911),new b.WebrpcMethodInfo(c.E911Service,P.getE911Info,"getE911Info",!1,a.FEATURE_ms_teams_e911),new b.WebrpcMethodInfo(c.E911Service,P.onupdate,"onupdate",!0,a.FEATURE_ms_teams_e911)]),new b.WebrpcClassInfo(c.RTCDataChannel,"RTCDataChannel",[new b.WebrpcMethodInfo(c.RTCDataChannel,C.ctor,
    "ctor",!1,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.label,"label",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.ordered,"ordered",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.maxPacketLifeTime,"maxPacketLifeTime",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.maxRetransmits,"maxRetransmits",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.protocol,
    "protocol",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.negotiated,"negotiated",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.id,"id",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.readyState,"readyState",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.bufferedAmount,"bufferedAmount",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.bufferedAmountLowThreshold,
    "bufferedAmountLowThreshold",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.onopen,"onopen",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.onbufferedamountlow,"onbufferedamountlow",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.onerror,"onerror",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.onclosing,"onclosing",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,
    C.onclose,"onclose",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.onmessage,"onmessage",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.close,"close",!1,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.send_text,"send_text",!1,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCDataChannel,C.send_binary,"send_binary",!1,a.FEATURE_ms_teams_data_channel)]),new b.WebrpcClassInfo(c.RTCSctpTransport,"RTCSctpTransport",
    [new b.WebrpcMethodInfo(c.RTCSctpTransport,R.ctor,"ctor",!1,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCSctpTransport,R.transport,"transport",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCSctpTransport,R.state,"state",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCSctpTransport,R.maxMessageSize,"maxMessageSize",!0,a.FEATURE_ms_teams_data_channel),new b.WebrpcMethodInfo(c.RTCSctpTransport,R.maxChannels,"maxChannels",!0,a.FEATURE_ms_teams_data_channel),
    new b.WebrpcMethodInfo(c.RTCSctpTransport,R.onstatechange,"onstatechange",!0,a.FEATURE_ms_teams_data_channel)]),new b.WebrpcClassInfo(c.StreamResolution,"StreamResolution",[new b.WebrpcMethodInfo(c.StreamResolution,K.ctor,"ctor",!1,a.FEATURE_ms_teams_stream_resolution),new b.WebrpcMethodInfo(c.StreamResolution,K.getCallConstraints,"getCallConstraints",!1,a.FEATURE_ms_teams_stream_resolution),new b.WebrpcMethodInfo(c.StreamResolution,K.onupdate,"onupdate",!0,a.FEATURE_ms_teams_stream_resolution)])])},
    545:function(b,a,c){var e=this&&this.__spreadArrays||function(){for(var a=0,b=0,c=arguments.length;b<c;b++)a+=arguments[b].length;for(var a=Array(a),e=0,b=0;b<c;b++)for(var k=arguments[b],h=0,l=k.length;h<l;h++,e++)a[e]=k[h];return a};Object.defineProperty(a,"__esModule",{value:!0});a.WsJsonUtil=a.ws_msg_type_t=void 0;var l=c(550),h;(function(a){a[a.req=0]="req";a[a.reply=1]="reply";a[a.event_req=2]="event_req";a[a.event_reply=3]="event_reply"})(h=a.ws_msg_type_t||(a.ws_msg_type_t={}));b=function(){function a(){}
    a.createMessageByid=function(a,b,c,d,h,p){for(var g=[],B=6;B<arguments.length;B++)g[B-6]=arguments[B];(B=l.WebrpcClassLibInfoUtil.getMethodByid(d,h))&&B.isprop||(a=!1);return this.createMessage.apply(this,e([c,a,b,d,h,p],g))};a.createMessage=function(a,b,c,d,h,l){for(var g=[],p=6;p<arguments.length;p++)g[p-6]=arguments[p];return{v:"webrtc",hdr:{version:this._version,msg_type:this.getMsgType(a),modifier:b,destroy:c,proc:{iid:d,methodid:h}},objref:{oid:l},params:e(g)}};a.getMsgType=function(a){var b=
    "";switch(a){default:b="req";break;case h.reply:b="reply";break;case h.event_req:b="event-req";break;case h.event_reply:b="event-reply"}return b};a._version=1;return a}();a.WsJsonUtil=b}},p={};return e(307)}()});
    
    }).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{}],3:[function(require,module,exports){
    module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
    },{"core-js/library/fn/object/create":19}],4:[function(require,module,exports){
    module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
    },{"core-js/library/fn/object/define-property":20}],5:[function(require,module,exports){
    module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
    },{"core-js/library/fn/object/get-own-property-descriptor":21}],6:[function(require,module,exports){
    module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
    },{"core-js/library/fn/object/get-prototype-of":22}],7:[function(require,module,exports){
    module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
    },{"core-js/library/fn/object/set-prototype-of":23}],8:[function(require,module,exports){
    module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
    },{"core-js/library/fn/promise":24}],9:[function(require,module,exports){
    module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
    },{"core-js/library/fn/symbol":25}],10:[function(require,module,exports){
    module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
    },{"core-js/library/fn/symbol/iterator":26}],11:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    
    var _promise = require("../core-js/promise");
    
    var _promise2 = _interopRequireDefault(_promise);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = function (fn) {
      return function () {
        var gen = fn.apply(this, arguments);
        return new _promise2.default(function (resolve, reject) {
          function step(key, arg) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }
    
            if (info.done) {
              resolve(value);
            } else {
              return _promise2.default.resolve(value).then(function (value) {
                step("next", value);
              }, function (err) {
                step("throw", err);
              });
            }
          }
    
          return step("next");
        });
      };
    };
    },{"../core-js/promise":8}],12:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    
    exports.default = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    },{}],13:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    
    var _defineProperty = require("../core-js/object/define-property");
    
    var _defineProperty2 = _interopRequireDefault(_defineProperty);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          (0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    },{"../core-js/object/define-property":4}],14:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    
    var _getPrototypeOf = require("../core-js/object/get-prototype-of");
    
    var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
    
    var _getOwnPropertyDescriptor = require("../core-js/object/get-own-property-descriptor");
    
    var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = function get(object, property, receiver) {
      if (object === null) object = Function.prototype;
      var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);
    
      if (desc === undefined) {
        var parent = (0, _getPrototypeOf2.default)(object);
    
        if (parent === null) {
          return undefined;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
    
        if (getter === undefined) {
          return undefined;
        }
    
        return getter.call(receiver);
      }
    };
    },{"../core-js/object/get-own-property-descriptor":5,"../core-js/object/get-prototype-of":6}],15:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    
    var _setPrototypeOf = require("../core-js/object/set-prototype-of");
    
    var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
    
    var _create = require("../core-js/object/create");
    
    var _create2 = _interopRequireDefault(_create);
    
    var _typeof2 = require("../helpers/typeof");
    
    var _typeof3 = _interopRequireDefault(_typeof2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = function (subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
      }
    
      subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
    };
    },{"../core-js/object/create":3,"../core-js/object/set-prototype-of":7,"../helpers/typeof":17}],16:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    
    var _typeof2 = require("../helpers/typeof");
    
    var _typeof3 = _interopRequireDefault(_typeof2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = function (self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
    
      return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
    };
    },{"../helpers/typeof":17}],17:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    
    var _iterator = require("../core-js/symbol/iterator");
    
    var _iterator2 = _interopRequireDefault(_iterator);
    
    var _symbol = require("../core-js/symbol");
    
    var _symbol2 = _interopRequireDefault(_symbol);
    
    var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof(obj);
    } : function (obj) {
      return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
    };
    },{"../core-js/symbol":9,"../core-js/symbol/iterator":10}],18:[function(require,module,exports){
    module.exports = require("regenerator-runtime");
    
    },{"regenerator-runtime":116}],19:[function(require,module,exports){
    require('../../modules/es6.object.create');
    var $Object = require('../../modules/_core').Object;
    module.exports = function create(P, D) {
      return $Object.create(P, D);
    };
    
    },{"../../modules/_core":34,"../../modules/es6.object.create":102}],20:[function(require,module,exports){
    require('../../modules/es6.object.define-property');
    var $Object = require('../../modules/_core').Object;
    module.exports = function defineProperty(it, key, desc) {
      return $Object.defineProperty(it, key, desc);
    };
    
    },{"../../modules/_core":34,"../../modules/es6.object.define-property":103}],21:[function(require,module,exports){
    require('../../modules/es6.object.get-own-property-descriptor');
    var $Object = require('../../modules/_core').Object;
    module.exports = function getOwnPropertyDescriptor(it, key) {
      return $Object.getOwnPropertyDescriptor(it, key);
    };
    
    },{"../../modules/_core":34,"../../modules/es6.object.get-own-property-descriptor":104}],22:[function(require,module,exports){
    require('../../modules/es6.object.get-prototype-of');
    module.exports = require('../../modules/_core').Object.getPrototypeOf;
    
    },{"../../modules/_core":34,"../../modules/es6.object.get-prototype-of":105}],23:[function(require,module,exports){
    require('../../modules/es6.object.set-prototype-of');
    module.exports = require('../../modules/_core').Object.setPrototypeOf;
    
    },{"../../modules/_core":34,"../../modules/es6.object.set-prototype-of":106}],24:[function(require,module,exports){
    require('../modules/es6.object.to-string');
    require('../modules/es6.string.iterator');
    require('../modules/web.dom.iterable');
    require('../modules/es6.promise');
    require('../modules/es7.promise.finally');
    require('../modules/es7.promise.try');
    module.exports = require('../modules/_core').Promise;
    
    },{"../modules/_core":34,"../modules/es6.object.to-string":107,"../modules/es6.promise":108,"../modules/es6.string.iterator":109,"../modules/es7.promise.finally":111,"../modules/es7.promise.try":112,"../modules/web.dom.iterable":115}],25:[function(require,module,exports){
    require('../../modules/es6.symbol');
    require('../../modules/es6.object.to-string');
    require('../../modules/es7.symbol.async-iterator');
    require('../../modules/es7.symbol.observable');
    module.exports = require('../../modules/_core').Symbol;
    
    },{"../../modules/_core":34,"../../modules/es6.object.to-string":107,"../../modules/es6.symbol":110,"../../modules/es7.symbol.async-iterator":113,"../../modules/es7.symbol.observable":114}],26:[function(require,module,exports){
    require('../../modules/es6.string.iterator');
    require('../../modules/web.dom.iterable');
    module.exports = require('../../modules/_wks-ext').f('iterator');
    
    },{"../../modules/_wks-ext":98,"../../modules/es6.string.iterator":109,"../../modules/web.dom.iterable":115}],27:[function(require,module,exports){
    module.exports = function (it) {
      if (typeof it != 'function') throw TypeError(it + ' is not a function!');
      return it;
    };
    
    },{}],28:[function(require,module,exports){
    module.exports = function () { /* empty */ };
    
    },{}],29:[function(require,module,exports){
    module.exports = function (it, Constructor, name, forbiddenField) {
      if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
        throw TypeError(name + ': incorrect invocation!');
      } return it;
    };
    
    },{}],30:[function(require,module,exports){
    var isObject = require('./_is-object');
    module.exports = function (it) {
      if (!isObject(it)) throw TypeError(it + ' is not an object!');
      return it;
    };
    
    },{"./_is-object":53}],31:[function(require,module,exports){
    // false -> Array#indexOf
    // true  -> Array#includes
    var toIObject = require('./_to-iobject');
    var toLength = require('./_to-length');
    var toAbsoluteIndex = require('./_to-absolute-index');
    module.exports = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++];
          // eslint-disable-next-line no-self-compare
          if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        } return !IS_INCLUDES && -1;
      };
    };
    
    },{"./_to-absolute-index":89,"./_to-iobject":91,"./_to-length":92}],32:[function(require,module,exports){
    // getting tag from 19.1.3.6 Object.prototype.toString()
    var cof = require('./_cof');
    var TAG = require('./_wks')('toStringTag');
    // ES3 wrong here
    var ARG = cof(function () { return arguments; }()) == 'Arguments';
    
    // fallback for IE11 Script Access Denied error
    var tryGet = function (it, key) {
      try {
        return it[key];
      } catch (e) { /* empty */ }
    };
    
    module.exports = function (it) {
      var O, T, B;
      return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
        : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
        // builtinTag case
        : ARG ? cof(O)
        // ES3 arguments fallback
        : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
    
    },{"./_cof":33,"./_wks":99}],33:[function(require,module,exports){
    var toString = {}.toString;
    
    module.exports = function (it) {
      return toString.call(it).slice(8, -1);
    };
    
    },{}],34:[function(require,module,exports){
    var core = module.exports = { version: '2.6.12' };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
    
    },{}],35:[function(require,module,exports){
    // optional / simple context binding
    var aFunction = require('./_a-function');
    module.exports = function (fn, that, length) {
      aFunction(fn);
      if (that === undefined) return fn;
      switch (length) {
        case 1: return function (a) {
          return fn.call(that, a);
        };
        case 2: return function (a, b) {
          return fn.call(that, a, b);
        };
        case 3: return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
      }
      return function (/* ...args */) {
        return fn.apply(that, arguments);
      };
    };
    
    },{"./_a-function":27}],36:[function(require,module,exports){
    // 7.2.1 RequireObjectCoercible(argument)
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on  " + it);
      return it;
    };
    
    },{}],37:[function(require,module,exports){
    // Thank's IE8 for his funny defineProperty
    module.exports = !require('./_fails')(function () {
      return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
    });
    
    },{"./_fails":42}],38:[function(require,module,exports){
    var isObject = require('./_is-object');
    var document = require('./_global').document;
    // typeof document.createElement is 'object' in old IE
    var is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
      return is ? document.createElement(it) : {};
    };
    
    },{"./_global":44,"./_is-object":53}],39:[function(require,module,exports){
    // IE 8- don't enum bug keys
    module.exports = (
      'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
    ).split(',');
    
    },{}],40:[function(require,module,exports){
    // all enumerable object keys, includes symbols
    var getKeys = require('./_object-keys');
    var gOPS = require('./_object-gops');
    var pIE = require('./_object-pie');
    module.exports = function (it) {
      var result = getKeys(it);
      var getSymbols = gOPS.f;
      if (getSymbols) {
        var symbols = getSymbols(it);
        var isEnum = pIE.f;
        var i = 0;
        var key;
        while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
      } return result;
    };
    
    },{"./_object-gops":70,"./_object-keys":73,"./_object-pie":74}],41:[function(require,module,exports){
    var global = require('./_global');
    var core = require('./_core');
    var ctx = require('./_ctx');
    var hide = require('./_hide');
    var has = require('./_has');
    var PROTOTYPE = 'prototype';
    
    var $export = function (type, name, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var IS_WRAP = type & $export.W;
      var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
      var expProto = exports[PROTOTYPE];
      var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
      var key, own, out;
      if (IS_GLOBAL) source = name;
      for (key in source) {
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        if (own && has(exports, key)) continue;
        // export native or passed
        out = own ? target[key] : source[key];
        // prevent global pollution for namespaces
        exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
        // bind timers to global for call from export context
        : IS_BIND && own ? ctx(out, global)
        // wrap global constructors for prevent change them in library
        : IS_WRAP && target[key] == out ? (function (C) {
          var F = function (a, b, c) {
            if (this instanceof C) {
              switch (arguments.length) {
                case 0: return new C();
                case 1: return new C(a);
                case 2: return new C(a, b);
              } return new C(a, b, c);
            } return C.apply(this, arguments);
          };
          F[PROTOTYPE] = C[PROTOTYPE];
          return F;
        // make static versions for prototype methods
        })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
        // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
        if (IS_PROTO) {
          (exports.virtual || (exports.virtual = {}))[key] = out;
          // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
          if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
        }
      }
    };
    // type bitmap
    $export.F = 1;   // forced
    $export.G = 2;   // global
    $export.S = 4;   // static
    $export.P = 8;   // proto
    $export.B = 16;  // bind
    $export.W = 32;  // wrap
    $export.U = 64;  // safe
    $export.R = 128; // real proto method for `library`
    module.exports = $export;
    
    },{"./_core":34,"./_ctx":35,"./_global":44,"./_has":45,"./_hide":46}],42:[function(require,module,exports){
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };
    
    },{}],43:[function(require,module,exports){
    var ctx = require('./_ctx');
    var call = require('./_iter-call');
    var isArrayIter = require('./_is-array-iter');
    var anObject = require('./_an-object');
    var toLength = require('./_to-length');
    var getIterFn = require('./core.get-iterator-method');
    var BREAK = {};
    var RETURN = {};
    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
      var f = ctx(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
      // fast case for arrays with default iterator
      if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = call(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };
    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
    
    },{"./_an-object":30,"./_ctx":35,"./_is-array-iter":51,"./_iter-call":54,"./_to-length":92,"./core.get-iterator-method":100}],44:[function(require,module,exports){
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math
      ? window : typeof self != 'undefined' && self.Math == Math ? self
      // eslint-disable-next-line no-new-func
      : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
    
    },{}],45:[function(require,module,exports){
    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };
    
    },{}],46:[function(require,module,exports){
    var dP = require('./_object-dp');
    var createDesc = require('./_property-desc');
    module.exports = require('./_descriptors') ? function (object, key, value) {
      return dP.f(object, key, createDesc(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };
    
    },{"./_descriptors":37,"./_object-dp":65,"./_property-desc":78}],47:[function(require,module,exports){
    var document = require('./_global').document;
    module.exports = document && document.documentElement;
    
    },{"./_global":44}],48:[function(require,module,exports){
    module.exports = !require('./_descriptors') && !require('./_fails')(function () {
      return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
    });
    
    },{"./_descriptors":37,"./_dom-create":38,"./_fails":42}],49:[function(require,module,exports){
    // fast apply, http://jsperf.lnkit.com/fast-apply/5
    module.exports = function (fn, args, that) {
      var un = that === undefined;
      switch (args.length) {
        case 0: return un ? fn()
                          : fn.call(that);
        case 1: return un ? fn(args[0])
                          : fn.call(that, args[0]);
        case 2: return un ? fn(args[0], args[1])
                          : fn.call(that, args[0], args[1]);
        case 3: return un ? fn(args[0], args[1], args[2])
                          : fn.call(that, args[0], args[1], args[2]);
        case 4: return un ? fn(args[0], args[1], args[2], args[3])
                          : fn.call(that, args[0], args[1], args[2], args[3]);
      } return fn.apply(that, args);
    };
    
    },{}],50:[function(require,module,exports){
    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var cof = require('./_cof');
    // eslint-disable-next-line no-prototype-builtins
    module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
      return cof(it) == 'String' ? it.split('') : Object(it);
    };
    
    },{"./_cof":33}],51:[function(require,module,exports){
    // check on default Array iterator
    var Iterators = require('./_iterators');
    var ITERATOR = require('./_wks')('iterator');
    var ArrayProto = Array.prototype;
    
    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
    
    },{"./_iterators":59,"./_wks":99}],52:[function(require,module,exports){
    // 7.2.2 IsArray(argument)
    var cof = require('./_cof');
    module.exports = Array.isArray || function isArray(arg) {
      return cof(arg) == 'Array';
    };
    
    },{"./_cof":33}],53:[function(require,module,exports){
    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };
    
    },{}],54:[function(require,module,exports){
    // call something on iterator step with safe closing on error
    var anObject = require('./_an-object');
    module.exports = function (iterator, fn, value, entries) {
      try {
        return entries ? fn(anObject(value)[0], value[1]) : fn(value);
      // 7.4.6 IteratorClose(iterator, completion)
      } catch (e) {
        var ret = iterator['return'];
        if (ret !== undefined) anObject(ret.call(iterator));
        throw e;
      }
    };
    
    },{"./_an-object":30}],55:[function(require,module,exports){
    'use strict';
    var create = require('./_object-create');
    var descriptor = require('./_property-desc');
    var setToStringTag = require('./_set-to-string-tag');
    var IteratorPrototype = {};
    
    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });
    
    module.exports = function (Constructor, NAME, next) {
      Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
      setToStringTag(Constructor, NAME + ' Iterator');
    };
    
    },{"./_hide":46,"./_object-create":64,"./_property-desc":78,"./_set-to-string-tag":83,"./_wks":99}],56:[function(require,module,exports){
    'use strict';
    var LIBRARY = require('./_library');
    var $export = require('./_export');
    var redefine = require('./_redefine');
    var hide = require('./_hide');
    var Iterators = require('./_iterators');
    var $iterCreate = require('./_iter-create');
    var setToStringTag = require('./_set-to-string-tag');
    var getPrototypeOf = require('./_object-gpo');
    var ITERATOR = require('./_wks')('iterator');
    var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
    var FF_ITERATOR = '@@iterator';
    var KEYS = 'keys';
    var VALUES = 'values';
    
    var returnThis = function () { return this; };
    
    module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      $iterCreate(Constructor, NAME, next);
      var getMethod = function (kind) {
        if (!BUGGY && kind in proto) return proto[kind];
        switch (kind) {
          case KEYS: return function keys() { return new Constructor(this, kind); };
          case VALUES: return function values() { return new Constructor(this, kind); };
        } return function entries() { return new Constructor(this, kind); };
      };
      var TAG = NAME + ' Iterator';
      var DEF_VALUES = DEFAULT == VALUES;
      var VALUES_BUG = false;
      var proto = Base.prototype;
      var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
      var $default = $native || getMethod(DEFAULT);
      var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
      var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
      var methods, key, IteratorPrototype;
      // Fix native
      if ($anyNative) {
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
          // Set @@toStringTag to native iterators
          setToStringTag(IteratorPrototype, TAG, true);
          // fix for some old engines
          if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
        }
      }
      // fix Array#{values, @@iterator}.name in V8 / FF
      if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() { return $native.call(this); };
      }
      // Define iterator
      if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
        hide(proto, ITERATOR, $default);
      }
      // Plug for library
      Iterators[NAME] = $default;
      Iterators[TAG] = returnThis;
      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: $entries
        };
        if (FORCED) for (key in methods) {
          if (!(key in proto)) redefine(proto, key, methods[key]);
        } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }
      return methods;
    };
    
    },{"./_export":41,"./_hide":46,"./_iter-create":55,"./_iterators":59,"./_library":60,"./_object-gpo":71,"./_redefine":80,"./_set-to-string-tag":83,"./_wks":99}],57:[function(require,module,exports){
    var ITERATOR = require('./_wks')('iterator');
    var SAFE_CLOSING = false;
    
    try {
      var riter = [7][ITERATOR]();
      riter['return'] = function () { SAFE_CLOSING = true; };
      // eslint-disable-next-line no-throw-literal
      Array.from(riter, function () { throw 2; });
    } catch (e) { /* empty */ }
    
    module.exports = function (exec, skipClosing) {
      if (!skipClosing && !SAFE_CLOSING) return false;
      var safe = false;
      try {
        var arr = [7];
        var iter = arr[ITERATOR]();
        iter.next = function () { return { done: safe = true }; };
        arr[ITERATOR] = function () { return iter; };
        exec(arr);
      } catch (e) { /* empty */ }
      return safe;
    };
    
    },{"./_wks":99}],58:[function(require,module,exports){
    module.exports = function (done, value) {
      return { value: value, done: !!done };
    };
    
    },{}],59:[function(require,module,exports){
    module.exports = {};
    
    },{}],60:[function(require,module,exports){
    module.exports = true;
    
    },{}],61:[function(require,module,exports){
    var META = require('./_uid')('meta');
    var isObject = require('./_is-object');
    var has = require('./_has');
    var setDesc = require('./_object-dp').f;
    var id = 0;
    var isExtensible = Object.isExtensible || function () {
      return true;
    };
    var FREEZE = !require('./_fails')(function () {
      return isExtensible(Object.preventExtensions({}));
    });
    var setMeta = function (it) {
      setDesc(it, META, { value: {
        i: 'O' + ++id, // object ID
        w: {}          // weak collections IDs
      } });
    };
    var fastKey = function (it, create) {
      // return primitive with prefix
      if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
      if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMeta(it);
      // return object ID
      } return it[META].i;
    };
    var getWeak = function (it, create) {
      if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMeta(it);
      // return hash weak collections IDs
      } return it[META].w;
    };
    // add metadata on freeze-family methods calling
    var onFreeze = function (it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
      return it;
    };
    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
    
    },{"./_fails":42,"./_has":45,"./_is-object":53,"./_object-dp":65,"./_uid":95}],62:[function(require,module,exports){
    var global = require('./_global');
    var macrotask = require('./_task').set;
    var Observer = global.MutationObserver || global.WebKitMutationObserver;
    var process = global.process;
    var Promise = global.Promise;
    var isNode = require('./_cof')(process) == 'process';
    
    module.exports = function () {
      var head, last, notify;
    
      var flush = function () {
        var parent, fn;
        if (isNode && (parent = process.domain)) parent.exit();
        while (head) {
          fn = head.fn;
          head = head.next;
          try {
            fn();
          } catch (e) {
            if (head) notify();
            else last = undefined;
            throw e;
          }
        } last = undefined;
        if (parent) parent.enter();
      };
    
      // Node.js
      if (isNode) {
        notify = function () {
          process.nextTick(flush);
        };
      // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
      } else if (Observer && !(global.navigator && global.navigator.standalone)) {
        var toggle = true;
        var node = document.createTextNode('');
        new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
        notify = function () {
          node.data = toggle = !toggle;
        };
      // environments with maybe non-completely correct, but existent Promise
      } else if (Promise && Promise.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        var promise = Promise.resolve(undefined);
        notify = function () {
          promise.then(flush);
        };
      // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout
      } else {
        notify = function () {
          // strange IE + webpack dev server bug - use .call(global)
          macrotask.call(global, flush);
        };
      }
    
      return function (fn) {
        var task = { fn: fn, next: undefined };
        if (last) last.next = task;
        if (!head) {
          head = task;
          notify();
        } last = task;
      };
    };
    
    },{"./_cof":33,"./_global":44,"./_task":88}],63:[function(require,module,exports){
    'use strict';
    // 25.4.1.5 NewPromiseCapability(C)
    var aFunction = require('./_a-function');
    
    function PromiseCapability(C) {
      var resolve, reject;
      this.promise = new C(function ($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve);
      this.reject = aFunction(reject);
    }
    
    module.exports.f = function (C) {
      return new PromiseCapability(C);
    };
    
    },{"./_a-function":27}],64:[function(require,module,exports){
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    var anObject = require('./_an-object');
    var dPs = require('./_object-dps');
    var enumBugKeys = require('./_enum-bug-keys');
    var IE_PROTO = require('./_shared-key')('IE_PROTO');
    var Empty = function () { /* empty */ };
    var PROTOTYPE = 'prototype';
    
    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var createDict = function () {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = require('./_dom-create')('iframe');
      var i = enumBugKeys.length;
      var lt = '<';
      var gt = '>';
      var iframeDocument;
      iframe.style.display = 'none';
      require('./_html').appendChild(iframe);
      iframe.src = 'javascript:'; // eslint-disable-line no-script-url
      // createDict = iframe.contentWindow.Object;
      // html.removeChild(iframe);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
      iframeDocument.close();
      createDict = iframeDocument.F;
      while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
      return createDict();
    };
    
    module.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
      } else result = createDict();
      return Properties === undefined ? result : dPs(result, Properties);
    };
    
    },{"./_an-object":30,"./_dom-create":38,"./_enum-bug-keys":39,"./_html":47,"./_object-dps":66,"./_shared-key":84}],65:[function(require,module,exports){
    var anObject = require('./_an-object');
    var IE8_DOM_DEFINE = require('./_ie8-dom-define');
    var toPrimitive = require('./_to-primitive');
    var dP = Object.defineProperty;
    
    exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
      } catch (e) { /* empty */ }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };
    
    },{"./_an-object":30,"./_descriptors":37,"./_ie8-dom-define":48,"./_to-primitive":94}],66:[function(require,module,exports){
    var dP = require('./_object-dp');
    var anObject = require('./_an-object');
    var getKeys = require('./_object-keys');
    
    module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = getKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;
      while (length > i) dP.f(O, P = keys[i++], Properties[P]);
      return O;
    };
    
    },{"./_an-object":30,"./_descriptors":37,"./_object-dp":65,"./_object-keys":73}],67:[function(require,module,exports){
    var pIE = require('./_object-pie');
    var createDesc = require('./_property-desc');
    var toIObject = require('./_to-iobject');
    var toPrimitive = require('./_to-primitive');
    var has = require('./_has');
    var IE8_DOM_DEFINE = require('./_ie8-dom-define');
    var gOPD = Object.getOwnPropertyDescriptor;
    
    exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
      O = toIObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE) try {
        return gOPD(O, P);
      } catch (e) { /* empty */ }
      if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
    };
    
    },{"./_descriptors":37,"./_has":45,"./_ie8-dom-define":48,"./_object-pie":74,"./_property-desc":78,"./_to-iobject":91,"./_to-primitive":94}],68:[function(require,module,exports){
    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
    var toIObject = require('./_to-iobject');
    var gOPN = require('./_object-gopn').f;
    var toString = {}.toString;
    
    var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window) : [];
    
    var getWindowNames = function (it) {
      try {
        return gOPN(it);
      } catch (e) {
        return windowNames.slice();
      }
    };
    
    module.exports.f = function getOwnPropertyNames(it) {
      return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
    };
    
    },{"./_object-gopn":69,"./_to-iobject":91}],69:[function(require,module,exports){
    // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
    var $keys = require('./_object-keys-internal');
    var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');
    
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return $keys(O, hiddenKeys);
    };
    
    },{"./_enum-bug-keys":39,"./_object-keys-internal":72}],70:[function(require,module,exports){
    exports.f = Object.getOwnPropertySymbols;
    
    },{}],71:[function(require,module,exports){
    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
    var has = require('./_has');
    var toObject = require('./_to-object');
    var IE_PROTO = require('./_shared-key')('IE_PROTO');
    var ObjectProto = Object.prototype;
    
    module.exports = Object.getPrototypeOf || function (O) {
      O = toObject(O);
      if (has(O, IE_PROTO)) return O[IE_PROTO];
      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      } return O instanceof Object ? ObjectProto : null;
    };
    
    },{"./_has":45,"./_shared-key":84,"./_to-object":93}],72:[function(require,module,exports){
    var has = require('./_has');
    var toIObject = require('./_to-iobject');
    var arrayIndexOf = require('./_array-includes')(false);
    var IE_PROTO = require('./_shared-key')('IE_PROTO');
    
    module.exports = function (object, names) {
      var O = toIObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
      // Don't enum bug & hidden keys
      while (names.length > i) if (has(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
      }
      return result;
    };
    
    },{"./_array-includes":31,"./_has":45,"./_shared-key":84,"./_to-iobject":91}],73:[function(require,module,exports){
    // 19.1.2.14 / 15.2.3.14 Object.keys(O)
    var $keys = require('./_object-keys-internal');
    var enumBugKeys = require('./_enum-bug-keys');
    
    module.exports = Object.keys || function keys(O) {
      return $keys(O, enumBugKeys);
    };
    
    },{"./_enum-bug-keys":39,"./_object-keys-internal":72}],74:[function(require,module,exports){
    exports.f = {}.propertyIsEnumerable;
    
    },{}],75:[function(require,module,exports){
    // most Object methods by ES6 should accept primitives
    var $export = require('./_export');
    var core = require('./_core');
    var fails = require('./_fails');
    module.exports = function (KEY, exec) {
      var fn = (core.Object || {})[KEY] || Object[KEY];
      var exp = {};
      exp[KEY] = exec(fn);
      $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
    };
    
    },{"./_core":34,"./_export":41,"./_fails":42}],76:[function(require,module,exports){
    module.exports = function (exec) {
      try {
        return { e: false, v: exec() };
      } catch (e) {
        return { e: true, v: e };
      }
    };
    
    },{}],77:[function(require,module,exports){
    var anObject = require('./_an-object');
    var isObject = require('./_is-object');
    var newPromiseCapability = require('./_new-promise-capability');
    
    module.exports = function (C, x) {
      anObject(C);
      if (isObject(x) && x.constructor === C) return x;
      var promiseCapability = newPromiseCapability.f(C);
      var resolve = promiseCapability.resolve;
      resolve(x);
      return promiseCapability.promise;
    };
    
    },{"./_an-object":30,"./_is-object":53,"./_new-promise-capability":63}],78:[function(require,module,exports){
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
    
    },{}],79:[function(require,module,exports){
    var hide = require('./_hide');
    module.exports = function (target, src, safe) {
      for (var key in src) {
        if (safe && target[key]) target[key] = src[key];
        else hide(target, key, src[key]);
      } return target;
    };
    
    },{"./_hide":46}],80:[function(require,module,exports){
    module.exports = require('./_hide');
    
    },{"./_hide":46}],81:[function(require,module,exports){
    // Works with __proto__ only. Old v8 can't work with null proto objects.
    /* eslint-disable no-proto */
    var isObject = require('./_is-object');
    var anObject = require('./_an-object');
    var check = function (O, proto) {
      anObject(O);
      if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
    };
    module.exports = {
      set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
        function (test, buggy, set) {
          try {
            set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
          } catch (e) { buggy = true; }
          return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;
            else set(O, proto);
            return O;
          };
        }({}, false) : undefined),
      check: check
    };
    
    },{"./_an-object":30,"./_ctx":35,"./_is-object":53,"./_object-gopd":67}],82:[function(require,module,exports){
    'use strict';
    var global = require('./_global');
    var core = require('./_core');
    var dP = require('./_object-dp');
    var DESCRIPTORS = require('./_descriptors');
    var SPECIES = require('./_wks')('species');
    
    module.exports = function (KEY) {
      var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
      if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
        configurable: true,
        get: function () { return this; }
      });
    };
    
    },{"./_core":34,"./_descriptors":37,"./_global":44,"./_object-dp":65,"./_wks":99}],83:[function(require,module,exports){
    var def = require('./_object-dp').f;
    var has = require('./_has');
    var TAG = require('./_wks')('toStringTag');
    
    module.exports = function (it, tag, stat) {
      if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
    };
    
    },{"./_has":45,"./_object-dp":65,"./_wks":99}],84:[function(require,module,exports){
    var shared = require('./_shared')('keys');
    var uid = require('./_uid');
    module.exports = function (key) {
      return shared[key] || (shared[key] = uid(key));
    };
    
    },{"./_shared":85,"./_uid":95}],85:[function(require,module,exports){
    var core = require('./_core');
    var global = require('./_global');
    var SHARED = '__core-js_shared__';
    var store = global[SHARED] || (global[SHARED] = {});
    
    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: core.version,
      mode: require('./_library') ? 'pure' : 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
    });
    
    },{"./_core":34,"./_global":44,"./_library":60}],86:[function(require,module,exports){
    // 7.3.20 SpeciesConstructor(O, defaultConstructor)
    var anObject = require('./_an-object');
    var aFunction = require('./_a-function');
    var SPECIES = require('./_wks')('species');
    module.exports = function (O, D) {
      var C = anObject(O).constructor;
      var S;
      return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
    };
    
    },{"./_a-function":27,"./_an-object":30,"./_wks":99}],87:[function(require,module,exports){
    var toInteger = require('./_to-integer');
    var defined = require('./_defined');
    // true  -> String#at
    // false -> String#codePointAt
    module.exports = function (TO_STRING) {
      return function (that, pos) {
        var s = String(defined(that));
        var i = toInteger(pos);
        var l = s.length;
        var a, b;
        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
        a = s.charCodeAt(i);
        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
          ? TO_STRING ? s.charAt(i) : a
          : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
      };
    };
    
    },{"./_defined":36,"./_to-integer":90}],88:[function(require,module,exports){
    var ctx = require('./_ctx');
    var invoke = require('./_invoke');
    var html = require('./_html');
    var cel = require('./_dom-create');
    var global = require('./_global');
    var process = global.process;
    var setTask = global.setImmediate;
    var clearTask = global.clearImmediate;
    var MessageChannel = global.MessageChannel;
    var Dispatch = global.Dispatch;
    var counter = 0;
    var queue = {};
    var ONREADYSTATECHANGE = 'onreadystatechange';
    var defer, channel, port;
    var run = function () {
      var id = +this;
      // eslint-disable-next-line no-prototype-builtins
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listener = function (event) {
      run.call(event.data);
    };
    // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [];
        var i = 1;
        while (arguments.length > i) args.push(arguments[i++]);
        queue[++counter] = function () {
          // eslint-disable-next-line no-new-func
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      // Node.js 0.8-
      if (require('./_cof')(process) == 'process') {
        defer = function (id) {
          process.nextTick(ctx(run, id, 1));
        };
      // Sphere (JS game engine) Dispatch API
      } else if (Dispatch && Dispatch.now) {
        defer = function (id) {
          Dispatch.now(ctx(run, id, 1));
        };
      // Browsers with MessageChannel, includes WebWorkers
      } else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = ctx(port.postMessage, port, 1);
      // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function (id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listener, false);
      // IE8-
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function (id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
            html.removeChild(this);
            run.call(id);
          };
        };
      // Rest old browsers
      } else {
        defer = function (id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
    
    },{"./_cof":33,"./_ctx":35,"./_dom-create":38,"./_global":44,"./_html":47,"./_invoke":49}],89:[function(require,module,exports){
    var toInteger = require('./_to-integer');
    var max = Math.max;
    var min = Math.min;
    module.exports = function (index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    };
    
    },{"./_to-integer":90}],90:[function(require,module,exports){
    // 7.1.4 ToInteger
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = function (it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
    
    },{}],91:[function(require,module,exports){
    // to indexed object, toObject with fallback for non-array-like ES3 strings
    var IObject = require('./_iobject');
    var defined = require('./_defined');
    module.exports = function (it) {
      return IObject(defined(it));
    };
    
    },{"./_defined":36,"./_iobject":50}],92:[function(require,module,exports){
    // 7.1.15 ToLength
    var toInteger = require('./_to-integer');
    var min = Math.min;
    module.exports = function (it) {
      return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    };
    
    },{"./_to-integer":90}],93:[function(require,module,exports){
    // 7.1.13 ToObject(argument)
    var defined = require('./_defined');
    module.exports = function (it) {
      return Object(defined(it));
    };
    
    },{"./_defined":36}],94:[function(require,module,exports){
    // 7.1.1 ToPrimitive(input [, PreferredType])
    var isObject = require('./_is-object');
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    module.exports = function (it, S) {
      if (!isObject(it)) return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };
    
    },{"./_is-object":53}],95:[function(require,module,exports){
    var id = 0;
    var px = Math.random();
    module.exports = function (key) {
      return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };
    
    },{}],96:[function(require,module,exports){
    var global = require('./_global');
    var navigator = global.navigator;
    
    module.exports = navigator && navigator.userAgent || '';
    
    },{"./_global":44}],97:[function(require,module,exports){
    var global = require('./_global');
    var core = require('./_core');
    var LIBRARY = require('./_library');
    var wksExt = require('./_wks-ext');
    var defineProperty = require('./_object-dp').f;
    module.exports = function (name) {
      var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
      if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
    };
    
    },{"./_core":34,"./_global":44,"./_library":60,"./_object-dp":65,"./_wks-ext":98}],98:[function(require,module,exports){
    exports.f = require('./_wks');
    
    },{"./_wks":99}],99:[function(require,module,exports){
    var store = require('./_shared')('wks');
    var uid = require('./_uid');
    var Symbol = require('./_global').Symbol;
    var USE_SYMBOL = typeof Symbol == 'function';
    
    var $exports = module.exports = function (name) {
      return store[name] || (store[name] =
        USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
    };
    
    $exports.store = store;
    
    },{"./_global":44,"./_shared":85,"./_uid":95}],100:[function(require,module,exports){
    var classof = require('./_classof');
    var ITERATOR = require('./_wks')('iterator');
    var Iterators = require('./_iterators');
    module.exports = require('./_core').getIteratorMethod = function (it) {
      if (it != undefined) return it[ITERATOR]
        || it['@@iterator']
        || Iterators[classof(it)];
    };
    
    },{"./_classof":32,"./_core":34,"./_iterators":59,"./_wks":99}],101:[function(require,module,exports){
    'use strict';
    var addToUnscopables = require('./_add-to-unscopables');
    var step = require('./_iter-step');
    var Iterators = require('./_iterators');
    var toIObject = require('./_to-iobject');
    
    // 22.1.3.4 Array.prototype.entries()
    // 22.1.3.13 Array.prototype.keys()
    // 22.1.3.29 Array.prototype.values()
    // 22.1.3.30 Array.prototype[@@iterator]()
    module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
      this._t = toIObject(iterated); // target
      this._i = 0;                   // next index
      this._k = kind;                // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
    }, function () {
      var O = this._t;
      var kind = this._k;
      var index = this._i++;
      if (!O || index >= O.length) {
        this._t = undefined;
        return step(1);
      }
      if (kind == 'keys') return step(0, index);
      if (kind == 'values') return step(0, O[index]);
      return step(0, [index, O[index]]);
    }, 'values');
    
    // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
    Iterators.Arguments = Iterators.Array;
    
    addToUnscopables('keys');
    addToUnscopables('values');
    addToUnscopables('entries');
    
    },{"./_add-to-unscopables":28,"./_iter-define":56,"./_iter-step":58,"./_iterators":59,"./_to-iobject":91}],102:[function(require,module,exports){
    var $export = require('./_export');
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    $export($export.S, 'Object', { create: require('./_object-create') });
    
    },{"./_export":41,"./_object-create":64}],103:[function(require,module,exports){
    var $export = require('./_export');
    // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
    $export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });
    
    },{"./_descriptors":37,"./_export":41,"./_object-dp":65}],104:[function(require,module,exports){
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    var toIObject = require('./_to-iobject');
    var $getOwnPropertyDescriptor = require('./_object-gopd').f;
    
    require('./_object-sap')('getOwnPropertyDescriptor', function () {
      return function getOwnPropertyDescriptor(it, key) {
        return $getOwnPropertyDescriptor(toIObject(it), key);
      };
    });
    
    },{"./_object-gopd":67,"./_object-sap":75,"./_to-iobject":91}],105:[function(require,module,exports){
    // 19.1.2.9 Object.getPrototypeOf(O)
    var toObject = require('./_to-object');
    var $getPrototypeOf = require('./_object-gpo');
    
    require('./_object-sap')('getPrototypeOf', function () {
      return function getPrototypeOf(it) {
        return $getPrototypeOf(toObject(it));
      };
    });
    
    },{"./_object-gpo":71,"./_object-sap":75,"./_to-object":93}],106:[function(require,module,exports){
    // 19.1.3.19 Object.setPrototypeOf(O, proto)
    var $export = require('./_export');
    $export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });
    
    },{"./_export":41,"./_set-proto":81}],107:[function(require,module,exports){
    
    },{}],108:[function(require,module,exports){
    'use strict';
    var LIBRARY = require('./_library');
    var global = require('./_global');
    var ctx = require('./_ctx');
    var classof = require('./_classof');
    var $export = require('./_export');
    var isObject = require('./_is-object');
    var aFunction = require('./_a-function');
    var anInstance = require('./_an-instance');
    var forOf = require('./_for-of');
    var speciesConstructor = require('./_species-constructor');
    var task = require('./_task').set;
    var microtask = require('./_microtask')();
    var newPromiseCapabilityModule = require('./_new-promise-capability');
    var perform = require('./_perform');
    var userAgent = require('./_user-agent');
    var promiseResolve = require('./_promise-resolve');
    var PROMISE = 'Promise';
    var TypeError = global.TypeError;
    var process = global.process;
    var versions = process && process.versions;
    var v8 = versions && versions.v8 || '';
    var $Promise = global[PROMISE];
    var isNode = classof(process) == 'process';
    var empty = function () { /* empty */ };
    var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
    var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
    
    var USE_NATIVE = !!function () {
      try {
        // correct subclassing with @@species support
        var promise = $Promise.resolve(1);
        var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
          exec(empty, empty);
        };
        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        return (isNode || typeof PromiseRejectionEvent == 'function')
          && promise.then(empty) instanceof FakePromise
          // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
          // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
          // we can't detect it synchronously, so just check versions
          && v8.indexOf('6.6') !== 0
          && userAgent.indexOf('Chrome/66') === -1;
      } catch (e) { /* empty */ }
    }();
    
    // helpers
    var isThenable = function (it) {
      var then;
      return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
    };
    var notify = function (promise, isReject) {
      if (promise._n) return;
      promise._n = true;
      var chain = promise._c;
      microtask(function () {
        var value = promise._v;
        var ok = promise._s == 1;
        var i = 0;
        var run = function (reaction) {
          var handler = ok ? reaction.ok : reaction.fail;
          var resolve = reaction.resolve;
          var reject = reaction.reject;
          var domain = reaction.domain;
          var result, then, exited;
          try {
            if (handler) {
              if (!ok) {
                if (promise._h == 2) onHandleUnhandled(promise);
                promise._h = 1;
              }
              if (handler === true) result = value;
              else {
                if (domain) domain.enter();
                result = handler(value); // may throw
                if (domain) {
                  domain.exit();
                  exited = true;
                }
              }
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else resolve(result);
            } else reject(value);
          } catch (e) {
            if (domain && !exited) domain.exit();
            reject(e);
          }
        };
        while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
        promise._c = [];
        promise._n = false;
        if (isReject && !promise._h) onUnhandled(promise);
      });
    };
    var onUnhandled = function (promise) {
      task.call(global, function () {
        var value = promise._v;
        var unhandled = isUnhandled(promise);
        var result, handler, console;
        if (unhandled) {
          result = perform(function () {
            if (isNode) {
              process.emit('unhandledRejection', value, promise);
            } else if (handler = global.onunhandledrejection) {
              handler({ promise: promise, reason: value });
            } else if ((console = global.console) && console.error) {
              console.error('Unhandled promise rejection', value);
            }
          });
          // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
          promise._h = isNode || isUnhandled(promise) ? 2 : 1;
        } promise._a = undefined;
        if (unhandled && result.e) throw result.v;
      });
    };
    var isUnhandled = function (promise) {
      return promise._h !== 1 && (promise._a || promise._c).length === 0;
    };
    var onHandleUnhandled = function (promise) {
      task.call(global, function () {
        var handler;
        if (isNode) {
          process.emit('rejectionHandled', promise);
        } else if (handler = global.onrejectionhandled) {
          handler({ promise: promise, reason: promise._v });
        }
      });
    };
    var $reject = function (value) {
      var promise = this;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise; // unwrap
      promise._v = value;
      promise._s = 2;
      if (!promise._a) promise._a = promise._c.slice();
      notify(promise, true);
    };
    var $resolve = function (value) {
      var promise = this;
      var then;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise; // unwrap
      try {
        if (promise === value) throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          microtask(function () {
            var wrapper = { _w: promise, _d: false }; // wrap
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          promise._v = value;
          promise._s = 1;
          notify(promise, false);
        }
      } catch (e) {
        $reject.call({ _w: promise, _d: false }, e); // wrap
      }
    };
    
    // constructor polyfill
    if (!USE_NATIVE) {
      // 25.4.3.1 Promise(executor)
      $Promise = function Promise(executor) {
        anInstance(this, $Promise, PROMISE, '_h');
        aFunction(executor);
        Internal.call(this);
        try {
          executor(ctx($resolve, this, 1), ctx($reject, this, 1));
        } catch (err) {
          $reject.call(this, err);
        }
      };
      // eslint-disable-next-line no-unused-vars
      Internal = function Promise(executor) {
        this._c = [];             // <- awaiting reactions
        this._a = undefined;      // <- checked in isUnhandled reactions
        this._s = 0;              // <- state
        this._d = false;          // <- done
        this._v = undefined;      // <- value
        this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
        this._n = false;          // <- notify
      };
      Internal.prototype = require('./_redefine-all')($Promise.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function then(onFulfilled, onRejected) {
          var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          reaction.domain = isNode ? process.domain : undefined;
          this._c.push(reaction);
          if (this._a) this._a.push(reaction);
          if (this._s) notify(this, false);
          return reaction.promise;
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        'catch': function (onRejected) {
          return this.then(undefined, onRejected);
        }
      });
      OwnPromiseCapability = function () {
        var promise = new Internal();
        this.promise = promise;
        this.resolve = ctx($resolve, promise, 1);
        this.reject = ctx($reject, promise, 1);
      };
      newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
        return C === $Promise || C === Wrapper
          ? new OwnPromiseCapability(C)
          : newGenericPromiseCapability(C);
      };
    }
    
    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
    require('./_set-to-string-tag')($Promise, PROMISE);
    require('./_set-species')(PROMISE);
    Wrapper = require('./_core')[PROMISE];
    
    // statics
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
      // 25.4.4.5 Promise.reject(r)
      reject: function reject(r) {
        var capability = newPromiseCapability(this);
        var $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }
    });
    $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
      // 25.4.4.6 Promise.resolve(x)
      resolve: function resolve(x) {
        return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
      }
    });
    $export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
      $Promise.all(iter)['catch'](empty);
    })), PROMISE, {
      // 25.4.4.1 Promise.all(iterable)
      all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function () {
          var values = [];
          var index = 0;
          var remaining = 1;
          forOf(iterable, false, function (promise) {
            var $index = index++;
            var alreadyCalled = false;
            values.push(undefined);
            remaining++;
            C.resolve(promise).then(function (value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              values[$index] = value;
              --remaining || resolve(values);
            }, reject);
          });
          --remaining || resolve(values);
        });
        if (result.e) reject(result.v);
        return capability.promise;
      },
      // 25.4.4.4 Promise.race(iterable)
      race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var reject = capability.reject;
        var result = perform(function () {
          forOf(iterable, false, function (promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (result.e) reject(result.v);
        return capability.promise;
      }
    });
    
    },{"./_a-function":27,"./_an-instance":29,"./_classof":32,"./_core":34,"./_ctx":35,"./_export":41,"./_for-of":43,"./_global":44,"./_is-object":53,"./_iter-detect":57,"./_library":60,"./_microtask":62,"./_new-promise-capability":63,"./_perform":76,"./_promise-resolve":77,"./_redefine-all":79,"./_set-species":82,"./_set-to-string-tag":83,"./_species-constructor":86,"./_task":88,"./_user-agent":96,"./_wks":99}],109:[function(require,module,exports){
    'use strict';
    var $at = require('./_string-at')(true);
    
    // 21.1.3.27 String.prototype[@@iterator]()
    require('./_iter-define')(String, 'String', function (iterated) {
      this._t = String(iterated); // target
      this._i = 0;                // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
    }, function () {
      var O = this._t;
      var index = this._i;
      var point;
      if (index >= O.length) return { value: undefined, done: true };
      point = $at(O, index);
      this._i += point.length;
      return { value: point, done: false };
    });
    
    },{"./_iter-define":56,"./_string-at":87}],110:[function(require,module,exports){
    'use strict';
    // ECMAScript 6 symbols shim
    var global = require('./_global');
    var has = require('./_has');
    var DESCRIPTORS = require('./_descriptors');
    var $export = require('./_export');
    var redefine = require('./_redefine');
    var META = require('./_meta').KEY;
    var $fails = require('./_fails');
    var shared = require('./_shared');
    var setToStringTag = require('./_set-to-string-tag');
    var uid = require('./_uid');
    var wks = require('./_wks');
    var wksExt = require('./_wks-ext');
    var wksDefine = require('./_wks-define');
    var enumKeys = require('./_enum-keys');
    var isArray = require('./_is-array');
    var anObject = require('./_an-object');
    var isObject = require('./_is-object');
    var toObject = require('./_to-object');
    var toIObject = require('./_to-iobject');
    var toPrimitive = require('./_to-primitive');
    var createDesc = require('./_property-desc');
    var _create = require('./_object-create');
    var gOPNExt = require('./_object-gopn-ext');
    var $GOPD = require('./_object-gopd');
    var $GOPS = require('./_object-gops');
    var $DP = require('./_object-dp');
    var $keys = require('./_object-keys');
    var gOPD = $GOPD.f;
    var dP = $DP.f;
    var gOPN = gOPNExt.f;
    var $Symbol = global.Symbol;
    var $JSON = global.JSON;
    var _stringify = $JSON && $JSON.stringify;
    var PROTOTYPE = 'prototype';
    var HIDDEN = wks('_hidden');
    var TO_PRIMITIVE = wks('toPrimitive');
    var isEnum = {}.propertyIsEnumerable;
    var SymbolRegistry = shared('symbol-registry');
    var AllSymbols = shared('symbols');
    var OPSymbols = shared('op-symbols');
    var ObjectProto = Object[PROTOTYPE];
    var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
    var QObject = global.QObject;
    // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
    var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
    
    // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    var setSymbolDesc = DESCRIPTORS && $fails(function () {
      return _create(dP({}, 'a', {
        get: function () { return dP(this, 'a', { value: 7 }).a; }
      })).a != 7;
    }) ? function (it, key, D) {
      var protoDesc = gOPD(ObjectProto, key);
      if (protoDesc) delete ObjectProto[key];
      dP(it, key, D);
      if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
    } : dP;
    
    var wrap = function (tag) {
      var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
      sym._k = tag;
      return sym;
    };
    
    var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
      return typeof it == 'symbol';
    } : function (it) {
      return it instanceof $Symbol;
    };
    
    var $defineProperty = function defineProperty(it, key, D) {
      if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
      anObject(it);
      key = toPrimitive(key, true);
      anObject(D);
      if (has(AllSymbols, key)) {
        if (!D.enumerable) {
          if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
          it[HIDDEN][key] = true;
        } else {
          if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
          D = _create(D, { enumerable: createDesc(0, false) });
        } return setSymbolDesc(it, key, D);
      } return dP(it, key, D);
    };
    var $defineProperties = function defineProperties(it, P) {
      anObject(it);
      var keys = enumKeys(P = toIObject(P));
      var i = 0;
      var l = keys.length;
      var key;
      while (l > i) $defineProperty(it, key = keys[i++], P[key]);
      return it;
    };
    var $create = function create(it, P) {
      return P === undefined ? _create(it) : $defineProperties(_create(it), P);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(key) {
      var E = isEnum.call(this, key = toPrimitive(key, true));
      if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
      return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
      it = toIObject(it);
      key = toPrimitive(key, true);
      if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
      var D = gOPD(it, key);
      if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
      return D;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames(it) {
      var names = gOPN(toIObject(it));
      var result = [];
      var i = 0;
      var key;
      while (names.length > i) {
        if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
      } return result;
    };
    var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
      var IS_OP = it === ObjectProto;
      var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
      var result = [];
      var i = 0;
      var key;
      while (names.length > i) {
        if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
      } return result;
    };
    
    // 19.4.1.1 Symbol([description])
    if (!USE_NATIVE) {
      $Symbol = function Symbol() {
        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
        var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
        var $set = function (value) {
          if (this === ObjectProto) $set.call(OPSymbols, value);
          if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
          setSymbolDesc(this, tag, createDesc(1, value));
        };
        if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
        return wrap(tag);
      };
      redefine($Symbol[PROTOTYPE], 'toString', function toString() {
        return this._k;
      });
    
      $GOPD.f = $getOwnPropertyDescriptor;
      $DP.f = $defineProperty;
      require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
      require('./_object-pie').f = $propertyIsEnumerable;
      $GOPS.f = $getOwnPropertySymbols;
    
      if (DESCRIPTORS && !require('./_library')) {
        redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
      }
    
      wksExt.f = function (name) {
        return wrap(wks(name));
      };
    }
    
    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
    
    for (var es6Symbols = (
      // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
      'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
    ).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
    
    for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
    
    $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
      // 19.4.2.1 Symbol.for(key)
      'for': function (key) {
        return has(SymbolRegistry, key += '')
          ? SymbolRegistry[key]
          : SymbolRegistry[key] = $Symbol(key);
      },
      // 19.4.2.5 Symbol.keyFor(sym)
      keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
        for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
      },
      useSetter: function () { setter = true; },
      useSimple: function () { setter = false; }
    });
    
    $export($export.S + $export.F * !USE_NATIVE, 'Object', {
      // 19.1.2.2 Object.create(O [, Properties])
      create: $create,
      // 19.1.2.4 Object.defineProperty(O, P, Attributes)
      defineProperty: $defineProperty,
      // 19.1.2.3 Object.defineProperties(O, Properties)
      defineProperties: $defineProperties,
      // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
      // 19.1.2.7 Object.getOwnPropertyNames(O)
      getOwnPropertyNames: $getOwnPropertyNames,
      // 19.1.2.8 Object.getOwnPropertySymbols(O)
      getOwnPropertySymbols: $getOwnPropertySymbols
    });
    
    // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
    // https://bugs.chromium.org/p/v8/issues/detail?id=3443
    var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });
    
    $export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
      getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        return $GOPS.f(toObject(it));
      }
    });
    
    // 24.3.2 JSON.stringify(value [, replacer [, space]])
    $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
      var S = $Symbol();
      // MS Edge converts symbol values to JSON as {}
      // WebKit converts symbol values to JSON as null
      // V8 throws on boxed symbols
      return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
    })), 'JSON', {
      stringify: function stringify(it) {
        var args = [it];
        var i = 1;
        var replacer, $replacer;
        while (arguments.length > i) args.push(arguments[i++]);
        $replacer = replacer = args[1];
        if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
        if (!isArray(replacer)) replacer = function (key, value) {
          if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
          if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      }
    });
    
    // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
    $Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
    // 19.4.3.5 Symbol.prototype[@@toStringTag]
    setToStringTag($Symbol, 'Symbol');
    // 20.2.1.9 Math[@@toStringTag]
    setToStringTag(Math, 'Math', true);
    // 24.3.3 JSON[@@toStringTag]
    setToStringTag(global.JSON, 'JSON', true);
    
    },{"./_an-object":30,"./_descriptors":37,"./_enum-keys":40,"./_export":41,"./_fails":42,"./_global":44,"./_has":45,"./_hide":46,"./_is-array":52,"./_is-object":53,"./_library":60,"./_meta":61,"./_object-create":64,"./_object-dp":65,"./_object-gopd":67,"./_object-gopn":69,"./_object-gopn-ext":68,"./_object-gops":70,"./_object-keys":73,"./_object-pie":74,"./_property-desc":78,"./_redefine":80,"./_set-to-string-tag":83,"./_shared":85,"./_to-iobject":91,"./_to-object":93,"./_to-primitive":94,"./_uid":95,"./_wks":99,"./_wks-define":97,"./_wks-ext":98}],111:[function(require,module,exports){
    // https://github.com/tc39/proposal-promise-finally
    'use strict';
    var $export = require('./_export');
    var core = require('./_core');
    var global = require('./_global');
    var speciesConstructor = require('./_species-constructor');
    var promiseResolve = require('./_promise-resolve');
    
    $export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
      var C = speciesConstructor(this, core.Promise || global.Promise);
      var isFunction = typeof onFinally == 'function';
      return this.then(
        isFunction ? function (x) {
          return promiseResolve(C, onFinally()).then(function () { return x; });
        } : onFinally,
        isFunction ? function (e) {
          return promiseResolve(C, onFinally()).then(function () { throw e; });
        } : onFinally
      );
    } });
    
    },{"./_core":34,"./_export":41,"./_global":44,"./_promise-resolve":77,"./_species-constructor":86}],112:[function(require,module,exports){
    'use strict';
    // https://github.com/tc39/proposal-promise-try
    var $export = require('./_export');
    var newPromiseCapability = require('./_new-promise-capability');
    var perform = require('./_perform');
    
    $export($export.S, 'Promise', { 'try': function (callbackfn) {
      var promiseCapability = newPromiseCapability.f(this);
      var result = perform(callbackfn);
      (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
      return promiseCapability.promise;
    } });
    
    },{"./_export":41,"./_new-promise-capability":63,"./_perform":76}],113:[function(require,module,exports){
    require('./_wks-define')('asyncIterator');
    
    },{"./_wks-define":97}],114:[function(require,module,exports){
    require('./_wks-define')('observable');
    
    },{"./_wks-define":97}],115:[function(require,module,exports){
    require('./es6.array.iterator');
    var global = require('./_global');
    var hide = require('./_hide');
    var Iterators = require('./_iterators');
    var TO_STRING_TAG = require('./_wks')('toStringTag');
    
    var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
      'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
      'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
      'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
      'TextTrackList,TouchList').split(',');
    
    for (var i = 0; i < DOMIterables.length; i++) {
      var NAME = DOMIterables[i];
      var Collection = global[NAME];
      var proto = Collection && Collection.prototype;
      if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
      Iterators[NAME] = Iterators.Array;
    }
    
    },{"./_global":44,"./_hide":46,"./_iterators":59,"./_wks":99,"./es6.array.iterator":101}],116:[function(require,module,exports){
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    
    // This method of obtaining a reference to the global object needs to be
    // kept identical to the way it is obtained in runtime.js
    var g = (function() { return this })() || Function("return this")();
    
    // Use `getOwnPropertyNames` because not all browsers support calling
    // `hasOwnProperty` on the global `self` object in a worker. See #183.
    var hadRuntime = g.regeneratorRuntime &&
      Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
    
    // Save the old regeneratorRuntime in case it needs to be restored later.
    var oldRuntime = hadRuntime && g.regeneratorRuntime;
    
    // Force reevalutation of runtime.js.
    g.regeneratorRuntime = undefined;
    
    module.exports = require("./runtime");
    
    if (hadRuntime) {
      // Restore the original runtime.
      g.regeneratorRuntime = oldRuntime;
    } else {
      // Remove the global property added by runtime.js.
      try {
        delete g.regeneratorRuntime;
      } catch(e) {
        g.regeneratorRuntime = undefined;
      }
    }
    
    },{"./runtime":117}],117:[function(require,module,exports){
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    
    !(function(global) {
      "use strict";
    
      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined; // More compressible than void 0.
      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    
      var inModule = typeof module === "object";
      var runtime = global.regeneratorRuntime;
      if (runtime) {
        if (inModule) {
          // If regeneratorRuntime is defined globally and we're in a module,
          // make the exports object identical to regeneratorRuntime.
          module.exports = runtime;
        }
        // Don't bother evaluating the rest of this file if the runtime was
        // already defined globally.
        return;
      }
    
      // Define the runtime globally (as expected by generated code) as either
      // module.exports (if we're in a module) or a new, empty object.
      runtime = global.regeneratorRuntime = inModule ? module.exports : {};
    
      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
    
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
    
        return generator;
      }
      runtime.wrap = wrap;
    
      // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.
      function tryCatch(fn, obj, arg) {
        try {
          return { type: "normal", arg: fn.call(obj, arg) };
        } catch (err) {
          return { type: "throw", arg: err };
        }
      }
    
      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";
    
      // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.
      var ContinueSentinel = {};
    
      // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}
    
      // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.
      var IteratorPrototype = {};
      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };
    
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }
    
      var Gp = GeneratorFunctionPrototype.prototype =
        Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunctionPrototype[toStringTagSymbol] =
        GeneratorFunction.displayName = "GeneratorFunction";
    
      // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
          prototype[method] = function(arg) {
            return this._invoke(method, arg);
          };
        });
      }
    
      runtime.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor
          ? ctor === GeneratorFunction ||
            // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction"
          : false;
      };
    
      runtime.mark = function(genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          if (!(toStringTagSymbol in genFun)) {
            genFun[toStringTagSymbol] = "GeneratorFunction";
          }
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
      };
    
      // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.
      runtime.awrap = function(arg) {
        return { __await: arg };
      };
    
      function AsyncIterator(generator) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            if (value &&
                typeof value === "object" &&
                hasOwn.call(value, "__await")) {
              return Promise.resolve(value.__await).then(function(value) {
                invoke("next", value, resolve, reject);
              }, function(err) {
                invoke("throw", err, resolve, reject);
              });
            }
    
            return Promise.resolve(value).then(function(unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration. If the Promise is rejected, however, the
              // result for this iteration will be rejected with the same
              // reason. Note that rejections of yielded Promises are not
              // thrown back into the generator function, as is the case
              // when an awaited Promise is rejected. This difference in
              // behavior between yield and await is important, because it
              // allows the consumer to decide what to do with the yielded
              // rejection (swallow it and continue, manually .throw it back
              // into the generator, abandon iteration, whatever). With
              // await, by contrast, there is no opportunity to examine the
              // rejection reason outside the generator function, so the
              // only option is to throw it from the await expression, and
              // let the generator function handle the exception.
              result.value = unwrapped;
              resolve(result);
            }, reject);
          }
        }
    
        var previousPromise;
    
        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new Promise(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
    
          return previousPromise =
            // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(
              callInvokeWithMethodAndArg,
              // Avoid propagating failures to Promises returned by later
              // invocations of the iterator.
              callInvokeWithMethodAndArg
            ) : callInvokeWithMethodAndArg();
        }
    
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
      }
    
      defineIteratorMethods(AsyncIterator.prototype);
      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };
      runtime.AsyncIterator = AsyncIterator;
    
      // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.
      runtime.async = function(innerFn, outerFn, self, tryLocsList) {
        var iter = new AsyncIterator(
          wrap(innerFn, outerFn, self, tryLocsList)
        );
    
        return runtime.isGeneratorFunction(outerFn)
          ? iter // If outerFn is a generator, return the full iterator.
          : iter.next().then(function(result) {
              return result.done ? result.value : iter.next();
            });
      };
    
      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
    
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }
    
          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            }
    
            // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
            return doneResult();
          }
    
          context.method = method;
          context.arg = arg;
    
          while (true) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }
    
            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
    
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }
    
              context.dispatchException(context.arg);
    
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }
    
            state = GenStateExecuting;
    
            var record = tryCatch(innerFn, self, context);
            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done
                ? GenStateCompleted
                : GenStateSuspendedYield;
    
              if (record.arg === ContinueSentinel) {
                continue;
              }
    
              return {
                value: record.arg,
                done: context.done
              };
    
            } else if (record.type === "throw") {
              state = GenStateCompleted;
              // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      }
    
      // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.
      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;
    
          if (context.method === "throw") {
            if (delegate.iterator.return) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined;
              maybeInvokeDelegate(delegate, context);
    
              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }
    
            context.method = "throw";
            context.arg = new TypeError(
              "The iterator does not provide a 'throw' method");
          }
    
          return ContinueSentinel;
        }
    
        var record = tryCatch(method, delegate.iterator, context.arg);
    
        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }
    
        var info = record.arg;
    
        if (! info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }
    
        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value;
    
          // Resume execution at the desired location (see delegateYield).
          context.next = delegate.nextLoc;
    
          // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.
          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined;
          }
    
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        }
    
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
      }
    
      // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.
      defineIteratorMethods(Gp);
    
      Gp[toStringTagSymbol] = "Generator";
    
      // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.
      Gp[iteratorSymbol] = function() {
        return this;
      };
    
      Gp.toString = function() {
        return "[object Generator]";
      };
    
      function pushTryEntry(locs) {
        var entry = { tryLoc: locs[0] };
    
        if (1 in locs) {
          entry.catchLoc = locs[1];
        }
    
        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }
    
        this.tryEntries.push(entry);
      }
    
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }
    
      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{ tryLoc: "root" }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }
    
      runtime.keys = function(object) {
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        keys.reverse();
    
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
          while (keys.length) {
            var key = keys.pop();
            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          }
    
          // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.
          next.done = true;
          return next;
        };
      };
    
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }
    
          if (typeof iterable.next === "function") {
            return iterable;
          }
    
          if (!isNaN(iterable.length)) {
            var i = -1, next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }
    
              next.value = undefined;
              next.done = true;
    
              return next;
            };
    
            return next.next = next;
          }
        }
    
        // Return an iterator with no values.
        return { next: doneResult };
      }
      runtime.values = values;
    
      function doneResult() {
        return { value: undefined, done: true };
      }
    
      Context.prototype = {
        constructor: Context,
    
        reset: function(skipTempReset) {
          this.prev = 0;
          this.next = 0;
          // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.
          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;
    
          this.method = "next";
          this.arg = undefined;
    
          this.tryEntries.forEach(resetTryEntry);
    
          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" &&
                  hasOwn.call(this, name) &&
                  !isNaN(+name.slice(1))) {
                this[name] = undefined;
              }
            }
          }
        },
    
        stop: function() {
          this.done = true;
    
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }
    
          return this.rval;
        },
    
        dispatchException: function(exception) {
          if (this.done) {
            throw exception;
          }
    
          var context = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;
    
            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined;
            }
    
            return !! caught;
          }
    
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;
    
            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }
    
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");
    
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
    
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
    
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
    
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
    
        abrupt: function(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev &&
                hasOwn.call(entry, "finallyLoc") &&
                this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
    
          if (finallyEntry &&
              (type === "break" ||
               type === "continue") &&
              finallyEntry.tryLoc <= arg &&
              arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }
    
          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;
    
          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }
    
          return this.complete(record);
        },
    
        complete: function(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }
    
          if (record.type === "break" ||
              record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }
    
          return ContinueSentinel;
        },
    
        finish: function(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
    
        "catch": function(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
    
          // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.
          throw new Error("illegal catch attempt");
        },
    
        delegateYield: function(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };
    
          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
          }
    
          return ContinueSentinel;
        }
      };
    })(
      // In sloppy mode, unbound `this` refers to the global object, fallback to
      // Function constructor if we're in global strict mode. That is sadly a form
      // of indirect eval which violates Content Security Policy.
      (function() { return this })() || Function("return this")()
    );
    
    },{}],118:[function(require,module,exports){
    /*
     *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    
    var SDPUtils = require('sdp');
    
    function fixStatsType(stat) {
      return {
        inboundrtp: 'inbound-rtp',
        outboundrtp: 'outbound-rtp',
        candidatepair: 'candidate-pair',
        localcandidate: 'local-candidate',
        remotecandidate: 'remote-candidate'
      }[stat.type] || stat.type;
    }
    
    function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
      var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);
    
      // Map ICE parameters (ufrag, pwd) to SDP.
      sdp += SDPUtils.writeIceParameters(
          transceiver.iceGatherer.getLocalParameters());
    
      // Map DTLS parameters to SDP.
      sdp += SDPUtils.writeDtlsParameters(
          transceiver.dtlsTransport.getLocalParameters(),
          type === 'offer' ? 'actpass' : dtlsRole || 'active');
    
      sdp += 'a=mid:' + transceiver.mid + '\r\n';
    
      if (transceiver.rtpSender && transceiver.rtpReceiver) {
        sdp += 'a=sendrecv\r\n';
      } else if (transceiver.rtpSender) {
        sdp += 'a=sendonly\r\n';
      } else if (transceiver.rtpReceiver) {
        sdp += 'a=recvonly\r\n';
      } else {
        sdp += 'a=inactive\r\n';
      }
    
      if (transceiver.rtpSender) {
        var trackId = transceiver.rtpSender._initialTrackId ||
            transceiver.rtpSender.track.id;
        transceiver.rtpSender._initialTrackId = trackId;
        // spec.
        var msid = 'msid:' + (stream ? stream.id : '-') + ' ' +
            trackId + '\r\n';
        sdp += 'a=' + msid;
        // for Chrome. Legacy should no longer be required.
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
            ' ' + msid;
    
        // RTX
        if (transceiver.sendEncodingParameters[0].rtx) {
          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
              ' ' + msid;
          sdp += 'a=ssrc-group:FID ' +
              transceiver.sendEncodingParameters[0].ssrc + ' ' +
              transceiver.sendEncodingParameters[0].rtx.ssrc +
              '\r\n';
        }
      }
      // FIXME: this should be written by writeRtpDescription.
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
          ' cname:' + SDPUtils.localCName + '\r\n';
      if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
            ' cname:' + SDPUtils.localCName + '\r\n';
      }
      return sdp;
    }
    
    // Edge does not like
    // 1) stun: filtered after 14393 unless ?transport=udp is present
    // 2) turn: that does not have all of turn:host:port?transport=udp
    // 3) turn: with ipv6 addresses
    // 4) turn: occurring muliple times
    function filterIceServers(iceServers, edgeVersion) {
      var hasTurn = false;
      iceServers = JSON.parse(JSON.stringify(iceServers));
      return iceServers.filter(function(server) {
        if (server && (server.urls || server.url)) {
          var urls = server.urls || server.url;
          if (server.url && !server.urls) {
            console.warn('RTCIceServer.url is deprecated! Use urls instead.');
          }
          var isString = typeof urls === 'string';
          if (isString) {
            urls = [urls];
          }
          urls = urls.filter(function(url) {
            var validTurn = url.indexOf('turn:') === 0 &&
                url.indexOf('transport=udp') !== -1 &&
                url.indexOf('turn:[') === -1 &&
                !hasTurn;
    
            if (validTurn) {
              hasTurn = true;
              return true;
            }
            return url.indexOf('stun:') === 0 && edgeVersion >= 14393 &&
                url.indexOf('?transport=udp') === -1;
          });
    
          delete server.url;
          server.urls = isString ? urls[0] : urls;
          return !!urls.length;
        }
      });
    }
    
    // Determines the intersection of local and remote capabilities.
    function getCommonCapabilities(localCapabilities, remoteCapabilities) {
      var commonCapabilities = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: []
      };
    
      var findCodecByPayloadType = function(pt, codecs) {
        pt = parseInt(pt, 10);
        for (var i = 0; i < codecs.length; i++) {
          if (codecs[i].payloadType === pt ||
              codecs[i].preferredPayloadType === pt) {
            return codecs[i];
          }
        }
      };
    
      var rtxCapabilityMatches = function(lRtx, rRtx, lCodecs, rCodecs) {
        var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
        var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
        return lCodec && rCodec &&
            lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
      };
    
      localCapabilities.codecs.forEach(function(lCodec) {
        for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
          var rCodec = remoteCapabilities.codecs[i];
          if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
              lCodec.clockRate === rCodec.clockRate) {
            if (lCodec.name.toLowerCase() === 'rtx' &&
                lCodec.parameters && rCodec.parameters.apt) {
              // for RTX we need to find the local rtx that has a apt
              // which points to the same local codec as the remote one.
              if (!rtxCapabilityMatches(lCodec, rCodec,
                  localCapabilities.codecs, remoteCapabilities.codecs)) {
                continue;
              }
            }
            rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
            // number of channels is the highest common number of channels
            rCodec.numChannels = Math.min(lCodec.numChannels,
                rCodec.numChannels);
            // push rCodec so we reply with offerer payload type
            commonCapabilities.codecs.push(rCodec);
    
            // determine common feedback mechanisms
            rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
              for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
                if (lCodec.rtcpFeedback[j].type === fb.type &&
                    lCodec.rtcpFeedback[j].parameter === fb.parameter) {
                  return true;
                }
              }
              return false;
            });
            // FIXME: also need to determine .parameters
            //  see https://github.com/openpeer/ortc/issues/569
            break;
          }
        }
      });
    
      localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
        for (var i = 0; i < remoteCapabilities.headerExtensions.length;
             i++) {
          var rHeaderExtension = remoteCapabilities.headerExtensions[i];
          if (lHeaderExtension.uri === rHeaderExtension.uri) {
            commonCapabilities.headerExtensions.push(rHeaderExtension);
            break;
          }
        }
      });
    
      // FIXME: fecMechanisms
      return commonCapabilities;
    }
    
    // is action=setLocalDescription with type allowed in signalingState
    function isActionAllowedInSignalingState(action, type, signalingState) {
      return {
        offer: {
          setLocalDescription: ['stable', 'have-local-offer'],
          setRemoteDescription: ['stable', 'have-remote-offer']
        },
        answer: {
          setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
          setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
        }
      }[type][action].indexOf(signalingState) !== -1;
    }
    
    function maybeAddCandidate(iceTransport, candidate) {
      // Edge's internal representation adds some fields therefore
      // not all fieldѕ are taken into account.
      var alreadyAdded = iceTransport.getRemoteCandidates()
          .find(function(remoteCandidate) {
            return candidate.foundation === remoteCandidate.foundation &&
                candidate.ip === remoteCandidate.ip &&
                candidate.port === remoteCandidate.port &&
                candidate.priority === remoteCandidate.priority &&
                candidate.protocol === remoteCandidate.protocol &&
                candidate.type === remoteCandidate.type;
          });
      if (!alreadyAdded) {
        iceTransport.addRemoteCandidate(candidate);
      }
      return !alreadyAdded;
    }
    
    
    function makeError(name, description) {
      var e = new Error(description);
      e.name = name;
      // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names
      e.code = {
        NotSupportedError: 9,
        InvalidStateError: 11,
        InvalidAccessError: 15,
        TypeError: undefined,
        OperationError: undefined
      }[name];
      return e;
    }
    
    module.exports = function(window, edgeVersion) {
      // https://w3c.github.io/mediacapture-main/#mediastream
      // Helper function to add the track to the stream and
      // dispatch the event ourselves.
      function addTrackToStreamAndFireEvent(track, stream) {
        stream.addTrack(track);
        stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack',
            {track: track}));
      }
    
      function removeTrackFromStreamAndFireEvent(track, stream) {
        stream.removeTrack(track);
        stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack',
            {track: track}));
      }
    
      function fireAddTrack(pc, track, receiver, streams) {
        var trackEvent = new Event('track');
        trackEvent.track = track;
        trackEvent.receiver = receiver;
        trackEvent.transceiver = {receiver: receiver};
        trackEvent.streams = streams;
        window.setTimeout(function() {
          pc._dispatchEvent('track', trackEvent);
        });
      }
    
      var RTCPeerConnection = function(config) {
        var pc = this;
    
        var _eventTarget = document.createDocumentFragment();
        ['addEventListener', 'removeEventListener', 'dispatchEvent']
            .forEach(function(method) {
              pc[method] = _eventTarget[method].bind(_eventTarget);
            });
    
        this.canTrickleIceCandidates = null;
    
        this.needNegotiation = false;
    
        this.localStreams = [];
        this.remoteStreams = [];
    
        this._localDescription = null;
        this._remoteDescription = null;
    
        this.signalingState = 'stable';
        this.iceConnectionState = 'new';
        this.connectionState = 'new';
        this.iceGatheringState = 'new';
    
        config = JSON.parse(JSON.stringify(config || {}));
    
        this.usingBundle = config.bundlePolicy === 'max-bundle';
        if (config.rtcpMuxPolicy === 'negotiate') {
          throw(makeError('NotSupportedError',
              'rtcpMuxPolicy \'negotiate\' is not supported'));
        } else if (!config.rtcpMuxPolicy) {
          config.rtcpMuxPolicy = 'require';
        }
    
        switch (config.iceTransportPolicy) {
          case 'all':
          case 'relay':
            break;
          default:
            config.iceTransportPolicy = 'all';
            break;
        }
    
        switch (config.bundlePolicy) {
          case 'balanced':
          case 'max-compat':
          case 'max-bundle':
            break;
          default:
            config.bundlePolicy = 'balanced';
            break;
        }
    
        config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);
    
        this._iceGatherers = [];
        if (config.iceCandidatePoolSize) {
          for (var i = config.iceCandidatePoolSize; i > 0; i--) {
            this._iceGatherers.push(new window.RTCIceGatherer({
              iceServers: config.iceServers,
              gatherPolicy: config.iceTransportPolicy
            }));
          }
        } else {
          config.iceCandidatePoolSize = 0;
        }
    
        this._config = config;
    
        // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
        // everything that is needed to describe a SDP m-line.
        this.transceivers = [];
    
        this._sdpSessionId = SDPUtils.generateSessionId();
        this._sdpSessionVersion = 0;
    
        this._dtlsRole = undefined; // role for a=setup to use in answers.
    
        this._isClosed = false;
      };
    
      Object.defineProperty(RTCPeerConnection.prototype, 'localDescription', {
        configurable: true,
        get: function() {
          return this._localDescription;
        }
      });
      Object.defineProperty(RTCPeerConnection.prototype, 'remoteDescription', {
        configurable: true,
        get: function() {
          return this._remoteDescription;
        }
      });
    
      // set up event handlers on prototype
      RTCPeerConnection.prototype.onicecandidate = null;
      RTCPeerConnection.prototype.onaddstream = null;
      RTCPeerConnection.prototype.ontrack = null;
      RTCPeerConnection.prototype.onremovestream = null;
      RTCPeerConnection.prototype.onsignalingstatechange = null;
      RTCPeerConnection.prototype.oniceconnectionstatechange = null;
      RTCPeerConnection.prototype.onconnectionstatechange = null;
      RTCPeerConnection.prototype.onicegatheringstatechange = null;
      RTCPeerConnection.prototype.onnegotiationneeded = null;
      RTCPeerConnection.prototype.ondatachannel = null;
    
      RTCPeerConnection.prototype._dispatchEvent = function(name, event) {
        if (this._isClosed) {
          return;
        }
        this.dispatchEvent(event);
        if (typeof this['on' + name] === 'function') {
          this['on' + name](event);
        }
      };
    
      RTCPeerConnection.prototype._emitGatheringStateChange = function() {
        var event = new Event('icegatheringstatechange');
        this._dispatchEvent('icegatheringstatechange', event);
      };
    
      RTCPeerConnection.prototype.getConfiguration = function() {
        return this._config;
      };
    
      RTCPeerConnection.prototype.getLocalStreams = function() {
        return this.localStreams;
      };
    
      RTCPeerConnection.prototype.getRemoteStreams = function() {
        return this.remoteStreams;
      };
    
      // internal helper to create a transceiver object.
      // (which is not yet the same as the WebRTC 1.0 transceiver)
      RTCPeerConnection.prototype._createTransceiver = function(kind, doNotAdd) {
        var hasBundleTransport = this.transceivers.length > 0;
        var transceiver = {
          track: null,
          iceGatherer: null,
          iceTransport: null,
          dtlsTransport: null,
          localCapabilities: null,
          remoteCapabilities: null,
          rtpSender: null,
          rtpReceiver: null,
          kind: kind,
          mid: null,
          sendEncodingParameters: null,
          recvEncodingParameters: null,
          stream: null,
          associatedRemoteMediaStreams: [],
          wantReceive: true
        };
        if (this.usingBundle && hasBundleTransport) {
          transceiver.iceTransport = this.transceivers[0].iceTransport;
          transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
        } else {
          var transports = this._createIceAndDtlsTransports();
          transceiver.iceTransport = transports.iceTransport;
          transceiver.dtlsTransport = transports.dtlsTransport;
        }
        if (!doNotAdd) {
          this.transceivers.push(transceiver);
        }
        return transceiver;
      };
    
      RTCPeerConnection.prototype.addTrack = function(track, stream) {
        if (this._isClosed) {
          throw makeError('InvalidStateError',
              'Attempted to call addTrack on a closed peerconnection.');
        }
    
        var alreadyExists = this.transceivers.find(function(s) {
          return s.track === track;
        });
    
        if (alreadyExists) {
          throw makeError('InvalidAccessError', 'Track already exists.');
        }
    
        var transceiver;
        for (var i = 0; i < this.transceivers.length; i++) {
          if (!this.transceivers[i].track &&
              this.transceivers[i].kind === track.kind) {
            transceiver = this.transceivers[i];
          }
        }
        if (!transceiver) {
          transceiver = this._createTransceiver(track.kind);
        }
    
        this._maybeFireNegotiationNeeded();
    
        if (this.localStreams.indexOf(stream) === -1) {
          this.localStreams.push(stream);
        }
    
        transceiver.track = track;
        transceiver.stream = stream;
        transceiver.rtpSender = new window.RTCRtpSender(track,
            transceiver.dtlsTransport);
        return transceiver.rtpSender;
      };
    
      RTCPeerConnection.prototype.addStream = function(stream) {
        var pc = this;
        if (edgeVersion >= 15025) {
          stream.getTracks().forEach(function(track) {
            pc.addTrack(track, stream);
          });
        } else {
          // Clone is necessary for local demos mostly, attaching directly
          // to two different senders does not work (build 10547).
          // Fixed in 15025 (or earlier)
          var clonedStream = stream.clone();
          stream.getTracks().forEach(function(track, idx) {
            var clonedTrack = clonedStream.getTracks()[idx];
            track.addEventListener('enabled', function(event) {
              clonedTrack.enabled = event.enabled;
            });
          });
          clonedStream.getTracks().forEach(function(track) {
            pc.addTrack(track, clonedStream);
          });
        }
      };
    
      RTCPeerConnection.prototype.removeTrack = function(sender) {
        if (this._isClosed) {
          throw makeError('InvalidStateError',
              'Attempted to call removeTrack on a closed peerconnection.');
        }
    
        if (!(sender instanceof window.RTCRtpSender)) {
          throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' +
              'does not implement interface RTCRtpSender.');
        }
    
        var transceiver = this.transceivers.find(function(t) {
          return t.rtpSender === sender;
        });
    
        if (!transceiver) {
          throw makeError('InvalidAccessError',
              'Sender was not created by this connection.');
        }
        var stream = transceiver.stream;
    
        transceiver.rtpSender.stop();
        transceiver.rtpSender = null;
        transceiver.track = null;
        transceiver.stream = null;
    
        // remove the stream from the set of local streams
        var localStreams = this.transceivers.map(function(t) {
          return t.stream;
        });
        if (localStreams.indexOf(stream) === -1 &&
            this.localStreams.indexOf(stream) > -1) {
          this.localStreams.splice(this.localStreams.indexOf(stream), 1);
        }
    
        this._maybeFireNegotiationNeeded();
      };
    
      RTCPeerConnection.prototype.removeStream = function(stream) {
        var pc = this;
        stream.getTracks().forEach(function(track) {
          var sender = pc.getSenders().find(function(s) {
            return s.track === track;
          });
          if (sender) {
            pc.removeTrack(sender);
          }
        });
      };
    
      RTCPeerConnection.prototype.getSenders = function() {
        return this.transceivers.filter(function(transceiver) {
          return !!transceiver.rtpSender;
        })
        .map(function(transceiver) {
          return transceiver.rtpSender;
        });
      };
    
      RTCPeerConnection.prototype.getReceivers = function() {
        return this.transceivers.filter(function(transceiver) {
          return !!transceiver.rtpReceiver;
        })
        .map(function(transceiver) {
          return transceiver.rtpReceiver;
        });
      };
    
    
      RTCPeerConnection.prototype._createIceGatherer = function(sdpMLineIndex,
          usingBundle) {
        var pc = this;
        if (usingBundle && sdpMLineIndex > 0) {
          return this.transceivers[0].iceGatherer;
        } else if (this._iceGatherers.length) {
          return this._iceGatherers.shift();
        }
        var iceGatherer = new window.RTCIceGatherer({
          iceServers: this._config.iceServers,
          gatherPolicy: this._config.iceTransportPolicy
        });
        Object.defineProperty(iceGatherer, 'state',
            {value: 'new', writable: true}
        );
    
        this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
        this.transceivers[sdpMLineIndex].bufferCandidates = function(event) {
          var end = !event.candidate || Object.keys(event.candidate).length === 0;
          // polyfill since RTCIceGatherer.state is not implemented in
          // Edge 10547 yet.
          iceGatherer.state = end ? 'completed' : 'gathering';
          if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
            pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
          }
        };
        iceGatherer.addEventListener('localcandidate',
          this.transceivers[sdpMLineIndex].bufferCandidates);
        return iceGatherer;
      };
    
      // start gathering from an RTCIceGatherer.
      RTCPeerConnection.prototype._gather = function(mid, sdpMLineIndex) {
        var pc = this;
        var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
        if (iceGatherer.onlocalcandidate) {
          return;
        }
        var bufferedCandidateEvents =
          this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
        this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
        iceGatherer.removeEventListener('localcandidate',
          this.transceivers[sdpMLineIndex].bufferCandidates);
        iceGatherer.onlocalcandidate = function(evt) {
          if (pc.usingBundle && sdpMLineIndex > 0) {
            // if we know that we use bundle we can drop candidates with
            // ѕdpMLineIndex > 0. If we don't do this then our state gets
            // confused since we dispose the extra ice gatherer.
            return;
          }
          var event = new Event('icecandidate');
          event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};
    
          var cand = evt.candidate;
          // Edge emits an empty object for RTCIceCandidateComplete‥
          var end = !cand || Object.keys(cand).length === 0;
          if (end) {
            // polyfill since RTCIceGatherer.state is not implemented in
            // Edge 10547 yet.
            if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
              iceGatherer.state = 'completed';
            }
          } else {
            if (iceGatherer.state === 'new') {
              iceGatherer.state = 'gathering';
            }
            // RTCIceCandidate doesn't have a component, needs to be added
            cand.component = 1;
            // also the usernameFragment. TODO: update SDP to take both variants.
            cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;
    
            var serializedCandidate = SDPUtils.writeCandidate(cand);
            event.candidate = Object.assign(event.candidate,
                SDPUtils.parseCandidate(serializedCandidate));
    
            event.candidate.candidate = serializedCandidate;
            event.candidate.toJSON = function() {
              return {
                candidate: event.candidate.candidate,
                sdpMid: event.candidate.sdpMid,
                sdpMLineIndex: event.candidate.sdpMLineIndex,
                usernameFragment: event.candidate.usernameFragment
              };
            };
          }
    
          // update local description.
          var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);
          if (!end) {
            sections[event.candidate.sdpMLineIndex] +=
                'a=' + event.candidate.candidate + '\r\n';
          } else {
            sections[event.candidate.sdpMLineIndex] +=
                'a=end-of-candidates\r\n';
          }
          pc._localDescription.sdp =
              SDPUtils.getDescription(pc._localDescription.sdp) +
              sections.join('');
          var complete = pc.transceivers.every(function(transceiver) {
            return transceiver.iceGatherer &&
                transceiver.iceGatherer.state === 'completed';
          });
    
          if (pc.iceGatheringState !== 'gathering') {
            pc.iceGatheringState = 'gathering';
            pc._emitGatheringStateChange();
          }
    
          // Emit candidate. Also emit null candidate when all gatherers are
          // complete.
          if (!end) {
            pc._dispatchEvent('icecandidate', event);
          }
          if (complete) {
            pc._dispatchEvent('icecandidate', new Event('icecandidate'));
            pc.iceGatheringState = 'complete';
            pc._emitGatheringStateChange();
          }
        };
    
        // emit already gathered candidates.
        window.setTimeout(function() {
          bufferedCandidateEvents.forEach(function(e) {
            iceGatherer.onlocalcandidate(e);
          });
        }, 0);
      };
    
      // Create ICE transport and DTLS transport.
      RTCPeerConnection.prototype._createIceAndDtlsTransports = function() {
        var pc = this;
        var iceTransport = new window.RTCIceTransport(null);
        iceTransport.onicestatechange = function() {
          pc._updateIceConnectionState();
          pc._updateConnectionState();
        };
    
        var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
        dtlsTransport.ondtlsstatechange = function() {
          pc._updateConnectionState();
        };
        dtlsTransport.onerror = function() {
          // onerror does not set state to failed by itself.
          Object.defineProperty(dtlsTransport, 'state',
              {value: 'failed', writable: true});
          pc._updateConnectionState();
        };
    
        return {
          iceTransport: iceTransport,
          dtlsTransport: dtlsTransport
        };
      };
    
      // Destroy ICE gatherer, ICE transport and DTLS transport.
      // Without triggering the callbacks.
      RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function(
          sdpMLineIndex) {
        var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
        if (iceGatherer) {
          delete iceGatherer.onlocalcandidate;
          delete this.transceivers[sdpMLineIndex].iceGatherer;
        }
        var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
        if (iceTransport) {
          delete iceTransport.onicestatechange;
          delete this.transceivers[sdpMLineIndex].iceTransport;
        }
        var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
        if (dtlsTransport) {
          delete dtlsTransport.ondtlsstatechange;
          delete dtlsTransport.onerror;
          delete this.transceivers[sdpMLineIndex].dtlsTransport;
        }
      };
    
      // Start the RTP Sender and Receiver for a transceiver.
      RTCPeerConnection.prototype._transceive = function(transceiver,
          send, recv) {
        var params = getCommonCapabilities(transceiver.localCapabilities,
            transceiver.remoteCapabilities);
        if (send && transceiver.rtpSender) {
          params.encodings = transceiver.sendEncodingParameters;
          params.rtcp = {
            cname: SDPUtils.localCName,
            compound: transceiver.rtcpParameters.compound
          };
          if (transceiver.recvEncodingParameters.length) {
            params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
          }
          transceiver.rtpSender.send(params);
        }
        if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
          // remove RTX field in Edge 14942
          if (transceiver.kind === 'video'
              && transceiver.recvEncodingParameters
              && edgeVersion < 15019) {
            transceiver.recvEncodingParameters.forEach(function(p) {
              delete p.rtx;
            });
          }
          if (transceiver.recvEncodingParameters.length) {
            params.encodings = transceiver.recvEncodingParameters;
          } else {
            params.encodings = [{}];
          }
          params.rtcp = {
            compound: transceiver.rtcpParameters.compound
          };
          if (transceiver.rtcpParameters.cname) {
            params.rtcp.cname = transceiver.rtcpParameters.cname;
          }
          if (transceiver.sendEncodingParameters.length) {
            params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
          }
          transceiver.rtpReceiver.receive(params);
        }
      };
    
      RTCPeerConnection.prototype.setLocalDescription = function(description) {
        var pc = this;
    
        // Note: pranswer is not supported.
        if (['offer', 'answer'].indexOf(description.type) === -1) {
          return Promise.reject(makeError('TypeError',
              'Unsupported type "' + description.type + '"'));
        }
    
        if (!isActionAllowedInSignalingState('setLocalDescription',
            description.type, pc.signalingState) || pc._isClosed) {
          return Promise.reject(makeError('InvalidStateError',
              'Can not set local ' + description.type +
              ' in state ' + pc.signalingState));
        }
    
        var sections;
        var sessionpart;
        if (description.type === 'offer') {
          // VERY limited support for SDP munging. Limited to:
          // * changing the order of codecs
          sections = SDPUtils.splitSections(description.sdp);
          sessionpart = sections.shift();
          sections.forEach(function(mediaSection, sdpMLineIndex) {
            var caps = SDPUtils.parseRtpParameters(mediaSection);
            pc.transceivers[sdpMLineIndex].localCapabilities = caps;
          });
    
          pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
            pc._gather(transceiver.mid, sdpMLineIndex);
          });
        } else if (description.type === 'answer') {
          sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
          sessionpart = sections.shift();
          var isIceLite = SDPUtils.matchPrefix(sessionpart,
              'a=ice-lite').length > 0;
          sections.forEach(function(mediaSection, sdpMLineIndex) {
            var transceiver = pc.transceivers[sdpMLineIndex];
            var iceGatherer = transceiver.iceGatherer;
            var iceTransport = transceiver.iceTransport;
            var dtlsTransport = transceiver.dtlsTransport;
            var localCapabilities = transceiver.localCapabilities;
            var remoteCapabilities = transceiver.remoteCapabilities;
    
            // treat bundle-only as not-rejected.
            var rejected = SDPUtils.isRejected(mediaSection) &&
                SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
    
            if (!rejected && !transceiver.rejected) {
              var remoteIceParameters = SDPUtils.getIceParameters(
                  mediaSection, sessionpart);
              var remoteDtlsParameters = SDPUtils.getDtlsParameters(
                  mediaSection, sessionpart);
              if (isIceLite) {
                remoteDtlsParameters.role = 'server';
              }
    
              if (!pc.usingBundle || sdpMLineIndex === 0) {
                pc._gather(transceiver.mid, sdpMLineIndex);
                if (iceTransport.state === 'new') {
                  iceTransport.start(iceGatherer, remoteIceParameters,
                      isIceLite ? 'controlling' : 'controlled');
                }
                if (dtlsTransport.state === 'new') {
                  dtlsTransport.start(remoteDtlsParameters);
                }
              }
    
              // Calculate intersection of capabilities.
              var params = getCommonCapabilities(localCapabilities,
                  remoteCapabilities);
    
              // Start the RTCRtpSender. The RTCRtpReceiver for this
              // transceiver has already been started in setRemoteDescription.
              pc._transceive(transceiver,
                  params.codecs.length > 0,
                  false);
            }
          });
        }
    
        pc._localDescription = {
          type: description.type,
          sdp: description.sdp
        };
        if (description.type === 'offer') {
          pc._updateSignalingState('have-local-offer');
        } else {
          pc._updateSignalingState('stable');
        }
    
        return Promise.resolve();
      };
    
      RTCPeerConnection.prototype.setRemoteDescription = function(description) {
        var pc = this;
    
        // Note: pranswer is not supported.
        if (['offer', 'answer'].indexOf(description.type) === -1) {
          return Promise.reject(makeError('TypeError',
              'Unsupported type "' + description.type + '"'));
        }
    
        if (!isActionAllowedInSignalingState('setRemoteDescription',
            description.type, pc.signalingState) || pc._isClosed) {
          return Promise.reject(makeError('InvalidStateError',
              'Can not set remote ' + description.type +
              ' in state ' + pc.signalingState));
        }
    
        var streams = {};
        pc.remoteStreams.forEach(function(stream) {
          streams[stream.id] = stream;
        });
        var receiverList = [];
        var sections = SDPUtils.splitSections(description.sdp);
        var sessionpart = sections.shift();
        var isIceLite = SDPUtils.matchPrefix(sessionpart,
            'a=ice-lite').length > 0;
        var usingBundle = SDPUtils.matchPrefix(sessionpart,
            'a=group:BUNDLE ').length > 0;
        pc.usingBundle = usingBundle;
        var iceOptions = SDPUtils.matchPrefix(sessionpart,
            'a=ice-options:')[0];
        if (iceOptions) {
          pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ')
              .indexOf('trickle') >= 0;
        } else {
          pc.canTrickleIceCandidates = false;
        }
    
        sections.forEach(function(mediaSection, sdpMLineIndex) {
          var lines = SDPUtils.splitLines(mediaSection);
          var kind = SDPUtils.getKind(mediaSection);
          // treat bundle-only as not-rejected.
          var rejected = SDPUtils.isRejected(mediaSection) &&
              SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
          var protocol = lines[0].substr(2).split(' ')[2];
    
          var direction = SDPUtils.getDirection(mediaSection, sessionpart);
          var remoteMsid = SDPUtils.parseMsid(mediaSection);
    
          var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();
    
          // Reject datachannels which are not implemented yet.
          if (rejected || (kind === 'application' && (protocol === 'DTLS/SCTP' ||
              protocol === 'UDP/DTLS/SCTP'))) {
            // TODO: this is dangerous in the case where a non-rejected m-line
            //     becomes rejected.
            pc.transceivers[sdpMLineIndex] = {
              mid: mid,
              kind: kind,
              protocol: protocol,
              rejected: true
            };
            return;
          }
    
          if (!rejected && pc.transceivers[sdpMLineIndex] &&
              pc.transceivers[sdpMLineIndex].rejected) {
            // recycle a rejected transceiver.
            pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
          }
    
          var transceiver;
          var iceGatherer;
          var iceTransport;
          var dtlsTransport;
          var rtpReceiver;
          var sendEncodingParameters;
          var recvEncodingParameters;
          var localCapabilities;
    
          var track;
          // FIXME: ensure the mediaSection has rtcp-mux set.
          var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
          var remoteIceParameters;
          var remoteDtlsParameters;
          if (!rejected) {
            remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
                sessionpart);
            remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
                sessionpart);
            remoteDtlsParameters.role = 'client';
          }
          recvEncodingParameters =
              SDPUtils.parseRtpEncodingParameters(mediaSection);
    
          var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);
    
          var isComplete = SDPUtils.matchPrefix(mediaSection,
              'a=end-of-candidates', sessionpart).length > 0;
          var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
              .map(function(cand) {
                return SDPUtils.parseCandidate(cand);
              })
              .filter(function(cand) {
                return cand.component === 1;
              });
    
          // Check if we can use BUNDLE and dispose transports.
          if ((description.type === 'offer' || description.type === 'answer') &&
              !rejected && usingBundle && sdpMLineIndex > 0 &&
              pc.transceivers[sdpMLineIndex]) {
            pc._disposeIceAndDtlsTransports(sdpMLineIndex);
            pc.transceivers[sdpMLineIndex].iceGatherer =
                pc.transceivers[0].iceGatherer;
            pc.transceivers[sdpMLineIndex].iceTransport =
                pc.transceivers[0].iceTransport;
            pc.transceivers[sdpMLineIndex].dtlsTransport =
                pc.transceivers[0].dtlsTransport;
            if (pc.transceivers[sdpMLineIndex].rtpSender) {
              pc.transceivers[sdpMLineIndex].rtpSender.setTransport(
                  pc.transceivers[0].dtlsTransport);
            }
            if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
              pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(
                  pc.transceivers[0].dtlsTransport);
            }
          }
          if (description.type === 'offer' && !rejected) {
            transceiver = pc.transceivers[sdpMLineIndex] ||
                pc._createTransceiver(kind);
            transceiver.mid = mid;
    
            if (!transceiver.iceGatherer) {
              transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
                  usingBundle);
            }
    
            if (cands.length && transceiver.iceTransport.state === 'new') {
              if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
                transceiver.iceTransport.setRemoteCandidates(cands);
              } else {
                cands.forEach(function(candidate) {
                  maybeAddCandidate(transceiver.iceTransport, candidate);
                });
              }
            }
    
            localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);
    
            // filter RTX until additional stuff needed for RTX is implemented
            // in adapter.js
            if (edgeVersion < 15019) {
              localCapabilities.codecs = localCapabilities.codecs.filter(
                  function(codec) {
                    return codec.name !== 'rtx';
                  });
            }
    
            sendEncodingParameters = transceiver.sendEncodingParameters || [{
              ssrc: (2 * sdpMLineIndex + 2) * 1001
            }];
    
            // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
            var isNewTrack = false;
            if (direction === 'sendrecv' || direction === 'sendonly') {
              isNewTrack = !transceiver.rtpReceiver;
              rtpReceiver = transceiver.rtpReceiver ||
                  new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);
    
              if (isNewTrack) {
                var stream;
                track = rtpReceiver.track;
                // FIXME: does not work with Plan B.
                if (remoteMsid && remoteMsid.stream === '-') {
                  // no-op. a stream id of '-' means: no associated stream.
                } else if (remoteMsid) {
                  if (!streams[remoteMsid.stream]) {
                    streams[remoteMsid.stream] = new window.MediaStream();
                    Object.defineProperty(streams[remoteMsid.stream], 'id', {
                      get: function() {
                        return remoteMsid.stream;
                      }
                    });
                  }
                  Object.defineProperty(track, 'id', {
                    get: function() {
                      return remoteMsid.track;
                    }
                  });
                  stream = streams[remoteMsid.stream];
                } else {
                  if (!streams.default) {
                    streams.default = new window.MediaStream();
                  }
                  stream = streams.default;
                }
                if (stream) {
                  addTrackToStreamAndFireEvent(track, stream);
                  transceiver.associatedRemoteMediaStreams.push(stream);
                }
                receiverList.push([track, rtpReceiver, stream]);
              }
            } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
              transceiver.associatedRemoteMediaStreams.forEach(function(s) {
                var nativeTrack = s.getTracks().find(function(t) {
                  return t.id === transceiver.rtpReceiver.track.id;
                });
                if (nativeTrack) {
                  removeTrackFromStreamAndFireEvent(nativeTrack, s);
                }
              });
              transceiver.associatedRemoteMediaStreams = [];
            }
    
            transceiver.localCapabilities = localCapabilities;
            transceiver.remoteCapabilities = remoteCapabilities;
            transceiver.rtpReceiver = rtpReceiver;
            transceiver.rtcpParameters = rtcpParameters;
            transceiver.sendEncodingParameters = sendEncodingParameters;
            transceiver.recvEncodingParameters = recvEncodingParameters;
    
            // Start the RTCRtpReceiver now. The RTPSender is started in
            // setLocalDescription.
            pc._transceive(pc.transceivers[sdpMLineIndex],
                false,
                isNewTrack);
          } else if (description.type === 'answer' && !rejected) {
            transceiver = pc.transceivers[sdpMLineIndex];
            iceGatherer = transceiver.iceGatherer;
            iceTransport = transceiver.iceTransport;
            dtlsTransport = transceiver.dtlsTransport;
            rtpReceiver = transceiver.rtpReceiver;
            sendEncodingParameters = transceiver.sendEncodingParameters;
            localCapabilities = transceiver.localCapabilities;
    
            pc.transceivers[sdpMLineIndex].recvEncodingParameters =
                recvEncodingParameters;
            pc.transceivers[sdpMLineIndex].remoteCapabilities =
                remoteCapabilities;
            pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;
    
            if (cands.length && iceTransport.state === 'new') {
              if ((isIceLite || isComplete) &&
                  (!usingBundle || sdpMLineIndex === 0)) {
                iceTransport.setRemoteCandidates(cands);
              } else {
                cands.forEach(function(candidate) {
                  maybeAddCandidate(transceiver.iceTransport, candidate);
                });
              }
            }
    
            if (!usingBundle || sdpMLineIndex === 0) {
              if (iceTransport.state === 'new') {
                iceTransport.start(iceGatherer, remoteIceParameters,
                    'controlling');
              }
              if (dtlsTransport.state === 'new') {
                dtlsTransport.start(remoteDtlsParameters);
              }
            }
    
            // If the offer contained RTX but the answer did not,
            // remove RTX from sendEncodingParameters.
            var commonCapabilities = getCommonCapabilities(
              transceiver.localCapabilities,
              transceiver.remoteCapabilities);
    
            var hasRtx = commonCapabilities.codecs.filter(function(c) {
              return c.name.toLowerCase() === 'rtx';
            }).length;
            if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
              delete transceiver.sendEncodingParameters[0].rtx;
            }
    
            pc._transceive(transceiver,
                direction === 'sendrecv' || direction === 'recvonly',
                direction === 'sendrecv' || direction === 'sendonly');
    
            // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
            if (rtpReceiver &&
                (direction === 'sendrecv' || direction === 'sendonly')) {
              track = rtpReceiver.track;
              if (remoteMsid) {
                if (!streams[remoteMsid.stream]) {
                  streams[remoteMsid.stream] = new window.MediaStream();
                }
                addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
                receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
              } else {
                if (!streams.default) {
                  streams.default = new window.MediaStream();
                }
                addTrackToStreamAndFireEvent(track, streams.default);
                receiverList.push([track, rtpReceiver, streams.default]);
              }
            } else {
              // FIXME: actually the receiver should be created later.
              delete transceiver.rtpReceiver;
            }
          }
        });
    
        if (pc._dtlsRole === undefined) {
          pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
        }
    
        pc._remoteDescription = {
          type: description.type,
          sdp: description.sdp
        };
        if (description.type === 'offer') {
          pc._updateSignalingState('have-remote-offer');
        } else {
          pc._updateSignalingState('stable');
        }
        Object.keys(streams).forEach(function(sid) {
          var stream = streams[sid];
          if (stream.getTracks().length) {
            if (pc.remoteStreams.indexOf(stream) === -1) {
              pc.remoteStreams.push(stream);
              var event = new Event('addstream');
              event.stream = stream;
              window.setTimeout(function() {
                pc._dispatchEvent('addstream', event);
              });
            }
    
            receiverList.forEach(function(item) {
              var track = item[0];
              var receiver = item[1];
              if (stream.id !== item[2].id) {
                return;
              }
              fireAddTrack(pc, track, receiver, [stream]);
            });
          }
        });
        receiverList.forEach(function(item) {
          if (item[2]) {
            return;
          }
          fireAddTrack(pc, item[0], item[1], []);
        });
    
        // check whether addIceCandidate({}) was called within four seconds after
        // setRemoteDescription.
        window.setTimeout(function() {
          if (!(pc && pc.transceivers)) {
            return;
          }
          pc.transceivers.forEach(function(transceiver) {
            if (transceiver.iceTransport &&
                transceiver.iceTransport.state === 'new' &&
                transceiver.iceTransport.getRemoteCandidates().length > 0) {
              console.warn('Timeout for addRemoteCandidate. Consider sending ' +
                  'an end-of-candidates notification');
              transceiver.iceTransport.addRemoteCandidate({});
            }
          });
        }, 4000);
    
        return Promise.resolve();
      };
    
      RTCPeerConnection.prototype.close = function() {
        this.transceivers.forEach(function(transceiver) {
          /* not yet
          if (transceiver.iceGatherer) {
            transceiver.iceGatherer.close();
          }
          */
          if (transceiver.iceTransport) {
            transceiver.iceTransport.stop();
          }
          if (transceiver.dtlsTransport) {
            transceiver.dtlsTransport.stop();
          }
          if (transceiver.rtpSender) {
            transceiver.rtpSender.stop();
          }
          if (transceiver.rtpReceiver) {
            transceiver.rtpReceiver.stop();
          }
        });
        // FIXME: clean up tracks, local streams, remote streams, etc
        this._isClosed = true;
        this._updateSignalingState('closed');
      };
    
      // Update the signaling state.
      RTCPeerConnection.prototype._updateSignalingState = function(newState) {
        this.signalingState = newState;
        var event = new Event('signalingstatechange');
        this._dispatchEvent('signalingstatechange', event);
      };
    
      // Determine whether to fire the negotiationneeded event.
      RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
        var pc = this;
        if (this.signalingState !== 'stable' || this.needNegotiation === true) {
          return;
        }
        this.needNegotiation = true;
        window.setTimeout(function() {
          if (pc.needNegotiation) {
            pc.needNegotiation = false;
            var event = new Event('negotiationneeded');
            pc._dispatchEvent('negotiationneeded', event);
          }
        }, 0);
      };
    
      // Update the ice connection state.
      RTCPeerConnection.prototype._updateIceConnectionState = function() {
        var newState;
        var states = {
          'new': 0,
          closed: 0,
          checking: 0,
          connected: 0,
          completed: 0,
          disconnected: 0,
          failed: 0
        };
        this.transceivers.forEach(function(transceiver) {
          if (transceiver.iceTransport && !transceiver.rejected) {
            states[transceiver.iceTransport.state]++;
          }
        });
    
        newState = 'new';
        if (states.failed > 0) {
          newState = 'failed';
        } else if (states.checking > 0) {
          newState = 'checking';
        } else if (states.disconnected > 0) {
          newState = 'disconnected';
        } else if (states.new > 0) {
          newState = 'new';
        } else if (states.connected > 0) {
          newState = 'connected';
        } else if (states.completed > 0) {
          newState = 'completed';
        }
    
        if (newState !== this.iceConnectionState) {
          this.iceConnectionState = newState;
          var event = new Event('iceconnectionstatechange');
          this._dispatchEvent('iceconnectionstatechange', event);
        }
      };
    
      // Update the connection state.
      RTCPeerConnection.prototype._updateConnectionState = function() {
        var newState;
        var states = {
          'new': 0,
          closed: 0,
          connecting: 0,
          connected: 0,
          completed: 0,
          disconnected: 0,
          failed: 0
        };
        this.transceivers.forEach(function(transceiver) {
          if (transceiver.iceTransport && transceiver.dtlsTransport &&
              !transceiver.rejected) {
            states[transceiver.iceTransport.state]++;
            states[transceiver.dtlsTransport.state]++;
          }
        });
        // ICETransport.completed and connected are the same for this purpose.
        states.connected += states.completed;
    
        newState = 'new';
        if (states.failed > 0) {
          newState = 'failed';
        } else if (states.connecting > 0) {
          newState = 'connecting';
        } else if (states.disconnected > 0) {
          newState = 'disconnected';
        } else if (states.new > 0) {
          newState = 'new';
        } else if (states.connected > 0) {
          newState = 'connected';
        }
    
        if (newState !== this.connectionState) {
          this.connectionState = newState;
          var event = new Event('connectionstatechange');
          this._dispatchEvent('connectionstatechange', event);
        }
      };
    
      RTCPeerConnection.prototype.createOffer = function() {
        var pc = this;
    
        if (pc._isClosed) {
          return Promise.reject(makeError('InvalidStateError',
              'Can not call createOffer after close'));
        }
    
        var numAudioTracks = pc.transceivers.filter(function(t) {
          return t.kind === 'audio';
        }).length;
        var numVideoTracks = pc.transceivers.filter(function(t) {
          return t.kind === 'video';
        }).length;
    
        // Determine number of audio and video tracks we need to send/recv.
        var offerOptions = arguments[0];
        if (offerOptions) {
          // Reject Chrome legacy constraints.
          if (offerOptions.mandatory || offerOptions.optional) {
            throw new TypeError(
                'Legacy mandatory/optional constraints not supported.');
          }
          if (offerOptions.offerToReceiveAudio !== undefined) {
            if (offerOptions.offerToReceiveAudio === true) {
              numAudioTracks = 1;
            } else if (offerOptions.offerToReceiveAudio === false) {
              numAudioTracks = 0;
            } else {
              numAudioTracks = offerOptions.offerToReceiveAudio;
            }
          }
          if (offerOptions.offerToReceiveVideo !== undefined) {
            if (offerOptions.offerToReceiveVideo === true) {
              numVideoTracks = 1;
            } else if (offerOptions.offerToReceiveVideo === false) {
              numVideoTracks = 0;
            } else {
              numVideoTracks = offerOptions.offerToReceiveVideo;
            }
          }
        }
    
        pc.transceivers.forEach(function(transceiver) {
          if (transceiver.kind === 'audio') {
            numAudioTracks--;
            if (numAudioTracks < 0) {
              transceiver.wantReceive = false;
            }
          } else if (transceiver.kind === 'video') {
            numVideoTracks--;
            if (numVideoTracks < 0) {
              transceiver.wantReceive = false;
            }
          }
        });
    
        // Create M-lines for recvonly streams.
        while (numAudioTracks > 0 || numVideoTracks > 0) {
          if (numAudioTracks > 0) {
            pc._createTransceiver('audio');
            numAudioTracks--;
          }
          if (numVideoTracks > 0) {
            pc._createTransceiver('video');
            numVideoTracks--;
          }
        }
    
        var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
            pc._sdpSessionVersion++);
        pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
          // For each track, create an ice gatherer, ice transport,
          // dtls transport, potentially rtpsender and rtpreceiver.
          var track = transceiver.track;
          var kind = transceiver.kind;
          var mid = transceiver.mid || SDPUtils.generateIdentifier();
          transceiver.mid = mid;
    
          if (!transceiver.iceGatherer) {
            transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
                pc.usingBundle);
          }
    
          var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
          // filter RTX until additional stuff needed for RTX is implemented
          // in adapter.js
          if (edgeVersion < 15019) {
            localCapabilities.codecs = localCapabilities.codecs.filter(
                function(codec) {
                  return codec.name !== 'rtx';
                });
          }
          localCapabilities.codecs.forEach(function(codec) {
            // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
            // by adding level-asymmetry-allowed=1
            if (codec.name === 'H264' &&
                codec.parameters['level-asymmetry-allowed'] === undefined) {
              codec.parameters['level-asymmetry-allowed'] = '1';
            }
    
            // for subsequent offers, we might have to re-use the payload
            // type of the last offer.
            if (transceiver.remoteCapabilities &&
                transceiver.remoteCapabilities.codecs) {
              transceiver.remoteCapabilities.codecs.forEach(function(remoteCodec) {
                if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() &&
                    codec.clockRate === remoteCodec.clockRate) {
                  codec.preferredPayloadType = remoteCodec.payloadType;
                }
              });
            }
          });
          localCapabilities.headerExtensions.forEach(function(hdrExt) {
            var remoteExtensions = transceiver.remoteCapabilities &&
                transceiver.remoteCapabilities.headerExtensions || [];
            remoteExtensions.forEach(function(rHdrExt) {
              if (hdrExt.uri === rHdrExt.uri) {
                hdrExt.id = rHdrExt.id;
              }
            });
          });
    
          // generate an ssrc now, to be used later in rtpSender.send
          var sendEncodingParameters = transceiver.sendEncodingParameters || [{
            ssrc: (2 * sdpMLineIndex + 1) * 1001
          }];
          if (track) {
            // add RTX
            if (edgeVersion >= 15019 && kind === 'video' &&
                !sendEncodingParameters[0].rtx) {
              sendEncodingParameters[0].rtx = {
                ssrc: sendEncodingParameters[0].ssrc + 1
              };
            }
          }
    
          if (transceiver.wantReceive) {
            transceiver.rtpReceiver = new window.RTCRtpReceiver(
                transceiver.dtlsTransport, kind);
          }
    
          transceiver.localCapabilities = localCapabilities;
          transceiver.sendEncodingParameters = sendEncodingParameters;
        });
    
        // always offer BUNDLE and dispose on return if not supported.
        if (pc._config.bundlePolicy !== 'max-compat') {
          sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
            return t.mid;
          }).join(' ') + '\r\n';
        }
        sdp += 'a=ice-options:trickle\r\n';
    
        pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
          sdp += writeMediaSection(transceiver, transceiver.localCapabilities,
              'offer', transceiver.stream, pc._dtlsRole);
          sdp += 'a=rtcp-rsize\r\n';
    
          if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' &&
              (sdpMLineIndex === 0 || !pc.usingBundle)) {
            transceiver.iceGatherer.getLocalCandidates().forEach(function(cand) {
              cand.component = 1;
              sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
            });
    
            if (transceiver.iceGatherer.state === 'completed') {
              sdp += 'a=end-of-candidates\r\n';
            }
          }
        });
    
        var desc = new window.RTCSessionDescription({
          type: 'offer',
          sdp: sdp
        });
        return Promise.resolve(desc);
      };
    
      RTCPeerConnection.prototype.createAnswer = function() {
        var pc = this;
    
        if (pc._isClosed) {
          return Promise.reject(makeError('InvalidStateError',
              'Can not call createAnswer after close'));
        }
    
        if (!(pc.signalingState === 'have-remote-offer' ||
            pc.signalingState === 'have-local-pranswer')) {
          return Promise.reject(makeError('InvalidStateError',
              'Can not call createAnswer in signalingState ' + pc.signalingState));
        }
    
        var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
            pc._sdpSessionVersion++);
        if (pc.usingBundle) {
          sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
            return t.mid;
          }).join(' ') + '\r\n';
        }
        sdp += 'a=ice-options:trickle\r\n';
    
        var mediaSectionsInOffer = SDPUtils.getMediaSections(
            pc._remoteDescription.sdp).length;
        pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
          if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
            return;
          }
          if (transceiver.rejected) {
            if (transceiver.kind === 'application') {
              if (transceiver.protocol === 'DTLS/SCTP') { // legacy fmt
                sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
              } else {
                sdp += 'm=application 0 ' + transceiver.protocol +
                    ' webrtc-datachannel\r\n';
              }
            } else if (transceiver.kind === 'audio') {
              sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' +
                  'a=rtpmap:0 PCMU/8000\r\n';
            } else if (transceiver.kind === 'video') {
              sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' +
                  'a=rtpmap:120 VP8/90000\r\n';
            }
            sdp += 'c=IN IP4 0.0.0.0\r\n' +
                'a=inactive\r\n' +
                'a=mid:' + transceiver.mid + '\r\n';
            return;
          }
    
          // FIXME: look at direction.
          if (transceiver.stream) {
            var localTrack;
            if (transceiver.kind === 'audio') {
              localTrack = transceiver.stream.getAudioTracks()[0];
            } else if (transceiver.kind === 'video') {
              localTrack = transceiver.stream.getVideoTracks()[0];
            }
            if (localTrack) {
              // add RTX
              if (edgeVersion >= 15019 && transceiver.kind === 'video' &&
                  !transceiver.sendEncodingParameters[0].rtx) {
                transceiver.sendEncodingParameters[0].rtx = {
                  ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
                };
              }
            }
          }
    
          // Calculate intersection of capabilities.
          var commonCapabilities = getCommonCapabilities(
              transceiver.localCapabilities,
              transceiver.remoteCapabilities);
    
          var hasRtx = commonCapabilities.codecs.filter(function(c) {
            return c.name.toLowerCase() === 'rtx';
          }).length;
          if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
            delete transceiver.sendEncodingParameters[0].rtx;
          }
    
          sdp += writeMediaSection(transceiver, commonCapabilities,
              'answer', transceiver.stream, pc._dtlsRole);
          if (transceiver.rtcpParameters &&
              transceiver.rtcpParameters.reducedSize) {
            sdp += 'a=rtcp-rsize\r\n';
          }
        });
    
        var desc = new window.RTCSessionDescription({
          type: 'answer',
          sdp: sdp
        });
        return Promise.resolve(desc);
      };
    
      RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
        var pc = this;
        var sections;
        if (candidate && !(candidate.sdpMLineIndex !== undefined ||
            candidate.sdpMid)) {
          return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
        }
    
        // TODO: needs to go into ops queue.
        return new Promise(function(resolve, reject) {
          if (!pc._remoteDescription) {
            return reject(makeError('InvalidStateError',
                'Can not add ICE candidate without a remote description'));
          } else if (!candidate || candidate.candidate === '') {
            for (var j = 0; j < pc.transceivers.length; j++) {
              if (pc.transceivers[j].rejected) {
                continue;
              }
              pc.transceivers[j].iceTransport.addRemoteCandidate({});
              sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
              sections[j] += 'a=end-of-candidates\r\n';
              pc._remoteDescription.sdp =
                  SDPUtils.getDescription(pc._remoteDescription.sdp) +
                  sections.join('');
              if (pc.usingBundle) {
                break;
              }
            }
          } else {
            var sdpMLineIndex = candidate.sdpMLineIndex;
            if (candidate.sdpMid) {
              for (var i = 0; i < pc.transceivers.length; i++) {
                if (pc.transceivers[i].mid === candidate.sdpMid) {
                  sdpMLineIndex = i;
                  break;
                }
              }
            }
            var transceiver = pc.transceivers[sdpMLineIndex];
            if (transceiver) {
              if (transceiver.rejected) {
                return resolve();
              }
              var cand = Object.keys(candidate.candidate).length > 0 ?
                  SDPUtils.parseCandidate(candidate.candidate) : {};
              // Ignore Chrome's invalid candidates since Edge does not like them.
              if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
                return resolve();
              }
              // Ignore RTCP candidates, we assume RTCP-MUX.
              if (cand.component && cand.component !== 1) {
                return resolve();
              }
              // when using bundle, avoid adding candidates to the wrong
              // ice transport. And avoid adding candidates added in the SDP.
              if (sdpMLineIndex === 0 || (sdpMLineIndex > 0 &&
                  transceiver.iceTransport !== pc.transceivers[0].iceTransport)) {
                if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
                  return reject(makeError('OperationError',
                      'Can not add ICE candidate'));
                }
              }
    
              // update the remoteDescription.
              var candidateString = candidate.candidate.trim();
              if (candidateString.indexOf('a=') === 0) {
                candidateString = candidateString.substr(2);
              }
              sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
              sections[sdpMLineIndex] += 'a=' +
                  (cand.type ? candidateString : 'end-of-candidates')
                  + '\r\n';
              pc._remoteDescription.sdp =
                  SDPUtils.getDescription(pc._remoteDescription.sdp) +
                  sections.join('');
            } else {
              return reject(makeError('OperationError',
                  'Can not add ICE candidate'));
            }
          }
          resolve();
        });
      };
    
      RTCPeerConnection.prototype.getStats = function(selector) {
        if (selector && selector instanceof window.MediaStreamTrack) {
          var senderOrReceiver = null;
          this.transceivers.forEach(function(transceiver) {
            if (transceiver.rtpSender &&
                transceiver.rtpSender.track === selector) {
              senderOrReceiver = transceiver.rtpSender;
            } else if (transceiver.rtpReceiver &&
                transceiver.rtpReceiver.track === selector) {
              senderOrReceiver = transceiver.rtpReceiver;
            }
          });
          if (!senderOrReceiver) {
            throw makeError('InvalidAccessError', 'Invalid selector.');
          }
          return senderOrReceiver.getStats();
        }
    
        var promises = [];
        this.transceivers.forEach(function(transceiver) {
          ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
              'dtlsTransport'].forEach(function(method) {
                if (transceiver[method]) {
                  promises.push(transceiver[method].getStats());
                }
              });
        });
        return Promise.all(promises).then(function(allStats) {
          var results = new Map();
          allStats.forEach(function(stats) {
            stats.forEach(function(stat) {
              results.set(stat.id, stat);
            });
          });
          return results;
        });
      };
    
      // fix low-level stat names and return Map instead of object.
      var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer',
        'RTCIceTransport', 'RTCDtlsTransport'];
      ortcObjects.forEach(function(ortcObjectName) {
        var obj = window[ortcObjectName];
        if (obj && obj.prototype && obj.prototype.getStats) {
          var nativeGetstats = obj.prototype.getStats;
          obj.prototype.getStats = function() {
            return nativeGetstats.apply(this)
            .then(function(nativeStats) {
              var mapStats = new Map();
              Object.keys(nativeStats).forEach(function(id) {
                nativeStats[id].type = fixStatsType(nativeStats[id]);
                mapStats.set(id, nativeStats[id]);
              });
              return mapStats;
            });
          };
        }
      });
    
      // legacy callback shims. Should be moved to adapter.js some days.
      var methods = ['createOffer', 'createAnswer'];
      methods.forEach(function(method) {
        var nativeMethod = RTCPeerConnection.prototype[method];
        RTCPeerConnection.prototype[method] = function() {
          var args = arguments;
          if (typeof args[0] === 'function' ||
              typeof args[1] === 'function') { // legacy
            return nativeMethod.apply(this, [arguments[2]])
            .then(function(description) {
              if (typeof args[0] === 'function') {
                args[0].apply(null, [description]);
              }
            }, function(error) {
              if (typeof args[1] === 'function') {
                args[1].apply(null, [error]);
              }
            });
          }
          return nativeMethod.apply(this, arguments);
        };
      });
    
      methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
      methods.forEach(function(method) {
        var nativeMethod = RTCPeerConnection.prototype[method];
        RTCPeerConnection.prototype[method] = function() {
          var args = arguments;
          if (typeof args[1] === 'function' ||
              typeof args[2] === 'function') { // legacy
            return nativeMethod.apply(this, arguments)
            .then(function() {
              if (typeof args[1] === 'function') {
                args[1].apply(null);
              }
            }, function(error) {
              if (typeof args[2] === 'function') {
                args[2].apply(null, [error]);
              }
            });
          }
          return nativeMethod.apply(this, arguments);
        };
      });
    
      // getStats is special. It doesn't have a spec legacy method yet we support
      // getStats(something, cb) without error callbacks.
      ['getStats'].forEach(function(method) {
        var nativeMethod = RTCPeerConnection.prototype[method];
        RTCPeerConnection.prototype[method] = function() {
          var args = arguments;
          if (typeof args[1] === 'function') {
            return nativeMethod.apply(this, arguments)
            .then(function() {
              if (typeof args[1] === 'function') {
                args[1].apply(null);
              }
            });
          }
          return nativeMethod.apply(this, arguments);
        };
      });
    
      return RTCPeerConnection;
    };
    
    },{"sdp":119}],119:[function(require,module,exports){
    /* eslint-env node */
    'use strict';
    
    // SDP helpers.
    var SDPUtils = {};
    
    // Generate an alphanumeric identifier for cname or mids.
    // TODO: use UUIDs instead? https://gist.github.com/jed/982883
    SDPUtils.generateIdentifier = function() {
      return Math.random().toString(36).substr(2, 10);
    };
    
    // The RTCP CNAME used by all peerconnections from the same JS.
    SDPUtils.localCName = SDPUtils.generateIdentifier();
    
    // Splits SDP into lines, dealing with both CRLF and LF.
    SDPUtils.splitLines = function(blob) {
      return blob.trim().split('\n').map(function(line) {
        return line.trim();
      });
    };
    // Splits SDP into sessionpart and mediasections. Ensures CRLF.
    SDPUtils.splitSections = function(blob) {
      var parts = blob.split('\nm=');
      return parts.map(function(part, index) {
        return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
      });
    };
    
    // returns the session description.
    SDPUtils.getDescription = function(blob) {
      var sections = SDPUtils.splitSections(blob);
      return sections && sections[0];
    };
    
    // returns the individual media sections.
    SDPUtils.getMediaSections = function(blob) {
      var sections = SDPUtils.splitSections(blob);
      sections.shift();
      return sections;
    };
    
    // Returns lines that start with a certain prefix.
    SDPUtils.matchPrefix = function(blob, prefix) {
      return SDPUtils.splitLines(blob).filter(function(line) {
        return line.indexOf(prefix) === 0;
      });
    };
    
    // Parses an ICE candidate line. Sample input:
    // candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
    // rport 55996"
    SDPUtils.parseCandidate = function(line) {
      var parts;
      // Parse both variants.
      if (line.indexOf('a=candidate:') === 0) {
        parts = line.substring(12).split(' ');
      } else {
        parts = line.substring(10).split(' ');
      }
    
      var candidate = {
        foundation: parts[0],
        component: parseInt(parts[1], 10),
        protocol: parts[2].toLowerCase(),
        priority: parseInt(parts[3], 10),
        ip: parts[4],
        address: parts[4], // address is an alias for ip.
        port: parseInt(parts[5], 10),
        // skip parts[6] == 'typ'
        type: parts[7]
      };
    
      for (var i = 8; i < parts.length; i += 2) {
        switch (parts[i]) {
          case 'raddr':
            candidate.relatedAddress = parts[i + 1];
            break;
          case 'rport':
            candidate.relatedPort = parseInt(parts[i + 1], 10);
            break;
          case 'tcptype':
            candidate.tcpType = parts[i + 1];
            break;
          case 'ufrag':
            candidate.ufrag = parts[i + 1]; // for backward compability.
            candidate.usernameFragment = parts[i + 1];
            break;
          default: // extension handling, in particular ufrag
            candidate[parts[i]] = parts[i + 1];
            break;
        }
      }
      return candidate;
    };
    
    // Translates a candidate object into SDP candidate attribute.
    SDPUtils.writeCandidate = function(candidate) {
      var sdp = [];
      sdp.push(candidate.foundation);
      sdp.push(candidate.component);
      sdp.push(candidate.protocol.toUpperCase());
      sdp.push(candidate.priority);
      sdp.push(candidate.address || candidate.ip);
      sdp.push(candidate.port);
    
      var type = candidate.type;
      sdp.push('typ');
      sdp.push(type);
      if (type !== 'host' && candidate.relatedAddress &&
          candidate.relatedPort) {
        sdp.push('raddr');
        sdp.push(candidate.relatedAddress);
        sdp.push('rport');
        sdp.push(candidate.relatedPort);
      }
      if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
        sdp.push('tcptype');
        sdp.push(candidate.tcpType);
      }
      if (candidate.usernameFragment || candidate.ufrag) {
        sdp.push('ufrag');
        sdp.push(candidate.usernameFragment || candidate.ufrag);
      }
      return 'candidate:' + sdp.join(' ');
    };
    
    // Parses an ice-options line, returns an array of option tags.
    // a=ice-options:foo bar
    SDPUtils.parseIceOptions = function(line) {
      return line.substr(14).split(' ');
    };
    
    // Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
    // a=rtpmap:111 opus/48000/2
    SDPUtils.parseRtpMap = function(line) {
      var parts = line.substr(9).split(' ');
      var parsed = {
        payloadType: parseInt(parts.shift(), 10) // was: id
      };
    
      parts = parts[0].split('/');
    
      parsed.name = parts[0];
      parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
      parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
      // legacy alias, got renamed back to channels in ORTC.
      parsed.numChannels = parsed.channels;
      return parsed;
    };
    
    // Generate an a=rtpmap line from RTCRtpCodecCapability or
    // RTCRtpCodecParameters.
    SDPUtils.writeRtpMap = function(codec) {
      var pt = codec.payloadType;
      if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
      }
      var channels = codec.channels || codec.numChannels || 1;
      return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
          (channels !== 1 ? '/' + channels : '') + '\r\n';
    };
    
    // Parses an a=extmap line (headerextension from RFC 5285). Sample input:
    // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
    // a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
    SDPUtils.parseExtmap = function(line) {
      var parts = line.substr(9).split(' ');
      return {
        id: parseInt(parts[0], 10),
        direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
        uri: parts[1]
      };
    };
    
    // Generates a=extmap line from RTCRtpHeaderExtensionParameters or
    // RTCRtpHeaderExtension.
    SDPUtils.writeExtmap = function(headerExtension) {
      return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
          (headerExtension.direction && headerExtension.direction !== 'sendrecv'
            ? '/' + headerExtension.direction
            : '') +
          ' ' + headerExtension.uri + '\r\n';
    };
    
    // Parses an ftmp line, returns dictionary. Sample input:
    // a=fmtp:96 vbr=on;cng=on
    // Also deals with vbr=on; cng=on
    SDPUtils.parseFmtp = function(line) {
      var parsed = {};
      var kv;
      var parts = line.substr(line.indexOf(' ') + 1).split(';');
      for (var j = 0; j < parts.length; j++) {
        kv = parts[j].trim().split('=');
        parsed[kv[0].trim()] = kv[1];
      }
      return parsed;
    };
    
    // Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
    SDPUtils.writeFmtp = function(codec) {
      var line = '';
      var pt = codec.payloadType;
      if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
      }
      if (codec.parameters && Object.keys(codec.parameters).length) {
        var params = [];
        Object.keys(codec.parameters).forEach(function(param) {
          if (codec.parameters[param]) {
            params.push(param + '=' + codec.parameters[param]);
          } else {
            params.push(param);
          }
        });
        line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
      }
      return line;
    };
    
    // Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
    // a=rtcp-fb:98 nack rpsi
    SDPUtils.parseRtcpFb = function(line) {
      var parts = line.substr(line.indexOf(' ') + 1).split(' ');
      return {
        type: parts.shift(),
        parameter: parts.join(' ')
      };
    };
    // Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
    SDPUtils.writeRtcpFb = function(codec) {
      var lines = '';
      var pt = codec.payloadType;
      if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
      }
      if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
        // FIXME: special handling for trr-int?
        codec.rtcpFeedback.forEach(function(fb) {
          lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
          (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
              '\r\n';
        });
      }
      return lines;
    };
    
    // Parses an RFC 5576 ssrc media attribute. Sample input:
    // a=ssrc:3735928559 cname:something
    SDPUtils.parseSsrcMedia = function(line) {
      var sp = line.indexOf(' ');
      var parts = {
        ssrc: parseInt(line.substr(7, sp - 7), 10)
      };
      var colon = line.indexOf(':', sp);
      if (colon > -1) {
        parts.attribute = line.substr(sp + 1, colon - sp - 1);
        parts.value = line.substr(colon + 1);
      } else {
        parts.attribute = line.substr(sp + 1);
      }
      return parts;
    };
    
    SDPUtils.parseSsrcGroup = function(line) {
      var parts = line.substr(13).split(' ');
      return {
        semantics: parts.shift(),
        ssrcs: parts.map(function(ssrc) {
          return parseInt(ssrc, 10);
        })
      };
    };
    
    // Extracts the MID (RFC 5888) from a media section.
    // returns the MID or undefined if no mid line was found.
    SDPUtils.getMid = function(mediaSection) {
      var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
      if (mid) {
        return mid.substr(6);
      }
    };
    
    SDPUtils.parseFingerprint = function(line) {
      var parts = line.substr(14).split(' ');
      return {
        algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
        value: parts[1]
      };
    };
    
    // Extracts DTLS parameters from SDP media section or sessionpart.
    // FIXME: for consistency with other functions this should only
    //   get the fingerprint line as input. See also getIceParameters.
    SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
      var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
        'a=fingerprint:');
      // Note: a=setup line is ignored since we use the 'auto' role.
      // Note2: 'algorithm' is not case sensitive except in Edge.
      return {
        role: 'auto',
        fingerprints: lines.map(SDPUtils.parseFingerprint)
      };
    };
    
    // Serializes DTLS parameters to SDP.
    SDPUtils.writeDtlsParameters = function(params, setupType) {
      var sdp = 'a=setup:' + setupType + '\r\n';
      params.fingerprints.forEach(function(fp) {
        sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
      });
      return sdp;
    };
    
    // Parses a=crypto lines into
    //   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
    SDPUtils.parseCryptoLine = function(line) {
      var parts = line.substr(9).split(' ');
      return {
        tag: parseInt(parts[0], 10),
        cryptoSuite: parts[1],
        keyParams: parts[2],
        sessionParams: parts.slice(3),
      };
    };
    
    SDPUtils.writeCryptoLine = function(parameters) {
      return 'a=crypto:' + parameters.tag + ' ' +
        parameters.cryptoSuite + ' ' +
        (typeof parameters.keyParams === 'object'
          ? SDPUtils.writeCryptoKeyParams(parameters.keyParams)
          : parameters.keyParams) +
        (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') +
        '\r\n';
    };
    
    // Parses the crypto key parameters into
    //   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
    SDPUtils.parseCryptoKeyParams = function(keyParams) {
      if (keyParams.indexOf('inline:') !== 0) {
        return null;
      }
      var parts = keyParams.substr(7).split('|');
      return {
        keyMethod: 'inline',
        keySalt: parts[0],
        lifeTime: parts[1],
        mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
        mkiLength: parts[2] ? parts[2].split(':')[1] : undefined,
      };
    };
    
    SDPUtils.writeCryptoKeyParams = function(keyParams) {
      return keyParams.keyMethod + ':'
        + keyParams.keySalt +
        (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') +
        (keyParams.mkiValue && keyParams.mkiLength
          ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength
          : '');
    };
    
    // Extracts all SDES paramters.
    SDPUtils.getCryptoParameters = function(mediaSection, sessionpart) {
      var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
        'a=crypto:');
      return lines.map(SDPUtils.parseCryptoLine);
    };
    
    // Parses ICE information from SDP media section or sessionpart.
    // FIXME: for consistency with other functions this should only
    //   get the ice-ufrag and ice-pwd lines as input.
    SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
      var ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart,
        'a=ice-ufrag:')[0];
      var pwd = SDPUtils.matchPrefix(mediaSection + sessionpart,
        'a=ice-pwd:')[0];
      if (!(ufrag && pwd)) {
        return null;
      }
      return {
        usernameFragment: ufrag.substr(12),
        password: pwd.substr(10),
      };
    };
    
    // Serializes ICE parameters to SDP.
    SDPUtils.writeIceParameters = function(params) {
      return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
          'a=ice-pwd:' + params.password + '\r\n';
    };
    
    // Parses the SDP media section and returns RTCRtpParameters.
    SDPUtils.parseRtpParameters = function(mediaSection) {
      var description = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: [],
        rtcp: []
      };
      var lines = SDPUtils.splitLines(mediaSection);
      var mline = lines[0].split(' ');
      for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
        var pt = mline[i];
        var rtpmapline = SDPUtils.matchPrefix(
          mediaSection, 'a=rtpmap:' + pt + ' ')[0];
        if (rtpmapline) {
          var codec = SDPUtils.parseRtpMap(rtpmapline);
          var fmtps = SDPUtils.matchPrefix(
            mediaSection, 'a=fmtp:' + pt + ' ');
          // Only the first a=fmtp:<pt> is considered.
          codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
          codec.rtcpFeedback = SDPUtils.matchPrefix(
            mediaSection, 'a=rtcp-fb:' + pt + ' ')
            .map(SDPUtils.parseRtcpFb);
          description.codecs.push(codec);
          // parse FEC mechanisms from rtpmap lines.
          switch (codec.name.toUpperCase()) {
            case 'RED':
            case 'ULPFEC':
              description.fecMechanisms.push(codec.name.toUpperCase());
              break;
            default: // only RED and ULPFEC are recognized as FEC mechanisms.
              break;
          }
        }
      }
      SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
        description.headerExtensions.push(SDPUtils.parseExtmap(line));
      });
      // FIXME: parse rtcp.
      return description;
    };
    
    // Generates parts of the SDP media section describing the capabilities /
    // parameters.
    SDPUtils.writeRtpDescription = function(kind, caps) {
      var sdp = '';
    
      // Build the mline.
      sdp += 'm=' + kind + ' ';
      sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
      sdp += ' UDP/TLS/RTP/SAVPF ';
      sdp += caps.codecs.map(function(codec) {
        if (codec.preferredPayloadType !== undefined) {
          return codec.preferredPayloadType;
        }
        return codec.payloadType;
      }).join(' ') + '\r\n';
    
      sdp += 'c=IN IP4 0.0.0.0\r\n';
      sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';
    
      // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
      caps.codecs.forEach(function(codec) {
        sdp += SDPUtils.writeRtpMap(codec);
        sdp += SDPUtils.writeFmtp(codec);
        sdp += SDPUtils.writeRtcpFb(codec);
      });
      var maxptime = 0;
      caps.codecs.forEach(function(codec) {
        if (codec.maxptime > maxptime) {
          maxptime = codec.maxptime;
        }
      });
      if (maxptime > 0) {
        sdp += 'a=maxptime:' + maxptime + '\r\n';
      }
      sdp += 'a=rtcp-mux\r\n';
    
      if (caps.headerExtensions) {
        caps.headerExtensions.forEach(function(extension) {
          sdp += SDPUtils.writeExtmap(extension);
        });
      }
      // FIXME: write fecMechanisms.
      return sdp;
    };
    
    // Parses the SDP media section and returns an array of
    // RTCRtpEncodingParameters.
    SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
      var encodingParameters = [];
      var description = SDPUtils.parseRtpParameters(mediaSection);
      var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
      var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;
    
      // filter a=ssrc:... cname:, ignore PlanB-msid
      var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
        .map(function(line) {
          return SDPUtils.parseSsrcMedia(line);
        })
        .filter(function(parts) {
          return parts.attribute === 'cname';
        });
      var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
      var secondarySsrc;
    
      var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
        .map(function(line) {
          var parts = line.substr(17).split(' ');
          return parts.map(function(part) {
            return parseInt(part, 10);
          });
        });
      if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
        secondarySsrc = flows[0][1];
      }
    
      description.codecs.forEach(function(codec) {
        if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
          var encParam = {
            ssrc: primarySsrc,
            codecPayloadType: parseInt(codec.parameters.apt, 10)
          };
          if (primarySsrc && secondarySsrc) {
            encParam.rtx = {ssrc: secondarySsrc};
          }
          encodingParameters.push(encParam);
          if (hasRed) {
            encParam = JSON.parse(JSON.stringify(encParam));
            encParam.fec = {
              ssrc: primarySsrc,
              mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
            };
            encodingParameters.push(encParam);
          }
        }
      });
      if (encodingParameters.length === 0 && primarySsrc) {
        encodingParameters.push({
          ssrc: primarySsrc
        });
      }
    
      // we support both b=AS and b=TIAS but interpret AS as TIAS.
      var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
      if (bandwidth.length) {
        if (bandwidth[0].indexOf('b=TIAS:') === 0) {
          bandwidth = parseInt(bandwidth[0].substr(7), 10);
        } else if (bandwidth[0].indexOf('b=AS:') === 0) {
          // use formula from JSEP to convert b=AS to TIAS value.
          bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
              - (50 * 40 * 8);
        } else {
          bandwidth = undefined;
        }
        encodingParameters.forEach(function(params) {
          params.maxBitrate = bandwidth;
        });
      }
      return encodingParameters;
    };
    
    // parses http://draft.ortc.org/#rtcrtcpparameters*
    SDPUtils.parseRtcpParameters = function(mediaSection) {
      var rtcpParameters = {};
    
      // Gets the first SSRC. Note tha with RTX there might be multiple
      // SSRCs.
      var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
        .map(function(line) {
          return SDPUtils.parseSsrcMedia(line);
        })
        .filter(function(obj) {
          return obj.attribute === 'cname';
        })[0];
      if (remoteSsrc) {
        rtcpParameters.cname = remoteSsrc.value;
        rtcpParameters.ssrc = remoteSsrc.ssrc;
      }
    
      // Edge uses the compound attribute instead of reducedSize
      // compound is !reducedSize
      var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
      rtcpParameters.reducedSize = rsize.length > 0;
      rtcpParameters.compound = rsize.length === 0;
    
      // parses the rtcp-mux attrіbute.
      // Note that Edge does not support unmuxed RTCP.
      var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
      rtcpParameters.mux = mux.length > 0;
    
      return rtcpParameters;
    };
    
    // parses either a=msid: or a=ssrc:... msid lines and returns
    // the id of the MediaStream and MediaStreamTrack.
    SDPUtils.parseMsid = function(mediaSection) {
      var parts;
      var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
      if (spec.length === 1) {
        parts = spec[0].substr(7).split(' ');
        return {stream: parts[0], track: parts[1]};
      }
      var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
        .map(function(line) {
          return SDPUtils.parseSsrcMedia(line);
        })
        .filter(function(msidParts) {
          return msidParts.attribute === 'msid';
        });
      if (planB.length > 0) {
        parts = planB[0].value.split(' ');
        return {stream: parts[0], track: parts[1]};
      }
    };
    
    // SCTP
    // parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
    // to draft-ietf-mmusic-sctp-sdp-05
    SDPUtils.parseSctpDescription = function(mediaSection) {
      var mline = SDPUtils.parseMLine(mediaSection);
      var maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
      var maxMessageSize;
      if (maxSizeLine.length > 0) {
        maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10);
      }
      if (isNaN(maxMessageSize)) {
        maxMessageSize = 65536;
      }
      var sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');
      if (sctpPort.length > 0) {
        return {
          port: parseInt(sctpPort[0].substr(12), 10),
          protocol: mline.fmt,
          maxMessageSize: maxMessageSize
        };
      }
      var sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');
      if (sctpMapLines.length > 0) {
        var parts = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:')[0]
          .substr(10)
          .split(' ');
        return {
          port: parseInt(parts[0], 10),
          protocol: parts[1],
          maxMessageSize: maxMessageSize
        };
      }
    };
    
    // SCTP
    // outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
    // support by now receiving in this format, unless we originally parsed
    // as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
    // protocol of DTLS/SCTP -- without UDP/ or TCP/)
    SDPUtils.writeSctpDescription = function(media, sctp) {
      var output = [];
      if (media.protocol !== 'DTLS/SCTP') {
        output = [
          'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n',
          'c=IN IP4 0.0.0.0\r\n',
          'a=sctp-port:' + sctp.port + '\r\n'
        ];
      } else {
        output = [
          'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n',
          'c=IN IP4 0.0.0.0\r\n',
          'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n'
        ];
      }
      if (sctp.maxMessageSize !== undefined) {
        output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
      }
      return output.join('');
    };
    
    // Generate a session ID for SDP.
    // https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
    // recommends using a cryptographically random +ve 64-bit value
    // but right now this should be acceptable and within the right range
    SDPUtils.generateSessionId = function() {
      return Math.random().toString().substr(2, 21);
    };
    
    // Write boilder plate for start of SDP
    // sessId argument is optional - if not supplied it will
    // be generated randomly
    // sessVersion is optional and defaults to 2
    // sessUser is optional and defaults to 'thisisadapterortc'
    SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
      var sessionId;
      var version = sessVer !== undefined ? sessVer : 2;
      if (sessId) {
        sessionId = sessId;
      } else {
        sessionId = SDPUtils.generateSessionId();
      }
      var user = sessUser || 'thisisadapterortc';
      // FIXME: sess-id should be an NTP timestamp.
      return 'v=0\r\n' +
          'o=' + user + ' ' + sessionId + ' ' + version +
            ' IN IP4 127.0.0.1\r\n' +
          's=-\r\n' +
          't=0 0\r\n';
    };
    
    SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
      var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);
    
      // Map ICE parameters (ufrag, pwd) to SDP.
      sdp += SDPUtils.writeIceParameters(
        transceiver.iceGatherer.getLocalParameters());
    
      // Map DTLS parameters to SDP.
      sdp += SDPUtils.writeDtlsParameters(
        transceiver.dtlsTransport.getLocalParameters(),
        type === 'offer' ? 'actpass' : 'active');
    
      sdp += 'a=mid:' + transceiver.mid + '\r\n';
    
      if (transceiver.direction) {
        sdp += 'a=' + transceiver.direction + '\r\n';
      } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
        sdp += 'a=sendrecv\r\n';
      } else if (transceiver.rtpSender) {
        sdp += 'a=sendonly\r\n';
      } else if (transceiver.rtpReceiver) {
        sdp += 'a=recvonly\r\n';
      } else {
        sdp += 'a=inactive\r\n';
      }
    
      if (transceiver.rtpSender) {
        // spec.
        var msid = 'msid:' + stream.id + ' ' +
            transceiver.rtpSender.track.id + '\r\n';
        sdp += 'a=' + msid;
    
        // for Chrome.
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
            ' ' + msid;
        if (transceiver.sendEncodingParameters[0].rtx) {
          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
              ' ' + msid;
          sdp += 'a=ssrc-group:FID ' +
              transceiver.sendEncodingParameters[0].ssrc + ' ' +
              transceiver.sendEncodingParameters[0].rtx.ssrc +
              '\r\n';
        }
      }
      // FIXME: this should be written by writeRtpDescription.
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
          ' cname:' + SDPUtils.localCName + '\r\n';
      if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
            ' cname:' + SDPUtils.localCName + '\r\n';
      }
      return sdp;
    };
    
    // Gets the direction from the mediaSection or the sessionpart.
    SDPUtils.getDirection = function(mediaSection, sessionpart) {
      // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
      var lines = SDPUtils.splitLines(mediaSection);
      for (var i = 0; i < lines.length; i++) {
        switch (lines[i]) {
          case 'a=sendrecv':
          case 'a=sendonly':
          case 'a=recvonly':
          case 'a=inactive':
            return lines[i].substr(2);
          default:
            // FIXME: What should happen here?
        }
      }
      if (sessionpart) {
        return SDPUtils.getDirection(sessionpart);
      }
      return 'sendrecv';
    };
    
    SDPUtils.getKind = function(mediaSection) {
      var lines = SDPUtils.splitLines(mediaSection);
      var mline = lines[0].split(' ');
      return mline[0].substr(2);
    };
    
    SDPUtils.isRejected = function(mediaSection) {
      return mediaSection.split(' ', 2)[1] === '0';
    };
    
    SDPUtils.parseMLine = function(mediaSection) {
      var lines = SDPUtils.splitLines(mediaSection);
      var parts = lines[0].substr(2).split(' ');
      return {
        kind: parts[0],
        port: parseInt(parts[1], 10),
        protocol: parts[2],
        fmt: parts.slice(3).join(' ')
      };
    };
    
    SDPUtils.parseOLine = function(mediaSection) {
      var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
      var parts = line.substr(2).split(' ');
      return {
        username: parts[0],
        sessionId: parts[1],
        sessionVersion: parseInt(parts[2], 10),
        netType: parts[3],
        addressType: parts[4],
        address: parts[5]
      };
    };
    
    // a very naive interpretation of a valid SDP.
    SDPUtils.isValidSDP = function(blob) {
      if (typeof blob !== 'string' || blob.length === 0) {
        return false;
      }
      var lines = SDPUtils.splitLines(blob);
      for (var i = 0; i < lines.length; i++) {
        if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
          return false;
        }
        // TODO: check the modifier a bit more.
      }
      return true;
    };
    
    // Expose public methods.
    if (typeof module === 'object') {
      module.exports = SDPUtils;
    }
    
    },{}],120:[function(require,module,exports){
    /**
     * Convert array of 16 byte values to UUID string format of the form:
     * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
     */
    var byteToHex = [];
    for (var i = 0; i < 256; ++i) {
      byteToHex[i] = (i + 0x100).toString(16).substr(1);
    }
    
    function bytesToUuid(buf, offset) {
      var i = offset || 0;
      var bth = byteToHex;
      // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
      return ([
        bth[buf[i++]], bth[buf[i++]],
        bth[buf[i++]], bth[buf[i++]], '-',
        bth[buf[i++]], bth[buf[i++]], '-',
        bth[buf[i++]], bth[buf[i++]], '-',
        bth[buf[i++]], bth[buf[i++]], '-',
        bth[buf[i++]], bth[buf[i++]],
        bth[buf[i++]], bth[buf[i++]],
        bth[buf[i++]], bth[buf[i++]]
      ]).join('');
    }
    
    module.exports = bytesToUuid;
    
    },{}],121:[function(require,module,exports){
    // Unique ID creation requires a high quality random # generator.  In the
    // browser this is a little complicated due to unknown quality of Math.random()
    // and inconsistent support for the `crypto` API.  We do the best we can via
    // feature-detection
    
    // getRandomValues needs to be invoked in a context where "this" is a Crypto
    // implementation. Also, find the complete implementation of crypto on IE11.
    var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                          (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));
    
    if (getRandomValues) {
      // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
      var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
    
      module.exports = function whatwgRNG() {
        getRandomValues(rnds8);
        return rnds8;
      };
    } else {
      // Math.random()-based (RNG)
      //
      // If all else fails, use Math.random().  It's fast, but is of unspecified
      // quality.
      var rnds = new Array(16);
    
      module.exports = function mathRNG() {
        for (var i = 0, r; i < 16; i++) {
          if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
          rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
        }
    
        return rnds;
      };
    }
    
    },{}],122:[function(require,module,exports){
    var rng = require('./lib/rng');
    var bytesToUuid = require('./lib/bytesToUuid');
    
    function v4(options, buf, offset) {
      var i = buf && offset || 0;
    
      if (typeof(options) == 'string') {
        buf = options === 'binary' ? new Array(16) : null;
        options = null;
      }
      options = options || {};
    
      var rnds = options.random || (options.rng || rng)();
    
      // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
      rnds[6] = (rnds[6] & 0x0f) | 0x40;
      rnds[8] = (rnds[8] & 0x3f) | 0x80;
    
      // Copy bytes to buffer, if provided
      if (buf) {
        for (var ii = 0; ii < 16; ++ii) {
          buf[i + ii] = rnds[ii];
        }
      }
    
      return buf || bytesToUuid(rnds);
    }
    
    module.exports = v4;
    
    },{"./lib/bytesToUuid":120,"./lib/rng":121}],123:[function(require,module,exports){
    (function (global){(function (){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    
    'use strict';
    
    var adapterFactory = require('./adapter_factory.js');
    module.exports = adapterFactory({window: global.window});
    
    }).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{"./adapter_factory.js":124}],124:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    
    'use strict';
    
    var utils = require('./utils');
    // Shimming starts here.
    module.exports = function(dependencies, opts) {
      var window = dependencies && dependencies.window;
    
      var options = {
        shimChrome: true,
        shimFirefox: true,
        shimEdge: true,
        shimSafari: true,
      };
    
      for (var key in opts) {
        if (hasOwnProperty.call(opts, key)) {
          options[key] = opts[key];
        }
      }
    
      // Utils.
      var logging = utils.log;
      var browserDetails = utils.detectBrowser(window);
    
      // Uncomment the line below if you want logging to occur, including logging
      // for the switch statement below. Can also be turned on in the browser via
      // adapter.disableLog(false), but then logging from the switch statement below
      // will not appear.
      // require('./utils').disableLog(false);
    
      // Browser shims.
      var chromeShim = require('./chrome/chrome_shim') || null;
      var edgeShim = require('./edge/edge_shim') || null;
      var firefoxShim = require('./firefox/firefox_shim') || null;
      var safariShim = require('./safari/safari_shim') || null;
      var commonShim = require('./common_shim') || null;
    
      // Export to the adapter global object visible in the browser.
      var adapter = {
        browserDetails: browserDetails,
        commonShim: commonShim,
        extractVersion: utils.extractVersion,
        disableLog: utils.disableLog,
        disableWarnings: utils.disableWarnings
      };
    
      // Shim browser if found.
      switch (browserDetails.browser) {
        case 'chrome':
          if (!chromeShim || !chromeShim.shimPeerConnection ||
              !options.shimChrome) {
            logging('Chrome shim is not included in this adapter release.');
            return adapter;
          }
          logging('adapter.js shimming chrome.');
          // Export to the adapter global object visible in the browser.
          adapter.browserShim = chromeShim;
          commonShim.shimCreateObjectURL(window);
    
          chromeShim.shimGetUserMedia(window);
          chromeShim.shimMediaStream(window);
          chromeShim.shimSourceObject(window);
          chromeShim.shimPeerConnection(window);
          chromeShim.shimOnTrack(window);
          chromeShim.shimAddTrackRemoveTrack(window);
          chromeShim.shimGetSendersWithDtmf(window);
          chromeShim.shimSenderReceiverGetStats(window);
          chromeShim.fixNegotiationNeeded(window);
    
          commonShim.shimRTCIceCandidate(window);
          commonShim.shimMaxMessageSize(window);
          commonShim.shimSendThrowTypeError(window);
          break;
        case 'firefox':
          if (!firefoxShim || !firefoxShim.shimPeerConnection ||
              !options.shimFirefox) {
            logging('Firefox shim is not included in this adapter release.');
            return adapter;
          }
          logging('adapter.js shimming firefox.');
          // Export to the adapter global object visible in the browser.
          adapter.browserShim = firefoxShim;
          commonShim.shimCreateObjectURL(window);
    
          firefoxShim.shimGetUserMedia(window);
          firefoxShim.shimSourceObject(window);
          firefoxShim.shimPeerConnection(window);
          firefoxShim.shimOnTrack(window);
          firefoxShim.shimRemoveStream(window);
          firefoxShim.shimSenderGetStats(window);
          firefoxShim.shimReceiverGetStats(window);
          firefoxShim.shimRTCDataChannel(window);
    
          commonShim.shimRTCIceCandidate(window);
          commonShim.shimMaxMessageSize(window);
          commonShim.shimSendThrowTypeError(window);
          break;
        case 'edge':
          if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
            logging('MS edge shim is not included in this adapter release.');
            return adapter;
          }
          logging('adapter.js shimming edge.');
          // Export to the adapter global object visible in the browser.
          adapter.browserShim = edgeShim;
          commonShim.shimCreateObjectURL(window);
    
          edgeShim.shimGetUserMedia(window);
          edgeShim.shimPeerConnection(window);
          edgeShim.shimReplaceTrack(window);
          edgeShim.shimGetDisplayMedia(window);
    
          // the edge shim implements the full RTCIceCandidate object.
    
          commonShim.shimMaxMessageSize(window);
          commonShim.shimSendThrowTypeError(window);
          break;
        case 'safari':
          if (!safariShim || !options.shimSafari) {
            logging('Safari shim is not included in this adapter release.');
            return adapter;
          }
          logging('adapter.js shimming safari.');
          // Export to the adapter global object visible in the browser.
          adapter.browserShim = safariShim;
          commonShim.shimCreateObjectURL(window);
    
          safariShim.shimRTCIceServerUrls(window);
          safariShim.shimCreateOfferLegacy(window);
          safariShim.shimCallbacksAPI(window);
          safariShim.shimLocalStreamsAPI(window);
          safariShim.shimRemoteStreamsAPI(window);
          safariShim.shimTrackEventTransceiver(window);
          safariShim.shimGetUserMedia(window);
    
          commonShim.shimRTCIceCandidate(window);
          commonShim.shimMaxMessageSize(window);
          commonShim.shimSendThrowTypeError(window);
          break;
        default:
          logging('Unsupported browser!');
          break;
      }
    
      return adapter;
    };
    
    },{"./chrome/chrome_shim":125,"./common_shim":127,"./edge/edge_shim":128,"./firefox/firefox_shim":131,"./safari/safari_shim":133,"./utils":134}],125:[function(require,module,exports){
    
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    var utils = require('../utils.js');
    var logging = utils.log;
    
    /* iterates the stats graph recursively. */
    function walkStats(stats, base, resultSet) {
      if (!base || resultSet.has(base.id)) {
        return;
      }
      resultSet.set(base.id, base);
      Object.keys(base).forEach(function(name) {
        if (name.endsWith('Id')) {
          walkStats(stats, stats.get(base[name]), resultSet);
        } else if (name.endsWith('Ids')) {
          base[name].forEach(function(id) {
            walkStats(stats, stats.get(id), resultSet);
          });
        }
      });
    }
    
    /* filter getStats for a sender/receiver track. */
    function filterStats(result, track, outbound) {
      var streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
      var filteredResult = new Map();
      if (track === null) {
        return filteredResult;
      }
      var trackStats = [];
      result.forEach(function(value) {
        if (value.type === 'track' &&
            value.trackIdentifier === track.id) {
          trackStats.push(value);
        }
      });
      trackStats.forEach(function(trackStat) {
        result.forEach(function(stats) {
          if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
            walkStats(result, stats, filteredResult);
          }
        });
      });
      return filteredResult;
    }
    
    module.exports = {
      shimGetUserMedia: require('./getusermedia'),
      shimMediaStream: function(window) {
        window.MediaStream = window.MediaStream || window.webkitMediaStream;
      },
    
      shimOnTrack: function(window) {
        if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
            window.RTCPeerConnection.prototype)) {
          Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
            get: function() {
              return this._ontrack;
            },
            set: function(f) {
              if (this._ontrack) {
                this.removeEventListener('track', this._ontrack);
              }
              this.addEventListener('track', this._ontrack = f);
            },
            enumerable: true,
            configurable: true
          });
          var origSetRemoteDescription =
              window.RTCPeerConnection.prototype.setRemoteDescription;
          window.RTCPeerConnection.prototype.setRemoteDescription = function() {
            var pc = this;
            if (!pc._ontrackpoly) {
              pc._ontrackpoly = function(e) {
                // onaddstream does not fire when a track is added to an existing
                // stream. But stream.onaddtrack is implemented so we use that.
                e.stream.addEventListener('addtrack', function(te) {
                  var receiver;
                  if (window.RTCPeerConnection.prototype.getReceivers) {
                    receiver = pc.getReceivers().find(function(r) {
                      return r.track && r.track.id === te.track.id;
                    });
                  } else {
                    receiver = {track: te.track};
                  }
    
                  var event = new Event('track');
                  event.track = te.track;
                  event.receiver = receiver;
                  event.transceiver = {receiver: receiver};
                  event.streams = [e.stream];
                  pc.dispatchEvent(event);
                });
                e.stream.getTracks().forEach(function(track) {
                  var receiver;
                  if (window.RTCPeerConnection.prototype.getReceivers) {
                    receiver = pc.getReceivers().find(function(r) {
                      return r.track && r.track.id === track.id;
                    });
                  } else {
                    receiver = {track: track};
                  }
                  var event = new Event('track');
                  event.track = track;
                  event.receiver = receiver;
                  event.transceiver = {receiver: receiver};
                  event.streams = [e.stream];
                  pc.dispatchEvent(event);
                });
              };
              pc.addEventListener('addstream', pc._ontrackpoly);
            }
            return origSetRemoteDescription.apply(pc, arguments);
          };
        } else {
          // even if RTCRtpTransceiver is in window, it is only used and
          // emitted in unified-plan. Unfortunately this means we need
          // to unconditionally wrap the event.
          utils.wrapPeerConnectionEvent(window, 'track', function(e) {
            if (!e.transceiver) {
              Object.defineProperty(e, 'transceiver',
                {value: {receiver: e.receiver}});
            }
            return e;
          });
        }
      },
    
      shimGetSendersWithDtmf: function(window) {
        // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
        if (typeof window === 'object' && window.RTCPeerConnection &&
            !('getSenders' in window.RTCPeerConnection.prototype) &&
            'createDTMFSender' in window.RTCPeerConnection.prototype) {
          var shimSenderWithDtmf = function(pc, track) {
            return {
              track: track,
              get dtmf() {
                if (this._dtmf === undefined) {
                  if (track.kind === 'audio') {
                    this._dtmf = pc.createDTMFSender(track);
                  } else {
                    this._dtmf = null;
                  }
                }
                return this._dtmf;
              },
              _pc: pc
            };
          };
    
          // augment addTrack when getSenders is not available.
          if (!window.RTCPeerConnection.prototype.getSenders) {
            window.RTCPeerConnection.prototype.getSenders = function() {
              this._senders = this._senders || [];
              return this._senders.slice(); // return a copy of the internal state.
            };
            var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
            window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
              var pc = this;
              var sender = origAddTrack.apply(pc, arguments);
              if (!sender) {
                sender = shimSenderWithDtmf(pc, track);
                pc._senders.push(sender);
              }
              return sender;
            };
    
            var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
            window.RTCPeerConnection.prototype.removeTrack = function(sender) {
              var pc = this;
              origRemoveTrack.apply(pc, arguments);
              var idx = pc._senders.indexOf(sender);
              if (idx !== -1) {
                pc._senders.splice(idx, 1);
              }
            };
          }
          var origAddStream = window.RTCPeerConnection.prototype.addStream;
          window.RTCPeerConnection.prototype.addStream = function(stream) {
            var pc = this;
            pc._senders = pc._senders || [];
            origAddStream.apply(pc, [stream]);
            stream.getTracks().forEach(function(track) {
              pc._senders.push(shimSenderWithDtmf(pc, track));
            });
          };
    
          var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
          window.RTCPeerConnection.prototype.removeStream = function(stream) {
            var pc = this;
            pc._senders = pc._senders || [];
            origRemoveStream.apply(pc, [stream]);
    
            stream.getTracks().forEach(function(track) {
              var sender = pc._senders.find(function(s) {
                return s.track === track;
              });
              if (sender) {
                pc._senders.splice(pc._senders.indexOf(sender), 1); // remove sender
              }
            });
          };
        } else if (typeof window === 'object' && window.RTCPeerConnection &&
                   'getSenders' in window.RTCPeerConnection.prototype &&
                   'createDTMFSender' in window.RTCPeerConnection.prototype &&
                   window.RTCRtpSender &&
                   !('dtmf' in window.RTCRtpSender.prototype)) {
          var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
          window.RTCPeerConnection.prototype.getSenders = function() {
            var pc = this;
            var senders = origGetSenders.apply(pc, []);
            senders.forEach(function(sender) {
              sender._pc = pc;
            });
            return senders;
          };
    
          Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
            get: function() {
              if (this._dtmf === undefined) {
                if (this.track.kind === 'audio') {
                  this._dtmf = this._pc.createDTMFSender(this.track);
                } else {
                  this._dtmf = null;
                }
              }
              return this._dtmf;
            }
          });
        }
      },
    
      shimSenderReceiverGetStats: function(window) {
        if (!(typeof window === 'object' && window.RTCPeerConnection &&
            window.RTCRtpSender && window.RTCRtpReceiver)) {
          return;
        }
    
        // shim sender stats.
        if (!('getStats' in window.RTCRtpSender.prototype)) {
          var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
          if (origGetSenders) {
            window.RTCPeerConnection.prototype.getSenders = function() {
              var pc = this;
              var senders = origGetSenders.apply(pc, []);
              senders.forEach(function(sender) {
                sender._pc = pc;
              });
              return senders;
            };
          }
    
          var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
          if (origAddTrack) {
            window.RTCPeerConnection.prototype.addTrack = function() {
              var sender = origAddTrack.apply(this, arguments);
              sender._pc = this;
              return sender;
            };
          }
          window.RTCRtpSender.prototype.getStats = function() {
            var sender = this;
            return this._pc.getStats().then(function(result) {
              /* Note: this will include stats of all senders that
               *   send a track with the same id as sender.track as
               *   it is not possible to identify the RTCRtpSender.
               */
              return filterStats(result, sender.track, true);
            });
          };
        }
    
        // shim receiver stats.
        if (!('getStats' in window.RTCRtpReceiver.prototype)) {
          var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
          if (origGetReceivers) {
            window.RTCPeerConnection.prototype.getReceivers = function() {
              var pc = this;
              var receivers = origGetReceivers.apply(pc, []);
              receivers.forEach(function(receiver) {
                receiver._pc = pc;
              });
              return receivers;
            };
          }
          utils.wrapPeerConnectionEvent(window, 'track', function(e) {
            e.receiver._pc = e.srcElement;
            return e;
          });
          window.RTCRtpReceiver.prototype.getStats = function() {
            var receiver = this;
            return this._pc.getStats().then(function(result) {
              return filterStats(result, receiver.track, false);
            });
          };
        }
    
        if (!('getStats' in window.RTCRtpSender.prototype &&
            'getStats' in window.RTCRtpReceiver.prototype)) {
          return;
        }
    
        // shim RTCPeerConnection.getStats(track).
        var origGetStats = window.RTCPeerConnection.prototype.getStats;
        window.RTCPeerConnection.prototype.getStats = function() {
          var pc = this;
          if (arguments.length > 0 &&
              arguments[0] instanceof window.MediaStreamTrack) {
            var track = arguments[0];
            var sender;
            var receiver;
            var err;
            pc.getSenders().forEach(function(s) {
              if (s.track === track) {
                if (sender) {
                  err = true;
                } else {
                  sender = s;
                }
              }
            });
            pc.getReceivers().forEach(function(r) {
              if (r.track === track) {
                if (receiver) {
                  err = true;
                } else {
                  receiver = r;
                }
              }
              return r.track === track;
            });
            if (err || (sender && receiver)) {
              return Promise.reject(new DOMException(
                'There are more than one sender or receiver for the track.',
                'InvalidAccessError'));
            } else if (sender) {
              return sender.getStats();
            } else if (receiver) {
              return receiver.getStats();
            }
            return Promise.reject(new DOMException(
              'There is no sender or receiver for the track.',
              'InvalidAccessError'));
          }
          return origGetStats.apply(pc, arguments);
        };
      },
    
      shimSourceObject: function(window) {
        var URL = window && window.URL;
    
        if (typeof window === 'object') {
          if (window.HTMLMediaElement &&
            !('srcObject' in window.HTMLMediaElement.prototype)) {
            // Shim the srcObject property, once, when HTMLMediaElement is found.
            Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
              get: function() {
                return this._srcObject;
              },
              set: function(stream) {
                var self = this;
                // Use _srcObject as a private property for this shim
                this._srcObject = stream;
                if (this.src) {
                  URL.revokeObjectURL(this.src);
                }
    
                if (!stream) {
                  this.src = '';
                  return undefined;
                }
                this.src = URL.createObjectURL(stream);
                // We need to recreate the blob url when a track is added or
                // removed. Doing it manually since we want to avoid a recursion.
                stream.addEventListener('addtrack', function() {
                  if (self.src) {
                    URL.revokeObjectURL(self.src);
                  }
                  self.src = URL.createObjectURL(stream);
                });
                stream.addEventListener('removetrack', function() {
                  if (self.src) {
                    URL.revokeObjectURL(self.src);
                  }
                  self.src = URL.createObjectURL(stream);
                });
              }
            });
          }
        }
      },
    
      shimAddTrackRemoveTrackWithNative: function(window) {
        // shim addTrack/removeTrack with native variants in order to make
        // the interactions with legacy getLocalStreams behave as in other browsers.
        // Keeps a mapping stream.id => [stream, rtpsenders...]
        window.RTCPeerConnection.prototype.getLocalStreams = function() {
          var pc = this;
          this._shimmedLocalStreams = this._shimmedLocalStreams || {};
          return Object.keys(this._shimmedLocalStreams).map(function(streamId) {
            return pc._shimmedLocalStreams[streamId][0];
          });
        };
    
        var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
          if (!stream) {
            return origAddTrack.apply(this, arguments);
          }
          this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    
          var sender = origAddTrack.apply(this, arguments);
          if (!this._shimmedLocalStreams[stream.id]) {
            this._shimmedLocalStreams[stream.id] = [stream, sender];
          } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
            this._shimmedLocalStreams[stream.id].push(sender);
          }
          return sender;
        };
    
        var origAddStream = window.RTCPeerConnection.prototype.addStream;
        window.RTCPeerConnection.prototype.addStream = function(stream) {
          var pc = this;
          this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    
          stream.getTracks().forEach(function(track) {
            var alreadyExists = pc.getSenders().find(function(s) {
              return s.track === track;
            });
            if (alreadyExists) {
              throw new DOMException('Track already exists.',
                  'InvalidAccessError');
            }
          });
          var existingSenders = pc.getSenders();
          origAddStream.apply(this, arguments);
          var newSenders = pc.getSenders().filter(function(newSender) {
            return existingSenders.indexOf(newSender) === -1;
          });
          this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
        };
    
        var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
        window.RTCPeerConnection.prototype.removeStream = function(stream) {
          this._shimmedLocalStreams = this._shimmedLocalStreams || {};
          delete this._shimmedLocalStreams[stream.id];
          return origRemoveStream.apply(this, arguments);
        };
    
        var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
        window.RTCPeerConnection.prototype.removeTrack = function(sender) {
          var pc = this;
          this._shimmedLocalStreams = this._shimmedLocalStreams || {};
          if (sender) {
            Object.keys(this._shimmedLocalStreams).forEach(function(streamId) {
              var idx = pc._shimmedLocalStreams[streamId].indexOf(sender);
              if (idx !== -1) {
                pc._shimmedLocalStreams[streamId].splice(idx, 1);
              }
              if (pc._shimmedLocalStreams[streamId].length === 1) {
                delete pc._shimmedLocalStreams[streamId];
              }
            });
          }
          return origRemoveTrack.apply(this, arguments);
        };
      },
    
      shimAddTrackRemoveTrack: function(window) {
        if (!window.RTCPeerConnection) {
          return;
        }
        var browserDetails = utils.detectBrowser(window);
        // shim addTrack and removeTrack.
        if (window.RTCPeerConnection.prototype.addTrack &&
            browserDetails.version >= 65) {
          return this.shimAddTrackRemoveTrackWithNative(window);
        }
    
        // also shim pc.getLocalStreams when addTrack is shimmed
        // to return the original streams.
        var origGetLocalStreams = window.RTCPeerConnection.prototype
            .getLocalStreams;
        window.RTCPeerConnection.prototype.getLocalStreams = function() {
          var pc = this;
          var nativeStreams = origGetLocalStreams.apply(this);
          pc._reverseStreams = pc._reverseStreams || {};
          return nativeStreams.map(function(stream) {
            return pc._reverseStreams[stream.id];
          });
        };
    
        var origAddStream = window.RTCPeerConnection.prototype.addStream;
        window.RTCPeerConnection.prototype.addStream = function(stream) {
          var pc = this;
          pc._streams = pc._streams || {};
          pc._reverseStreams = pc._reverseStreams || {};
    
          stream.getTracks().forEach(function(track) {
            var alreadyExists = pc.getSenders().find(function(s) {
              return s.track === track;
            });
            if (alreadyExists) {
              throw new DOMException('Track already exists.',
                  'InvalidAccessError');
            }
          });
          // Add identity mapping for consistency with addTrack.
          // Unless this is being used with a stream from addTrack.
          if (!pc._reverseStreams[stream.id]) {
            var newStream = new window.MediaStream(stream.getTracks());
            pc._streams[stream.id] = newStream;
            pc._reverseStreams[newStream.id] = stream;
            stream = newStream;
          }
          origAddStream.apply(pc, [stream]);
        };
    
        var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
        window.RTCPeerConnection.prototype.removeStream = function(stream) {
          var pc = this;
          pc._streams = pc._streams || {};
          pc._reverseStreams = pc._reverseStreams || {};
    
          origRemoveStream.apply(pc, [(pc._streams[stream.id] || stream)]);
          delete pc._reverseStreams[(pc._streams[stream.id] ?
              pc._streams[stream.id].id : stream.id)];
          delete pc._streams[stream.id];
        };
    
        window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
          var pc = this;
          if (pc.signalingState === 'closed') {
            throw new DOMException(
              'The RTCPeerConnection\'s signalingState is \'closed\'.',
              'InvalidStateError');
          }
          var streams = [].slice.call(arguments, 1);
          if (streams.length !== 1 ||
              !streams[0].getTracks().find(function(t) {
                return t === track;
              })) {
            // this is not fully correct but all we can manage without
            // [[associated MediaStreams]] internal slot.
            throw new DOMException(
              'The adapter.js addTrack polyfill only supports a single ' +
              ' stream which is associated with the specified track.',
              'NotSupportedError');
          }
    
          var alreadyExists = pc.getSenders().find(function(s) {
            return s.track === track;
          });
          if (alreadyExists) {
            throw new DOMException('Track already exists.',
                'InvalidAccessError');
          }
    
          pc._streams = pc._streams || {};
          pc._reverseStreams = pc._reverseStreams || {};
          var oldStream = pc._streams[stream.id];
          if (oldStream) {
            // this is using odd Chrome behaviour, use with caution:
            // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
            // Note: we rely on the high-level addTrack/dtmf shim to
            // create the sender with a dtmf sender.
            oldStream.addTrack(track);
    
            // Trigger ONN async.
            Promise.resolve().then(function() {
              pc.dispatchEvent(new Event('negotiationneeded'));
            });
          } else {
            var newStream = new window.MediaStream([track]);
            pc._streams[stream.id] = newStream;
            pc._reverseStreams[newStream.id] = stream;
            pc.addStream(newStream);
          }
          return pc.getSenders().find(function(s) {
            return s.track === track;
          });
        };
    
        // replace the internal stream id with the external one and
        // vice versa.
        function replaceInternalStreamId(pc, description) {
          var sdp = description.sdp;
          Object.keys(pc._reverseStreams || []).forEach(function(internalId) {
            var externalStream = pc._reverseStreams[internalId];
            var internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(internalStream.id, 'g'),
                externalStream.id);
          });
          return new RTCSessionDescription({
            type: description.type,
            sdp: sdp
          });
        }
        function replaceExternalStreamId(pc, description) {
          var sdp = description.sdp;
          Object.keys(pc._reverseStreams || []).forEach(function(internalId) {
            var externalStream = pc._reverseStreams[internalId];
            var internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(externalStream.id, 'g'),
                internalStream.id);
          });
          return new RTCSessionDescription({
            type: description.type,
            sdp: sdp
          });
        }
        ['createOffer', 'createAnswer'].forEach(function(method) {
          var nativeMethod = window.RTCPeerConnection.prototype[method];
          window.RTCPeerConnection.prototype[method] = function() {
            var pc = this;
            var args = arguments;
            var isLegacyCall = arguments.length &&
                typeof arguments[0] === 'function';
            if (isLegacyCall) {
              return nativeMethod.apply(pc, [
                function(description) {
                  var desc = replaceInternalStreamId(pc, description);
                  args[0].apply(null, [desc]);
                },
                function(err) {
                  if (args[1]) {
                    args[1].apply(null, err);
                  }
                }, arguments[2]
              ]);
            }
            return nativeMethod.apply(pc, arguments)
            .then(function(description) {
              return replaceInternalStreamId(pc, description);
            });
          };
        });
    
        var origSetLocalDescription =
            window.RTCPeerConnection.prototype.setLocalDescription;
        window.RTCPeerConnection.prototype.setLocalDescription = function() {
          var pc = this;
          if (!arguments.length || !arguments[0].type) {
            return origSetLocalDescription.apply(pc, arguments);
          }
          arguments[0] = replaceExternalStreamId(pc, arguments[0]);
          return origSetLocalDescription.apply(pc, arguments);
        };
    
        // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier
    
        var origLocalDescription = Object.getOwnPropertyDescriptor(
            window.RTCPeerConnection.prototype, 'localDescription');
        Object.defineProperty(window.RTCPeerConnection.prototype,
            'localDescription', {
              get: function() {
                var pc = this;
                var description = origLocalDescription.get.apply(this);
                if (description.type === '') {
                  return description;
                }
                return replaceInternalStreamId(pc, description);
              }
            });
    
        window.RTCPeerConnection.prototype.removeTrack = function(sender) {
          var pc = this;
          if (pc.signalingState === 'closed') {
            throw new DOMException(
              'The RTCPeerConnection\'s signalingState is \'closed\'.',
              'InvalidStateError');
          }
          // We can not yet check for sender instanceof RTCRtpSender
          // since we shim RTPSender. So we check if sender._pc is set.
          if (!sender._pc) {
            throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' +
                'does not implement interface RTCRtpSender.', 'TypeError');
          }
          var isLocal = sender._pc === pc;
          if (!isLocal) {
            throw new DOMException('Sender was not created by this connection.',
                'InvalidAccessError');
          }
    
          // Search for the native stream the senders track belongs to.
          pc._streams = pc._streams || {};
          var stream;
          Object.keys(pc._streams).forEach(function(streamid) {
            var hasTrack = pc._streams[streamid].getTracks().find(function(track) {
              return sender.track === track;
            });
            if (hasTrack) {
              stream = pc._streams[streamid];
            }
          });
    
          if (stream) {
            if (stream.getTracks().length === 1) {
              // if this is the last track of the stream, remove the stream. This
              // takes care of any shimmed _senders.
              pc.removeStream(pc._reverseStreams[stream.id]);
            } else {
              // relying on the same odd chrome behaviour as above.
              stream.removeTrack(sender.track);
            }
            pc.dispatchEvent(new Event('negotiationneeded'));
          }
        };
      },
    
      shimPeerConnection: function(window) {
        var browserDetails = utils.detectBrowser(window);
    
        // The RTCPeerConnection object.
        if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
          window.RTCPeerConnection = function(pcConfig, pcConstraints) {
            // Translate iceTransportPolicy to iceTransports,
            // see https://code.google.com/p/webrtc/issues/detail?id=4869
            // this was fixed in M56 along with unprefixing RTCPeerConnection.
            logging('PeerConnection');
            if (pcConfig && pcConfig.iceTransportPolicy) {
              pcConfig.iceTransports = pcConfig.iceTransportPolicy;
            }
    
            return new window.webkitRTCPeerConnection(pcConfig, pcConstraints);
          };
          window.RTCPeerConnection.prototype =
              window.webkitRTCPeerConnection.prototype;
          // wrap static methods. Currently just generateCertificate.
          if (window.webkitRTCPeerConnection.generateCertificate) {
            Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
              get: function() {
                return window.webkitRTCPeerConnection.generateCertificate;
              }
            });
          }
        }
        if (!window.RTCPeerConnection) {
          return;
        }
    
        var origGetStats = window.RTCPeerConnection.prototype.getStats;
        window.RTCPeerConnection.prototype.getStats = function(selector,
            successCallback, errorCallback) {
          var pc = this;
          var args = arguments;
    
          // If selector is a function then we are in the old style stats so just
          // pass back the original getStats format to avoid breaking old users.
          if (arguments.length > 0 && typeof selector === 'function') {
            return origGetStats.apply(this, arguments);
          }
    
          // When spec-style getStats is supported, return those when called with
          // either no arguments or the selector argument is null.
          if (origGetStats.length === 0 && (arguments.length === 0 ||
              typeof arguments[0] !== 'function')) {
            return origGetStats.apply(this, []);
          }
    
          var fixChromeStats_ = function(response) {
            var standardReport = {};
            var reports = response.result();
            reports.forEach(function(report) {
              var standardStats = {
                id: report.id,
                timestamp: report.timestamp,
                type: {
                  localcandidate: 'local-candidate',
                  remotecandidate: 'remote-candidate'
                }[report.type] || report.type
              };
              report.names().forEach(function(name) {
                standardStats[name] = report.stat(name);
              });
              standardReport[standardStats.id] = standardStats;
            });
    
            return standardReport;
          };
    
          // shim getStats with maplike support
          var makeMapStats = function(stats) {
            return new Map(Object.keys(stats).map(function(key) {
              return [key, stats[key]];
            }));
          };
    
          if (arguments.length >= 2) {
            var successCallbackWrapper_ = function(response) {
              args[1](makeMapStats(fixChromeStats_(response)));
            };
    
            return origGetStats.apply(this, [successCallbackWrapper_,
              arguments[0]]);
          }
    
          // promise-support
          return new Promise(function(resolve, reject) {
            origGetStats.apply(pc, [
              function(response) {
                resolve(makeMapStats(fixChromeStats_(response)));
              }, reject]);
          }).then(successCallback, errorCallback);
        };
    
        // add promise support -- natively available in Chrome 51
        if (browserDetails.version < 51) {
          ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
              .forEach(function(method) {
                var nativeMethod = window.RTCPeerConnection.prototype[method];
                window.RTCPeerConnection.prototype[method] = function() {
                  var args = arguments;
                  var pc = this;
                  var promise = new Promise(function(resolve, reject) {
                    nativeMethod.apply(pc, [args[0], resolve, reject]);
                  });
                  if (args.length < 2) {
                    return promise;
                  }
                  return promise.then(function() {
                    args[1].apply(null, []);
                  },
                  function(err) {
                    if (args.length >= 3) {
                      args[2].apply(null, [err]);
                    }
                  });
                };
              });
        }
    
        // promise support for createOffer and createAnswer. Available (without
        // bugs) since M52: crbug/619289
        if (browserDetails.version < 52) {
          ['createOffer', 'createAnswer'].forEach(function(method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function() {
              var pc = this;
              if (arguments.length < 1 || (arguments.length === 1 &&
                  typeof arguments[0] === 'object')) {
                var opts = arguments.length === 1 ? arguments[0] : undefined;
                return new Promise(function(resolve, reject) {
                  nativeMethod.apply(pc, [resolve, reject, opts]);
                });
              }
              return nativeMethod.apply(this, arguments);
            };
          });
        }
    
        // shim implicit creation of RTCSessionDescription/RTCIceCandidate
        ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
            .forEach(function(method) {
              var nativeMethod = window.RTCPeerConnection.prototype[method];
              window.RTCPeerConnection.prototype[method] = function() {
                arguments[0] = new ((method === 'addIceCandidate') ?
                    window.RTCIceCandidate :
                    window.RTCSessionDescription)(arguments[0]);
                return nativeMethod.apply(this, arguments);
              };
            });
    
        // support for addIceCandidate(null or undefined)
        var nativeAddIceCandidate =
            window.RTCPeerConnection.prototype.addIceCandidate;
        window.RTCPeerConnection.prototype.addIceCandidate = function() {
          if (!arguments[0]) {
            if (arguments[1]) {
              arguments[1].apply(null);
            }
            return Promise.resolve();
          }
          return nativeAddIceCandidate.apply(this, arguments);
        };
      },
    
      fixNegotiationNeeded: function(window) {
        utils.wrapPeerConnectionEvent(window, 'negotiationneeded', function(e) {
          var pc = e.target;
          if (pc.signalingState !== 'stable') {
            return;
          }
          return e;
        });
      },
    
      shimGetDisplayMedia: function(window, getSourceId) {
        if (!window.navigator || !window.navigator.mediaDevices ||
            'getDisplayMedia' in window.navigator.mediaDevices) {
          return;
        }
        // getSourceId is a function that returns a promise resolving with
        // the sourceId of the screen/window/tab to be shared.
        if (typeof getSourceId !== 'function') {
          console.error('shimGetDisplayMedia: getSourceId argument is not ' +
              'a function');
          return;
        }
        window.navigator.mediaDevices.getDisplayMedia = function(constraints) {
          return getSourceId(constraints)
            .then(function(sourceId) {
              var widthSpecified = constraints.video && constraints.video.width;
              var heightSpecified = constraints.video && constraints.video.height;
              var frameRateSpecified = constraints.video &&
                constraints.video.frameRate;
              constraints.video = {
                mandatory: {
                  chromeMediaSource: 'desktop',
                  chromeMediaSourceId: sourceId,
                  maxFrameRate: frameRateSpecified || 3
                }
              };
              if (widthSpecified) {
                constraints.video.mandatory.maxWidth = widthSpecified;
              }
              if (heightSpecified) {
                constraints.video.mandatory.maxHeight = heightSpecified;
              }
              return window.navigator.mediaDevices.getUserMedia(constraints);
            });
        };
        window.navigator.getDisplayMedia = function(constraints) {
          utils.deprecated('navigator.getDisplayMedia',
              'navigator.mediaDevices.getDisplayMedia');
          return window.navigator.mediaDevices.getDisplayMedia(constraints);
        };
      }
    };
    
    },{"../utils.js":134,"./getusermedia":126}],126:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    var utils = require('../utils.js');
    var logging = utils.log;
    
    // Expose public methods.
    module.exports = function(window) {
      var browserDetails = utils.detectBrowser(window);
      var navigator = window && window.navigator;
    
      var constraintsToChrome_ = function(c) {
        if (typeof c !== 'object' || c.mandatory || c.optional) {
          return c;
        }
        var cc = {};
        Object.keys(c).forEach(function(key) {
          if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
            return;
          }
          var r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
          if (r.exact !== undefined && typeof r.exact === 'number') {
            r.min = r.max = r.exact;
          }
          var oldname_ = function(prefix, name) {
            if (prefix) {
              return prefix + name.charAt(0).toUpperCase() + name.slice(1);
            }
            return (name === 'deviceId') ? 'sourceId' : name;
          };
          if (r.ideal !== undefined) {
            cc.optional = cc.optional || [];
            var oc = {};
            if (typeof r.ideal === 'number') {
              oc[oldname_('min', key)] = r.ideal;
              cc.optional.push(oc);
              oc = {};
              oc[oldname_('max', key)] = r.ideal;
              cc.optional.push(oc);
            } else {
              oc[oldname_('', key)] = r.ideal;
              cc.optional.push(oc);
            }
          }
          if (r.exact !== undefined && typeof r.exact !== 'number') {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_('', key)] = r.exact;
          } else {
            ['min', 'max'].forEach(function(mix) {
              if (r[mix] !== undefined) {
                cc.mandatory = cc.mandatory || {};
                cc.mandatory[oldname_(mix, key)] = r[mix];
              }
            });
          }
        });
        if (c.advanced) {
          cc.optional = (cc.optional || []).concat(c.advanced);
        }
        return cc;
      };
    
      var shimConstraints_ = function(constraints, func) {
        if (browserDetails.version >= 61) {
          return func(constraints);
        }
        constraints = JSON.parse(JSON.stringify(constraints));
        if (constraints && typeof constraints.audio === 'object') {
          var remap = function(obj, a, b) {
            if (a in obj && !(b in obj)) {
              obj[b] = obj[a];
              delete obj[a];
            }
          };
          constraints = JSON.parse(JSON.stringify(constraints));
          remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
          remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
          constraints.audio = constraintsToChrome_(constraints.audio);
        }
        if (constraints && typeof constraints.video === 'object') {
          // Shim facingMode for mobile & surface pro.
          var face = constraints.video.facingMode;
          face = face && ((typeof face === 'object') ? face : {ideal: face});
          var getSupportedFacingModeLies = browserDetails.version < 66;
    
          if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                        face.ideal === 'user' || face.ideal === 'environment')) &&
              !(navigator.mediaDevices.getSupportedConstraints &&
                navigator.mediaDevices.getSupportedConstraints().facingMode &&
                !getSupportedFacingModeLies)) {
            delete constraints.video.facingMode;
            var matches;
            if (face.exact === 'environment' || face.ideal === 'environment') {
              matches = ['back', 'rear'];
            } else if (face.exact === 'user' || face.ideal === 'user') {
              matches = ['front'];
            }
            if (matches) {
              // Look for matches in label, or use last cam for back (typical).
              return navigator.mediaDevices.enumerateDevices()
              .then(function(devices) {
                devices = devices.filter(function(d) {
                  return d.kind === 'videoinput';
                });
                var dev = devices.find(function(d) {
                  return matches.some(function(match) {
                    return d.label.toLowerCase().indexOf(match) !== -1;
                  });
                });
                if (!dev && devices.length && matches.indexOf('back') !== -1) {
                  dev = devices[devices.length - 1]; // more likely the back cam
                }
                if (dev) {
                  constraints.video.deviceId = face.exact ? {exact: dev.deviceId} :
                                                            {ideal: dev.deviceId};
                }
                constraints.video = constraintsToChrome_(constraints.video);
                logging('chrome: ' + JSON.stringify(constraints));
                return func(constraints);
              });
            }
          }
          constraints.video = constraintsToChrome_(constraints.video);
        }
        logging('chrome: ' + JSON.stringify(constraints));
        return func(constraints);
      };
    
      var shimError_ = function(e) {
        if (browserDetails.version >= 64) {
          return e;
        }
        return {
          name: {
            PermissionDeniedError: 'NotAllowedError',
            PermissionDismissedError: 'NotAllowedError',
            InvalidStateError: 'NotAllowedError',
            DevicesNotFoundError: 'NotFoundError',
            ConstraintNotSatisfiedError: 'OverconstrainedError',
            TrackStartError: 'NotReadableError',
            MediaDeviceFailedDueToShutdown: 'NotAllowedError',
            MediaDeviceKillSwitchOn: 'NotAllowedError',
            TabCaptureError: 'AbortError',
            ScreenCaptureError: 'AbortError',
            DeviceCaptureError: 'AbortError'
          }[e.name] || e.name,
          message: e.message,
          constraint: e.constraint || e.constraintName,
          toString: function() {
            return this.name + (this.message && ': ') + this.message;
          }
        };
      };
    
      var getUserMedia_ = function(constraints, onSuccess, onError) {
        shimConstraints_(constraints, function(c) {
          navigator.webkitGetUserMedia(c, onSuccess, function(e) {
            if (onError) {
              onError(shimError_(e));
            }
          });
        });
      };
    
      navigator.getUserMedia = getUserMedia_;
    
      // Returns the result of getUserMedia as a Promise.
      var getUserMediaPromise_ = function(constraints) {
        return new Promise(function(resolve, reject) {
          navigator.getUserMedia(constraints, resolve, reject);
        });
      };
    
      if (!navigator.mediaDevices) {
        navigator.mediaDevices = {
          getUserMedia: getUserMediaPromise_,
          enumerateDevices: function() {
            return new Promise(function(resolve) {
              var kinds = {audio: 'audioinput', video: 'videoinput'};
              return window.MediaStreamTrack.getSources(function(devices) {
                resolve(devices.map(function(device) {
                  return {label: device.label,
                    kind: kinds[device.kind],
                    deviceId: device.id,
                    groupId: ''};
                }));
              });
            });
          },
          getSupportedConstraints: function() {
            return {
              deviceId: true, echoCancellation: true, facingMode: true,
              frameRate: true, height: true, width: true
            };
          }
        };
      }
    
      // A shim for getUserMedia method on the mediaDevices object.
      // TODO(KaptenJansson) remove once implemented in Chrome stable.
      if (!navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia = function(constraints) {
          return getUserMediaPromise_(constraints);
        };
      } else {
        // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
        // function which returns a Promise, it does not accept spec-style
        // constraints.
        var origGetUserMedia = navigator.mediaDevices.getUserMedia.
            bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(cs) {
          return shimConstraints_(cs, function(c) {
            return origGetUserMedia(c).then(function(stream) {
              if (c.audio && !stream.getAudioTracks().length ||
                  c.video && !stream.getVideoTracks().length) {
                stream.getTracks().forEach(function(track) {
                  track.stop();
                });
                throw new DOMException('', 'NotFoundError');
              }
              return stream;
            }, function(e) {
              return Promise.reject(shimError_(e));
            });
          });
        };
      }
    
      // Dummy devicechange event methods.
      // TODO(KaptenJansson) remove once implemented in Chrome stable.
      if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
        navigator.mediaDevices.addEventListener = function() {
          logging('Dummy mediaDevices.addEventListener called.');
        };
      }
      if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
        navigator.mediaDevices.removeEventListener = function() {
          logging('Dummy mediaDevices.removeEventListener called.');
        };
      }
    };
    
    },{"../utils.js":134}],127:[function(require,module,exports){
    /*
     *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    
    var SDPUtils = require('sdp');
    var utils = require('./utils');
    
    module.exports = {
      shimRTCIceCandidate: function(window) {
        // foundation is arbitrarily chosen as an indicator for full support for
        // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
        if (!window.RTCIceCandidate || (window.RTCIceCandidate && 'foundation' in
            window.RTCIceCandidate.prototype)) {
          return;
        }
    
        var NativeRTCIceCandidate = window.RTCIceCandidate;
        window.RTCIceCandidate = function(args) {
          // Remove the a= which shouldn't be part of the candidate string.
          if (typeof args === 'object' && args.candidate &&
              args.candidate.indexOf('a=') === 0) {
            args = JSON.parse(JSON.stringify(args));
            args.candidate = args.candidate.substr(2);
          }
    
          if (args.candidate && args.candidate.length) {
            // Augment the native candidate with the parsed fields.
            var nativeCandidate = new NativeRTCIceCandidate(args);
            var parsedCandidate = SDPUtils.parseCandidate(args.candidate);
            var augmentedCandidate = Object.assign(nativeCandidate,
                parsedCandidate);
    
            // Add a serializer that does not serialize the extra attributes.
            augmentedCandidate.toJSON = function() {
              return {
                candidate: augmentedCandidate.candidate,
                sdpMid: augmentedCandidate.sdpMid,
                sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
                usernameFragment: augmentedCandidate.usernameFragment,
              };
            };
            return augmentedCandidate;
          }
          return new NativeRTCIceCandidate(args);
        };
        window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;
    
        // Hook up the augmented candidate in onicecandidate and
        // addEventListener('icecandidate', ...)
        utils.wrapPeerConnectionEvent(window, 'icecandidate', function(e) {
          if (e.candidate) {
            Object.defineProperty(e, 'candidate', {
              value: new window.RTCIceCandidate(e.candidate),
              writable: 'false'
            });
          }
          return e;
        });
      },
    
      // shimCreateObjectURL must be called before shimSourceObject to avoid loop.
    
      shimCreateObjectURL: function(window) {
        var URL = window && window.URL;
    
        if (!(typeof window === 'object' && window.HTMLMediaElement &&
              'srcObject' in window.HTMLMediaElement.prototype &&
            URL.createObjectURL && URL.revokeObjectURL)) {
          // Only shim CreateObjectURL using srcObject if srcObject exists.
          return undefined;
        }
    
        var nativeCreateObjectURL = URL.createObjectURL.bind(URL);
        var nativeRevokeObjectURL = URL.revokeObjectURL.bind(URL);
        var streams = new Map(), newId = 0;
    
        URL.createObjectURL = function(stream) {
          if ('getTracks' in stream) {
            var url = 'polyblob:' + (++newId);
            streams.set(url, stream);
            utils.deprecated('URL.createObjectURL(stream)',
                'elem.srcObject = stream');
            return url;
          }
          return nativeCreateObjectURL(stream);
        };
        URL.revokeObjectURL = function(url) {
          nativeRevokeObjectURL(url);
          streams.delete(url);
        };
    
        var dsc = Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype,
                                                  'src');
        Object.defineProperty(window.HTMLMediaElement.prototype, 'src', {
          get: function() {
            return dsc.get.apply(this);
          },
          set: function(url) {
            this.srcObject = streams.get(url) || null;
            return dsc.set.apply(this, [url]);
          }
        });
    
        var nativeSetAttribute = window.HTMLMediaElement.prototype.setAttribute;
        window.HTMLMediaElement.prototype.setAttribute = function() {
          if (arguments.length === 2 &&
              ('' + arguments[0]).toLowerCase() === 'src') {
            this.srcObject = streams.get(arguments[1]) || null;
          }
          return nativeSetAttribute.apply(this, arguments);
        };
      },
    
      shimMaxMessageSize: function(window) {
        if (window.RTCSctpTransport || !window.RTCPeerConnection) {
          return;
        }
        var browserDetails = utils.detectBrowser(window);
    
        if (!('sctp' in window.RTCPeerConnection.prototype)) {
          Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
            get: function() {
              return typeof this._sctp === 'undefined' ? null : this._sctp;
            }
          });
        }
    
        var sctpInDescription = function(description) {
          var sections = SDPUtils.splitSections(description.sdp);
          sections.shift();
          return sections.some(function(mediaSection) {
            var mLine = SDPUtils.parseMLine(mediaSection);
            return mLine && mLine.kind === 'application'
                && mLine.protocol.indexOf('SCTP') !== -1;
          });
        };
    
        var getRemoteFirefoxVersion = function(description) {
          // TODO: Is there a better solution for detecting Firefox?
          var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
          if (match === null || match.length < 2) {
            return -1;
          }
          var version = parseInt(match[1], 10);
          // Test for NaN (yes, this is ugly)
          return version !== version ? -1 : version;
        };
    
        var getCanSendMaxMessageSize = function(remoteIsFirefox) {
          // Every implementation we know can send at least 64 KiB.
          // Note: Although Chrome is technically able to send up to 256 KiB, the
          //       data does not reach the other peer reliably.
          //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
          var canSendMaxMessageSize = 65536;
          if (browserDetails.browser === 'firefox') {
            if (browserDetails.version < 57) {
              if (remoteIsFirefox === -1) {
                // FF < 57 will send in 16 KiB chunks using the deprecated PPID
                // fragmentation.
                canSendMaxMessageSize = 16384;
              } else {
                // However, other FF (and RAWRTC) can reassemble PPID-fragmented
                // messages. Thus, supporting ~2 GiB when sending.
                canSendMaxMessageSize = 2147483637;
              }
            } else if (browserDetails.version < 60) {
              // Currently, all FF >= 57 will reset the remote maximum message size
              // to the default value when a data channel is created at a later
              // stage. :(
              // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
              canSendMaxMessageSize =
                browserDetails.version === 57 ? 65535 : 65536;
            } else {
              // FF >= 60 supports sending ~2 GiB
              canSendMaxMessageSize = 2147483637;
            }
          }
          return canSendMaxMessageSize;
        };
    
        var getMaxMessageSize = function(description, remoteIsFirefox) {
          // Note: 65536 bytes is the default value from the SDP spec. Also,
          //       every implementation we know supports receiving 65536 bytes.
          var maxMessageSize = 65536;
    
          // FF 57 has a slightly incorrect default remote max message size, so
          // we need to adjust it here to avoid a failure when sending.
          // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
          if (browserDetails.browser === 'firefox'
               && browserDetails.version === 57) {
            maxMessageSize = 65535;
          }
    
          var match = SDPUtils.matchPrefix(description.sdp, 'a=max-message-size:');
          if (match.length > 0) {
            maxMessageSize = parseInt(match[0].substr(19), 10);
          } else if (browserDetails.browser === 'firefox' &&
                      remoteIsFirefox !== -1) {
            // If the maximum message size is not present in the remote SDP and
            // both local and remote are Firefox, the remote peer can receive
            // ~2 GiB.
            maxMessageSize = 2147483637;
          }
          return maxMessageSize;
        };
    
        var origSetRemoteDescription =
            window.RTCPeerConnection.prototype.setRemoteDescription;
        window.RTCPeerConnection.prototype.setRemoteDescription = function() {
          var pc = this;
          pc._sctp = null;
    
          if (sctpInDescription(arguments[0])) {
            // Check if the remote is FF.
            var isFirefox = getRemoteFirefoxVersion(arguments[0]);
    
            // Get the maximum message size the local peer is capable of sending
            var canSendMMS = getCanSendMaxMessageSize(isFirefox);
    
            // Get the maximum message size of the remote peer.
            var remoteMMS = getMaxMessageSize(arguments[0], isFirefox);
    
            // Determine final maximum message size
            var maxMessageSize;
            if (canSendMMS === 0 && remoteMMS === 0) {
              maxMessageSize = Number.POSITIVE_INFINITY;
            } else if (canSendMMS === 0 || remoteMMS === 0) {
              maxMessageSize = Math.max(canSendMMS, remoteMMS);
            } else {
              maxMessageSize = Math.min(canSendMMS, remoteMMS);
            }
    
            // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
            // attribute.
            var sctp = {};
            Object.defineProperty(sctp, 'maxMessageSize', {
              get: function() {
                return maxMessageSize;
              }
            });
            pc._sctp = sctp;
          }
    
          return origSetRemoteDescription.apply(pc, arguments);
        };
      },
    
      shimSendThrowTypeError: function(window) {
        if (!(window.RTCPeerConnection &&
            'createDataChannel' in window.RTCPeerConnection.prototype)) {
          return;
        }
    
        // Note: Although Firefox >= 57 has a native implementation, the maximum
        //       message size can be reset for all data channels at a later stage.
        //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
    
        function wrapDcSend(dc, pc) {
          var origDataChannelSend = dc.send;
          dc.send = function() {
            var data = arguments[0];
            var length = data.length || data.size || data.byteLength;
            if (dc.readyState === 'open' &&
                pc.sctp && length > pc.sctp.maxMessageSize) {
              throw new TypeError('Message too large (can send a maximum of ' +
                pc.sctp.maxMessageSize + ' bytes)');
            }
            return origDataChannelSend.apply(dc, arguments);
          };
        }
        var origCreateDataChannel =
          window.RTCPeerConnection.prototype.createDataChannel;
        window.RTCPeerConnection.prototype.createDataChannel = function() {
          var pc = this;
          var dataChannel = origCreateDataChannel.apply(pc, arguments);
          wrapDcSend(dataChannel, pc);
          return dataChannel;
        };
        utils.wrapPeerConnectionEvent(window, 'datachannel', function(e) {
          wrapDcSend(e.channel, e.target);
          return e;
        });
      }
    };
    
    },{"./utils":134,"sdp":119}],128:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    
    var utils = require('../utils');
    var filterIceServers = require('./filtericeservers');
    var shimRTCPeerConnection = require('rtcpeerconnection-shim');
    
    module.exports = {
      shimGetUserMedia: require('./getusermedia'),
      shimPeerConnection: function(window) {
        var browserDetails = utils.detectBrowser(window);
    
        if (window.RTCIceGatherer) {
          if (!window.RTCIceCandidate) {
            window.RTCIceCandidate = function(args) {
              return args;
            };
          }
          if (!window.RTCSessionDescription) {
            window.RTCSessionDescription = function(args) {
              return args;
            };
          }
          // this adds an additional event listener to MediaStrackTrack that signals
          // when a tracks enabled property was changed. Workaround for a bug in
          // addStream, see below. No longer required in 15025+
          if (browserDetails.version < 15025) {
            var origMSTEnabled = Object.getOwnPropertyDescriptor(
                window.MediaStreamTrack.prototype, 'enabled');
            Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
              set: function(value) {
                origMSTEnabled.set.call(this, value);
                var ev = new Event('enabled');
                ev.enabled = value;
                this.dispatchEvent(ev);
              }
            });
          }
        }
    
        // ORTC defines the DTMF sender a bit different.
        // https://github.com/w3c/ortc/issues/714
        if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
          Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
            get: function() {
              if (this._dtmf === undefined) {
                if (this.track.kind === 'audio') {
                  this._dtmf = new window.RTCDtmfSender(this);
                } else if (this.track.kind === 'video') {
                  this._dtmf = null;
                }
              }
              return this._dtmf;
            }
          });
        }
        // Edge currently only implements the RTCDtmfSender, not the
        // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*
        if (window.RTCDtmfSender && !window.RTCDTMFSender) {
          window.RTCDTMFSender = window.RTCDtmfSender;
        }
    
        var RTCPeerConnectionShim = shimRTCPeerConnection(window,
            browserDetails.version);
        window.RTCPeerConnection = function(config) {
          if (config && config.iceServers) {
            config.iceServers = filterIceServers(config.iceServers);
          }
          return new RTCPeerConnectionShim(config);
        };
        window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
      },
      shimReplaceTrack: function(window) {
        // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
        if (window.RTCRtpSender &&
            !('replaceTrack' in window.RTCRtpSender.prototype)) {
          window.RTCRtpSender.prototype.replaceTrack =
              window.RTCRtpSender.prototype.setTrack;
        }
      },
      shimGetDisplayMedia: function(window, preferredMediaSource) {
        if (!('getDisplayMedia' in window.navigator) ||
            !window.navigator.mediaDevices ||
            'getDisplayMedia' in window.navigator.mediaDevices) {
          return;
        }
        var origGetDisplayMedia = window.navigator.getDisplayMedia;
        window.navigator.mediaDevices.getDisplayMedia = function(constraints) {
          return origGetDisplayMedia.call(window.navigator, constraints);
        };
        window.navigator.getDisplayMedia = function(constraints) {
          utils.deprecated('navigator.getDisplayMedia',
              'navigator.mediaDevices.getDisplayMedia');
          return origGetDisplayMedia.call(window.navigator, constraints);
        };
      }
    };
    
    },{"../utils":134,"./filtericeservers":129,"./getusermedia":130,"rtcpeerconnection-shim":118}],129:[function(require,module,exports){
    /*
     *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    
    var utils = require('../utils');
    // Edge does not like
    // 1) stun: filtered after 14393 unless ?transport=udp is present
    // 2) turn: that does not have all of turn:host:port?transport=udp
    // 3) turn: with ipv6 addresses
    // 4) turn: occurring muliple times
    module.exports = function(iceServers, edgeVersion) {
      var hasTurn = false;
      iceServers = JSON.parse(JSON.stringify(iceServers));
      return iceServers.filter(function(server) {
        if (server && (server.urls || server.url)) {
          var urls = server.urls || server.url;
          if (server.url && !server.urls) {
            utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
          }
          var isString = typeof urls === 'string';
          if (isString) {
            urls = [urls];
          }
          urls = urls.filter(function(url) {
            var validTurn = url.indexOf('turn:') === 0 &&
                url.indexOf('transport=udp') !== -1 &&
                url.indexOf('turn:[') === -1 &&
                !hasTurn;
    
            if (validTurn) {
              hasTurn = true;
              return true;
            }
            return url.indexOf('stun:') === 0 && edgeVersion >= 14393 &&
                url.indexOf('?transport=udp') === -1;
          });
    
          delete server.url;
          server.urls = isString ? urls[0] : urls;
          return !!urls.length;
        }
      });
    };
    
    },{"../utils":134}],130:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    
    // Expose public methods.
    module.exports = function(window) {
      var navigator = window && window.navigator;
    
      var shimError_ = function(e) {
        return {
          name: {PermissionDeniedError: 'NotAllowedError'}[e.name] || e.name,
          message: e.message,
          constraint: e.constraint,
          toString: function() {
            return this.name;
          }
        };
      };
    
      // getUserMedia error shim.
      var origGetUserMedia = navigator.mediaDevices.getUserMedia.
          bind(navigator.mediaDevices);
      navigator.mediaDevices.getUserMedia = function(c) {
        return origGetUserMedia(c).catch(function(e) {
          return Promise.reject(shimError_(e));
        });
      };
    };
    
    },{}],131:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    
    var utils = require('../utils');
    
    module.exports = {
      shimGetUserMedia: require('./getusermedia'),
      shimOnTrack: function(window) {
        if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
            window.RTCPeerConnection.prototype)) {
          Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
            get: function() {
              return this._ontrack;
            },
            set: function(f) {
              if (this._ontrack) {
                this.removeEventListener('track', this._ontrack);
                this.removeEventListener('addstream', this._ontrackpoly);
              }
              this.addEventListener('track', this._ontrack = f);
              this.addEventListener('addstream', this._ontrackpoly = function(e) {
                e.stream.getTracks().forEach(function(track) {
                  var event = new Event('track');
                  event.track = track;
                  event.receiver = {track: track};
                  event.transceiver = {receiver: event.receiver};
                  event.streams = [e.stream];
                  this.dispatchEvent(event);
                }.bind(this));
              }.bind(this));
            },
            enumerable: true,
            configurable: true
          });
        }
        if (typeof window === 'object' && window.RTCTrackEvent &&
            ('receiver' in window.RTCTrackEvent.prototype) &&
            !('transceiver' in window.RTCTrackEvent.prototype)) {
          Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
            get: function() {
              return {receiver: this.receiver};
            }
          });
        }
      },
    
      shimSourceObject: function(window) {
        // Firefox has supported mozSrcObject since FF22, unprefixed in 42.
        if (typeof window === 'object') {
          if (window.HTMLMediaElement &&
            !('srcObject' in window.HTMLMediaElement.prototype)) {
            // Shim the srcObject property, once, when HTMLMediaElement is found.
            Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
              get: function() {
                return this.mozSrcObject;
              },
              set: function(stream) {
                this.mozSrcObject = stream;
              }
            });
          }
        }
      },
    
      shimPeerConnection: function(window) {
        var browserDetails = utils.detectBrowser(window);
    
        if (typeof window !== 'object' || !(window.RTCPeerConnection ||
            window.mozRTCPeerConnection)) {
          return; // probably media.peerconnection.enabled=false in about:config
        }
        // The RTCPeerConnection object.
        if (!window.RTCPeerConnection) {
          window.RTCPeerConnection = function(pcConfig, pcConstraints) {
            if (browserDetails.version < 38) {
              // .urls is not supported in FF < 38.
              // create RTCIceServers with a single url.
              if (pcConfig && pcConfig.iceServers) {
                var newIceServers = [];
                for (var i = 0; i < pcConfig.iceServers.length; i++) {
                  var server = pcConfig.iceServers[i];
                  if (server.hasOwnProperty('urls')) {
                    for (var j = 0; j < server.urls.length; j++) {
                      var newServer = {
                        url: server.urls[j]
                      };
                      if (server.urls[j].indexOf('turn') === 0) {
                        newServer.username = server.username;
                        newServer.credential = server.credential;
                      }
                      newIceServers.push(newServer);
                    }
                  } else {
                    newIceServers.push(pcConfig.iceServers[i]);
                  }
                }
                pcConfig.iceServers = newIceServers;
              }
            }
            return new window.mozRTCPeerConnection(pcConfig, pcConstraints);
          };
          window.RTCPeerConnection.prototype =
              window.mozRTCPeerConnection.prototype;
    
          // wrap static methods. Currently just generateCertificate.
          if (window.mozRTCPeerConnection.generateCertificate) {
            Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
              get: function() {
                return window.mozRTCPeerConnection.generateCertificate;
              }
            });
          }
    
          window.RTCSessionDescription = window.mozRTCSessionDescription;
          window.RTCIceCandidate = window.mozRTCIceCandidate;
        }
    
        // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
        ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
            .forEach(function(method) {
              var nativeMethod = window.RTCPeerConnection.prototype[method];
              window.RTCPeerConnection.prototype[method] = function() {
                arguments[0] = new ((method === 'addIceCandidate') ?
                    window.RTCIceCandidate :
                    window.RTCSessionDescription)(arguments[0]);
                return nativeMethod.apply(this, arguments);
              };
            });
    
        // support for addIceCandidate(null or undefined)
        var nativeAddIceCandidate =
            window.RTCPeerConnection.prototype.addIceCandidate;
        window.RTCPeerConnection.prototype.addIceCandidate = function() {
          if (!arguments[0]) {
            if (arguments[1]) {
              arguments[1].apply(null);
            }
            return Promise.resolve();
          }
          return nativeAddIceCandidate.apply(this, arguments);
        };
    
        // shim getStats with maplike support
        var makeMapStats = function(stats) {
          var map = new Map();
          Object.keys(stats).forEach(function(key) {
            map.set(key, stats[key]);
            map[key] = stats[key];
          });
          return map;
        };
    
        var modernStatsTypes = {
          inboundrtp: 'inbound-rtp',
          outboundrtp: 'outbound-rtp',
          candidatepair: 'candidate-pair',
          localcandidate: 'local-candidate',
          remotecandidate: 'remote-candidate'
        };
    
        var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
        window.RTCPeerConnection.prototype.getStats = function(
          selector,
          onSucc,
          onErr
        ) {
          return nativeGetStats.apply(this, [selector || null])
            .then(function(stats) {
              if (browserDetails.version < 48) {
                stats = makeMapStats(stats);
              }
              if (browserDetails.version < 53 && !onSucc) {
                // Shim only promise getStats with spec-hyphens in type names
                // Leave callback version alone; misc old uses of forEach before Map
                try {
                  stats.forEach(function(stat) {
                    stat.type = modernStatsTypes[stat.type] || stat.type;
                  });
                } catch (e) {
                  if (e.name !== 'TypeError') {
                    throw e;
                  }
                  // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
                  stats.forEach(function(stat, i) {
                    stats.set(i, Object.assign({}, stat, {
                      type: modernStatsTypes[stat.type] || stat.type
                    }));
                  });
                }
              }
              return stats;
            })
            .then(onSucc, onErr);
        };
      },
    
      shimSenderGetStats: function(window) {
        if (!(typeof window === 'object' && window.RTCPeerConnection &&
            window.RTCRtpSender)) {
          return;
        }
        if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
          return;
        }
        var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
        if (origGetSenders) {
          window.RTCPeerConnection.prototype.getSenders = function() {
            var pc = this;
            var senders = origGetSenders.apply(pc, []);
            senders.forEach(function(sender) {
              sender._pc = pc;
            });
            return senders;
          };
        }
    
        var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        if (origAddTrack) {
          window.RTCPeerConnection.prototype.addTrack = function() {
            var sender = origAddTrack.apply(this, arguments);
            sender._pc = this;
            return sender;
          };
        }
        window.RTCRtpSender.prototype.getStats = function() {
          return this.track ? this._pc.getStats(this.track) :
              Promise.resolve(new Map());
        };
      },
    
      shimReceiverGetStats: function(window) {
        if (!(typeof window === 'object' && window.RTCPeerConnection &&
            window.RTCRtpSender)) {
          return;
        }
        if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
          return;
        }
        var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
        if (origGetReceivers) {
          window.RTCPeerConnection.prototype.getReceivers = function() {
            var pc = this;
            var receivers = origGetReceivers.apply(pc, []);
            receivers.forEach(function(receiver) {
              receiver._pc = pc;
            });
            return receivers;
          };
        }
        utils.wrapPeerConnectionEvent(window, 'track', function(e) {
          e.receiver._pc = e.srcElement;
          return e;
        });
        window.RTCRtpReceiver.prototype.getStats = function() {
          return this._pc.getStats(this.track);
        };
      },
    
      shimRemoveStream: function(window) {
        if (!window.RTCPeerConnection ||
            'removeStream' in window.RTCPeerConnection.prototype) {
          return;
        }
        window.RTCPeerConnection.prototype.removeStream = function(stream) {
          var pc = this;
          utils.deprecated('removeStream', 'removeTrack');
          this.getSenders().forEach(function(sender) {
            if (sender.track && stream.getTracks().indexOf(sender.track) !== -1) {
              pc.removeTrack(sender);
            }
          });
        };
      },
    
      shimRTCDataChannel: function(window) {
        // rename DataChannel to RTCDataChannel (native fix in FF60):
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
        if (window.DataChannel && !window.RTCDataChannel) {
          window.RTCDataChannel = window.DataChannel;
        }
      },
    
      shimGetDisplayMedia: function(window, preferredMediaSource) {
        if (!window.navigator || !window.navigator.mediaDevices ||
            'getDisplayMedia' in window.navigator.mediaDevices) {
          return;
        }
        window.navigator.mediaDevices.getDisplayMedia = function(constraints) {
          if (!(constraints && constraints.video)) {
            var err = new DOMException('getDisplayMedia without video ' +
                'constraints is undefined');
            err.name = 'NotFoundError';
            // from https://heycam.github.io/webidl/#idl-DOMException-error-names
            err.code = 8;
            return Promise.reject(err);
          }
          if (constraints.video === true) {
            constraints.video = {mediaSource: preferredMediaSource};
          } else {
            constraints.video.mediaSource = preferredMediaSource;
          }
          return window.navigator.mediaDevices.getUserMedia(constraints);
        };
        window.navigator.getDisplayMedia = function(constraints) {
          utils.deprecated('navigator.getDisplayMedia',
              'navigator.mediaDevices.getDisplayMedia');
          return window.navigator.mediaDevices.getDisplayMedia(constraints);
        };
      }
    };
    
    },{"../utils":134,"./getusermedia":132}],132:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    
    var utils = require('../utils');
    var logging = utils.log;
    
    // Expose public methods.
    module.exports = function(window) {
      var browserDetails = utils.detectBrowser(window);
      var navigator = window && window.navigator;
      var MediaStreamTrack = window && window.MediaStreamTrack;
    
      var shimError_ = function(e) {
        return {
          name: {
            InternalError: 'NotReadableError',
            NotSupportedError: 'TypeError',
            PermissionDeniedError: 'NotAllowedError',
            SecurityError: 'NotAllowedError'
          }[e.name] || e.name,
          message: {
            'The operation is insecure.': 'The request is not allowed by the ' +
            'user agent or the platform in the current context.'
          }[e.message] || e.message,
          constraint: e.constraint,
          toString: function() {
            return this.name + (this.message && ': ') + this.message;
          }
        };
      };
    
      // getUserMedia constraints shim.
      var getUserMedia_ = function(constraints, onSuccess, onError) {
        var constraintsToFF37_ = function(c) {
          if (typeof c !== 'object' || c.require) {
            return c;
          }
          var require = [];
          Object.keys(c).forEach(function(key) {
            if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
              return;
            }
            var r = c[key] = (typeof c[key] === 'object') ?
                c[key] : {ideal: c[key]};
            if (r.min !== undefined ||
                r.max !== undefined || r.exact !== undefined) {
              require.push(key);
            }
            if (r.exact !== undefined) {
              if (typeof r.exact === 'number') {
                r. min = r.max = r.exact;
              } else {
                c[key] = r.exact;
              }
              delete r.exact;
            }
            if (r.ideal !== undefined) {
              c.advanced = c.advanced || [];
              var oc = {};
              if (typeof r.ideal === 'number') {
                oc[key] = {min: r.ideal, max: r.ideal};
              } else {
                oc[key] = r.ideal;
              }
              c.advanced.push(oc);
              delete r.ideal;
              if (!Object.keys(r).length) {
                delete c[key];
              }
            }
          });
          if (require.length) {
            c.require = require;
          }
          return c;
        };
        constraints = JSON.parse(JSON.stringify(constraints));
        if (browserDetails.version < 38) {
          logging('spec: ' + JSON.stringify(constraints));
          if (constraints.audio) {
            constraints.audio = constraintsToFF37_(constraints.audio);
          }
          if (constraints.video) {
            constraints.video = constraintsToFF37_(constraints.video);
          }
          logging('ff37: ' + JSON.stringify(constraints));
        }
        return navigator.mozGetUserMedia(constraints, onSuccess, function(e) {
          onError(shimError_(e));
        });
      };
    
      // Returns the result of getUserMedia as a Promise.
      var getUserMediaPromise_ = function(constraints) {
        return new Promise(function(resolve, reject) {
          getUserMedia_(constraints, resolve, reject);
        });
      };
    
      // Shim for mediaDevices on older versions.
      if (!navigator.mediaDevices) {
        navigator.mediaDevices = {getUserMedia: getUserMediaPromise_,
          addEventListener: function() { },
          removeEventListener: function() { }
        };
      }
      navigator.mediaDevices.enumerateDevices =
          navigator.mediaDevices.enumerateDevices || function() {
            return new Promise(function(resolve) {
              var infos = [
                {kind: 'audioinput', deviceId: 'default', label: '', groupId: ''},
                {kind: 'videoinput', deviceId: 'default', label: '', groupId: ''}
              ];
              resolve(infos);
            });
          };
    
      if (browserDetails.version < 41) {
        // Work around http://bugzil.la/1169665
        var orgEnumerateDevices =
            navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
        navigator.mediaDevices.enumerateDevices = function() {
          return orgEnumerateDevices().then(undefined, function(e) {
            if (e.name === 'NotFoundError') {
              return [];
            }
            throw e;
          });
        };
      }
      if (browserDetails.version < 49) {
        var origGetUserMedia = navigator.mediaDevices.getUserMedia.
            bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(c) {
          return origGetUserMedia(c).then(function(stream) {
            // Work around https://bugzil.la/802326
            if (c.audio && !stream.getAudioTracks().length ||
                c.video && !stream.getVideoTracks().length) {
              stream.getTracks().forEach(function(track) {
                track.stop();
              });
              throw new DOMException('The object can not be found here.',
                                     'NotFoundError');
            }
            return stream;
          }, function(e) {
            return Promise.reject(shimError_(e));
          });
        };
      }
      if (!(browserDetails.version > 55 &&
          'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
        var remap = function(obj, a, b) {
          if (a in obj && !(b in obj)) {
            obj[b] = obj[a];
            delete obj[a];
          }
        };
    
        var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.
            bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(c) {
          if (typeof c === 'object' && typeof c.audio === 'object') {
            c = JSON.parse(JSON.stringify(c));
            remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
            remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
          }
          return nativeGetUserMedia(c);
        };
    
        if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
          var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
          MediaStreamTrack.prototype.getSettings = function() {
            var obj = nativeGetSettings.apply(this, arguments);
            remap(obj, 'mozAutoGainControl', 'autoGainControl');
            remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
            return obj;
          };
        }
    
        if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
          var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
          MediaStreamTrack.prototype.applyConstraints = function(c) {
            if (this.kind === 'audio' && typeof c === 'object') {
              c = JSON.parse(JSON.stringify(c));
              remap(c, 'autoGainControl', 'mozAutoGainControl');
              remap(c, 'noiseSuppression', 'mozNoiseSuppression');
            }
            return nativeApplyConstraints.apply(this, [c]);
          };
        }
      }
      navigator.getUserMedia = function(constraints, onSuccess, onError) {
        if (browserDetails.version < 44) {
          return getUserMedia_(constraints, onSuccess, onError);
        }
        // Replace Firefox 44+'s deprecation warning with unprefixed version.
        utils.deprecated('navigator.getUserMedia',
            'navigator.mediaDevices.getUserMedia');
        navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
      };
    };
    
    },{"../utils":134}],133:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
    'use strict';
    var utils = require('../utils');
    
    module.exports = {
      shimLocalStreamsAPI: function(window) {
        if (typeof window !== 'object' || !window.RTCPeerConnection) {
          return;
        }
        if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
          window.RTCPeerConnection.prototype.getLocalStreams = function() {
            if (!this._localStreams) {
              this._localStreams = [];
            }
            return this._localStreams;
          };
        }
        if (!('getStreamById' in window.RTCPeerConnection.prototype)) {
          window.RTCPeerConnection.prototype.getStreamById = function(id) {
            var result = null;
            if (this._localStreams) {
              this._localStreams.forEach(function(stream) {
                if (stream.id === id) {
                  result = stream;
                }
              });
            }
            if (this._remoteStreams) {
              this._remoteStreams.forEach(function(stream) {
                if (stream.id === id) {
                  result = stream;
                }
              });
            }
            return result;
          };
        }
        if (!('addStream' in window.RTCPeerConnection.prototype)) {
          var _addTrack = window.RTCPeerConnection.prototype.addTrack;
          window.RTCPeerConnection.prototype.addStream = function(stream) {
            if (!this._localStreams) {
              this._localStreams = [];
            }
            if (this._localStreams.indexOf(stream) === -1) {
              this._localStreams.push(stream);
            }
            var pc = this;
            stream.getTracks().forEach(function(track) {
              _addTrack.call(pc, track, stream);
            });
          };
    
          window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
            if (stream) {
              if (!this._localStreams) {
                this._localStreams = [stream];
              } else if (this._localStreams.indexOf(stream) === -1) {
                this._localStreams.push(stream);
              }
            }
            return _addTrack.call(this, track, stream);
          };
        }
        if (!('removeStream' in window.RTCPeerConnection.prototype)) {
          window.RTCPeerConnection.prototype.removeStream = function(stream) {
            if (!this._localStreams) {
              this._localStreams = [];
            }
            var index = this._localStreams.indexOf(stream);
            if (index === -1) {
              return;
            }
            this._localStreams.splice(index, 1);
            var pc = this;
            var tracks = stream.getTracks();
            this.getSenders().forEach(function(sender) {
              if (tracks.indexOf(sender.track) !== -1) {
                pc.removeTrack(sender);
              }
            });
          };
        }
      },
      shimRemoteStreamsAPI: function(window) {
        if (typeof window !== 'object' || !window.RTCPeerConnection) {
          return;
        }
        if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
          window.RTCPeerConnection.prototype.getRemoteStreams = function() {
            return this._remoteStreams ? this._remoteStreams : [];
          };
        }
        if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
          Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
            get: function() {
              return this._onaddstream;
            },
            set: function(f) {
              if (this._onaddstream) {
                this.removeEventListener('addstream', this._onaddstream);
              }
              this.addEventListener('addstream', this._onaddstream = f);
            }
          });
          var origSetRemoteDescription =
              window.RTCPeerConnection.prototype.setRemoteDescription;
          window.RTCPeerConnection.prototype.setRemoteDescription = function() {
            var pc = this;
            if (!this._onaddstreampoly) {
              this.addEventListener('track', this._onaddstreampoly = function(e) {
                e.streams.forEach(function(stream) {
                  if (!pc._remoteStreams) {
                    pc._remoteStreams = [];
                  }
                  if (pc._remoteStreams.indexOf(stream) >= 0) {
                    return;
                  }
                  pc._remoteStreams.push(stream);
                  var event = new Event('addstream');
                  event.stream = stream;
                  pc.dispatchEvent(event);
                });
              });
            }
            return origSetRemoteDescription.apply(pc, arguments);
          };
        }
      },
      shimCallbacksAPI: function(window) {
        if (typeof window !== 'object' || !window.RTCPeerConnection) {
          return;
        }
        var prototype = window.RTCPeerConnection.prototype;
        var createOffer = prototype.createOffer;
        var createAnswer = prototype.createAnswer;
        var setLocalDescription = prototype.setLocalDescription;
        var setRemoteDescription = prototype.setRemoteDescription;
        var addIceCandidate = prototype.addIceCandidate;
    
        prototype.createOffer = function(successCallback, failureCallback) {
          var options = (arguments.length >= 2) ? arguments[2] : arguments[0];
          var promise = createOffer.apply(this, [options]);
          if (!failureCallback) {
            return promise;
          }
          promise.then(successCallback, failureCallback);
          return Promise.resolve();
        };
    
        prototype.createAnswer = function(successCallback, failureCallback) {
          var options = (arguments.length >= 2) ? arguments[2] : arguments[0];
          var promise = createAnswer.apply(this, [options]);
          if (!failureCallback) {
            return promise;
          }
          promise.then(successCallback, failureCallback);
          return Promise.resolve();
        };
    
        var withCallback = function(description, successCallback, failureCallback) {
          var promise = setLocalDescription.apply(this, [description]);
          if (!failureCallback) {
            return promise;
          }
          promise.then(successCallback, failureCallback);
          return Promise.resolve();
        };
        prototype.setLocalDescription = withCallback;
    
        withCallback = function(description, successCallback, failureCallback) {
          var promise = setRemoteDescription.apply(this, [description]);
          if (!failureCallback) {
            return promise;
          }
          promise.then(successCallback, failureCallback);
          return Promise.resolve();
        };
        prototype.setRemoteDescription = withCallback;
    
        withCallback = function(candidate, successCallback, failureCallback) {
          var promise = addIceCandidate.apply(this, [candidate]);
          if (!failureCallback) {
            return promise;
          }
          promise.then(successCallback, failureCallback);
          return Promise.resolve();
        };
        prototype.addIceCandidate = withCallback;
      },
      shimGetUserMedia: function(window) {
        var navigator = window && window.navigator;
    
        if (!navigator.getUserMedia) {
          if (navigator.webkitGetUserMedia) {
            navigator.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
          } else if (navigator.mediaDevices &&
              navigator.mediaDevices.getUserMedia) {
            navigator.getUserMedia = function(constraints, cb, errcb) {
              navigator.mediaDevices.getUserMedia(constraints)
              .then(cb, errcb);
            }.bind(navigator);
          }
        }
      },
      shimRTCIceServerUrls: function(window) {
        // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
        var OrigPeerConnection = window.RTCPeerConnection;
        window.RTCPeerConnection = function(pcConfig, pcConstraints) {
          if (pcConfig && pcConfig.iceServers) {
            var newIceServers = [];
            for (var i = 0; i < pcConfig.iceServers.length; i++) {
              var server = pcConfig.iceServers[i];
              if (!server.hasOwnProperty('urls') &&
                  server.hasOwnProperty('url')) {
                utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                server = JSON.parse(JSON.stringify(server));
                server.urls = server.url;
                delete server.url;
                newIceServers.push(server);
              } else {
                newIceServers.push(pcConfig.iceServers[i]);
              }
            }
            pcConfig.iceServers = newIceServers;
          }
          return new OrigPeerConnection(pcConfig, pcConstraints);
        };
        window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
        // wrap static methods. Currently just generateCertificate.
        if ('generateCertificate' in window.RTCPeerConnection) {
          Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
            get: function() {
              return OrigPeerConnection.generateCertificate;
            }
          });
        }
      },
      shimTrackEventTransceiver: function(window) {
        // Add event.transceiver member over deprecated event.receiver
        if (typeof window === 'object' && window.RTCPeerConnection &&
            ('receiver' in window.RTCTrackEvent.prototype) &&
            // can't check 'transceiver' in window.RTCTrackEvent.prototype, as it is
            // defined for some reason even when window.RTCTransceiver is not.
            !window.RTCTransceiver) {
          Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
            get: function() {
              return {receiver: this.receiver};
            }
          });
        }
      },
    
      shimCreateOfferLegacy: function(window) {
        var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
        window.RTCPeerConnection.prototype.createOffer = function(offerOptions) {
          var pc = this;
          if (offerOptions) {
            if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
              // support bit values
              offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
            }
            var audioTransceiver = pc.getTransceivers().find(function(transceiver) {
              return transceiver.sender.track &&
                  transceiver.sender.track.kind === 'audio';
            });
            if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
              if (audioTransceiver.direction === 'sendrecv') {
                if (audioTransceiver.setDirection) {
                  audioTransceiver.setDirection('sendonly');
                } else {
                  audioTransceiver.direction = 'sendonly';
                }
              } else if (audioTransceiver.direction === 'recvonly') {
                if (audioTransceiver.setDirection) {
                  audioTransceiver.setDirection('inactive');
                } else {
                  audioTransceiver.direction = 'inactive';
                }
              }
            } else if (offerOptions.offerToReceiveAudio === true &&
                !audioTransceiver) {
              pc.addTransceiver('audio');
            }
    
    
            if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
              // support bit values
              offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
            }
            var videoTransceiver = pc.getTransceivers().find(function(transceiver) {
              return transceiver.sender.track &&
                  transceiver.sender.track.kind === 'video';
            });
            if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
              if (videoTransceiver.direction === 'sendrecv') {
                videoTransceiver.setDirection('sendonly');
              } else if (videoTransceiver.direction === 'recvonly') {
                videoTransceiver.setDirection('inactive');
              }
            } else if (offerOptions.offerToReceiveVideo === true &&
                !videoTransceiver) {
              pc.addTransceiver('video');
            }
          }
          return origCreateOffer.apply(pc, arguments);
        };
      }
    };
    
    },{"../utils":134}],134:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    
    var logDisabled_ = true;
    var deprecationWarnings_ = true;
    
    /**
     * Extract browser version out of the provided user agent string.
     *
     * @param {!string} uastring userAgent string.
     * @param {!string} expr Regular expression used as match criteria.
     * @param {!number} pos position in the version string to be returned.
     * @return {!number} browser version.
     */
    function extractVersion(uastring, expr, pos) {
      var match = uastring.match(expr);
      return match && match.length >= pos && parseInt(match[pos], 10);
    }
    
    // Wraps the peerconnection event eventNameToWrap in a function
    // which returns the modified event object (or false to prevent
    // the event).
    function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
      if (!window.RTCPeerConnection) {
        return;
      }
      var proto = window.RTCPeerConnection.prototype;
      var nativeAddEventListener = proto.addEventListener;
      proto.addEventListener = function(nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap) {
          return nativeAddEventListener.apply(this, arguments);
        }
        var wrappedCallback = function(e) {
          var modifiedEvent = wrapper(e);
          if (modifiedEvent) {
            cb(modifiedEvent);
          }
        };
        this._eventMap = this._eventMap || {};
        this._eventMap[cb] = wrappedCallback;
        return nativeAddEventListener.apply(this, [nativeEventName,
          wrappedCallback]);
      };
    
      var nativeRemoveEventListener = proto.removeEventListener;
      proto.removeEventListener = function(nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap || !this._eventMap
            || !this._eventMap[cb]) {
          return nativeRemoveEventListener.apply(this, arguments);
        }
        var unwrappedCb = this._eventMap[cb];
        delete this._eventMap[cb];
        return nativeRemoveEventListener.apply(this, [nativeEventName,
          unwrappedCb]);
      };
    
      Object.defineProperty(proto, 'on' + eventNameToWrap, {
        get: function() {
          return this['_on' + eventNameToWrap];
        },
        set: function(cb) {
          if (this['_on' + eventNameToWrap]) {
            this.removeEventListener(eventNameToWrap,
                this['_on' + eventNameToWrap]);
            delete this['_on' + eventNameToWrap];
          }
          if (cb) {
            this.addEventListener(eventNameToWrap,
                this['_on' + eventNameToWrap] = cb);
          }
        },
        enumerable: true,
        configurable: true
      });
    }
    
    // Utility methods.
    module.exports = {
      extractVersion: extractVersion,
      wrapPeerConnectionEvent: wrapPeerConnectionEvent,
      disableLog: function(bool) {
        if (typeof bool !== 'boolean') {
          return new Error('Argument type: ' + typeof bool +
              '. Please use a boolean.');
        }
        logDisabled_ = bool;
        return (bool) ? 'adapter.js logging disabled' :
            'adapter.js logging enabled';
      },
    
      /**
       * Disable or enable deprecation warnings
       * @param {!boolean} bool set to true to disable warnings.
       */
      disableWarnings: function(bool) {
        if (typeof bool !== 'boolean') {
          return new Error('Argument type: ' + typeof bool +
              '. Please use a boolean.');
        }
        deprecationWarnings_ = !bool;
        return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
      },
    
      log: function() {
        if (typeof window === 'object') {
          if (logDisabled_) {
            return;
          }
          if (typeof console !== 'undefined' && typeof console.log === 'function') {
            console.log.apply(console, arguments);
          }
        }
      },
    
      /**
       * Shows a deprecation warning suggesting the modern and spec-compatible API.
       */
      deprecated: function(oldMethod, newMethod) {
        if (!deprecationWarnings_) {
          return;
        }
        console.warn(oldMethod + ' is deprecated, please use ' + newMethod +
            ' instead.');
      },
    
      /**
       * Browser detector.
       *
       * @return {object} result containing browser and version
       *     properties.
       */
      detectBrowser: function(window) {
        var navigator = window && window.navigator;
    
        // Returned result object.
        var result = {};
        result.browser = null;
        result.version = null;
    
        // Fail early if it's not a browser
        if (typeof window === 'undefined' || !window.navigator) {
          result.browser = 'Not a browser.';
          return result;
        }
    
        if (navigator.mozGetUserMedia) { // Firefox.
          result.browser = 'firefox';
          result.version = extractVersion(navigator.userAgent,
              /Firefox\/(\d+)\./, 1);
        } else if (navigator.webkitGetUserMedia) {
          // Chrome, Chromium, Webview, Opera.
          // Version matches Chrome/WebRTC version.
          result.browser = 'chrome';
          result.version = extractVersion(navigator.userAgent,
              /Chrom(e|ium)\/(\d+)\./, 2);
        } else if (navigator.mediaDevices &&
            navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) { // Edge.
          result.browser = 'edge';
          result.version = extractVersion(navigator.userAgent,
              /Edge\/(\d+).(\d+)$/, 2);
        } else if (window.RTCPeerConnection &&
            navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) { // Safari.
          result.browser = 'safari';
          result.version = extractVersion(navigator.userAgent,
              /AppleWebKit\/(\d+)\./, 1);
        } else { // Default fallthrough: not supported.
          result.browser = 'Not a supported browser.';
          return result;
        }
    
        return result;
      }
    };
    
    },{}],135:[function(require,module,exports){
    (function (global){(function (){
    'use strict';
    
    require('webrtc-adapter');
    
    var _rtc_session = require('./rtc_session');
    
    var _rtc_session2 = _interopRequireDefault(_rtc_session);
    
    require('../../lib/HorizonSDKforWebRTCRedir');
    
    var _rtc_const = require('./rtc_const');
    
    var _rtc_peer_connection_factory = require('./rtc_peer_connection_factory');
    
    var _rtc_peer_connection_factory2 = _interopRequireDefault(_rtc_peer_connection_factory);
    
    var _v = require('uuid/v4');
    
    var _v2 = _interopRequireDefault(_v);
    
    var _StandardStrategy = require('./strategies/StandardStrategy');
    
    var _StandardStrategy2 = _interopRequireDefault(_StandardStrategy);
    
    var _CitrixVDIStrategy = require('./strategies/CitrixVDIStrategy');
    
    var _CitrixVDIStrategy2 = _interopRequireDefault(_CitrixVDIStrategy);
    
    var _VMwareVDIStrategy = require('./strategies/VMwareVDIStrategy');
    
    var _VMwareVDIStrategy2 = _interopRequireDefault(_VMwareVDIStrategy);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    /**
     * @license
     * License info for uuid module assembled into js bundle:
     *
     * The MIT License (MIT)
     *
     * Copyright (c) 2010-2016 Robert Kieffer and other contributors
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    global.connect = global.connect || {}; /**
                                            * @license
                                            * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
                                            *
                                            * SPDX-License-Identifier: Apache-2.0
                                            */
    /**
     * @license
     * License info for webrtc-adapter module assembled into js bundle:
     *
     * Copyright (c) 2014, The WebRTC project authors. All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
     *
     * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
     *
     * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
     *
     * Neither the name of Google nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */
    /**
     * @license
     * License info for sdp module assembled into js bundle:
     *
     * See https://www.npmjs.com/package/sdp
     */
    
    global.connect.RTCSession = _rtc_session2.default;
    global.connect.RTCErrors = _rtc_const.RTC_ERRORS;
    global.connect.RtcPeerConnectionFactory = _rtc_peer_connection_factory2.default;
    global.connect.uuid = _v2.default;
    global.connect.StandardStrategy = _StandardStrategy2.default;
    global.connect.CitrixVDIStrategy = _CitrixVDIStrategy2.default;
    global.connect.VMwareVDIStrategy = _VMwareVDIStrategy2.default;
    
    global.lily = global.lily || {};
    global.lily.RTCSession = _rtc_session2.default;
    global.lily.RTCErrors = _rtc_const.RTC_ERRORS;
    
    }).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{"../../lib/HorizonSDKforWebRTCRedir":1,"./rtc_const":137,"./rtc_peer_connection_factory":138,"./rtc_session":139,"./strategies/CitrixVDIStrategy":144,"./strategies/StandardStrategy":145,"./strategies/VMwareVDIStrategy":146,"uuid/v4":122,"webrtc-adapter":123}],136:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.UnknownSignalingError = exports.UnknownSignalingErrorName = exports.CallNotFoundException = exports.CallNotFoundExceptionName = exports.BusyException = exports.BusyExceptionName = exports.UnsupportedOperation = exports.UnsupportedOperationExceptionName = exports.IllegalState = exports.IllegalStateExceptionName = exports.IllegalParameters = exports.IllegalParametersExceptionName = exports.GumTimeout = exports.GumTimeoutExceptionName = exports.Timeout = exports.TimeoutExceptionName = undefined;
    
    var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');
    
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
    var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');
    
    var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
    
    var _inherits2 = require('babel-runtime/helpers/inherits');
    
    var _inherits3 = _interopRequireDefault(_inherits2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    /**
     * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
     *
     * SPDX-License-Identifier: Apache-2.0
     */
    var TimeoutExceptionName = exports.TimeoutExceptionName = 'Timeout';
    
    var Timeout = exports.Timeout = function (_Error) {
        (0, _inherits3.default)(Timeout, _Error);
    
        function Timeout(msg) {
            (0, _classCallCheck3.default)(this, Timeout);
    
            var _this = (0, _possibleConstructorReturn3.default)(this, (Timeout.__proto__ || Object.getPrototypeOf(Timeout)).call(this, msg));
    
            _this.name = TimeoutExceptionName;
            return _this;
        }
    
        return Timeout;
    }(Error);
    
    var GumTimeoutExceptionName = exports.GumTimeoutExceptionName = 'GumTimeout';
    
    var GumTimeout = exports.GumTimeout = function (_Timeout) {
        (0, _inherits3.default)(GumTimeout, _Timeout);
    
        function GumTimeout(msg) {
            (0, _classCallCheck3.default)(this, GumTimeout);
    
            var _this2 = (0, _possibleConstructorReturn3.default)(this, (GumTimeout.__proto__ || Object.getPrototypeOf(GumTimeout)).call(this, msg));
    
            _this2.name = GumTimeoutExceptionName;
            return _this2;
        }
    
        return GumTimeout;
    }(Timeout);
    
    var IllegalParametersExceptionName = exports.IllegalParametersExceptionName = 'IllegalParameters';
    
    var IllegalParameters = exports.IllegalParameters = function (_Error2) {
        (0, _inherits3.default)(IllegalParameters, _Error2);
    
        function IllegalParameters(msg) {
            (0, _classCallCheck3.default)(this, IllegalParameters);
    
            var _this3 = (0, _possibleConstructorReturn3.default)(this, (IllegalParameters.__proto__ || Object.getPrototypeOf(IllegalParameters)).call(this, msg));
    
            _this3.name = IllegalParametersExceptionName;
            return _this3;
        }
    
        return IllegalParameters;
    }(Error);
    
    var IllegalStateExceptionName = exports.IllegalStateExceptionName = 'IllegalState';
    
    var IllegalState = exports.IllegalState = function (_Error3) {
        (0, _inherits3.default)(IllegalState, _Error3);
    
        function IllegalState(msg) {
            (0, _classCallCheck3.default)(this, IllegalState);
    
            var _this4 = (0, _possibleConstructorReturn3.default)(this, (IllegalState.__proto__ || Object.getPrototypeOf(IllegalState)).call(this, msg));
    
            _this4.name = IllegalStateExceptionName;
            return _this4;
        }
    
        return IllegalState;
    }(Error);
    
    var UnsupportedOperationExceptionName = exports.UnsupportedOperationExceptionName = 'UnsupportedOperation';
    
    var UnsupportedOperation = exports.UnsupportedOperation = function (_Error4) {
        (0, _inherits3.default)(UnsupportedOperation, _Error4);
    
        function UnsupportedOperation(msg) {
            (0, _classCallCheck3.default)(this, UnsupportedOperation);
    
            var _this5 = (0, _possibleConstructorReturn3.default)(this, (UnsupportedOperation.__proto__ || Object.getPrototypeOf(UnsupportedOperation)).call(this, msg));
    
            _this5.name = UnsupportedOperationExceptionName;
            return _this5;
        }
    
        return UnsupportedOperation;
    }(Error);
    
    var BusyExceptionName = exports.BusyExceptionName = 'BusyException';
    
    var BusyException = exports.BusyException = function (_Error5) {
        (0, _inherits3.default)(BusyException, _Error5);
    
        function BusyException(msg) {
            (0, _classCallCheck3.default)(this, BusyException);
    
            var _this6 = (0, _possibleConstructorReturn3.default)(this, (BusyException.__proto__ || Object.getPrototypeOf(BusyException)).call(this, msg));
    
            _this6.name = BusyExceptionName;
            return _this6;
        }
    
        return BusyException;
    }(Error);
    
    var CallNotFoundExceptionName = exports.CallNotFoundExceptionName = 'CallNotFoundException';
    
    var CallNotFoundException = exports.CallNotFoundException = function (_Error6) {
        (0, _inherits3.default)(CallNotFoundException, _Error6);
    
        function CallNotFoundException(msg) {
            (0, _classCallCheck3.default)(this, CallNotFoundException);
    
            var _this7 = (0, _possibleConstructorReturn3.default)(this, (CallNotFoundException.__proto__ || Object.getPrototypeOf(CallNotFoundException)).call(this, msg));
    
            _this7.name = CallNotFoundExceptionName;
            return _this7;
        }
    
        return CallNotFoundException;
    }(Error);
    
    var UnknownSignalingErrorName = exports.UnknownSignalingErrorName = 'UnknownSignalingError';
    
    var UnknownSignalingError = exports.UnknownSignalingError = function (_Error7) {
        (0, _inherits3.default)(UnknownSignalingError, _Error7);
    
        function UnknownSignalingError() {
            (0, _classCallCheck3.default)(this, UnknownSignalingError);
    
            var _this8 = (0, _possibleConstructorReturn3.default)(this, (UnknownSignalingError.__proto__ || Object.getPrototypeOf(UnknownSignalingError)).call(this));
    
            _this8.name = UnknownSignalingErrorName;
            return _this8;
        }
    
        return UnknownSignalingError;
    }(Error);
    
    },{"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],137:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /**
     * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
     *
     * SPDX-License-Identifier: Apache-2.0
     */
    
    /**
     * Timeout waiting for server response to accept/hangup request.
     */
    var MAX_ACCEPT_BYE_DELAY_MS = exports.MAX_ACCEPT_BYE_DELAY_MS = 2000;
    /**
     * Timeout waiting for server response to invite.
     */
    var MAX_INVITE_DELAY_MS = exports.MAX_INVITE_DELAY_MS = 5000;
    /**
     *  Default timeout on opening WebSocket connection.
     */
    var DEFAULT_CONNECT_TIMEOUT_MS = exports.DEFAULT_CONNECT_TIMEOUT_MS = 10000;
    /**
     * Default ice collection timeout in milliseconds.
     */
    var DEFAULT_ICE_TIMEOUT_MS = exports.DEFAULT_ICE_TIMEOUT_MS = 8000;
    /**
     * Default gum timeout in milliseconds to be enforced during start of a call.
     */
    var DEFAULT_GUM_TIMEOUT_MS = exports.DEFAULT_GUM_TIMEOUT_MS = 10000;
    
    var SOFTPHONE_ROUTE_KEY = exports.SOFTPHONE_ROUTE_KEY = "aws/softphone";
    
    var INVITE_METHOD_NAME = exports.INVITE_METHOD_NAME = "invite";
    var ACCEPT_METHOD_NAME = exports.ACCEPT_METHOD_NAME = "accept";
    var BYE_METHOD_NAME = exports.BYE_METHOD_NAME = "bye";
    
    var RTC_PEER_CONNECTION_CONFIG = exports.RTC_PEER_CONNECTION_CONFIG = {
        iceTransportPolicy: 'relay',
        rtcpMuxPolicy: 'require',
        bundlePolicy: 'balanced',
        sdpSemantics: 'unified-plan',
        enableDtlsSrtp: true
    };
    
    var RTC_PEER_CONNECTION_OPTIONAL_CONFIG = exports.RTC_PEER_CONNECTION_OPTIONAL_CONFIG = {
        optional: [{
            googDscp: true
    
        }, {
            DtlsSrtpKeyAgreement: true
        }]
    };
    
    var DEFAULT_ICE_CANDIDATE_POOL_SIZE = exports.DEFAULT_ICE_CANDIDATE_POOL_SIZE = 1;
    
    var RTC_PEER_CONNECTION_IDLE_TIMEOUT_MS = exports.RTC_PEER_CONNECTION_IDLE_TIMEOUT_MS = 1 * 60 * 1000;
    
    var NETWORK_CONNECTIVITY_CHECK_INTERVAL_MS = exports.NETWORK_CONNECTIVITY_CHECK_INTERVAL_MS = 250;
    
    var CHROME_SUPPORTED_VERSION = exports.CHROME_SUPPORTED_VERSION = 59;
    
    /**
     * RTC error names.
     */
    var RTC_ERRORS = exports.RTC_ERRORS = {
        ICE_COLLECTION_TIMEOUT: 'Ice Collection Timeout',
        USER_BUSY: 'User Busy',
        SIGNALLING_CONNECTION_FAILURE: 'Signalling Connection Failure',
        SIGNALLING_HANDSHAKE_FAILURE: 'Signalling Handshake Failure',
        SET_REMOTE_DESCRIPTION_FAILURE: 'Set Remote Description Failure',
        CREATE_OFFER_FAILURE: 'Create Offer Failure',
        SET_LOCAL_DESCRIPTION_FAILURE: 'Set Local Description Failure',
        INVALID_REMOTE_SDP: 'Invalid Remote SDP',
        NO_REMOTE_ICE_CANDIDATE: 'No Remote ICE Candidate',
        GUM_TIMEOUT_FAILURE: 'GUM Timeout Failure',
        GUM_OTHER_FAILURE: 'GUM Other Failure',
        CALL_NOT_FOUND: 'Call Not Found'
    };
    
    var ICE_CONNECTION_STATE = exports.ICE_CONNECTION_STATE = {
        NEW: 'new',
        CHECKING: 'checking',
        CONNECTED: 'connected',
        COMPLETED: 'completed',
        FAILED: 'failed',
        DISCONNECTED: 'disconnected',
        CLOSED: 'closed'
    };
    
    var PEER_CONNECTION_STATE = exports.PEER_CONNECTION_STATE = {
        NEW: 'new',
        CONNECTING: 'connecting',
        CONNECTED: 'connected',
        FAILED: 'failed',
        DISCONNECTED: 'disconnected',
        CLOSED: 'closed'
    };
    
    },{}],138:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');
    
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
    var _createClass2 = require('babel-runtime/helpers/createClass');
    
    var _createClass3 = _interopRequireDefault(_createClass2);
    
    var _utils = require('./utils');
    
    var _rtc_const = require('./rtc_const');
    
    var _CCPInitiationStrategyInterface = require('./strategies/CCPInitiationStrategyInterface');
    
    var _CCPInitiationStrategyInterface2 = _interopRequireDefault(_CCPInitiationStrategyInterface);
    
    var _StandardStrategy = require('./strategies/StandardStrategy');
    
    var _StandardStrategy2 = _interopRequireDefault(_StandardStrategy);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var RtcPeerConnectionFactory = function () {
    
        //transportHandle must be a callback function which should return a promise which is going to return the iceServers. Please refer https://www.w3.org/TR/webrtc/#rtciceserver-dictionary for iceServer example
        //publishError(errorType, errorMessage) must be a callback function which will publish the passed error message to client browser
        function RtcPeerConnectionFactory(logger, wssManager, clientId, transportHandle, publishError) {
            var strategy = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : new _StandardStrategy2.default();
            (0, _classCallCheck3.default)(this, RtcPeerConnectionFactory);
    
            if (!(strategy instanceof _CCPInitiationStrategyInterface2.default)) {
                throw new Error('Expected a strategy of type CCPInitiationStrategyInterface');
            }
            (0, _utils.assertTrue)((0, _utils.isFunction)(transportHandle), 'transportHandle must be a function');
            (0, _utils.assertTrue)((0, _utils.isFunction)(publishError), 'publishError must be a function');
            this._strategy = strategy;
            this._logger = logger;
            this._clientId = clientId;
            this._wssManager = wssManager;
            this._requestIceAccess = transportHandle;
            this._publishError = publishError;
            this._earlyMediaConnectionSupported = this._isEarlyMediaConnectionSupported();
            this._initializeWebSocketEventListeners();
            this._requestPeerConnection();
            this._networkConnectivityChecker();
    
            this._logger.log("RTC.js is using " + strategy.getStrategyName());
        }
    
        (0, _createClass3.default)(RtcPeerConnectionFactory, [{
            key: '_isEarlyMediaConnectionSupported',
            value: function _isEarlyMediaConnectionSupported() {
                return this._strategy._isEarlyMediaConnectionSupported();
            }
    
            //This will handle the idleConnection and quota limits notification from the server
    
        }, {
            key: '_webSocketManagerOnMessage',
            value: function _webSocketManagerOnMessage(event) {
                var content = void 0;
                if (event.content) {
                    content = JSON.parse(event.content);
                }
                if (content && this._clientId === content.clientId) {
                    if (content.jsonRpcMsg.method === "idleConnection") {
                        this._clearIdleRtcPeerConnection();
                    } else if (content.jsonRpcMsg.method === "quotaBreached") {
                        this._logger.log("Number of active sessions are more then allowed limit for the client " + this._clientId);
                        this._closeRTCPeerConnection();
                        this._publishError("multiple_softphone_active_sessions", "Number of active sessions are more then allowed limit.");
                    }
                }
            }
        }, {
            key: '_initializeWebSocketEventListeners',
            value: function _initializeWebSocketEventListeners() {
                this._wssManager.subscribeTopics([_rtc_const.SOFTPHONE_ROUTE_KEY]);
                this._unSubscribe = this._wssManager.onMessage(_rtc_const.SOFTPHONE_ROUTE_KEY, (0, _utils.hitch)(this, this._webSocketManagerOnMessage));
            }
    
            // This method will create and return new peer connection if browser is not supporting early ice collection.
            // For the supported browser, this method will request for new peerConnection after returning the existing peerConnection
    
        }, {
            key: 'get',
            value: function get(iceServers) {
                var self = this;
                var pc = self._pc;
                self._pc = null;
                if (pc == null) {
                    pc = self._createRtcPeerConnection(iceServers);
                }
                self.clearIdleRtcPeerConnectionTimerId();
                self._requestPeerConnection();
                return pc;
            }
        }, {
            key: 'clearIdleRtcPeerConnectionTimerId',
            value: function clearIdleRtcPeerConnectionTimerId() {
                var self = this;
                if (self._idleRtcPeerConnectionTimerId) {
                    clearTimeout(self._idleRtcPeerConnectionTimerId);
                    self._idleRtcPeerConnectionTimerId = null;
                }
            }
        }, {
            key: '_requestPeerConnection',
            value: function _requestPeerConnection() {
                var self = this;
                if (!self._peerConnectionRequestInFlight && self._earlyMediaConnectionSupported) {
                    self._peerConnectionRequestInFlight = true;
                    self._requestIceAccess().then(function (response) {
                        self._pc = self._createRtcPeerConnection(response);
                        self._peerConnectionRequestInFlight = false;
                        self._idleRtcPeerConnectionTimerId = setTimeout((0, _utils.hitch)(self, self._refreshRtcPeerConnection), _rtc_const.RTC_PEER_CONNECTION_IDLE_TIMEOUT_MS);
                    },
                    // eslint-disable-next-line no-unused-vars
                    function (reason) {
                        self._peerConnectionRequestInFlight = false;
                    });
                }
            }
        }, {
            key: '_networkConnectivityChecker',
            value: function _networkConnectivityChecker() {
                var self = this;
                setInterval(function () {
                    if (!navigator.onLine && self._pc) {
                        self._logger.log("Network offline. Cleaning up early connection");
                        self._pc.close();
                        self._pc = null;
                    }
                }, _rtc_const.NETWORK_CONNECTIVITY_CHECK_INTERVAL_MS);
            }
        }, {
            key: '_createRtcPeerConnection',
            value: function _createRtcPeerConnection(iceServers) {
                var rtcPeerConnectionConfig = JSON.parse(JSON.stringify(_rtc_const.RTC_PEER_CONNECTION_CONFIG));
                rtcPeerConnectionConfig.iceServers = iceServers;
                rtcPeerConnectionConfig.iceCandidatePoolSize = _rtc_const.DEFAULT_ICE_CANDIDATE_POOL_SIZE;
                return this._strategy._createRtcPeerConnection(rtcPeerConnectionConfig, _rtc_const.RTC_PEER_CONNECTION_OPTIONAL_CONFIG);
            }
        }, {
            key: '_clearIdleRtcPeerConnection',
            value: function _clearIdleRtcPeerConnection() {
                this._logger.log("session is idle from long time. closing the peer connection for client " + this._clientId);
                this._closeRTCPeerConnection();
            }
        }, {
            key: '_refreshRtcPeerConnection',
            value: function _refreshRtcPeerConnection() {
                this._idleRtcPeerConnectionTimerId = null;
                this._clearIdleRtcPeerConnection();
                this._logger.log("refreshing peer connection for client " + this._clientId);
                this._requestPeerConnection();
            }
        }, {
            key: '_closeRTCPeerConnection',
            value: function _closeRTCPeerConnection() {
                if (this._pc) {
                    this._pc.close();
                    this._pc = null;
                }
            }
        }]);
        return RtcPeerConnectionFactory;
    }();
    
    exports.default = RtcPeerConnectionFactory;
    
    },{"./rtc_const":137,"./strategies/CCPInitiationStrategyInterface":143,"./strategies/StandardStrategy":145,"./utils":147,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],139:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.FailedState = exports.DisconnectedState = exports.CleanUpState = exports.TalkingState = exports.AcceptState = exports.InviteAnswerState = exports.ConnectSignalingAndIceCollectionState = exports.SetLocalSessionDescriptionState = exports.CreateOfferState = exports.GrabLocalMediaState = exports.RTCSessionState = undefined;
    
    var _regenerator = require('babel-runtime/regenerator');
    
    var _regenerator2 = _interopRequireDefault(_regenerator);
    
    var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');
    
    var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
    
    var _typeof2 = require('babel-runtime/helpers/typeof');
    
    var _typeof3 = _interopRequireDefault(_typeof2);
    
    var _get2 = require('babel-runtime/helpers/get');
    
    var _get3 = _interopRequireDefault(_get2);
    
    var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');
    
    var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
    
    var _inherits2 = require('babel-runtime/helpers/inherits');
    
    var _inherits3 = _interopRequireDefault(_inherits2);
    
    var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');
    
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
    var _createClass2 = require('babel-runtime/helpers/createClass');
    
    var _createClass3 = _interopRequireDefault(_createClass2);
    
    var _utils = require('./utils');
    
    var _session_report = require('./session_report');
    
    var _rtc_const = require('./rtc_const');
    
    var _exceptions = require('./exceptions');
    
    var _signaling = require('./signaling');
    
    var _signaling2 = _interopRequireDefault(_signaling);
    
    var _v = require('uuid/v4');
    
    var _v2 = _interopRequireDefault(_v);
    
    var _rtpStats = require('./rtp-stats');
    
    var _sdp = require('sdp');
    
    var _CCPInitiationStrategyInterface = require('./strategies/CCPInitiationStrategyInterface');
    
    var _CCPInitiationStrategyInterface2 = _interopRequireDefault(_CCPInitiationStrategyInterface);
    
    var _StandardStrategy = require('./strategies/StandardStrategy');
    
    var _StandardStrategy2 = _interopRequireDefault(_StandardStrategy);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    /**
     * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
     *
     * SPDX-License-Identifier: Apache-2.0
     */
    var RTCSessionState = exports.RTCSessionState = function () {
        /**
         *
         * @param {RtcSession} rtcSession
         */
        function RTCSessionState(rtcSession) {
            (0, _classCallCheck3.default)(this, RTCSessionState);
    
            this._rtcSession = rtcSession;
        }
    
        (0, _createClass3.default)(RTCSessionState, [{
            key: 'onEnter',
            value: function onEnter() {}
        }, {
            key: 'onExit',
            value: function onExit() {}
        }, {
            key: '_isCurrentState',
            value: function _isCurrentState() {
                return this._rtcSession._state === this;
            }
        }, {
            key: 'transit',
            value: function transit(nextState) {
                if (this._isCurrentState()) {
                    this._rtcSession.transit(nextState);
                }
            }
        }, {
            key: 'hangup',
            value: function hangup() {
                this.transit(new FailedState(this._rtcSession));
            }
        }, {
            key: 'onIceCandidate',
            value: function onIceCandidate(evt) {// eslint-disable-line no-unused-vars
                //ignore candidate by default, ConnectSignalingAndIceCollectionState will override to collect candidates, but collecting process could last much longer than ConnectSignalingAndIceCollectionState
                //we don't want to spam the console log
            }
        }, {
            key: 'onRemoteHungup',
            value: function onRemoteHungup() {
                throw new _exceptions.UnsupportedOperation('onRemoteHungup not implemented by ' + this.name);
            }
        }, {
            key: 'onSignalingConnected',
            value: function onSignalingConnected() {
                throw new _exceptions.UnsupportedOperation('onSignalingConnected not implemented by ' + this.name);
            }
        }, {
            key: 'onSignalingHandshaked',
            value: function onSignalingHandshaked() {
                throw new _exceptions.UnsupportedOperation('onSignalingHandshaked not implemented by ' + this.name);
            }
        }, {
            key: 'onSignalingFailed',
            value: function onSignalingFailed(e) {
                // eslint-disable-line no-unused-vars
                throw new _exceptions.UnsupportedOperation('onSignalingFailed not implemented by ' + this.name);
            }
        }, {
            key: 'onIceStateChange',
            value: function onIceStateChange(evt) {// eslint-disable-line no-unused-vars
            }
        }, {
            key: 'logger',
            get: function get() {
                return this._rtcSession._logger;
            }
        }, {
            key: 'name',
            get: function get() {
                return "RTCSessionState";
            }
        }]);
        return RTCSessionState;
    }();
    
    var GrabLocalMediaState = exports.GrabLocalMediaState = function (_RTCSessionState) {
        (0, _inherits3.default)(GrabLocalMediaState, _RTCSessionState);
    
        function GrabLocalMediaState() {
            (0, _classCallCheck3.default)(this, GrabLocalMediaState);
            return (0, _possibleConstructorReturn3.default)(this, (GrabLocalMediaState.__proto__ || Object.getPrototypeOf(GrabLocalMediaState)).apply(this, arguments));
        }
    
        (0, _createClass3.default)(GrabLocalMediaState, [{
            key: 'onEnter',
            value: function onEnter() {
                var self = this;
                var startTime = Date.now();
                if (self._rtcSession._isUserProvidedStream) {
                    self.transit(new CreateOfferState(self._rtcSession));
                } else {
                    var gumTimeoutPromise = new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            reject(new _exceptions.GumTimeout('Local media has not been initialized yet.'));
                        }, self._rtcSession._gumTimeoutMillis);
                    });
                    var sessionGumPromise = self._gUM(self._rtcSession._buildMediaConstraints());
    
                    Promise.race([sessionGumPromise, gumTimeoutPromise]).then(function (stream) {
                        self._rtcSession._sessionReport.gumTimeMillis = Date.now() - startTime;
                        self._rtcSession._onGumSuccess(self._rtcSession);
                        self._rtcSession._localStream = stream;
                        self._rtcSession._sessionReport.gumOtherFailure = false;
                        self._rtcSession._sessionReport.gumTimeoutFailure = false;
                        self.transit(new CreateOfferState(self._rtcSession));
                    }).catch(function (e) {
                        self._rtcSession._sessionReport.gumTimeMillis = Date.now() - startTime;
                        var errorReason;
                        if (e instanceof _exceptions.GumTimeout) {
                            errorReason = _rtc_const.RTC_ERRORS.GUM_TIMEOUT_FAILURE;
                            self._rtcSession._sessionReport.gumTimeoutFailure = true;
                            self._rtcSession._sessionReport.gumOtherFailure = false;
                        } else {
                            errorReason = _rtc_const.RTC_ERRORS.GUM_OTHER_FAILURE;
                            self._rtcSession._sessionReport.gumOtherFailure = true;
                            self._rtcSession._sessionReport.gumTimeoutFailure = false;
                        }
                        self.logger.error('Local media initialization failed', e);
                        self._rtcSession._onGumError(self._rtcSession);
                        self.transit(new FailedState(self._rtcSession, errorReason));
                    });
                }
            }
        }, {
            key: '_gUM',
            value: function _gUM(constraints) {
                return this._rtcSession._strategy._gUM(constraints);
            }
        }, {
            key: 'name',
            get: function get() {
                return "GrabLocalMediaState";
            }
        }]);
        return GrabLocalMediaState;
    }(RTCSessionState);
    
    var CreateOfferState = exports.CreateOfferState = function (_RTCSessionState2) {
        (0, _inherits3.default)(CreateOfferState, _RTCSessionState2);
    
        function CreateOfferState() {
            (0, _classCallCheck3.default)(this, CreateOfferState);
            return (0, _possibleConstructorReturn3.default)(this, (CreateOfferState.__proto__ || Object.getPrototypeOf(CreateOfferState)).apply(this, arguments));
        }
    
        (0, _createClass3.default)(CreateOfferState, [{
            key: 'onEnter',
            value: function onEnter() {
                var self = this;
                var stream = self._rtcSession._localStream;
                self._rtcSession._strategy.addStream(self._rtcSession._pc, stream);
                self._rtcSession._onLocalStreamAdded(self._rtcSession, stream);
                self._rtcSession._pc.createOffer().then(function (rtcSessionDescription) {
                    self._rtcSession._localSessionDescription = rtcSessionDescription;
                    self._rtcSession._sessionReport.createOfferFailure = false;
                    self.transit(new SetLocalSessionDescriptionState(self._rtcSession));
                }).catch(function (e) {
                    self.logger.error('CreateOffer failed', e);
                    self._rtcSession._sessionReport.createOfferFailure = true;
                    self.transit(new FailedState(self._rtcSession, _rtc_const.RTC_ERRORS.CREATE_OFFER_FAILURE));
                });
            }
        }, {
            key: 'name',
            get: function get() {
                return "CreateOfferState";
            }
        }]);
        return CreateOfferState;
    }(RTCSessionState);
    
    var SetLocalSessionDescriptionState = exports.SetLocalSessionDescriptionState = function (_RTCSessionState3) {
        (0, _inherits3.default)(SetLocalSessionDescriptionState, _RTCSessionState3);
    
        function SetLocalSessionDescriptionState() {
            (0, _classCallCheck3.default)(this, SetLocalSessionDescriptionState);
            return (0, _possibleConstructorReturn3.default)(this, (SetLocalSessionDescriptionState.__proto__ || Object.getPrototypeOf(SetLocalSessionDescriptionState)).apply(this, arguments));
        }
    
        (0, _createClass3.default)(SetLocalSessionDescriptionState, [{
            key: 'onEnter',
            value: function onEnter() {
                var self = this;
    
                // fix/modify SDP as needed here, before setLocalDescription
                var localDescription = self._rtcSession._localSessionDescription;
                var sdpOptions = new _utils.SdpOptions();
                // Set audio codec.
                if (self._rtcSession._forceAudioCodec) {
                    sdpOptions.forceCodec['audio'] = self._rtcSession._forceAudioCodec;
                }
                // Set video codec.
                if (self._rtcSession._forceVideoCodec) {
                    sdpOptions.forceCodec['video'] = self._rtcSession._forceVideoCodec;
                }
                sdpOptions.enableOpusDtx = self._rtcSession._enableOpusDtx;
    
                var transformedSdp = (0, _utils.transformSdp)(localDescription.sdp, sdpOptions);
                localDescription.sdp = transformedSdp.sdp;
                localDescription.sdp += 'a=ptime:20\r\n';
                localDescription.sdp += 'a=maxptime:20\r\n';
                localDescription.sdp = localDescription.sdp.replace("minptime=10", "minptime=20");
    
                self.logger.info('LocalSD', self._rtcSession._localSessionDescription);
                self._rtcSession._pc.setLocalDescription(self._rtcSession._localSessionDescription).then(function () {
                    var initializationTime = Date.now() - self._rtcSession._connectTimeStamp;
                    self._rtcSession._sessionReport.initializationTimeMillis = initializationTime;
                    self._rtcSession._onSessionInitialized(self._rtcSession, initializationTime);
                    self._rtcSession._sessionReport.setLocalDescriptionFailure = false;
                    self.transit(new ConnectSignalingAndIceCollectionState(self._rtcSession, transformedSdp.mLines));
                }).catch(function (e) {
                    self.logger.error('SetLocalDescription failed', e);
                    self._rtcSession._sessionReport.setLocalDescriptionFailure = true;
                    self.transit(new FailedState(self._rtcSession, _rtc_const.RTC_ERRORS.SET_LOCAL_DESCRIPTION_FAILURE));
                });
            }
        }, {
            key: 'name',
            get: function get() {
                return "SetLocalSessionDescriptionState";
            }
        }]);
        return SetLocalSessionDescriptionState;
    }(RTCSessionState);
    
    /**
     * Kick off signaling connection. Wait until signaling connects and ICE collection (which already started in previous state) completes.
     * ICE collection times out after user specified amount of time (default to DEFAULT_ICE_TIMEOUT_MS) in case user has complex network environment that blackholes STUN/TURN requests. In this case at least one candidate is required to move forward.
     * ICE collection could also wrap up before timeout if it's determined that RTP candidates from same TURN server have been collected for all m lines.
     */
    
    
    var ConnectSignalingAndIceCollectionState = exports.ConnectSignalingAndIceCollectionState = function (_RTCSessionState4) {
        (0, _inherits3.default)(ConnectSignalingAndIceCollectionState, _RTCSessionState4);
    
        /**
         * Create ConnectSignalingAndIceCollectionState object.
         * @param {RtcSession} rtcSession
         * @param {number} mLines Number of m lines in SDP
         */
        function ConnectSignalingAndIceCollectionState(rtcSession, mLines) {
            (0, _classCallCheck3.default)(this, ConnectSignalingAndIceCollectionState);
    
            var _this4 = (0, _possibleConstructorReturn3.default)(this, (ConnectSignalingAndIceCollectionState.__proto__ || Object.getPrototypeOf(ConnectSignalingAndIceCollectionState)).call(this, rtcSession));
    
            _this4._iceCandidates = [];
            _this4._iceCandidateFoundationsMap = {};
            _this4._mLines = mLines;
            return _this4;
        }
    
        (0, _createClass3.default)(ConnectSignalingAndIceCollectionState, [{
            key: 'onEnter',
            value: function onEnter() {
                var self = this;
                self._startTime = Date.now();
                setTimeout(function () {
                    if (self._isCurrentState() && !self._iceCompleted) {
                        self.logger.warn('ICE collection timed out');
                        self._reportIceCompleted(true);
                    }
                }, self._rtcSession._iceTimeoutMillis);
                self._rtcSession._createSignalingChannel().connect();
            }
        }, {
            key: 'onSignalingConnected',
            value: function onSignalingConnected() {
                this._rtcSession._signallingConnectTimestamp = Date.now();
                this._rtcSession._sessionReport.signallingConnectTimeMillis = this._rtcSession._signallingConnectTimestamp - this._startTime;
                this._signalingConnected = true;
                this._rtcSession._onSignalingConnected(this._rtcSession);
                this._rtcSession._sessionReport.signallingConnectionFailure = false;
                this._checkAndTransit();
            }
        }, {
            key: 'onSignalingFailed',
            value: function onSignalingFailed(e) {
                this._rtcSession._sessionReport.signallingConnectTimeMillis = Date.now() - this._startTime;
                this.logger.error('Failed connecting to signaling server', e);
                this._rtcSession._sessionReport.signallingConnectionFailure = true;
                this.transit(new FailedState(this._rtcSession, _rtc_const.RTC_ERRORS.SIGNALLING_CONNECTION_FAILURE));
            }
        }, {
            key: '_createLocalCandidate',
            value: function _createLocalCandidate(initDict) {
                return new RTCIceCandidate(initDict);
            }
        }, {
            key: 'onIceCandidate',
            value: function onIceCandidate(evt) {
                var candidate = evt.candidate;
                this.logger.log('onicecandidate ' + JSON.stringify(candidate));
                if (candidate) {
                    if (candidate.candidate) {
                        this._iceCandidates.push(this._createLocalCandidate(candidate));
                        if (!this._iceCompleted) {
                            this._checkCandidatesSufficient(candidate);
                        }
                    }
                } else {
                    this._reportIceCompleted(false);
                }
            }
        }, {
            key: '_checkCandidatesSufficient',
            value: function _checkCandidatesSufficient(candidate) {
                //check if we collected sufficient candidates from single media server to start the call
                var candidateObj = (0, _sdp.parseCandidate)(candidate.candidate);
                if (candidateObj.component != 1) {
                    return;
                }
                var candidateFoundation = candidateObj.foundation;
                var candidateMLineIndex = candidate.sdpMLineIndex;
                if (candidateFoundation && candidateMLineIndex >= 0 && candidateMLineIndex < this._mLines) {
                    var mIndexList = this._iceCandidateFoundationsMap[candidateFoundation] || [];
                    if (!mIndexList.includes(candidateMLineIndex)) {
                        mIndexList.push(candidateMLineIndex);
                    }
                    this._iceCandidateFoundationsMap[candidateFoundation] = mIndexList;
    
                    if (this._mLines == mIndexList.length) {
                        this._reportIceCompleted(false);
                    }
                }
            }
        }, {
            key: '_reportIceCompleted',
            value: function _reportIceCompleted(isTimeout) {
                this._rtcSession._sessionReport.iceCollectionTimeMillis = Date.now() - this._startTime;
                this._iceCompleted = true;
                this._rtcSession._onIceCollectionComplete(this._rtcSession, isTimeout, this._iceCandidates.length);
                if (this._iceCandidates.length > 0) {
                    this._rtcSession._sessionReport.iceCollectionFailure = false;
                    this._checkAndTransit();
                } else {
                    this.logger.error('No ICE candidate');
                    this._rtcSession._sessionReport.iceCollectionFailure = true;
                    this.transit(new FailedState(this._rtcSession, _rtc_const.RTC_ERRORS.ICE_COLLECTION_TIMEOUT));
                }
            }
        }, {
            key: '_checkAndTransit',
            value: function _checkAndTransit() {
                if (this._iceCompleted && this._signalingConnected) {
                    this.transit(new InviteAnswerState(this._rtcSession, this._iceCandidates));
                } else if (!this._iceCompleted) {
                    this.logger.log('Pending ICE collection');
                } else {
                    //implies _signalingConnected == false
                    this.logger.log('Pending signaling connection');
                }
            }
        }, {
            key: 'name',
            get: function get() {
                return "ConnectSignalingAndIceCollectionState";
            }
        }]);
        return ConnectSignalingAndIceCollectionState;
    }(RTCSessionState);
    
    var InviteAnswerState = exports.InviteAnswerState = function (_RTCSessionState5) {
        (0, _inherits3.default)(InviteAnswerState, _RTCSessionState5);
    
        function InviteAnswerState(rtcSession, iceCandidates) {
            (0, _classCallCheck3.default)(this, InviteAnswerState);
    
            var _this5 = (0, _possibleConstructorReturn3.default)(this, (InviteAnswerState.__proto__ || Object.getPrototypeOf(InviteAnswerState)).call(this, rtcSession));
    
            _this5._iceCandidates = iceCandidates;
            return _this5;
        }
    
        (0, _createClass3.default)(InviteAnswerState, [{
            key: 'onEnter',
            value: function onEnter() {
                var rtcSession = this._rtcSession;
                rtcSession._onSignalingStarted(rtcSession);
                rtcSession._signalingChannel.invite(rtcSession._localSessionDescription.sdp, this._iceCandidates);
            }
        }, {
            key: 'onSignalingAnswered',
            value: function onSignalingAnswered(sdp, candidates) {
                this._rtcSession._sessionReport.userBusyFailure = false;
                this._rtcSession._sessionReport.handshakingFailure = false;
                this.transit(new AcceptState(this._rtcSession, sdp, candidates));
            }
        }, {
            key: 'onSignalingFailed',
            value: function onSignalingFailed(e) {
                var reason;
                if (e.name == _exceptions.BusyExceptionName) {
                    this.logger.error('User Busy, possibly multiple CCP windows open', e);
                    this._rtcSession._sessionReport.userBusyFailure = true;
                    this._rtcSession._sessionReport.handshakingFailure = true;
                    reason = _rtc_const.RTC_ERRORS.USER_BUSY;
                } else if (e.name == _exceptions.CallNotFoundExceptionName) {
                    this.logger.error('Call not found. One of the participant probably hungup.', e);
                    reason = _rtc_const.RTC_ERRORS.CALL_NOT_FOUND;
                    this._rtcSession._sessionReport.handshakingFailure = true;
                } else {
                    this.logger.error('Failed handshaking with signaling server', e);
                    this._rtcSession._sessionReport.userBusyFailure = false;
                    this._rtcSession._sessionReport.handshakingFailure = true;
                    reason = _rtc_const.RTC_ERRORS.SIGNALLING_HANDSHAKE_FAILURE;
                }
                this.transit(new FailedState(this._rtcSession, reason));
            }
        }, {
            key: 'name',
            get: function get() {
                return "InviteAnswerState";
            }
        }]);
        return InviteAnswerState;
    }(RTCSessionState);
    
    var AcceptState = exports.AcceptState = function (_RTCSessionState6) {
        (0, _inherits3.default)(AcceptState, _RTCSessionState6);
    
        function AcceptState(rtcSession, sdp, candidates) {
            (0, _classCallCheck3.default)(this, AcceptState);
    
            var _this6 = (0, _possibleConstructorReturn3.default)(this, (AcceptState.__proto__ || Object.getPrototypeOf(AcceptState)).call(this, rtcSession));
    
            _this6._sdp = sdp;
            _this6._candidates = candidates;
            return _this6;
        }
    
        (0, _createClass3.default)(AcceptState, [{
            key: '_createSessionDescription',
            value: function _createSessionDescription(initDict) {
                return new RTCSessionDescription(initDict);
            }
        }, {
            key: '_createRemoteCandidate',
            value: function _createRemoteCandidate(initDict) {
                return new RTCIceCandidate(initDict);
            }
        }, {
            key: 'onEnter',
            value: function onEnter() {
                var self = this;
                var rtcSession = self._rtcSession;
    
                if (!self._sdp) {
                    self.logger.error('Invalid remote SDP');
                    rtcSession._stopSession();
                    rtcSession._sessionReport.invalidRemoteSDPFailure = true;
                    self.transit(new FailedState(rtcSession, _rtc_const.RTC_ERRORS.INVALID_REMOTE_SDP));
                    return;
                } else if (!self._candidates || self._candidates.length < 1) {
                    self.logger.error('No remote ICE candidate');
                    rtcSession._stopSession();
                    rtcSession._sessionReport.noRemoteIceCandidateFailure = true;
                    self.transit(new FailedState(rtcSession, _rtc_const.RTC_ERRORS.NO_REMOTE_ICE_CANDIDATE));
                    return;
                }
    
                rtcSession._sessionReport.invalidRemoteSDPFailure = false;
                rtcSession._sessionReport.noRemoteIceCandidateFailure = false;
                self._rtcSession._strategy.setRemoteDescription(self, rtcSession);
            }
        }, {
            key: 'onSignalingHandshaked',
            value: function onSignalingHandshaked() {
                this._rtcSession._sessionReport.handshakingTimeMillis = Date.now() - this._rtcSession._signallingConnectTimestamp;
                this._signalingHandshaked = true;
                this._checkAndTransit();
            }
        }, {
            key: '_checkAndTransit',
            value: function _checkAndTransit() {
                if (this._signalingHandshaked && this._remoteDescriptionSet) {
                    this.transit(new TalkingState(this._rtcSession));
                } else if (!this._signalingHandshaked) {
                    this.logger.log('Pending handshaking');
                } else {
                    //implies _remoteDescriptionSet == false
                    this.logger.log('Pending setting remote description');
                }
            }
        }, {
            key: 'name',
            get: function get() {
                return "AcceptState";
            }
        }]);
        return AcceptState;
    }(RTCSessionState);
    
    var TalkingState = exports.TalkingState = function (_RTCSessionState7) {
        (0, _inherits3.default)(TalkingState, _RTCSessionState7);
    
        function TalkingState() {
            (0, _classCallCheck3.default)(this, TalkingState);
            return (0, _possibleConstructorReturn3.default)(this, (TalkingState.__proto__ || Object.getPrototypeOf(TalkingState)).apply(this, arguments));
        }
    
        (0, _createClass3.default)(TalkingState, [{
            key: 'onEnter',
            value: function onEnter() {
                this._startTime = Date.now();
                this._rtcSession._sessionReport.preTalkingTimeMillis = this._startTime - this._rtcSession._connectTimeStamp;
                this._rtcSession._onSessionConnected(this._rtcSession);
            }
        }, {
            key: 'onSignalingReconnected',
            value: function onSignalingReconnected() {}
        }, {
            key: 'onRemoteHungup',
            value: function onRemoteHungup() {
                this._rtcSession._signalingChannel.hangup();
                this.transit(new DisconnectedState(this._rtcSession));
            }
        }, {
            key: 'hangup',
            value: function hangup() {
                this._rtcSession._signalingChannel.hangup();
                this.transit(new DisconnectedState(this._rtcSession));
            }
        }, {
            key: 'onIceStateChange',
            value: function onIceStateChange(evt) {
                var iceState = this._rtcSession._strategy.onIceStateChange(evt, this._rtcSession._pc);
                this.logger.info('ICE Connection State: ', iceState);
    
                if (iceState == _rtc_const.ICE_CONNECTION_STATE.DISCONNECTED) {
                    this.logger.info('Lost ICE connection');
                    this._rtcSession._sessionReport.iceConnectionsLost += 1;
                }
                if (iceState == _rtc_const.ICE_CONNECTION_STATE.FAILED) {
                    this._rtcSession._sessionReport.iceConnectionsFailed = true;
                }
            }
        }, {
            key: 'onPeerConnectionStateChange',
            value: function onPeerConnectionStateChange() {
                var peerConnectionState = this._rtcSession._strategy.onPeerConnectionStateChange(this._rtcSession._pc);
                this.logger.info('Peer Connection State: ', peerConnectionState);
    
                if (peerConnectionState == _rtc_const.PEER_CONNECTION_STATE.FAILED) {
                    this._rtcSession._sessionReport.peerConnectionFailed = true;
                }
            }
        }, {
            key: 'onExit',
            value: function onExit() {
                this._rtcSession._sessionReport.talkingTimeMillis = Date.now() - this._startTime;
                this._rtcSession._detachMedia();
                this._rtcSession._sessionReport.sessionEndTime = new Date();
                this._rtcSession._onSessionCompleted(this._rtcSession);
            }
        }, {
            key: 'name',
            get: function get() {
                return "TalkingState";
            }
        }]);
        return TalkingState;
    }(RTCSessionState);
    
    var CleanUpState = exports.CleanUpState = function (_RTCSessionState8) {
        (0, _inherits3.default)(CleanUpState, _RTCSessionState8);
    
        function CleanUpState() {
            (0, _classCallCheck3.default)(this, CleanUpState);
            return (0, _possibleConstructorReturn3.default)(this, (CleanUpState.__proto__ || Object.getPrototypeOf(CleanUpState)).apply(this, arguments));
        }
    
        (0, _createClass3.default)(CleanUpState, [{
            key: 'onEnter',
            value: function onEnter() {
                this._startTime = Date.now();
                this._rtcSession._stopSession();
                this._rtcSession._sessionReport.cleanupTimeMillis = Date.now() - this._startTime;
                this._rtcSession._onSessionDestroyed(this._rtcSession, this._rtcSession._sessionReport);
            }
        }, {
            key: 'hangup',
            value: function hangup() {
                //do nothing, already at the end of lifecycle
            }
        }, {
            key: 'name',
            get: function get() {
                return "CleanUpState";
            }
        }]);
        return CleanUpState;
    }(RTCSessionState);
    
    var DisconnectedState = exports.DisconnectedState = function (_CleanUpState) {
        (0, _inherits3.default)(DisconnectedState, _CleanUpState);
    
        function DisconnectedState() {
            (0, _classCallCheck3.default)(this, DisconnectedState);
            return (0, _possibleConstructorReturn3.default)(this, (DisconnectedState.__proto__ || Object.getPrototypeOf(DisconnectedState)).apply(this, arguments));
        }
    
        (0, _createClass3.default)(DisconnectedState, [{
            key: 'name',
            get: function get() {
                return "DisconnectedState";
            }
        }]);
        return DisconnectedState;
    }(CleanUpState);
    
    var FailedState = exports.FailedState = function (_CleanUpState2) {
        (0, _inherits3.default)(FailedState, _CleanUpState2);
    
        function FailedState(rtcSession, failureReason) {
            (0, _classCallCheck3.default)(this, FailedState);
    
            var _this10 = (0, _possibleConstructorReturn3.default)(this, (FailedState.__proto__ || Object.getPrototypeOf(FailedState)).call(this, rtcSession));
    
            _this10._failureReason = failureReason;
            return _this10;
        }
    
        (0, _createClass3.default)(FailedState, [{
            key: 'onEnter',
            value: function onEnter() {
                this._rtcSession._sessionReport.sessionEndTime = new Date();
                this._rtcSession._onSessionFailed(this._rtcSession, this._failureReason);
                (0, _get3.default)(FailedState.prototype.__proto__ || Object.getPrototypeOf(FailedState.prototype), 'onEnter', this).call(this);
            }
        }, {
            key: 'name',
            get: function get() {
                return "FailedState";
            }
        }]);
        return FailedState;
    }(CleanUpState);
    
    var RtcSession = function () {
        /**
         * Build an AmazonConnect RTC session.
         * @param {*} signalingUri
         * @param {*} iceServers Array of ice servers
         * @param {*} contactToken A string representing the contact token (optional)
         * @param {*} logger An object provides logging functions, such as console
         * @param {*} contactId Must be UUID, uniquely identifies the session.
         */
        function RtcSession(signalingUri, iceServers, contactToken, logger, contactId, connectionId, wssManager) {
            var strategy = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : new _StandardStrategy2.default();
            (0, _classCallCheck3.default)(this, RtcSession);
    
            if (!(strategy instanceof _CCPInitiationStrategyInterface2.default)) {
                throw new Error('Expected a strategy of type CCPInitiationStrategyInterface');
            }
            if (typeof signalingUri !== 'string' || signalingUri.trim().length === 0) {
                throw new _exceptions.IllegalParameters('signalingUri required');
            }
            if (!iceServers) {
                throw new _exceptions.IllegalParameters('iceServers required');
            }
            if ((typeof logger === 'undefined' ? 'undefined' : (0, _typeof3.default)(logger)) !== 'object') {
                throw new _exceptions.IllegalParameters('logger required');
            }
            if (!contactId) {
                this._callId = (0, _v2.default)();
            } else {
                this._callId = contactId;
            }
            this._strategy = strategy;
            this._connectionId = connectionId;
            this._wssManager = wssManager;
            this._sessionReport = new _session_report.SessionReport();
            this._signalingUri = signalingUri;
            this._iceServers = iceServers;
            this._contactToken = contactToken;
            this._originalLogger = logger;
            this._logger = (0, _utils.wrapLogger)(this._originalLogger, this._callId, 'SESSION');
            this._iceTimeoutMillis = _rtc_const.DEFAULT_ICE_TIMEOUT_MS;
            this._gumTimeoutMillis = _rtc_const.DEFAULT_GUM_TIMEOUT_MS;
    
            this._enableAudio = true;
            this._enableVideo = false;
            this._facingMode = 'user';
            this._legacyStatsReportSupport = false;
            /**
             * user may provide the stream to the RtcSession directly to connect to the other end.
             * user may also acquire the stream from the local device.
             * This flag is used to track where the stream is acquired.
             * If it's acquired from local devices, then we must close the stream when the session ends.
             * If it's provided by user (rather than local camera/microphone), then we should leave it open when the
             * session ends.
             */
            this._isUserProvidedStream = false;
    
            this._onGumError = this._onGumSuccess = this._onLocalStreamAdded = this._onSessionFailed = this._onSessionInitialized = this._onSignalingConnected = this._onIceCollectionComplete = this._onSignalingStarted = this._onSessionConnected = this._onRemoteStreamAdded = this._onSessionCompleted = this._onSessionDestroyed = function () {};
        }
    
        (0, _createClass3.default)(RtcSession, [{
            key: 'pauseLocalVideo',
            value: function pauseLocalVideo() {
                if (this._localStream) {
                    var videoTrack = this._localStream.getVideoTracks()[0];
                    if (videoTrack) {
                        videoTrack.enabled = false;
                    }
                }
            }
        }, {
            key: 'resumeLocalVideo',
            value: function resumeLocalVideo() {
                if (this._localStream) {
                    var videoTrack = this._localStream.getVideoTracks()[0];
                    if (videoTrack) {
                        videoTrack.enabled = true;
                    }
                }
            }
        }, {
            key: 'pauseRemoteVideo',
            value: function pauseRemoteVideo() {
                if (this._remoteVideoStream) {
                    var videoTrack = this._remoteVideoStream.getTracks()[1];
                    if (videoTrack) {
                        videoTrack.enabled = false;
                    }
                }
            }
        }, {
            key: 'resumeRemoteVideo',
            value: function resumeRemoteVideo() {
                if (this._remoteVideoStream) {
                    var videoTrack = this._remoteVideoStream.getTracks()[1];
                    if (videoTrack) {
                        videoTrack.enabled = true;
                    }
                }
            }
        }, {
            key: 'pauseLocalAudio',
            value: function pauseLocalAudio() {
                if (this._localStream) {
                    var audioTrack = this._localStream.getAudioTracks()[0];
                    if (audioTrack) {
                        audioTrack.enabled = false;
                    }
                }
            }
        }, {
            key: 'resumeLocalAudio',
            value: function resumeLocalAudio() {
                if (this._localStream) {
                    var audioTrack = this._localStream.getAudioTracks()[0];
                    if (audioTrack) {
                        audioTrack.enabled = true;
                    }
                }
            }
        }, {
            key: 'pauseRemoteAudio',
            value: function pauseRemoteAudio() {
                if (this._remoteAudioStream) {
                    var audioTrack = this._remoteAudioStream.getTracks()[0];
                    if (audioTrack) {
                        audioTrack.enabled = false;
                    }
                }
            }
        }, {
            key: 'resumeRemoteAudio',
            value: function resumeRemoteAudio() {
                if (this._remoteAudioStream) {
                    var audioTrack = this._remoteAudioStream.getTracks()[0];
                    if (audioTrack) {
                        audioTrack.enabled = true;
                    }
                }
            }
            /**
             * Callback when gUM succeeds.
             * First param is RtcSession object.
             */
    
        }, {
            key: 'transit',
            value: function transit(nextState) {
                try {
                    this._logger.info((this._state ? this._state.name : 'null') + ' => ' + nextState.name);
                    if (this._state && this._state.onExit) {
                        this._state.onExit();
                    }
                } finally {
                    this._state = nextState;
                    if (nextState.onEnter) {
                        try {
                            nextState.onEnter();
                        } catch (e) {
                            this._logger.warn(nextState.name + '#onEnter failed', e);
                            throw e; // eslint-disable-line no-unsafe-finally
                        }
                    }
                }
            }
        }, {
            key: '_createSignalingChannel',
            value: function _createSignalingChannel() {
                var signalingChannel = new _signaling2.default(this._callId, this._signalingUri, this._contactToken, this._originalLogger, this._signalingConnectTimeout, this._connectionId, this._wssManager);
                signalingChannel.onConnected = (0, _utils.hitch)(this, this._signalingConnected);
                signalingChannel.onAnswered = (0, _utils.hitch)(this, this._signalingAnswered);
                signalingChannel.onHandshaked = (0, _utils.hitch)(this, this._signalingHandshaked);
                signalingChannel.onRemoteHungup = (0, _utils.hitch)(this, this._signalingRemoteHungup);
                signalingChannel.onFailed = (0, _utils.hitch)(this, this._signalingFailed);
                signalingChannel.onDisconnected = (0, _utils.hitch)(this, this._signalingDisconnected);
    
                this._signalingChannel = signalingChannel;
    
                return signalingChannel;
            }
        }, {
            key: '_signalingConnected',
            value: function _signalingConnected() {
                this._state.onSignalingConnected();
            }
        }, {
            key: '_signalingAnswered',
            value: function _signalingAnswered(sdp, candidates) {
                this._state.onSignalingAnswered(sdp, candidates);
            }
        }, {
            key: '_signalingHandshaked',
            value: function _signalingHandshaked() {
                this._state.onSignalingHandshaked();
            }
        }, {
            key: '_signalingRemoteHungup',
            value: function _signalingRemoteHungup() {
                this._state.onRemoteHungup();
            }
        }, {
            key: '_signalingFailed',
            value: function _signalingFailed(e) {
                this._state.onSignalingFailed(e);
            }
        }, {
            key: '_signalingDisconnected',
            value: function _signalingDisconnected() {}
        }, {
            key: '_createPeerConnection',
            value: function _createPeerConnection(configuration, optionalConfiguration) {
                return this._strategy._createPeerConnection(configuration, optionalConfiguration);
            }
        }, {
            key: 'connect',
            value: function connect(pc) {
                var self = this;
                var now = new Date();
                self._sessionReport.sessionStartTime = now;
                self._connectTimeStamp = now.getTime();
                if (pc && pc.signalingState != 'closed') {
                    self._pc = pc;
                } else {
                    if (pc) {
                        pc.close();
                        pc = null;
                    }
                    _rtc_const.RTC_PEER_CONNECTION_CONFIG.iceServers = self._iceServers;
                    self._pc = self._createPeerConnection(_rtc_const.RTC_PEER_CONNECTION_CONFIG, _rtc_const.RTC_PEER_CONNECTION_OPTIONAL_CONFIG);
                }
                self._pc.ontrack = (0, _utils.hitch)(self, self._ontrack);
                self._pc.onicecandidate = (0, _utils.hitch)(self, self._onIceCandidate);
                self._pc.onconnectionstatechange = (0, _utils.hitch)(self, self._onPeerConnectionStateChange);
                self._pc.oniceconnectionstatechange = (0, _utils.hitch)(self, self._onIceStateChange);
    
                (0, _utils.isLegacyStatsReportSupported)(self._pc).then(function (result) {
                    self._legacyStatsReportSupport = result;
                    self.transit(new GrabLocalMediaState(self));
                });
            }
        }, {
            key: 'accept',
            value: function accept() {
                throw new _exceptions.UnsupportedOperation('accept does not go through signaling channel at this moment');
            }
        }, {
            key: 'hangup',
            value: function hangup() {
                this._state.hangup();
            }
    
            /**
             * Get a promise containing an object with two named lists of audio stats, one for each channel on each
             * media type of 'video' and 'audio'.
             * @return Rejected promise if failed to get MediaRtpStats. The promise is never resolved with null value.
             */
    
        }, {
            key: 'getStats',
            value: function () {
                var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                    var _this11 = this;
    
                    var timestamp, impl, statsResult, rttReducer, audioInputRttMilliseconds, videoInputRttMilliseconds;
                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    timestamp = new Date();
    
                                    impl = function () {
                                        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(stream, streamType) {
                                            var tracks;
                                            return _regenerator2.default.wrap(function _callee2$(_context2) {
                                                while (1) {
                                                    switch (_context2.prev = _context2.next) {
                                                        case 0:
                                                            tracks = [];
    
                                                            if (stream) {
                                                                _context2.next = 3;
                                                                break;
                                                            }
    
                                                            return _context2.abrupt('return', []);
    
                                                        case 3:
                                                            _context2.t0 = streamType;
                                                            _context2.next = _context2.t0 === 'audio_input' ? 6 : _context2.t0 === 'audio_output' ? 6 : _context2.t0 === 'video_input' ? 8 : _context2.t0 === 'video_output' ? 8 : 10;
                                                            break;
    
                                                        case 6:
                                                            tracks = stream.getAudioTracks();
                                                            return _context2.abrupt('break', 11);
    
                                                        case 8:
                                                            tracks = stream.getVideoTracks();
                                                            return _context2.abrupt('break', 11);
    
                                                        case 10:
                                                            throw new Error('Unsupported stream type while trying to get stats: ' + streamType);
    
                                                        case 11:
                                                            _context2.next = 13;
                                                            return Promise.all(tracks.map((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                                                                return _regenerator2.default.wrap(function _callee$(_context) {
                                                                    while (1) {
                                                                        switch (_context.prev = _context.next) {
                                                                            case 0:
                                                                                return _context.abrupt('return', _this11._pc.getStats().then(function (rawStats) {
                                                                                    var digestedStats = (0, _rtpStats.extractMediaStatsFromStats)(timestamp, rawStats, streamType);
                                                                                    if (!digestedStats) {
                                                                                        throw new Error('Failed to extract MediaRtpStats from RTCStatsReport for stream type ' + streamType);
                                                                                    }
                                                                                    return digestedStats;
                                                                                }));
    
                                                                            case 1:
                                                                            case 'end':
                                                                                return _context.stop();
                                                                        }
                                                                    }
                                                                }, _callee, _this11);
                                                            }))));
    
                                                        case 13:
                                                            return _context2.abrupt('return', _context2.sent);
    
                                                        case 14:
                                                        case 'end':
                                                            return _context2.stop();
                                                    }
                                                }
                                            }, _callee2, _this11);
                                        }));
    
                                        return function impl(_x2, _x3) {
                                            return _ref2.apply(this, arguments);
                                        };
                                    }();
    
                                    if (!(this._pc && this._pc.signalingState === 'stable')) {
                                        _context3.next = 26;
                                        break;
                                    }
    
                                    _context3.next = 5;
                                    return impl(this._remoteAudioStream, 'audio_input');
    
                                case 5:
                                    _context3.t0 = _context3.sent;
                                    _context3.next = 8;
                                    return impl(this._localStream, 'audio_output');
    
                                case 8:
                                    _context3.t1 = _context3.sent;
                                    _context3.t2 = {
                                        input: _context3.t0,
                                        output: _context3.t1
                                    };
                                    _context3.next = 12;
                                    return impl(this._remoteVideoStream, 'video_input');
    
                                case 12:
                                    _context3.t3 = _context3.sent;
                                    _context3.next = 15;
                                    return impl(this._localStream, 'video_output');
    
                                case 15:
                                    _context3.t4 = _context3.sent;
                                    _context3.t5 = {
                                        input: _context3.t3,
                                        output: _context3.t4
                                    };
                                    statsResult = {
                                        audio: _context3.t2,
                                        video: _context3.t5
                                    };
    
                                    // For consistency's sake, coalesce rttMilliseconds into the output for audio and video.
                                    rttReducer = function rttReducer(acc, stats) {
                                        if (stats.rttMilliseconds !== null && (acc === null || stats.rttMilliseconds > acc)) {
                                            acc = stats.rttMilliseconds;
                                        }
                                        stats._rttMilliseconds = null;
                                        return acc;
                                    };
    
                                    audioInputRttMilliseconds = statsResult.audio.input.reduce(rttReducer, null);
                                    videoInputRttMilliseconds = statsResult.video.input.reduce(rttReducer, null);
    
    
                                    if (audioInputRttMilliseconds !== null) {
                                        statsResult.audio.output.forEach(function (stats) {
                                            stats._rttMilliseconds = audioInputRttMilliseconds;
                                        });
                                    }
    
                                    if (videoInputRttMilliseconds !== null) {
                                        statsResult.video.output.forEach(function (stats) {
                                            stats._rttMilliseconds = videoInputRttMilliseconds;
                                        });
                                    }
    
                                    return _context3.abrupt('return', statsResult);
    
                                case 26:
                                    return _context3.abrupt('return', Promise.reject(new _exceptions.IllegalState()));
    
                                case 27:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));
    
                function getStats() {
                    return _ref.apply(this, arguments);
                }
    
                return getStats;
            }()
    
            /**
             * Get a promise of MediaRtpStats object for remote audio (from Amazon Connect to client).
             * @return Rejected promise if failed to get MediaRtpStats. The promise is never resolved with null value.
             * @deprecated in favor of getStats()
             */
    
        }, {
            key: 'getRemoteAudioStats',
            value: function getRemoteAudioStats() {
                return this.getStats().then(function (stats) {
                    if (stats.audio.output.length > 0) {
                        return stats.audio.output[0];
                    } else {
                        return Promise.reject(new _exceptions.IllegalState());
                    }
                });
            }
    
            /**
             * Get a promise of MediaRtpStats object for user audio (from client to Amazon Connect).
             * @return Rejected promise if failed to get MediaRtpStats. The promise is never resolved with null value.
             * @deprecated in favor of getStats()
             */
    
        }, {
            key: 'getUserAudioStats',
            value: function getUserAudioStats() {
                return this.getStats().then(function (stats) {
                    if (stats.audio.input.length > 0) {
                        return stats.audio.input[0];
                    } else {
                        return Promise.reject(new _exceptions.IllegalState());
                    }
                });
            }
    
            /**
             * Get a promise of MediaRtpStats object for user video (from client to Amazon Connect).
             * @return Rejected promise if failed to get MediaRtpStats. The promise is never resolved with null value.
             * @deprecated in favor of getStats()
             */
    
        }, {
            key: 'getRemoteVideoStats',
            value: function getRemoteVideoStats() {
                return this.getStats().then(function (stats) {
                    if (stats.video.output.length > 0) {
                        return stats.video.output[0];
                    } else {
                        return Promise.reject(new _exceptions.IllegalState());
                    }
                });
            }
    
            /**
             * Get a promise of MediaRtpStats object for user video (from client to Amazon Connect).
             * @return Rejected promise if failed to get MediaRtpStats. The promise is never resolved with null value.
             * @deprecated in favor of getStats()
             */
    
        }, {
            key: 'getUserVideoStats',
            value: function getUserVideoStats() {
                return this.getStats().then(function (stats) {
                    if (stats.video.input.length > 0) {
                        return stats.video.input[0];
                    } else {
                        return Promise.reject(new _exceptions.IllegalState());
                    }
                });
            }
        }, {
            key: '_onIceCandidate',
            value: function _onIceCandidate(evt) {
                this._state.onIceCandidate(evt);
            }
        }, {
            key: '_onPeerConnectionStateChange',
            value: function _onPeerConnectionStateChange() {
                this._state.onPeerConnectionStateChange();
            }
        }, {
            key: '_onIceStateChange',
            value: function _onIceStateChange(evt) {
                this._state.onIceStateChange(evt);
            }
    
            /**
             * Attach remote media stream to web element.
             */
    
        }, {
            key: '_ontrack',
            value: function _ontrack(evt) {
                this._strategy._ontrack(this, evt);
                this._onRemoteStreamAdded(this, evt.streams[0]);
            }
        }, {
            key: '_detachMedia',
            value: function _detachMedia() {
                if (this._remoteVideoElement) {
                    this._remoteVideoElement.srcObject = null;
                }
                if (this._remoteAudioElement) {
                    this._remoteAudioElement.srcObject = null;
                    this._remoteAudioStream = null;
                }
            }
        }, {
            key: '_stopSession',
            value: function _stopSession() {
                try {
                    if (this._localStream && !this._isUserProvidedStream) {
                        (0, _utils.closeStream)(this._localStream);
                        this._localStream = null;
                        this._isUserProvidedStream = false;
                    }
                } finally {
                    try {
                        if (this._pc) {
                            this._pc.close();
                        }
                    } catch (e) {
                        // eat exception
                    } finally {
                        this._pc = null;
                    }
                }
            }
        }, {
            key: '_buildMediaConstraints',
            value: function _buildMediaConstraints() {
                var self = this;
                var mediaConstraints = {};
    
                self._strategy._buildMediaConstraints(self, mediaConstraints);
    
                if (self._enableVideo) {
                    var videoConstraints = {};
                    var widthConstraints = {};
                    var heightConstraints = {};
                    var frameRateConstraints = {};
    
                    //build video width constraints
                    if (typeof self._idealVideoWidth !== 'undefined') {
                        widthConstraints.ideal = self._idealVideoWidth;
                    }
                    if (typeof self._maxVideoWidth !== 'undefined') {
                        widthConstraints.max = self._maxVideoWidth;
                    }
                    if (typeof self._minVideoWidth !== 'undefined') {
                        widthConstraints.min = self._minVideoWidth;
                    }
                    // build video height constraints
                    if (typeof self._idealVideoHeight !== 'undefined') {
                        heightConstraints.ideal = self._idealVideoHeight;
                    }
                    if (typeof self._maxVideoHeight !== 'undefined') {
                        heightConstraints.max = self._maxVideoHeight;
                    }
                    if (typeof self._minVideoHeight !== 'undefined') {
                        heightConstraints.min = self._minVideoHeight;
                    }
                    if (Object.keys(widthConstraints).length > 0 && Object.keys(heightConstraints).length > 0) {
                        videoConstraints.width = widthConstraints;
                        videoConstraints.height = heightConstraints;
                    }
                    // build frame rate constraints
                    if (typeof self._videoFrameRate !== 'undefined') {
                        frameRateConstraints.ideal = self._videoFrameRate;
                    }
                    if (typeof self._minVideoFrameRate !== 'undefined') {
                        frameRateConstraints.min = self._minVideoFrameRate;
                    }
                    if (typeof self._maxVideoFrameRate !== 'undefined') {
                        frameRateConstraints.max = self._maxVideoFrameRate;
                    }
                    if (Object.keys(frameRateConstraints).length > 0) {
                        videoConstraints.frameRate = frameRateConstraints;
                    }
    
                    // build facing mode constraints
                    if (self._facingMode !== 'user' && self._facingMode !== "environment") {
                        self._facingMode = 'user';
                    }
                    videoConstraints.facingMode = self._facingMode;
    
                    // set video constraints
                    if (Object.keys(videoConstraints).length > 0) {
                        mediaConstraints.video = videoConstraints;
                    } else {
                        mediaConstraints.video = true;
                    }
                }
    
                return mediaConstraints;
            }
        }, {
            key: 'sessionReport',
            get: function get() {
                return this._sessionReport;
            }
        }, {
            key: 'callId',
            get: function get() {
                return this._callId;
            }
            /**
             * getMediaStream returns the local stream, which may be acquired from local device or from user provided stream.
             * Rather than getting a stream by calling getUserMedia (which gets a stream from local device such as camera),
             * user could also provide the stream to the RtcSession directly to connect to the other end.
             */
    
        }, {
            key: 'mediaStream',
            get: function get() {
                return this._localStream;
            },
    
            /**
             * Optional. RtcSession will grab input device if this is not specified.
             * Please note: this RtcSession class only support single audio track and/or single video track.
             */
            set: function set(input) {
                this._localStream = input;
                this._isUserProvidedStream = true;
            }
            /**
             * Needed, expect an audio element that can be used to play remote audio stream.
             */
    
        }, {
            key: 'remoteVideoStream',
            get: function get() {
                return this._remoteVideoStream;
            }
        }, {
            key: 'onGumSuccess',
            set: function set(handler) {
                this._onGumSuccess = handler;
            }
            /**
             * Callback when gUM fails.
             * First param is RtcSession object.
             * Second param is the error.
             */
    
        }, {
            key: 'onGumError',
            set: function set(handler) {
                this._onGumError = handler;
            }
            /**
             * Callback if failed initializing local resources
             * First param is RtcSession object.
             */
    
        }, {
            key: 'onSessionFailed',
            set: function set(handler) {
                this._onSessionFailed = handler;
            }
            /**
             * Callback after local user media stream is added to the session.
             * First param is RtcSession object.
             * Second param is media stream
             */
    
        }, {
            key: 'onLocalStreamAdded',
            set: function set(handler) {
                this._onLocalStreamAdded = handler;
            }
            /**
             * Callback when all local resources are ready. Establishing signaling chanel and ICE collection happens at the same time after this.
             * First param is RtcSession object.
             */
    
        }, {
            key: 'onSessionInitialized',
            set: function set(handler) {
                this._onSessionInitialized = handler;
            }
            /**
             * Callback when signaling channel is established.
             * RTC session will move forward only if onSignalingConnected and onIceCollectionComplete are both called.
             *
             * First param is RtcSession object.
             */
    
        }, {
            key: 'onSignalingConnected',
            set: function set(handler) {
                this._onSignalingConnected = handler;
            }
            /**
             * Callback when ICE collection completes either because there is no more candidate or collection timed out.
             * RTC session will move forward only if onSignalingConnected and onIceCollectionComplete are both called.
             *
             * First param is RtcSession object.
             * Second param is boolean, TRUE - ICE collection timed out.
             * Third param is number of candidates collected.
             */
    
        }, {
            key: 'onIceCollectionComplete',
            set: function set(handler) {
                this._onIceCollectionComplete = handler;
            }
            /**
             * Callback when signaling channel is established and ICE collection completed with at least one candidate.
             * First param is RtcSession object.
             */
    
        }, {
            key: 'onSignalingStarted',
            set: function set(handler) {
                this._onSignalingStarted = handler;
            }
            /**
             * Callback when the call is established (handshaked and media stream should be flowing)
             * First param is RtcSession object.
             */
    
        }, {
            key: 'onSessionConnected',
            set: function set(handler) {
                this._onSessionConnected = handler;
            }
            /**
             * Callback after remote media stream is added to the session.
             * This could be called multiple times with the same stream if multiple tracks are included in the same stream.
             *
             * First param is RtcSession object.
             * Second param is media stream track.
             */
    
        }, {
            key: 'onRemoteStreamAdded',
            set: function set(handler) {
                this._onRemoteStreamAdded = handler;
            }
            /**
             * Callback when the hangup is initiated (implies the call was successfully established).
             * First param is RtcSession object.
             */
    
        }, {
            key: 'onSessionCompleted',
            set: function set(handler) {
                this._onSessionCompleted = handler;
            }
            /**
             * Callback after session is cleaned up, no matter if the call was successfully established or not.
             * First param is RtcSession object.
             * Second param is SessionReport object.
             */
    
        }, {
            key: 'onSessionDestroyed',
            set: function set(handler) {
                this._onSessionDestroyed = handler;
            }
        }, {
            key: 'enableAudio',
            set: function set(flag) {
                this._enableAudio = flag;
            }
        }, {
            key: 'echoCancellation',
            set: function set(flag) {
                this._echoCancellation = flag;
            }
        }, {
            key: 'enableVideo',
            set: function set(flag) {
                this._enableVideo = flag;
            }
        }, {
            key: 'maxVideoFrameRate',
            set: function set(frameRate) {
                this._maxVideoFrameRate = frameRate;
            }
        }, {
            key: 'minVideoFrameRate',
            set: function set(frameRate) {
                this._minVideoFrameRate = frameRate;
            }
        }, {
            key: 'videoFrameRate',
            set: function set(frameRate) {
                this._videoFrameRate = frameRate;
            }
        }, {
            key: 'maxVideoWidth',
            set: function set(width) {
                this._maxVideoWidth = width;
            }
        }, {
            key: 'minVideoWidth',
            set: function set(width) {
                this._minVideoWidth = width;
            }
        }, {
            key: 'idealVideoWidth',
            set: function set(width) {
                this._idealVideoWidth = width;
            }
        }, {
            key: 'maxVideoHeight',
            set: function set(height) {
                this._maxVideoHeight = height;
            }
        }, {
            key: 'minVideoHeight',
            set: function set(height) {
                this._minVideoHeight = height;
            }
        }, {
            key: 'idealVideoHeight',
            set: function set(height) {
                this._idealVideoHeight = height;
            }
        }, {
            key: 'facingMode',
            set: function set(mode) {
                this._facingMode = mode;
            }
        }, {
            key: 'remoteAudioElement',
            set: function set(element) {
                this._remoteAudioElement = element;
            }
        }, {
            key: 'remoteVideoElement',
            set: function set(element) {
                this._remoteVideoElement = element;
            }
            /**
             * Override the default signaling connect time out.
             */
    
        }, {
            key: 'signalingConnectTimeout',
            set: function set(ms) {
                this._signalingConnectTimeout = ms;
            }
            /**
             * Override the default ICE collection time limit.
             */
    
        }, {
            key: 'iceTimeoutMillis',
            set: function set(timeoutMillis) {
                this._iceTimeoutMillis = timeoutMillis;
            }
            /**
             * Override the default GUM timeout time limit.
             */
    
        }, {
            key: 'gumTimeoutMillis',
            set: function set(timeoutMillis) {
                this._gumTimeoutMillis = timeoutMillis;
            }
            /**
             * connect-rtc-js initiate the handshaking with all browser supported codec by default, Amazon Connect service will choose the codec according to its preference setting.
             * Setting this attribute will force connect-rtc-js to only use specified codec.
             * WARNING: Setting this to unsupported codec will cause the failure of handshaking.
             * Supported audio codecs: opus.
             */
    
        }, {
            key: 'forceAudioCodec',
            set: function set(audioCodec) {
                this._forceAudioCodec = audioCodec;
            }
    
            /**
             * connect-rtc-js initiate the handshaking with all browser supported codec by default, Amazon Connect service will choose the codec according to its preference setting.
             * Setting this attribute will force connect-rtc-js to only use specified codec.
             * WARNING: Setting this to unsupported codec will cause the failure of handshaking.
             * Supported video codecs: VP8, VP9, H264.
             */
    
        }, {
            key: 'forceVideoCodec',
            set: function set(videoCodec) {
                this._forceVideoCodec = videoCodec;
            }
    
            /**
             * connect-rtc-js disables OPUS DTX by default because it harms audio quality.
             * @param flag boolean
             */
    
        }, {
            key: 'enableOpusDtx',
            set: function set(flag) {
                this._enableOpusDtx = flag;
            }
        }]);
        return RtcSession;
    }();
    
    exports.default = RtcSession;
    
    },{"./exceptions":136,"./rtc_const":137,"./rtp-stats":140,"./session_report":141,"./signaling":142,"./strategies/CCPInitiationStrategyInterface":143,"./strategies/StandardStrategy":145,"./utils":147,"babel-runtime/helpers/asyncToGenerator":11,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16,"babel-runtime/helpers/typeof":17,"babel-runtime/regenerator":18,"sdp":119,"uuid/v4":122}],140:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');
    
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
    var _createClass2 = require('babel-runtime/helpers/createClass');
    
    var _createClass3 = _interopRequireDefault(_createClass2);
    
    exports.extractMediaStatsFromStats = extractMediaStatsFromStats;
    
    var _utils = require('./utils');
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function extractMediaStatsFromStats(timestamp, stats, streamType) {
        var extractedStats = null;
        var reportType = null;
    
        stats.forEach(function (statsReport) {
            if (statsReport) {
                if (statsReport.type === 'inbound-rtp' && streamType === 'audio_input') {
                    // inbound-rtp: Stats for stream from Server to CCP, as seen on the browser
                    reportType = statsReport.type;
                    extractedStats = {
                        timestamp: timestamp,
                        packetsLost: statsReport.packetsLost,
                        // packetsCount: number of packet received by CCP, as seen on the browser
                        packetsCount: statsReport.packetsReceived,
                        jbMilliseconds: Math.floor((0, _utils.when_defined)(statsReport.jitter, 0) * 1000),
                        // Multiplying audioLevel by 32768 aligns its value with the legacy getStats API.
                        audioLevel: (0, _utils.is_defined)(statsReport.audioLevel) ? Math.floor(statsReport.audioLevel * 32768) : null
                    };
                } else if (statsReport.type === 'outbound-rtp' && streamType === 'audio_output') {
                    // outbound-rtp: Stats for stream from CCP to Server, as seen on the browser
                    extractedStats = extractedStats || {};
                    // packetsCount: number of packet sent by CCP, as seen on the browser
                    extractedStats.packetsCount = statsReport.packetsSent;
                } else if (statsReport.type === 'media-source' && streamType === 'audio_output') {
                    extractedStats = extractedStats || {};
                    // Multiplying audioLevel by 32768 aligns its value with the legacy getStats API.
                    extractedStats.audioLevel = (0, _utils.is_defined)(statsReport.audioLevel) ? Math.floor(statsReport.audioLevel * 32768) : null;
                } else if (statsReport.type === 'remote-inbound-rtp' && streamType === 'audio_output') {
                    // remote-inbound-rtp: Stats for stream from CCP to Server, as seen on Server side
                    reportType = statsReport.type;
                    extractedStats = extractedStats || {};
                    extractedStats.timestamp = timestamp;
                    extractedStats.packetsLost = statsReport.packetsLost;
                    extractedStats.rttMilliseconds = (0, _utils.is_defined)(statsReport.roundTripTime) ? Math.floor(statsReport.roundTripTime * 1000) : null;
                    extractedStats.jbMilliseconds = Math.floor((0, _utils.when_defined)(statsReport.jitter, 0) * 1000);
                }
            }
        });
    
        return extractedStats ? new MediaRtpStats(extractedStats, reportType, streamType) : null;
    }
    
    /**
     * Basic RTP statistics object, represents statistics of an audio or video stream.
     */
    /**
     * Extract rtp stats of specified stream from RTCStatsReport
     * Chrome reports all stream stats in statsReports whereas firefox reports only single stream stats in report
     * StreamType is passed only to pull right stream stats audio_input or audio_output.
     */
    
    var MediaRtpStats = function () {
        function MediaRtpStats(paramsIn, statsReportType, streamType) {
            (0, _classCallCheck3.default)(this, MediaRtpStats);
    
            var params = paramsIn || {};
    
            this._timestamp = params.timestamp || new Date().getTime();
            this._packetsLost = (0, _utils.when_defined)(params.packetsLost);
            this._packetsCount = (0, _utils.when_defined)(params.packetsCount);
            this._audioLevel = (0, _utils.when_defined)(params.audioLevel);
            this._procMilliseconds = (0, _utils.when_defined)(params.procMilliseconds);
            this._rttMilliseconds = (0, _utils.when_defined)(params.rttMilliseconds);
            this._jbMilliseconds = (0, _utils.when_defined)(params.jbMilliseconds);
            this._bytesSent = (0, _utils.when_defined)(params.bytesSent);
            this._bytesReceived = (0, _utils.when_defined)(params.bytesReceived);
            this._framesEncoded = (0, _utils.when_defined)(params.framesEncoded);
            this._framesDecoded = (0, _utils.when_defined)(params.framesDecoded);
            this._frameRateSent = (0, _utils.when_defined)(params.frameRateSent);
            this._frameRateReceived = (0, _utils.when_defined)(params.frameRateReceived);
            this._statsReportType = statsReportType || params._statsReportType || "unknown";
            this._streamType = streamType || params.streamType || "unknown";
        }
    
        /** {number} number of packets sent to the channel */
    
    
        (0, _createClass3.default)(MediaRtpStats, [{
            key: 'packetsCount',
            get: function get() {
                return this._packetsCount;
            }
            /** {number} number of packets lost after travelling through the channel */
    
        }, {
            key: 'packetsLost',
            get: function get() {
                return this._packetsLost;
            }
            /** {number} number of packets lost after travelling through the channel */
    
        }, {
            key: 'packetLossPercentage',
            get: function get() {
                return this._packetsCount > 0 ? this._packetsLost / this._packetsCount : 0;
            }
            /** Audio volume level
             * Currently firefox doesn't provide audio level in rtp stats.
             */
    
        }, {
            key: 'audioLevel',
            get: function get() {
                return this._audioLevel;
            }
            /** Timestamp when stats are collected. */
    
        }, {
            key: 'timestamp',
            get: function get() {
                return this._timestamp;
            }
            /** {number} Processing delay calculated by time to process packet header */
    
        }, {
            key: 'procMilliseconds',
            get: function get() {
                return this._procMilliseconds;
            }
            /** {number} Round trip time calculated with RTCP reports */
    
        }, {
            key: 'rttMilliseconds',
            get: function get() {
                return this._rttMilliseconds;
            }
            /** {number} Statistical variance of RTP data packet inter-arrival time */
    
        }, {
            key: 'jbMilliseconds',
            get: function get() {
                return this._jbMilliseconds;
            }
            /** {number} number of bytes sent to the channel*/
    
        }, {
            key: 'bytesSent',
            get: function get() {
                return this._bytesSent;
            }
            /** {number} number of bytes received from the channel*/
    
        }, {
            key: 'bytesReceived',
            get: function get() {
                return this._bytesReceived;
            }
            /** {number} number of video frames encoded*/
    
        }, {
            key: 'framesEncoded',
            get: function get() {
                return this._framesEncoded;
            }
            /** {number} number of video frames decoded*/
    
        }, {
            key: 'framesDecoded',
            get: function get() {
                return this._framesDecoded;
            }
            /** {number} frames per second sent to the channel*/
    
        }, {
            key: 'frameRateSent',
            get: function get() {
                return this._frameRateSent;
            }
            /** {number} frames per second received from the channel*/
    
        }, {
            key: 'frameRateReceived',
            get: function get() {
                return this._frameRateReceived;
            }
            /** {string} the type of the stats report */
    
        }, {
            key: 'statsReportType',
            get: function get() {
                return this._statsReportType;
            }
            /** {string} the type of the stream */
    
        }, {
            key: 'streamType',
            get: function get() {
                return this._streamType;
            }
        }]);
        return MediaRtpStats;
    }();
    
    },{"./utils":147,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],141:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.SessionReport = undefined;
    
    var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");
    
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
    var _createClass2 = require("babel-runtime/helpers/createClass");
    
    var _createClass3 = _interopRequireDefault(_createClass2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    /**
     * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
     *
     * SPDX-License-Identifier: Apache-2.0
     */
    
    var SessionReport = exports.SessionReport = function () {
        /**
         * @class Prototype for tracking various RTC session report
         * @constructs
         */
        function SessionReport() {
            (0, _classCallCheck3.default)(this, SessionReport);
    
            this._sessionStartTime = null;
            this._sessionEndTime = null;
            this._gumTimeMillis = null;
            this._initializationTimeMillis = null;
            this._iceCollectionTimeMillis = null;
            this._signallingConnectTimeMillis = null;
            this._handshakingTimeMillis = null;
            this._preTalkingTimeMillis = null;
            this._talkingTimeMillis = null;
            this._iceConnectionsLost = 0;
            this._iceConnectionsFailed = null;
            this._peerConnectionFailed = null;
            this._cleanupTimeMillis = null;
            this._iceCollectionFailure = null;
            this._signallingConnectionFailure = null;
            this._handshakingFailure = null;
            this._gumOtherFailure = null;
            this._gumTimeoutFailure = null;
            this._createOfferFailure = null;
            this._setLocalDescriptionFailure = null;
            this._userBusyFailure = null;
            this._invalidRemoteSDPFailure = null;
            this._noRemoteIceCandidateFailure = null;
            this._setRemoteDescriptionFailure = null;
            this._streamStats = [];
            this._rtcJsVersion = "1.1.24";
        }
        /**
         *Timestamp when RTCSession started.
         */
    
    
        (0, _createClass3.default)(SessionReport, [{
            key: "sessionStartTime",
            get: function get() {
                return this._sessionStartTime;
            }
            /**
             * Timestamp when RTCSession ended.
             */
            ,
            set: function set(value) {
                this._sessionStartTime = value;
            }
        }, {
            key: "sessionEndTime",
            get: function get() {
                return this._sessionEndTime;
            }
            /**
             * Time taken for grabbing user microphone at the time of connecting RTCSession.
             */
            ,
            set: function set(value) {
                this._sessionEndTime = value;
            }
        }, {
            key: "gumTimeMillis",
            get: function get() {
                return this._gumTimeMillis;
            }
            /**
             * Time taken for session initialization in millis. Includes time spent in GrabLocalMedia, SetLocalSDP states.
             */
            ,
            set: function set(value) {
                this._gumTimeMillis = value;
            }
        }, {
            key: "initializationTimeMillis",
            get: function get() {
                return this._initializationTimeMillis;
            }
            /**
             * Time spent on ICECollection in millis.
             */
            ,
            set: function set(value) {
                this._initializationTimeMillis = value;
            }
        }, {
            key: "iceCollectionTimeMillis",
            get: function get() {
                return this._iceCollectionTimeMillis;
            }
            /**
             * Time taken for connecting the signalling in millis.
             */
            ,
            set: function set(value) {
                this._iceCollectionTimeMillis = value;
            }
        }, {
            key: "signallingConnectTimeMillis",
            get: function get() {
                return this._signallingConnectTimeMillis;
            }
            /**
             * Times spent from RTCSession connection until entering Talking state in millis.
             */
            ,
            set: function set(value) {
                this._signallingConnectTimeMillis = value;
            }
        }, {
            key: "preTalkingTimeMillis",
            get: function get() {
                return this._preTalkingTimeMillis;
            }
            /**
             *  Times spent in completing handshaking process of the RTCSession in millis.
             */
            ,
            set: function set(value) {
                this._preTalkingTimeMillis = value;
            }
        }, {
            key: "handshakingTimeMillis",
            get: function get() {
                return this._handshakingTimeMillis;
            }
            /**
             *  Times spent in Talking state in millis.
             */
            ,
            set: function set(value) {
                this._handshakingTimeMillis = value;
            }
        }, {
            key: "talkingTimeMillis",
            get: function get() {
                return this._talkingTimeMillis;
            }
            /**
             * How many times the RTCSession has lost ICE connection in talking state.
             */
            ,
            set: function set(value) {
                this._talkingTimeMillis = value;
            }
        }, {
            key: "iceConnectionsLost",
            get: function get() {
                return this._iceConnectionsLost;
            }
            /**
             * Tells if the RTCSession has failed RTCPeerConnection.iceConnectionState
             */
            ,
            set: function set(value) {
                this._iceConnectionsLost = value;
            }
        }, {
            key: "iceConnectionsFailed",
            get: function get() {
                return this._iceConnectionsFailed;
            }
            /**
             * Tells if the RTCSession has failed RTCPeerConnection.connectionState
             */
            ,
            set: function set(value) {
                this._iceConnectionsFailed = value;
            }
        }, {
            key: "peerConnectionFailed",
            get: function get() {
                return this._peerConnectionFailed;
            }
            /**
             * Times spent in Cleanup state in millis
             */
            ,
            set: function set(value) {
                this._peerConnectionFailed = value;
            }
        }, {
            key: "cleanupTimeMillis",
            get: function get() {
                return this._cleanupTimeMillis;
            }
            /**
             * Tells if the RTCSession fails in ICECollection.
             */
            ,
            set: function set(value) {
                this._cleanupTimeMillis = value;
            }
        }, {
            key: "iceCollectionFailure",
            get: function get() {
                return this._iceCollectionFailure;
            }
            /**
             * Tells if the RTCSession failed in signalling connect stage.
             */
            ,
            set: function set(value) {
                this._iceCollectionFailure = value;
            }
        }, {
            key: "signallingConnectionFailure",
            get: function get() {
                return this._signallingConnectionFailure;
            }
            /**
             * Handshaking failure of the RTCSession
             */
            ,
            set: function set(value) {
                this._signallingConnectionFailure = value;
            }
        }, {
            key: "handshakingFailure",
            get: function get() {
                return this._handshakingFailure;
            }
            /**
             * Gum failed due to timeout at the time of new RTCSession connection
             */
            ,
            set: function set(value) {
                this._handshakingFailure = value;
            }
        }, {
            key: "gumTimeoutFailure",
            get: function get() {
                return this._gumTimeoutFailure;
            }
            /**
             * Gum failed due to other reasons (other than Timeout)
             */
            ,
            set: function set(value) {
                this._gumTimeoutFailure = value;
            }
        }, {
            key: "gumOtherFailure",
            get: function get() {
                return this._gumOtherFailure;
            }
            /**
             * RTC Session failed in create Offer state.
             */
            ,
            set: function set(value) {
                this._gumOtherFailure = value;
            }
        }, {
            key: "createOfferFailure",
            get: function get() {
                return this._createOfferFailure;
            }
            /**
             * Tells if setLocalDescription failed for the RTC Session.
             */
            ,
            set: function set(value) {
                this._createOfferFailure = value;
            }
        }, {
            key: "setLocalDescriptionFailure",
            get: function get() {
                return this._setLocalDescriptionFailure;
            }
            /**
             * Tells if handshaking failed due to user busy case,
             * happens when multiple softphone calls are initiated at same time.
             */
            ,
            set: function set(value) {
                this._setLocalDescriptionFailure = value;
            }
        }, {
            key: "userBusyFailure",
            get: function get() {
                return this._userBusyFailure;
            }
            /**
             * Tells it remote SDP is invalid.
             */
            ,
            set: function set(value) {
                this._userBusyFailure = value;
            }
        }, {
            key: "invalidRemoteSDPFailure",
            get: function get() {
                return this._invalidRemoteSDPFailure;
            }
            /**
             * Tells if the setRemoteDescription failed for the RTC Session.
             */
            ,
            set: function set(value) {
                this._invalidRemoteSDPFailure = value;
            }
        }, {
            key: "setRemoteDescriptionFailure",
            get: function get() {
                return this._setRemoteDescriptionFailure;
            }
            /**
             * A failure case when there is no RemoteIceCandidate.
             */
            ,
            set: function set(value) {
                this._setRemoteDescriptionFailure = value;
            }
        }, {
            key: "noRemoteIceCandidateFailure",
            get: function get() {
                return this._noRemoteIceCandidateFailure;
            }
            /**
             * Statistics for each stream(audio-in, audio-out, video-in, video-out) of the RTCSession.
             */
            ,
            set: function set(value) {
                this._noRemoteIceCandidateFailure = value;
            }
        }, {
            key: "streamStats",
            get: function get() {
                return this._streamStats;
            }
            /**
             * get current connect-rtc-js version
             */
            ,
            set: function set(value) {
                this._streamStats = value;
            }
        }, {
            key: "rtcJsVersion",
            get: function get() {
                return this._rtcJsVersion;
            },
            set: function set(value) {
                this._rtcJsVersion = value;
            }
        }]);
        return SessionReport;
    }();
    
    },{"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],142:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.FailedState = exports.DisconnectedState = exports.PendingLocalHangupState = exports.PendingRemoteHangupState = exports.PendingReconnectState = exports.TalkingState = exports.PendingAcceptAckState = exports.PendingAcceptState = exports.PendingAnswerState = exports.PendingInviteState = exports.PendingConnectState = exports.FailOnTimeoutState = exports.SignalingState = undefined;
    
    var _regenerator = require('babel-runtime/regenerator');
    
    var _regenerator2 = _interopRequireDefault(_regenerator);
    
    var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');
    
    var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
    
    var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');
    
    var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
    
    var _inherits2 = require('babel-runtime/helpers/inherits');
    
    var _inherits3 = _interopRequireDefault(_inherits2);
    
    var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');
    
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
    var _createClass2 = require('babel-runtime/helpers/createClass');
    
    var _createClass3 = _interopRequireDefault(_createClass2);
    
    var _utils = require('./utils');
    
    var _rtc_const = require('./rtc_const');
    
    var _exceptions = require('./exceptions');
    
    var _v = require('uuid/v4');
    
    var _v2 = _interopRequireDefault(_v);
    
    var _virtual_wss_connection_manager = require('./virtual_wss_connection_manager');
    
    var _virtual_wss_connection_manager2 = _interopRequireDefault(_virtual_wss_connection_manager);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var CONNECT_MAX_RETRIES = 3;
    
    /**
     * Abstract signaling state class.
     */
    /**
     * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
     *
     * SPDX-License-Identifier: Apache-2.0
     */
    
    var SignalingState = exports.SignalingState = function () {
        /**
         * @param {AmznRtcSignaling} signaling Signaling object.
         */
        function SignalingState(signaling) {
            (0, _classCallCheck3.default)(this, SignalingState);
    
            this._signaling = signaling;
            this._createTime = new Date().getTime();
        }
    
        (0, _createClass3.default)(SignalingState, [{
            key: 'setStateTimeout',
            value: function setStateTimeout(timeoutMs) {
                setTimeout((0, _utils.hitch)(this, this._onTimeoutChecked), timeoutMs);
            }
        }, {
            key: 'onEnter',
            value: function onEnter() {}
        }, {
            key: '_onTimeoutChecked',
            value: function _onTimeoutChecked() {
                if (this.isCurrentState) {
                    this.onTimeout();
                }
            }
        }, {
            key: 'onTimeout',
            value: function onTimeout() {
                throw new _exceptions.UnsupportedOperation();
            }
        }, {
            key: 'transit',
            value: function transit(newState) {
                this._signaling.transit(newState);
            }
        }, {
            key: 'onExit',
            value: function onExit() {}
        }, {
            key: 'onOpen',
            value: function onOpen() {
                throw new _exceptions.UnsupportedOperation('onOpen not supported by ' + this.name);
            }
        }, {
            key: 'onError',
            value: function onError() {
                this.channelDown();
            }
        }, {
            key: 'onClose',
            value: function onClose() {
                this.channelDown();
            }
        }, {
            key: 'channelDown',
            value: function channelDown() {
                throw new _exceptions.UnsupportedOperation('channelDown not supported by ' + this.name);
            }
        }, {
            key: 'onRpcMsg',
            value: function onRpcMsg(rpcMsg) {
                // eslint-disable-line no-unused-vars
                throw new _exceptions.UnsupportedOperation('onRpcMsg not supported by ' + this.name);
            }
        }, {
            key: 'invite',
            value: function invite(sdp, iceCandidates) {
                // eslint-disable-line no-unused-vars
                throw new _exceptions.UnsupportedOperation('invite not supported by ' + this.name);
            }
        }, {
            key: 'accept',
            value: function accept() {
                throw new _exceptions.UnsupportedOperation('accept not supported by ' + this.name);
            }
        }, {
            key: 'hangup',
            value: function hangup() {
                throw new _exceptions.UnsupportedOperation('hangup not supported by ' + this.name);
            }
        }, {
            key: 'isCurrentState',
            get: function get() {
                return this === this._signaling.state;
            }
        }, {
            key: 'name',
            get: function get() {
                return "SignalingState";
            }
        }, {
            key: 'logger',
            get: function get() {
                return this._signaling._logger;
            }
        }]);
        return SignalingState;
    }();
    
    var FailOnTimeoutState = exports.FailOnTimeoutState = function (_SignalingState) {
        (0, _inherits3.default)(FailOnTimeoutState, _SignalingState);
    
        function FailOnTimeoutState(signaling, timeoutMs) {
            (0, _classCallCheck3.default)(this, FailOnTimeoutState);
    
            var _this = (0, _possibleConstructorReturn3.default)(this, (FailOnTimeoutState.__proto__ || Object.getPrototypeOf(FailOnTimeoutState)).call(this, signaling));
    
            _this._timeoutMs = timeoutMs;
            return _this;
        }
    
        (0, _createClass3.default)(FailOnTimeoutState, [{
            key: 'onEnter',
            value: function onEnter() {
                this.setStateTimeout(this._timeoutMs);
            }
        }, {
            key: 'onTimeout',
            value: function onTimeout() {
                this.transit(new FailedState(this._signaling, new _exceptions.Timeout()));
            }
        }, {
            key: 'name',
            get: function get() {
                return "FailOnTimeoutState";
            }
        }]);
        return FailOnTimeoutState;
    }(SignalingState);
    
    var PendingConnectState = exports.PendingConnectState = function (_FailOnTimeoutState) {
        (0, _inherits3.default)(PendingConnectState, _FailOnTimeoutState);
    
        function PendingConnectState(signaling, timeoutMs, initialStartTimeIn, retriesIn) {
            (0, _classCallCheck3.default)(this, PendingConnectState);
    
            var _this2 = (0, _possibleConstructorReturn3.default)(this, (PendingConnectState.__proto__ || Object.getPrototypeOf(PendingConnectState)).call(this, signaling, timeoutMs));
    
            _this2._initialStartTime = initialStartTimeIn || new Date().getTime();
            _this2._retries = retriesIn || 0;
            return _this2;
        }
    
        (0, _createClass3.default)(PendingConnectState, [{
            key: 'onOpen',
            value: function onOpen() {
                this.transit(new PendingInviteState(this._signaling));
            }
        }, {
            key: 'channelDown',
            value: function channelDown() {
                var now = new Date().getTime();
                var untilTimeoutMs = this._initialStartTime + this._timeoutMs - now;
                if (untilTimeoutMs > 0 && ++this._retries < CONNECT_MAX_RETRIES) {
                    this._signaling._connect();
                    this.transit(new PendingConnectState(this._signaling, untilTimeoutMs, this._initialStartTime, this._retries));
                } else {
                    this.transit(new FailedState(this._signaling, new Error('channelDown')));
                }
            }
        }, {
            key: 'name',
            get: function get() {
                return "PendingConnectState";
            }
        }]);
        return PendingConnectState;
    }(FailOnTimeoutState);
    
    var PendingInviteState = exports.PendingInviteState = function (_SignalingState2) {
        (0, _inherits3.default)(PendingInviteState, _SignalingState2);
    
        function PendingInviteState() {
            (0, _classCallCheck3.default)(this, PendingInviteState);
            return (0, _possibleConstructorReturn3.default)(this, (PendingInviteState.__proto__ || Object.getPrototypeOf(PendingInviteState)).apply(this, arguments));
        }
    
        (0, _createClass3.default)(PendingInviteState, [{
            key: 'onEnter',
            value: function onEnter() {
                var self = this;
                new Promise(function notifyConnected(resolve) {
                    self._signaling._connectedHandler();
                    resolve();
                });
            }
        }, {
            key: 'invite',
            value: function invite(sdp, iceCandidates) {
                var self = this;
                var inviteId = (0, _v2.default)();
    
                var inviteParams = {
                    sdp: sdp,
                    candidates: iceCandidates,
                    callContextToken: self._signaling._contactToken
                };
                self.logger.log('Sending SDP', (0, _utils.getRedactedSdp)(sdp));
                self._signaling._wss.send(JSON.stringify({
                    jsonrpc: '2.0',
                    method: _rtc_const.INVITE_METHOD_NAME,
                    params: inviteParams,
                    id: inviteId
                }));
                self.transit(new PendingAnswerState(self._signaling, inviteId));
            }
        }, {
            key: 'channelDown',
            value: function channelDown() {
                this.transit(new FailedState(this._signaling));
            }
        }, {
            key: 'name',
            get: function get() {
                return "PendingInviteState";
            }
        }]);
        return PendingInviteState;
    }(SignalingState);
    
    var PendingAnswerState = exports.PendingAnswerState = function (_FailOnTimeoutState2) {
        (0, _inherits3.default)(PendingAnswerState, _FailOnTimeoutState2);
    
        function PendingAnswerState(signaling, inviteId) {
            (0, _classCallCheck3.default)(this, PendingAnswerState);
    
            var _this4 = (0, _possibleConstructorReturn3.default)(this, (PendingAnswerState.__proto__ || Object.getPrototypeOf(PendingAnswerState)).call(this, signaling, _rtc_const.MAX_INVITE_DELAY_MS));
    
            _this4._inviteId = inviteId;
            return _this4;
        }
    
        (0, _createClass3.default)(PendingAnswerState, [{
            key: 'onRpcMsg',
            value: function onRpcMsg(msg) {
                var self = this;
                if (msg.id === this._inviteId) {
                    if (msg.error || !msg.result) {
                        this.transit(new FailedState(this._signaling, self.translateInviteError(msg)));
                    } else {
                        new Promise(function notifyAnswered(resolve) {
                            self.logger.log('Received SDP', (0, _utils.getRedactedSdp)(msg.result.sdp));
                            self._signaling._answeredHandler(msg.result.sdp, msg.result.candidates);
                            resolve();
                        });
                        this.transit(new PendingAcceptState(this._signaling, this._signaling._autoAnswer));
                    }
                }
            }
        }, {
            key: 'translateInviteError',
            value: function translateInviteError(msg) {
                if (msg.error && msg.error.code == 486) {
                    return new _exceptions.BusyException(msg.error.message);
                } else if (msg.error && msg.error.code == 404) {
                    return new _exceptions.CallNotFoundException(msg.error.message);
                } else {
                    return new _exceptions.UnknownSignalingError();
                }
            }
        }, {
            key: 'name',
            get: function get() {
                return "PendingAnswerState";
            }
        }]);
        return PendingAnswerState;
    }(FailOnTimeoutState);
    
    var PendingAcceptState = exports.PendingAcceptState = function (_SignalingState3) {
        (0, _inherits3.default)(PendingAcceptState, _SignalingState3);
    
        function PendingAcceptState(signaling, autoAnswer) {
            (0, _classCallCheck3.default)(this, PendingAcceptState);
    
            var _this5 = (0, _possibleConstructorReturn3.default)(this, (PendingAcceptState.__proto__ || Object.getPrototypeOf(PendingAcceptState)).call(this, signaling));
    
            _this5._autoAnswer = autoAnswer;
            return _this5;
        }
    
        (0, _createClass3.default)(PendingAcceptState, [{
            key: 'onEnter',
            value: function onEnter() {
                if (this._autoAnswer) {
                    this.accept();
                }
            }
        }, {
            key: 'accept',
            value: function accept() {
                this.sendAcceptRequest();
                this.transit(new TalkingState(this._signaling));
            }
        }, {
            key: 'channelDown',
            value: function channelDown() {
                this.transit(new FailedState(this._signaling));
            }
        }, {
            key: 'sendAcceptRequest',
            value: function () {
                var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                    var acceptId;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    acceptId = (0, _v2.default)();
    
                                    this._signaling._wss.send(JSON.stringify({
                                        jsonrpc: '2.0',
                                        method: _rtc_const.ACCEPT_METHOD_NAME,
                                        params: {},
                                        id: acceptId
                                    }));
    
                                case 2:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));
    
                function sendAcceptRequest() {
                    return _ref.apply(this, arguments);
                }
    
                return sendAcceptRequest;
            }()
        }, {
            key: 'name',
            get: function get() {
                return "PendingAcceptState";
            }
        }]);
        return PendingAcceptState;
    }(SignalingState);
    
    var PendingAcceptAckState = exports.PendingAcceptAckState = function (_FailOnTimeoutState3) {
        (0, _inherits3.default)(PendingAcceptAckState, _FailOnTimeoutState3);
    
        function PendingAcceptAckState(signaling, acceptId) {
            (0, _classCallCheck3.default)(this, PendingAcceptAckState);
    
            var _this6 = (0, _possibleConstructorReturn3.default)(this, (PendingAcceptAckState.__proto__ || Object.getPrototypeOf(PendingAcceptAckState)).call(this, signaling, _rtc_const.MAX_ACCEPT_BYE_DELAY_MS));
    
            _this6._acceptId = acceptId;
            return _this6;
        }
    
        (0, _createClass3.default)(PendingAcceptAckState, [{
            key: 'onRpcMsg',
            value: function onRpcMsg(msg) {
                if (msg.id === this._acceptId) {
                    if (msg.error) {
                        this.transit(new FailedState(this._signaling));
                    } else {
                        this._signaling._clientToken = msg.result.clientToken;
                        this.transit(new TalkingState(this._signaling));
                    }
                }
            }
        }, {
            key: 'name',
            get: function get() {
                return "PendingAcceptAckState";
            }
        }]);
        return PendingAcceptAckState;
    }(FailOnTimeoutState);
    
    var TalkingState = exports.TalkingState = function (_SignalingState4) {
        (0, _inherits3.default)(TalkingState, _SignalingState4);
    
        function TalkingState() {
            (0, _classCallCheck3.default)(this, TalkingState);
            return (0, _possibleConstructorReturn3.default)(this, (TalkingState.__proto__ || Object.getPrototypeOf(TalkingState)).apply(this, arguments));
        }
    
        (0, _createClass3.default)(TalkingState, [{
            key: 'onEnter',
            value: function onEnter() {
                var self = this;
                new Promise(function notifyHandshaked(resolve) {
                    self._signaling._handshakedHandler();
                    resolve();
                });
            }
        }, {
            key: 'hangup',
            value: function hangup() {
                var byeId = (0, _v2.default)();
                this._signaling._wss.send(JSON.stringify({
                    jsonrpc: '2.0',
                    method: _rtc_const.BYE_METHOD_NAME,
                    params: { callContextToken: this._signaling._contactToken },
                    id: byeId
                }));
                this.transit(new PendingRemoteHangupState(this._signaling, byeId));
            }
        }, {
            key: 'onRpcMsg',
            value: function onRpcMsg(msg) {
                if (msg.method === _rtc_const.BYE_METHOD_NAME) {
                    this.transit(new PendingLocalHangupState(this._signaling, msg.id));
                } else if (msg.method === 'renewClientToken') {
                    this._signaling._clientToken = msg.params.clientToken;
                }
            }
        }, {
            key: 'channelDown',
            value: function channelDown() {
                this._signaling._reconnect();
                this._signaling.transit(new PendingReconnectState(this._signaling));
            }
        }, {
            key: 'name',
            get: function get() {
                return "TalkingState";
            }
        }]);
        return TalkingState;
    }(SignalingState);
    
    var PendingReconnectState = exports.PendingReconnectState = function (_FailOnTimeoutState4) {
        (0, _inherits3.default)(PendingReconnectState, _FailOnTimeoutState4);
    
        function PendingReconnectState(signaling) {
            (0, _classCallCheck3.default)(this, PendingReconnectState);
            return (0, _possibleConstructorReturn3.default)(this, (PendingReconnectState.__proto__ || Object.getPrototypeOf(PendingReconnectState)).call(this, signaling, _rtc_const.DEFAULT_CONNECT_TIMEOUT_MS));
        }
    
        (0, _createClass3.default)(PendingReconnectState, [{
            key: 'onOpen',
            value: function onOpen() {
                this.transit(new TalkingState(this._signaling));
            }
        }, {
            key: 'channelDown',
            value: function channelDown() {
                this.transit(new FailedState(this._signaling));
            }
        }, {
            key: 'name',
            get: function get() {
                return "PendingReconnectState";
            }
        }]);
        return PendingReconnectState;
    }(FailOnTimeoutState);
    
    var PendingRemoteHangupState = exports.PendingRemoteHangupState = function (_FailOnTimeoutState5) {
        (0, _inherits3.default)(PendingRemoteHangupState, _FailOnTimeoutState5);
    
        function PendingRemoteHangupState(signaling, byeId) {
            (0, _classCallCheck3.default)(this, PendingRemoteHangupState);
    
            var _this9 = (0, _possibleConstructorReturn3.default)(this, (PendingRemoteHangupState.__proto__ || Object.getPrototypeOf(PendingRemoteHangupState)).call(this, signaling, _rtc_const.MAX_ACCEPT_BYE_DELAY_MS));
    
            _this9._byeId = byeId;
            return _this9;
        }
    
        (0, _createClass3.default)(PendingRemoteHangupState, [{
            key: 'onRpcMsg',
            value: function onRpcMsg(msg) {
                if (msg.id === this._byeId || msg.method === _rtc_const.BYE_METHOD_NAME) {
                    this.transit(new DisconnectedState(this._signaling));
                }
            }
        }, {
            key: 'name',
            get: function get() {
                return "PendingRemoteHangupState";
            }
        }]);
        return PendingRemoteHangupState;
    }(FailOnTimeoutState);
    
    var PendingLocalHangupState = exports.PendingLocalHangupState = function (_SignalingState5) {
        (0, _inherits3.default)(PendingLocalHangupState, _SignalingState5);
    
        function PendingLocalHangupState(signaling, byeId) {
            (0, _classCallCheck3.default)(this, PendingLocalHangupState);
    
            var _this10 = (0, _possibleConstructorReturn3.default)(this, (PendingLocalHangupState.__proto__ || Object.getPrototypeOf(PendingLocalHangupState)).call(this, signaling));
    
            _this10._byeId = byeId;
            return _this10;
        }
    
        (0, _createClass3.default)(PendingLocalHangupState, [{
            key: 'onEnter',
            value: function onEnter() {
                var self = this;
                new Promise(function notifyRemoteHungup(resolve) {
                    self._signaling._remoteHungupHandler();
                    resolve();
                });
            }
        }, {
            key: 'hangup',
            value: function hangup() {
                var self = this;
                self._signaling._wss.send(JSON.stringify({
                    jsonrpc: '2.0',
                    result: {},
                    id: self._byeId
                }));
                self.transit(new DisconnectedState(self._signaling));
            }
        }, {
            key: 'onRpcMsg',
            value: function onRpcMsg() {
                //Do nothing
            }
        }, {
            key: 'channelDown',
            value: function channelDown() {
                this.transit(new DisconnectedState(this._signaling));
            }
        }, {
            key: 'name',
            get: function get() {
                return "PendingLocalHangupState";
            }
        }]);
        return PendingLocalHangupState;
    }(SignalingState);
    
    var DisconnectedState = exports.DisconnectedState = function (_SignalingState6) {
        (0, _inherits3.default)(DisconnectedState, _SignalingState6);
    
        function DisconnectedState() {
            (0, _classCallCheck3.default)(this, DisconnectedState);
            return (0, _possibleConstructorReturn3.default)(this, (DisconnectedState.__proto__ || Object.getPrototypeOf(DisconnectedState)).apply(this, arguments));
        }
    
        (0, _createClass3.default)(DisconnectedState, [{
            key: 'onEnter',
            value: function onEnter() {
                var self = this;
                new Promise(function notifyDisconnected(resolve) {
                    self._signaling._disconnectedHandler();
                    resolve();
                });
                this._signaling._wss.close();
            }
        }, {
            key: 'channelDown',
            value: function channelDown() {
                //Do nothing
            }
        }, {
            key: 'onRpcMsg',
            value: function onRpcMsg() {
                //Do nothing
            }
        }, {
            key: 'name',
            get: function get() {
                return "DisconnectedState";
            }
        }]);
        return DisconnectedState;
    }(SignalingState);
    
    var FailedState = exports.FailedState = function (_SignalingState7) {
        (0, _inherits3.default)(FailedState, _SignalingState7);
    
        function FailedState(signaling, exception) {
            (0, _classCallCheck3.default)(this, FailedState);
    
            var _this12 = (0, _possibleConstructorReturn3.default)(this, (FailedState.__proto__ || Object.getPrototypeOf(FailedState)).call(this, signaling));
    
            _this12._exception = exception;
            return _this12;
        }
    
        (0, _createClass3.default)(FailedState, [{
            key: 'onEnter',
            value: function onEnter() {
                var self = this;
                new Promise(function notifyFailed(resolve) {
                    self._signaling._failedHandler(self._exception);
                    resolve();
                });
                this._signaling._wss.close();
            }
        }, {
            key: 'channelDown',
            value: function channelDown() {
                //Do nothing
            }
        }, {
            key: 'name',
            get: function get() {
                return "FailedState";
            }
        }, {
            key: 'exception',
            get: function get() {
                return this._exception;
            }
        }]);
        return FailedState;
    }(SignalingState);
    
    var AmznRtcSignaling = function () {
        function AmznRtcSignaling(callId, signalingUri, contactToken, logger, connectTimeoutMs, connectionId, wssManager) {
            (0, _classCallCheck3.default)(this, AmznRtcSignaling);
    
            this._callId = callId;
            this._connectTimeoutMs = connectTimeoutMs || _rtc_const.DEFAULT_CONNECT_TIMEOUT_MS;
            this._autoAnswer = true;
            this._signalingUri = signalingUri;
            this._contactToken = contactToken;
            this._logger = (0, _utils.wrapLogger)(logger, callId, 'SIGNALING');
            this._connectionId = connectionId;
            this._wssManager = wssManager;
    
            //empty event handlers
            this._connectedHandler = this._answeredHandler = this._handshakedHandler = this._reconnectedHandler = this._remoteHungupHandler = this._disconnectedHandler = this._failedHandler = function noOp() {};
        }
    
        (0, _createClass3.default)(AmznRtcSignaling, [{
            key: 'connect',
            value: function connect() {
                this._connect();
                this.transit(new PendingConnectState(this, this._connectTimeoutMs));
            }
        }, {
            key: '_connect',
            value: function _connect() {
                this._wss = this._connectWebSocket(this._buildInviteUri());
            }
        }, {
            key: 'transit',
            value: function transit(nextState) {
                try {
                    this._logger.info((this._state ? this._state.name : 'null') + ' => ' + nextState.name);
                    if (this.state && this.state.onExit) {
                        this.state.onExit();
                    }
                } finally {
                    this._state = nextState;
                    if (this._state.onEnter) {
                        this._state.onEnter();
                    }
                }
            }
        }, {
            key: '_connectWebSocket',
            value: function _connectWebSocket(uri) {
                var wsConnection = void 0;
                if (this._wssManager) {
                    wsConnection = new _virtual_wss_connection_manager2.default(this._logger, this._connectionId, this._wssManager);
                } else {
                    wsConnection = new WebSocket(uri);
                }
                wsConnection.onopen = (0, _utils.hitch)(this, this._onOpen);
                wsConnection.onmessage = (0, _utils.hitch)(this, this._onMessage);
                wsConnection.onerror = (0, _utils.hitch)(this, this._onError);
                wsConnection.onclose = (0, _utils.hitch)(this, this._onClose);
                return wsConnection;
            }
        }, {
            key: '_buildInviteUri',
            value: function _buildInviteUri() {
                if (this._contactToken) {
                    return this._buildUriBase() + '&contactCtx=' + encodeURIComponent(this._contactToken);
                } else {
                    return this._buildUriBase();
                }
            }
        }, {
            key: '_buildReconnectUri',
            value: function _buildReconnectUri() {
                return this._buildUriBase() + '&clientToken=' + encodeURIComponent(this._clientToken);
            }
        }, {
            key: '_buildUriBase',
            value: function _buildUriBase() {
                var separator = '?';
                if (this._signalingUri.indexOf(separator) > -1) {
                    separator = '&';
                }
                return this._signalingUri + separator + 'callId=' + encodeURIComponent(this._callId);
            }
        }, {
            key: '_onMessage',
            value: function _onMessage(evt) {
                this.state.onRpcMsg(JSON.parse(evt.data));
            }
        }, {
            key: '_onOpen',
            value: function _onOpen(evt) {
                this.state.onOpen(evt);
            }
        }, {
            key: '_onError',
            value: function _onError(evt) {
                this.state.onError(evt);
            }
        }, {
            key: '_onClose',
            value: function _onClose(evt) {
                this._logger.log('WebSocket onclose code=' + evt.code + ', reason=' + evt.reason);
                this.state.onClose(evt);
            }
        }, {
            key: '_reconnect',
            value: function _reconnect() {
                this._wss = this._connectWebSocket(this._buildReconnectUri());
            }
        }, {
            key: 'invite',
            value: function invite(sdp, iceCandidates) {
                this.state.invite(sdp, iceCandidates);
            }
        }, {
            key: 'accept',
            value: function accept() {
                this.state.accept();
            }
        }, {
            key: 'hangup',
            value: function hangup() {
                this.state.hangup();
            }
        }, {
            key: 'callId',
            get: function get() {
                return this._callId;
            }
        }, {
            key: 'onConnected',
            set: function set(connectedHandler) {
                this._connectedHandler = connectedHandler;
            }
        }, {
            key: 'onAnswered',
            set: function set(answeredHandler) {
                this._answeredHandler = answeredHandler;
            }
        }, {
            key: 'onHandshaked',
            set: function set(handshakedHandler) {
                this._handshakedHandler = handshakedHandler;
            }
        }, {
            key: 'onReconnected',
            set: function set(reconnectedHandler) {
                this._reconnectedHandler = reconnectedHandler;
            }
        }, {
            key: 'onRemoteHungup',
            set: function set(remoteHungupHandler) {
                this._remoteHungupHandler = remoteHungupHandler;
            }
        }, {
            key: 'onDisconnected',
            set: function set(disconnectedHandler) {
                this._disconnectedHandler = disconnectedHandler;
            }
        }, {
            key: 'onFailed',
            set: function set(failedHandler) {
                this._failedHandler = failedHandler;
            }
        }, {
            key: 'state',
            get: function get() {
                return this._state;
            }
        }]);
        return AmznRtcSignaling;
    }();
    
    exports.default = AmznRtcSignaling;
    
    },{"./exceptions":136,"./rtc_const":137,"./utils":147,"./virtual_wss_connection_manager":148,"babel-runtime/helpers/asyncToGenerator":11,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16,"babel-runtime/regenerator":18,"uuid/v4":122}],143:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");
    
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
    var _createClass2 = require("babel-runtime/helpers/createClass");
    
    var _createClass3 = _interopRequireDefault(_createClass2);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var CCPInitiationStrategyInterface = function () {
        function CCPInitiationStrategyInterface() {
            (0, _classCallCheck3.default)(this, CCPInitiationStrategyInterface);
    
            console.log("CCPInitiationStrategyInterface initialized");
        }
    
        (0, _createClass3.default)(CCPInitiationStrategyInterface, [{
            key: "getStrategyName",
            value: function getStrategyName() {
                console.error("getStrategyName needs to be overridden");
            }
    
            // the following functions are rtc_peer_connection_factory related functions
            // check if the browser supports early media connection
    
        }, {
            key: "_isEarlyMediaConnectionSupported",
            value: function _isEarlyMediaConnectionSupported() {
                console.error("_isEarlyMediaConnectionSupported needs to be overridden");
            }
        }, {
            key: "_createRtcPeerConnection",
            value: function _createRtcPeerConnection() {
                console.error("_createRtcPeerConnection needs to be overridden");
            }
    
            // the following functions are rtc_session related functions
    
        }, {
            key: "_guM",
            value: function _guM() {
                console.error("_guM needs to be overridden");
            }
        }, {
            key: "addStream",
            value: function addStream() {
                console.error("addStream needs to be overridden");
            }
        }, {
            key: "setRemoteDescription",
            value: function setRemoteDescription() {
                console.error("setRemoteDescription needs to be overridden");
            }
        }, {
            key: "onIceStateChange",
            value: function onIceStateChange() {
                console.error("onIceStateChange needs to be overridden");
            }
        }, {
            key: "onPeerConnectionStateChange",
            value: function onPeerConnectionStateChange() {
                console.error("onPeerConnectionStateChange needs to be overridden");
            }
        }, {
            key: "_createPeerConnection",
            value: function _createPeerConnection() {
                console.error("_createPeerConnection needs to be overridden");
            }
        }, {
            key: "connect",
            value: function connect() {
                console.error("connect needs to be overridden");
            }
        }, {
            key: "_ontrack",
            value: function _ontrack() {
                console.error("_ontrack needs to be overridden");
            }
        }, {
            key: "_buildMediaConstraints",
            value: function _buildMediaConstraints() {
                console.error("_buildMediaConstraints needs to be overridden");
            }
        }]);
        return CCPInitiationStrategyInterface;
    }();
    
    exports.default = CCPInitiationStrategyInterface;
    
    },{"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],144:[function(require,module,exports){
    (function (global){(function (){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");
    
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
    var _createClass2 = require("babel-runtime/helpers/createClass");
    
    var _createClass3 = _interopRequireDefault(_createClass2);
    
    var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");
    
    var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
    
    var _inherits2 = require("babel-runtime/helpers/inherits");
    
    var _inherits3 = _interopRequireDefault(_inherits2);
    
    var _CCPInitiationStrategyInterface = require("./CCPInitiationStrategyInterface");
    
    var _CCPInitiationStrategyInterface2 = _interopRequireDefault(_CCPInitiationStrategyInterface);
    
    var _rtc_session = require("../rtc_session");
    
    var _rtc_const = require("../rtc_const");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var CitrixVDIStrategy = function (_CCPInitiationStrateg) {
        (0, _inherits3.default)(CitrixVDIStrategy, _CCPInitiationStrateg);
    
        function CitrixVDIStrategy() {
            var useRealCitrix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            (0, _classCallCheck3.default)(this, CitrixVDIStrategy);
    
            var _this = (0, _possibleConstructorReturn3.default)(this, (CitrixVDIStrategy.__proto__ || Object.getPrototypeOf(CitrixVDIStrategy)).call(this));
    
            if (useRealCitrix) {
                require("@citrix/ucsdk/CitrixWebRTC");
            }
            console.log("CitrixVDIStrategy initializing");
            _this.initCitrixWebRTC();
            _this.initGetCitrixWebrtcRedir();
            _this.initLog();
            return _this;
        }
    
        (0, _createClass3.default)(CitrixVDIStrategy, [{
            key: "initCitrixWebRTC",
            value: function initCitrixWebRTC() {
                window.CitrixWebRTC.setVMEventCallback(function (event) {
                    if (event.event === 'vdiClientConnected') {
                        if (!window.CitrixWebRTC.isFeatureOn("webrtc1.0")) {
                            throw new Error('Citrix WebRTC redirection feature is NOT supported!');
                        }
                        console.log("CitrixVDIStrategy initialized");
                    } else if (event.event === 'vdiClientDisconnected') {
                        console.log("vdiClientDisconnected");
                    }
                });
                window.CitrixWebRTC.initUCSDK("AmazonConnect");
            }
        }, {
            key: "initGetCitrixWebrtcRedir",
            value: function initGetCitrixWebrtcRedir() {
                window.getCitrixWebrtcRedir = function () {
                    return Promise.resolve(1);
                };
            }
        }, {
            key: "initLog",
            value: function initLog() {
                window.CitrixWebRTC.initLog(global.connect.getLog());
            }
    
            // the following functions are rtc_peer_connection_factory related functions
            // check if the browser supports early media connection
    
        }, {
            key: "_isEarlyMediaConnectionSupported",
            value: function _isEarlyMediaConnectionSupported() {
                // Citrix WebRTC SDK doesn't support early media connection
                return false;
            }
        }, {
            key: "_createRtcPeerConnection",
            value: function _createRtcPeerConnection(rtcPeerConnectionConfig, rtcPeerConnectionOptionalConfig) {
                return new window.CitrixWebRTC.CitrixPeerConnection(rtcPeerConnectionConfig, rtcPeerConnectionOptionalConfig);
            }
    
            // the following functions are rtc_session related functions
    
        }, {
            key: "_gUM",
            value: function _gUM(constraints) {
                return window.CitrixWebRTC.getUserMedia(constraints);
            }
        }, {
            key: "addStream",
            value: function addStream(_pc, stream) {
                stream.getTracks().forEach(function (track) {
                    _pc.addTransceiver(track, {});
                });
            }
        }, {
            key: "setRemoteDescription",
            value: function setRemoteDescription(self, rtcSession) {
                var answerSessionDescription = self._createSessionDescription({ type: 'answer', sdp: self._sdp });
    
                rtcSession._pc.setRemoteDescription(answerSessionDescription, function () {
                    var remoteCandidatePromises = Promise.all(self._candidates.map(function (candidate) {
                        var remoteCandidate = self._createRemoteCandidate(candidate);
                        self.logger.info('Adding remote candidate', remoteCandidate);
                        return rtcSession._pc.addIceCandidate(remoteCandidate);
                    }));
                    remoteCandidatePromises.catch(function (reason) {
                        self.logger.warn('Error adding remote candidate', reason);
                    });
                    rtcSession._sessionReport.setRemoteDescriptionFailure = false;
                    self._remoteDescriptionSet = true;
                    self._checkAndTransit();
                }, function () {
                    rtcSession._stopSession();
                    rtcSession._sessionReport.setRemoteDescriptionFailure = true;
                    self.transit(new _rtc_session.FailedState(rtcSession, _rtc_const.RTC_ERRORS.SET_REMOTE_DESCRIPTION_FAILURE));
                });
            }
        }, {
            key: "onIceStateChange",
            value: function onIceStateChange(evt, _pc) {
                return _pc.iceConnectionState;
            }
        }, {
            key: "onPeerConnectionStateChange",
            value: function onPeerConnectionStateChange(_pc) {
                return _pc.connectionState_;
            }
        }, {
            key: "_createPeerConnection",
            value: function _createPeerConnection(configuration, optionalConfiguration) {
                return new window.CitrixWebRTC.CitrixPeerConnection(configuration, optionalConfiguration);
            }
        }, {
            key: "_ontrack",
            value: function _ontrack(self, evt) {
                window.CitrixWebRTC.mapAudioElement(self._remoteAudioElement);
                if (evt.streams.length > 1) {
                    self._logger.warn('Found more than 1 streams for ' + evt.track.kind + ' track ' + evt.track.id + ' : ' + evt.streams.map(function (stream) {
                        return stream.id;
                    }).join(','));
                }
                if (evt.track.kind === 'video' && self._remoteVideoElement) {
                    self._remoteVideoElement.srcObject = evt.streams[0];
                    self._remoteVideoStream = evt.streams[0];
                } else if (evt.track.kind === 'audio' && self._remoteAudioElement) {
                    self._remoteAudioElement.srcObject = evt.streams[0];
                    self._remoteAudioStream = evt.streams[0];
                }
                self._remoteAudioElement.play();
            }
        }, {
            key: "_buildMediaConstraints",
            value: function _buildMediaConstraints(self, mediaConstraints) {
                if (self._enableAudio) {
                    var audioConstraints = {};
                    if (typeof self._echoCancellation !== 'undefined') {
                        audioConstraints.echoCancellation = !!self._echoCancellation;
                    }
                    if (window.audio_input) {
                        audioConstraints.deviceId = window.audio_input;
                    }
                    if (Object.keys(audioConstraints).length > 0) {
                        mediaConstraints.audio = audioConstraints;
                    } else {
                        mediaConstraints.audio = true;
                    }
                } else {
                    mediaConstraints.audio = false;
                }
            }
        }, {
            key: "getStrategyName",
            value: function getStrategyName() {
                return 'CitrixVDIStrategy';
            }
        }]);
        return CitrixVDIStrategy;
    }(_CCPInitiationStrategyInterface2.default); /**
                                                  * By using the Citrix ucsdk (https://www.npmjs.com/package/@citrix/ucsdk), you are accepting the Citrix Developer Terms of Use  located here: https://www.cloud.com/terms-of-use.
                                                  */
    
    exports.default = CitrixVDIStrategy;
    
    }).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{"../rtc_const":137,"../rtc_session":139,"./CCPInitiationStrategyInterface":143,"@citrix/ucsdk/CitrixWebRTC":2,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],145:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");
    
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
    var _createClass2 = require("babel-runtime/helpers/createClass");
    
    var _createClass3 = _interopRequireDefault(_createClass2);
    
    var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");
    
    var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
    
    var _inherits2 = require("babel-runtime/helpers/inherits");
    
    var _inherits3 = _interopRequireDefault(_inherits2);
    
    var _CCPInitiationStrategyInterface = require("./CCPInitiationStrategyInterface");
    
    var _CCPInitiationStrategyInterface2 = _interopRequireDefault(_CCPInitiationStrategyInterface);
    
    var _rtc_const = require("../rtc_const");
    
    var _utils = require("../utils");
    
    var _rtc_session = require("../rtc_session");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var StandardStrategy = function (_CCPInitiationStrateg) {
        (0, _inherits3.default)(StandardStrategy, _CCPInitiationStrateg);
    
        function StandardStrategy() {
            (0, _classCallCheck3.default)(this, StandardStrategy);
    
            var _this = (0, _possibleConstructorReturn3.default)(this, (StandardStrategy.__proto__ || Object.getPrototypeOf(StandardStrategy)).call(this));
    
            console.log("StandardStrategy initialized");
            return _this;
        }
    
        // the following functions are rtc_peer_connection_factory related functions
        // check if the browser supports early media connection
    
    
        (0, _createClass3.default)(StandardStrategy, [{
            key: "_isEarlyMediaConnectionSupported",
            value: function _isEarlyMediaConnectionSupported() {
                return (0, _utils.isChromeBrowser)() && (0, _utils.getChromeBrowserVersion)() >= _rtc_const.CHROME_SUPPORTED_VERSION;
            }
        }, {
            key: "_createRtcPeerConnection",
            value: function _createRtcPeerConnection(rtcPeerConnectionConfig, rtcPeerConnectionOptionalConfig) {
                return new RTCPeerConnection(rtcPeerConnectionConfig, rtcPeerConnectionOptionalConfig);
            }
    
            // the following functions are rtc_session related functions
    
        }, {
            key: "_gUM",
            value: function _gUM(constraints) {
                return navigator.mediaDevices.getUserMedia(constraints);
            }
        }, {
            key: "addStream",
            value: function addStream(_pc, stream) {
                _pc.addStream(stream);
            }
        }, {
            key: "setRemoteDescription",
            value: function setRemoteDescription(self, rtcSession) {
                var setRemoteDescriptionPromise = rtcSession._pc.setRemoteDescription(self._createSessionDescription({
                    type: 'answer',
                    sdp: self._sdp
                }));
                setRemoteDescriptionPromise.catch(function (e) {
                    self.logger.error('SetRemoteDescription failed', e);
                });
                setRemoteDescriptionPromise.then(function () {
                    var remoteCandidatePromises = Promise.all(self._candidates.map(function (candidate) {
                        var remoteCandidate = self._createRemoteCandidate(candidate);
                        self.logger.info('Adding remote candidate', remoteCandidate);
                        return rtcSession._pc.addIceCandidate(remoteCandidate);
                    }));
                    remoteCandidatePromises.catch(function (reason) {
                        self.logger.warn('Error adding remote candidate', reason);
                    });
                    return remoteCandidatePromises;
                }).then(function () {
                    rtcSession._sessionReport.setRemoteDescriptionFailure = false;
                    self._remoteDescriptionSet = true;
                    self._checkAndTransit();
                }).catch(function () {
                    rtcSession._stopSession();
                    rtcSession._sessionReport.setRemoteDescriptionFailure = true;
                    self.transit(new _rtc_session.FailedState(rtcSession, _rtc_const.RTC_ERRORS.SET_REMOTE_DESCRIPTION_FAILURE));
                });
            }
        }, {
            key: "onIceStateChange",
            value: function onIceStateChange(evt, _pc) {
                // eslint-disable-line no-unused-vars
                return evt.currentTarget.iceConnectionState;
            }
        }, {
            key: "onPeerConnectionStateChange",
            value: function onPeerConnectionStateChange(_pc) {
                return _pc.connectionState;
            }
        }, {
            key: "_createPeerConnection",
            value: function _createPeerConnection(configuration, optionalConfiguration) {
                return new RTCPeerConnection(configuration, optionalConfiguration);
            }
        }, {
            key: "_ontrack",
            value: function _ontrack(self, evt) {
                if (evt.streams.length > 1) {
                    self._logger.warn('Found more than 1 streams for ' + evt.track.kind + ' track ' + evt.track.id + ' : ' + evt.streams.map(function (stream) {
                        return stream.id;
                    }).join(','));
                }
                if (evt.track.kind === 'video' && self._remoteVideoElement) {
                    self._remoteVideoElement.srcObject = evt.streams[0];
                    self._remoteVideoStream = evt.streams[0];
                } else if (evt.track.kind === 'audio' && self._remoteAudioElement) {
                    self._remoteAudioElement.srcObject = evt.streams[0];
                    self._remoteAudioStream = evt.streams[0];
                }
            }
        }, {
            key: "_buildMediaConstraints",
            value: function _buildMediaConstraints(self, mediaConstraints) {
                if (self._enableAudio) {
                    var audioConstraints = {};
                    if (typeof self._echoCancellation !== 'undefined') {
                        audioConstraints.echoCancellation = !!self._echoCancellation;
                    }
                    if (Object.keys(audioConstraints).length > 0) {
                        mediaConstraints.audio = audioConstraints;
                    } else {
                        mediaConstraints.audio = true;
                    }
                } else {
                    mediaConstraints.audio = false;
                }
            }
        }, {
            key: "getStrategyName",
            value: function getStrategyName() {
                return 'StandardStrategy';
            }
        }]);
        return StandardStrategy;
    }(_CCPInitiationStrategyInterface2.default);
    
    exports.default = StandardStrategy;
    
    },{"../rtc_const":137,"../rtc_session":139,"../utils":147,"./CCPInitiationStrategyInterface":143,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],146:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");
    
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
    var _createClass2 = require("babel-runtime/helpers/createClass");
    
    var _createClass3 = _interopRequireDefault(_createClass2);
    
    var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");
    
    var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
    
    var _inherits2 = require("babel-runtime/helpers/inherits");
    
    var _inherits3 = _interopRequireDefault(_inherits2);
    
    var _regenerator = require("babel-runtime/regenerator");
    
    var _regenerator2 = _interopRequireDefault(_regenerator);
    
    var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");
    
    var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
    
    var _CCPInitiationStrategyInterface = require("./CCPInitiationStrategyInterface");
    
    var _CCPInitiationStrategyInterface2 = _interopRequireDefault(_CCPInitiationStrategyInterface);
    
    var _rtc_session = require("../rtc_session");
    
    var _rtc_const = require("../rtc_const");
    
    var _HorizonSDKforWebRTCRedir = require("../../../lib/HorizonSDKforWebRTCRedir");
    
    var _HorizonSDKforWebRTCRedir2 = _interopRequireDefault(_HorizonSDKforWebRTCRedir);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    // The SDK is exported in such a way that it will not set `window.VMwareWebRtcRedirectionAPI` if
    // it is imported via ESModule or CommonJS. So that builders can utilize the SDK (e.g. for device
    // enumberation, we re-export it with the same name)
    window.VMwareWebRtcRedirectionAPI = _HorizonSDKforWebRTCRedir2.default;
    
    window.HORIZON_WSS_PORT = '50924';
    window.HORIZON_CLIENT_ID = 'BgAAAAJlFGwmIYeRC4E/nDXa0eE=';
    window.WINDOW_REFERENCE = 'ca01040000000000';
    
    // A promise that resolves to the Horizon View client ID
    window.getHorizonClientID = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log("Requesting Horizon Client ID. Returning static value.");
                        return _context.abrupt("return", window.HORIZON_CLIENT_ID);
    
                    case 2:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
    
    // A promise that resolves to the Web Socket port number
    window.getHorizonWSSPort = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        console.log("Requesting Horizon WSS Port. Returning static value.");
                        return _context2.abrupt("return", window.HORIZON_WSS_PORT);
    
                    case 2:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));
    
    // A promise that resolves to the current Application window handle as a hexadecimal string
    window.getWindowReference = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        console.log("Requesting Horizon Window Reference. Returning static value.");
                        return _context3.abrupt("return", window.WINDOW_REFERENCE);
    
                    case 2:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));
    
    var VMwareVDIStrategy = function (_CCPInitiationStrateg) {
        (0, _inherits3.default)(VMwareVDIStrategy, _CCPInitiationStrateg);
    
        function VMwareVDIStrategy() {
            (0, _classCallCheck3.default)(this, VMwareVDIStrategy);
    
            var _this = (0, _possibleConstructorReturn3.default)(this, (VMwareVDIStrategy.__proto__ || Object.getPrototypeOf(VMwareVDIStrategy)).call(this));
    
            var prefix = "VMwareVDI";
            var appLogger = {
                error: function error() {
                    var _console;
    
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }
    
                    return (_console = console).error.apply(_console, [prefix].concat(args));
                },
                info: function info() {
                    var _console2;
    
                    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        args[_key2] = arguments[_key2];
                    }
    
                    return (_console2 = console).log.apply(_console2, [prefix].concat(args));
                },
                warn: function warn() {
                    var _console3;
    
                    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        args[_key3] = arguments[_key3];
                    }
    
                    return (_console3 = console).warn.apply(_console3, [prefix].concat(args));
                }
            };
            var appName = "Amazon Connect";
            var initResult = _HorizonSDKforWebRTCRedir2.default.initSDK(appLogger, appName, _this.vmEventHandler);
            if (!initResult) {
                throw new Error('VMware WebRTC Redirection API failed to initialize');
            }
            return _this;
        }
    
        (0, _createClass3.default)(VMwareVDIStrategy, [{
            key: "vmEventHandler",
            value: function vmEventHandler(event) {
                var eventType = event.event;
                console.log("Got event from VMwareWebRtcRedirectionAPI: " + eventType);
            }
        }, {
            key: "_isEarlyMediaConnectionSupported",
            value: function _isEarlyMediaConnectionSupported() {
                // VMware WebRTC Redirection does not support early media connection
                return false;
            }
        }, {
            key: "_createRtcPeerConnection",
            value: function _createRtcPeerConnection(rtcPeerConnectionConfig, rtcPeerConnectionOptionalConfig) {
                return _HorizonSDKforWebRTCRedir2.default.newPeerConnection(rtcPeerConnectionConfig, rtcPeerConnectionOptionalConfig);
            }
        }, {
            key: "_gUM",
            value: function _gUM(constraints) {
                return _HorizonSDKforWebRTCRedir2.default.getUserMedia(constraints);
            }
        }, {
            key: "_createPeerConnection",
            value: function _createPeerConnection(configuration, optionalConfiguration) {
                return _HorizonSDKforWebRTCRedir2.default.newPeerConnection(configuration, optionalConfiguration);
            }
        }, {
            key: "onIceStateChange",
            value: function onIceStateChange(evt, _pc) {
                return _pc.iceConnectionState;
            }
        }, {
            key: "onPeerConnectionStateChange",
            value: function onPeerConnectionStateChange(_pc) {
                return _pc.connectionState;
            }
        }, {
            key: "_buildMediaConstraints",
            value: function _buildMediaConstraints(self, mediaConstraints) {
                if (self._enableAudio) {
                    // Echo cancellation is not supported by VMWare WebRTC Redirection
    
                    var audioConstraints = {};
                    if (window.audio_input) {
                        // This isn't ideal and isn't documented but it matches the logic in CitrixVDI stategy
                        audioConstraints.deviceId = window.audio_input;
                    }
                    if (Object.keys(audioConstraints).length > 0) {
                        mediaConstraints.audio = audioConstraints;
                    } else {
                        mediaConstraints.audio = true;
                    }
                } else {
                    mediaConstraints.audio = false;
                }
            }
        }, {
            key: "addStream",
            value: function addStream(_pc, stream) {
                stream.getTracks().forEach(function (track) {
                    _pc.addTrack(track, stream);
                });
            }
        }, {
            key: "setRemoteDescription",
            value: function setRemoteDescription(self, rtcSession) {
                var setRemoteDescriptionPromise = rtcSession._pc.setRemoteDescription(self._createSessionDescription({
                    type: 'answer',
                    sdp: self._sdp
                }));
                setRemoteDescriptionPromise.catch(function (e) {
                    self.logger.error('SetRemoteDescription failed', e);
                });
                setRemoteDescriptionPromise.then(function () {
                    var remoteCandidatePromises = Promise.all(self._candidates.map(function (candidate) {
                        var remoteCandidate = self._createRemoteCandidate(candidate);
                        self.logger.info('Adding remote candidate', remoteCandidate);
                        return rtcSession._pc.addIceCandidate(remoteCandidate);
                    }));
                    remoteCandidatePromises.catch(function (reason) {
                        self.logger.warn('Error adding remote candidate', reason);
                    });
                    return remoteCandidatePromises;
                }).then(function () {
                    rtcSession._sessionReport.setRemoteDescriptionFailure = false;
                    self._remoteDescriptionSet = true;
                    self._checkAndTransit();
                }).catch(function () {
                    rtcSession._stopSession();
                    rtcSession._sessionReport.setRemoteDescriptionFailure = true;
                    self.transit(new _rtc_session.FailedState(rtcSession, _rtc_const.RTC_ERRORS.SET_REMOTE_DESCRIPTION_FAILURE));
                });
            }
        }, {
            key: "_ontrack",
            value: function _ontrack(self, event) {
                if (event.streams.length > 1) {
                    console.warn("Found more than 1 streams for " + event.track.kind + " track " + event.track.id + " : " + event.streams.map(function (stream) {
                        return stream.id;
                    }).join(','));
                }
                var stream = event.streams[0];
    
                // The following will overwrite the 'setSinkId' function on the element so it can
                // be routed to the proxy. This means that parts of the code that access the element
                // through ID lookup (e.g. setSpeakerDevice) will not work if setting a redirected device
                _HorizonSDKforWebRTCRedir2.default.onAudioCreated(self._remoteAudioElement, window.WINDOW_REFERENCE);
                // We never call `onAudioDisposed`, but neither does the sample
    
                self._remoteAudioStream = stream;
                self._remoteAudioElement.srcObject = stream;
            }
        }, {
            key: "getStrategyName",
            value: function getStrategyName() {
                return 'VMwareVDIStrategy';
            }
        }]);
        return VMwareVDIStrategy;
    }(_CCPInitiationStrategyInterface2.default);
    
    exports.default = VMwareVDIStrategy;
    
    },{"../../../lib/HorizonSDKforWebRTCRedir":1,"../rtc_const":137,"../rtc_session":139,"./CCPInitiationStrategyInterface":143,"babel-runtime/helpers/asyncToGenerator":11,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16,"babel-runtime/regenerator":18}],147:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.SdpOptions = undefined;
    
    var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');
    
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
    var _createClass2 = require('babel-runtime/helpers/createClass');
    
    var _createClass3 = _interopRequireDefault(_createClass2);
    
    exports.hitch = hitch;
    exports.wrapLogger = wrapLogger;
    exports.closeStream = closeStream;
    exports.transformSdp = transformSdp;
    exports.is_defined = is_defined;
    exports.when_defined = when_defined;
    exports.isLegacyStatsReportSupported = isLegacyStatsReportSupported;
    exports.isFunction = isFunction;
    exports.assertTrue = assertTrue;
    exports.isChromeBrowser = isChromeBrowser;
    exports.getChromeBrowserVersion = getChromeBrowserVersion;
    exports.getRedactedSdp = getRedactedSdp;
    
    var _exceptions = require('./exceptions');
    
    var _sdp = require('sdp');
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    /**
     * All logging methods used by connect-rtc.
     */
    /**
     * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
     *
     * SPDX-License-Identifier: Apache-2.0
     */
    
    var logMethods = ['log', 'info', 'warn', 'error'];
    
    /**
     * Binds the given instance object as the context for
     * the method provided.
     *
     * @param scope The instance object to be set as the scope
     *    of the function.
     * @param method The method to be encapsulated.
     *
     * All other arguments, if any, are bound to the method
     * invocation inside the closure.
     *
     * @return A closure encapsulating the invocation of the
     *    method provided in context of the given instance.
     */
    function hitch() {
        var args = Array.prototype.slice.call(arguments);
        var scope = args.shift();
        var method = args.shift();
    
        if (!scope) {
            throw new _exceptions.IllegalParameters('utils.hitch(): scope is required!');
        }
    
        if (!method) {
            throw new _exceptions.IllegalParameters('utils.hitch(): method is required!');
        }
    
        if (typeof method !== 'function') {
            throw new _exceptions.IllegalParameters('utils.hitch(): method is not a function!');
        }
    
        return function _hitchedFunction() {
            var closureArgs = Array.prototype.slice.call(arguments);
            return method.apply(scope, args.concat(closureArgs));
        };
    }
    
    function wrapLogger(logger, callId, logCategory) {
        var _logger = {};
        logMethods.forEach(function (logMethod) {
            if (!logger[logMethod]) {
                throw new Error('Logging method ' + logMethod + ' required');
            }
            _logger[logMethod] = hitch(logger, logger[logMethod], callId, logCategory);
        });
        return _logger;
    }
    
    function closeStream(stream) {
        if (stream) {
            var tracks = stream.getTracks();
            for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                try {
                    track.stop();
                } catch (e) {
                    // eat exception
                }
            }
        }
    }
    
    /**
     * A parameter of transformSdp.
     * This defines all the SDP options connect-rtc-js supports.
     */
    
    var SdpOptions = exports.SdpOptions = function () {
        function SdpOptions() {
            (0, _classCallCheck3.default)(this, SdpOptions);
    
            this._forceCodec = {};
        }
    
        (0, _createClass3.default)(SdpOptions, [{
            key: '_shouldDeleteCodec',
    
    
            /**
             * Test if given codec should be removed from SDP.
             * @param mediaType audio|video
             * @param codecName case insensitive
             * @return TRUE - should remove
             */
            value: function _shouldDeleteCodec(mediaType, codecName) {
                var upperCaseCodecName = codecName.toUpperCase();
                return this._forceCodec[mediaType] && upperCaseCodecName !== this._forceCodec[mediaType].toUpperCase() && upperCaseCodecName !== 'TELEPHONE-EVENT';
            }
        }, {
            key: 'enableOpusDtx',
            get: function get() {
                return this._enableOpusDtx;
            }
    
            /**
             * By default transformSdp disables dtx for OPUS codec.
             * Setting this to true would force it to turn on DTX.
             */
            ,
            set: function set(flag) {
                this._enableOpusDtx = flag;
            }
    
            /**
             * A map from media type (audio/video) to codec (case insensitive).
             * Add entry for force connect-rtc-js to use specified codec for certain media type.
             * For example: sdpOptions.forceCodec['audio'] = 'opus';
             */
    
        }, {
            key: 'forceCodec',
            get: function get() {
                return this._forceCodec;
            }
        }]);
        return SdpOptions;
    }();
    
    /**
     * Modifies input SDP according to sdpOptions.
     * See SdpOptions for available options.
     * @param sdp original SDP
     * @param sdpOptions defines changes to be applied to SDP
     * @returns a map with 'sdp' containing the transformed SDP and 'mLines' containing the number of m lines in SDP
     */
    
    
    function transformSdp(sdp, sdpOptions) {
        var sections = (0, _sdp.splitSections)(sdp);
        for (var i = 1; i < sections.length; i++) {
            var mediaType = (0, _sdp.getKind)(sections[i]);
            var rtpParams = (0, _sdp.parseRtpParameters)(sections[i]);
            // a map from payload type (string) to codec object
            var codecMap = rtpParams.codecs.reduce(function (map, codec) {
                map['' + codec.payloadType] = codec;
                return map;
            }, {});
            sections[i] = (0, _sdp.splitLines)(sections[i]).map(function (line) {
                if (line.startsWith('m=')) {
                    // modify m= line if SdpOptions#forceCodec specifies codec for current media type
                    if (sdpOptions.forceCodec[mediaType]) {
                        var targetCodecPts = Object.keys(codecMap).filter(function (pt) {
                            return !sdpOptions._shouldDeleteCodec(mediaType, codecMap[pt].name);
                        });
                        return (/.*RTP\/S?AVPF? /.exec(line) + targetCodecPts.join(' ')
                        );
                    } else {
                        return line;
                    }
                } else if (line.startsWith('a=rtpmap:')) {
                    var rtpMap = (0, _sdp.parseRtpMap)(line);
                    var currentCodec = codecMap[rtpMap.payloadType];
    
                    // remove this codec if SdpOptions#forceCodec specifies a different codec for current media type
                    if (is_defined(currentCodec) && sdpOptions._shouldDeleteCodec(mediaType, currentCodec.name)) {
                        return null;
                    }
    
                    // append a=fmtp line immediately if current codec is OPUS (to explicitly specify OPUS parameters)
                    if (is_defined(currentCodec) && currentCodec.name.toUpperCase() === 'OPUS') {
                        currentCodec.parameters.usedtx = sdpOptions.enableOpusDtx ? "1" : "0";
                        // generate fmtp line immediately after rtpmap line, and remove original fmtp line once we see it
                        return (line + "\r\n" + (0, _sdp.writeFmtp)(currentCodec)).trim();
                    } else {
                        return line;
                    }
                } else if (line.startsWith('a=fmtp:')) {
                    var pt = line.substring('a=fmtp:'.length, line.indexOf(' '));
                    var currentCodec = codecMap[pt]; // eslint-disable-line no-redeclare
    
                    // remove this codec if SdpOptions#forceCodec specifies a different codec for current media type
                    if (is_defined(currentCodec) && sdpOptions._shouldDeleteCodec(mediaType, currentCodec.name)) {
                        return null;
                    }
    
                    if (is_defined(currentCodec) && currentCodec.name.toUpperCase() === 'OPUS') {
                        // this is a line for OPUS, remove it because FMTP line is already generated when rtpmap line is processed
                        return null;
                    } else {
                        return line;
                    }
                } else if (line.startsWith('a=rtcp-fb:')) {
                    var pt = line.substring(line.indexOf(':') + 1, line.indexOf(' ')); // eslint-disable-line no-redeclare
                    if (pt === '*') {
                        //always allow wildcard in rtc-fb
                        return line;
                    } else {
                        var currentCodec = codecMap[pt]; // eslint-disable-line no-redeclare
    
                        // remove this codec if SdpOptions#forceCodec specifies a different codec for current media type
                        if (is_defined(currentCodec) && sdpOptions._shouldDeleteCodec(mediaType, currentCodec.name)) {
                            return null;
                        } else {
                            return line;
                        }
                    }
                } else {
                    return line;
                }
            }).filter(function (line) {
                return line !== null;
            }).join('\r\n');
        }
        return {
            sdp: sections.map(function (section) {
                return section.trim();
            }).join('\r\n') + '\r\n',
            mLines: sections.length - 1 // first section is session description, the rest are media descriptions
        };
    }
    
    function is_defined(v) {
        return typeof v !== 'undefined';
    }
    
    function when_defined(v, alternativeIn) {
        var alternative = is_defined(alternativeIn) ? alternativeIn : null;
        return is_defined(v) ? v : alternative;
    }
    
    /**
     * Check if the getStats API for retrieving legacy stats report is supported
     */
    function isLegacyStatsReportSupported(pc) {
        return new Promise(function (resolve) {
            pc.getStats(function () {
                resolve(true);
            }).catch(function () {
                // Exception thrown if browser does not support legacy stats report
                resolve(false);
            });
        });
    }
    
    /**
     * Determine if the given value is a callable function type.
     * Borrowed from Underscore.js.
     */
    function isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }
    
    /**
     * Asserts that a premise is true.
     */
    function assertTrue(premise, message) {
        if (!premise) {
            throw new Error(message);
        }
    }
    
    function isChromeBrowser() {
        return navigator.userAgent.indexOf("Chrome") !== -1;
    }
    
    function getChromeBrowserVersion() {
        var userAgent = navigator.userAgent;
        var chromeVersion = userAgent.substring(userAgent.indexOf("Chrome") + 7);
        if (chromeVersion) {
            return parseFloat(chromeVersion);
        } else {
            return -1;
        }
    }
    
    function getRedactedSdp(sdp) {
        // pattern to find and redact the value after 'a=ice-pwd:'
        var pattern = /a=ice-pwd:[^\r\n]*/;
    
        // Use the replace method to redact the value with '[redacted]'
        return sdp.replace(pattern, 'a=ice-pwd:[redacted]');
    }
    
    },{"./exceptions":136,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"sdp":119}],148:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');
    
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
    var _createClass2 = require('babel-runtime/helpers/createClass');
    
    var _createClass3 = _interopRequireDefault(_createClass2);
    
    var _utils = require('./utils');
    
    var _rtc_const = require('./rtc_const');
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var VirtualWssConnectionManager = function () {
        function VirtualWssConnectionManager(logger, connectionId, wssManager) {
            (0, _classCallCheck3.default)(this, VirtualWssConnectionManager);
    
            this._logger = logger;
            this._connectionId = connectionId;
            this._wssManager = wssManager;
            this._initializeWebSocketEventListeners();
        }
    
        (0, _createClass3.default)(VirtualWssConnectionManager, [{
            key: '_initializeWebSocketEventListeners',
            value: function _initializeWebSocketEventListeners() {
                var _this = this;
    
                this._wssManager.subscribeTopics([_rtc_const.SOFTPHONE_ROUTE_KEY]);
                this._unSubscribe = this._wssManager.onMessage(_rtc_const.SOFTPHONE_ROUTE_KEY, (0, _utils.hitch)(this, this._webSocketManagerOnMessage));
                setTimeout(function () {
                    _this._onOpen();
                }, 0);
            }
        }, {
            key: '_webSocketManagerOnMessage',
            value: function _webSocketManagerOnMessage(event) {
                var content = void 0;
                if (event.content) {
                    content = JSON.parse(event.content);
                }
                if (this._onMessage && content && this._connectionId === content.connectionId) {
                    this._onMessage({ data: JSON.stringify(content.jsonRpcMsg) });
                }
            }
        }, {
            key: 'send',
            value: function send(webSocketPayload) {
                var payload = {};
                try {
                    payload.topic = _rtc_const.SOFTPHONE_ROUTE_KEY;
                    payload.connectionId = this._connectionId;
                    payload.jsonRpcMsg = JSON.parse(webSocketPayload);
                    this._wssManager.sendMessage(payload);
                } catch (error) {
                    this._logger.error("Error in sendMessage ", error);
                }
            }
        }, {
            key: 'close',
            value: function close() {
                this._logger.info("closing virtual connection");
                this._unSubscribe();
            }
        }, {
            key: 'onmessage',
            set: function set(callBack) {
                this._onMessage = callBack;
            }
        }, {
            key: 'onopen',
            set: function set(callBack) {
                this._onOpen = callBack;
            }
        }]);
        return VirtualWssConnectionManager;
    }();
    
    exports.default = VirtualWssConnectionManager;
    
    },{"./rtc_const":137,"./utils":147,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}]},{},[135]);
    