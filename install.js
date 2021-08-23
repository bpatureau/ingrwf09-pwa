const btnInstall = document.querySelector('.install')


window.addEventListener("befreinstallprompt", (e) => {
  e.preventDefault()
  btnInstall.classList.remove('hidden')
} )