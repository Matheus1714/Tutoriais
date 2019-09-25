// Create a new line item in table when clicking on the "Adicionar" button
function newElement(){
    // Create elements tr and td
    var tr = document.createElement("tr");
    var matterTd = document.createElement("td");
    var courceTd = document.createElement("td");
    // Get elements in input tag
    var matter = document.getElementById("matter").value;
    var cource = document.getElementById("cource").value;
    // Transform elements in input at text
    var matterTxt = document.createTextNode(matter);
    var courceTxt = document.createTextNode(cource);
    // Add element in td tag
    matterTd.appendChild(matterTxt);
    courceTd.appendChild(courceTxt);
    // Add element in tr tag
    tr.appendChild(matterTd);
    tr.appendChild(courceTd);
    console.log(tr);
    // Verify null elements or add elements in table
    if(matter == '' || cource == ''){
        alert("Você deve escrever algo!");
    }else{
        document.getElementById("showTable").appendChild(tr);
    }
    // Erase variables in inputs
    document.getElementById("matter").value = "";
    document.getElementById("cource").value = "";
}