const throttle = require('lodash.throttle');
const iframeEl = document.querySelector('iframe');
const playerEl = new Vimeo.Player(iframeEl);
const NAME_LOCAL_STORAGE = 'videoplayer-current-time';

playerEl.on('timeupdate', throttle(onPlay, 1000));

function onPlay(item) {
  localStorage.setItem(NAME_LOCAL_STORAGE, item.seconds);
}

const getSeconds = localStorage.getItem(NAME_LOCAL_STORAGE);

if (getSeconds) {
  playerEl.setCurrentTime(getSeconds);
}
