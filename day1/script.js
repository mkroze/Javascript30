const drumCase = [
    {
        "id": 0,
        "letter" : 'A',
        "description" : 'CLAP',
        "sound" :  new Audio('Sounds/clap.wav') 
    },
    {
        "id": 1,
        "letter" : 'S',
        "description" : 'HIHAT',
        "sound" :  new Audio('Sounds/hihat.wav') 
    },
    {
        "id": 2,
        "letter" : 'D',
        "description" : 'KICK',
        "sound" :  new Audio('Sounds/kick.wav') 
    },
    {
        "id": 3,
        "letter" :'F' ,
        "description" : 'OPENHAT',
        "sound" :  new Audio('Sounds/openhat.wav') 
    },
    {
        "id": 4,
        "letter" : 'G',
        "description" : 'BOOM',
        "sound" :  new Audio('Sounds/boom.wav') 
    },
    {
        "id": 5,
        "letter" : 'H',
        "description" : 'RIDE',
        "sound" :  new Audio('Sounds/ride.wav') 
    },
    {
        "id": 6,
        "letter" : 'J',
        "description" : 'SNARE',
        "sound" :  new Audio('Sounds/snare.wav') 
    },
    {
        "id": 7,
        "letter" : 'K',
        "description" : 'TOM',
        "sound" :  new Audio('Sounds/tom.wav') 
    },
    {
        "id": 8,
        "letter" : 'L',
        "description" : 'TINK',
        "sound" :  new Audio('Sounds/tink.wav') 
    }    
]
function displayBox(box){
    div=document.createElement('div');
    div.setAttribute("class","case");
    div.setAttribute("id",box.id);
    div.setAttribute("onclick","makeSound1(this)");
    //div.onclick()=makeSound(this);

    title = document.createElement('h1');
    title.innerHTML = box.letter;

    text = document.createElement('p');
    text.innerHTML = box.description;
    
    div.appendChild(title);
    div.appendChild(text);
    return div;
}

function displayAllBoxes(){
    for(element of drumCase){
        document
        .getElementById('thisIsIt')
        .appendChild(displayBox(element));
    }
}
function makeSound1(value){
    id = value.id;
    drumCase[id].sound.play();

    value.setAttribute("class","case playing");
    setTimeout(() => {
        value.setAttribute("class","case");
    }, 100);
}

document.addEventListener('keydown',(event)=>{
    switch(event.key){
        case 'a': 
        drumCase[0].sound.play();
        document.getElementById(0).setAttribute("class","case playing");
        setTimeout(() => {
        document.getElementById(0).setAttribute("class","case");
        }, 100);
            break;
        case 's': 
        drumCase[1].sound.play();
        document.getElementById(1).setAttribute("class","case playing");
        setTimeout(() => {
        document.getElementById(1).setAttribute("class","case");
        }, 100);
            break;
        case 'd': drumCase[2].sound.play();
        document.getElementById(2).setAttribute("class","case playing");
        setTimeout(() => {
        document.getElementById(2).setAttribute("class","case");
        }, 100);
            break;
        case 'f': drumCase[3].sound.play();
        document.getElementById(3).setAttribute("class","case playing");
        setTimeout(() => {
        document.getElementById(3).setAttribute("class","case");
        }, 100);
            break;
        case 'g': drumCase[4].sound.play();
        document.getElementById(4).setAttribute("class","case playing");
        setTimeout(() => {
        document.getElementById(4).setAttribute("class","case");
        }, 100);
            break;
        case 'h': drumCase[5].sound.play();
        document.getElementById(5).setAttribute("class","case playing");
        setTimeout(() => {
        document.getElementById(5).setAttribute("class","case");
        }, 100);
            break;
        case 'j': drumCase[6].sound.play();
        document.getElementById(6).setAttribute("class","case playing");
        setTimeout(() => {
        document.getElementById(6).setAttribute("class","case");
        }, 100);
            break;
        case 'k': drumCase[7].sound.play();
        document.getElementById(7).setAttribute("class","case playing");
        setTimeout(() => {
        document.getElementById(7).setAttribute("class","case");
        }, 100);
            break;
        case 'l': drumCase[8].sound.play();
        document.getElementById(8).setAttribute("class","case playing");
        setTimeout(() => {
        document.getElementById(8).setAttribute("class","case");
        }, 100);
            break;
    }
},false);