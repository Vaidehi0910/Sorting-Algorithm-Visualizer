
var inp_ar=document.getElementById('arraysize');
var array_size=inp_ar.value;
var inp_speed=document.getElementById('arrayspeed');
var cont=document.getElementById('array_container');
var arr=[]
var div=[]
var margin_size
var butts_algos=document.querySelectorAll('.algos button')
inp_ar.addEventListener("input",update_array);

function generate_new_array(){
    cont.innerHTML=' ';
    for(var i=0;i<array_size;i++){
        arr[i]=Math.floor((Math.random()*100)+10);
        div[i]=document.createElement('div');
        cont.appendChild(div[i]);
        margin_size=0.1
        div[i].style=" margin:0% " + margin_size + "%; background-color:rgb(28, 201, 231); width:" + (100/array_size-(2*margin_size)) + "%; height:" + (arr[i]) + "%;";
    }
}

function update_array(){
    array_size=inp_ar.value;
    generate_new_array();
}

for(var i=0;i<butts_algos.length;i++){
    butts_algos[i].addEventListener("click",runAlgo);
}

function disable_buttons(){
    for(var i=0;i<butts_algos.length;i++){
        butts_algos[i].classList=[];
        butts_algos[i].classList.add('butt_locked');
        butts_algos[i].disabled=true;
        inp_ar.disabled=true;
        inp_speed.disabled=true

    }
}

function runAlgo(){
    disable_buttons();

    this.classList.add("butt-selected");
    switch(this.innerHTML){
        case "Bubble": Bubble();
        break;
        case "Selection": Selection_sort();
        break;
        case "Insertion": Insertion();
        break;
        case "Quick": Quick();
        break;
        case "Merge": Merge();
        break;
        case "Heap": Heap();
        break;
    }
    enable_buttons();
}