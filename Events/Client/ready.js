const { loadCommands } = require("../../Handlers/commandHandler.js");

module.exports = { 

    name: "ready",
    once: true,

    execute(client){
        console.log("EL BOT ESTÁ INICIALIZADO");

        loadCommands(client);
    }

}