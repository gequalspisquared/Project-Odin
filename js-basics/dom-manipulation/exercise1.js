

const container = document.querySelector('#container');

// Example div
const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is the glorious text-content!";

// Part 1
const paragraph = document.createElement('p');
paragraph.style.color = 'red';
paragraph.textContent = 'Hey I\'m red!';

// Part 2
const header3 = document.createElement('h3');
header3.style.color = 'blue';
header3.textContent = 'I\'m a blue h3!';

// Part 3
const divWithChildren = document.createElement('div');
divWithChildren.style.borderStyle = 'solid';
divWithChildren.style.borderColor = 'black';
divWithChildren.style.backgroundColor = 'pink';

// Part 4
const header1 = document.createElement('h1');
header1.textContent = 'I\'m in a div!';

// Part 5
const divParagraph = document.createElement('p');
divParagraph.textContent = 'ME TOO!';

// Add div elements to div
divWithChildren.appendChild(header1);
divWithChildren.appendChild(divParagraph);

// Add elements to parent container
container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(header3);
container.appendChild(divWithChildren);