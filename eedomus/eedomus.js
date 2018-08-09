module.exports = function (RED) {
    var request = require("request");
    function EedomusCommand(n) {
        RED.nodes.createNode(this, n)
        var node = this
        node.server = RED.nodes.getNode(n.server)
        node.deviceid = n.deviceid
        node.on('input', function (msg) {
            if (node.server.api_web == true)
            {
                node.url = "https://api.eedomus.com/get?api_user=" + node.server.api_user + "&api_secret=" + node.server.api_secret + "&action=periph.caract&periph_id=" + node.deviceid;
                //console.log(node.url );
            }
            else
            {
                node.url = "http://"+node.server.ip+"/get?api_user=" + node.server.api_user + "&api_secret=" + node.server.api_secret + "&action=periph.caract&periph_id=" + node.deviceid;
                //console.log(node.url);
            }
            if (node.url) {
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
                    //console.log('error:', error); // Print the error if one occurred
                    //console.log('statusCode:', result && result.statusCode); // Print the response status code if a response was received
                    //console.log(data); // Print the HTML for the Google homepage.
                    
                });
            } else {
                console.log("erreur sur url");
            }
        });
    }
    RED.nodes.registerType('Eedomus Device', EedomusCommand)
}
