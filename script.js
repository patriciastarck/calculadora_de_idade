function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    //fano = formulario ano.
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        //fano.value.lenth ==> lê-se:  o cumprimento do valor do formulário é igual a 0. 
        //A propriedade length de uma String contém o comprimento da string. length = comprimento
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        //abaixo, é como se eu colocasse um id no html. É como se eu fosse no html e colocasse: img id='foto', só q fiz pelo JS
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'garoto.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'moço.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'rapaz.jpg')
            } else {
                img.setAttribute('src', 'velhinho.jpg')
            }
            document.body.style.background = 'linear-gradient(90deg, #efd5ff 0%, #515ada 100%)'
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'garota.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'moça.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta.jpg')
            } else{
                img.setAttribute('src', 'velhinha.jpg')
            }
            document.body.style.background = 'linear-gradient(90deg, #fff 0%, #d53369 100%)'
            document.body.style.background = 'opacity'
        }
        
        res.style.textAlign = 'center'
        res.style.fontWeight = 'bold'   
        
        //acima, centralizei pelo JS e colokei negrito.
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
