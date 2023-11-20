const buttons = document.querySelectorAll('button')
const screen = document.querySelector('.input')

//add event listers for all buttons
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      const value = e.target.innerHTML  
      screen.innerText  +=value 
     
      if (value === 'C') {
        screen.innerText = ''
      }

    })       
});

