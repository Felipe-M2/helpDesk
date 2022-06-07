//--Menu Lateral
let btnMenuL = document.querySelector(".btnMenuL");
let menuL = document.querySelector(".navBarL");
let btnIcon = document.querySelector(".bi-js");

btnMenuL.addEventListener("click", ()=>{
    if(menuL.style.display === "none"){
        menuL.style.display = "block";
        btnIcon.classList.remove("bi-list");
        btnIcon.classList.add("bi-x-lg");
    }else{
        menuL.style.display = "none";
        btnIcon.classList.remove("bi-x-lg");
        btnIcon.classList.add("bi-list");
    }
})



//--Visualização Conteudo
let visualCard = document.querySelectorAll(".linksVisual");
let op = document.querySelector(".operacional");
let cop = document.querySelector(".corporativo");

op.addEventListener("click", ()=>{ 
    
    let remover = visualCard.length;
    for(let i = 0; i < remover; i++){
    visualCard[i].classList.remove("visulActive");
    }
    
    visualCard[0].classList.add("visulActive");
});

cop.addEventListener("click", ()=>{
    
    let remover = visualCard.length;
    for(let i = 0; i < remover; i++){
    visualCard[i].classList.remove("visulActive");
    }
    
    visualCard[1].classList.add("visulActive");
});

//--Registrar Chamada
let btnRegChamada = document.querySelector(".regChamada");
let menuModal = document.querySelector(".menuModal");
let btnTopoModal = document.querySelector(".btnTopoModal");

btnRegChamada.addEventListener("click", ()=>{
    menuModal.classList.add("menuModalActive");
})

btnTopoModal.addEventListener("click", ()=>{
    menuModal.classList.remove("menuModalActive");
})