let projects = document.querySelectorAll(".splide__slide")
const itemsMenuFilter = document.querySelectorAll('.li_filter')

itemsMenuFilter.forEach((item)=>{
    item.addEventListener('click',()=>{
        itemsMenuFilter.forEach((e)=>{
            e.classList.remove('active_filter')
        })
        item.classList.add('active_filter')
    })
})


function execFilter(filter){
    projects.forEach(
        (element)=>{
            
            if(element.getAttribute('filter')){
                filter == 'All' ?  element.style.display = 'flex' :
                element.getAttribute('filter') == filter ? element.style.display = 'flex': element.style.display = 'none'
            }
        }
         )

}


     