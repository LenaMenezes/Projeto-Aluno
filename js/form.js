const botao = document.querySelector('#adicionar-aluno')

// criando um ouvinte para o btn para tirar a acao de submit do btn
botao.addEventListener('click',function(){  
    event.preventDefault() // tirando o submit
    let formulario = document.querySelector('#form-aluno') // pegando tds os objs do form
    let dadosAluno = novoAluno(formulario)

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

}