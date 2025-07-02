const adminForm = document.getElementById('adminForm');
const adminTable = document.getElementById('adminTable');

adminForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('adminName').value;
  const email = document.getElementById('adminEmail').value;
  const role = document.getElementById('adminRole').value;

  const row = adminTable.insertRow();
  row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${role}</td>
    <td><button onclick="this.closest('tr').remove()">Delete</button></td>
  `;

  adminForm.reset();
});

const contentForm = document.getElementById('contentForm');
const contentList = document.getElementById('contentList');

contentForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('contentTitle').value;
  const desc = document.getElementById('contentDesc').value;

  const card = document.createElement('div');
  card.className = 'content-card';
  card.innerHTML = `
    <h3>${title}</h3>
    <p>${desc}</p>
    <button onclick="this.parentElement.remove()">Delete</button>
  `;

  contentList.appendChild(card);
  contentForm.reset();
});
