# Sample Electron App for VMware Horizon WebRTC Redirection SDK

## Disclaimer
### This Electron sample application(including both client and server) is not an official VMware product.
### The sample application itself does not contain any open source or third-party source code or library.
### To build and run the application, you might need some NodeJS packages(with their own licenses) which are specified in those 'package.json' files. But you could have you own implementation as well.


## How to run

### Set up your web server(https)
1. You need to set up a web server to serve the index.html for the Electron app. A static file server will be good enough.
2. Copy or link the folders 'sdk' and 'common' into client folder. Make sure 'index.html' and folder 'sdk' and 'common' are under the same file hierarchy like:
client
├── index.html

├── common

|   ├── constant.js

├── sdk

|   ├── HorizonSDKforWebRTCRedir.js

├── app

### Set up your web socket server(wss)
0. Make sure you have NodeJS(latest stable version will be good enough) installed in your environment.
1. Copy the 'server' and 'common' folder to wherever you want and prepare the SSL key and certificate(self signed certificate will be good enough) for the WSS server.
2. Set the file path of the SSL key and certificate in the file: ./server/wsServer.js.
3. Enter ./server folder, execute: 'npm install' and then 'npm start' (or node wsServer.js)

### Your web server and web socket server could be the same machine and share same pair of key and certificate.

### Configure client and run
0. Make sure you have NodeJS(latest stable version will be good enough) installed in your environment.
1. Set the link url for index page in ‘./client/serverInfo.json’. depends on how you configure your web server in steps above. Example: "pageUlr": "https://192.168.1.101/sample/index.html"
2. Set the Web Socket server ulr for ‘callServerUrl’ in ‘./client/ serverInfo.json’, depends on how you configure your web socket server in steps above. Example: "callServerUrl": “wss://192.168.1.200:8443”
3. Copy ./client folder to wherever you want(you might only need main.js, preload.js and packsage.json, because other files will be loaded from your web server above).
4. Enter ./client folder, execute: 'npm start'.

### You can also build the client app as a regular Electron App: https://www.electronjs.org/docs/latest/tutorial/quick-start#package-and-distribute-your-application


### Make a call
1. If you are running the app on VDI environment, it will try to connected to Horizon Agent automatically. And once it get connected, a green label will show the status.
2. Clicking 'Get Device List' button could get list of local audio/video devices.
3. Clicking 'Get Self View' button could get a preview of youself if you have available camera.
4. Input a string as your user name and click 'Login' button. It will make connected to the web socket server in the step above.
5. Type in another user's name and click 'Call' button.

#### In step 4, if you use same user name to login, the previous one will be disconnected automatically.
#### In step 5, you should have an different user use the same app login and ready to answer the call.
