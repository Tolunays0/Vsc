const { ActivityType } = require('discord.js');
const config = require("../config.json");
module.exports = {
    name: 'ready',
    once: true, 
    run: async(client) => {
        console.log(`${client.user.tag} Aktif! 💕`);
        client.user.setPresence({
            activities: [{ name: `www.youtube.com/@Wraithsdev`, type: ActivityType.Watching }],
            status: 'idle',
        });
    }
};
