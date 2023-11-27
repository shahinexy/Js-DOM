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