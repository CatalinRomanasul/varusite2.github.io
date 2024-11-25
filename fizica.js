const gridContainer1 = document.querySelector('.js-grid-items-container1');
const gridContainer2 = document.querySelector('.js-grid-items-container2');
const gridContainer3 = document.querySelector('.js-grid-items-container3');
const Button = document.querySelector('.js-button');

for(let i = 1 ; i<101;i++)
  {gridContainer1.innerHTML+=`<a class="grid-items light-mode" target="_blank" href="e_f_termodinamica_si_00${i}.pdf">Fisa ${i}</a>`;}

for(let i = 1 ; i<101;i++)
  {gridContainer2.innerHTML+=`<a class="grid-items light-mode" target="_blank" href="e_f_termodinamica_sii_00${i}.pdf">Fisa ${i}</a>`;}


for(let i = 1 ; i<101;i++)
  {gridContainer3.innerHTML+=`<a class="grid-items light-mode" target="_blank" href="e_f_termodinamica_siii_00${i}.pdf">Fisa ${i}</a>`;}


Button.addEventListener('click',()=>{
  darkMode();
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

 