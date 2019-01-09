import Footer from './src/Footer';
import Content from './src/Content';
import Navigation from './src/Navigation';
import Header from './src/Header';
import greet from './src/Greeting';
import Navigo from 'navigo';

var router = new Navigo(window.location.origin);

var State = {
    'posts': [],
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

class Store{
    constructor(state){
        this.listeners = [];
        this.state = state;
    }

    dispatch(reducer){
        this.state = reducer(this.state);

        render(this.state);
    }

    addListener(listener){
        this.listeners.push(listener);
    }
}

var store = new Store(State);

var root = document.querySelector('#root');

function handleNavigation(params){
    store.dispatch((state) => {
        state.active = params.page;
        
        return state;
    });
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

store.addListener(render);

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .resolve();

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
        store.dispatch((state) => {
            state.posts = posts;

            return state;
        });
    });