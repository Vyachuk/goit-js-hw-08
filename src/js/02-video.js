const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(function (data) {
        localStorage.setItem('videoplayer-current-time', data.seconds)
}, 1000));
    
const videoTime = localStorage.getItem('videoplayer-current-time')

player.setCurrentTime(videoTime).then(function (videoTime) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});