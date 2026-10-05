// Student data
let students = [
    {
        id: 101,
        name: "Rahul Patil",
        email: "rahul@gmail.com",
        course: "Computer Engineering",
        semester: "5th"
    },
    {
        id: 102,
        name: "Priya Sharma",
        email: "priya@gmail.com",
        course: "Computer Engineering",
        semester: "5th"
    },
    {
        id: 103,
        name: "Amit Jadhav",
        email: "amit@gmail.com",
        course: "Computer Engineering",
        semester: "5th"
    }
];


// Display students
function displayStudents(studentList = students) {

    const tableBody = document.querySelector("#studentTableBody");

    tableBody.innerHTML = "";

    studentList.forEach(function(student) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td>${student.semester}</td>
            <td>
                <button class="delete-btn"
                    onclick="deleteStudent(${student.id})">
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });

    updateStatistics();
}


// Add student
function addStudent() {

    const name = document.querySelector("#studentName").value;
    const email = document.querySelector("#studentEmail").value;
    const course = document.querySelector("#studentCourse").value;
    const semester = document.querySelector("#studentSemester").value;

    if (name === "" || email === "" || course === "" || semester === "") {
        alert("Please fill all fields.");
        return;
    }

    const newStudent = {
        id: students.length + 101,
        name: name,
        email: email,
        course: course,
        semester: semester
    };

    students.push(newStudent);

    displayStudents();

    document.querySelector("#studentName").value = "";
    document.querySelector("#studentEmail").value = "";
    document.querySelector("#studentCourse").value = "";
    document.querySelector("#studentSemester").value = "";

    alert("Student added successfully!");
}


// Delete student
function deleteStudent(id) {

    students = students.filter(function(student) {
        return student.id !== id;
    });

    displayStudents();
}


// Search student
function searchStudent() {

    const searchValue =
        document.querySelector("#searchInput").value.toLowerCase();

    const filteredStudents = students.filter(function(student) {

        return (
            student.name.toLowerCase().includes(searchValue) ||
            student.email.toLowerCase().includes(searchValue) ||
            student.course.toLowerCase().includes(searchValue)
        );

    });

    displayStudents(filteredStudents);
}


// Update statistics
function updateStatistics() {

    document.querySelector("#totalStudents").textContent =
        students.length;

    document.querySelector("#maleStudents").textContent =
        Math.round(students.length * 0.56);

    document.querySelector("#femaleStudents").textContent =
        students.length -
        Math.round(students.length * 0.56);
}


// Run when page loads
displayStudents();