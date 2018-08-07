module.exports = function (RED) {
    var request = require("request");
    function EedomusGetCommand(n) {
        RED.nodes.createNode(this, n)
        var node = this
        node.server = RED.nodes.getNode(n.server)
        node.deviceid = n.deviceid
        node.on('input', function (msg) {
            if (node.server.api_web == true)
            {
                node.url = "https://api.eedomus.com/get?api_user=" + node.server.api_user + "&api_secret=" + node.server.api_secret + "&action=periph.caract&periph_id=" + node.deviceid;
                console.log(node.url );
            }
            else if (node.server.api_web == false)
            {
                node.url = "http://"+node.server.ip+"/get?api_user=" + node.server.api_user + "&api_secret=" + node.server.api_secret + "&action=periph.caract&periph_id=" + node.deviceid;
                console.log(node.url);
            }
            else
            {
                callback("eedomus.error.invalid-param");
                return;
            }
            if (node.url) {
                request.get(node.url, function (error, result, data) {
                    msg.payload = JSON.parse(data).body;
                    if (error) {
                         callback(error);
                         return;
                     }
                     try {
                        node.send(msg);
                     } catch (e) {
                         callback("eedomus.error.invalid-json");
                         return;
                     }
                    //console.log('error:', error); // Print the error if one occurred
                    //console.log('statusCode:', result && result.statusCode); // Print the response status code if a response was received
                    //console.log(data); // Print the HTML for the Google homepage.
                    
                });
            } else {
                callback("eedomus.error.invalid-location");
            }
        });
    }
    RED.nodes.registerType('Eedomus Get Device', EedomusGetCommand)
}
