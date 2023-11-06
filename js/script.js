const tituloPagina = document.querySelector('#titulo')
//console.log(tituloPagina)

// textContenté uma propiedade que retorna ou define o conteúdo de texto de uma tag html

//console.log (tituloPagina.textContent)

tituloPagina.textContent = 'Etec Prof. Basilides de Godoy'  // Mudando o title da pag

const linhasAluno = document.querySelectorAll('.aluno')   // linhasAluno pega todas as info da tr 
//console.log(linhasAluno.length)  

for  (let x=0; x<linhasAluno.length; x++){
    let dadosAlunos = linhasAluno[x]                // dadosAlunos é um array
    //console.log (dadosAlunos.textContent)

    let nome = dadosAlunos.querySelector('.td-nome').textContent
    let n1 = dadosAlunos.querySelector('.td-n1').textContent
    let n2 = dadosAlunos.querySelector('.td-n2').textContent
    let n3 = dadosAlunos.querySelector('.td-n3').textContent
    let media = calcularMedia(n1,n2,n3)
    //console.log(media.toFixed(2))
    let mediafinal =dadosAlunos.querySelector('.td-media')
    mediafinal.textContent = media.toFixed(2)

    let situacao  = dadosAlunos.querySelector('.td-situacao')
    situacao.textContent = MostrarSituacao(media) [0] 
    situacao.classList.add(MostrarSituacao(media)[1])  

    if (mediafinal.textContent >= 7){
        mediafinal.style.color='blue'
        mediafinal.style.fontWeight='bold'
    }
    else{        
        mediafinal.style.color='red'
        mediafinal.style.fontWeight='bold'
    }
}

function calcularMedia(x,y,z){
    return(parseFloat(x)+parseFloat(y)+parseFloat(z))/3
}

function MostrarSituacao(m){
    let resultado = []
    if (m >= 7){
        resultado.push("Aprovado")
        resultado.push('aprovado') // css
    }
    else {
        resultado.push("Reprovado")
        resultado.push('reprovado') // css
    }
    return resultado
}
