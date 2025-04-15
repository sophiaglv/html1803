const botao = document.getElementById('btn');

botao.addEventListener('click', verde);
    function verde(){
    if(document.body.classList.contains("neutro")){
        document.body.classList.replace("neutro", "verde");
    }
    else if(document.body.classList.contains("verde")){
        document.body.classList.replace("verde", "neutro");
    }
}