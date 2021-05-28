// creating variables
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const outputList = document.querySelector('#list');

button.addEventListener('click', () => {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    let chapter = input.value;

    li.textContent(chapter);
    deleteButton.textContent = '❌';

    li.append(deleteButton);

    outputList.appendChild(li);

    deleteButton.addEventListener('click', function() {
        outputList.removeChild(li);
        input.focus();
    });

});

input = '';
input.focus();