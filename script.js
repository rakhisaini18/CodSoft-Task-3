let display =document.getElementById('Display')
let buttons=document.querySelectorAll('button')

buttons.forEach((btn)=>{
    btn.addEventListener('click',function(){
        if (btn.id==='C'){
            Display.value=""
        }else if (btn.id==='='){
            Display.value=eval(Display.value)
        }else if (btn.id ==='DEL'){
            Display.value=Display.value.slice(0,-1)
        }else{
            Display.value+=btn.id
        }
    })

})