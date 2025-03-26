require("../../settings/config.js")
const textSfw =
` ☰  *\`ʀᴀɴᴅᴏᴍ sғᴡ\`*
∘╌────────────────╌∘
  ▸ /sfw waifu
  ▸ /sfw neko
  ▸ /sfw shinobu
  ▸ /sfw megumin
  ▸ /sfw bully
  ▸ /sfw cuddle
  ▸ /sfw cry
  ▸ /sfw hug
  ▸ /sfw awoo
  ▸ /sfw kiss
  ▸ /sfw lick
  ▸ /sfw pat
  ▸ /sfw smug
  ▸ /sfw bonk
  ▸ /sfw yeet
  ▸ /sfw blush
  ▸ /sfw smile
  ▸ /sfw wafe
  ▸ /sfw highfive
  ▸ /sfw handhold
  ▸ /sfw nom
  ▸ /sfw bite
  ▸ /sfw glomp
  ▸ /sfw slap
  ▸ /sfw kill
  ▸ /sfw kick
  ▸ /sfw happy
  ▸ /sfw wink
  ▸ /sfw poke
  ▸ /sfw dance
  ▸ /sfw cringe


${global.footer}`

exports.textSfw = textSfw

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