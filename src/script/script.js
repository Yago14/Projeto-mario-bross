const trailer = document.querySelector('.ver-trailer')
const modal =document.querySelector(".modal")
const fecharmodal =document.querySelector(".fechar-modal")



trailer.addEventListener("click",()=>{
     
      modal.classList.add('aberto')
    
})
fecharmodal.addEventListener("click",()=>{
      modal.classList.remove('aberto')
})
