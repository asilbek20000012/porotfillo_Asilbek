function askCode() {
  const code = prompt("Parolni kiriting:");
  if (code === "2012") {
    window.location.href = "admin.html";
  } else {
    alert("Noto‘g‘ri parol");
  }
}

const projects = JSON.parse(localStorage.getItem("projects") || "[]");
const projectList = document.getElementById("project-list");

projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `
    <h3>${p.name}</h3>
    <a href="${p.vercel}" target="_blank">Sayt (Vercel)</a><br/>
    <a href="${p.github}" target="_blank">Kod (GitHub)</a>
  `;
  projectList.appendChild(div);
});
