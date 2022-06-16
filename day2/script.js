const secondHand = document.getElementsByClassName('hand seconds')[0];
const minuteHand = document.getElementsByClassName('hand minutes')[0];
const hourHand = document.getElementsByClassName('hand hours')[0];

function setDate(){
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    console.log("Hours :"+hours+ " Minutes :"+minutes+" Seconds :"+seconds );
    
    const secondsDegrees=((seconds/60)*360);
    secondHand.style.transform='rotate('+secondsDegrees+'deg)';
    
    const minutesDegrees=((minutes/60)*360);
    minuteHand.style.transform='rotate('+minutesDegrees+'deg)';
    
    const hoursDegrees=((hours/12)*360);
    hourHand.style.transform='rotate('+hoursDegrees+'deg)';
    
    
}
setInterval(setDate, 1000);