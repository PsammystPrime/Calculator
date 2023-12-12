const buttons = document.querySelectorAll('button')
const screen = document.querySelector('.input')

//add event listers for all buttons
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      const value = e.target.innerHTML  
      
     
      if (value === 'C') {
        screen.innerText = ''
      }
      else if (value === '.') {
        if (!screen.innerText.includes('.')) {
          screen.innerText  +=value 
        }
      }else {
         screen.innerText  +=value
      }

    })       
});

