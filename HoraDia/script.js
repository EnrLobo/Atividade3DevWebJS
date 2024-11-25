function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var saudacao = window.document.getElementById('saudacao')
    var date = new Date()
    var time = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    msg.innerHTML = `Agora são ${time} horas : ${min} minutos : ${sec} segundos.`
    if(time >=0 && time <12){
        saudacao.innerHTML = `BOM DIA`
        img.src = 'assets/Manha.png'
        document.body.style.background = '#7b9fc3'
        document.div.style.color = '#7b9fc3'
    }else if(time >=12 && time <= 18){
        saudacao.innerHTML = `BOA TARDE`
        img.src = 'assets/Tarde.png'
        document.body.style.background = '#817641'
        document.body.style.color = '#817641'
    }else{
        saudacao.innerHTML = `BOA NOITE`
        img.src = 'assets/Noite.png'
        document.body.style.background = '#272b46'
        document.div.style.color = '#272b46'
    }
}
