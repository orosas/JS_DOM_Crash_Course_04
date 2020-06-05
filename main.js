var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    console.log(1);

    // Get input value

    let newItem = document.getElementById('item').value;
    console.log(newItem);
    let li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    let deleteBtn = document.createElement('button');
    // Add classes to the button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('CC'));
    // Append button to li
    li.appendChild(deleteBtn);
    

    itemList.appendChild(li);
}