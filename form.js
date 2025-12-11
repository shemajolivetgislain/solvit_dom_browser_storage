let tempData = {};

document.getElementById("studentform").addEventListener("submit", function (e) {
  e.preventDefault();

  tempData = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    stack: document.getElementById("stack").value,
  };

  console.log(tempData);

  document.getElementById("result").innerHTML = `
  
  Name: ${tempData.name} <br>
  Age:  ${tempData.age} <br>
  Stack:  ${tempData.stack}
  `;

  document.getElementById("saveBtn").style.display = "inline-block";
});

document.getElementById("saveBtn").addEventListener("click", function () {
  let students = JSON.parse(localStorage.getItem("students")) || [];

  students.push(tempData);

  localStorage.setItem("students", JSON.stringify(students));

  alert("Data Saved");
  displayStudents();

  document.getElementById("studentform").reset();
});

// Display alll students from Local Storage

function displayStudents() {
  const students = JSON.parse(localStorage.getItem("students")) || [];

  console.log(students);

  const resultListDiv = document.getElementById("resultList");

  // clear preview Content
  resultListDiv.innerHTML = "";

  const studentsHtml = students.map((student, index) => {
    return `
    <div> 
    <strong> Student ${index + 1}</strong> 
    Name: ${student.name}, Age: ${student.age} , stack: ${student.stack}`;
  });

  resultListDiv.innerHTML = studentsHtml;
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "light";
  document.body.className = saved;
});

function changeThemeColor() {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";

  document.body.className = newTheme;

  localStorage.setItem("theme", newTheme);
}

document
  .getElementById("changeTheme")
  .addEventListener("click", changeThemeColor);

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "f") {
    changeThemeColor();
  }
});
