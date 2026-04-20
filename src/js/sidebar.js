/*======================== MAKE THE ACTIVE LINK IN ASIDE ========================*/
const menuItems = document.querySelectorAll('.menu-item a')

// function selectedLink(e){
//   let selectedLink = e.currentTarget
//   menuItems.forEach(item=>{
//     if(item!==selectedLink){
//       item.classList.remove('selected-item')
//     }else if(item==selectedLink){
//       item.classList.add('selected-item')
//     }
//   })
// }

// menuItems.forEach(item=>{
//   item.addEventListener('click', selectedLink)
// })

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



