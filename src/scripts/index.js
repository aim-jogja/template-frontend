import '../styles/style.css';
import '../styles/customstyle.css';
import Main from './Main';

let main = document.querySelector('#main');
let App = new Main( 'Form Input' ,main);


// window.addEventListener('hashchange', () => {
//     main.innerHTML = Home.render();
// });

function tambahData(name, qty){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText = "{ 'berhasil': true }"){
                window.location = "http://192.168.154.227:8000/";
            }   
        }
    };
    xhttp.open("POST", "http://192.168.154.227:8000/add.php");
    xhttp.send('name=' + name + 'qty=' + qty );
} 

window.addEventListener('load', () => {
    App.render();

    let form = document.getElementById('forminput');
    form.action = "http://192.168.154.227:8000/add.php";

    let kirim = document.getElementById('submit');
    let name = document.getElementById('name').value;
    let qty = document.getElementById('qty').value;
    kirim.addEventListener('click', () => {
        tambahData(name, qty)
    })
});


