import Footer from './src/Footer';
import Content from './src/Content';
import Navigation from './src/Navigation';
import Header from './src/Header';
import Greeting from './src/Greeting';
import greet from './src/Greeting';
var State = {
    'active': 'home',
    'home': {
        'title': 'Phone doc'
    },
    'book an appointment': {
        'title': 'lol'
    },
    'parts & tools': {
        'title': 'stuff'
    },
    'about us': {
        'title': 'Contact Me'
    }
};

var root = document.querySelector('#root');

function handleNavigation(event){
    event.preventDefault();

    State.active = event.target.textContent;

    render(State);
}

function render(state){
    var links;

    root.innerHTML = `
    ${Content(state)}
    ${Footer(state)}
    ${Navigation(state)}
    ${Header(state)}
    `;

    greet();

    links = document.querySelectorAll('#navigation a');


    links[0].addEventListener(
        'click',
        handleNavigation
    );

    links[1].addEventListener(
        'click',
        handleNavigation
    );


    links[2].addEventListener(
        'click',
        handleNavigation
    );
}

render(State);