
const records = [
    { id: 14, name: "Kyle", grade: 86 }, 
    { id: 73, name: "Suzy", grade: 87 }, 
    { id: 112, name: "Frank", grade: 75 }, 
    { id: 6, name: "Sarah", grade: 91 }
 ];
export function getName(studentID) {
    let student = records.find(student => student.id == studentID);
    return student.name;
 }

 export function getGrade(studentID) {
     let student = records.find(student => student.id == studentID);
     return student.grade;
 }