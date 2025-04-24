// Maxwell the Spinning Cat Song
const soundEffect = document.getElementById('maxwell_song');
document.getElementById('maxwell').addEventListener('click', function() {
    soundEffect.loop = !soundEffect.loop;
    soundEffect[soundEffect.paused ? 'play' : 'pause']();
    if (soundEffect.paused) soundEffect.currentTime = 0;
});

// Marisa Kirisame Fumo
document.getElementById('marisa').addEventListener('click', function() {
    var sound = document.getElementById('fumo_fumo');
    sound.currentTime = 0; // Rewind to the start (in case it's already playing)
    sound.play();
});