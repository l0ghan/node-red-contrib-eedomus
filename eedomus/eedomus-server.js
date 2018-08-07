module.exports = function (RED) {
    function EedomusServerNode(n) {
        RED.nodes.createNode(this, n)
        var node = this
        node.ip = n.ip
        node.api_user = n.api_user
        node.api_secret = n.api_secret
        node.api_web = n.api_web
    }
    RED.nodes.registerType('eedomus-server', EedomusServerNode)
}