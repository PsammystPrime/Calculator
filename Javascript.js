const display =document.querySelector('.input');
const buttons =document.querySelectorAll('.number');
const decimal = document.querySelector('.decimal')
const operator = document.querySelectorAll('.operator')
const equal = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const del = document.querySelector('.delete')
const one = []
const two = []
const show = document.querySelector('.show')
const array= []



buttons.forEach(button => {
 button.addEventListener('click', function(e) {
  let value = e.target.innerHTML
  display.textContent += value
  show.textContent += value

array.push(value.toString(''))
const newArr=array.toString()
console.log(newArr)
console.log(array)
 })
});


operator.forEach(operator =>{
  operator.addEventListener('click', (e)=>{
  let value = e.target.innerHTML
two.textContent = display.textContent
display.textContent = ''
one.textContent = value
show.textContent += value
  });
});

equal.addEventListener('click', ()=>{
  let a = Number(two.textContent)
  let b =one.textContent
  let c = Number(display.textContent)
  if (b==='*') {function multiply(){
display.textContent= a*c
  }
    multiply()
  }
  if (b==='/') {
    return display.textContent= a/c
  }
  if (b==='+') {
  return display.textContent= a+c

  }
  if (b==='-') {
    return display.textContent= a-c
  }  
});

clear.addEventListener('click', ()=>{
  display.textContent = ''
  one.textContent = ''
  two.textContent = ''
  show.textContent = ''
})

del.addEventListener('click', ()=>{
  display.textContent = display.textContent.slice(0,-1)
})

decimal.addEventListener('click', (e)=>{
  let value = e.target.innerHTML
  if (!display.textContent.includes('.')){

    display.textContent +=value
  
  }
})