function verificar() {
      var data = new Date()
      var anoAtual = data.getFullYear()
      var fano = document.querySelector('#fano')
      var res = document.querySelector('div#res')
      var formAno = Number(fano.value)
      if (fano.value.length == 0 || formAno > anoAtual || formAno < 0) {
            res.innerHTML = '[ERROR] Verifique os dados informados'
            res.style.background = '#ff4d4d'
      } else {
            var fsex = document.getElementsByName('sex')
            var idade = anoAtual - formAno
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                  genero = 'Homem'
                  if (idade >= 0 && idade < 10) {
                        //Bebê
                        img.setAttribute('src', '../imagens/01h.png')
                  } else if (idade < 21) {
                        //Jovem
                        img.setAttribute('src', '../imagens/02h.png')
                  } else if (idade < 50) {
                        //Adulto
                        img.setAttribute('src', '../imagens/03h.png')
                  } else {
                        //Idoso
                        img.setAttribute('src', '../imagens/04h.png')
                  }
            } else if (fsex[1].checked) {
                  genero = 'Mulher'
                  if (idade >= 0 && idade < 10) {
                        //Bebê
                        img.setAttribute('src', '../imagens/01f.png')
                  } else if (idade < 21) {
                        //Jovem
                        img.setAttribute('src', '../imagens/02f.png')
                  } else if (idade < 50) {
                        //Adulto
                        img.setAttribute('src', '../imagens/03f.png')
                  } else {
                        //Idoso
                        img.setAttribute('src', '../imagens/04f.png')
                  }
           
            }
           
            
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
      }
}