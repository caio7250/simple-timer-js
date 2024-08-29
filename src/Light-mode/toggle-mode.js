let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

function toggleMode(event){
  event.preventDefault()
  document.documentElement.classList.toggle("light")

  const mode = darkMode ? 'light' : 'dark'
  event.currentTarget.querySelector('span').textContent = `${mode} mode active!`
  
  darkMode = !darkMode
}

buttonToggle.addEventListener('click', toggleMode)