node-red-contrib-eedomus
========================

Install
-------

copy folder in node-modules

A venir
-------

Run the following command in your Node-RED user directory - typically `~/.node-red`

    npm install node-red-contrib-eedomus

Usage
-----

Get : result of get in msg.payload

Set : inject value as msg.payload

Example
-------

**With an inject node and a debug node.**

```
[{"id":"d17f174e.ad275","type":"Eedomus Device","z":"339da3f3.fefc7c","name":"","server":"53fd606b.d37a68","deviceid":"446694","operation":"get","x":388.5,"y":107.5,"wires":[["70264157.bf23f"]]},{"id":"5f098da2.49c5a4","type":"inject","z":"339da3f3.fefc7c","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":141.5,"y":119.25,"wires":[["d17f174e.ad275"]]},{"id":"70264157.bf23f","type":"debug","z":"339da3f3.fefc7c","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":642.5,"y":101.5,"wires":[]},{"id":"6b6b8f3d.847588","type":"inject","z":"339da3f3.fefc7c","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":117.5,"y":203.25,"wires":[["18e90b5e.ae1ccd"]]},{"id":"2600e0f2.a87b2","type":"Eedomus Device","z":"339da3f3.fefc7c","name":"","server":"53fd606b.d37a68","deviceid":"185116","operation":"set","x":369,"y":194,"wires":[["1311c810.e14d8"]]},{"id":"18e90b5e.ae1ccd","type":"function","z":"339da3f3.fefc7c","name":"","func":"msg.payload = 100;\nreturn msg;","outputs":1,"noerr":0,"x":263.5,"y":445.75,"wires":[["2600e0f2.a87b2"]]},{"id":"1311c810.e14d8","type":"debug","z":"339da3f3.fefc7c","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":625.5,"y":185.5,"wires":[]},{"id":"53fd606b.d37a68","type":"eedomus-server","z":"","name":"eedomus","ip":"","api_user":"user","api_secret":"pass","api_web":"web"}]
```
