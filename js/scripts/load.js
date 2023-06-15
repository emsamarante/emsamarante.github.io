function load(){

    if(document.readyState === 'complete'){

        let load = document.querySelector('.loader')
        let cover = document.querySelector('.cover')
        let main = document.querySelector('.main')
        let menu = document.querySelector('.menu')
        let rodape = document.querySelector('.rodape-page')

    
        setTimeout(()=>{ 
            
            load.style.display = 'none'
            cover.style.display = 'flex'
            main.style.display = 'block'
            menu.style.display = 'flex'
            rodape.style.display = 'flex'
    
        
        
        
        }, 500)
    

    }
   
   



}