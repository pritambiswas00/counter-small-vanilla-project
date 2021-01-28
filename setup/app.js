let count = 0;

const values = document.querySelector('#value')
const buttons = document.querySelectorAll('.btn')

buttons.forEach(function(button){
     button.addEventListener('click', function(e){
         const style = e.currentTarget.classList
         console.log(style)
         if(style.contains('decrease')){
             count--;
             console.log(count)
         }
         else if (style.contains('increase')){
             count++;
         }
         else{
             count = 0
         }
         if(count>0){
             values.style.color = 'green'
         }
         if(count<0){
             values.style.color = 'red'
         }
         if(count===0){
             values.style.color = 'black'
         }
         values.textContent = count
         
     });
})
