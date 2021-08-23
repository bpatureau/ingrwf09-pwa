const btnInstall = document.querySelector('.install')

let deferredPrompt


window.addEventListener("befreinstallprompt", (e) => {
  e.preventDefault()
  deferredPrompt = e
  btnInstall.classList.remove('hidden')
} )

btnInstall.addEventListener("click", (e) => {
  e.preventDefault()
  btnInstall.classList.add('hidden')
  deferredPrompt.prompt()
})