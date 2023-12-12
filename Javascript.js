const displayCalculations =document.querySelector('.input');
const showCalculations = document.querySelector('.show');
const numberButtons =document.querySelectorAll('.number');
const decimal = document.querySelector('.decimal');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const one = [];
const two = [];
const array= [];


numberButtons.forEach(button => {
 button.addEventListener('click', function(e) {
  let value = e.target.innerHTML
  displayCalculations.textContent += value
  showCalculations.textContent += value

array.push(value.toString(''))
const newArr=array.toString()
//console.log(newArr)
//console.log(array)
 });
});


operator.forEach(operator =>{
  operator.addEventListener('click', (e)=>{
  let value = e.target.innerHTML
two.textContent = displayCalculations.textContent
displayCalculations.textContent = ''
one.textContent = value
showCalculations.textContent += value
  });
});

equal.addEventListener('click', ()=>{
  let a = Number(two.textContent)
  let b =one.textContent
  let c = Number(displayCalculations.textContent)
  if (b==='*') {function multiply(){
displayCalculations.textContent= a*c
  }
    multiply()
  }
  if (b==='/') {
    return displayCalculations.textContent= a/c
  }
  if (b==='+') {
  return displayCalculations.textContent= a+c

  }
  if (b==='-') {
    return displayCalculations.textContent= a-c
  }  
});

clear.addEventListener('click', ()=>{
  displayCalculations.textContent = ''
  one.textContent = ''
  two.textContent = ''
  showCalculations.textContent = ''
});

del.addEventListener('click', ()=>{
  displayCalculations.textContent = displayCalculations.textContent.slice(0,-1)
});

decimal.addEventListener('click', (e)=>{
  let value = e.target.innerHTML
  if (!displayCalculations.textContent.includes('.')){
    displayCalculations.textContent +=value
    showCalculations.textContent += value
  }
});