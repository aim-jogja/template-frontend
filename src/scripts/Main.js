import Header from "./component/Header";
import Form from "./component/Form";
import Footer from "./component/Footer";

class Main{
    constructor(judul, main){
        this.judul = judul;
        this.main = main;
    }

    render(){
        this.main.innerHTML = Header() + Form(this.judul) + Footer();
    }
}

export default Main;