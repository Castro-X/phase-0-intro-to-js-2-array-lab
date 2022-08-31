// Write your solution here!

let employee = {
    name: 'Castro',
    streetAddress : '14th street' 
};

function updateEmployeeWithKeyAndValue(employee, key, value){
     const newEmployee = {...employee};

     newEmployee[key] = value;
      return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    employee.name = 'Bob';
    employee.streetAddress = '49th Helm';

    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};

    delete newEmployee.name;

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee.name;
    return employee;
}
