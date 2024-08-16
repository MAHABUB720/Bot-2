module.exports.config = {
    name: "pinterest",
    version: "1.0.0",
    permssion: 0,
    credits: "senthanh",
    description: "Image search",
    prefix: true,
    category: "Search",
    usages: "[Text] - [number]",
    cooldowns: 0,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const path = require("path");

    const keySearch = args.join(" ");
    if (!keySearch.includes("-")) {
        return api.sendMessage(
            `Please enter in the format: ${global.config.PREFIX}${this.config.name} images - 10 (or the number of images you want to retrieve)`,
            event.threadID,
            event.messageID
        );
    }

    const keySearchs = keySearch.substr(0, keySearch.indexOf('-')).trim();
    const numberSearch = parseInt(keySearch.split("-").pop().trim()) || 6;

    try {
        const res = await axios.get(`https://pinterest-ashen.vercel.app/api?search=${encodeURIComponent(keySearchs)}`);
        const data = res.data.data;

        if (!data || data.length === 0) {
            return api.sendMessage("No results found.", event.threadID, event.messageID);
        }

        const imgDir = path.join(__dirname, "data");
        fs.ensureDirSync(imgDir);

        const imgData = [];
        for (let i = 0; i < Math.min(numberSearch, data.length); i++) {
            const imgPath = path.join(imgDir, `image_${i + 1}.jpg`);
            const imgBuffer = (await axios.get(data[i], { responseType: 'arraybuffer' })).data;
            fs.writeFileSync(imgPath, imgBuffer);
            imgData.push(fs.createReadStream(imgPath));
        }

        api.sendMessage({
            attachment: imgData,
            body: `${Math.min(numberSearch, data.length)} search results for keyword: ${keySearchs}`
        }, event.threadID, event.messageID);

        for (let i = 0; i < Math.min(numberSearch, data.length); i++) {
            fs.unlinkSync(path.join(imgDir, `image_${i + 1}.jpg`));
        }

    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while searching for images. Please try again later.", event.threadID, event.messageID);
    }
};
