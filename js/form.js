const botao = document.querySelector('#adicionar-aluno')
 
// criando um ouvinte para o btn para tirar a acao de submit do btn
botao.addEventListener('click',function(){  
    event.preventDefault() // tirando o submit
    let formulario = document.querySelector('#form-aluno') // pegando tds os objs do form
    let dadosAluno = novoAluno(formulario)
/*
    console.log(dadosAluno.Jnome)
    console.log(dadosAluno.JN1.toFixed(1))
    console.log(dadosAluno.JN2.toFixed(1))
    console.log(dadosAluno.JN3.toFixed(1))
    console.log(dadosAluno.JMediaFinal.toFixed(2))
    console.log(dadosAluno.JSituacao)
*/

    //CRIANDO UMA NOVA LINHA NA TABELA

    let linha = document.createElement('tr')

    // criando as células vulgo td
    let tdNome = document.createElement('td')
    let tdN1 = document.createElement('td')
    let tdN2 = document.createElement('td')
    let tdN3 = document.createElement('td')
    let tdMediaFinal = document.createElement('td')
    let tdSituacao = document.createElement('td')

    // inserindo elementos dentrod as td's
    tdNome.textContent = dadosAluno.Jnome
    tdN1.textContent = dadosAluno.JN1.toFixed(1)
    tdN2.textContent = dadosAluno.JN2.toFixed(1)
    tdN3.textContent = dadosAluno.JN3.toFixed(1)
    tdMediaFinal.textContent = dadosAluno.JMediaFinal.toFixed(2)
    tdSituacao.textContent = dadosAluno.JSituacao
    tdSituacao.classList.add(MostrarSituacao(dadosAluno.JMediaFinal)[1])

    linha.appendChild(tdNome)
    linha.appendChild(tdN1)
    linha.appendChild(tdN2)
    linha.appendChild(tdN3)
    linha.appendChild(tdMediaFinal)
    linha.appendChild(tdSituacao)

    let tabela = document.querySelector('#tabela-aluno')
    tabela.appendChild(linha)

    formulario.reset() // reseta o formulario
    formulario.querySelector('#nome').focus() // foco no campo nome     


})

            //VERIFICAÇÕES
function novoAluno (meuform){
    //Verificando seu preencheu o campo nome
    if(meuform.querySelector('#nome').value == ""){ 
        alert("Obrigatório o preenchimento do campo Nome")
        // Colocando o cursor na label nome 
        meuform.querySelector('#nome').focus()
    }

    // Verificando se preencheu o campo da 1° nota
    else if(meuform.querySelector('#n1').value == ""){
        alert("Informe a primeira nota do aluno")
        meuform.querySelector('#n1').focus()
    }

    // Verificando se preencheu o campo da 1° nota com número
    else if (isNaN(parseFloat(meuform.querySelector('#n1').value))){
        alert ("O campo deve ser preenchido por valores númericos")
        meuform.querySelector('#n1').value = ""
        meuform.querySelector('#n1').focus()
    }

     // Verificando se preencheu o campo da 1° nota com número entre 0 e 10 
    else if (meuform.querySelector('#n1').value > 10){
        alert ("O campo deve ser preenchido por valores entre 0 e 10")
        meuform.querySelector('#n1').value = ""
        meuform.querySelector('#n1').focus()
    }


    // Verificando se preencheu o campo da 2° nota
    else if(meuform.querySelector('#n2').value == ""){
        alert("Informe a segunda nota do aluno")
        meuform.querySelector('#n2').focus()
    }

    // Verificando se preencheu o campo da 2° nota com número
    else if (isNaN(parseFloat(meuform.querySelector('#n2').value))){
        alert ("O campo deve ser preenchido por valores númericos")
        meuform.querySelector('#n2').value = ""
        meuform.querySelector('#n2').focus()
    }

     // Verificando se preencheu o campo da 2° nota com número entre 0 e 10 
    else if (meuform.querySelector('#n2').value > 10){
        alert ("O campo deve ser preenchido por valores entre 0 e 10")
        meuform.querySelector('#n2').value = ""
        meuform.querySelector('#n2').focus()
    }


    // Verificando se preencheu o campo da 3° nota
    else if(meuform.querySelector('#n3').value == ""){
        alert("Informe a terceira nota do aluno")
        meuform.querySelector('#n3').focus()
    }

    // Verificando se preencheu o campo da 3° nota com número
    else if (isNaN(parseFloat(meuform.querySelector('#n3').value))){
        alert ("O campo deve ser preenchido por valores númericos")
        meuform.querySelector('#n3').value = ""
        meuform.querySelector('#n3').focus()
    }

     // Verificando se preencheu o campo da 3° nota com número entre 0 e 10 
    else if (meuform.querySelector('#n3').value > 10){
        alert ("O campo deve ser preenchido por valores entre 0 e 10")
        meuform.querySelector('#n3').value = ""
        meuform.querySelector('#n3').focus()
    }

    else{
        let jsonAluno = {
            Jnome: meuform.querySelector('#nome').value,
            JN1:parseFloat(meuform.querySelector('#n1').value.replace(",",".")),
            JN2:parseFloat( meuform.querySelector('#n2').value.replace(",",".")),
            JN3: parseFloat(meuform.querySelector('#n3').value.replace(",",".")), 

            JMediaFinal: calcularMedia(meuform.querySelector('#n1').value.replace(",","."),
            meuform.querySelector('#n2').value.replace(",","."),
            meuform.querySelector('#n3').value.replace(",",".")),
            
            JSituacao: MostrarSituacao(calcularMedia(meuform.querySelector('#n1').value.replace(",","."),
            meuform.querySelector('#n2').value.replace(",","."),
            meuform.querySelector('#n3').value.replace(",",".")))[0]    

        }
        return jsonAluno
    }

}