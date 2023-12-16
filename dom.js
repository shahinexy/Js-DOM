// ================== By W3school ===================

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


// Drop dwon          (not working properly)
const dropDwon = document.querySelector('.main_item');
const dropItem = document.querySelector('.all_item');
// console.log(dropItem);
dropDwon.addEventListener('click', function(){
    dropItem.style.display = 'block';
})


// ==================================================================
// ==================================================================
// <!-- parent & child relation -->
const grandParent = document.querySelector('.list')
const parentcls = grandParent.children;
// console.log(parentcls);
const childcls = parentcls[1].children ;
// console.log(childcls);
// console.log(childcls[2]);

// direct way to catch child 
const children = grandParent.querySelectorAll('.item');
// console.log(children);

// if we want to go child to parent 
const childTopa = document.querySelector('.item');
const parentToga = childTopa.parentElement;
// console.log(parentToga);
const grandpa = childTopa.closest('.list');
// console.log(grandpa);

// get sibling
const childOne = document.querySelector('.item');
const childTow = childOne.nextElementSibling;
childTow.style.color = 'red';
// console.log(childTow);
const firstchild = childTow.previousElementSibling;
firstchild.style.color = 'green';
// console.log(firstchild);

// create element by js and insert
const newElement = document.createElement('div');
newElement.innerText = 'new element & insert befor & append child'
newElement.className = 'red';
newElement.setAttribute('id', 'red');
newElement.setAttribute('title', 'red_title');
// insert
const list = document.querySelector('.list');
const h2Element = list.querySelector('h2');
// list.insertBefore(newElement, h2Element);

// append child for adding in last // appendChild contain only html element and append html element and text content also. appendChild return the element but the append return undefined. in append u can add multiple thing.
list.appendChild(newElement);
list.append('hellow world');


// ====== login form ========
const password = document.querySelector('#password');
const showHid = document.querySelector('.show_hid');
showHid.addEventListener('click', ()=>{
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    if(showHid.innerText === 'Show'){
         showHid.innerText = 'Hide';
    } else{
        showHid.innerText = "Show";
    }
})