let addForm = document.getElementById('add-item');
let list = document.getElementById('list');

addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let value = document.querySelector('input[type="text"]').value;
    let item = document.createElement('li');
    item.innerHTML = value;
    list.appendChild(item);
})