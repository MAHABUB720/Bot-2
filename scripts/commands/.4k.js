module.exports = {
config: {
    name: "4k",
    version: "1.0.0",
    permission: 0,
    credits: "Nayan",
    description: "",
    prefix: 'awto',
    category: "prefix",
    usages: "[model]",
    cooldowns: 10,
    dependencies: {
       'nayan-server': ''
    }
},





start: async function({ nayan, events, args, NAYAN}) {
  
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const {upscale} = require('nayan-server')
          if (events.type !== "message_reply") return nayan.reply("[❗]➜ You must reply to a photo", events.threadID, events.messageID);
        if (!events.messageReply.attachments || events.messageReply.attachments.length == 0) return nayan.reply("[❗]➜ You must reply to a photo", events.threadID, events.messageID);
        if (events.messageReply.attachments[0].type != "photo") return nayan.reply("[❓]➜ This is not an image", events.threadID, events.messageID);
  const content = (events.type == "message_reply") ? events.messageReply.attachments[0].url : args.join(" ");
  
  const mod = args[0] || "1";
  
const model = mod
  try {
const res = await upscale(content, model)
  console.log(res)
  NAYAN.react("✅")
  const img1 = res.image_url
  const job = res.job_id
        var msg = [];

  const pic = (
    await axios.get(`https://images.prodia.xyz/${job}.png`,
      { responseType: 'stream' }
    )
  ).data;

        {
            msg += `✅HERE YOUR PHOTO`
        }

        return nayan.reply({
            body: msg,
            attachment: pic

        }, events.threadID, events.messageID);
     } catch (err) {
     NAYAN.react("❌")
      nayan.reply(`🔰Use ${global.config.PREFIX}${this.config.name} [model]\n🔰Example:${global.config.PREFIX}${this.config.name} 1\n\n🔥Total Model limit 2...`, events.threadID, events.messageID);  
     }
  }
