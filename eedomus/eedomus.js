module.exports = function (RED) {
    var request = require("request");
    function EedomusCommand(n) {
        RED.nodes.createNode(this, n)
        var node = this
        node.server = RED.nodes.getNode(n.server)
        node.deviceid = n.deviceid
        node.operation = n.operation
        node.on('input', function (msg) {
            if (node.server.api_web == "web" && node.operation == "get")
            {
                node.url = "https://api.eedomus.com/get?api_user=" + node.server.api_user + "&api_secret=" + node.server.api_secret + "&action=periph.caract&periph_id=" + node.deviceid;
            }
            else if (node.server.api_web == "local" && node.operation == "get")
            {
                node.url = "http://"+node.server.ip+"/api/get?api_user=" + node.server.api_user + "&api_secret=" + node.server.api_secret + "&action=periph.caract&periph_id=" + node.deviceid;
            }
            else if (node.server.api_web == "web" && node.operation == "set")
            {
                node.url = "https://api.eedomus.com/set?api_user=" + node.server.api_user + "&api_secret=" + node.server.api_secret + "&action=periph.value&periph_id=" + node.deviceid + "&value=" +msg.payload;
            }
            else if (node.server.api_web == "local" && node.operation == "set") 
            {
                node.url = "http://" + node.server.ip + "/api/set?api_user=" + node.server.api_user + "&api_secret=" + node.server.api_secret + "&action=periph.value&periph_id=" + node.deviceid + "&value=" +msg.payload;
            }
            else
            {
                console.log("error");
            }
            if (node.url) {
                console.log(node.url );
                request.get(node.url, function (error, result, data) {
                    msg.payload = JSON.parse(data).body;
                    if (error) {
                        console.log("erreur sur le retour de la requete web");
                         return;
                     }
                     try {
                         node.send(msg);
                     } catch (e) {
                         console.log("erreur sur l envoie du msg");
                         return;
                     }
                });
            }
             else {
                console.log("erreur sur url");
            }
        });
    }
    RED.nodes.registerType('Eedomus Device', EedomusCommand)
}
