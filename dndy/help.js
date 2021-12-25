// menu fitur bot
const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `
	
╭──────「 *REGULATION ${name}* 」
┴
┣⊱ *NAMA USER* : *${pushname2}*
┣⊱ *VERIVICATION:*  ✅
┣⊱ *LIMIT* : *${limitt} perhari*
┣⊱ *AKTIF* : ${kyun(uptime)}
┣⊱ *JAM* : *${jam} WIB*
┣⊱ *TANGGAL* : *${tanggal}*
┣⊱ *VERSION* : *1.1.0*
┣⊱ *USER TERDAFTAR* : *${user.length} User*
┣⊱ *Youtube* : *${yt}*
┣⊱ *Instagram* : *${instagram}*
┬
╰────────────────────────
╭──────「 *ABOUT ${name}* 」
┴
│➻ *${prefix}report lapor bug*
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}owner*
│➻ *${prefix}daftar*
│➻ *${prefix}limit*
│➻ *${prefix}totaluser*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
│➻ *${prefix}premiumlist*
│➻ *${prefix}readmore*
┬
╰────────────────────────
͏͏͏͏͏͏͏͏͏͏͏͏͏͏╭──────「 *MEDIA DOWNLOADER* 」
┴
│➻ *${prefix}instagram link*
│➻ *${prefix}instavid link valid*
│➻ *${prefix}instaimg link valid*
│➻ *${prefix}instastory username*
│➻ *${prefix}tiktok*
│➻ *${prefix}kbbi*
┬
╰────────────────────────
╭──────「 *CREATOR MENU* 」
┴
│➻ *${prefix}quotemaker tx/wtrmk/tema*
│➻ *${prefix}tp 1 - 162*
│➻ *${prefix}ttp*
│➻ *${prefix}stiker*
│➻ *${prefix}gifstiker*
│➻ *${prefix}toimg*
│➻ *${prefix}img2url*
│➻ *${prefix}tomp3*
┬
╰──────────────────────────
╭───────「 *GROUP ONLY* 」
┴
│➻ *${prefix}antilink On/Off*
│➻ *${prefix}welcome On/Off*
│➻ *${prefix}ownergrup*
│➻ *${prefix}setpp*
│➻ *${prefix}infogc*
│➻ *${prefix}add 628#########*
│➻ *${prefix}kick @mentioned*
│➻ *${prefix}kicktime @mentioned*
│➻ *${prefix}promote @mentioned*
│➻ *${prefix}demote @mentioned*
│➻ *${prefix}setname*
│➻ *${prefix}setdesc*
│➻ *${prefix}linkgrup*
│➻ *${prefix}mentionall*
│➻ *${prefix}listadmin*
┬
╰────────────────────────
╭──────「 *OTHERS FUN & GAME* 」
┴
│➻ *${prefix}apakah*
│➻ *${prefix}kapankah*
│➻ *${prefix}bisakah*
│➻ *${prefix}cantik*
│➻ *${prefix}ganteng*
│➻ *${prefix}quotes*
│➻ *${prefix}truth*
│➻ *${prefix}dare*
│➻ *${prefix}katabijak*
│➻ *${prefix}tebakgambar*
│➻ *${prefix}caklontong*
│➻ *${prefix}family100*
│➻ *${prefix}kalkulator*
│➻ *${prefix}searchfilm*
┬
╰────────────────────────
╭─────────「 *OWNER ONLY* 」
┴
│➻ *${prefix}addprem mentioned*
│➻ *${prefix}removeprem mention*
│➻ *${prefix}setmemlimit*
│➻ *${prefix}setlimit*
│➻ *${prefix}setreply*
│➻ *${prefix}setprefix*
│➻ *${prefix}setnamebot*
│➻ *${prefix}setppbot*
│➻ *${prefix}bc*
│➻ *${prefix}bcgc*
│➻ *${prefix}ban*
│➻ *${prefix}unban*
│➻ *${prefix}block*
│➻ *${prefix}unblock*
│➻ *${prefix}delete*
│➻ *${prefix}clone*
│➻ *${prefix}leave*
┬
╰────────────────────────
╭────────「 *PREMIUM ONLY* 」
┴
│➻ *${prefix}fb link video*
│➻ *${prefix}snack link snack video*
│➻ *${prefix}ytmp3 link yt*
│➻ *${prefix}ytmp4 link yt*
│➻ *${prefix}Joox Downloader*
┬
╰────────────────────────
╭─────「 *BOT CREATOR* 」
┴
│➲ *DANDY PRADNYANA*
│➲ *SAWERIA.CO/DNDPRD*
┬
╰────────────────────────`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

// donasi menu
const donasi = (name) => { 
	return `       
╭─────「 *DONASI SEIKHLASNYA* 」
┴
│
│√ *PULSA : 085159730633*
│√ *GOPAY : 085159730633*
│
┬
╰──────「 *BY ${name}* 」

Demi kelangsungan hidup bot, karena kuota mahal.
`
}
exports.donasi = donasi

// list bahasa
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command *${prefix}tts*
  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*Maaf ${pushname2} Limit Anda Hari Ini Sudah Habis\n\n Silahkan Kembali Lagi Hari Esok:)\n\n Limit Di Reset Ketik Owner Gabut:v*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: ${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount