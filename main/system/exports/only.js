require("../../settings/config.js")
const { hidetext } = require("./hidetext.js")
const textOnly =
`Note : ${hidetext}

- Only Group:
> This feature can only be used within WhatsApp groups. Messages or commands using this feature will not work if sent privately.

- Only Private:
> This feature is specifically designed for private chats with the bot. Commands using this feature will not work if sent within a group.

- Only Developer:
> This feature can only be used by bot developers, even moderators and premium users cannot use this feature.

- Only Moderator Users:
> This feature can only be accessed by users with the role of bot moderator. Only they can use this command or feature.

- Only Premium Users:
> This feature is exclusive to premium users. To access this feature, users must subscribe to the premium service first.

- Only Group Admins:
> This feature can only be used by group admins. Only admins have full authorization to use this command or feature.

- Bot is Not Admin:
> Currently, the bot does not have admin access in the group. Therefore, some features that require admin access may not function properly.


${global.footer}`

exports.textOnly = textOnly

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