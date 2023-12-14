// const itemDelete = document.querySelectorAll('.container .delete');
// Array.from(itemDelete).forEach(function(btn){
//     btn.addEventListener('click', function(x){
//         const li = x.target.parentElement;
//         li.parentElement.removeChild(li);
//         // you can also use parentNode in the place of parentElement 
//     })
// })


// the same work in dynamic way 
// =================================
const listUl = document.querySelector('.container ul');
listUl.addEventListener('click', function(click){
    if(click.target.className == 'delete'){
        const li = click.target.parentElement;
        li.parentElement.removeChild(li);
    }
})


// added form control
const addList = document.forms['add_list'];
addList.addEventListener('submit', function(add){
    add.preventDefault();
    const value = add.target.querySelector('input[type="text"]').value;
    // console.log(value);
 
    // create element 
    const newLi = document.createElement('li')
    const addName = document.createElement('span')
    const deleteBtn = document.createElement('span')

    
    //add content
    addName.textContent = value;
    deleteBtn.textContent = 'Delete';
    
    // add class
    addName.classList.add('name');
    deleteBtn.classList.add('delete')
    
    // append child
    newLi.appendChild(addName);
    newLi.appendChild(deleteBtn);
    listUl.appendChild(newLi);
})

// Check box
const checkBox = document.querySelector('#hide');
checkBox.addEventListener('change', function(check){
    if(checkBox.checked){
        listUl.style.display = 'none';
    } else{
        listUl.style.display = 'initial';
    }
})


// Search list
const searchList = document.forms['search_fild'].querySelector('input');
searchList.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const list = listUl.getElementsByTagName('li');
    Array.from(list).forEach(function(list){
        const title = list.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            list.style.display = 'block';
        } else{
            list.style.display = 'none';

        }
    })

})


// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            } else{
                panel.classList.remove('active');
            }
        }) 
    }
})