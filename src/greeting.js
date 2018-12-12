var userName = prompt('what is your name?');


export default function Greet(){
    var title = document.querySelector('h1');

    if(!userName){
        userName = prompt('what is your name foreal this time?');

        Greet();
    }


    else{
        title.innerHTML += `, ${userName}`;
    }
}