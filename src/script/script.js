const trailer = document.querySelector('.ver-trailer')
const modal =document.querySelector(".modal")
const fecharmodal =document.querySelector(".fechar-modal")
const video = document.querySelector('#video')
const link = video.src;



trailer.addEventListener("click",()=>{
     
      modal.classList.add('aberto')
      video.setAttribute("src",link)
    
})
fecharmodal.addEventListener("click",()=>{
      modal.classList.remove('aberto');
      video.setAttribute('src',"")
      
})
