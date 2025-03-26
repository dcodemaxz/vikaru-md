require("../../settings/config.js")
const textVoice =
` ☰  *\`ᴠᴏɪᴄᴇ ᴍᴇɴᴜ\`*
∘╌────────────────╌∘
  ▸ Vika
  ▸ Ohayo
  ▸ Oyasumi
  ▸ Sepuh
  ▸ Yare yare
  ▸ Ara ara
  ▸ Lopyou
  ▸ Gambare gambare
  ▸ Asautegondalimas
  ▸ Assalamualaikum
  ▸ Moshi mosh
  ▸ Niko nikoni
  ▸ Gey
  ▸ Baka
  ▸ Goblok


${global.footer}`

exports.textVoice = textVoice

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