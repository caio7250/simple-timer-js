import {controls} from "./elements.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"
import state from "./state.js"
import { updateDisplay } from "./timer.js"

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    
    if(typeof actions[action] != "function"){
      return
    }
    
    actions[action]()
  })

}


// Function to change minutes 
export function setMinutes(){
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key) // "onkeypress" Depreceated function ==> look for alternatives later
  // Only numbers can be pressed

  el.minutes.addEventListener('focusout', (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute('conteditable')
  })
}