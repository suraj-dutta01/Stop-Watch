let time=document.querySelectorAll(".h")
let cont=document.querySelectorAll(".t")

let ms=0
let sec=0
let min=0
let timerId=null
let flag=false
let flag2=true

let start=()=>{
    if(flag==false){
        flag=true
        flag2=true
        timerId=  setInterval(()=>{
            time[2].textContent=`: ${ms} `
            ms++
            if(ms==100){
                ms=0
                sec++
                if(sec<10){
                    time[1].textContent=`:0${sec}`
                }else{
                    time[1].textContent=`: ${sec}`
                }
                if(sec==60){
                    sec=0
                   
                    min++
                    if(min<10){
                        time[0].textContent=`0${min}`
                    }else{
                        time[0].textContent=` ${min}`
                    }
                }
            }
        },10)
    }
  

}

let stop=()=>{
    if(flag2){
       flag2=false
       flag=false
        if(timerId!=null){
            clearInterval(timerId)
        }
    }

}
let count=0
let mark=()=>{
    
    if(timerId!=null){
        cont[count++].textContent=`${count}: ${min}:${sec}:${ms}`
        if(count==8){
            count=0
        }
    }

}

let reset=()=>{
    if(timerId!=null){
        flag=false
        flag2=true
        clearInterval(timerId)
        ms=0
        sec=0
        min=0
        time[0].textContent="00"
        time[1].textContent=":00"
        time[2].textContent=":00"
        for(let i=0;i<cont.length;i++){
            cont[i].textContent=""
        }

    }

}