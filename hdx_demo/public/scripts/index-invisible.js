import initializeCCP from './initCCP-invisible.js';
import session from './session.js';

// Add the call to init() as an onload so it will only run once the page is loaded
window.onload = (event) => {
    console.log("window.onload");
    window.navigator.mediaDevices.addEventListener('devicechange', function() {
        console.log('Device change detected');
        enumerateDevices();
    });

    try {
        initializeCCP('container-div');
    } catch (error) {
        console.error('CCP initialization error', error);
    }
};

// Set the agent Available
function goAvailable() {
    var routableState = session.agent.getAgentStates().filter(function (state) {
        return state.type === connect.AgentStateType.ROUTABLE;
    })[0];
    session.agent.setState(routableState, {
        success: function () {
            console.log("Set agent status to Available (routable) via Streams")
        },
        failure: function () {
            console.log("Failed to set agent status to Available (routable) via Streams")
        }
    });
}

// Set the agent offline
function goOffline() {
    var offlineState = session.agent.getAgentStates().filter(function (state) {
        return state.type === connect.AgentStateType.OFFLINE;
    })[0];
    session.agent.setState(offlineState, {
        success: function () {
            console.log("Set agent status to Offline via Streams")
        },
        failure: function () {
            console.log("Failed to set agent status to Offline via Streams")
        }
    });
}

// Initial a call
function initiateCall() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    var endpoint = connect.Endpoint.byPhoneNumber(phoneNumber);
    session.agent.connect(endpoint, {
      queueARN: null,
      success: function () { console.log("outbound call connected"); },
      failure: function (err) {
        console.log("outbound call connection failed");
        console.log(err);
      }
    });
  }

// Accept the contact
function acceptContact() {
    console.log("Accept contact");
    session.contact.accept({
        success: function () {
            console.log(session.contact)
            console.log("Accepted contact via Streams");
        },
        failure: function () {
            console.log("Failed to accept contact via Streams");
        }
    });

    
}

// Disconnect the current contact
function disconnectContact() {
    //cannot do contact.destroy(), can only destroy (hang-up) agent connection
    session.contact.getAgentConnection().destroy({
        success: function () {
            console.log("Disconnected contact via Streams");
        },
        failure: function () {
            console.log("Failed to disconnect contact via Streams");
        }
    });
}

// To destroy the contact when agent is in ACW
function clearContact() {
    session.contact.clear({
        success: function () {
            console.log("Cleared contact via Streams");
        },
        failure: function () {
            console.log("Failed to clear contact via Streams");
        }
    });
}

// Download CCP logs
function downloadLog() {
    connect.getLog().download();
}

// Enumerate media devices on local machine
function enumerateDevices() {
    var audioInput = document.getElementById("audioInput");
    var audioOutput = document.getElementById("audioOutput");
    window.VMwareWebRtcRedirectionAPI.enumerateDevices()
        .then( function (deviceInfos) { 
        console.log('enumerateDevices() success');
        for (let i = 0; i !== deviceInfos.length; ++i) {
            const deviceInfo = deviceInfos[i];
            //deviceInfo.kind: audioinput | audiooutput
            console.log('deviceId: ', deviceInfo.deviceId, ', kind: ', deviceInfo.kind, ', label: ', deviceInfo.label);
            var option = document.createElement('option');
            if( deviceInfo.kind === 'audioinput') { 
                console.log('add audioinput devices');
                option.value = deviceInfo.deviceId;
                option.innerHTML = deviceInfo.label;
                audioInput.add(option);
            } else if( deviceInfo.kind === 'audiooutput') { 
                console.log('add audioonput devices');
                option.value = deviceInfo.deviceId;
                option.innerHTML = deviceInfo.label;
                audioOutput.add(option);
            }
        }
    }).catch(function (err) {
    console.log('enumerateDevices() failure with error: ', err); 
    });
}

function setMicrophone() { 
    var microphoneDeviceId = document.getElementById("audioInput").value;
    window.audio_input = microphoneDeviceId;
    console.log("CDEBUG >> setMicrophoneDevice with " + microphoneDeviceId);
}

// Set speaker device
function setSpeaker() {
    var speakerDeviceId = document.getElementById("audioOutput").value;
    var remoteAudioElement = document.getElementById('remote-audio');
    // window.CitrixWebRTC.mapAudioElement(remoteAudioElement);
    // if (remoteAudioElement && typeof remoteAudioElement.setSinkId === 'function') {
    //     console.info(`CDEBUG >> Trying to set speaker to device ${speakerDeviceId}`);
    //     remoteAudioElement.setSinkId(speakerDeviceId).then(() => {
    //         connect.core.getUpstream().sendUpstream(connect.EventType.BROADCAST, {
    //             event: connect.ConfigurationEvents.SPEAKER_DEVICE_CHANGED,
    //             data: { deviceId: speakerDeviceId }
    //         });
    //     });
    // }

    console.log("CDEBUG >> setSpeakerDevice with " + speakerDeviceId);
}

// Event listeners for the 5 "buttons" of the Webpage
document.getElementById ('goAvailableDiv').addEventListener("click", goAvailable, false);
document.getElementById ('goOfflineDiv').addEventListener("click", goOffline, false);
document.getElementById ('callDiv').addEventListener("click", initiateCall, false);
document.getElementById ('answerDiv').addEventListener("click", acceptContact, false);
document.getElementById ('hangupDiv').addEventListener("click", disconnectContact, false);
document.getElementById ('clearDiv').addEventListener("click", clearContact, false);
document.getElementById ('downloadDiv').addEventListener("click", downloadLog, false);
document.getElementById ('audioInput').addEventListener("change", setMicrophone, false);
document.getElementById ('audioOutput').addEventListener("change", setSpeaker, false);


export function displayAgentStatus(status) {
    agentStatusDiv.innerHTML = 'Status: <span style="font-weight: bold">' + status + '</span>';
}