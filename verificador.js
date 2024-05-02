function verificar(){ // Quando apertar o botão
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById('txtano') // Ta pegando o ano de nascimento digitado na caixa de texto
    var res = document.getElementById('res')
    
    // Verificando o ano...
    if(Number(form_ano.value) > ano) { 
        window.alert("Erro")

    }
    else if(form_ano.value.length == 0){
        window.alert("Você não digitou nada!")
    }

    /*
    Depois de verificado, tem que fazer funcionar
    Portanto, os dois IFs de cima são pra ver se estão funcionando
    se passar por eles, funciona
    */
    else{
        var fsex = document.getElementsByName('radsex') // Variável criada para entrar no sexo, tem que ter o mesmo nome
        var idade = ano - Number(form_ano.value) // Criada para calcular a idade
        //res.innerHTML = `Idade calculada: ${idade} anos` // Mostar a idade
        var genero = '' //string vazia
        var img = document.createElement('img') // Entrar a imagem
        img.setAttribute('id', 'foto') // Atribui o id a foto, EX: "id, foto"

        if (fsex[0].checked){ // Primeira opção do sexo
            genero = 'Homem'
            if (idade >= 0 && idade < 5){
                //bebe
                img.setAttribute('src', 'img/1.bebe menino.jpg')
            }
            else if (idade > 4 && idade < 10){
                //criança
                img.setAttribute('src', 'img/2.criança menino.jpg')
            }
            else if (idade > 9 && idade < 20){
                //Jovem
                img.setAttribute('src', 'img/3.jovem homem.jpg')
            }
            else if (idade > 19 && idade < 60){
                //adulto
                img.setAttribute('src', 'img/4.adulto homem.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'img/5.idoso.jpg')
            }

            
        }
        else if(fsex[1]){     // Segunda opção marcada
            genero = 'Mulher'
            if (idade >= 0 && idade < 5){
                //bebe
                img.setAttribute('src', 'img/1.bebe menina.jpg')
            }
            else if (idade > 4 && idade < 10){
                //criança
                img.setAttribute('src', 'img/2.criança menina.jpg')
            }
            else if (idade > 9 && idade < 20){
                //Jovem
                img.setAttribute('src', 'img/3.jovem mulher.jpg')
            }
            else if (idade > 19 && idade < 60){
                //adulto
                img.setAttribute('src', 'img/4.adulta mulher.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'img/5.idosa.jpg')
            }
        }
        //res.style.textAlign = 'center'  -->  vai centralizar o texto abaixo sem o CSS
        res.innerHTML = `Detectamos que é ${genero} e tem ${idade} anos.`
        res.appendChild(img) // Adicionar mais uma linha
    }
}