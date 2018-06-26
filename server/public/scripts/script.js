let employees = [     // object worker = {name,last,id,title,annualSay}
    // {
    //     name: 'Jen',
    //     last: 'Barber',
    //     id: 4521,
    //     title: 'Team Lead',
    //     annualSal: 80000,
    // }, {
    //     name: 'Maurice',
    //     last: 'Moss',
    //     id: 8721,
    //     title: 'Support Team',
    //     annualSal: 58000,
    // }, {
    //     name: 'Roy',
    //     last: 'Smith',
    //     id: 9623,
    //     title: 'Quality Assurance',
    //     annualSal: 48000,
    // }
];


$(document).ready(readyNow);

function readyNow() {
    addClickHandlers();
    setTotalMonthly();
    for (let employ of employees) {
        let $row = $('<tr></tr>');
        $row.append(`<td>${employ.name}</td>`)
        $row.append(`<td>${employ.last}</td>`)
        $row.append(`<td>${employ.id}</td>`)
        $row.append(`<td>${employ.title}</td>`)
        $row.append(`<td>${employ.annualSal}</td>`)
        $row.append(`<td><button class='deleteBtn'>DELETE</button></td>`)
        $('#tableBody').append($row);

    }

}

function handleSubmit() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let employId = $('#employId').val();
    let title = $('#title').val();
    let annualSal = parseInt($('#annualSalary').val());   //when storing data, convert string to number

    //creating new object with the attribute inputs above. Then add new object to array
    let newEmployee = {
        name: firstName,
        last: lastName,
        id: employId,
        title: title,
        annualSal: annualSal,
    }
    //pushing the new object to employees array
    employees.push(newEmployee);
    
    let $row;
    //append to DOM
    for (let i = 0; i < employees.length; i++) {   //assigning a index to each row created

        $row = $('<tr data-index="' + i + '"></tr>');
        $row.append(`<td>${firstName}</td>`)
        $row.append(`<td>${lastName}</td>`)
        $row.append(`<td>${employId}</td>`)
        $row.append(`<td>${title}</td>`)
        $row.append(`<td>${annualSal}</td>`)
        $row.append(`<td><button class='deleteBtn'>DELETE</button></td>`)

    }

    $('#tableBody').append($row);

    //clear input val
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employId').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    console.log(employees);
    //call function for total salary
    setTotalMonthly();
}

function addClickHandlers() {
    $('#submit').on('click', handleSubmit);
    $('#tableBody').on('click', '.deleteBtn', handleDelete);
}

function handleDelete() {
    let row = $(this).closest('tr')
    let index = $(this).closest('tr').data('index')  //data targeting index
    //remove that index of that employee from the array
    employees.splice(index, 1)
    row.remove();
    // update the total again by calling the total function
    setTotalMonthly();
    console.log(employees);

}

 //access elements in array, if elements is an object, access key
 function setTotalMonthly() {
    let totalMonthly = 0;
    for (let i = 0; i < employees.length; i++) {   // looping through the array
        //employee[i] == worker
        //employee[i].anualSal == worker.anualSal
        totalMonthly += employees[i].annualSal / 12 // accessing the object annualSal from employees array and adding it to totalMonthly    
    }

    if (totalMonthly > 20000) {
        $('#totalMonthly').css("background-color", "red");
    } else {
        $('#totalMonthly').css("background-color", "white");
    }

    console.log(totalMonthly);

    $('#totalMonthly').text((Math.round(totalMonthly)));
}

