let musics = [
    { src:'audio/m_01.mp3'},
];

let music = document.querySelector('audio');
let indexMusic = 0;

function renderMusic(){}

document.querySelector('.btn-play').addEventListener('click', playMusic);

document.querySelector('.btn-pause').addEventListener('click', pauseNow);
music.addEventListener('timeupdate', actualize);

function actualize(){}

function playMusic(){
    music.play();
    document.querySelector('.btn-pause').style.display = 'block';
    document.querySelector('.btn-play').style.display = 'none';
    document.querySelector('.piano').style.opacity = '1';
    setTimeout(function() {

        document.querySelector('.violin').style.opacity = '0.1';

    }, 2000) 
}

function pauseNow(){
    music.pause();
    document.querySelector('.btn-pause').style.display = 'none';
    document.querySelector('.btn-play').style.display = 'block';
    document.querySelector('.piano').style.opacity = '0';

    setTimeout(function() {
    document.querySelector('.violin').style.opacity = '0';

    }, 1000)
}

