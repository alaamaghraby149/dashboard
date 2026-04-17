/*======================== MAKE THE ACTIVE LINK IN ASIDE ========================*/
const menuItems = document.querySelectorAll('.menu-item')

function selectedLink(e){
  let selectedLink = e.currentTarget
  menuItems.forEach(item=>{
    if(item!==selectedLink){
      item.classList.remove('selected-item')
    }else if(item==selectedLink){
      item.classList.add('selected-item')
    }
  })
}

menuItems.forEach(item=>{
  item.addEventListener('click', selectedLink)
})