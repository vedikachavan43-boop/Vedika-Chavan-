let students = [];

function addStudent() {
    let name = prompt("Enter Student Name");

    if (name != "" && name != null) {
        students.push(name);
        alert("Student Added");
    }
}

function removeStudent() {
    if (students.length > 0) {
        let remove = students.pop();
        alert(remove + " Removed");
    } else {
        alert("No Student Found");
    }
}

function showStudents() {
    let list = "";

    students.forEach(function(student) {
        list += student + "<br>";
    });

    document.getElementById("result").innerHTML = list;
}

function checkStudent() {
    let name = prompt("Enter Student Name");

    if (students.includes(name)) {
        alert("Student Found");
    } else {
        alert("Student Not Found");
    }
}

function totalStudents() {
    document.getElementById("result").innerHTML =
    "Total Students : " + students.length;
}