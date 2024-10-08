const axios = require("axios");

module.exports = {
    config: {
        name: "niji",
        version: "1.0",
        permission: 0,
        prefix: true,
        credit: "riyad",
        description: "Generate an image from the provided prompt using the Niji API.",
        category: "Generate image",
        usages: "{prefix}niji [prompt]",
        cooldowns: 4,
    },

    run: async function({ api, event, args }) {
        try {
            const prompt = args.join(" ");
            if (!prompt) {
                return api.sendMessage("Please provide a prompt.", event.threadID, event.messageID);
            }

            const apiUrl = `https://ts-ai-api-shuddho.onrender.com/api/animagine?prompt=${encodeURIComponent(prompt)}`;
            const { data: imageBuffer } = await axios.get(apiUrl, { responseType: "arraybuffer" });

            return api.sendMessage({
                attachment: imageBuffer,
                body: "Here is the generated image:"
            }, event.threadID, event.messageID);
        } catch (error) {
            console.error("Error generating image:", error);
            return api.sendMessage("An error occurred while generating the image. Please try again later.", event.threadID, event.messageID);
        }
    }
};
