const version = "0.1"

self.addEventListener("install", () => {
  console.log("install Service worker version " + version)
})

self.addEventListener("activate", () => {
  console.log("Activate Service worker version " + version)
})