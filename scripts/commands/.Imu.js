module.exports.config = {
    name: "imu",
    version: "1.0.0",
    permssion: 0,
    prefix: false,
    credits: "KENLIEPLAYS\\Depressedriyad",
    description: "Talk to Ana",
    category: "Ana",
    usages: "Ana [ask]",
    cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
    mid = messageID;
    const content = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage(" hm bolo bby😸 ...", tid, mid);
    try {
        const res = await axios.get(`https://sim-api-g697.onrender.com/sim?reply=${content}`);
        const respond = res.data.message;
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
            api.sendMessage(respond, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching the data.", tid, mid);
    }
};
