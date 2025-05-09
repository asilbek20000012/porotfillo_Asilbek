const form = document.getElementById("project-form");
const list = document.getElementById("project-list");
let projects = JSON.parse(localStorage.getItem("projects") || "[]");

function renderProjects() {
  list.innerHTML = "";
  projects.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `
      <strong>${p.name}</strong><br/>
      <a href="${p.vercel}" target="_blank">Vercel</a>
      <a href="${p.github}" target="_blank">GitHub</a>
      <button onclick="removeProject(${i})">X</button>
    `;
    list.appendChild(div);
  });
}

function removeProject(index) {
  projects.splice(index, 1);
  localStorage.setItem("projects", JSON.stringify(projects));
  renderProjects();
}

form.onsubmit = e => {
  e.preventDefault();
  const p = {
    name: document.getElementById("name").value,
    vercel: document.getElementById("vercel").value,
    github: document.getElementById("github").value,
  };
  projects.push(p);
  localStorage.setItem("projects", JSON.stringify(projects));
  form.reset();
  renderProjects();
};

renderProjects();


