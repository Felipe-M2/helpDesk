let clearTable = ()=>{
    const rows=document.querySelectorAll('.tabelaCH>tbody tr')
    rows.forEach(row=>row.parentNode.removeChild(row))
};

let  btnTable = ()=>{

    clearTable();
    
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

let imprimir = ()=>{
    window.print();
}

btnTable();

setTimeout(imprimir(),5000);