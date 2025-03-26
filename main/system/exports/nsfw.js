require("../../settings/config.js")
const textNsfw =
` ☰  *\`ʀᴀɴᴅᴏᴍ ɴsғᴡ\`*
∘╌────────────────╌∘
  ▸ /nsfw waifu
  ▸ /nsfw neko
  ▸ /nsfw trap
  ▸ /nsfw blowjob


${global.footer}`

exports.textNsfw = textNsfw

// Refreshing File After Recode/Editing
const fs = require('fs')
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log()
console.log(`› [ ${chalk.black(chalk.bgBlue(' Update Files '))} ] - ${__filename}`)
delete require.cache[file]
require(file)
})