let visor = document.querySelector('.visor');

const borrar=()=>{
    visor.value = '';
}

const eliminar=()=>{
    let valor = visor.value.split('');
    valor.pop();
    valor = valor.join('');
    visor.value = valor;
}

const resolved=(val)=>{
    visor.value+=val;
}

const response=()=>{
    visor.value = eval(visor.value)
}