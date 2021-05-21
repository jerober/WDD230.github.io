// // target using a tag
// const link = document.querySelector('a');
// link.textContent = 'Mozilla Developer Network';
// link.href = 'https://developer.mozilla.org/';

// // target using section tag
// const sect = document.querySelector('section');
// // sect.textContent = 'Mozilla Developer Network';
// // sect.href = 'https://developer.mozilla.org/';

// // create new paragraph element
// const para = document.createElement('p');
// para.textContent = 'We hope you enjoyed the ride.';
// sect.appendChild(para);

// // create text node
// const text = document.createTextNode('- the premier source for web development knowledge');
// const linkPara = document.querySelector('p');
// linkPara.appendChild(text);

// // css styling in js
// // para.style.color = 'white';
// // para.style.backgroundColor = 'black';
// // para.style.padding = '10px';
// // para.style.width = '250px';
// // para.style.textAlign = 'center';


// para.setAttribute('class', 'highlight');


// Pracy2
// // selecting the div
// const div = document.querySelector('div');
// let winWidth = window.innerWidth;
// let winHeight = window.innerHeight;

// div.style.width = winWidth + 'px';
// div.style.height = winHeight + 'px';

// window.onresize = function() {
//     winWidth = window.innerWidth;
//     winHeight = window.innerHeight;
//     div.style.width = winWidth + 'px';
//     div.style.height = winHeight + 'px';
// }

// Pracy3
// creating variables
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
    let myItem = input.value;
    input.value = '';
    
    const listItm = document.createElement('li');
    const listBtn = document.createElement('button');
    const listTxt = document.createElement('span');

    listItm.appendChild(listTxt);
    listTxt.textContent(myItem);
    listItm.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    ul.appendChild(listItm);

    listBtn.onclick = function(e) {
        ul.removeChild(listItm);
    }
    input.focus();
}