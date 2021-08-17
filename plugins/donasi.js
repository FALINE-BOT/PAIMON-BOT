let handler = async m => m.reply(`
┌〔 Donasi • Pulsa 〕
├ Axis [083830172470]
└────

┌〔 Donasi • Emoney 〕
├ https://saweria.co/rhishna
└────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
