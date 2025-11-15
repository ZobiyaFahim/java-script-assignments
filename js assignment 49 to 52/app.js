// assignment start 49 to 52
// ------------------------
// Question 1
// ------------------------

document.getElementById("signupForm").onsubmit = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entries = Object.fromEntries(formData.entries());
    document.getElementById("result").innerText =
        JSON.stringify(entries, null, 2);
};

// ------------------------
// Question 2
// ------------------------

document.getElementById("readMoreBtn").onclick = function () {
    const details = document.getElementById("itemDetails");
    const btn = document.getElementById("readMoreBtn");

    if (details.style.display === "none") {
        details.style.display = "block";
        btn.innerText = "Read Less";
    } else {
        details.style.display = "none";
        btn.innerText = "Read More";
    }
};

// ------------------------
// Question 3
// ------------------------

let students = [];

document.getElementById("studentForm").onsubmit = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const student = Object.fromEntries(formData.entries());
    students.push(student);
    renderTable();
    event.target.reset();
};

function renderTable() {
    const tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderTable();
}

function editStudent(index) {
    const student = students[index];
    const editForm = document.getElementById("editForm");

    editForm.style.display = "block";
    editForm.elements["name"].value = student.name;
    editForm.elements["age"].value = student.age;
    editForm.elements["grade"].value = student.grade;

    editForm.onsubmit = function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const updatedStudent = Object.fromEntries(formData.entries());
        students[index] = updatedStudent;
        renderTable();
        editForm.style.display = "none";
    };
}





// assignment end 49 to 52


























