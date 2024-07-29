/**
 * ******************************************************
 * Copyright (C) 2022 VMware, Inc. All rights reserved.
 * *******************************************************
 *
 * @format
 */

const MessageType = {
	ERROR: 50,

	LOGIN: 200,
	CALL_CTRL: 201,
	TEXT_MSG: 202,
	SIGNALING: 203
};

if (typeof module === 'object' && module.exports) {
	module.exports = MessageType;
} else {
	window.commonMsgType = MessageType;
}
