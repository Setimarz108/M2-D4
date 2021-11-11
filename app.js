
let addGuest = document.querySelector('.addGuest')
  let list = document.getElementsByClassName('list-group')
let newName = document.querySelector('.guestName').value;


const addNewGuest = function(){

    addGuest.addEventListener('click', function(){

          
        for(let i = 0; i < list.length; i++){
                    
        let newNodeList = document.createElement('li')
        newNodeList.classList.add('list-group-item')
        newNodeList.innerHTML = newName
        list[i].appendChild(newNodeList)

        console.log(newNodeList[i])
         
    }

    })
        
}


addNewGuest()


