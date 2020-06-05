var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter Event
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    console.log(1);

    // Get input value

    let newItem = document.getElementById('item').value;
    console.log(`newItem: ${newItem}`);
    let li = document.createElement('li');
    // Add class to li
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    let deleteBtn = document.createElement('button');
    // Add classes to the button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('CC'));
    // Append button to li element
    li.appendChild(deleteBtn);
    

    itemList.appendChild(li);
}



function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            // Se obtiene el parentElement, el cua es <li>
            let li = e.target.parentElement;
            // Se elimina el li, que es Child del itemList (nodo ul)
            console.log(itemList.removeChild(li));
        }
    }
}

// Filter items
function filterItems(e){
    // Convert text to lowercase
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');

    // Convert items from HTMLCollection to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        // Nota: indexOf buscará text en itemName. If not found returns -1
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
}