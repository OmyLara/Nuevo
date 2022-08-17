

// Es necesario para que se imprima un valor diferente cada vez, convertir random1 en una función, no en variable
let todo =()=>{
    let random1 = () =>{
        let arr1=['Hola ', '¿Que onda? ', 'Hey '];
        return 'Jeje '+ arr1[Math.floor(Math.random() * arr1.length)];
    }
    let random2 = () =>{
        let arr2=['Mi nombre es Perlita  ', 'Me llamo Sam  ', 'Soy Omy Lara  '];
        return 'Bien, '+ arr2[Math.floor(Math.random() * arr2.length)];
    }
    let random3 = () =>{
        let arr3=['me gusta bailar','me gusta cantar','me gusta platicar'];
        return 'Y además '+ arr3[Math.floor(Math.random() * arr3.length)];
    }
    console.log(random1());
    console.log(random2());
    console.log(random3());
};


todo();