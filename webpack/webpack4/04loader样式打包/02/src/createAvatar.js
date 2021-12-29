import card from './card.png';
import style from './index.scss';

function createAvatar() {
  var img = new Image();
  img.src = card;
  img.classList.add(style['card-box']);

  var root = document.getElementById('root');
  root.append(img);
}

export default createAvatar;
