// Resultado
const evaluar = document.getElementById('evaluar');
const limpiar = document.getElementById('limpiar');
let buenas = document.getElementById('buenas');
let malas = document.getElementById('malas');
let vacias = document.getElementById('vacias');
let promedio = document.getElementById('promedio');

limpiar.addEventListener('click',()=>{
    for(let i=1;i<=30;i++){
        let nums='';
        nums='num'+i;
        document.getElementById(nums).checked = false;
        console.log(document.getElementById(nums).checked = false);
    }
    //Limpiando Puntuación y Evaluación
    buenas.innerHTML = 0;
    malas.innerHTML = 0;
    vacias.innerHTML = 0;
    promedio.innerHTML = '0% de Respuestas Buenas.';
})

//Creando la Función
evaluar.addEventListener('click',()=>{

    let conmalas = 0;
    let conbuenas = 0;
    let convacias = 0;
    let conpromedio = 0;


    //Asignando valores internos desde HTML Pregunta1
    let num1 = document.getElementById('num1').checked;
    let num2 = document.getElementById('num2').checked;
    let num3 = document.getElementById('num3').checked;
    
    //Asignando valores internos desde HTML Pregunta2
    let num4 = document.getElementById('num4').checked;
    let num5 = document.getElementById('num5').checked;
    let num6 = document.getElementById('num6').checked;

     //Asignando valores internos desde HTML Pregunta3
    let num7 = document.getElementById('num7').checked;
    let num8 = document.getElementById('num8').checked;
    let num9 = document.getElementById('num9').checked;

    //Asignando valores internos desde HTML Pregunta4
    let num10 = document.getElementById('num10').checked;
    let num11 = document.getElementById('num11').checked;
    let num12 = document.getElementById('num12').checked;

    //Asignando valores internos desde HTML Pregunta5
    let num13 = document.getElementById('num13').checked;
    let num14 = document.getElementById('num14').checked;
    let num15 = document.getElementById('num15').checked;

    //Asignando valores internos desde HTML Pregunta6
    let num16 = document.getElementById('num16').checked;
    let num17 = document.getElementById('num17').checked;
    let num18 = document.getElementById('num18').checked;

    //Asignando valores internos desde HTML Pregunta7
    let num19 = document.getElementById('num19').checked;
    let num20 = document.getElementById('num20').checked;
    let num21 = document.getElementById('num21').checked;

    //Asignando valores internos desde HTML Pregunta8
    let num22 = document.getElementById('num22').checked;
    let num23 = document.getElementById('num23').checked;
    let num24 = document.getElementById('num24').checked;

    //Asignando valores internos desde HTML Pregunta9
    let num25 = document.getElementById('num25').checked;
    let num26 = document.getElementById('num26').checked;
    let num27 = document.getElementById('num27').checked;

    //Asignando valores internos desde HTML Pregunta10
    let num28 = document.getElementById('num28').checked;
    let num29 = document.getElementById('num29').checked;
    let num30 = document.getElementById('num30').checked;

    //Realizando las Operaciones de Evaluación
    if(num1==true){conbuenas++}else{if(num2==true||num3==true){conmalas++}else{convacias++}};
    if(num6==true){conbuenas++}else{if(num4==true||num5==true){conmalas++}else{convacias++}};
    if(num7==true){conbuenas++}else{if(num8==true||num9==true){conmalas++}else{convacias++}};
    if(num12==true){conbuenas++}else{if(num10==true||num11==true){conmalas++}else{convacias++}};
    if(num14==true){conbuenas++}else{if(num13==true||num15==true){conmalas++}else{convacias++}};
    if(num17==true){conbuenas++}else{if(num16==true||num18==true){conmalas++}else{convacias++}};
    if(num19==true){conbuenas++}else{if(num20==true||num21==true){conmalas++}else{convacias++}};
    if(num24==true){conbuenas++}else{if(num22==true||num23==true){conmalas++}else{convacias++}};
    if(num25==true){conbuenas++}else{if(num26==true||num27==true){conmalas++}else{convacias++}};
    if(num30==true){conbuenas++}else{if(num28==true||num29==true){conmalas++}else{convacias++}};

    conpromedio = conbuenas*10+'% de Respuestas Buenas.';
    console.log(conbuenas.value, conmalas.value, convacias.value, conpromedio.value)
    buenas.innerText = conbuenas;
    malas.innerHTML = conmalas;
    vacias.innerHTML = convacias;
    promedio.innerHTML = conpromedio;
})





