var userName = prompt('what is your name?');

var greet = function greet(){
    if(!userName){
        userName = prompt('what is your name foreal this time?');

        greet();
    }
    else{
        alert('hello ' + userName);
    }
};

greet();