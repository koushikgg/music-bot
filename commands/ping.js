//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "SHOW BOT SILENT PING",
  execute(client, message) {
    message.channel.send("✅|PONG");
  }
};
