import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "- - - - ใ โฎ ๐Pilih Umur Kamu Disini ! ใ ใ - - - -",
	rows: [
	    {title: "๐ )เด Random Tahun", rowId: '.daftar ' + namae + '.' + pickRandom (['30','20','18','16','13']), description: "โง Kiraยฒ beliau ini mendapatkan umur berapa ya ๐"},
	]
    },
    {
	title: "- - - - ใ โฎ ๐ฒ T U A ใ ใ - - - -",
	rows: [
	    {title: "๐ โชษ ใ Kuliah ใ", rowId: '.daftar ' + namae + '.20 ', description: 'โง Wah udah kerja nih ๐'},
	    {title: "๐  โชษ ใ Pengangguran ใ", rowId: '.daftar ' + namae + '.18 ', description: 'โง Wah ada beban keluarga nih ๐'},
	    {title: "๐ฅ  โชษ ใ Om Om ใ", rowId: '.daftar ' + namae + '.30 ', description: 'โง Om halalin aku donh:v ๐คญ'},
	]
    },
    {
	title: "- - - - ใ โฎ ๐ฅ B O C A H ใ ใ - - - -",
	rows: [
	    {title: "โซน๐ฟ โบ ๐ช-ใ SMA ใ-๐", rowId: '.daftar ' + namae + '.16 ', description: 'โฐโบ Saya masih SMA kak ๐'},
	    {title: "โซน๐ฑ โบ ๐ช-ใ SMK ใ-๐", rowId: '.daftar ' + namae + '.16 ', description: 'โฐโบ Saya masih SMK kak ๐'},
	    {title: "โซน๐คก โบ ๐ช-ใ SMP ใ-๐", rowId: '.daftar ' + namae + '.13 ', description: 'โฐโบ Saya masih SMP kak ๐ฅถ'},
	{title: "โซน๐คช โบ ๐ช-ใ MTS ใ-๐", rowId: '.daftar ' + namae + '.13 ', description: 'โฐโบ Saya masih MTS kak ๐คซ'},
	{title: "โซน๐ค โบ ๐ช-ใ SD ใ-๐", rowId: '.daftar ' + namae + '.5 ', description: 'โฐโบ Saya masih SD kak ๐'},
	{title: "โซน๐ โบ ๐ช-ใ TK ใ-๐", rowId: '.daftar ' + namae + '.4 ', description: 'โฐโบ Saya masih TK kak ๐คจ'},
	{title: "โซน๐ โบ ๐ช-ใ PAUD ใ-๐", rowId: '.daftar ' + namae + '.4 ', description: 'โฐโบ Saya Masih PAUD kak ๐'},
	]
	},
]

const listMessage = {
  text: `โโบSilahkan pilih umur kamu dibawah ini agar bisa terverifikasi data bot kami`,
  footer: `โ *สแดแดส ษดแดแดแด:* ${conn.getName(m.sender)}\n<โ>  BOT PUBLIC\nSubscribe YT PAK ZAINAL DEV'S\nhttps://youtube.com/@hagozox`,
  title: "โขโโโโใ Registrasi ใโโโโโข",
  buttonText: "เด Registrasi เด",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `๐ฎKamu Sudah ter daftar di database, Apa kamu ingin mendaftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'WOI TUA (ใ-`ฯยด-)'
  if (age < 5) throw 'Halah dasar bocil'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
  โโโโ ใ *Registrasi Berhasil!* ใโโโ
  .
โญโโใ *แดsแดสs* ใ
โโธ *sแดแดแดแดs:* โ๏ธ sแดแดแดแดssาแดส
โโธ *ษดแดแดแด:* ${name}
โโธ *แดษขแด:* ${age} สแดแดสs
โโธ *sษด:* ${sn}
โฐโโโโโโโโโโเน

๊ฑแดส๊ฑแดสษชสแด สแด : แดแดแด แดขแดษชษดแดส แดแดแด?'๊ฑ
`
  let buttonMessage= {
'document':{'url':'https://youtube.com/@hagozox'},
'mimetype':global.ddocx,
'fileName':'โขโโโโใ Registrasi ใโโโโโข',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://youtube.com/@hagozox',
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/a5eb5169ab1330a537e0b.jpg')).buffer(),
'sourceUrl':'https://youtube.com/@hagozox'}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'โก Menu'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'๐ Hallo Bot'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
