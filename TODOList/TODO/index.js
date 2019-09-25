// Create a new line item in table when clicking on the "Adicionar" button
function newElement(){
    // Create elements tr and td
    let tr = document.createElement("tr");
    let matterTd = document.createElement("td");
    let courceTd = document.createElement("td");
    // Get elements in input tag
    let matter = document.getElementById("matter").value;
    let cource = document.getElementById("cource").value;
    // Transform elements in input at text
    let matterTxt = document.createTextNode(matter);
    let courceTxt = document.createTextNode(cource);
    // Add element in td tag
    matterTd.appendChild(matterTxt);
    courceTd.appendChild(courceTxt);
    // Add element in tr tag
    tr.appendChild(matterTd);
    tr.appendChild(courceTd);
    // Verify null elements or add elements in table
    if(matter == '' || cource == ''){
        alert("Você deve escrever algo!");
    }else{
        document.getElementsByTagName("tbody")[0].appendChild(tr);
    }
    // Erase variables in inputs
    document.getElementById("matter").value = "";
    document.getElementById("cource").value = "";
}
// Delete elements in table
function removeElement(){
    // Get element in input tag
    let index = document.getElementById("index").value;
    // Get elements in tag 
    let tbody = document.getElementsByTagName("tbody")[0];
    let tr = document.getElementsByTagName("tr");
    // Verify index value
    if(index => tr.length || index < 1){
        alert("A deleção é impossível");
    }else{
        tbody.removeChild(tr[index]);
    }
    // Erase variables in inputs
    document.getElementById("index").value = "";
}
