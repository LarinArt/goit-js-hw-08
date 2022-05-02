import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

const onPlay = function (data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

const playedSeconds = localStorage.getItem(LOCALSTORAGE_KEY);


player.setCurrentTime(Number(playedSeconds)).then(function (seconds) {
    seconds = Number(playedSeconds);
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            console.log('The time was less than 0 or greater than the video’s duration');
            break;

        default:
            console.log('Some other error occurred');
            break;
    }
});
