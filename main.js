const list = document.querySelector('.list');
const newItem = document.getElementById('new-item');

list.ondragover = event => event.preventDefault();
list.ondragenter = () => list.className += ' hovered';
list.ondragleave = () => list.className = 'list';
list.ondrop = () => {
    list.appendChild(createItem());
    list.className = 'list';
};
newItem.ondragstart = () => newItem.className = 'inactive';
newItem.ondragend = () => newItem.className = '';

const createItem = () => {
    const item = document.createElement('input');
    item.className = 'item';
    item.type = 'text';
    item.value = 'New Item';
    return item;
};
