
// Maxwell the Spinning Cat Song
var max = document.getElementById('maxwell');
const max_sound_effect = document.getElementById('maxwell_song');

// Marisa Kirisame Fumo
var fumo_sound = document.getElementById('fumo_fumo');
var fumo = document.getElementById('marisa');

// Bottle
var bottle = document.getElementById('bottle');
var bottle_rotation = 0;
var adjustedRotation = 0;




// Maxwell the Spinning Cat Song
max.addEventListener('click', function() {
    max_sound_effect.loop = !max_sound_effect.loop;
    max_sound_effect[max_sound_effect.paused ? 'play' : 'pause']();
    if (max_sound_effect.paused) max_sound_effect.currentTime = 0;

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


// Marisa Kirisame Fumo
fumo.addEventListener('click', function() {
    playfumo_Sound();
    if (Math.random() < 0.37) {
        // -- JUMP --
        // <>
        fumo.style.height = '10vh';
        fumo.style.width = '8.5vw';
        fumo.style.top = '46.4vh';
        fumo.style.left = '15vw';

        // ^|
        setTimeout(() => {
            fumo.style.height = '17vh';
            fumo.style.width = '6vw';
            fumo.style.top = '37vh';
            fumo.style.left = '15vw';
        }, 100);

        // ^O
        setTimeout(() => {
            fumo.style.height = '15vh';
            fumo.style.width = '7vw';
            fumo.style.top = '37vh';
            fumo.style.left = '15vw';
        }, 200);

        // |
        setTimeout(() => {
            fumo.style.height = '17vh';
            fumo.style.width = '6vw';
            fumo.style.top = '43vh';
            fumo.style.left = '15vw';
        }, 350);

        // <>
        setTimeout(() => {
            fumo.style.height = '10vh';
            fumo.style.width = '8.5vw';
            fumo.style.top = '46.4vh';
            fumo.style.left = '15vw';
        }, 450);

        // O
        setTimeout(() => {
            fumo.style.height = '15vh';
            fumo.style.width = '7vw';
            fumo.style.top = '44vh';
            fumo.style.left = '15vw';
        }, 550);
    } else {
    // -- SQUISH --
    // <>
    fumo.style.height = '10vh';
    fumo.style.width = '8.5vw';
    fumo.style.top = '46.4vh';
    fumo.style.left = '15vw';

    // |
    setTimeout(() => {
        fumo.style.height = '17vh';
        fumo.style.width = '6vw';
        fumo.style.top = '43vh';
        fumo.style.left = '15vw';
    }, 100);

    // <>
    setTimeout(() => {
        fumo.style.height = '10vh';
        fumo.style.width = '8.5vw';
        fumo.style.top = '46.4vh';
        fumo.style.left = '15vw';
    }, 200);

    // O
    setTimeout(() => {
        fumo.style.height = '15vh';
        fumo.style.width = '7vw';
        fumo.style.top = '44vh';
        fumo.style.left = '15vw';
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

// Bottle
function bottle_flip() {

    bottle.style.transformOrigin = 'center';
    bottle_rotation = Math.random() * 360;

    // <>
    bottle.style.height = '10vh';
    bottle.style.width = '8vw';
    bottle.style.top = '71vh';
    bottle.style.left = '26vw';

    // ^|
    setTimeout(() => {
        bottle.style.transform = `rotate(${0}deg)`;
        bottle.style.height = '14vh';
        bottle.style.width = '6vw';
        bottle.style.top = '55vh';
        bottle.style.left = '26.5vw';
    }, 200);

    // && ⟲ Rotation
    setTimeout(() => {
        bottle.style.transform = `rotate(${bottle_rotation + 180}deg)`;
    }, 300);
    
    // && ⟲ Rotation + <>
    setTimeout(() => {
        if (bottle_rotation >= 315 && bottle_rotation <= 405) {
            bottle.style.height = '10vh';
            bottle.style.width = '8vw';
            bottle.style.top = '71vh';
            bottle.style.left = '26vw';
            adjustedRotation = 380;
        } else if (bottle_rotation >= 0 && bottle_rotation <= 45) {
            bottle.style.height = '10vh';
            bottle.style.width = '8vw';
            bottle.style.top = '71vh';
            bottle.style.left = '23.5vw';
            adjustedRotation = -20;
        } else if (bottle_rotation >= 45 && bottle_rotation <= 170) {
            bottle.style.height = '13vh';
            bottle.style.width = '6vw';
            bottle.style.top = '74vh';
            bottle.style.left = '27vw';
            adjustedRotation = 90;
        } else if (bottle_rotation >= 165 && bottle_rotation <= 180) {
            bottle.style.height = '10vh';
            bottle.style.width = '8vw';
            bottle.style.top = '71vh';
            bottle.style.left = '26vw';
            adjustedRotation = 195;
        } else if (bottle_rotation >= 180 && bottle_rotation <= 195) {
            bottle.style.height = '10vh';
            bottle.style.width = '8vw';
            bottle.style.top = '71vh';
            bottle.style.left = '26vw';
            adjustedRotation = 165;
        } else {
            bottle.style.height = '13vh';
            bottle.style.width = '6vw';
            bottle.style.top = '74vh';
            bottle.style.left = '27vw';
            adjustedRotation = 270;
        }
        bottle.style.transform = `rotate(${adjustedRotation + 180}deg)`;
    }, 500);

    // O
    setTimeout(() => {
        bottle.style.height = '12vh';
        bottle.style.width = '7vw';
        bottle.style.left = '26.5vw';
    }, 700);

    // && ⟲ Rotation fix + bump
    setTimeout(() => {
        if (bottle_rotation >= 315 && bottle_rotation <= 405) {
            bottle.style.top = '66.5vh';
            adjustedRotation = 360;
        } else if (bottle_rotation >= 0 && bottle_rotation <= 45) {
            bottle.style.top = '66.5vh';
            adjustedRotation = 0;
        } else if (bottle_rotation >= 45 && bottle_rotation <= 170) {
            bottle.style.top = '70.5vh';
            adjustedRotation = 90;
        } else if (bottle_rotation >= 165 && bottle_rotation <= 180) {
            bottle.style.top = '66.5vh';
            adjustedRotation = 180;
        } else if (bottle_rotation >= 180 && bottle_rotation <= 195) {
            bottle.style.top = '66.5vh';
            adjustedRotation = 180;
        } else {
            bottle.style.top = '70.5vh';
            adjustedRotation = 270;
        }
        bottle.style.transform = `rotate(${adjustedRotation + 180}deg)`;
    }, 700);

    // end
    setTimeout(() => {
        if (bottle_rotation >= 315 && bottle_rotation <= 405) {
            bottle.style.top = '69.5vh';
        } else if (bottle_rotation >= 0 && bottle_rotation <= 45) {
            bottle.style.top = '69.5vh';
        } else if (bottle_rotation >= 45 && bottle_rotation <= 170) {
            bottle.style.top = '73.5vh';
        } else if (bottle_rotation >= 165 && bottle_rotation <= 180) {
            bottle.style.top = '69.5vh';
        } else if (bottle_rotation >= 180 && bottle_rotation <= 195) {
            bottle.style.top = '69.5vh';
        } else {
            bottle.style.top = '73.5vh';
        }
    }, 800);
};