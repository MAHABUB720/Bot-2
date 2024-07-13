module.exports.config = {
    name: "Wallpaper",
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
"https://i.imgur.com/S2OWqaz.jpeg","https://i.imgur.com/s3kvQXm.jpeg","https://i.imgur.com/gC9XEnI.jpeg","https://i.imgur.com/evvaibW.jpeg","https://i.imgur.com/nx9Kbje.jpeg","https://i.imgur.com/ktLObSt.jpeg","https://i.imgur.com/iNOxfh5.jpeg","https://i.imgur.com/bWLPhbI.jpeg","https://i.imgur.com/FRvbBPt.jpeg","https://i.imgur.com/rolzoIu.jpeg","https://i.imgur.com/NDxJzix.jpeg","https://i.imgur.com/xt3RLJK.jpeg","https://i.imgur.com/ltWASOe.jpeg","https://i.imgur.com/TBLvPpi.jpeg","https://i.imgur.com/SvsTpYR.jpeg","https://i.imgur.com/dXXAws7.jpeg","https://i.imgur.com/MVAwiuT.jpeg","https://i.imgur.com/gPtLvHk.jpeg","https://i.imgur.com/jJoxItT.jpeg","https://i.imgur.com/MW7FWF5.jpeg","https://i.imgur.com/D0vDMbU.jpeg","https://i.imgur.com/9iH0kpF.jpeg","https://i.imgur.com/UhUvDAD.jpeg","https://i.imgur.com/qhG02sD.jpeg","https://i.imgur.com/Sw9uK8R.jpeg","https://i.imgur.com/iAdfoLe.jpeg","https://i.imgur.com/qdQCssK.jpeg","https://i.imgur.com/nFbMvTK.jpeg","https://i.imgur.com/9fnBmDL.jpeg","https://i.imgur.com/gG4BC02.jpeg","https://i.imgur.com/ChCmSGP.jpeg","https://i.imgur.com/IXzLB2q.jpeg","https://i.imgur.com/nCqH10r.jpeg","https://i.imgur.com/XrQfozG.jpeg","https://i.imgur.com/xQpuGMY.jpeg","https://i.imgur.com/qciZRn2.jpeg","https://i.imgur.com/cxRxL2D.jpeg","https://i.imgur.com/jHja2Pb.jpeg","https://i.imgur.com/Wn5g4Z5.jpeg","https://i.imgur.com/ZUvt5ZT.jpeg"," https://i.imgur.com/HsOMPNk.jpeg","https://i.imgur.com/9Rgg2nb.jpeg","https://i.imgur.com/XCoJxBR.jpeg","https://i.imgur.com/x3AMTvH.jpeg","https://i.imgur.com/pASLAr9.jpeg","https://i.imgur.com/hYLH8kZ.jpeg","https://i.imgur.com/rXYLRKj.jpeg","https://i.imgur.com/CsTHTpJ.jpeg","https://i.imgur.com/DdqZ1UM.jpeg","https://i.imgur.com/iUDrz5e.jpeg","https://i.imgur.com/S1Eisub.jpeg","https://i.imgur.com/jJuBC18.jpeg","https://i.imgur.com/hHE6weG.jpeg","https://i.imgur.com/A7OFmbh.jpeg","https://i.imgur.com/JLZ4SCA.jpeg","https://i.imgur.com/xJZjBD3.jpeg","https://i.imgur.com/ETPil1v.jpeg","https://i.imgur.com/P3dSh6I.jpeg","https://i.imgur.com/H0krEZi.jpeg","https://i.imgur.com/kh9aSq9.jpeg","https://i.imgur.com/KEevl4N.jpeg","https://i.imgur.com/oL4ZufY.jpeg","https://i.imgur.com/9sd0q28.jpeg","https://i.imgur.com/jD88GxZ.jpeg","https://i.imgur.com/MwHsmRZ.jpeg","https://i.imgur.com/T76F1ms.jpeg","https://i.imgur.com/0mEn6cN.jpeg","https://i.imgur.com/G97xpit.jpeg","https://i.imgur.com/6bqXO7g.jpeg","https://i.imgur.com/NfAZS4p.jpeg","https://i.imgur.com/br99xu9.jpeg","https://i.imgur.com/5cbkQ33.jpeg","https://i.imgur.com/opBCKyf.jpeg","https://i.imgur.com/kOIVpAB.jpeg","https://i.imgur.com/BpxePkS.jpeg","https://i.imgur.com/nhX9lHv.jpeg","https://i.imgur.com/U49Xi2E.jpeg","https://i.imgur.com/oBJAddk.jpeg","https://i.imgur.com/0wE9rzY.jpeg","https://i.imgur.com/AYx9b8Z.jpeg","https://i.imgur.com/PCkIJxj.jpeg,","https://i.imgur.com/8XbA9oA.jpeg","https://i.imgur.com/us3XzX1.jpeg","https://i.imgur.com/NCAXmJn.jpeg","https://i.imgur.com/VY1UtoF.jpeg","https://i.imgur.com/8ZZiDBa.jpeg","https://i.imgur.com/x2EqVsz.jpeg","https://i.imgur.com/Gy2SJOM.jpeg"
    ];
    var callback = () => api.sendMessage({ body: `Hᴇʀᴇ ɪs ʏᴏᴜʀ 4ᴋ Qᴜᴀʟɪᴛʏ Aɴɪᴍᴇ Wᴀʟʟᴘᴀᴘᴇʀ.\n\nTag: 𝐂𝐑𝐄𝐃𝐈𝐓: 𝗠𝗔𝗛𝗔𝗕𝗨𝗕 𝗥𝗔𝗛𝗠𝗔𝗡☠︎`, attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/5.jpg")).on("close", () => callback());
}
