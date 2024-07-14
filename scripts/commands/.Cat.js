module.exports.config = {
    name: "cat",
    version: "1.0.0",
    permssion: 0,
    prefix: true,
    credits: "MAHABUB RAHMAN",
    description: "anime WALLPAPER ",
    category: "random-img",
    usages: "send message",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {

    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/c9Zjchq.jpeg","https://i.imgur.com/dSiYEBw.jpeg","https://i.imgur.com/6jGfZla.jpeg","https://i.imgur.com/4WB6Z1F.jpeg","https://i.imgur.com/29DU6Ao.jpeg","https://i.imgur.com/G6tt3F7.jpeg","https://i.imgur.com/fnv5w0y.jpeg","https://i.imgur.com/5njChYx.jpeg","https://i.imgur.com/xjY8nct.jpeg","https://i.imgur.com/XqLKxKL.jpeg","https://i.imgur.com/4piXEad.jpeg","https://i.imgur.com/HSDMXF6.jpeg"    ];
    var callback = () => api.sendMessage({ body: `Hᴇʀᴇ ɪs ʏᴏᴜʀ 𝙲𝚊𝚝 𝙿𝚒𝚌𝚝𝚞𝚛𝚎 𝙱𝚢♲︎︎ «𝙼𝙰𝙷𝙰𝙱𝚄𝙱 𝙱𝙷𝙰𝙸𝚈𝙰».\n\n 🐈😺`, attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/5.jpg")).on("close", () => callback());
}
