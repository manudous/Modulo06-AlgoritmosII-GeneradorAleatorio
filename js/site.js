// Función para encontrar si hay un valor repetido dentro del Array;

var find = (n, array) =>{
    let findNumber = false;
    for(arr of array){
        if(n === arr) findNumber = true;
    }
    return findNumber;
}

// Función para números aleatorios

var randomPick = (n, min, max) => {
    let array = [];
    let range = max - min + 1;

for(let i = 0; i < n; i++){
    let randomNumber = Math.floor(Math.random() * range) + min;
    while(find(randomNumber, array)){
        randomNumber = Math.floor(Math.random() * range) + min;
    }
    array.push(randomNumber);      
}
return console.log(array);
}

randomPick(15, 1, 15)







