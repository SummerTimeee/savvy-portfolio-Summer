var userName = prompt('what is your name?');


export default function greet(){
    var title = document.querySelector('h1');

    if(!userName){
        userName = prompt('what is your name foreal this time?');

        greet();
    }


    else{
        title.innerHTML += `, ${userName}`;
    }
}