const help = (prefix, botname, oname) => {
	return `
「 *${botname}* 」
📌 *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${oname}
📌 *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}bocchigroup
  └─ ❏ ${prefix}bugreport
📌 *MAKER*
  │
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}stickergif
  ├─ ❏ ${prefix}toimg
  └─ ❏ ${prefix}tomp3
📌 *TANYA*
  │
  └─ ❏ ${prefix}artinama
  ├─ ❏ ${prefix}apakah
  ├─ ❏ ${prefix}kapankah
  └─ ❏ ${prefix}bisakah
📌 *DOWNLOADER*
  │
  ├─ ❏ ${prefix}pinterest
  ├─ ❏ ${prefix}ytmp3
  ├─ ❏ ${prefix}ytmp4
  └─ ❏ ${prefix}joox
📌 *GROUP*
  │
  ├─ ❏ ${prefix}opengc
  ├─ ❏ ${prefix}closegc
  ├─ ❏ ${prefix}promote
  ├─ ❏ ${prefix}demote
  ├─ ❏ ${prefix}tagall
  ├─ ❏ ${prefix}tagall2
  ├─ ❏ ${prefix}tagall3
  ├─ ❏ ${prefix}tagall4
  ├─ ❏ ${prefix}tagall5
  ├─ ❏ ${prefix}add
  ├─ ❏ ${prefix}kick
  ├─ ❏ ${prefix}listadmins
  ├─ ❏ ${prefix}linkgroup
  ├─ ❏ ${prefix}leave
  └─ ❏ ${prefix}ownergroup
📌 *MUSIC*
  │
  ├─ ❏ ${prefix}lirik
  └─ ❏ ${prefix}chord
📌 *INFORMATION*
  │
  ├─ ❏ ${prefix}bahasa
  ├─ ❏ ${prefix}kodenegara
  ├─ ❏ ${prefix}kbbi
  └─ ❏ ${prefix}covid
📌 *OWNER*
  │
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}block
  ├─ ❏ ${prefix}bc
  ├─ ❏ ${prefix}bcgc
  └─ ❏ ${prefix}clearall
📌 *OTHER*
  │
  ├─ ❏ ${prefix}tts
  ├─ ❏ ${prefix}send
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}virtex
  ├─ ❏ ${prefix}exe
  └─ ❏ ${prefix}qrcode

BOT OWNER : *${oname}*
DONATE : saweria.co/DndPrd
`
}

exports.help = help