module.exports = async ({ api, event }) => {
  const logger = require('./CYBER/catalogs/Mhabubc.js')
  
  const configCustom = {
    autosetbio: {
      status: true,
      bio: `prefix : ${global.config.PREFIX}`,
      note: 'automatically change the bot bio.'
    },
    notification: {
      status: true,
      time: 39, // 39 minutes
      note: 'bot will update you on his informations like all users, all groups, all operators, all admins every 30 minutes'
    },
    greetings: {
      status: false,
      morning: `goodmorning everyone, have a nice day.`,
      afternoon: `goodafternoon everyone, don't forget to eat your lunch.`,
      evening: `goodevening everyone, don't forget to eat.`,
      sleep: `goodnight everyone, time to sleep.`,
      note: 'greetings every morning, afternoon and evening. the timezone is located in Asia/Dhaka'
    },
    reminder: {
      status: false,
      time: 30, // 30 minutes
      msg: '╭─────────────────╮\n  🌸 𝐄𝐯𝐞𝐫𝐲 𝐌𝐮𝐬𝐥𝐢𝐦𝐬 𝐈𝐝𝐞𝐧𝐭𝐢𝐭𝐲 🌸\n╰─────────────────╯\n\n𝙽𝚊𝚖𝚎                     : 𝐌𝐮𝐬𝐥𝐢𝐦.\n𝙵𝚊𝚝𝚑𝚎𝚛•𝚜 𝙽𝚊𝚖𝚎    : 𝐀𝐝𝐨𝐦 (আ:)\n𝙲𝚛𝚎𝚊𝚝𝚘𝚛               : 𝐀𝐥𝐥𝐚𝐡\n𝙸𝚍𝚎𝚊𝚕                   : 𝐌𝐮𝐡𝐚𝐦𝐦𝐚𝐝 (সা.) \n𝙷𝚘𝚕𝚢 𝙱𝚘𝚘𝚔           : 𝐐𝐮𝐫𝐚𝐧 \n𝚁𝚎𝚕𝚒𝚐𝚒𝚘𝚗            : 𝐈𝐬𝐥𝐚𝐦 \n𝙸𝚍𝚎𝚗𝚝𝚒𝚝𝚢            : لَا إِلٰهَ إِلَّا الله مُحَمَّدٌ رَسُولُ الله• \n𝙷𝚘𝚋𝚋𝚒𝚎𝚜               : 𝐍𝐚𝐦𝐚𝐳 𝟓 𝐭𝐢𝐦𝐞𝐬 𝐚 𝐝𝐚𝐲 \n𝙿𝚛𝚎𝚜𝚎𝚗𝚝 𝙰𝚍𝚍𝚛𝚎𝚜𝚜           : 𝐃𝐮𝐧𝐢𝐲𝐚 \n𝙿𝚎𝚛𝚖𝚊𝚗𝚎𝚗𝚝 𝙰𝚍𝚍𝚛𝚎𝚜𝚜      : 𝐉𝐚𝐧𝐧𝐚𝐭 (𝐈𝐧 𝐬𝐡𝐚 𝐚𝐥𝐥𝐚𝐡)',
      note: 'this is a reminder for 40 minutes, you can disabled it by setting the status to false'
    },
    autoDeleteCache: {
      status: true,
      time: 10, // 10 minutes
      note: 'auto delete caches, kindly set the status to true, if you dont want to delete caches, set the status to false.'
    },
    autoRestart: {
      status: true,
      time: 40, // 40 minutes
      note: 'to avoid problems, enable periodic bot restarts, set the status to false if you want to disable auto restart function.'
    },
    accpetPending: {
      status: false,
      time: 10, // 10 minutes
      note: 'approve waiting messages after a certain time, set the status to false if you want to disable auto accept message request.'
    }
  }

  function autosetbio(config) {
    if (config.status) {
      try {
        api.changeBio(config.bio, (err) => {
          if (err) {
            logger(`having some unexpected error : ${err}`, 'setbio')
          }; return logger(`changed the bot bio into : ${config.bio}`, 'setbio')
        })
      } catch (error) {
        logger(`having some unexpected error : ${error}`, 'setbio')
      }
    }
  }
  function notification(config) {
    if (config.status) {
      setInterval(async () => {
        const operator = global.config.OPERATOR[0];
        api.sendMessage(`bot information\n\nusers : ${global.data.allUserID.length}\ngroups : ${global.data.allThreadID.length}\noperators : ${global.config.OPERATOR.length}\nadmins : ${global.config.ADMINBOT.length}`, operator)
      }, config.time * 60 * 1000)
    }
  }
  function greetings(config) {
    if (config.status) {
      try {
      const nam = [
        {
          timer: '6:00:00 AM',
          message: [`${config.morning}`]
        },
        {
          timer: '12:00:00 AM',
          message: [`${config.afternoon}`]
        },
        {
          timer: '6:00:00 PM',
          message: [`${config.evening}`]
        },
        {
          timer: '10:00:00 PM',
          message: [`${config.sleep}`]
        }
      ];
        setInterval(() => {
const r = a => a[Math.floor(Math.random()*a.length)];
if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => api.sendMessage(r(á.message), i));
}, 1000);
      } catch (error) {
        logger(`having some unexpected error : ${error}`, 'greetings')
      }
    }
  }
  function reminder(config) {
    if (config.status) {
      setInterval(async () => {
        let allThread = global.data.allThreadID || [];
        await new Promise(resolve => {
          allThread.forEach((each) => {
            try {
              api.sendMessage(config.msg, each, (err, info) => {
                if (err) {
                  logger(`having some unexpected error : ${err}`, 'reminder')
                }
              })
            } catch (error) {
              logger(`having some unexpected error : ${error}`, 'reminder')
            }
          })
        })
      }, config.time * 60 * 1000)
    }
  }
  function autoDeleteCache(config) {
    if(config.status) {
      setInterval(async () => {
        const { exec } = require('child_process');
        exec('rm -rf ../../scripts/commands/cache && mkdir -p ../../scripts/commands/cache && rm -rf ../../scripts/events/cache && mkdir -p ../../scripts/events/cache', (error, stdout, stderr) => {
        if (error) {
          logger(`error : ${error}`, "cache")
          return;
        }
        if (stderr) {
          logger(`stderr : ${stderr}`, "cache")
          return;
        }
        return logger(`successfully deleted caches`, "cache")
        })
      }, config.time * 60 * 1000)
    }
  }
  function autoRestart(config) {
    if(config.status) {
      setInterval(async () => {
        logger(`auto restart is processing, please wait.`, "Mahabub")
        process.exit(1)
      }, config.time * 60 * 1000)
    }
  }
  function accpetPending(config) {
    if(config.status) {
      setInterval(async () => {
          const list = [
              ...(await api.getThreadList(1, null, ['PENDING'])),
              ...(await api.getThreadList(1, null, ['OTHER']))
          ];
          if (list[0]) {
              api.sendMessage('this thread is automatically approved by our system.', list[0].threadID);
          }
      }, config.time * 60 * 1000)
    }
  }

autosetbio(configCustom.autosetbio)
notification(configCustom.notification)
greetings(configCustom.greetings)
reminder(configCustom.reminder)
autoDeleteCache(configCustom.autoDeleteCache)
autoRestart(configCustom.autoRestart)
accpetPending(configCustom.accpetPending)
	
};
