/*======================== MAKE THE ACTIVE LINK IN ASIDE ========================*/
const menuItems = document.querySelectorAll('.menu-item a')

function selectedLink(){
  let pathName = window.location.pathname
  menuItems.forEach(menuItem=>{
    let menuItemPathname = menuItem.pathname
    if(menuItemPathname==pathName){
      menuItem.parentElement.classList.add('selected-item')
    }
  })
}
selectedLink()



