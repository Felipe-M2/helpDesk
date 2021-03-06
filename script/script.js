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
    };
});

//--Visualização Conteudo -- links
let visualCard = document.querySelectorAll(".linksVisual");
let op = document.querySelector(".operacional");
let cop = document.querySelector(".corporativo");

// remover classe Active -- links
let removeClassActive = ()=>{
    let remover = visualCard.length;
        for(let i = 0; i < remover; i++){
    visualCard[i].classList.remove("visulActive");
    };
};

op.addEventListener("click", ()=>{ 
    
    removeClassActive()
    visualCard[0].classList.add("visulActive");

});

cop.addEventListener("click", ()=>{
    
    removeClassActive()
    visualCard[1].classList.add("visulActive");

});

//--Registrar Chamada -- formularioModal
let btnRegChamada = document.querySelector(".regChamada");
let menuModal = document.querySelector(".menuModal");
let biXmodal = document.querySelector(".btn-x-modal");

btnRegChamada.addEventListener("click", ()=>{
    menuModal.classList.add("menuModalActive");
});

biXmodal.addEventListener("click", ()=>{
    menuModal.classList.remove("menuModalActive");
});

// limpar input
let clearInput = ()=>{
    let inputClear = document.querySelectorAll(".inputClear");
    let inputNunber = inputClear.length;
    for(i = 0; i < inputNunber; i++){
        inputClear[i].value = "";
    };
};

//Formulario Chamada
let btnForm = document.querySelector(".btn-form");
let painelContent = document.querySelector(".painelContent");

// variveis inputForm registro de chamadas

let nomeInput = document.querySelector("#nomeModal");
let matriculaInput = document.querySelector("#matriculaModal");
let contatoInput =  document.querySelector("#contatoModal");
let nunChInput = document.querySelector("#nunChModal");
let empresaInput = document.querySelector("#empresaModal");

// cadastra banco de dados
let cadastrarBD = ()=>{

    let dadosConsul = JSON.parse(localStorage.getItem("bd_dados"));

    if(dadosConsul == null){
        localStorage.setItem("bd_dados", "[]");
    };

    let dadosLista = {
        nome: nomeInput.value,
        matricula: matriculaInput.value,
        contato: contatoInput.value,
        nunCH: nunChInput.value,
        empresa: empresaInput.value
    };

    let dadosFy = JSON.parse(localStorage.getItem("bd_dados"));

    dadosFy.push(dadosLista);

    localStorage.setItem("bd_dados", JSON.stringify(dadosFy));

    menuModal.classList.remove("menuModalActive");

    clearInput();
};

// btn cadastrar banco de dados
btnForm.addEventListener("click", ()=>{
    // validação
    let nomeI = nomeInput.value;
    let matriculaI = matriculaInput.value;
    let empresaI = empresaInput.value;

    if(nomeI == "" || matriculaI == "" || empresaI == ""){
        nomeInput.style.border = "1px solid red";
        matriculaInput.style.border = "1px solid red";
        empresaInput.style.border = "1px solid red";
    }else{
        cadastrarBD();
        nomeInput.style.border = "1px solid #000";
        matriculaInput.style.border = "1px solid #000";
        empresaInput.style.border = "1px solid #000";
        };
    });

    let btnTableL = document.querySelector("#table");

    // limpar tabelas
    let clearTable = ()=>{
        const rows=document.querySelectorAll('.tabelaCH>tbody tr')
        rows.forEach(row=>row.parentNode.removeChild(row))
    };

    // Visualizar lista de chamados
    let  btnTable = ()=>{

    clearTable();

    btnTableL.style.display = "flex";
    
        let bd_client = JSON.parse(localStorage.getItem("bd_dados"));
    
        if(bd_client == null){
            localStorage.setItem("bd_dados", "[]");
        };

        for(i = 0; i < bd_client.length; i++){
            let newRow = document.createElement("tr");
        
            let creatRow = ()=>{
                
                newRow.innerHTML = `
                <td>${bd_client[i].nome}<td>
                <td>${bd_client[i].matricula}<td>
                <td>${bd_client[i].contato}<td>
                <td>${bd_client[i].nunCH}<td>
                <td>${bd_client[i].empresa}<td>
                `
            };
        
            bd_client.forEach(creatRow);
        
            document.querySelector(".tabelaCHbody").appendChild(newRow);
        };
    };

// fechar lista chamadas
let btnXlist = document.querySelector(".btnXlist");
btnXlist.addEventListener("click", ()=>{
    btnTableL.style.display = "none";
})

let rel = document.querySelector(".relChTable");
rel.addEventListener("click", btnTable);