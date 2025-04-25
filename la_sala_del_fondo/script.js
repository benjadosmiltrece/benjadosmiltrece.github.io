// Maxwell the Spinning Cat Song
const max_sound_effect = document.getElementById('maxwell_song');
document.getElementById('maxwell').addEventListener('click', function() {
    max_sound_effect.loop = !max_sound_effect.loop;
    max_sound_effect[max_sound_effect.paused ? 'play' : 'pause']();
    if (max_sound_effect.paused) max_sound_effect.currentTime = 0;

    var max = document.getElementById('maxwell');

    max.style.height = '40px';
    max.style.width = '130px';
    max.style.top = 'calc(100vh - 140px)';
    max.style.left = 'calc(50% + 280px - (360px / 2))';

    setTimeout(() => {
        max.style.height = '85px';
        max.style.width = '85px';
        max.style.top = 'calc(100vh - 165px)';
        max.style.left = 'calc(50% + 280px - (360px / 2))';
    }, 100);

    setTimeout(() => {
        max.style.height = '70px';
        max.style.width = '100px';
        max.style.top = 'calc(100vh - 155px)';
        max.style.left = 'calc(50% + 280px - (360px / 2))';
    }, 200);


});


var fumo_sound = document.getElementById('fumo_fumo');
// Marisa Kirisame Fumo
document.getElementById('marisa').addEventListener('click', function() {
    playfumo_Sound();
    if (Math.floor(Math.random() * 2) == 0) {
        // -- JUMP --
        var fumo = document.getElementById('marisa');

        fumo.style.height = '65px';
        fumo.style.width = '110px';
        fumo.style.top = 'calc(100vh - 370px)';
        fumo.style.left = 'calc(50% + -170px - (400px / 2))';

        setTimeout(() => {
            fumo.style.height = '105px';
            fumo.style.width = '70px';
            fumo.style.top = 'calc(100vh - 425px)';
            fumo.style.left = 'calc(50% + -170px - (400px / 2))';
        }, 100);

        setTimeout(() => {
            fumo.style.height = '95px';
            fumo.style.width = '80px';
            fumo.style.top = 'calc(100vh - 425px)';
            fumo.style.left = 'calc(50% + -170px - (400px / 2))';
        }, 200);

        setTimeout(() => {
            fumo.style.height = '105px';
            fumo.style.width = '70px';
            fumo.style.top = 'calc(100vh - 385px)';
            fumo.style.left = 'calc(50% + -170px - (400px / 2))';
        }, 350);

        setTimeout(() => {
            fumo.style.height = '65px';
            fumo.style.width = '110px';
            fumo.style.top = 'calc(100vh - 370px)';
            fumo.style.left = 'calc(50% + -170px - (400px / 2))';
        }, 450);

        setTimeout(() => {
            fumo.style.height = '95px';
            fumo.style.width = '80px';
            fumo.style.top = 'calc(100vh - 385px)';
            fumo.style.left = 'calc(50% + -170px - (400px / 2))';
        }, 550);
    } else {
    // -- SQUISH --
    var fumo = document.getElementById('marisa');

    fumo.style.height = '65px';
    fumo.style.width = '110px';
    fumo.style.top = 'calc(100vh - 370px)';
    fumo.style.left = 'calc(50% + -170px - (400px / 2))';

    setTimeout(() => {
        fumo.style.height = '110px';
        fumo.style.width = '65px';
        fumo.style.top = 'calc(100vh - 395px)';
        fumo.style.left = 'calc(50% + -170px - (400px / 2))';
    }, 100);

    setTimeout(() => {
        fumo.style.height = '95px';
        fumo.style.width = '80px';
        fumo.style.top = 'calc(100vh - 385px)';
        fumo.style.left = 'calc(50% + -170px - (400px / 2))';
    }, 200);
    }

});

function playfumo_Sound() {

    // Play the fumo_sound

    const randomNum = Math.floor(Math.random() * 2); // 0, 1, 2, 3, or 4
    const randomNumEG = Math.floor(Math.random() * 4); // 0, 1, 2, 3, or 4
    const randomNumSML = Math.floor(Math.random() * 2); // small Random chance


    if (Math.random() < 0.002) {
        if (randomNumEG === 0) {
            fumo_sound = document.getElementById('fumo_ip');  
        }
        else if (randomNumEG === 1) {
            fumo_sound = document.getElementById('fumo_harigato');
        }
        else if (randomNumEG === 2) {
            fumo_sound = document.getElementById('fumo_lets-a-go');
        }
        else if (randomNumEG === 3) {
            fumo_sound = document.getElementById('sub_l1up');
        }
        else {
            fumo_sound = document.getElementById('fumo_uis');
        }
    }
    else {
        if (randomNumSML === 0) {
            if (randomNum === 0) {
                fumo_sound = document.getElementById('fumo_low');
            }
            else if (randomNum === 1) {
                fumo_sound = document.getElementById('fumo_u');
            }
            else {
                fumo_sound = document.getElementById('fumo_ua');
            }
        }
        else {
            fumo_sound = document.getElementById('fumo_fumo');
        }
    }
    fumo_sound.currentTime = 0;
    fumo_sound.play();
    
}
