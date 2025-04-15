const person = document.querySelector(".personagem");
let px = 0;
document.addEventListener("keydown", function (e){
    console.log(e.key);
    if (e.key === 'ArrowRight'){
        px += 5;
        person.style.left = px + "px";
    }
    else if (e.key === 'ArrowLeft'){
        px -= 5;
        person.style.left = px + "px";
    }
    else if (e.key === 'ArrowUp'){
        px -= 5;
        person.style.top = px + "px";
    }
    else if (e.key === 'ArrowDown'){
        px += 5;
        person.style.top = px + "px";
    }
    else{
        px  = 0;
        person.style.left = px + "px";
    }
})