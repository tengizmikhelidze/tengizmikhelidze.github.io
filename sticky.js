window.addEventListener("scroll",function(){
    var activeNav = document.querySelector('#activenav');
    var profile = document.querySelector('#profile');
    var projects = document.querySelector('#projects-wrapper');
    var header = document.querySelector('header');
    var scrollY = window.scrollY;
    var abilities = document.querySelector('#abilities');
    var contact = document.querySelector('#contact');
    var e = document.querySelector('.nav-bar-wrapper');
    e.classList.toggle("nav-bar-wrapper-fixed", window.scrollY> window.innerHeight);
    if( scrollY > header.clientHeight && scrollY <= (header.clientHeight+profile.clientHeight)){
        activeNav.id="";
        document.getElementsByClassName('nav1')[0].id = "activenav";
    } else if ( scrollY > (header.clientHeight+profile.clientHeight) && scrollY <=(header.clientHeight+profile.clientHeight+projects.clientHeight)){
        activeNav.id=""
        document.getElementsByClassName('nav2')[0].id = "activenav";
    } else if (scrollY > (header.clientHeight+profile.clientHeight+projects.clientHeight) && scrollY <=(header.clientHeight+profile.clientHeight+projects.clientHeight+abilities.clientHeight/2+abilities.clientHeight/4)){
        activeNav.id=""
        document.getElementsByClassName('nav3')[0].id = "activenav"; 
    } else if(scrollY >(header.clientHeight+profile.clientHeight+projects.clientHeight+abilities.clientHeight/2+abilities.clientHeight/4) && scrollY <=(header.clientHeight+profile.clientHeight+projects.clientHeight+abilities.clientHeight+contact.clientHeight))
    {
        activeNav.id=""
        document.getElementsByClassName('nav4')[0].id = "activenav"; 
    }
})