const images =[
    {
        id:0,
        source:'https://source.unsplash.com/gYl-UtwNg_I/1500x1500',
        first:'Hey ',
        middle:'let\'s ',
        last:'dance'
    },
    {
        id:1,
        source:'https://source.unsplash.com/rFKUFzjPYiQ/1500x1500',
        first:'Give',
        middle:'Take',
        last:'Receive'
    },
    {
        id:2,
        source:'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d',
        first:'Experience',
        middle:'It',
        last:'Today'
    },
    {
        id:3,
        source:'https://source.unsplash.com/ITjiVXcwVng/1500x1500',
        first:'Give',
        middle:'All',
        last:'You can'
    },
    {
        id:4,
        source:'https://source.unsplash.com/3MNzGlQM7qs/1500x1500',
        first:'Life',
        middle:'In',
        last:'Motion'
    }
];

function displayBox(box){
    let div = document.createElement('div');
    div.style.backgroundImage = 'url('+ box.source +')';
    div.setAttribute('class','item');
    div.setAttribute('onclick','highlight(this)');

    let first = document.createElement('p');
    first.innerHTML=box.first;

    let middle = document.createElement('p');
    middle.innerHTML=box.middle;

    let last = document.createElement('p');
    last.innerHTML=box.last;

    div.appendChild(first);
    div.appendChild(middle);
    div.appendChild(last);

    return div;
}
function displayAllBoxes(){
    for(element of images){
        document
        .getElementById('container')
        .appendChild(displayBox(element));
    }
}
function highlight(value){
    value.classList.toggle('open');
}