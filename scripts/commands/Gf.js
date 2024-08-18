const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: "gf",
  version: "1.0.0",
  permission: 0,
  credits: "MR-IMRAN",
  description: "",
  prefix: true, 
  category: "no prefix", 
  usages: "fun",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};
module.exports.handleEvent = async function ({
  api: _0x17b1ce,
  event: _0x23da8f
}) {
  if (!(_0x23da8f.body.indexOf("BOT GF DE") === 0 || _0x23da8f.body.indexOf("bot gf de") == 0 || _0x23da8f.body.indexOf("Bot gf de") == 0 || _0x23da8f.body.indexOf("Gf daw") == 0 || _0x23da8f.body.indexOf("Gf de") == 0 || _0x23da8f.body.indexOf("Bot amare gf de") == 0 || _0x23da8f.body.indexOf("Bot Amare Gf De") == 0 || _0x23da8f.body.indexOf("Bot gf daw") == 0 || _0x23da8f.body.indexOf("Bot amare ekta gf daw") == 0 || _0x23da8f.body.indexOf("I need gf") == 0 || _0x23da8f.body.indexOf("Amake ekta gf daw") == 0 || _0x23da8f.body.indexOf("need gf") === 0)) {
    return;
  }
  const _0x514bf8 = _0x23da8f.body.split(/\s+/);
  _0x514bf8.shift();
  try {
    const _0x34f79c = await axios.get("https://gf-imran.onrender.com/imugf");
    const _0x334b95 = _0x34f79c.data.data;
    const _0x21e54a = _0x334b95.title;
    const _0x283c1e = _0x334b95.url;
    const _0x5ea1b3 = _0x34f79c.data.author.name;
    const _0xf8e639 = await axios.get(_0x283c1e, {
      'responseType': "stream"
    });
    const _0x69f04d = _0xf8e639.data;
    const _0xb12ca7 = __dirname + "/cache/image.jpg";
    const _0x3cd1b8 = fs.createWriteStream(_0xb12ca7);
    _0x69f04d.pipe(_0x3cd1b8);
    _0x3cd1b8.on("finish", () => {
      const _0x232adc = "°\n\n__" + _0x21e54a + "\n\n✨🌺" + _0x5ea1b3 + "..!🍂";
      return _0x17b1ce.sendMessage({
        'body': _0x232adc,
        'attachment': fs.createReadStream(_0xb12ca7)
      }, _0x23da8f.threadID, (_0x2edcc6, _0x1eb0aa) => {
        if (_0x2edcc6) {
          console.error("Error sending the video:", _0x2edcc6);
        }
        fs.unlinkSync(_0xb12ca7);
      });
    });
  } catch (_0x394b25) {
    console.error("Error fetching and sending the video:", _0x394b25);
    return _0x17b1ce.sendMessage("An error occurred while fetching and sending the video.", _0x23da8f.threadID);
  }
};
module.exports.run = async function ({
  api: _0x129454
}) {}
