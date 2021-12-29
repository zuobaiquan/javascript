import card from './card.png'
import './index.scss'

var img = new Image()
img.src=card
img.classList.add("card-box")

let root = document.getElementById("root")
root.append(img)
