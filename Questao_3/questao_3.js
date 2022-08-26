function calcular() {
    var nome = window.document.getElementById('nome').value
    var n1 = Number(window.document.getElementById('nota1').value)

    if (n1 < 38) {
        window.alert(nome+' aluno reprovado com nota '+n1)
    
    } if (n1>=38 && n1<=100) {
        if(n1%5<=3){
        window.alert(nome+'Aluno aprovado com nota'+ n1)}
        if(n1%5 <= 1) {
            nota = n1+1;
            window.alert(nome + 'aluno aprovado com arredondamento da nota para' + nota)
        }

    }else{
        window.alert(nome+' a nota digitada foi invalida')
    }
}