import Footer from './src/Footer';
import Content from './src/Content';
import Navigation from './src/Navigation';
import Header from './src/Header';
import greet from './src/Greeting';
import Navigo from 'navigo';


var router = new Navigo(window.location.origin);

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

function handleNavigation(params){
    State.active = params.page;

    render(State); // eslint-disable-line
}

function render(state){
    root.innerHTML = `
      ${Navigation(state)}
      ${Header(state)}
      ${Content(state)}
      ${Footer(state)}
  `;

    greet();

    router.updatePageLinks();
}

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .resolve();
