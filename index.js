// Write your solution in this file!
var employee = {
    name: "Dan",
    streetAddress: "254 Street",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newOb = {...employee}
     newOb[key] = value;
     return newOb;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key, value) {
    const Ob = {}
    return {
        ...Ob,
        [key]: value,
    };
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}