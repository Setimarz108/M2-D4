
let addGuest = document.querySelector('.addGuest')
  let list = document.getElementsByClassName('list-group')



const addNewGuest = function(){

    addGuest.addEventListener('click', function(){

         let newName = document.querySelector('.guestName').value;
           
        for(let i = 0; i < list[i].length; i++){
            
        let newNodeList = document.createElement('li')
        newNodeList.classList.add('list-group-item')
        newNodeList[i].innerText = newName
        list.appendChild(newNodeList)
          
    }

    })
        
}

addNewGuest()


