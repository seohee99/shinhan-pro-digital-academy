var name = "global";

function func(){
    console.log(name);
    var name = "local";
    console.log(name);
}

func()