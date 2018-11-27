import Footer from './src/Footer';
import Content from './src/Content';
import Navigation from './src/Navigation';
import Header from './src/Header';

console.log(Footer);


document.querySelector('#root').innerHTML = `
    ${Content}
    ${Footer}
    ${Navigation}
    ${Header}
    `;

// var userName = prompt('what is your name?');

// var title = document.querySelector('h1');

// var greet = function greet(){
// if(!userName){
// userName = prompt('what is your name foreal this time?');

// greet();
//  }
 

// else{
// title.textContent += `, ${userName}`;
// }
// };

// greet();
// var userName = prompt('What is you name?);
