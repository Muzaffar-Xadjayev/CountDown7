let timeNow = new Date('Wed Dec 8 2021 00:00:00').getTime()
// console.log(timeNow);
let x = setInterval(function(){
    let now = new Date();
    let d = timeNow - now
    // console.log(d);

    let days = Math.floor(d/(1000*60*60*24));
    let hour = Math.floor((d%(1000*60*60*24)) / (1000*60*60));
    let minut = Math.floor((d%(1000*60*60)) / (1000*60));
    let second = Math.floor((d%(1000*60)) / 1000);


    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hour;
    document.getElementById('minutes').innerHTML = minut;
    document.getElementById('seconds').innerHTML = second;
},1000);