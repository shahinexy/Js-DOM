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