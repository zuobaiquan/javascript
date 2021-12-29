import card from './card.png'
import style from './index.scss';
import createAvatar from './createAvatar';

createAvatar();

var img = new Image()
img.src=card
img.classList.add(style["card-box"])

let root = document.getElementById("root")
root.append(img)
