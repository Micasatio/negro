import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/lkch77g.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
βγπΦΌ αΉBlackπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γ
ββ ΰΉΫ£ΫΝ‘ΝΫππ¨π₯πΰ¦ΰ§£Ν‘Να·Φ³α· ${taguser}πβ¨ 
ββ π π΅π΄π²π·π°: ${week}, ${date}
ββ πππΈπ΄πΌπΏπΎ π°π²ππΈππΎ: ${uptime}
ββ π ππππ°ππΈπΎπ: ${rtotalreg}
βββββΧβΧβΧβΧβββ
βββγππππππππππ πππγβ
βββ${usedPrefix}terminos y condiciones y privacidad
ββπΊ${usedPrefix}grupos
ββπ»${usedPrefix}cuentaserikabot
ββπΊ${usedPrefix}estado
ββπ»${usedPrefix}infobot
ββπΊ${usedPrefix}donar
ββπ»${usedPrefix}listagrupos
ββπΊ${usedPrefix}velocidad
ββπ»${usedPrefix}owner
ββπΊBot_ (π’π π π ππ πππππππ)
βββ${usedPrefix}join enlace / link / url>
βββββΧβΧβΧβΧβββ
βββγπ±πππγβ
ββπͺ΄${usedPrefix}balance
ββπ${usedPrefix}claim
ββπ±${usedPrefix}top
ββπ₯${usedPrefix}levelup
ββπ${usedPrefix}myns
ββπͺ΄${usedPrefix}perfil
ββπ${usedPrefix}work
ββπ±${usedPrefix}minar
ββπ₯${usedPrefix}buy
ββπ${usedPrefix}buyall
ββπͺ΄${usedPrefix}transfer <tipo> <cantidad> <@tag
ββπ±${usedPrefix}verificar
ββπ±${usedPrefix}unreg <numero de serie>
βββββΧβΧβΧβΧβββ
ββγπ»ππππππππππγ
ββπ${usedPrefix}facebook <enlace / link / url
ββποΈ${usedPrefix}instagram <enlace / link / url
ββποΈ${usedPrefix}mediafire <enlace / link / url
ββπ°${usedPrefix}instagram <enlace / link / url
ββπ${usedPrefix}gitclone <enlace / link / url
ββπ${usedPrefix}tiktok <enlace / link / url
ββποΈ${usedPrefix}ytmp3 <enlace / link / url
ββποΈ${usedPrefix}ytmp4 <enlace / link / url
ββπ°${usedPrefix}play.1 <texto / enlace / link / url
ββπ${usedPrefix}play.2 <texto / enlace / link / url
ββπ${usedPrefix}play <texto
ββποΈ${usedPrefix}spotify <texto
ββποΈ${usedPrefix}imagen <texto
ββπ°${usedPrefix}pinteret <texto
ββπ${usedPrefix}wallpaper <texto
ββπ${usedPrefix}wallpaper2 <texto
ββποΈ${usedPrefix}pptiktok <nombre de usuario
ββποΈ${usedPrefix}igstalk <nombre de usuario
ββπ°${usedPrefix}tiktokstalk <nombre de usuario
βββββΧβΧβΧβΧβββ
βββγβ©οΈππππππγβ
ββπ.hades
ββπ${usedPrefix}cristianoronaldo
ββπ${usedPrefix}messi
ββπ${usedPrefix}meme
βββͺ${usedPrefix}itzy
ββπ°${usedPrefix}blackpink
ββπ${usedPrefix}kpop <blackpink / exo / bts
ββπ${usedPrefix}lolivid
βββ©οΈ${usedPrefix}loli
ββπ${usedPrefix}navidad
ββπ${usedPrefix}ppcouple
ββπ${usedPrefix}neko
βββͺ${usedPrefix}waifu
ββπ°${usedPrefix}akira
ββπ${usedPrefix}akiyama
ββπ${usedPrefix}anna
βββ©οΈ${usedPrefix}asuna
ββπ${usedPrefix}ayuzawa
ββπ${usedPrefix}boruto
ββπ${usedPrefix}chiho
βββͺ${usedPrefix}chitoge
ββπ°${usedPrefix}deidara
ββπ${usedPrefix}erza
ββπ${usedPrefix}elaina
βββ©οΈ${usedPrefix}eba
ββπ${usedPrefix}emilia
ββπ${usedPrefix}hestia
ββπ${usedPrefix}hinata
βββͺ${usedPrefix}inori
ββπ°${usedPrefix}isuzu
ββπ${usedPrefix}itachi
ββπ${usedPrefix}itori
βββ©οΈ${usedPrefix}kaga
ββπ${usedPrefix}kagura
ββπ${usedPrefix}kaori
ββπ${usedPrefix}keneki
βββͺ${usedPrefix}kotori
ββπ°${usedPrefix}kurumi
ββπ${usedPrefix}madara
ββπ${usedPrefix}mikasa
βββ©οΈ${usedPrefix}miku
ββπ${usedPrefix}minato
ββπ${usedPrefix}naruto
ββπ${usedPrefix}nezuko
βββͺ${usedPrefix}sagiri
βββͺ${usedPrefix}sasuke
ββπ${usedPrefix}sakura
ββπ${usedPrefix}cosplay
βββββΧβΧβΧβΧβββ
βββγποΈππππππππ πππππγ
ββπ€${usedPrefix}bass
ββποΈ${usedPrefix}blown
ββπ§${usedPrefix}deep
ββπ€${usedPrefix}earrape
ββποΈ${usedPrefix}fast
ββπ§${usedPrefix}fat
ββπ€${usedPrefix}nightcore
ββποΈ${usedPrefix}reverse
ββπ§${usedPrefix}robot
ββπ€${usedPrefix}slow
ββποΈ${usedPrefix}smooth
ββπ§${usedPrefix}tupai_
βββββΧβΧβΧβΧβββ
βββγππππππππγβ
ββπͺ©${usedPrefix}emojimix <emoji 1>&<emoji 2
ββπ§©${usedPrefix}attp <texto
ββπͺ${usedPrefix}ttp <texto
ββπ${usedPrefix}pat <@tag
ββπ${usedPrefix}slap <@tag
ββποΈ${usedPrefix}kiss <@tag
ββπͺ${usedPrefix}dado
ββπ§§${usedPrefix}wm <packname> <author
ββπͺ©${usedPrefix}stickermarker <efecto> <responder a imagen
ββπ${usedPrefix}stickerfilter <efecto> <responder a imagen
βββββΧβΧβΧβΧβββ
βββγπππππππγβ
ββπ${usedPrefix}logos <efecto <texto
ββπ§§${usedPrefix}simpcard <@tag
ββπ§¨${usedPrefix}hornycard <@tag
ββπ${usedPrefix}lolice <@tag
ββπ§§${usedPrefix}ytcomment <texto
ββπ§¨${usedPrefix}itssostupid
ββπ${usedPrefix}pixelar
ββπ§¨${usedPrefix}blur
βββββΧβΧβΧβΧβββ
βββγππππππππππππππγ
ββπͺ${usedPrefix}toimg <responde a un sticker
ββπ${usedPrefix}tomp3 *<responde a un video / nota de voz
ββπͺ${usedPrefix}toptt <responde a un video / audio
ββπ${usedPrefix}tovideo <responde a un audio
ββπ${usedPrefix}tourl <responde a un video / imagen / audio
ββπ${usedPrefix}tts es <texto
βββββΧβΧβΧβΧβββ
βββγπ’πππππγβ
ββπ${usedPrefix}add <numero
ββπ${usedPrefix}kick <@tag
ββποΈ${usedPrefix}grupo <abrir / cerrar
ββποΈ${usedPrefix}promote <@tag
βββοΈ${usedPrefix}demote <@tag
ββπ${usedPrefix}banchat
ββπ${usedPrefix}unbanchat
ββποΈadmins *<texto>_ (π’π π π ππ πππππππ)
ββποΈ${usedPrefix}demote <@tag
βββοΈ${usedPrefix}infogroup
ββπ${usedPrefix}link
ββπ${usedPrefix}setname <texto
ββποΈ${usedPrefix}setdesc <texto
ββποΈ${usedPrefix}invocar <texto
βββοΈ${usedPrefix}setwelcome <texto
ββπ${usedPrefix}setbye <texto
ββπ${usedPrefix}hidetag <texto
ββποΈ${usedPrefix}simular <welcome / bye / promote / demote>
βββββΧβΧβΧβΧβββ
βββγπ§°ππππππγβ
ββ/instalarbot
βββββΧβΧβΧβΧβββ
βββγπΌπππππγβ
ββπ?${usedPrefix}xnxxsearch <texto
ββπ${usedPrefix}animeinfo <texto
ββπͺ${usedPrefix}google <texto
ββπ${usedPrefix}letra *<texto>*_
ββπ¬${usedPrefix}wikipedia <texto
ββπ­${usedPrefix}ytsearch <texto
ββπ?${usedPrefix}apkdone <texto
ββπ${usedPrefix}apkgoogle <texto
ββπͺ${usedPrefix}apkmody <texto
ββπ¬${usedPrefix}apkshub <texto
ββπ­${usedPrefix}happymod <texto
ββπ?${usedPrefix}hostapk <texto
ββπ${usedPrefix}revdl <texto
ββπͺ${usedPrefix}toraccino <texto
ββπ¬${usedPrefix}uapkpro <texto
βββββΧβΧβΧβΧβββ

