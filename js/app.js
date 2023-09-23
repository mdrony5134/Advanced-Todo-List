function selectElement(id){
    return document.getElementById(id)
}

const form = selectElement('form');
const date = selectElement('date');
const tBody = selectElement('t_body');

const todayDate = new Date().toISOString().slice(0, 10);
date.value = todayDate;

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputData = {};
    const inputElements = ([...this.elements])
    inputElements.forEach((elements) =>{
       if(elements.type !== 'submit'){
         inputData[elements.name] = elements.value;
       }
    })
    inputData.status = 'Incomplete'
    displayTask(inputData);
    this.reset();
})

function displayTask({name, priority, status, date}){
    const tr = document.createElement('tr');
    tr.innerHTML = 
    ` 
    <td>01</td>
    <td>${name}</td>
    <td>${priority}</td>
    <td>${status}</td>
    <td>${date}</td>
    <td>
        <button id="delete"><i class="fas fa-trash-alt"></i></button>
        <button id="check"><i class="fas fa-check-square"></i></button>
        <button id="edit"><i class="fas fa-edit"></i></button>
    </td>

    `
    tBody.appendChild(tr);
}