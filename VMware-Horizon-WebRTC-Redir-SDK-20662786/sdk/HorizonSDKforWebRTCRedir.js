/* ****************************************************************************** * Copyright 2018-2022 VMware, Inc.  All rights reserved. -- VMware Confidential * *****************************************************************************/ /** * * HorizonSDKforWebRTCRedir.js * * Build: 20662786 * */ ! function(e) {
    ("function" != typeof define || !define.amd) && "object" == typeof module && module.exports ? module.exports = e() : window.VMwareWebRtcRedirectionAPI = e()
}(function(e, t) {
    "use strict";

    function a(e) {
        var t;
        M.multiwindow && O ? (t = pe(e)) ? ve[t] ? V.debug("ensureFrame skipped due to frame already registered.") : (O.send({
            cmd: "newFrame",
            frame: t,
            browser: "electron",
            customClipRect: 1
        }, -1), ve[t] = e) : V.debug("ensureFrame skipped due to no frameWnd") : V.debug("ensureFrame skipped due to feature not enabled or no connection.")
    }
    var B, p = {
            createInstance: 30,
            createInstanceResult: 31,
            newVideoElement: 32,
            removeVideoElement: 33,
            updateVideoElement: 34,
            newFrame: 36,
            removeFrame: 37,
            version: 40,
            enumDevices: 41,
            enumVideoDevice: 42,
            createPeerConnection: 43,
            createOffer: 44,
            createAnswer: 45,
            setLocalDescription: 46,
            setRemoteDescription: 47,
            addIceCandidate: 48,
            addStream: 49,
            getLocalStreams: 50,
            getStats: 51,
            removeStream: 52,
            close: 53,
            getUserMediaShim: 54,
            mediaTrkStop: 55,
            trackEnabled: 56,
            newAudioElement: 57,
            setSinkId: 58,
            updateSrcObject: 59,
            notifyAudio: 60,
            mediaStreamClone: 61,
            mediaTrackClone: 62,
            getDisplayMediaShim: 63,
            setDefaultSinkId: 64,
            shimLogToWebSocket: 65,
            insertDTMF: 66,
            getReceivers: 67,
            customClipRect: 69,
            applyConstraints: 70,
            getScreens: 71,
            setScreenId: 72,
            addTrack: 74,
            removeTrack: 75,
            senderCmd: 76,
            createMediaStream: 77,
            connectedStateChanged: 78,
            updateObjectFit: 79,
            transceiverCmd: 300,
            dataChannelCmd: 301,
            dataChannelEvent: 302
        },
        g = {
            ERROR: 0,
            WARN: 1,
            INFO: 2,
            DEBUG: 3
        },
        H = 2,
        m = 0,
        b = 1,
        S = 2,
        f = {
            DURATION: 100,
            INTERTONEGAP: 70
        },
        o = 0,
        v = 1,
        z = 1,
        J = 2,
        G = "unified-plan",
        y = {
            TRANSCEIVER_ADD_TRANSCEIVER: 1,
            TRANSCEIVER_SET_CODECPREFERENCE: 2,
            TRANSCEIVER_STOP: 3,
            TRANSCEIVER_SET_DIRECTION: 4
        },
        l = 0,
        q = 1,
        s = 1,
        X = 2,
        d = 4,
        K = 16,
        u = {
            RPF_ACTIVE: 1,
            RPF_CODEPAYLOADTYPE: 2,
            RPF_DTX: 4,
            RPF_MAXBITRATE: 8,
            RPF_MAXFRAMERATE: 16,
            RPF_PTIME: 32,
            RPF_RID: 64,
            RPF_SCALE_RESOLUTION_DOWNBY: 128
        },
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
        V = {
            logLevel: g.DEBUG,
            websocketlogLevel: g.INFO,
            logToConsole: !1,
            updateLogLevel: function(e, t) {
                V.logLevel = e, V.websocketlogLevel = t
            },
            error: function(e) {
                V.log("ERROR", e), r && "function" == typeof r.error && r.error(e)
            },
            warn: function(e) {
                V.log("WARN", e), r && "function" == typeof r.warn && r.warn(e)
            },
            info: function(e) {
                V.log("INFO", e), r && "function" == typeof r.info && r.info(e)
            },
            debug: function(e) {
                V.log("DEBUG", e)
            },
            log: function(e, t) {
                try {
                    g[e] <= V.logLevel && (V.logToConsole && console && ("object" == typeof t ? console.log(t) : console.log(e + ": " + t)), "string" == typeof t && g[e] <= V.websocketlogLevel && O.sendLogToWebSocket(t, e))
                } catch (e) {}
            }
        },
        pe = function(e) {
            return e
        };

    function ge(e, t, n) {
        var i, r, o = "_id#",
            a = e.indexOf(t);
        return -1 == a ? e + t + "1" + o + n : (i = e.substring(0, a), r = e.indexOf(o, a + t.length), e = Number(e.substring(a + t.length, r)), i + t + ((e = isNaN(e) ? 0 : e) + 1) + o + n)
    }

    function me(e, t) {
        function n() {
            return 1 <= arguments.length && "function" == typeof arguments[0]
        }

        function i() {
            return 2 <= arguments.length && "function" == typeof arguments[1]
        }

        function r(a, s, d, c) {
            return new Promise(function(e, t) {
                var n = new DOMException("createOffer cancelled", "OperationError"),
                    i = new DOMException("The RTCPeerConnection is closed", "InvalidStateError"),
                    r = a ? e : d,
                    o = a ? t : c;
                O.send({
                    cmd: "createOffer",
                    options: s
                }, u.id, function(e) {
                    k[u.id] ? void 0 === e.error ? (V.debug("createOffer done"), V.debug(e.desc), e.transceivers && p(e.transceivers), r(e.desc)) : o(n) : o(i)
                })
            })
        }

        function o(a, s, d, c) {
            return new Promise(function(e, t) {
                var n = new DOMException("createAnswer cancelled", "OperationError"),
                    i = new DOMException("The RTCPeerConnection is closed", "InvalidStateError"),
                    r = a ? e : d,
                    o = a ? t : c;
                O.send({
                    cmd: "createAnswer",
                    options: s
                }, u.id, function(e) {
                    k[u.id] ? void 0 === e.error ? (V.debug("createAnswer done"), V.debug(e.desc), e.transceivers && p(e.transceivers), r(e.desc)) : o(n) : o(i)
                })
            })
        }

        function a(a, s, d, c) {
            return u._remoteDescription = s, new Promise(function(e, t) {
                var n = new DOMException("setRemoteDescription cancelled", "OperationError"),
                    i = new DOMException("The RTCPeerConnection is closed", "InvalidStateError"),
                    r = a ? e : d,
                    o = a ? t : c;
                O.send({
                    cmd: "setRemoteDescription",
                    desc: s
                }, u.id, function(e) {
                    k[u.id] ? void 0 === e.error ? (e.transceivers && p(e.transceivers, e.transceiversRemoved), r()) : o(n) : o(i)
                })
            })
        }

        function s(a, s, d, c) {
            return u._localDescription = s, new Promise(function(e, t) {
                var n = new DOMException("setLocalDescription cancelled", "OperationError"),
                    i = new DOMException("The RTCPeerConnection is closed", "InvalidStateError"),
                    r = a ? e : d,
                    o = a ? t : c;
                O.send({
                    cmd: "setLocalDescription",
                    desc: s
                }, u.id, function(e) {
                    k[u.id] ? void 0 === e.error ? (e.transceivers && p(e.transceivers, e.transceiversRemoved), r()) : o(n) : o(i)
                })
            })
        }

        function d(a, s, d, c) {
            return new Promise(function(e, t) {
                var n = new DOMException("addIceCandidate cancelled", "OperationError"),
                    i = new DOMException("The RTCPeerConnection is closed", "InvalidStateError"),
                    r = a ? e : d,
                    o = a ? t : c;
                O.send({
                    cmd: "addIceCandidate",
                    candidate: s
                }, u.id, function(e) {
                    k[u.id] ? void 0 === e.error ? r() : o(n) : o(i)
                })
            })
        }

        function c(i, r) {
            return new Promise(function(e, t) {
                new DOMException("getStats cancelled", "InvalidAccessError");
                var n = i ? e : r,
                    e = {
                        cmd: "getStats"
                    };
                i == R && (e.capability = Z), O.send(e, u.id, function(e) {
                    var t;
                    "function" == typeof n && (void 0 === e.error && void 0 !== e.stats && void 0 !== k[u.id] ? i == R ? n(e.stats) : ((t = new be)._create(e.stats), n(t)) : n({}))
                })
            })
        }
        var u = this,
            l = {},
            h = {},
            f = {},
            v = !1,
            p = (this.id = ++te, this._localStreams = [], this._remoteStreams = [], this._dataChannelMap = {}, this._dataChannelIdToShimIdMap = {}, this._iceConnectionState = "new", e && e.sdpSemantics === G && (v = !0), this.isUnifiedPlan = function() {
                return v
            }, Object.defineProperty(this, "iceConnectionState", {
                get: function() {
                    return V.debug("get iceConnectionState:" + this._iceConnectionState), this._iceConnectionState
                },
                configurable: !0
            }), this._iceGatheringState = "new", Object.defineProperty(this, "iceGatheringState", {
                get: function() {
                    return V.debug("get iceGatheringState:" + this._iceGatheringState), this._iceGatheringState
                },
                configurable: !0
            }), this._signalingState = "stable", Object.defineProperty(this, "signalingState", {
                get: function() {
                    return V.debug("get signalingState:" + this._signalingState), this._signalingState
                },
                configurable: !0
            }), this._connectionState = "new", M.connectionState && Object.defineProperty(this, "connectionState", {
                get: function() {
                    return V.debug("get connectionState:" + this._connectionState), this._connectionState
                },
                configurable: !0
            }), this._localDescription = null, Object.defineProperty(this, "localDescription", {
                get: function() {
                    return V.debug("get localDescription:" + this._localDescription), this._localDescription
                },
                configurable: !0
            }), this._remoteDescription = null, Object.defineProperty(this, "remoteDescription", {
                get: function() {
                    return V.debug("get remoteDescription:" + this._remoteDescription), this._remoteDescription
                },
                configurable: !0
            }), this.cleanUp = function() {
                var e;
                "complete" !== this._iceGatheringState && (e = {
                    type: "icecandidate",
                    candidate: null,
                    target: this
                }, this.onicecandidate && this.onicecandidate(e), this._iceGatheringState = "complete", this.onicegatheringstatechange && this.onicegatheringstatechange({
                    type: "icegatheringstatechange",
                    target: this
                })), "disconnected" != this._iceConnectionState && (this._iceConnectionState = "disconnected", e = {
                    type: "iceconnectionstatechange",
                    target: this
                }, this.oniceconnectionstatechange && this.oniceconnectionstatechange(e)), this._localStreams = [], this._remoteStreams = []
            }, this.createOfferV0 = function(e, t, n) {
                r(C, n, e, t)
            }, this.createOfferV1 = function() {
                return n.apply(null, arguments) ? this.createOfferV0.apply(this, arguments) : r(R, arguments[0])
            }, this.createAnswerV0 = function(e, t, n) {
                o(C, n, e, t)
            }, this.createAnswerV1 = function() {
                return n.apply(null, arguments) ? this.createAnswerV0.apply(this, arguments) : o(R, arguments[0])
            }, this.setRemoteDescriptionV0 = function(e, t, n) {
                a(C, e, t, n)
            }, this.setRemoteDescriptionV1 = function() {
                return i.apply(null, arguments) ? this.setRemoteDescriptionV0.apply(this, arguments) : a(R, arguments[0])
            }, this.setLocalDescriptionV0 = function(e, t, n) {
                s(C, e, t, n)
            }, this.setLocalDescriptionV1 = function() {
                return i.apply(null, arguments) ? this.setLocalDescriptionV0.apply(this, arguments) : s(R, arguments[0])
            }, this.addIceCandidateV0 = function(e, t, n) {
                d(C, e, t, n)
            }, this.addIceCandidateV1 = function() {
                return i.apply(null, arguments) ? this.addIceCandidateV0.apply(this, arugments) : d(R, arguments[0])
            }, this.createDTMFSender = function(e) {
                var t;
                return "audio" !== e.kind ? (V.error("DTMF only could be associated with audio track."), null) : ((t = new Se).initPlanB(u.id, e), de[e.id] = t)
            }, this.getStatsV0 = function(e) {
                return c(C, e)
            }, this.getStatsV1 = function() {
                return n.apply(null, arguments) ? this.getStatsV0.apply(this, arguments) : c(R)
            }, this.getLocalStreams = function() {
                return v ? (V.warn("getLocalStreams is not supported in the unified plan, use getSenders()"), []) : (V.debug("getLocalStreams():" + this._localStreams.length), this._localStreams)
            }, this.getRemoteStreams = function() {
                return v ? (V.warn("getRemoteStreams is not supported in the unified plan, use getReceivers()"), []) : (V.debug("getRemoteStreams():" + this._remoteStreams.length), this._remoteStreams)
            }, this.addStream = function(e) {
                this._localStreams.push(e), O.send({
                    cmd: "addStream",
                    sid: e.id
                }, u.id)
            }, this.removeStream = function(e) {
                V.debug("RTCPeerConnection.removeStream(): " + e.id);
                var t = this._localStreams.indexOf(e); - 1 != t ? this._localStreams.splice(t, 1) : V.error("RTCPeerConnection.removeStream(): Failed to find stream: " + e.id), O.send({
                    cmd: "removeStream",
                    sid: e.id
                }, u.id)
            }, this.addTrackImplV1 = function(e, t) {
                var n, i;
                if (e && t) return v ? ((n = new F(u)).initTrackOrKind(e), (i = (f[n.id] = n).sender).setTrack(e, t), O.send({
                    cmd: "addTrack",
                    transceiverId: n.id,
                    tid: e.id,
                    sid: t.id
                }, u.id, function(e) {
                    void 0 === e.error ? p(e.transceivers) : delete f[n.id]
                })) : (i = h[e.id]) ? V.warn("RTCPeerConnection.addTrack: sender already exists.") : ((i = new U(u)).initPlanB(e, t), h[i.id] = i, O.send({
                    cmd: "addTrack",
                    transceiverId: "",
                    tid: e.id,
                    sid: t.id
                }, u.id, function(e) {
                    void 0 !== e.error && delete h[i.id]
                })), i;
                throw new Error("both media track and stream need to be provided")
            }, this.removeTrackImplV1 = function(e) {
                e ? void 0 === e._cap ? V.error("sender object doesn't have the capability bits") : e.id ? (e.removeTrack(), v || delete h[e.id]) : V.error("RTCPeerConnection.removeTrack: not a valid sender object") : V.error("RTCPeerConnection.removeTrack: invalid sender.")
            }, this.getSendersImplV1 = function() {
                V.debug("RTCPeerConnection.getSendersImplV1");
                var e = [];
                if (v)
                    for (var t in f) {
                        var n = f[t].sender;
                        n && e.push(n)
                    } else
                        for (var t in h) h[t] && e.push(h[t]);
                return e
            }, this.getTranceiversImplV1 = function() {
                V.debug("RTCPeerConnection.getTranceiversImplV1");
                var e, t = [];
                for (e in f) V.debug("RTCPeerConnection.getTranceiversImplV1 id=" + e), t.push(f[e]);
                return t
            }, this.addTransceiverImplV1 = function(e, t) {
                var n = new F(u),
                    i = (n.initTrackOrKind(e, t), f[n.id] = n, {
                        cmd: "transceiverCmd",
                        transceiverCmd: y.TRANSCEIVER_ADD_TRANSCEIVER,
                        hint: "RTCRtpTransceiver.addTransceiver",
                        transceiverId: n.id
                    });
                if ("audio" === e || "video" === e) i.trackOrKind = e;
                else {
                    if (!(e instanceof L)) return V.error("addTranceiver: Unknown type"), null;
                    V.debug("addTranceiver with track is not Implemented"), i.trackOrKind = e.id
                }
                e = {};
                if (t.direction && (e.direction = t.direction), t.sendEncodings && (e.sendEncodings = t.sendEncodings), t.streams) {
                    for (var r in streamIds = [], t.streams) streamIds.push(r.id);
                    e.streams = streamIds
                }
                return i.init = e, O.send(i, u.id, function(e) {
                    void 0 === e.error && p(e.transceivers)
                }), n
            }, this.createDataChannelImplV1 = function(e, t) {
                var n, i;
                return V.debug("RTCPeerConnection.createDataChannel: " + e + " option: " + JSON.stringify(this.options)), e ? (n = ++ae, (i = new _e(u.id, n))._createChannel(e, t), u._dataChannelMap[n] = i) : (V.error("RTCPeerConnection.createDataChannel: missing label"), null)
            }, this._untrackDataChannel = function(e, t) {
                void 0 !== t && u._dataChannelMap[t] && (V.debug("Untrack datachannel: " + e + " shimId: " + t), delete u._dataChannelMap[t]), e != w && u._dataChannelIdToShimIdMap[e] && (V.debug("Remove mapped datachannel: " + e + " shimId:" + t), delete u._dataChannelIdToShimIdMap[e])
            }, function(e, t) {
                for (var n in e) {
                    var i, r = e[n],
                        o = f[r.id];
                    (o || (o = r.id, V.debug("_updateTransceivers: addTransceiver id=" + o), (i = new F(u)).initId(o), f[o] = i)).update(r)
                }
                if (t)
                    for (var n in t) {
                        var a = t[n];
                        V.debug("_updateTransceivers: removeTransceiver id=" + a), delete f[a]
                    }
            }),
            g = (this.close = function() {
                g = null, O.send({
                    cmd: "close"
                }, u.id, function(e) {
                    delete k[u.id]
                }, !0)
            }, null);
        this.getReceivers = function() {
            if (v) {
                var e = [];
                if (f)
                    for (var t in f) {
                        var n = f[t].receiver;
                        n && e.push(n)
                    }
            } else {
                g || (g = {}, O.send({
                    cmd: "getReceivers"
                }, u.id, function(e) {}, !0));
                e = [];
                for (t in g) g[t] && e.push(g[t])
            }
            return e
        }, this.addEventListener = function(e, t) {
            V.debug("RTCPeerConnection.addEventListener(): " + e), "function" != typeof t ? V.error("RTCPeerConnection.addEventListener(): The listener handler is invalid.") : "string" != typeof e ? V.error("RTCPeerConnection.addEventListener(): The event name is invalid.") : (void 0 === l[e] && (l[event] = {
                listeners: []
            }), l[e].listeners.push(t))
        }, this.removeEventListener = function(e, t) {
            V.debug("RTCPeerConnection.removeEventListener(): " + e), void 0 === l[e] ? V.error("RTCPeerConnection.removeEventListener(): Event does not exist = " + e) : l[e].listeners = l[e].listeners.filter(function(e) {
                return e.toString() !== t.toString()
            })
        }, this._onReceiveDataChannelEvent = function(e) {
            var t;
            void 0 === e.shimId ? V.error("RTCPeerConnection._onReceiveDataChannelEvent: missing shimId") : ((t = e.shimId) == w && e.channel && void 0 !== e.channel.id && (V.debug("Try to find mapped " + e.channel.id + " in:" + JSON.stringify(u._dataChannelIdToShimIdMap)), void 0 !== u._dataChannelIdToShimIdMap[e.channel.id] && (t = u._dataChannelIdToShimIdMap[e.channel.id], V.debug("RTCPeerConnection._onReceiveDataChannelEvent: use mapped shimId: " + t))), t != w && u._dataChannelMap[t] ? u._dataChannelMap[t]._onReceiveEvent(e) : V.error("RTCPeerConnection._onReceiveDataChannelEvent: dataChannle " + t + " not existed"))
        }, this._onReceiveEvent = function(e) {
            if (void 0 === e || void 0 === e.evt) V.error("_onReceiveEvent(): evt property is invalid.");
            else {
                var t = {
                    type: e.evt,
                    target: this
                };
                switch (e.details && this._updateVars(e.details), e.evt) {
                    case "connectionstatechange":
                        this.onconnectionstatechange && this.onconnectionstatechange(t);
                        break;
                    case "negotiationneeded":
                        this.onnegotiationneeded && this.onnegotiationneeded(t);
                        break;
                    case "icecandidate":
                        t.candidate = e.candidate, this.onicecandidate && this.onicecandidate(t);
                        break;
                    case "icegatheringstatechange":
                        this.onicegatheringstatechange && this.onicegatheringstatechange(t);
                        break;
                    case "iceconnectionstatechange":
                        this.oniceconnectionstatechange && this.oniceconnectionstatechange(t);
                        break;
                    case "signalingstatechange":
                        this.onsignalingstatechange && this.onsignalingstatechange(t);
                        break;
                    case "ondatachannel":
                        e.channel ? this.ondatachannel && (r = ++ae, o = new _e(u.id, r), void 0 !== e.channel.id && (V.debug("ondatachannel shimId: " + e.channel.id + " mapped to " + r), u._dataChannelIdToShimIdMap[e.channel.id] = r), (u._dataChannelMap[r] = o)._updateChannel(e.channel), t.channel = o, V.debug("ondatachannel shimId: " + r + " channel:" + JSON.stringify(e.channel)), this.ondatachannel(t)) : V.warn("ondatachannel from legacy client");
                        break;
                    case "addStream":
                        void 0 === e.stream ? V.debug("_onReceiveEvent(): stream property is invalid.") : (t.stream = new x, t.stream._create(e.stream, e.peer), this._remoteStreams.push(t.stream), this.onaddstream && this.onaddstream(t));
                        break;
                    case "removeStream":
                        void 0 === e.stream ? V.debug("_onReceiveEvent(): stream property is invalid.") : (t.stream = se[e.stream], void 0 === t.stream ? V.debug("_onReceiveEvent(): no stream found.") : (-1 != (o = this._remoteStreams.indexOf(t.stream)) && (e.trackId && t.stream.removeTrackById(e.trackId), this._remoteStreams.splice(o, 1)), this.onremovestream && this.onremovestream(t)));
                        break;
                    case "ontrack":
                        void 0 === e.transceiver || void 0 === e.stream ? V.error("_onReceiveEvent ontrack property is invalid") : (n = e.transceiver.id, (i = f[n]) || (V.debug("ontrack: add transceiver id=" + n), (i = new F(u)).initId(n), f[n] = i), i.update(e.transceiver), (r = new x)._create(e.stream, e.peer), this._remoteStreams.push(r), t.transceiver = i, t.receiver = i.receiver, t.streams = [r], t.track = r.track[0], this.ontrack && this.ontrack(t));
                        break;
                    case "tonechange":
                        var n, i, r, o = null;
                        (o = v ? (n = e.transceiverId, (r = (i = f ? f[n] : null) ? i.sender : null) ? r.dtmf : null) : de[e.tid]) ? o.ontonechange && o.ontonechange(e): V.debug("_onReceiveEvent(): tonechange, dtmfId is invalid  or not found.");
                        break;
                    case "onreceivers":
                        (n = e.receivers) && n.forEach(function(e) {
                            var t, n;
                            e.id && (t = e.id, "-" === e.op ? delete g[t] : ("+" === e.op && delete g[t], (n = g[t]) || (n = new W, g[t] = n), n.update(e)))
                        });
                        break;
                    case "onsenders":
                        (i = e.senders) && i.forEach(function(e) {
                            var t = h[e.id];
                            t && t.update(e)
                        });
                        break;
                    case "ontransceivers":
                        p(e.transceivers)
                }
            }
        }, this._updateVars = function(e) {
            e.iceConnectionState && (this._iceConnectionState = e.iceConnectionState), e.iceGatheringState && (this._iceGatheringState = e.iceGatheringState), e.signalingState && (this._signalingState = e.signalingState), e.connectionState && (this._connectionState = e.connectionState), e.localDescription && (this._localDescription = e.localDescription), e.remoteDescription && (this._remoteDescription = e.remoteDescription)
        }
    }

    function be() {
        this.reports = [], this.result = function() {
            return this.reports
        }, this._create = function(e) {
            var n = this;
            e.forEach(function(e) {
                var t = new we;
                t._create(e), n.reports.push(t)
            })
        }
    }

    function Se() {
        this.canInsertDTMF = !0;
        var r = void 0,
            o = null,
            t = "",
            a = null,
            s = null;
        this.initPlanB = function(e, t) {
            r = e, o = t
        }, this.initUnifiedPlan = function(e, t, n, i) {
            t && n ? (r = e, o = i, a = t, s = n) : V.error("RTCDTMFSender.initUnifiedPlan: invalid transceiver or sender")
        }, Object.defineProperty(this, "toneBuffer", {
            get: function() {
                return V.debug("get DTMF tone buffer" + t), t
            },
            set: function(e) {
                void 0 === e && V.warn("Set RTCDTMFSender.toneBuffer to undefined."), V.debug("set DTMF tone buffer" + e), t = e
            },
            configurable: !0
        }), this.insertDTMF = function(e, t, n) {
            V.debug("insertDTMF audio tones: " + e), void 0 === t && (V.debug("Duration is not set, use default"), t = f.DURATION), void 0 === n && (V.debug("Gap is not set, use default"), n = f.INTERTONEGAP), O.send({
                cmd: "insertDTMF",
                transceiverId: a ? a.id : "",
                senderId: s ? s.id : "",
                tid: o.id,
                tones: e,
                duration: t,
                gap: n
            }, r)
        }
    }

    function F(e) {
        function t(e) {
            V.info(e + "(" + i + ")")
        }
        var i, r = this,
            o = e,
            n = "inactive",
            a = "inactive",
            s = null,
            d = !1,
            c = null,
            u = null;
        this.initId = function(e) {
            i = e, (c = new U(o)).initUnifiedPlan(r, null), u = new W
        }, this.initTrackOrKind = function(e, t) {
            var e = e instanceof L ? e.kind : e,
                n = "";
            "audio" === e ? n = "A" : "video" === e && (n = "V"), i = "Transceiver#" + n + oe.toString(), oe++, (c = new U(o)).initUnifiedPlan(r, t), u = new W, t && t.direction && (a = t.direction), t && t.stream && V.debug("RTCRtpTransceiver.init with stream is not implemented.")
        }, this.update = function(e) {
            e.currentDirection && (n = e.currentDirection), e.direction && (a = e.direction), e.mid && (s = e.mid), void 0 !== e.stopped && (d = e.stopped), e.sender && c && c.update(e.sender), e.receiver && u && u.update(e.receiver)
        }, Object.defineProperty(this, "id", {
            get: function() {
                return i
            },
            configurable: !0
        }), Object.defineProperty(this, "mid", {
            get: function() {
                return t("RTCRtpTransceiver.mid=" + s), s
            }
        }), Object.defineProperty(this, "currentDirection", {
            get: function() {
                return t("RTCRtpTransceiver.currentDirection"), n
            },
            configurable: !0
        }), Object.defineProperty(this, "direction", {
            get: function() {
                return t("RTCRtpTransceiver.direction=" + a), a
            },
            set: function(e) {
                t("RTCRtpTransceiver.direction setter"), a = e;
                e = {
                    cmd: "transceiverCmd",
                    transceiverCmd: y.TRANSCEIVER_SET_DIRECTION,
                    hint: "RTCRtpTransceiver.direction",
                    transceiverId: i,
                    value: e
                };
                O.send(e, o.id)
            },
            configurable: !0
        }), Object.defineProperty(this, "receiver", {
            get: function() {
                return t("RTCRtpTransceiver.receiver"), u
            },
            configurable: !0
        }), Object.defineProperty(this, "sender", {
            get: function() {
                return t("RTCRtpTransceiver.sender"), c
            },
            configurable: !0
        }), Object.defineProperty(this, "stopped", {
            get: function() {
                return t("RTCRtpTransceiver stopped"), d
            },
            set: function(e) {
                t("RTCRtpTransceiver stopped setter"), d = e
            },
            configurable: !0
        }), this.setCodecPreferences = function(e) {
            t("RTCRtpTransceiver setCodecPreferences"), O.send({
                cmd: "transceiverCmd",
                transceiverCmd: y.TRANSCEIVER_SET_CODECPREFERENCE,
                hint: "RTCRtpTransceiver.setCodecPreference",
                transceiverId: i,
                codecs: e
            }, o.id, function(e) {
                void 0 !== e.error && t("RTCRtpTransceiver.setCodecPreferences failed.")
            })
        }, this.stop = function() {
            t("RTCRtpTransceiver stop"), O.send({
                cmd: "transceiverCmd",
                transceiverCmd: y.TRANSCEIVER_STOP,
                hint: "RTCRtpTransceiver.stop",
                transceiverId: i
            }, o.id, function(e) {
                void 0 !== e.error && t("RTCRtpTransceiver.stop failed.")
            })
        }
    }

    function ye(t, e) {
        var r = this,
            n = e;
        this._srcObject = t.srcObject, this._id = i++, this._rawAudio = t, this.sendAudioElement = function() {
            var e = {
                cmd: "newAudioElement",
                audioId: this._id
            };
            t.setAttribute("data-vdi_audioid", this._id), O.send(e, -1)
        }, Object.defineProperty(t, "srcObject", {
            get: function() {
                return r._srcObject
            },
            set: function(e) {
                void 0 === e && V.warn("Set audio.srcObject to undefined."), V.debug("Setting srcObject for audio element: " + r._id), V.debug(e), r._srcObject = void 0 === e ? null : e, r.sendSrcObject()
            },
            configurable: !0
        }), this.sendSrcObject = function() {
            var e = this._srcObject ? this._srcObject.id : "null",
                t = this._srcObject ? this._srcObject.peer : T;
            O.send({
                cmd: "updateSrcObject",
                mediaStreamId: e,
                audioId: this._id,
                type: "audio",
                streamPeer: t
            }, -1)
        }, Object.defineProperty(t, "sinkId", {
            get: function() {
                return r._sinkId
            },
            set: function(e) {},
            configurable: !0
        }), t.setSinkId = function(i) {
            return r._sinkId = i, V.debug("Audio.setSinkId for ID = " + r._id + " Value = " + i), 0 === (void 0 !== M.setSinkId ? M.setSinkId : 0) ? new Promise(function(e, t) {
                O.send({
                    cmd: "setSinkId",
                    deviceId: i,
                    audioId: r._id,
                    context: "audioElement"
                }, -1), e()
            }) : new Promise(function(t, n) {
                O.send({
                    cmd: "setSinkId",
                    deviceId: i,
                    audioId: r._id,
                    context: "audioElement"
                }, -1, function(e) {
                    void 0 === e.error ? t() : n(e.error)
                })
            })
        }, t.play = function() {
            return Promise.resolve()
        }, this.init = function() {
            a(n), this.sendAudioElement(), this._srcObject && (V.debug("srcObject already set for audio: " + this._id), this.sendSrcObject()), V.debug(t)
        }, this.init()
    }

    function Ce(r, e) {
        var t = this,
            n = e,
            o = pe(e),
            i = !1,
            s = (this._srcObject = r.srcObject, this._videoWidth = r.videoWidth, this._videoHeight = r.videoHeight, this._cloaked = !1, this._id = ne++, this._clientRect = null, this._bodyClientRect = null, this._colorKey = null, this._rawVideo = r, this._removeTimer = null, this._removed = !1, this._objectFit = r.style.objectFit, this._transform, this._dpiServerTranslate = !!M.multiwindow && 0 != (M.multiwindow & ee), this._styleObserver = new MutationObserver(function(e) {
                e.forEach(function(e) {
                    t.handleStyleChanges(e, r)
                })
            }), function(e) {
                e = Number(e).toString(16);
                return e = e.length < 2 ? "0" + e : e
            });
        this.sendVideoElement = function() {
            this._colorKey = function() {
                for (var e = "";
                    "" == e;) {
                    var t, n = Math.floor(16 * Math.random()) + 1,
                        i = Math.floor(16 * Math.random()) + 1,
                        r = Math.floor(16 * Math.random()) + 1,
                        e = "#" + s(n) + s(i) + s(r),
                        o = Object.keys(I);
                    for (t in o) {
                        var a = I[o[t]];
                        if (a && a._colorKey == e) {
                            e = "";
                            break
                        }
                    }
                }
                return e
            }();
            var e, t = {
                cmd: "newVideoElement",
                videoId: this._id,
                colorKey: this._colorKey,
                requestDpiTranslate: this._dpiServerTranslate ? 1 : 0,
                body: {}
            };
            for (e in o && (t.frame = o), this._clientRect) t[e] = this._clientRect[e];
            for (e in this._bodyClientRect) t.body[e] = this._bodyClientRect[e];
            "" !== this._objectFit && (t.objectFit = this._objectFit), r.setAttribute("data-vdi_videoid", this._id), r.setAttribute("data-vmw_videoid", this._id), O.send(t, -1)
        }, this.updateVideoElement = function() {
            var e = this.getBoundingClientRect(r),
                t = (this._cloaked || (e.right = e.left, e.bottom = e.top), this.getBoundingClientRect(document.body));
            if (e.left == this._clientRect.left && e.right == this._clientRect.right && e.top == this._clientRect.top && e.bottom == this._clientRect.bottom && t.left == this._bodyClientRect.left && t.right == this._bodyClientRect.right && t.top == this._bodyClientRect.top && t.bottom == this._bodyClientRect.bottom) return !1;
            this._clientRect = e, this._bodyClientRect = t;
            var n, i = {
                cmd: "updateVideoElement",
                videoId: this._id,
                requestDpiTranslate: this._dpiServerTranslate ? 1 : 0,
                transform: r.style.transform,
                body: {}
            };
            for (n in o && (i.frame = o), e) i[n] = e[n];
            for (n in t) i.body[n] = t[n];
            "" !== this._objectFit && (i.objectFit = this._objectFit), V.debug(i), O.send(i, -1)
        }, this.removeVideoElement = function() {
            var e = {
                cmd: "removeVideoElement",
                videoId: t._id
            };
            o && (e.frame = o), V.debug("RemoveVideoElement: " + t._id), O.send(e, -1), delete I[t._id], t._removeTimer = null, t._removed = !0
        }, this.disposeVideo = function() {
            i = !0
        }, this.cloak = function() {
            !0 !== this._cloaked && (this._colorKey ? (r.style.backgroundColor = this._colorKey, this._styleObserver.observe(r, {
                attributes: !0,
                attributeFilter: ["style"]
            }), this._cloaked = !0, this._poll = setInterval(function() {
                t.updateVideoElement()
            }, 500)) : V.error("cloak(): Invalid color key."))
        }, this.uncloak = function() {
            if (!1 === this._cloaked) return !1;
            r.style.backgroundColor = "", this._styleObserver.disconnect(), clearInterval(this._poll), this._cloaked = !1, this.updateVideoElement()
        }, this.getBoundingClientRect = function(e) {
            var e = e.getBoundingClientRect(),
                t = 1;
            return this._dpiServerTranslate || "number" != typeof window.devicePixelRatio || (t = window.devicePixelRatio), {
                left: e.left * t,
                top: e.top * t,
                bottom: e.bottom * t,
                right: e.right * t,
                width: e.width * t,
                height: e.height * t
            }
        }, this.onReceiveEvent = function(e) {
            var t;
            void 0 === e || void 0 === e.evt ? V.error("onReceiveEvent(): evt property is invalid.") : this._rawVideo ? "loadedmetadata" === e.evt && ("" == this._objectFit && "" !== (t = window.getComputedStyle(this._rawVideo).objectFit) && (V.debug("onReceiveEvent(): updating objectfit to " + t), this._objectFit = t, this.sendObjectFit()), void 0 !== e.videoWidth && (this._videoWidth = e.videoWidth), void 0 !== e.videoHeight && (this._videoHeight = e.videoHeight), t = new Event(e.evt), this._rawVideo.dispatchEvent(t)) : V.error("onReceiveEvent(): Invalid rawVideo object.")
        }, this.sendSrcObject = function() {
            var e = this._srcObject ? this._srcObject.id : "null",
                t = this._srcObject ? this._srcObject.peer : T;
            O.send({
                cmd: "updateSrcObject",
                mediaStreamId: e,
                videoId: this._id,
                type: "video",
                streamPeer: t
            }, -1), this._srcObject ? this.cloak() : this.uncloak()
        }, this.sendObjectFit = function() {
            O.send({
                cmd: "updateObjectFit",
                videoId: this._id,
                objectFit: this._objectFit
            }, -1)
        }, Object.defineProperty(r, "srcObject", {
            get: function() {
                return t._srcObject
            },
            set: function(e) {
                t._removed ? V.warn("Setting srcObject of zombie video element: " + t._id) : (t._removeTimer && (clearTimeout(t._removeTimer), t._removeTimer = null), void 0 === e && V.warn("Set video.srcObject to undefined."), V.debug("Setting srcObject for video element: " + t._id), V.debug(e), t._srcObject = e, t.sendSrcObject(), t._srcObject || (i ? t.removeVideoElement() : (V.debug("srcObject is null, setup removeTimer for " + t._id), t._removeTimer = setTimeout(t.removeVideoElement, 5e3))))
            },
            configurable: !0
        }), Object.defineProperty(r, "videoWidth", {
            get: function() {
                return t._videoWidth
            },
            configurable: !0
        }), Object.defineProperty(r, "videoHeight", {
            get: function() {
                return t._videoHeight
            },
            configurable: !0
        }), Object.defineProperty(r.style, "objectFit", {
            get: function() {
                return console.log("keyword defineProperty get objectFit " + t._objectFit), t._objectFit
            },
            set: function(e) {
                console.log("keyword defineProperty set objectFit " + e), t._objectFit = e, t.sendObjectFit()
            },
            configurable: !0
        }), Ce.prototype.handleStyleChanges = function(e, t) {
            "attributes" === e.type && "style" === e.attributeName && (V.debug("video style change in id = " + this._id + ", object-fit = " + t.style.objectFit), V.debug(t), this._objectFit !== t.style.objectFit && (V.debug("change in object-fit. Old = " + this._objectFit + ", new = " + t.style.objectFit), this._objectFit = t.style.objectFit, this.sendObjectFit()), this._transform != t.style.transform && (this._transform = t.style.transform, this.updateVideoElement()))
        }, this.init = function() {
            this._clientRect = this.getBoundingClientRect(r), this._bodyClientRect = this.getBoundingClientRect(document.body), a(n), this.sendVideoElement(), this._srcObject && (V.debug("srcObject already set for video: " + this._id), this.sendSrcObject()), V.debug(r)
        }, this.init()
    }

    function N(e) {
        "function" == typeof ue ? (V.info("onVMEvent(): Fire event = " + JSON.stringify(e)), ue(e)) : V.warn("onVMEvent(): setVMEventCallback is not called yet.")
    }

    function Re() {
        var a = this,
            o = null,
            s = m,
            R = {},
            d = 0,
            r = null,
            c = !1,
            t = !0,
            n = (Object.defineProperty(this, "state", {
                get: function() {
                    return s
                },
                configurable: !0
            }), Object.defineProperty(this, "shortPollingIntervalMs", {
                get: function() {
                    return 1e3
                }
            }), Object.defineProperty(this, "shortPollingTimeout", {
                get: function() {
                    return 1e4
                }
            }), Object.defineProperty(this, "longPollingIntervalMs", {
                get: function() {
                    return 5e3
                }
            }), Object.defineProperty(this, "isHorizonRegistryPresent", {
                get: function() {
                    return c
                },
                set: function(e) {
                    c = e
                },
                configurable: !0
            }), Object.defineProperty(this, "sendVdiClientEventsOnError", {
                get: function() {
                    return t
                },
                set: function(e) {
                    t = e
                },
                configurable: !0
            }), this.sendLogToWebSocket = function(e, t) {
                return "string" == typeof e && 0 !== e.length && (s === S && (h({
                    cmd: "shimLogToWebSocket",
                    message: e,
                    level: t
                }, -1), !0))
            }, this.isSocketConnected = function() {
                return s === S
            }, this.isSocketOpen = function() {
                return !!o && o.readyState === WebSocket.OPEN
            }, this.init = function() {
                V.info("RequestManager.init(): Initializing Request Manager."), this.startPolling(1e3, 1e4, this.sendEvents)
            }, this.startPolling = function(e, t, n) {
                var i;
                V.info("RequestManager.startPolling(): stop the old polling timer(if there is any) and start a new one"), a.stopPolling(), s !== m ? V.info("RequestManager.startPolling(): Socket state not disconnected, exiting") : (i = t, V.info("intervalMs " + e + " timeout " + t), r = setInterval(function() {
                    a.connectToHorizon(), void 0 !== i && (i -= e, c || a.queryHorizonRegistry()), void 0 !== i && i <= 0 && (a.stopPolling(), n && !0 === c && n())
                }, e))
            }, this.stopPolling = function() {
                null !== r && (clearInterval(r), r = null, V.info("Stopped polling websocket"))
            }, this.sendEvents = function() {
                var e = {},
                    e = (e.shimVersion = _, {
                        event: "vdiClientConnected",
                        version: e
                    });
                try {
                    N(e)
                } catch (e) {
                    V.warn("Catch exception in onVMEvent()" + JSON.stringify(e))
                }
                try {
                    N({
                        event: "vdiClientDisconnected",
                        reason: "endpointUnsupported"
                    })
                } catch (e) {
                    V.warn("Catch exception in onVMEvent()" + JSON.stringify(e))
                }
                O.startPolling(5e3)
            }, this.queryHorizonRegistry = function() {
                window.getHorizonClientID().then(function(e) {
                    V.info("queryHorizonRegistry(): Horizon Client ID " + e), e && O && (O.isHorizonRegistryPresent = !0, V.info("queryHorizonRegistry(): isHorizonRegistryPresent true"))
                }, function() {
                    return V.error("queryHorizonRegistry(): Failed to query Horizon Client ID"), !1
                })
            }, this.connectToHorizon = function() {
                s === m && window.getHorizonWSSPort().then(function(e) {
                    "string" != typeof e || 0 === e.length ? (V.error("connectToHorizon(): Port is not valid"), v("VMware HTML5 Server port not valid")) : (V.info("connectToHorizon(): port is " + e), s = b, (o = new WebSocket("wss://view-localhost:" + e + "/")).binaryType = "arraybuffer", o.onopen = n, o.onclose = i, o.onerror = u, o.onmessage = l)
                }, function() {
                    V.error("connectToHorizon(): Failed to receive port number"), v("Failed to receive port number")
                })
            }, function() {
                V.info("onWebSocketOpen(): Websocket opened"), O.stopPolling(), h({
                    cmd: "createInstance",
                    hwnd: he.hwnd,
                    shimVersion: _,
                    shimMinAgentVersion: 1,
                    customClipRect: 1,
                    allowFeatureChange: 1,
                    supportObjectFit: 1,
                    supportE911: 0,
                    streamBundleWithPeer: 1,
                    appName: B,
                    appType: H
                }, -1, function(e) {
                    if (s != m) {
                        e.uid && V.info("onWebSocketOpen(): [" + e.uid + "] createInstanceDone"), "true" === e.traceEnabled && V.updateLogLevel(g.DEBUG, g.DEBUG);
                        var t = ["agentOsVersion", "clientOsVersion", "haVersion", "hcVersion", "shimVersion", "webrtcClientVer", "webRTCRedirAgentVersion", "webRTCRedirClientVersion"],
                            n = {};
                        V.logToConsole = 1 === e.logToConsole, V.debug("VDI Shim: Log to console = " + V.logToConsole);
                        for (var i = 0; i < t.length; i++) e[t[i]] ? (n[t[i]] = e[t[i]], V.debug("onWebSocketOpen(): " + t[i] + " = " + e[t[i]])) : V.warn("onWebSocketOpen(): Could not find property " + t[i]);
                        e.clientOsVersion ? e.clientOsVersion.startsWith("Win") ? n.clientPlatform = "Windows" : e.clientOsVersion.startsWith("Mac") ? n.clientPlatform = "Mac" : e.clientOsVersion.startsWith("Lin") ? n.clientPlatform = "Linux" : (V.error("Unknown client os: " + e.clientOsVersion), n.clientPlatform = "Unknown") : (V.error("Missing client os information."), n.clientPlatform = "Unknown"), V.debug("onWebSocketOpen(): clientPlatform = " + n.clientPlatform);
                        var r = {
                            event: "vdiClientConnected",
                            version: n
                        };
                        if (e.hcId && (r.endpointId = e.hcId, V.debug("onWebSocketOpen(): ClientId = " + e.hcId)), "true" === e.allow && "Windows" === n.clientPlatform) {
                            if (s = S, M = e["api-capabilities"] || {}, j = e.rtpCapabilities || {}, Array.isArray(e.featuresSupported)) {
                                if (e.appSessionMode && "true" === e.appSessionMode) {
                                    A = !0;
                                    for (i = 0; i < e.featuresSupported.length; i++) "screenshare" !== e.featuresSupported.length[i] && "multimonitorscreenshare" !== e.featuresSupported.length[i] && P.push(e.featuresSupported[i])
                                } else P = e.featuresSupported;
                                V.info("onWebSocketOpen(): Supported features = " + JSON.stringify(P))
                            } else V.warn("onWebSocketOpen(): featureSupported property not valid");
                            try {
                                N(r)
                            } catch (e) {
                                V.warn("Catch exception in onVMEvent()" + JSON.stringify(e))
                            }
                            a.invokeDeviceChange()
                        } else {
                            try {
                                N(r)
                            } catch (e) {
                                V.warn("Catch exception in onVMEvent()" + JSON.stringify(e))
                            }
                            for (var o = "", t = ["errorCode", "errorMsg"], i = 0; i < t.length; i++) void 0 !== e[t[i]] ? (V.debug("onWebSocketOpen(): " + t[i] + ": " + e[t[i]]), o += t[i] + " = " + e[t[i]], i != t.length - 1 && (o += "; ")) : V.warn("onWebSocketOpen(): Could not find property " + t[i]);
                            try {
                                N({
                                    event: "vdiClientDisconnected",
                                    reason: "endpointUnsupported",
                                    msg: o
                                })
                            } catch (e) {
                                V.warn("Catch exception in onVMEvent()" + JSON.stringify(e))
                            }
                            v("VMware HTML5 Server connection not allowed")
                        }
                    }
                })
            }),
            i = function() {
                V.info("onWebSocketClose(): Websocket closed"), v("VMware HTML5 Server connection closed")
            },
            u = function(e) {
                V.debug("onWebSocketError(): Websocket error");
                var t = m;
                O && (t = O.state), v("VMware HTML5 Server connection error: " + e.message), t == b && (V.debug("Error in connecting socket"), O && O.sendVdiClientEventsOnError && (V.error("Error in connecting to websocket"), O.stopPolling(), O.sendEvents(), O.sendVdiClientEventsOnError = !1))
            },
            l = function(e) {
                if ("object" == typeof e.data) {
                    var t = new Uint8Array(e.data),
                        n = new DataView(e.data),
                        i = n.getInt32(0),
                        r = n.getInt32(36);
                    if (1396920910 != i) V.warn("Unsupport binary data: " + i.toString(16));
                    else {
                        M.getScreens && M.getScreens & $ && V.warn("New client should return string for getScreen.");
                        for (var o = 40, a = []; o + 12 < t.length;) {
                            var s = n.getInt32(o),
                                d = (p = n.getInt32(o + 4)) * (g = n.getInt32(o + 8)) * 4;
                            if (p < 0 || g < 0 || o + 12 + d > t.length) {
                                V.warn("Invalid screen " + p + "X" + g + " offs:" + o + " size:" + d + " len:" + t.length);
                                break
                            }
                            o += 12;
                            var c = new Uint8ClampedArray(t.buffer, o, d),
                                u = new ImageData(c, p, g),
                                l = new Te(s, "Screen " + s, u);
                            o += d, a.push(l), V.debug("Screen:" + s + ": " + p + "X" + g + " offs:" + o + " size:" + d + " len:" + t.length)
                        }
                        var h = R[r];
                        delete R[r], void 0 !== h && "function" == typeof h.responseCb && h.responseCb(a)
                    }
                } else if ("string" != typeof e.data) V.error("onWebSocketMessage(): invalid data type: " + typeof e.data);
                else {
                    var i = e.data,
                        f = JSON.parse(i);
                    if (V.logToConsole && console.log("onWebSocketMessage(): " + i), "number" == typeof f.id && 0 < f.id) {
                        h = R[f.id];
                        if (delete R[f.id], h && "function" == typeof h.responseCb)
                            if ("getScreens" !== f.evt || f.screens) h.responseCb(f);
                            else if (f.error) h.responseCb(f);
                        else {
                            var a = [],
                                v = "number" == typeof f.screens ? f.screens : 1;
                            for (s = 1; s <= v; s++) {
                                for (var p, g, m = 4 * (p = 100) * (g = 100), c = new Uint8ClampedArray(m), b = 0; b < m; b += 4) c[b] = 81, c[b + 1] = 144, c[b + 2] = 201, c[b + 3] = 255;
                                u = new ImageData(c, p, g), l = new Te(s, "Screen " + s, u);
                                a.push(l)
                            }
                            h.responseCb(a)
                        }
                    } else if (void 0 === f.evt) V.error("onWebSocketMessage(): evt property is invalid");
                    else switch (f.evt) {
                        case "version":
                            void 0 === f.ver ? V.error("onWebSocketMessage(): ver property is invalid.") : V.info("onWebSocketMessage(): version = " + f.ver);
                            break;
                        case "negotiationneeded":
                        case "icecandidate":
                        case "icegatheringstatechange":
                        case "iceconnectionstatechange":
                        case "signalingstatechange":
                        case "connectionstatechange":
                        case "addStream":
                        case "ontrack":
                        case "tonechange":
                        case "onreceivers":
                        case "onsenders":
                        case "ontransceivers":
                        case "ondatachannel":
                        case "removeStream":
                            void 0 !== f.peer && void 0 !== k[f.peer] ? k[f.peer]._onReceiveEvent(f) : V.error("onWebSocketMessage(): peerConnection is invalid.");
                            break;
                        case "loadedmetadata":
                            void 0 !== f.videoId && void 0 !== I[f.videoId] ? I[f.videoId].onReceiveEvent(f) : V.error("onReceiveCommand(): Invalid context.");
                            break;
                        case "devicechange":
                            var S = new Event("devicechange");
                            navigator.mediaDevices.dispatchEvent(S);
                            break;
                        case "vdiScreenTopologyChanged":
                            try {
                                N({
                                    event: "vdiScreenTopologyChanged"
                                })
                            } catch (e) {
                                V.warn("Catch exception in onVMEvent()" + JSON.stringify(e))
                            }
                            break;
                        case "featuresSupportedChanged":
                            for (var b in f.features) {
                                var y = f.features[b],
                                    C = P.indexOf(y.feature);
                                "+" == y.op && C < 0 ? A && ("screenshare" === y.feature || "multimonitorscreenshare" === y.feature) || P.push(y.feature) : "-" == y.op && 0 <= C && P.splice(C, 1)
                            }
                            N({
                                event: "vdiFeatureSupportedChanged",
                                reason: f.reason || "endpoint changes supported features"
                            });
                            break;
                        case "vdiE911InfoChanged":
                            f.event = "vdiE911InfoChanged", N(f);
                            break;
                        case "powerevent":
                            S = f.eventData;
                            T(S);
                            break;
                        case "dconopen":
                        case "dconbufferedamountlow":
                        case "dconclosing":
                        case "dconerror":
                        case "dconmessage":
                        case "dconclose":
                            void 0 !== f.peer && void 0 !== k[f.peer] ? k[f.peer]._onReceiveDataChannelEvent(f) : V.error("Datachannel event: peerConnection is invalid.")
                    }
                }
            },
            h = function(e, t, n, i) {
                var r;
                t = null == t ? -1 : t, void 0 === e ? (r = new DOMException("Invalid command, operation cancelled", "OperationError"), n ? n({
                    error: r
                }) : V.error(r)) : -1 === t || k[t] ? (e.feature = 3, e.commandId = p[e.cmd], e.id = ++d, e.peer = t, e.browser = "electron", e.player = 1, "createInstance" === e.cmd && (e.uid = 2147483647 & Date.now(), V.info("sendHelper(): [" + e.uid + "] createInstance")), "createInstance" !== e.cmd && s !== S || (n && (i ? n() : R[e.id] = {
                    id: e.id,
                    webCommandId: e.commandId,
                    responseCb: n
                }), o.send(JSON.stringify(e)))) : (r = new DOMException("peer Id is not found, operation cancelled", "OperationError"), n ? n({
                    error: r
                }) : V.error(r))
            },
            f = (this.send = function(e, t, n, i) {
                "getStats" != e.cmd && V.debug(JSON.stringify(e)), h(e, t, n, i)
            }, this.invokeDeviceChange = function() {
                setTimeout(function() {
                    V.info("invokeDeviceChange(): Fire devicechange event");
                    var e = new Event("devicechange");
                    navigator.mediaDevices.dispatchEvent(e)
                }, 0)
            }, this.sendBinary = function(e) {
                s === S ? o.send(e) : V.warn("sendBinary(): WSS is not connected.")
            }, function() {
                var e = Math.random() * Number.MAX_SAFE_INTEGER,
                    e = Math.floor(e),
                    e = "v=0\no=- " + String(e) + " 2 IP4 127.0.0.1\n";
                return (e += "s=-\n") + "t= 0 0\n" + "a=msid-semantic: WMS"
            }),
            T = function(e) {
                if (e == Y) try {
                    V.info("onPowerEvent(): received suspend"), N({
                        event: "vdiRequestEndCalls",
                        reason: "vdiClientPowerEventSuspend"
                    })
                } catch (e) {
                    V.warn("Catch exception in onVMEvent()" + JSON.stringify(e))
                } else if (e == Q) {
                    V.info("onPowerEvent(): received resume");
                    try {
                        N({
                            event: "vdiRequestEndCalls",
                            reason: "vdiClientPowerEventResume"
                        })
                    } catch (e) {
                        V.warn("Catch exception in onVMEvent()" + JSON.stringify(e))
                    }
                } else V.error("powerevent: Invalid param.")
            },
            v = function(i, e) {
                var t = s;
                if (s = e ? b : m, Object.keys(R).forEach(function(e) {
                        var t, n = new DOMException(i, "OperationError");
                        R[e].responseCb ? R[e].webCommandId === p.createOffer || R[e].webCommandId === p.createAnswer ? (t = {
                            desc: {
                                sdp: f()
                            }
                        }, V.debug("Resolving createoffer/createAnswer with desc " + t.desc), R[e].responseCb(t)) : R[e].responseCb({
                            error: n
                        }) : V.error(n)
                    }), R = {}, o && o.readyState === WebSocket.OPEN && s == m && o.close(), o = null, Object.keys(k).forEach(function(e) {
                        k[e].cleanUp()
                    }), k = {}, Object.keys(E).forEach(function(e) {
                        e = E[e];
                        e.onended && e.onended()
                    }), E = {}, se = {}, P = [], D = [], ve = {}, A = !(j = {}), t === S) {
                    try {
                        N({
                            event: "vdiClientDisconnected",
                            reason: "endpointDisconnected"
                        })
                    } catch (e) {
                        V.warn("Catch exception in onVMEvent()" + JSON.stringify(e))
                    }
                    a.invokeDeviceChange()
                }
                M = {}
            }
    }

    function Te(e, t, n, i) {
        var r = this;
        this.id = e, this.name = t, this.image = n, this.icon = void 0, this.bounds = i || {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, this.getId = function() {
            return V.debug("getId " + r.id), r.id
        }, this.getDeviceId = function() {
            return V.debug("getDeviceId " + r.id), Oe + "-" + r.id
        }, this.getType = function() {
            return Ie.Monitor
        }, this.getPreview = function(e, t, n) {
            return V.debug("ScreensAsync getPreview "), new Promise(function(e, t) {
                t()
            })
        }, this.getPreviewAsync = function(e, t, n) {
            return V.debug("ScreensAsync getPreviewAsync"), n ? new Promise(function(e, t) {
                var n = document.createElement("canvas");
                n.getContext("2d").putImageData(r.image, 0, 0), e({
                    data: n.toDataURL().replace("data:image/png;base64,", "")
                })
            }) : new Promise(function(e, t) {
                e(r.image)
            })
        }, this.getDescription = function() {
            return V.debug("ScreensAsync getDescription "), r.name
        }, this.getIcon = function(e, t) {
            return V.debug("ScreensAsync getIcon"), new Promise(function(e, t) {
                e(r.image)
            })
        }, this.getAppName = function() {
            return V.warn("getAppName: not support."), null
        }, this.getBounds = function() {
            return (r.bounds.width <= 0 || r.bounds.height <= 0) && V.warn("getBounds: invalid bounds."), r.bounds
        }
    }

    function _e(e, t) {
        var s = this,
            d = (this.id = w, this.binaryType = "arraybuffer", this.bufferedAmount = 0, this.maxPacketLifeTime = 0, this.maxRetransmits = 0, this.negotiated = !1, this.ordered = !0, this.protocol = "", this.readyState = !1, this.reliable = !0, this.label = "", t),
            c = e,
            n = 0;
        Object.defineProperty(this, "bufferedAmountLowThreshold", {
            get: function() {
                return n
            },
            set: function(e) {
                void 0 === e && V.warn("RTCDataChannel bufferedAmountLowThreshold value undefined."), s.id != w && O.send({
                    cmd: "dataChannelCmd",
                    hint: "setBufferAmountLowThreshold",
                    dataChannelCmd: h.SET_BUFFER_AMOUNT_LOW_THRESHOLD,
                    dataChannelId: s.id,
                    shimId: d,
                    label: s.label,
                    threshold: e
                }, c), n = e
            },
            configurable: !0
        }), this._createChannel = function(e, t) {
            s.id == w ? (s.label = e, O.send({
                cmd: "dataChannelCmd",
                hint: "create",
                label: e,
                shimId: d,
                options: t,
                dataChannelCmd: h.CREATE
            }, c)) : V.warn("RTCDataChannel.create channel " + s.id + " already existed")
        }, this._updateChannel = function(e) {
            s.id = e.id, s.binaryType = e.binaryType, s.bufferedAmount = e.bufferedAmount, s.maxPacketLifeTime = e.maxPacketLifeTime, s.maxRetransmits = e.maxRetransmits, s.negotiated = e.negotiated, s.ordered = e.ordered, s.protocol = e.protocol, s.readyState = e.readyState, s.reliable = e.reliable, s.label = e.label
        }, this.send = function(e) {
            if (s.id != w)
                if (e instanceof Blob) {
                    e.arrayBuffer();
                    e.arrayBuffer().then(function(e) {
                        for (var t = new Uint8Array(e), n = t.byteLength, i = "", r = 0; r < n; r++) i += String.fromCharCode(t[r]);
                        O.send({
                            cmd: "dataChannelCmd",
                            label: s.label,
                            dataChannelId: s.id,
                            shimId: d,
                            dataChannelCmd: h.SEND,
                            hint: "send",
                            data: window.btoa(i),
                            dataType: "binary",
                            dataLen: n
                        }, c)
                    })
                } else {
                    var t = null,
                        n = 0,
                        i = "binary";
                    if ("string" == typeof e || e instanceof String) t = window.btoa(e), i = "string", n = e.length;
                    else {
                        for (var r = new Uint8Array(e), n = r.byteLength, o = "", a = 0; a < n; a++) o += String.fromCharCode(r[a]);
                        o && (t = window.btoa(o))
                    }
                    t ? O.send({
                        cmd: "dataChannelCmd",
                        label: s.label,
                        dataChannelId: s.id,
                        shimId: d,
                        hint: "send",
                        dataChannelCmd: h.SEND,
                        data: t,
                        dataType: i,
                        dataLen: n
                    }, c) : V.warn("RTCDataChannel.send: Unsupported data format")
                }
            else V.error("RTCDataChannel.send: invalid datachannel id.")
        }, this.close = function() {
            k[c] ? (O.send({
                cmd: "dataChannelCmd",
                hint: "close",
                label: s.label,
                dataChannelId: s.id,
                shimId: d,
                dataChannelCmd: h.CLOSE
            }, c), k[c]._untrackDataChannel(s.id, d)) : V.warn("RTCDataChannel.close: peerconnection is untracked.")
        }, this._onReceiveEvent = function(e) {
            if (void 0 === e || void 0 === e.evt) V.error("_onReceiveEvent(): evt property is invalid.");
            else {
                var t = {
                    target: this
                };
                switch (e.evt) {
                    case "dconopen":
                        this.onopen && (this._updateChannel(e.channel), this.onopen(t));
                        break;
                    case "dconbufferedamountlow":
                        this.onbufferedamountlow && this.onbufferedamountlow(t);
                        break;
                    case "dconerror":
                        this.onerror && this.onerror(t);
                        break;
                    case "dconmessage":
                        if (this.onmessage) {
                            if ("string" === e.dataType) t.data = window.atob(e.data);
                            else {
                                var n = window.atob(e.data),
                                    i = n.length;
                                t.data = new Uint8Array(i);
                                for (var r = 0; r < i; r++) t.data[r] = n.charCodeAt(r)
                            }
                            this.onmessage(t)
                        }
                        break;
                    case "dconclose":
                        this.onclose && this.onclose(t)
                }
            }
        }
    }
    var x = function(e) {
            var n = this,
                i = {};
            this._objectId = ++ie, this.id = "", this.peer = T, this.active = !1, this.ended = !1, this.cloned = null, this.track = [], this.createMediaStream = function(e) {
                void 0 === e || Array.isArray(e) ? (this.id = "Stream#" + n._objectId, V.debug("MediaStream.createMediaStream() with " + n.id + "MediaStreamTracks num =" + !(e = e) ? 0 : e.length), this.active = !1, this.track = [], void 0 !== e && e.forEach(function(e) {
                    e && e instanceof L && n.track.push(e)
                }), O.send({
                    cmd: "createMediaStream",
                    sid: n.id,
                    tracks: n.track
                }, -1)) : V.debug("MediaStream.createMediaStream failed with invalid parameter")
            }, this._create = function(e, t) {
                this.id = e.id, this.peer = t, this.active = e.active, this.track = [], e.track.forEach(function(e) {
                    var t = new L;
                    t._create(e), n.track.push(t)
                }), se[this.id] = this
            }, this.dispatchEvent = function(t) {
                V.debug("MediaStream.dispatchEvent(): " + t.type), void 0 !== i[event.type] && i[event.type].listeners.forEach(function(e) {
                    e(t)
                }), "active" === t.type ? this.onactive && this.onactive(t) : "addtrack" === t.type ? this.onaddtrack && this.onaddtrack(t) : "inactive" === t.type ? this.oninactive && this.oninactive(t) : "removetrack" === t.type ? this.onremovetrack && this.onremovetrack(t) : V.debug("MediaStream.dispatchEvent(): Undefined event: ", t.type)
            }, this.addEventListener = function(e, t) {
                V.debug("MediaStream.addEventListener(): " + e), "function" != typeof t ? V.error("MediaStream.addEventListener(): The listener handler is invalid.") : "string" != typeof e ? V.error("MediaStream.addEventListener(): The event name is invalid.") : (void 0 === i[e] && (i[event] = {
                    listeners: []
                }), i[e].listeners.push(t))
            }, this.removeEventListener = function(e, t) {
                V.debug("MediaStream.removeEventListener(): " + e), void 0 === i[e] ? V.error("MediaStream.removeEventListener(): Event does not exist = " + e) : i[e].listeners = i[e].listeners.filter(function(e) {
                    return e.toString() !== t.toString()
                })
            }, this.addTrack = function(t) {
                V.debug("MediaStream.addTrack(): " + t.id);
                var n = !1;
                this.track.forEach(function(e) {
                    e.id == t.id && (n = !0)
                }), n || this.track.push(t)
            }, this.removeTrack = function(e) {
                V.debug("MediaStream.removeTrack(): " + e.id);
                for (var t = 0; t < this.track.length; t++)
                    if (this.track[t].id == e.id) return void this.track.splice(t, 1)
            }, this.removeTrackById = function(e) {
                V.debug("MediaStream.removeTrackById(): " + e);
                for (var t, n = 0; n < this.track.length; n++)
                    if (this.track[n].id == e) return t = {
                        type: "removetrack",
                        track: this.track[n]
                    }, this.dispatchEvent(t), void this.track.splice(n, 1)
            }, this.getTracks = function() {
                return V.debug("[" + this.id + "]MediaStream.getTracks(): " + this.track.length), V.debug(this.track), this.track
            }, this.getAudioTracks = function() {
                var t = [];
                return this.track.forEach(function(e) {
                    "audio" == e.kind && t.push(e)
                }), V.debug("MediaStream.getAudioTracks(): Audio tracks = " + t.length), t
            }, this.getVideoTracks = function() {
                var t = [];
                return this.track.forEach(function(e) {
                    "video" == e.kind && t.push(e)
                }), V.debug("MediaStream.getVideoTracks(): Video tracks = " + t.length), t
            }, this.getTrackById = function(t) {
                var n = null;
                return V.debug("MediaStream.getTrackById(): " + t), this.track.forEach(function(e) {
                    e.id == t && (n = e)
                }), n
            }, this.clone = function() {
                if (V.debug("MediaStream.clone(): Clone mediaStream = " + this.id), this.cloned) return V.debug("MediaStream.clone(): Use cached clone: " + this.cloned.id), this.cloned;
                var e = new x,
                    t = ge(this.id, "StreamCln#", e._objectId),
                    n = [];
                e._create({
                    id: t,
                    active: this.active,
                    track: []
                }, this.peer);
                for (var i = 0; i < this.track.length; i++) {
                    var r = this.track[i]._internalClone();
                    e.track.push(r), n.push({
                        tid: this.track[i].id,
                        cid: r.id
                    })
                }
                return O.send({
                    cmd: "mediaStreamClone",
                    sid: this.id,
                    cid: e.id,
                    streamPeer: this.peer,
                    trackClones: n
                }, -1), V.debug("MediaStream.clone(): MediaStream cloned = " + e.id + " from = " + this.id), e
            }
        },
        L = function() {
            var n = {};
            this._objectId = ++re, this.remote = !1, this.readonly = !1, this.contentHint = "", this.id = "", this.kind = "", this.label = "", this.muted = !1, this.readyState = "", this._enabled = !1, Object.defineProperty(this, "enabled", {
                get: function() {
                    return this._enabled
                },
                set: function(e) {
                    void 0 === (this._enabled = e) && V.warn("Set MediaStreamTrack.enabled to undefined."), O.send({
                        cmd: "trackEnabled",
                        trackId: this.id,
                        enabled: e
                    }, -1)
                },
                configurable: !0
            }), this._create = function(e) {
                this._update(e), E[this.id] = this
            }, this._update = function(e) {
                e && (this.contentHint = e.contentHint, this.id = e.id, this.kind = e.kind, this.label = e.label, this._enabled = e.enabled, this.muted = e.muted, this.readyState = e.readyState, this.remote = e.remote, this.readonly = e.readonly, this.settings = e.settings)
            }, this.dispatchEvent = function(e) {
                "started" == e.type ? this.onstarted && this.onstarted(e) : "ended" == e.type ? this.onended && this.onended(e) : "isolationchange" == e.type ? this.onisolationchange && this.onisolationchange(e) : "mute" == e.type ? this.onmute && this.onmute(e) : "unmute" == e.type ? this.onunmute && this.onunmute(e) : "overconstrained" == e.type ? this.onoverconstrained && this.onoverconstrained(e) : V.debug("Undefined media track evt: ", e.type)
            }, this.addEventListener = function(e, t) {
                V.debug("MediaStreamTrack.addEventListener(): " + e), "function" != typeof t ? V.error("MediaStreamTrack.addEventListener(): The listener handler is invalid.") : "string" != typeof e ? V.error("MediaStreamTrack.addEventListener(): The event name is invalid.") : (void 0 === n[e] && (n[event] = {
                    listeners: []
                }), n[e].listeners.push(t))
            }, this.removeEventListener = function(e, t) {
                V.debug("MediaStreamTrack.removeEventListener(): " + e), void 0 === n[e] ? V.error("MediaStreamTrack.removeEventListener(): Event does not exist = " + e) : n[e].listeners = n[e].listeners.filter(function(e) {
                    return e.toString() !== t.toString()
                })
            }, this.applyConstraints = function(e) {
                var r = this.id,
                    o = this.settings;
                return V.debug("MediaStreamTrack.applyConstraints()"), new Promise(function(t, n) {
                    var i = new DOMException("applyConstraints failed", "OperationError");
                    O.send({
                        cmd: "applyConstraints",
                        constraints: e,
                        trkid: r
                    }, -1, function(e) {
                        void 0 === e.error ? (void 0 !== e.settings.width && void 0 !== e.settings.height && (o.width = e.settings.width, o.height = e.settings.height), t()) : n(i)
                    })
                })
            }, this.getConstraints = function() {
                V.debug("MediaStreamTrack.getConstraints(): Not implemented")
            }, this.getCapabilities = function() {
                V.debug("MediaStreamTrack.getCapabilities(): Not implemented")
            }, this.getSettings = function() {
                return V.debug("MediaStreamTrack.getSettings(): " + JSON.stringify(this.settings)), this.settings
            }, this.stop = function() {
                O.send({
                    cmd: "mediaTrkStop",
                    trkid: this.id
                })
            }, this._internalClone = function() {
                var e = new L,
                    t = ge(this.id, "TrackCln#", e._objectId);
                return e._create({
                    id: t,
                    kind: this.kind,
                    label: this.label,
                    enabled: this.enabled,
                    muted: this.muted,
                    readyState: this.readyState,
                    remoate: this.remote,
                    readonly: this.readonly,
                    settings: this.settings
                }), e
            }, this.clone = function() {
                var e = this._internalClone();
                return O.send({
                    cmd: "mediaTrackClone",
                    tid: this.id,
                    cid: e.id
                }, -1), e
            }
        },
        we = function() {
            this.stats = {}, this._create = function(e) {
                this.stats = e, this.type = e.type, this.id = e.id, this.timestamp = e.timestamp, delete this.stats.type, delete this.stats.id, delete this.stats.timestamp
            }, this.names = function() {
                return Object.keys(this.stats)
            }, this.stat = function(e) {
                return this.stats[e]
            }
        },
        W = function() {
            function e(e) {
                var t, n = [];
                for (t in r) {
                    var i = r[t];
                    i.type && i.type === e && n.push(i)
                }
                return n
            }
            var n = {},
                r = {};
            this.update = function(e) {
                var t;
                (t = e) && ("+" === t.op && (n = null, r = {}), t.track && (n ? Object.keys(t.track).forEach(function(e) {
                    "enabled" != e ? n[e] = t.track[e] : n._enabled = t.track[e]
                }) : (n = new L)._update(t.track)), t.sources && t.sources.forEach(function(t) {
                    var n, e = t.source;
                    "-" === t.op ? delete r[e] : ("+" === t.op && (delete r[e], r[e] = {}), n = r[e], Object.keys(t).forEach(function(e) {
                        n[e] = t[e]
                    }))
                }))
            }, Object.defineProperty(this, "track", {
                get: function() {
                    return n
                },
                configurable: !0
            }), this.getContributingSources = function() {
                return e(v)
            }, this.getSynchronizationSources = function() {
                return e(o)
            }
        },
        U = (W.getCapabilities = function(e) {
            if (V.info("RTCRtpReceiver.getCapabilities for kind = " + e), j.receiver && j.receiver[e]) return j.receiver[e]
        }, function(e) {
            var i = this,
                n = !1,
                r = (this._cap = M.sender || 0, e),
                o = null,
                a = null,
                t = l,
                s = "",
                d = null,
                c = null,
                u = null;
            this.initPlanB = function(e, t) {
                V.debug("RtcRtpSender.initPlanB"), n = !1, o = t, s = e ? e.id : "", a = e, d = new ke(i)
            }, this.initUnifiedPlan = function(e, t) {
                e ? (n = !0, c = e, d = new ke(i), t && t.sendEncodings) : V.error("RTCRtpSender.initUnifiedPlan: Invalid transceiver")
            }, Object.defineProperty(this, "dtmf", {
                get: function() {
                    return n ? (u || (u = new Se).initUnifiedPlan(r.id, c, this, a), u) : r ? r.createDTMFSender(a) : null
                },
                configurable: !0
            }), Object.defineProperty(this, "rtcpTransport", {
                get: function() {
                    V.debug("RTCRtpSender.rtcpTransport getter: Not implemented")
                },
                configurable: !0
            }), Object.defineProperty(this, "track", {
                get: function() {
                    return V.debug("RTCRtpSender.track Transceiver=" + (c ? c.id : "") + ")"), a
                },
                configurable: !0
            }), Object.defineProperty(this, "transport", {
                get: function() {
                    V.debug("RTCRtpSender.transport getter: Not implemented")
                },
                configurable: !0
            }), Object.defineProperty(this, "id", {
                get: function() {
                    return V.debug("RTCRtpSender.id:" + s), s
                },
                configurable: !0
            }), Object.defineProperty(this, "proxyState", {
                get: function() {
                    return t
                },
                configurable: !0
            }), this.setTrack = function(e, t) {
                a = e, o = t
            }, this.removeTrack = function() {
                a ? r ? (O.send({
                    cmd: "removeTrack",
                    transceiverId: c ? c.id : "",
                    senderId: s
                }, r.id), a = d = null) : V.error("RTCRtpSender.removeTrack: invalid peer object.") : V.error("RTCRtpSender.removeTrack: track is already removed.")
            }, this.update = function(e) {
                if (r)
                    if (e) {
                        if (c) e.id ? s = e.id : V.error("RTCRtpSender.update invalid id");
                        else if (s != e.id || !d) return void V.error("RTCRtpSender.update Invalid state detected, self = " + JSON.stringify(i));
                        e.track && a && a._update(e.track), e.parameters && d && d.update(e.parameters), t = q
                    } else V.error("RTCRtpSender.update: invalid sender object.");
                else V.error("RTCRtpSender.update: invalid peer object.")
            }, this.getParameters = function() {
                return V.debug("RTCRtpSender.getParameters"), r ? (t === l && V.warn("RTCRtpSender.getParameters without peer, use cached value and the behavior will be undefined."), d) : (V.error("RTCRtpSender.getParameters: invalid peer object."), null)
            }, this.setParameters = function(e) {
                return V.debug("RTCRtpSender.setParameters"), new Promise(function(n, i) {
                    r ? O.send({
                        cmd: "senderCmd",
                        senderCmd: z,
                        hint: "setParameter",
                        transceiverId: c ? c.id : "",
                        senderId: s,
                        parameters: e.modifiedValues()
                    }, r.id, function(e) {
                        var t;
                        void 0 === e.error ? (t = Array.isArray(e.senders) && 0 < e.senders.length ? e.senders[0] : null) && t.id == s ? (d.update(t.parameters), n()) : (V.debug("RTCRtpSender.setParameters invaild response."), t = new DOMException("setParameters failed", "OperationError"), i(t)) : i(e.error)
                    }) : i(new DOMException("RTCRtpSender.setParameters: invalid peer object", "OperationError"))
                })
            }, this.getStats = function() {
                V.debug("RTCRtpSender.getStats: Not implemented")
            }, this.replaceTrack = function(e) {
                return V.debug("RTCRtpSender.replaceTrack"), new Promise(function(t, n) {
                    r ? (O.send({
                        cmd: "senderCmd",
                        senderCmd: J,
                        hint: "replaceTrack",
                        transceiverId: c ? c.id : "",
                        senderId: s,
                        sid: o ? o.id : "",
                        trackId: a ? a.id : "",
                        newTrackId: e ? e.id : ""
                    }, r.id, function(e) {
                        void 0 === e.error ? t() : n(e.error)
                    }), a = e, d = new ke(i)) : n(new DOMException("RTCRtpSender.replaceTrack no peer", "OperationError"))
                })
            }
        }),
        ke = (U.getCapabilities = function(e) {
            if (V.info("RTCRtpSender.getCapabilities for kind = " + e), j.sender && j.sender[e]) return j.sender[e]
        }, function(t) {
            function e(e) {
                t && t.proxyState != l ? V.debug("RTCRtpSendParameters." + e) : V.warn("RTCRtpSendParameters." + e + ": sender is pending.")
            }
            var n, i, r, o = [],
                a = 0;
            o[0] = new Ee;
            Object.defineProperty(this, "degradationPreference", {
                get: function() {
                    return e("degradationPreference getter"), n
                },
                set: function(e) {
                    n = e, a |= s
                },
                configurable: !0
            }), Object.defineProperty(this, "encodings", {
                get: function() {
                    return e("encodings getter"), o
                },
                set: function(e) {
                    o = e, a |= X
                },
                configurable: !0
            }), Object.defineProperty(this, "priority", {
                get: function() {
                    return e("priority getter"), i
                },
                set: function(e) {
                    i = e, a |= d
                },
                configurable: !0
            }), Object.defineProperty(this, "transactionId", {
                get: function() {
                    return e("transactionId getter"), r
                },
                set: function(e) {
                    r = e, a |= K
                },
                configurable: !0
            }), this.update = function(e) {
                0 == (a & s) && (n = e.degradationPreference), 0 == (a & X) && e.encodings && (o = [], e.encodings.forEach(function(e) {
                    var t = new Ee;
                    t.update(e), o.push(t)
                })), 0 == (a & d) && (i = e.priority), 0 == (a & K) && (r = e.transactionId)
            }, this.modifiedValues = function() {
                var e = {},
                    t = ((a & s || void 0 !== n) && (e.degradationPreference = n), []);
                return o.forEach(function(e) {
                    e = e.modifiedValues();
                    Object.keys(e).length && t.push(e)
                }), t.length && (e.encodings = t), (a & d || void 0 !== i) && (e.priority = i), a = 0, e
            }
        }),
        Ee = function() {
            var t, n, i, r, o, a, s, d = !0,
                c = 0;
            Object.defineProperty(this, "active", {
                get: function() {
                    return d
                },
                set: function(e) {
                    d = e, c |= u.RPF_ACTIVE
                },
                configurable: !0
            }), Object.defineProperty(this, "codecPayloadType", {
                get: function() {
                    return t
                },
                configurable: !0
            }), Object.defineProperty(this, "dtx", {
                get: function() {
                    return n
                },
                set: function(e) {
                    dtx = e, c |= u.RPF_DTX
                },
                configurable: !0
            }), Object.defineProperty(this, "maxBitrate", {
                get: function() {
                    return i
                },
                set: function(e) {
                    i = e, c |= u.RPF_MAXBITRATE
                },
                configurable: !0
            }), Object.defineProperty(this, "maxFramerate", {
                get: function() {
                    return r
                },
                set: function(e) {
                    r = e, c |= u.RPF_MAXFRAMERATE
                },
                configurable: !0
            }), Object.defineProperty(this, "ptime", {
                get: function() {
                    return o
                },
                set: function(e) {
                    o = e, c |= u.RPF_PTIME
                },
                configurable: !0
            }), Object.defineProperty(this, "rid", {
                get: function() {
                    return a
                },
                set: function(e) {
                    a = e, c |= u.RPF_RID
                },
                configurable: !0
            }), Object.defineProperty(this, "scaleResolutionDownBy", {
                get: function() {
                    return s
                },
                set: function(e) {
                    s = e, c |= u.RPF_SCALE_RESOLUTION_DOWNBY
                },
                configurable: !0
            }), this.update = function(e) {
                0 == (c & u.RPF_ACTIVE) && (d = e.active), 0 == (c & u.RPF_CODEPAYLOADTYPE) && (t = e.codecPayloadType), 0 == (c & u.RPF_DTX) && (n = e.dtx), 0 == (c & u.RPF_MAXBITRATE) && (i = e.maxBitrate), 0 == (c & u.RPF_MAXFRAMERATE) && (r = e.maxFramerate), 0 == (c & u.RPF_PTIME_) && (o = e.ptime), 0 == (c & u.RPF_RID) && (a = e.rid), 0 == (c & u.RPF_SCALE_RESOLUTION_DOWNBY) && (s = e.scaleResolutionDownBy)
            }, this.modifiedValues = function() {
                var e = {};
                return (c & u.RPF_ACTIVE || void 0 !== d) && (e.active = d), (c & u.RPF_CODEPAYLOADTYPE || void 0 !== t) && (e.codecPayloadType = t), (c & u.RPF_DTX || void 0 !== n) && (e.dtx = n), (c & u.RPF_MAXBITRATE || void 0 !== i) && (e.maxBitrate = i), (c & u.RPF_MAXFRAMERATE || void 0 !== r) && (e.maxFramerate = r), (c & u.RPF_PTIME || void 0 !== o) && (e.ptime = o), (c & u.RPF_RID || void 0 !== a) && (e.rid = a), (c & u.RPF_SCALE_RESOLUTION_DOWNBY || void 0 !== s) && (e.scaleResolutionDownBy = s), c = 0, e
            }
        },
        Ie = {
            Monitor: 1,
            Window: 2,
            Camera: 3
        },
        Oe = "VDI_Mon",
        h = {
            CREATE: 1,
            SEND: 2,
            SET_BUFFER_AMOUNT_LOW_THRESHOLD: 3,
            CLOSE: 4
        };
    return {
        initSDK: function(e, t, n) {
            return "function" != typeof n ? (V.error("initSDK(): The event callback function is not valid."), !1) : (V.info("setVMEventCallback(): Set event callback"), ue = n, B = t || "", r = e, V.info("init(): VMware VDI shim version = " + _), window.getWindowReference().then(function(e) {
                V.info("init(): HWND: " + e), he.hwnd = e, (O = new Re).init()
            }, function(e) {
                V.error("init(): Failed to retrieve window handle: " + e.message)
            }), !0)
        },
        newPeerConnection: function(e, t) {
            if (O) {
                if (O.isSocketConnected()) {
                    var n = new me(e);
                    if (M.sender) n.createOffer = n.createOfferV1, n.createAnswer = n.createAnswerV1, n.setRemoteDescription = n.setRemoteDescriptionV1, n.setLocalDescription = n.setLocalDescriptionV1, n.addIceCandidate = n.addIceCandidateV1, n.getStats = n.getStatsV1, n.addTrack = n.addTrackImplV1, n.removeTrack = n.removeTrackImplV1, n.getSenders = n.getSendersImplV1, n.getTransceivers = n.getTranceiversImplV1, n.addTransceiver = n.addTransceiverImplV1;
                    else {
                        if (n.isUnifiedPlan()) throw V.error("createPeerConnection failed due to endpoint does not support unified plan"), "endpoint does not support unified plan";
                        n.createOffer = n.createOfferV0, n.createAnswer = n.createAnswerV0, n.setRemoteDescription = n.setRemoteDescriptionV0, n.setLocalDescription = n.setLocalDescriptionV0, n.addIceCandidate = n.addIceCandidateV0, n.getStats = n.getStatsV0
                    }
                    return n.createDataChannel = n.createDataChannelImplV1, k[n.id] = n, O.send({
                        cmd: "createPeerConnection",
                        arg1: e,
                        arg2: t
                    }, n.id), V.debug("createPeerConnection(): Create peer: " + n.id), n
                }
                V.error("createPeerConnection: WebSocket is not in connected state")
            } else V.error("createPeerConnection: gRequestManager is not created yet.")
        },
        newMediaStream: function(e) {
            var t = new x;
            return t.createMediaStream(e), t
        },
        getDisplayMedia: function(e) {
            var t;
            if (O.isSocketConnected()) return A ? (t = new DOMException("getDisplayMedia is not support in App mode", "OperationError"), Promise.reject(t)) : new Promise(function(n, i) {
                V.debug("getDisplayMediaShim(): Constraints = " + JSON.stringify(e)), O.send({
                    cmd: "getDisplayMediaShim",
                    constraints: e
                }, -1, function(e) {
                    var t;
                    void 0 === e.error ? ((t = new x)._create(e.stream, T), V.debug("getDisplayMediaShim(): Media =" + t.id), n(t)) : i(e.error)
                })
            });
            V.error("getDisplayMediaShim: WebSocket is not in connected state")
        },
        getUserMedia: function(e) {
            if (!O.isSocketConnected()) return Promise.reject({
                name: "NotFoundError",
                message: "WebSocket is not in connected state"
            });
            if (void 0 !== e.video && void 0 !== e.video.mandatory && void 0 !== e.video.mandatory.sourceId && void 0 !== fe[e.video.mandatory.sourceId]) {
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
                    f = {
                        width: 0,
                        height: 0
                    },
                    v = {
                        width: 0,
                        height: 0
                    },
                    o = (fe[o].forEach(function(e) {
                        (void 0 === a || e.width >= a) && (void 0 === s || e.width <= s) && (void 0 === d || e.height >= d) && (void 0 === c || e.height <= c) && (void 0 === u || e.fps >= u) ? (e.width * e.height > f.width * f.height && (f = e), l && h && l * e.height == h * e.width && e.width * e.height > v.width * v.height && (v = e)) : (void 0 !== a && e.width >= a || void 0 !== s && e.width >= s) && (r = !0)
                    }), 0 < v.width ? v : f);
                if (o && (t = o.width, n = o.height, i = o.fps), 0 < t && 0 < n && 0 < i) V.debug("Constraints: " + JSON.stringify(e) + " ==> " + t + "x" + n + " @" + i + ":" + (u || "undefined")), u && (e.video.mandatory.origFps = u), e.video.mandatory.maxFrameRate = i, e.video.mandatory.maxWidth = e.video.mandatory.minWidth = t, e.video.mandatory.maxHeight = e.video.mandatory.minHeight = n;
                else {
                    if (!r) return V.debug("getUserMediaShim(): constraints does not match."), void reject({
                        name: "OverconstrainedError",
                        message: null
                    });
                    V.debug("getUserMediaShim(): low resolution video forward to client.")
                }
            }
            return new Promise(function(i, r) {
                O.send({
                    cmd: "getUserMediaShim",
                    constraints: e
                }, -1, function(e) {
                    var t, n;
                    void 0 === e.error ? (t = null, void 0 !== e.clone && ((t = new x)._create(e.clone, T), V.debug("Media cloned:" + t.id)), (n = new x)._create(e.stream, T), n.cloned = t, V.debug("Media:" + n.id), i(n)) : (new DOMException("Abort", "AbortError"), r(e.error))
                })
            })
        },
        enumerateDevices: function() {
            return O.isSocketConnected() ? new Promise(function(e, n) {
                O.send({
                    cmd: "enumDevices"
                }, -1, function(t) {
                    void 0 === t.error ? (e(t.devices), void 0 !== t.caps && Object.keys(t.caps).forEach(function(e) {
                        fe[e] = t.caps[e]
                    })) : n("enumDevices cancelled.")
                })
            }) : (V.info("enumerateDevicesShim(): Use fallback mode."), new Promise(function(t, n) {
                ce.call(navigator.mediaDevices).then(function(e) {
                    t(e), O.isSocketConnected() && (V.info("enumerateDevicesShim(): [Resolve] Fallback cancelled. Invoke device change."), O.invokeDeviceChange())
                }, function(e) {
                    O.isSocketConnected() ? (V.info("enumerateDevicesShim(): [Reject] Fallback cancelled. Invoke device change."), t([]), O.invokeDeviceChange()) : n(e)
                })
            }))
        },
        onVideoCreated: function(e, t) {
            if (O.isSocketConnected()) {
                V.debug("newVideoElement: New video element from app.");
                for (var n = Object.keys(I), i = 0; i < n.length; i++) {
                    var r = n[i];
                    if (I[r]._rawVideo === e) return void V.debug("newVideoElement(): Video already found")
                }
                t = new Ce(e, t);
                I[t._id] = t, e._context = t
            } else V.error("newVideoElement: WebSocket is not in connected state")
        },
        onAudioCreated: function(e, t) {
            if (O.isSocketConnected()) {
                V.debug("newAudioElement(): A new audio element created.");
                for (var n = Object.keys(le), i = 0; i < n.length; i++) {
                    var r = n[i];
                    if (le[r]._rawAudio === e) return void V.debug("newAudioElement(): Audio already found")
                }
                t = new ye(e, t);
                le[t._id] = t, e._context = t
            } else V.error("newAudioElement: WebSocket is not in connected state")
        },
        onVideoDisposed: function(e, t) {
            e && e._context && e._context.disposeVideo();
            e = e && e._context ? e._context._id : void 0;
            V.info("disposeElement video id=" + e)
        },
        onAudioDisposed: function(e, t) {
            e && e._context && e._context._id;
            V.info("disposeElement audio id=" + _id)
        },
        playRingtone: function(e, r, t) {
            var o, a;
            O.isSocketConnected() ? r ? (e, V.debug("playNotifyAudio(): id = " + e + " src = " + r + " loop = " + t), void 0 === (o = c[e]) && (o = i++, c[e] = o), O.send({
                cmd: "notifyAudio",
                action: "play",
                src: r,
                audid: o,
                loop: t
            }, -1), (a = new XMLHttpRequest).open("GET", r, !0), a.responseType = "arraybuffer", a.onreadystatechange = function() {
                var e, t, n, i;
                a.readyState == XMLHttpRequest.DONE && 200 == a.status ? (e = 16 + a.response.byteLength, (t = new Uint8Array(16))[0] = 65, t[1] = 78, t[2] = 84, t[3] = 70, t[4] = e >> 24 & 255, t[5] = e >> 16 & 255, t[6] = e >> 8 & 255, t[7] = 255 & e, t[8] = o >> 24 & 255, t[9] = o >> 16 & 255, t[10] = o >> 8 & 255, t[11] = 255 & o, n = new Uint8Array(e), i = new Uint8Array(a.response), n.set(t, 0), n.set(i, 16), O.sendBinary(n), V.debug("onreadystatechange(): Send " + e + "bytes")) : V.debug("onreadystatechange(): Download " + r + " status = " + a.status)
            }, a.send()) : V.error("playNotifyAudio(): src cannot be null or undefined") : V.error("playNotifyAudio(): WebSocket is not in connected state")
        },
        pauseRingtone: function(e) {
            var t;
            O.isSocketConnected() ? (V.debug("pauseNotifyAudio(): id = " + e), void 0 === (t = c[e]) ? V.warn("pauseNotifyAudio(): id = " + e + " did not play yet.") : O.send({
                cmd: "notifyAudio",
                action: "pause",
                audid: t
            }, -1)) : V.error("playNotifyAudio: WebSocket is not in connected state")
        },
        setVideoClipRegion: function(e, t, n) {
            V.debug("setVideoClipRegion: " + e + ", " + JSON.stringify(t)), O.isSocketConnected() ? (e = {
                cmd: "customClipRect",
                op: e ? 0 : 1,
                clip: JSON.parse(JSON.stringify(t))
            }, (t = pe(n)) && (a(n), e.frame = t), O.send(e, -1)) : V.error("setVideoClipRegion: WebSocket is not in connected state.")
        },
        getReceiverCapabilities: function(e) {
            return V.debug("getCapabilitiesShim"), W.getCapabilities(e)
        },
        setSinkId: function(e, t) {
            var n;
            O.isSocketConnected() ? (void 0 === (n = c[e]) && (n = i++, c[e] = n), V.debug("setSinkId id = " + n + " srcId = " + e + " Value = " + t), O.send({
                cmd: "setSinkId",
                deviceId: t,
                audioId: n,
                srcId: e,
                context: "global"
            }, -1, function(e) {})) : V.error("setSinkId: WebSocket is not in connected state")
        },
        setPrimarySinkId: function(e) {
            V.debug("setDefaultSinkId = " + e), O.isSocketConnected() ? O.send({
                cmd: "setDefaultSinkId",
                deviceId: e
            }, -1) : V.error("setDefaultSinkId: WebSocket is not in connected state")
        },
        isFeatureSupported: function(e) {
            var t;
            return "string" != typeof e ? (V.debug("isFeatureSupported(): Invalid feature parameter"), !1) : !(!O || O.state !== S) && ("datachannel" === e ? M.datachannel ? 1 == M.datachannel || (V.debug("isFeatureSupported(): disable datachannel by settings."), !1) : (V.debug("isFeatureSupported(): disable datachannel for old client."), !1) : (t = !1, (t = Array.isArray(P) && -1 != P.indexOf(e) ? !0 : t) || V.debug("isFeatureSupported(): Input feature string not supported = " + e), t))
        },
        getScreensInfo: function() {
            var e;
            if (V.debug("getScreensAsync get called."), O.isSocketConnected()) return A ? (e = new DOMException("getScreensInfo is not support in App mode", "OperationError"), Promise.reject(e)) : new Promise(function(f, v) {
                var e = 0;
                M.getScreens && M.getScreens & $ && (e = 1), O.send({
                    cmd: "getScreens",
                    bounds: e
                }, -1, function(e) {
                    if (Array.isArray(e)) f(D = t = e);
                    else if (e.screens && Array.isArray(e.screens)) {
                        for (var t = [], n = 0; n < e.screens.length; n++) {
                            var i = e.screens[n].w,
                                r = e.screens[n].h,
                                o = e.screens[n].id,
                                a = e.screens[n].bounds,
                                s = e.screens[n].imageData;
                            if (0 < i && 0 < r && o && a && s) {
                                for (var d = window.atob(s), c = d.length, u = new Uint8ClampedArray(c), l = 0; l < c; l++) u[l] = d.charCodeAt(l);
                                s = new ImageData(u, i, r), i = new Te(o, "Screen " + o, s, a);
                                t.push(i), V.debug("Screen:" + o + ":  image size:" + c)
                            } else V.error("Invalid screen data:" + JSON.stringify(e.screens[n]))
                        }
                        f(D = t)
                    } else {
                        var h = e.error && e.error.message ? e.error.message : "Invalid getScreen response";
                        v(new DOMException(h, "OperationError"))
                    }
                })
            });
            V.error("getScreensAsync: WebSocket is not in connected state")
        },
        onScreenSelected: function(e) {
            V.debug("setScreenSharePanelId = " + e + " for getDisplayMedia"), O.isSocketConnected() ? O.send({
                cmd: "setScreenId",
                scrnId: e,
                numScreens: D.length
            }, -1) : V.error("setScreenSharePanelId: WebSocket is not in connected state")
        },
        onWindowSessionConnected: function(e) {
            V.info("connectedStateChanged called " + e), O && (O.state === S && O.send({
                cmd: "connectedStateChanged",
                connectionState: !0 === e ? 1 : 0
            }, -1), !0 === e ? (O.sendVdiClientEventsOnError = !0, O.startPolling(O.shortPollingIntervalMs, O.shortPollingTimeout, O.sendEvents)) : (O.sendVdiClientEventsOnError = !1, O.isHorizonRegistryPresent = !1, V.info("connectedStateChanged(): isHorizonRegistryPresent false"), O.stopPolling()))
        }
    }
});