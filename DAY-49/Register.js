let selectedRow = null;

function addStudent(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let className = document.getElementById("class").value;
    let roll = document.getElementById("roll").value;

    if(name === "" || age === "" || className === "" || roll === ""){
        alert("Please fill all fields");
        return;
    }

    if(selectedRow == null){
        let table = document.getElementById("studentTable");
        let newRow = table.insertRow(-1);

        newRow.insertCell(0).innerHTML = name;
        newRow.insertCell(1).innerHTML = age;
        newRow.insertCell(2).innerHTML = className;
        newRow.insertCell(3).innerHTML = roll;
        newRow.insertCell(4).innerHTML =
            `<button onclick="editStudent(this)">Edit</button>
             <button onclick="deleteStudent(this)">Delete</button>`;

        alert("Thank You! Form Submitted Successfully");
    } else {
        selectedRow.cells[0].innerHTML = name;
        selectedRow.cells[1].innerHTML = age;
        selectedRow.cells[2].innerHTML = className;
        selectedRow.cells[3].innerHTML = roll;

        selectedRow = null;
    }

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("class").value = "";
    document.getElementById("roll").value = "";
}

function editStudent(btn){
    selectedRow = btn.parentElement.parentElement;

    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("class").value = selectedRow.cells[2].innerHTML;
    document.getElementById("roll").value = selectedRow.cells[3].innerHTML;
}

function deleteStudent(btn){
    if(confirm("Are you sure to delete?")){
        let row = btn.parentElement.parentElement;
        row.remove();
    }
}