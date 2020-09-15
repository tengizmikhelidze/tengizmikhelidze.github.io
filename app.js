"use strict;"
var searchCounter =0;
function activeNav(e){
    if(e.id!='active') {
        document.getElementById('active').id='';
        e.id='active';
    }
    if(e.id!='activege') {
        document.getElementById('activege').id='';
        e.id='activege';
    }
}

function searchAnim(){
    let e=document.getElementsByClassName('search-inp');
    console.log(e);
    searchCounter++;
    console.log(searchCounter)
    if(searchCounter%2==1){
        e[0].id='searchAnim';
    } else {
        e[0].id = 'stopAnim'
    }
}

function nameChange(e){
    if(e=="ge"){
        document.getElementById('english').style.display='none';
        document.getElementById('georgian').style.display='initial';
    }
    if(e=="en"){
        document.getElementById('english').style.display='initial';
        document.getElementById('georgian').style.display='none'; 
    }
    
}
