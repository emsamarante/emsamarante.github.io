var propmenu = {
    state:false,
    obj:document.querySelector('.elementos-menu')
}


function activeMenu(){
    var btMenu = document.getElementById('btMenu')
    propmenu.state = !propmenu.state

if(propmenu.state==false){

    btMenu.classList.remove('bi-x-lg')
    btMenu.classList.add('bi-list')
    propmenu.obj.style.display = 'none'

}
 else
  {
    btMenu.classList.remove('bi-list')
    btMenu.classList.add('bi-x-lg')
    propmenu.obj.style.display = 'flex'

    }

}

