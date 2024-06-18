module.exports.config = {
	name: "Test1",
	version: "1.0.0",
	permssion: 0,
  prefix: true,
  credits: "S H A D O W",
	description: "صور خلفيات انمي عشوائية",
  category: "الــتــرفــيــه والــالــعــاب",
	usages: " ",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://jrt-api.nguyenhaidang.ml/wallpaper').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/shiba.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/shiba.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/shiba.${ext}`)).on("close", callback);
			})
