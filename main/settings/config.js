const fs = require("fs")
const chalk = require("chalk")
const path = require('path');
const { hidetext } = require("../system/exports/hidetext.js")
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'package.json'), 'utf8'));


//--------------------------× GLOBAL NAME ×--------------------------//
global.devName = "Maxz"
global.botName = packageJson.name


//------------------------× GLOBAL NUMBER ×-----------------------//
global.owner = ["6289508899033", ""] // (62) Country code
global.devNumber = "6289508899033" // No limit


//----------------------------× GLOBAL LINK ×---------------------------//
global.sosmed = "https://linktr.ee/dcodemaxz"
global.groupUrl = "https://chat.whatsapp.com/JfpGsd5GPh5EzvRVjm54tx"


//-----------------------× GLOBAL VARIABLE ×----------------------//
global.session = "vikaru"
global.version = packageJson.version
global.notify = "*「 ⚡ 」BOT CONNECTED*"
global.author = "© dcodemaxz"
global.packname = "▸ ℣ikaru-Md"
global.footer = "> *`ᴄʀᴇᴅɪᴛ :`* ©2021 - 2025"


//---------------------× GLOBAL NEWSLETTER ×--------------------//
global.newsletter = {
jid: "120363279751315563@newsletter",
name: "Vikaru-Md | © Max"
}


//-----------------------------× GLOBAL APIs ×----------------------------//
global.api = {
url: "https://api.lolhuman.xyz/api/",
key: "e4ea69cba864dfa7d4968fdb"
}


//-----------------------× GLOBAL MESSAGE ×----------------------//
global.mess = {
gc: "[ 🚫 ] ▸ ONLY GROUP",
pc: "[ 🚫 ] ▸ ONLY PRIVATE",
dev: "[ 🚫 ] ▸ ONLY DEVELOPER",
mod: "[ 🚫 ] ▸ ONLY MODERATOR",
prem: "[ 🚫 ] ▸ ONLY PREMIUM",
admin: "[ 🚫 ] ▸ ONLY ADMINS",
botadmin: "[ ❗ ] ▸ BOT NOT ADMIN",
done: "[ ✓ ] ▸ Executed complete",
wait: "[ ~ ] ▸ Execution processed",
err: "[ ! ] ▸ Executed error"
}

//---------------------------× GLOABL TEXT ×---------------------------//
global.textWelcome =
`Selamat datang kak, jangan lupa baca deskripsi grup yaaaah... 😉

> ▸ \`/group\` < _group list_`


// Refreshing File After Recode/Editing
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log()
console.log(`› [ ${chalk.black(chalk.bgBlue(" Update Files "))} ] ▸ ${__filename}`)
delete require.cache[file]
require(file)
})