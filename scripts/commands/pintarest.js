module.exports = {
    config: {
        name: "pinterest",
        version: "1.0.0",
        permission: 0,
        credits: "Nayan",
        description: "Image search",
        prefix: true,
        category: "with prefix",
        usages: "pinterest (text) - (amount)",
        cooldowns: 10,
    },

    languages: {
        "vi": {
            "missing": "Vui lòng nhập từ khóa và số lượng, ví dụ: 'phim hoạt hình - 10'"
        },
        "en": {
            "missing": "Please enter the format: '/pinterest anime - 10'"
        }
    },

    start: async function({ nayan, events, args, getLang }) {
        const axios = require("axios");
        const fs = require("fs-extra");
        const path = require("path");

        const keySearch = args.join(" ");
        if (!keySearch.includes("-")) {
            return nayan.reply(getLang("missing"), events.threadID, events.messageID);
        }

        const keySearchs = keySearch.substr(0, keySearch.indexOf('-')).trim();
        const numberSearch = parseInt(keySearch.split("-").pop().trim()) || 6;

        try {
    
            const res = await axios.get(`https://pinterest-ashen.vercel.app/api?search=${encodeURIComponent(keySearchs)}`);
            const data = res.data.data;

            if (!data || data.length === 0) {
                return nayan.reply("No results found.", events.threadID, events.messageID);
            }

            const imgDir = path.join(__dirname, "cache");
            fs.ensureDirSync(imgDir);

            const imgData = [];
            for (let i = 0; i < Math.min(numberSearch, data.length); i++) {
                const imgPath = path.join(imgDir, `image_${i + 1}.jpg`);
                const imgBuffer = (await axios.get(data[i], { responseType: 'arraybuffer' })).data;
                fs.writeFileSync(imgPath, imgBuffer);
                imgData.push(fs.createReadStream(imgPath));
            }

            nayan.reply({
                attachment: imgData,
                body: `${Math.min(numberSearch, data.length)} images for ${keySearchs}`
            }, events.threadID, events.messageID);


            for (let i = 0; i < Math.min(numberSearch, data.length); i++) {
                fs.unlinkSync(path.join(imgDir, `image_${i + 1}.jpg`));
            }

        } catch (error) {
            console.error(error);
            nayan.reply("An error occurred while searching for images. Please try again later.", events.threadID, events.messageID);
        }
    }
};
