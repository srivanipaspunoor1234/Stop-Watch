let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let p = document.getElementById("p");
let sec =0;
let min =0;
let millisec =0;
let timer;
let is_time_running = false;
btn1.onclick = ()=>{
    if(is_time_running == true){
        return
    }
    is_time_running = true;
  timer = setInterval(()=>{
    millisec++
    if(millisec == 100){
    sec++;
    millisec =0;
    }
    if(sec == 60){
    min++;
    sec=0;
   }
    p.textContent = (min<10? "0"+min : min)+":"+(sec<10? "0"+sec : sec)+":"+(millisec<10? "0"+millisec : millisec);
   },10);
}
btn3.onclick = ()=>{
    clearInterval(timer);
     is_time_running = false;
}
btn2.onclick = ()=>{
    sec=0;
    min =0;
    millisec =0;
   p.textContent = "00:00:00";
   clearInterval(timer);
    is_time_running = false;
}