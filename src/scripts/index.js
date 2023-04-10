import Home from './component/Home';
import '../styles/style.css';

let main = document.querySelector('#main');

window.addEventListener('hashchange', () => {
    main.innerHTML = Home.renderPage();
});

window.addEventListener('load', () => {
    main.innerHTML = Home.render();
});