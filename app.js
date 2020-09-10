"use strict;"
var searchCounter =0;
function activeNav(e){
    if(e.id!='active') {
        document.getElementById('active').id='';
        e.id='active';
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