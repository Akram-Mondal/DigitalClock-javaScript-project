let time = document.getElementById("time");
setInterval(() => {
    let today = new Date;
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    // console.log(h + ":" + m + ":" + s)
     time.innerHTML = h + ":" + m + ":" + s;
}, 1000);