var counter = 0;
function hamburgerMenu(){
    let e = document.querySelector('#nav-links');
    console.log(e);
    if(counter%2==0)
        e.style.display='grid';
            else e.style.display='none'
    counter++;
}