// 5 tasck
// // took a ol, should to add li
// const OL = document.querySelector('.OLLI');
// const Li = document.createElement('li');

// Li.innerHTML = 'пункт'; //add to html
// OL.appendChild(Li);        



//3 задание

// const getBtn = document.querySelector('.btn'); //choose all buttons

//     getBtn.addEventListener('click', () => {
//     const getForm = document.querySelector('.form'); //choose all form

//     let sum = 0;
//     for (let i = 0; i < getForm.elements.length; i += 1) { // make a function
//         sum += Number(getForm.elements[i].value);
//         }
//     console.log(sum);       //found sum 
// });



// const gethref = document.querySelectorAll('.hres');

//     for (let i = 0; i < gethref.length; i += 1) {
//         gethref[i].addEventListener('mouseover', func); //make function to count
//     }

//  function func() {
//     this.innerHTML = this.innerHTML + `(${this.href})`; //add to html
// }


// //7 tasck
// document.querySelectorAll('p').forEach(p => { //для всех p мы создаем function для возведения в квадрат
//     p.onclick = () => (p.innerText = Math.pow(+p.innerText, 2));
//   });


// //clicker
//   let h1Id = document.getElementById('h1'); //taked id from h1 and button
//   let buttonId = document.getElementById('button'); 
//   let counter = 0; 
//   buttonId.addEventListener('click',function(){  //maked function for  count
//       counter++; 
//       h1Id.textContent = 'сделано кликов: '+counter; 
//   });


               //four 
// var countries = document.querySelector('#countries'); // add functions for takes options from html
// var ruCity = document.querySelector('#ru');
// var byCity = document.querySelector('#us');
// var uaCity = document.querySelector('#kt');
// countries.addEventListener('change', function() {
//  document.querySelector('.active.city').classList.remove('active');
                
//     if(this.value == 'ru') {
//             ruCity.classList.add('active'); // add function if
//     }
//     if(this.value == 'us') {
//              byCity.classList.add('active');
//         }
//         if(this.value == 'kt') {
//              uaCity.classList.add('active');
//         }
//  });

// // task 1 
// let btn = document.getElementById('button');   //take button by id
// btn.addEventListener('click', func); 
// let time = setTimeout(func, 3000); //add timer
 
// // перенос на 500px вниз через 3с 
// function func(){ 
//     setTimeout(() => { 
//         window.scrollTo({ 
//             top:500, 
//             left:0, 
//             behavior: "smooth" 
//         }); 
//     }, 3000); 
// }



//the last
// const getForm = document.querySelector('.form'); // take from html
// const getTable = document.querySelector('.task');


// getForm.submit.addEventListener('click', func2);
// getTable.addEventListener('click', func);

// function func(event) {
//      const newValue = prompt("Исправить " + event.target.innerHTML, '');
//     event.target.innerHTML = newValue; //add prompt
//         };

// function func2(event) {   //make function for (event)
//      event.preventDefault();

//     const createFirst = document.createElement('td');
//     createFirst.innerHTML = getForm.firstname.value;

//     const createLast = document.createElement('td');
//     createLast.innerHTML = getForm.lastname.value;

//     const create = document.createElement('tr');
//     create.appendChild(createFirst);
//     create.appendChild(createLast);

//     getTable.appendChild(create);
//      };

