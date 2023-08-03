function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'fotomanha1.png'
    document.body.style.background = '#f4bb83'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'fototarde.png'
    document.body.style.background = '#f1b84c'
} else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#1c283e'
}//BOA NOITE!

}