βγππππππππ π ππππππ γ
ββπ${usedPrefix}enable welcome
ββπ΄${usedPrefix}disable welcome
βββ οΈ${usedPrefix}enable modohorny
βββ${usedPrefix}disable modohorny
ββπ§${usedPrefix}enable antilink
ββπ${usedPrefix}disable antilink
ββπ΄${usedPrefix}enable antilink2
βββ οΈ${usedPrefix}disable antilink2
βββ${usedPrefix}enable detect
ββπ§${usedPrefix}disable detect
ββπ${usedPrefix}enable audios
ββπ΄${usedPrefix}disable audios
βββ οΈ${usedPrefix}enable autosticker
βββ${usedPrefix}disable autosticker
βββββΧβΧβΧβΧβββ
βββγπ§ππππππγβ
βββΆοΈNoche de paz
βββΆοΈMiau
βββΆοΈBuenos dias
ββπΈLa cumbia del tilΓ­n
βββΆοΈbuenas noches
βββΆοΈNo pedΓ­ tu opiniΓ³n
βββΆοΈSenpai
βββΆοΈesto va a ser Γ©pico
βββΆοΈinsulta
βββΆοΈAudio hentai
ββπΊTiene la cara
βββΆοΈFiesta del admin
βββΆοΈtengo
βββΆοΈtranquilo
ββπ€Viernes
βββΆοΈChica lgante
ββπ§No soy pati
ββπ»Baneado
ββπΊBien pensado woody
ββπΈHomero chino
ββπ·El pepe
ββπΉA nadie le importa
ββπ€Sexo
ββπ₯nadie te pregunto
ββπ§Vete a la vrg
ββπ»Hola
ββπΊOye Bot te amo
ββπΈTe amo
ββπ·Yamete
ββπΉy que agarra y quΓ© me dice
ββπ€Te diagnostico con gay
ββπ₯Eres fuerteSu nivel de pendejo
ββπ§Que pasa
ββπ»cΓ‘llese seΓ±ora
ββπΊQuien es tu sempai botsito 7w7
ββπΈBiTCH
ββπ·BaΓ±ate
ββπΉcuΓ‘ndo se muera
ββπ€Que rico
ββπ₯Feliz jueves
ββπ§Lo puede todo
ββπ»Gemime
ββπΊVivan los novios
ββπΈsigues con vida
ββπ·Marica quien
ββπΉEs puto
ββπ€Onichan
ββπ₯Feliz cumpleaΓ±os
ββπ§O omosa
ββπ»Atencion grupo
ββπΊOh me vengo
ββπΈQue linda noche
ββπ·Te siento mΓ­a
ββπΉhentai2
ββπ€detengase admin
ββπ₯Canta2
ββπ§Murio el grupo
ββπ»Siuuu
ββπΊSe enojan
ββπΈAl unico
ββπ·Se van a dormir
ββπΉHare mi rutina
ββπ€Te sabes
ββπ₯:c
ββπ§Hay el amor
ββπ»Orale
ββπΊSe rΓ­e
ββπΈQue es eso
ββπ·anana
ββπΉNo trabajo
ββπ€asen
ββπ₯confeti
ββπ§flash
ββπ»Una pregunta
ββπΊpinches bot
ββπΈmmm
ββπ·Oxxo
ββπΉSoy nuevo
ββπ€La voz de hombre
ββπ₯Picachu
ββπ§Pokemon
ββπ»Γ±aΓ±a
ββπΊyutki
ββπΈYa basta jovenes
ββπ·Verdad que te engaΓ±e
ββπΉCalla maldita puta
ββπ€YoShi
ββπ₯Me los voy a coger
ββπ§manco
ββπ»Me voy
ββπΊMΓΊsica desamor
βββΆοΈmitamita
βββΆοΈtuturu
βββΆοΈwoau
βββΆοΈunga
βββΆοΈumai
βββΆοΈtututu
βββΆοΈuma
βββΆοΈuff
βββΆοΈTara
βββΆοΈuchinchi
βββΆοΈtalcho
βββΆοΈsss
βββΆοΈa
βββΆοΈTriste enojada toy
βββΆοΈBot maricon
βββΆοΈBot puto
βββΆοΈestΓΊpido
βββΆοΈUn pato
βββΆοΈNyanpasu
βββΆοΈEl amor no existe
βββΆοΈEs todo lo que tiene que decir
βββΆοΈMuere por los humanos
βββΆοΈLa biblia
βββΆοΈOtaku
βββΆοΈHace frΓ­o
βββΆοΈPikachu
βββΆοΈNiconi
βββΆοΈMimir
βββΆοΈBeastars
βββΆοΈManos
βββΆοΈFacha
βββΆοΈSexual
βββΆοΈMujer
βββΆοΈCringe
βββΆοΈKonede
βββΆοΈGambare
βββΆοΈPack
βββΆοΈTemon
βββΆοΈPrimo
βββΆοΈjaja quiero
βββΆοΈKya
βββΆοΈrawr
βββΆοΈEl mundo
βββΆοΈNos vale
ββπ₯Bot gemine
βββΆοΈPespes
βββΆοΈOra
βββΆοΈHades bot
βββΆοΈTori
βββΆοΈOxxo
βββΆοΈMi bot es le mejor
βββΆοΈBunny
βββΆοΈcancion hades2
ββΆοΈcancion de hades
βββΆοΈHades es un Dios
βββΆοΈllamando a seguridad_
βββΆοΈAtena_
βββΆοΈQue tonta eres_
βββΆοΈBts      
βββΆοΈara ara
βββΆοΈLa bebecita
βββΆοΈLol
βββΆοΈFeliz navidad
βββΆοΈRisa diabolica
βββΆοΈTe pasas
βββΆοΈDarling
βββΆοΈElmo
βββΆοΈLa lechuza
βββΆοΈΓ±i
βββΆοΈΓxtasis
βββΆοΈno te acerques
βββΆοΈPor que
βββΆοΈLa mamare
βββΆοΈLala
βββΆοΈYa paso
βββΆοΈUwU
βββΆοΈGracias bot
βββββΧβΧβΧβΧβββ
βββγπ?ππππγβ
ββπ‘${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2>
ββπͺ${usedPrefix}ppt <papel / tijera /piedra
ββπΎ${usedPrefix}prostituto <nombre / @tag
βββ³${usedPrefix}prostituta <nombre / @tag
ββπ₯${usedPrefix}gay2 <nombre / @tag
ββπͺ${usedPrefix}lesbiana <nombre / @tag
ββπ«${usedPrefix}pajero <nombre / @tag
ββπΉοΈ${usedPrefix}pajera <nombre / @tag
ββπ§©${usedPrefix}puto <nombre / @tag
ββπ?${usedPrefix}puta <nombre / @tag
ββπͺ${usedPrefix}manco <nombre / @tag
ββπͺ${usedPrefix}manca <nombre / @tag
ββπ±${usedPrefix}rata <nombre / @tag
ββπ―${usedPrefix}love <nombre / @tag
ββπΉ${usedPrefix}doxear <nombre / @tag
ββπ₯${usedPrefix}pregunta <texto
ββπΉ${usedPrefix}slot <apuesta
ββπ³${usedPrefix}simi <texto
βββοΈ${usedPrefix}topgays
ββπ${usedPrefix}topotakus
ββπ²${usedPrefix}formarpareja
ββπͺ${usedPrefix}verdad
ββπΎ${usedPrefix}reto
βββββΧβΧβΧβΧβββ
βββγππππππ πππγβ
ββπ${usedPrefix}cajafuerte
ββπΈ${usedPrefix}enable restrict
ββπ§Ύ${usedPrefix}disable restrict
ββπ${usedPrefix}enable autoread
ββπ§βπ»${usedPrefix}disable autoread
ββπ―${usedPrefix}enable public
ββπͺ©${usedPrefix}disable public
ββπ${usedPrefix}enable pconly
ββπΈ${usedPrefix}disable pconly
ββπ§Ύ${usedPrefix}enable gconly
ββπ${usedPrefix}disable gconly
ββπ§βπ»${usedPrefix}banchat2
ββπ―${usedPrefix}unbanchat2
ββπͺ©${usedPrefix}banuser <@tag>
ββπ${usedPrefix}unbanuser <@tag
ββπΈ${usedPrefix}banuser <@tag
ββπ§Ύ${usedPrefix}bc <texto
ββπ${usedPrefix}bcchats <texto
ββπ§βπ»${usedPrefix}bcgc <texto
ββπ―${usedPrefix}cleartpm
ββπͺ©${usedPrefix}restart
ββπ${usedPrefix}update
ββπΈ${usedPrefix}addprem <@tag>
ββπ§Ύ${usedPrefix}delprem <@tag
ββπ${usedPrefix}listprem_
ββπ§βπ»${usedPrefix}aΓ±adirdiamantes <@tag> <cantidad
ββπ―${usedPrefix}aΓ±adirxp <@tag> <cantidad
βββββΧβΧβΧβΧβββ
β
βββββΧβΧβΧβΧβββ
βββγπ πππππ ππππγ
ββπ§${usedPrefix}afk <motivo
ββπ οΈ${usedPrefix}acortar <enlace / link / url
ββπ§°${usedPrefix}calc <operacion math
ββπͺ${usedPrefix}del <respondre a mensaje del Bot
βββοΈ${usedPrefix}qrcode <texto
ββπ©${usedPrefix}readmore <texto1| texto2>
βββοΈ${usedPrefix}spamwa <numero|texto|cantidad
ββπ§°${usedPrefix}styletext <texto
ββπ οΈ${usedPrefix}traducir <texto
βββββΧβΧβΧβΧβββ
`.trim()
let buttons = [
{ buttonId: '/menu', buttonText: { displayText: 'ππππππ' }, type: 1 },
{ buttonId: '/estado', buttonText: { displayText: 'ππππππππ±' }, type: 1 }]
let buttonMessage = {
image: imagen3 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: 'Black-πππ-ππβ¨',
body: null,
thumbnail: img,
sourceUrl: `https://chat.whatsapp.com/CBoAGmEFcCy44xIoWBSgzJ`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[βππππβ] π΄π» πΌπ΄π½π ππΈπ΄π½π΄ ππ½ π΄πππΎπ π π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π΄π½ππΈπ°ππ»πΎ, ππ΄πΏπΎπππ΄π»πΎ π°π» πΏππΎπΏπΈπ΄ππ°ππΈπΎ π³π΄π» π±πΎπ*', m)
}}
handler.command = /^(menΓΊcompleto|menΓΊcompleto\?)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
