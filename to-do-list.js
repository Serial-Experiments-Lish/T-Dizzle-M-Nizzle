const toDoAdd = document.getElementById('submit');
const tdList = document.getElementsByTagName('ul');
const itemInput = document.getElementById('t-d-list');

let addToList = () => {
    let nextItem = document.createElement('li');
    nextItem.innerHTML = itemInput.value;
    tdList[0].appendChild(nextItem);
    itemInput.value = '';
}

toDoAdd.addEventListener('click', (e) => {
    addToList();
});

tdList[0].addEventListener('click', (e) => {
    e.target.remove();
})