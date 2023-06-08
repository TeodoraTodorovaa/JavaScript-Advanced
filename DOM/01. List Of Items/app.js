function addItem() {
    const text = document.getElementById('newItemText').value;
    const liElement = document.createElement('li');
    liElement.textContent = text;


    if (text.trim() == '') {
        alert('Input field is empty');
    } else {
        document.getElementById('items').appendChild(liElement);
        document.getElementById('newItemText').value = '';
    }
}