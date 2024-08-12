module.exports.config = {
  name: "porn",
  version: "1.0.1",
  permssion: 0,
  prefix: true,
  credits: "Nayan",
  description: "magic",
  category: "moja",
  usages: "pornhub",
  cooldowns: 10,
  dependencies: {
    "request":"",
     "axios":"",
     "fs-extra":""
  }
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const { messageID, threadID } = event;



    let np = args.join(" ");
  var query = args.join(" ");
  api.sendMessage(`searching for ${query} porn video`, event.threadID, event.messageID);

 try {
    const res = await axios.get(`https://df7ee684-6e4f-4076-9c09-cb8a2146a08b-00-f9hwkpexdo4f.sisko.replit.dev:3000/pron?search=bigg ass`);
    var data = res.data.data;
    var msg = [];
    let img1 = `${res.data.normal}`;
   //hd: res.data.best
   //normal: res.data.normal

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/xnxx.mp4", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/xnxx.mp4"));

    {
        msg += `✅YOUR PORN VIDEO COLLECTED SUCCESSFULL\
    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
} catch (err) {
    api.sendMessage(`error`, event.threadID, event.messageID);  
   }
};
