const gridContainer1 = document.querySelector('.js-grid-items-container1');
const gridContainer2 = document.querySelector('.js-grid-items-container2');
const gridContainer3 = document.querySelector('.js-grid-items-container3');
const Button = document.querySelector('.js-button');
const buttonSubject1  = document.querySelector('.button-set1');
const buttonSubject2  = document.querySelector('.button-set2');
const buttonSubject3  = document.querySelector('.button-set3');


for(let i = 1 ; i<101;i++)
  {gridContainer2.innerHTML+=
`<div><a class="grid-items light-mode" target="_blank" href="e_f_termodinamica_sii_00${i}.pdf">Fisa ${i}</a></div>`
}

for(let i = 1 ; i<101;i++)
  {gridContainer3.innerHTML+=`<a class="grid-items light-mode" target="_blank" href="e_f_termodinamica_siii_00${i}.pdf">Fisa ${i}</a>`;}


Button.addEventListener('click',()=>{
  darkMode();
})

document.querySelectorAll('.js-choose').forEach((button,index)=>{
  button.addEventListener('click',()=>{
 displaySet(index);
  })
})


function darkMode(){
  if(Button.innerText==='dark mode')
  {
    Button.innerText = 'light mode'
    document.querySelectorAll('.grid-items').forEach((element)=>{
      element.classList.add('dark-mode');
    })
    document.body.classList.add('dark-mode')
  }
  else{
  Button.innerText = 'dark mode';
  document.querySelectorAll('.grid-items').forEach((element)=>{
    element.classList.remove('dark-mode');
  })
  
  document.body.classList.remove('dark-mode');
  }}












function ReturnNumOfI(nrI){
let numI='i';
let stringNums='';
while(nrI>0){
  
  stringNums+=numI;
  nrI--;
}
return stringNums;
}


function displaySet(index){

 
    gridContainer1.innerHTML=`<span>Setul ${index+1}</span>`;
    for(let i = 1 ; i<10;i++)
    {gridContainer1.innerHTML+=`<a class="grid-items light-mode" target="_blank" href="e_f_termodinamica_s${ReturnNumOfI(index+1)}_00${i}.pdf">Fisa ${i}</a>`;}
    for(let i = 10 ; i<100;i++)
      {gridContainer1.innerHTML+=`<a class="grid-items light-mode" target="_blank" href="e_f_termodinamica_s${ReturnNumOfI(index+1)}_0${i}.pdf">Fisa ${i}</a>`;}
    gridContainer1.innerHTML+=`<a class="grid-items light-mode" target="_blank" href="e_f_termodinamica_s${ReturnNumOfI(index+1)}_${100}.pdf">Fisa ${100}</a>`;
}
