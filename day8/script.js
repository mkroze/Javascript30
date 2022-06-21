const canva = document.getElementById('draw');
const context = canva.getContext('2d');

canva.width = window.innerWidth;
canva.height = window.innerHeight;

context.lineJoin = 'round';
context.lineCap = 'round';

let isDrawing = false;

let lastX = 0;
let lastY = 0;

let hue=0;
let direction=true;

function draw(e){
    if(!isDrawing) return;
    [lastX,lastY]=[e.offsetX,e.offsetY];
    
    context.strokeStyle = `hsl(${hue},100%,50%)`;
    context.beginPath();
    context.moveTo(lastX,lastY);
    context.lineTo(e.offsetX,e.offsetY);
    context.stroke();
    hue++;
    if(hue==360){
        hue=0;
    }
    if(context.lineWidth>100||context.lineWidth<=1){
        direction = !direction;
    }
    if (direction){
        context.lineWidth++;
    }
    else{
        context.lineWidth--;
    }
}
canva.addEventListener('mousedown',(e)=>{
    isDrawing=true;
    [lastX,lastY]=[e.offsetX,e.offsetY];
});
canva.addEventListener('mouseup',()=>isDrawing=false);
canva.addEventListener('mouseout',()=>isDrawing=false);
canva.addEventListener('mousemove',draw);