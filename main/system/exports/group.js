require("../../settings/config.js")
const textGroup =
`\`</> Access in group </>\`

- 🧬 | Lobby  
> Pembahasan seputar off topik dan hal seru lainnya.  
https://chat.whatsapp.com/BmncwJv2nUvIaXb79rCulV  

- 👨🏻‍💻 | Coding Lab  
> Pemahaman dasar tentang coding dan implementasi.  
https://chat.whatsapp.com/HsstAN3tV490qSeiqdxyPZ  

- 👁️‍🗨️ | Hack Lab  
> Eksplorasi dunia keamanan cyber dan teknik hacking etis.  
https://chat.whatsapp.com/CXC4n1JEvSxC98XopBzCrI  

- 🤖 | Bots Lab  
> Pengembangan bot WA dan sistem otomatisasi lainnya.  
https://chat.whatsapp.com/ChlvOz4Wnbb3QVbbKxR6vz  

- 🌐 | WEB 3 Lab  
> Diskusi dan eksplorasi teknologi blockchain, cryptocurrency, dan aplikasi terdesentralisasi (dApps). 
https://chat.whatsapp.com/BZCi1FlNcgq1NLemMGLEC4  

- 🚧 | Cyber-Crime Lab  
> Diskusi dan kerjasama tentang cara menangani kejahatan dan penipuan dalam dunia digital.
https://chat.whatsapp.com/LcZseChSWarHLNyxtLwbjF


${global.footer}`

exports.textGroup = textGroup

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