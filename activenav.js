function navActive(e){
    if(e.id!="activenav"){
        document.getElementById('activenav').id="";
        e.id="activenav";
        console.log(e);
    }
}