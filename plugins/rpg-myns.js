import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
m.reply(`
βββγπΦΌ αΉππ―πππππ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββππ½ππΌπ΄ππΎ π³π΄ ππ΄ππΈπ΄:
ββπ${sn} 
βββββΧβΧβΧβΧβββ
`.trim())}
handler.help = ['myns']
handler.tags = ['xp']
handler.command = /^(myns|ceksn)$/i
export default handler
