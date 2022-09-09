localStorage.removeItem("perfil");

let btnLoguin = document.querySelector("#loguinBtn");
let loguin = document.querySelector(".loguin");
let headerDisplay = document.querySelector(".topo");
let mainDisplay = document.querySelector(".content");

let id0001 ={
    nome: "Felipe",
    sobrenome: "Marques De Araujo Costa",
    matricula: "re0001",
    id: 0001,
    setor: "ServiceDesk",
    senha: "re0001"
}

//perfil
let nome_topo = document.querySelector(".nome-topo");
let avatar_topoC = document.querySelector(".avatar-topoC");

let perfil = ()=>{
    
    if(localStorage.getItem("perfil") === id0001.matricula){
        nome_topo.innerHTML = id0001.nome;
        avatar_topoC.innerHTML = id0001.id;
    }
}

//Sair Perfil
nome_topo.addEventListener("click", ()=>{
    localStorage.removeItem("perfil");
    loguin.style.display = "flex";
})

// loguin
let visulDisplay = ()=>{
    if(loguin.style.display == "flex"){
        headerDisplay.style.display = "none";
        mainDisplay.style.display = "none";
    }else{
        headerDisplay.style.display = "flex";
        mainDisplay.style.display = "flex";
    }
}

let loguinEvent = ()=>{

    let user = document.querySelector("#user").value;
    let passw = document.querySelector("#passw").value;
    let error = document.querySelector(".erroLoguin");

    if(user === id0001.matricula && passw === id0001.senha){
        localStorage.setItem("perfil", user);

        error.innerHTML = "Credenciais Validas";
        error.style.color = "#008000";
        error.style.display = "block";
        
        setTimeout(()=>{
            loguin.style.display = "none";
            error.style.display = "none";
        }, 3000)
    }else{
        error.style.display = "block";
        error.innerHTML = "Credenciais Invalidas";
        error.style.color = "#FF0000";
    }
    
    visulDisplay();
    perfil();
};

btnLoguin.addEventListener("click", loguinEvent);

document.addEventListener("keydown", (e)=>{
    if(e.key === 'Enter'){
        loguinEvent()
    }
})

//verificação de loguin

setInterval(()=>{
    if(localStorage.getItem("perfil") === id0001.matricula){
        loguin.style.display = "none";
        visulDisplay()
        perfil();
    }else{
        loguin.style.display = "flex";
    }
},5000);

let loguinVal = ()=>{
    if(localStorage.getItem("perfil") === id0001.matricula){
        loguin.style.display = "none";
        visulDisplay()
        perfil();
    }
}
loguinVal();