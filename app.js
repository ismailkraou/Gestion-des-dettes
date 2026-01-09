const RATE = 10;
let people = JSON.parse(localStorage.getItem("people")) || [];
let savedPass = localStorage.getItem("pass");

function unlock() {
  const p = document.getElementById("password").value;
  if (!savedPass) {
    localStorage.setItem("pass", p);
    location.reload();
  }
  if (p === savedPass) {
    document.getElementById("lock").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    alert("Mot de passe incorrect");
  }
}

function save() {
  localStorage.setItem("people", JSON.stringify(people));
}

function addLoan() {
  const name = document.getElementById("name").value.trim();
  const amount = Number(document.getElementById("amount").value);
  if (!name || !amount) return;

  let person = people.find(p => p.name === name);
  if (!person) {
    person = { name, loans: [] };
    people.push(person);
  }
  person.loans.push(amount);
  save();
  render();
}

function convert(dh, cur) {
  if (cur === "usd" || cur === "eur") return (dh / RATE).toFixed(2);
  return dh;
}

function render() {
  const list = document.getElementById("list");
  const totalEl = document.getElementById("total");
  const cur = document.getElementById("currency").value;
  list.innerHTML = "";
  let total = 0;

  people.forEach(p => {
    const sum = p.loans.reduce((a,b)=>a+b,0);
    total += sum;
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${p.name}</strong><br>
      ${p.loans.join(" + ")} = <b>${convert(sum,cur)} ${cur}</b>
    `;
    list.appendChild(li);
  });

  totalEl.textContent = convert(total,cur) + " " + cur;
}

function exportJSON() {
  const blob = new Blob([JSON.stringify(people)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "dettes.json";
  a.click();
}

function importJSON(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    people = JSON.parse(reader.result);
    save();
    render();
  };
  reader.readAsText(file);
}

render();
