// Maxwell the Spinning Cat Song
const soundEffect = document.getElementById('maxwell_song');
document.getElementById('maxwell').addEventListener('click', function() {
    soundEffect.loop = !soundEffect.loop;
    soundEffect[soundEffect.paused ? 'play' : 'pause']();
    if (soundEffect.paused) soundEffect.currentTime = 0;
});


// Marisa Kirisame Fumo
document.getElementById('marisa').addEventListener('click', function() {

    if (Math.floor(Math.random() * 2) == 0) {
        // -- JUMP --
        // Play the sound
        var sound = document.getElementById('fumo_fumo');
        sound.currentTime = 0; // Rewind to the start (in case it's already playing)
        sound.play();
        // Squash the fumo
        var fumo = document.getElementById('marisa');

        fumo.style.height = '65px';
        fumo.style.width = '110px';
        fumo.style.top = 'calc(100vh - 345px)';
        fumo.style.left = 'calc(50% + -170px - (400px / 2))';

        setTimeout(() => {
            fumo.style.height = '105px';
            fumo.style.width = '70px';
            fumo.style.top = 'calc(100vh - 400px)';
            fumo.style.left = 'calc(50% + -170px - (400px / 2))';
        }, 100);

        setTimeout(() => {
            fumo.style.height = '95px';
            fumo.style.width = '80px';
            fumo.style.top = 'calc(100vh - 400px)';
            fumo.style.left = 'calc(50% + -170px - (400px / 2))';
        }, 200);

        setTimeout(() => {
            fumo.style.height = '105px';
            fumo.style.width = '70px';
            fumo.style.top = 'calc(100vh - 360px)';
            fumo.style.left = 'calc(50% + -170px - (400px / 2))';
        }, 350);

        setTimeout(() => {
            fumo.style.height = '65px';
            fumo.style.width = '110px';
            fumo.style.top = 'calc(100vh - 346px)';
            fumo.style.left = 'calc(50% + -170px - (400px / 2))';
        }, 450);

        setTimeout(() => {
            fumo.style.height = '95px';
            fumo.style.width = '80px';
            fumo.style.top = 'calc(100vh - 360px)';
            fumo.style.left = 'calc(50% + -170px - (400px / 2))';
        }, 550);
    } else {
    // -- SQUISH --
    // Play the sound
    var sound = document.getElementById('fumo_fumo');
    sound.currentTime = 0; // Rewind to the start (in case it's already playing)
    sound.play();
    // Squash the fumo
    var fumo = document.getElementById('marisa');

    fumo.style.height = '65px';
    fumo.style.width = '110px';
    fumo.style.top = 'calc(100vh - 345px)';
    fumo.style.left = 'calc(50% + -170px - (400px / 2))';

    setTimeout(() => {
        fumo.style.height = '110px';
        fumo.style.width = '65px';
        fumo.style.top = 'calc(100vh - 370px)';
        fumo.style.left = 'calc(50% + -170px - (400px / 2))';
    }, 100);

    setTimeout(() => {
        fumo.style.height = '95px';
        fumo.style.width = '80px';
        fumo.style.top = 'calc(100vh - 360px)';
        fumo.style.left = 'calc(50% + -170px - (400px / 2))';
    }, 200);
    }

});


