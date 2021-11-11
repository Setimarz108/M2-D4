
let addGuest = document.querySelector('.addGuest')
  let list = document.querySelector('.list-group')
 
  addGuest.addEventListener('click', function(){

    let newNodeList = document.createElement('li')
        newNodeList.classList.add('list-group-item')
        newNodeList.innerHTML = document.querySelector('.guestName').value;
        list.appendChild(newNodeList)
      
          
    })



const resetList = function (params) {
    
}



