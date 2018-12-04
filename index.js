import Footer from './src/Footer';
import Content from './src/Content';
import Navigation from './src/Navigation';
import Header from './src/Header';
import greet from './src/Greeting';

var State = {
    'active': 'home',
    'home': {
        'title': 'My Savvy Coders Project',
        'links': [ 'blog', 'contacts', 'projects' ]
    },
    'blog': {
        'title': 'this is my blog',
        'links': [ 'home', 'contact', 'projects' ]
    },
    'contact': {
        'title': 'hit me up bro',
        'links': [ 'home', 'blog', 'projects' ]
    },
    'projects': {
        'title': 'lol',
        'links': [ 'home', 'blog', 'contact' ]
    }
};

var root = document.querySelector('#root');

function handleNavigation(event){
    event.preventDefault();

    State.active = event.target.textContent;

    console.log(State);
    render(State); // eslint-disable-line
}

function render(state){
    var links;


    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;

    greet();

    links = document.querySelectorAll('#navigation a');

    for(let i = 0; i < links.length; i++){
        links[i].addEventListener(
            'click',
            handleNavigation
        );
    }
}

render(State);
