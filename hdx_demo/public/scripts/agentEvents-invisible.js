import session from './session.js';
import {displayAgentStatus} from './index-invisible.js'
/**
 * Extends the agent events.
*/
export default function (agent) {
    // Show the CCP container once tthe agent is logged in
    console.log("CDEBUG >> agentEvents");
    
    session.agent = agent;
    agentGreetingDiv.innerHTML = '<h3>Hi ' + agent.getName() + '!</h3>';
    connect.getLog().info("Subscribing to events for agent " + agent.getName());
    connect.getLog().info("Agent is currently in status of " + agent.getStatus().name);
    displayAgentStatus(agent.getStatus().name);

    //session.agent = agent;
    agent.onRefresh(handleAgentRefresh);
    agent.onStateChange(handleAgentStateChange);
    agent.onRoutable(handleRoutable);
    agent.onNotRoutable(handleNotRoutable);
    agent.onOffline(handleAgentOffline);
    agent.onSoftphoneError(handleSoftphoneError);
    agent.onWebSocketConnectionLost(handleWebSocketConnectionLost);
    agent.onWebSocketConnectionGained(handleWebSocketConnectionGained);
    agent.onAfterCallWork(handleAfterCallWork);

    // Agent handlers
    function handleAgentRefresh(agent) {
        console.debug("CDEBUG >> handleAgentRefresh()");
        connect.getLog().info("[agent.onRefresh] Agent data refreshed. Agent status is " + agent.getStatus().name);
        displayAgentStatus(agent.getStatus().name);
    }

    function handleAgentStateChange(agent) {
        console.debug("CDEBUG >> handleAgentStateChange()");
    }

    function handleRoutable(agent) {
        console.debug("CDEBUG >> handleRoutable()");
        connect.getLog().info("[agent.onRoutable] Agent is routable. Agent status is " + agent.getStatus().name);
        displayAgentStatus(agent.getStatus().name);
        document.getElementById ('goAvailableDiv').classList.remove("glowingButton");
    }

    function handleNotRoutable(agent) {
        console.debug("CDEBUG >> handleNotRoutable()");
        connect.getLog().info("[agent.onNotRoutable] Agent is online, but not routable. Agent status is " + agent.getStatus().name);
        displayAgentStatus(agent.getStatus().name);
    }

    function handleAgentOffline(agent) {
        console.debug("CDEBUG >> handleAgentOffline()");
        connect.getLog().info("[agent.onOffline] Agent is offline. Agent status is " + agent.getStatus().name);
        displayAgentStatus(agent.getStatus().name);
        document.getElementById ('goAvailableDiv').classList.add("glowingButton");
    }

    function handleSoftphoneError(agent) {
        console.debug("CDEBUG >> handleSoftphoneError()");
    }

    function handleWebSocketConnectionLost(agent) {
        console.debug("CDEBUG >> handleWebSocketConnectionLost()");
    }

    function handleWebSocketConnectionGained(agent) {
        console.debug("CDEBUG >> handleWebSocketConnectionGained()");
    }

    function handleAfterCallWork(agent) {
        console.debug("CDEBUG >> handleAfterCallWork()");
    }


}