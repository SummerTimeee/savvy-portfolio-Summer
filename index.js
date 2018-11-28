import Footer from './src/Footer';
import Content from './src/Content';
import Navigation from './src/Navigation';
import Header from './src/Header';
import Greeting from './src/Greeting';

var state = {
    'title': '<i class="fas fa-user-md"></i>phone doc'

};


document.querySelector('#root').innerHTML = `
    ${Content()}
    ${Footer()}
    ${Navigation()}
    ${Header(state)}
    `;

Greeting();