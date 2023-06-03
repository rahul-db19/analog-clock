function displayTime(){
    let secondhand = document.getElementById("secondhand")
    let minutehand = document.getElementById("minutehand")
    let hourhand = document.getElementById("hourhand")
    let d = new Date();
    let seconds = d.getSeconds();
    let minute = d.getMinutes();
    let hour = d.getHours();

    secondhand.style.transform = `translate(-50%,-50%) rotate(${seconds*6}deg)`
    minutehand.style.transform = `translate(-50%,-50%) rotate(${minute*6}deg)`
    hourhand.style.transform = `translate(-50%,-50%) rotate(${(hour*30)+(minute*0.5)}deg)`
}
setInterval(()=>{displayTime()},1000)