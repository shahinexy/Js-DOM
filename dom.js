const p = document.getElementById('demo');
p.innerHTML = "Hello world";

const img = document.getElementById('myImage');
img.src = 'test.jpg'

function validateForm(){
    const x = document.forms['myForm']['fname'].value ;
    if(x == ''){
        alert('You must have ot write something')
        return false;
    }
}

// css 
const h1Style = document.querySelector('.style');
h1Style.style.color = 'green';
h1Style.style.fontSize = '40px';

const pera = document.querySelector('.css_style');
pera.style.padding = '40px';
pera.style.backgroundColor = 'red';
pera.style.color = 'white';
pera.style.borderRadius = '2rem';


// animetion
function move(){
    const animetion = document.querySelector('#animate');
    let position = 0;
    const intervel = setInterval(frame, 0.5);
    function frame(){
        if(position < 350){
            position++;
            animate.style.top = position + 'px';
            animate.style.left = position + 'px';
        } else{
            clearInterval(intervel);
        }
    }
}

// onclick event 
function clickToChange(){
    const title = document.querySelector('#onclick');
    title.innerHTML = 'Hello world';
}

//  addEventListener 
const evenlist = document.querySelector('.addevenlist');
evenlist.addEventListener('click', firstClick);
evenlist.addEventListener('click', secondClick);
function firstClick(){
    alert('this is first event')
}
function secondClick(){
    alert('this is second event')
}

// create new html element (nodes)
// const newP = document.createElement('p');
// const node = document.createTextNode('This is new paragraph create by js code');
// newP.appendChild(node);
// const element = document.querySelector('.div1');
// element.appendChild(newP);

// create new html element & set position (nodes)
// const newP = document.createElement('p');
// const node = document.createTextNode('This is new paragraph create by js code');
// newP.appendChild(node);
// const element = document.querySelector('.div1');
// const p2 = document.querySelector('#new_nod_1')
// element.insertBefore(newP, p2);

// remove element method
// const removeElement = document.querySelector('#reomove');
// removeElement.remove();

// removechild  method
const parent = document.querySelector('.div1')
const removeElement = document.querySelector('#reomove');
parent.removeChild(removeElement);

// repleacechild method
const newP = document.createElement('p');
const node = document.createTextNode('repleaced new paragraph create by js code');
newP.appendChild(node);
const element = document.querySelector('.div1');
const p2 = document.querySelector('#new_nod_1')
element.replaceChild(newP, p2)


// Drop dwon 
const dropDwon = document.querySelector('.main_item');
const dropItem = document.querySelector('.all_item');
console.log(dropItem);
dropDwon.addEventListener('click', function(e){
    if(e.checked){
        dropItem.style.display = 'block';
    }else{
        dropItem.style.display = 'none';
    }
})