const botao = document.getElementById('btn');

botao.addEventListener('click', function calcular(){
    const valor1 = document.getElementById('vl1').value;
    const valor2 = document.getElementById('vl2').value;

    let soma = parseInt(valor1) + parseInt(valor2);

    if (calcular.key === 'Enter'||"click"){
        alert(soma);
    }
});
