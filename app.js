let cuentas = [
    {nombre:"Pepe", saldo: 100},
    {nombre:"Sara", saldo: 390},
    {nombre:"Maria", saldo: 50}
];

let saldo1 = cuentas[0].saldo
let saldo2 = cuentas[1].saldo
let saldo3 = cuentas[2].saldo

function menuPepe(){
    location.href ='menu-pepe.html' 
}
function menuSara(){
    location.href ='menu-sara.html'
}
function menuMaria(){
    location.href ='menu-maria.html'
}


function login(){
    let pass = parseInt(prompt('Ingresar Contraseña'))
    if (pass === 123){
        menuPepe()
    } else if(pass === 456){
        menuSara()
    } else if (pass === 789){
        menuMaria()
    } else{
        alert("El usuario o contraseña ingresados son incorrectos")
    }
}

function consultarPepe(){
    alert(`Saldo actual ${saldo1}`)
}
function consultarSara(){
    alert(`Saldo actual ${saldo2}`)
}
function consultarMaria(){
    alert(`Saldo actual ${saldo3}`)
}

function ingresarPepe(){
    let a = parseInt(prompt('ingresar valor'))
    let total1 = saldo1 + a
    alert(`Valor ingresado ${a}
Nuevo saldo ${total1}`)
    
    if(total1 < 990){
        console.log('La cuenta cumple con la regla establecida')
    } else if(total1 >=991){
        console.log('La cuenta no cumple con la regla establecida')
    }
}

function retirarPepe(){
    let b = parseInt(prompt('ingresar valor'))
    let total2 = saldo1 - b
    alert(`Valor ingresado ${b}
Nuevo saldo ${total2}`)
    if(total2 > 10){
        console.log('La cuenta cumple con la regla establecida')
    } else if(total2 <= 10){
        console.log('La cuenta no cumple con la regla establecida')
    }
}

function ingresarSara(){
    let a = parseInt(prompt('ingresar valor'))
    let total1 = saldo2 + a
    alert(`Valor ingresado ${a}
Nuevo saldo ${total1}`)
    if(total1 < 990){
        console.log('La cuenta cumple con la regla establecida')
    } else if(total1 >=991){
        console.log('La cuenta no cumple con la regla establecida')
    }
}

function retirarSara(){
    let b = parseInt(prompt('ingresar valor'))
    let total2 = saldo2 - b
    alert(`Valor ingresado ${b}
    Nuevo saldo ${total2}`)
    if(total2 > 10){
        console.log('La cuenta cumple con la regla establecida')
    } else if(total2 <= 10){
        console.log('La cuenta no cumple con la regla establecida')
    }
}

function ingresarMaria(){
    let a = parseInt(prompt('ingresar valor'))
    let total1 = saldo3 + a
    alert(`Valor ingresado ${a}
Nuevo saldo ${total1}`)
    if(total1 < 990){
        console.log('La cuenta cumple con la regla establecida')
    } else if(total1 >=991){
        console.log('La cuenta no cumple con la regla establecida')
    }
}

function retirarMaria(){
    let b = parseInt(prompt('ingresar valor'))
    let total2 = saldo3 - b
    alert(`Valor ingresado ${b}
Nuevo saldo ${total2}`)
    if(total2 > 10){
        console.log('La cuenta cumple con la regla establecida')
    } else if(total2 <= 10){
        console.log('La cuenta no cumple con la regla establecida')
    }
}

