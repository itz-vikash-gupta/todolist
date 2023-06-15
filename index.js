document.querySelector('.list').addEventListener('click', function(event) {
    var listItem = event.target.closest('.list-item');
    
    // button edit
    if (event.target.classList.contains('edit-button')) {
      var paragraph = listItem.querySelector('.list-item-text');
      var newText = prompt('Edit item:', paragraph.textContent);
      if (newText !== null) {
        paragraph.textContent = newText;
      }
    }
    
    // button delet
    else if (event.target.classList.contains('delete-button')) {
      listItem.remove();
    }
  });
  
  function addlist() {
    var inputValue = document.getElementById('content').value.trim();
    if (inputValue !== '') {
      var listItem = document.createElement('div');
      listItem.setAttribute("id", "myDiv");
      listItem.classList.add('list-item');
  
      var paragraph = document.createElement('p');
      paragraph.classList.add('list-item-text');
      paragraph.textContent = inputValue;
  

      const buttonDiv = document.createElement('div');
        buttonDiv.setAttribute("id", "buttonDiv")


      var editButton = document.createElement('button');
      editButton.classList.add('edit-button');
      editButton.textContent = 'Edit';
      editButton.setAttribute("id", "editButton")
  
      var deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.textContent = 'Delete';
      deleteButton.setAttribute("id", "deleteButton")
  
      listItem.appendChild(paragraph);
      buttonDiv.appendChild(editButton);
      buttonDiv.appendChild(deleteButton);
      listItem.appendChild(buttonDiv);



      var list = document.querySelector('.list');
      list.appendChild(listItem);
  
      document.getElementById('content').value = '';
    }
  }
  




















// function addlist() {
   
//     let inputValue = document.getElementById('content').value.trim();
//   if(inputValue !==''){
//     const listItem = document.createElement('div');
//     // listItem.setAttribute("id", "myDiv");

//     const listItemP = document.createElement('p');
//     listItemP.textContent = inputValue;
// console.log(listItemP);
//     listItem.appendChild(listItemP);
//     console.log(listItem);

//    const list = document.querySelector('.list');
//    list.appendChild(listItem);

//    listItem.classList.add('inerlist'); 
//     document.getElementById(content).value = '';
//     console.log(list);
//   }

// }