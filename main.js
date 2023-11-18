let toggle = document.querySelector(".circle")
let price = document.querySelector(".fasi1")
let meoreprice = document.querySelector(".fasi2")
let mesameprice = document.querySelector(".fasi3")


// let meorefasi = 24.9
// let mesamefasi = 39.9

let fasi = 19.9
toggle.addEventListener('click',()=>{
    if(fasi < 40){
        fasi *= 10
    }else{
        fasi/=10
    }
    console.log(fasi)

    price.innerHTML = fasi

    
    toggle.classList.toggle("marjvniv")
})

let meorefasi = 24.9
toggle.addEventListener('click',()=>{
    if(meorefasi < 40){
        meorefasi *= 10
    }else{
        meorefasi /=10
    }
    console.log(meorefasi)

    meoreprice.innerHTML = meorefasi   
})

let mesamefasi = 39.9
toggle.addEventListener('click',()=>{
    if(mesamefasi < 40){
        mesamefasi *= 10
    }else{
        mesamefasi /=10
    }
    console.log(mesamefasi)
    mesameprice.innerHTML = mesamefasi   

})
