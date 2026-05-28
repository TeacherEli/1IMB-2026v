const groups = [
  {
    students: ["Tobias", "Andreas", "Jonas"],
    file: "../html/TobiasAndreasJonas.html",
  },
  {
    students: ["Benyamin", "Leon", "Even"],
    file: "../html/BenyaminLeonEven.html",
  },
  {
    students: ["Aksel", "Shreyas", "Oscar"],
    file: "../html/AkselShreyasOscar.html",
    },
];

const container = document.querySelector(".student-groups");

groups.forEach((group) => {
  const a = document.createElement("a");
  a.href = group.file;
  a.className = "student-group-card";
  a.textContent = group.students.join(", ");
  container.appendChild(a);
});
