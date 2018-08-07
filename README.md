node-red-contrib-eedomus
========================

Install
-------

Run the following command in your Node-RED user directory - typically `~/.node-red`

    npm install node-red-contrib-eedomus

Usage
-----

Example
-------

**With an inject node and a debug node.**

```
[{"id":"9d09da39.13a858","type":"inject","z":"339da3f3.fefc7c","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":93.5,"y":74.25,"wires":[["d124e852.e881e8"]]},{"id":"d124e852.e881e8","type":"Eedomus Get Device","z":"339da3f3.fefc7c","name":"","server":"","deviceid":"446633","x":287.5,"y":71,"wires":[["ea65e693.18ee3"]]},{"id":"ea65e693.18ee3","type":"debug","z":"339da3f3.fefc7c","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":534.5,"y":39.5,"wires":[]}]
```
