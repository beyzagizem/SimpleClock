var akrep=document.querySelector(".akrep")
var yelkovan=document.querySelector(".yelkovan")
var saniye=document.querySelector(".saniye")
    
                                


setInterval(() => {
    const d =new Date ()
    var dSecond=d.getSeconds()
    var dHour=d.getHours()
    var dMinute=d.getMinutes()
    //console.log(d.getHours())
    //console.log(d.getSeconds())
    akrep.style.transform=`rotate(${((dSecond*6)+180)%360}deg)`
    saniye.style.transform=`rotate(${((dHour*30)+180)%360}deg)`
    yelkovan.style.transform=`rotate(${((dMinute*6)+180)%360}deg)`
    
}, 1000);   

