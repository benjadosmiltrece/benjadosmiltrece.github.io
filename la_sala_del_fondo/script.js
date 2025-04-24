// Maxwell the Spinning Cat Song
const soundEffect = document.getElementById('maxwell_song');
document.getElementById('maxwell').addEventListener('click', function() {
    soundEffect.loop = !soundEffect.loop;
    soundEffect[soundEffect.paused ? 'play' : 'pause']();
    if (soundEffect.paused) soundEffect.currentTime = 0;
});

// Marisa Kirisame Fumo
document.getElementById('marisa').addEventListener('click', function() {
    // Play the sound
    var sound = document.getElementById('fumo_fumo');
    sound.currentTime = 0; // Rewind to the start (in case it's already playing)
    sound.play();
    // Squash the fumo
    var fumo = document.getElementById('marisa');
    fumo.style.height = '5vw';
    fumo.style.top = '49.6vh';
    fumo.style.width = '8vw';
    fumo.style.left = '14.5vw';

    setTimeout(() => {
        fumo.style.height = '9vw';
        fumo.style.top = '43.4vh';
        fumo.style.width = '6vw';
        fumo.style.left = '15.5vw';
    }, 100);

    setTimeout(() => {
        fumo.style.height = '8vw';
        fumo.style.top = '45vh';
        fumo.style.width = '7vw';
        fumo.style.left = '15vw';
    }, 200);

});