const buttons = document.querySelectorAll('button')
const previousScreen = document.querySelector('.input')
const operator= document.querySelector('.operator')
const  currentScreen= document.querySelector('.inputB')

//add event listers for all buttons
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      const value = e.target.innerHTML  
      
     
      if (value === 'C') {
        previousScreen.textContent = '';
      }else if (value === 'D') {
        previousScreen.textContent = previousScreen.textContent.slice(0, -1);
      }else if (value === '.') {
        if (!previousScreen.textContent.includes('.')) {
          previousScreen.textContent  +=value; 
        };
      }else if (value==='*'||value==='/'||value==='+'||value==='-') {
        currentScreen.textContent = previousScreen.textContent + value
        previousScreen.textContent=''
      
      }else {
         previousScreen.textContent  +=value;
      }
      

    })       
});

