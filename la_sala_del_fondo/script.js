today_date = '2025-04-26';
//          year-month-day




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
var whoosh_1_sound = document.getElementById('whoosh_1');
var whoosh_2_sound = document.getElementById('whoosh_2');  
var whoosh_flips_sound = document.getElementById('whoosh_flips');
var water_bottle_sound = document.getElementById('water_bottle');

// Patch Notes
var paper_sound = document.getElementById('paper_flip_sound');  
var patch_notes_paper = document.getElementById('patch_notes_paper');
var patch_notes_button = document.getElementById('patch_notes');
var new_patch_notification = document.getElementById('new_patch_notification');
var current_date = new Date().toISOString().split('T')[0]; // This gets today's date in the format YYYY-MM-DD

// Settings

var settings_patch_indicator = document.getElementById('s_patch_indicator')

//      vvv ---------------- THA CODE -------------------- vvv


// ON LOAD
window.addEventListener('load', function() {

    // Patch indicator
    setTimeout(() => {
        if (settings_patch_indicator) {
            settings_patch_indicator.checked = localStorage['patch_indicator_setting'] === 'true';
        }
    }, 10);

    if(new_patch_notification && current_date && localStorage['patch_indicator_setting'] === 'false') {
    // Today's new patch notification icon
    if (String(current_date) === today_date) {
        new_patch_notification.style.display = 'block';
    } else {
        new_patch_notification.style.display = 'none';
    }


}
});

// Maxwell the Spinning Cat Song
max.addEventListener('click', function() {
    max_sound_effect.loop = !max_sound_effect.loop;
    max_sound_effect[max_sound_effect.paused ? 'play' : 'pause']();
    if (max_sound_effect.paused) max_sound_effect.currentTime = 0;

    max.style.height = '5vh';
    max.style.width = '11vw';
    max.style.top = '80.7vh';
    max.style.left = '59vw';

    setTimeout(() => {
        max.style.height = '12vh';
        max.style.width = '6vw';
        max.style.top = '78.5vh';
        max.style.left = '59vw';
    }, 100);

    setTimeout(() => {
        max.style.height = '9vh';
        max.style.width = '8vw';
        max.style.top = '79vh';
        max.style.left = '59vw';
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
        fumo.style.top = '45.4vh';
        fumo.style.left = '15vw';

        // ^|
        setTimeout(() => {
            fumo.style.height = '17vh';
            fumo.style.width = '6vw';
            fumo.style.top = '36vh';
            fumo.style.left = '15vw';
        }, 100);

        // ^O
        setTimeout(() => {
            fumo.style.height = '15vh';
            fumo.style.width = '7vw';
            fumo.style.top = '36vh';
            fumo.style.left = '15vw';
        }, 200);

        // |
        setTimeout(() => {
            fumo.style.height = '17vh';
            fumo.style.width = '6vw';
            fumo.style.top = '42vh';
            fumo.style.left = '15vw';
        }, 350);

        // <>
        setTimeout(() => {
            fumo.style.height = '10vh';
            fumo.style.width = '8.5vw';
            fumo.style.top = '45.4vh';
            fumo.style.left = '15vw';
        }, 450);

        // O
        setTimeout(() => {
            fumo.style.height = '15vh';
            fumo.style.width = '7vw';
            fumo.style.top = '43vh';
            fumo.style.left = '15vw';
        }, 550);
    } else {
    // -- SQUISH --
    // <>
    fumo.style.height = '10vh';
    fumo.style.width = '8.5vw';
    fumo.style.top = '45.4vh';
    fumo.style.left = '15vw';

    // |
    setTimeout(() => {
        fumo.style.height = '17vh';
        fumo.style.width = '6vw';
        fumo.style.top = '42vh';
        fumo.style.left = '15vw';
    }, 100);

    // <>
    setTimeout(() => {
        fumo.style.height = '10vh';
        fumo.style.width = '8.5vw';
        fumo.style.top = '45.4vh';
        fumo.style.left = '15vw';
    }, 200);

    // O
    setTimeout(() => {
        fumo.style.height = '15vh';
        fumo.style.width = '7vw';
        fumo.style.top = '43vh';
        fumo.style.left = '15vw';
    }, 200);
    }
});

function playfumo_Sound() {

    // Play the fumo_sound
    fumo_sound.playbackRate = Math.random() * (1.3 - 0.7) + 0.7;
    
    const randomNumEG = Math.floor(Math.random() * 5); // 0, 1, 2, 3, or 4
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
        else if (randomNumEG === 4) {
            fumo_sound = document.getElementById('fumo_u');
        }
        else {
            fumo_sound = document.getElementById('fumo_uis');
        }
    }
    else {
        if (randomNumSML === 0) {
            if (Math.random() < 0.05) {
                fumo_sound = document.getElementById('fumo_ua');
            }
            else {
                fumo_sound = document.getElementById('fumo_low');
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

    whoosh_1_sound.volume = 0.69;
    whoosh_2_sound.volume = 0.69;
    whoosh_flips_sound.volume = 0.37;
    water_bottle_sound.volume = 0.69;

    whoosh_1_sound.currentTime = 0;
    whoosh_2_sound.currentTime = 0;
    whoosh_flips_sound.currentTime = 0;
    water_bottle_sound.currentTime = 0;
    ////
    whoosh_1_sound.playbackRate = Math.random() * (1.2 - 0.7) + 0.7;
    whoosh_2_sound.playbackRate = Math.random() * (1.2 - 0.7) + 0.7;
    whoosh_flips_sound.playbackRate = Math.random() * (1.3 - 0.8) + 0.8;
    water_bottle_sound.playbackRate = Math.random() * (1.2 - 0.7) + 0.7;

    bottle.style.transformOrigin = 'center';
    bottle_rotation = Math.random() * 360;

    // <>
    if (Math.floor(Math.random() * 2) === 0){
        whoosh_1_sound.play();
    }
    else {
        whoosh_2_sound.play();
    }
    if (adjustedRotation >= 315 && adjustedRotation <= 405) {
        bottle.style.height = '10vh';
        bottle.style.width = '8vw';
        bottle.style.top = '71vh';
        bottle.style.left = '26.5vw';
    } else if (adjustedRotation >= 0 && adjustedRotation < 45) {
        bottle.style.height = '10vh';
        bottle.style.width = '8vw';
        bottle.style.top = '71vh';
        bottle.style.left = '25.2vw';
    } else if (adjustedRotation >= 45 && adjustedRotation <= 170) {
        bottle.style.height = '13vh';
        bottle.style.width = '6vw';
        bottle.style.top = '74vh';
        bottle.style.left = '27vw';
    } else if (adjustedRotation >= 165 && adjustedRotation < 180) {
        bottle.style.height = '10vh';
        bottle.style.width = '8vw';
        bottle.style.top = '71vh';
        bottle.style.left = '26vw';
    } else if (adjustedRotation >= 180 && adjustedRotation <= 195) {
        bottle.style.height = '10vh';
        bottle.style.width = '8vw';
        bottle.style.top = '71vh';
        bottle.style.left = '26vw';
    } else {
        bottle.style.height = '13vh';
        bottle.style.width = '6vw';
        bottle.style.top = '74vh';
        bottle.style.left = '27vw';
    }

    // ^|
    setTimeout(() => {
        whoosh_flips_sound.play();
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

    // ^O
    setTimeout(() => {
        bottle.style.height = '12vh';
        bottle.style.width = '7vw';
        bottle.style.top = '55vh';
    }, 200);
    
    // && ⟲ Rotation overdose + <>
    setTimeout(() => {
        water_bottle_sound.play();
        if (bottle_rotation >= 315 && bottle_rotation <= 405) {
            bottle.style.height = '10vh';
            bottle.style.width = '8vw';
            bottle.style.top = '71vh';
            bottle.style.left = '26.5vw';
            adjustedRotation = 375;
        } else if (bottle_rotation >= 0 && bottle_rotation < 45) {
            bottle.style.height = '10vh';
            bottle.style.width = '8vw';
            bottle.style.top = '71vh';
            bottle.style.left = '24.6vw';
            adjustedRotation = -15;
        } else if (bottle_rotation >= 45 && bottle_rotation <= 170) {
            bottle.style.height = '13vh';
            bottle.style.width = '6vw';
            bottle.style.top = '74vh';
            bottle.style.left = '27vw';
            adjustedRotation = 90;
        } else if (bottle_rotation >= 165 && bottle_rotation < 180) {
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
    }, 550);

    // O
    setTimeout(() => {
        bottle.style.height = '12vh';
        bottle.style.width = '7vw';
        bottle.style.left = '26vw';
        //bottle.style.left = String(Math.floor(Math.random() * (25.5 - 27.5) + 27.5))+'vw';
    }, 750);

    // && ⟲ Rotation fix + bump
    setTimeout(() => {
        if (bottle_rotation >= 315 && bottle_rotation <= 405) {
            bottle.style.top = '66.5vh';
            adjustedRotation = 360;
        } else if (bottle_rotation >= 0 && bottle_rotation < 45) {
            bottle.style.top = '66.5vh';
            adjustedRotation = 0;
        } else if (bottle_rotation >= 45 && bottle_rotation <= 170) {
            bottle.style.top = '70.5vh';
            adjustedRotation = 90;
        } else if (bottle_rotation >= 165 && bottle_rotation < 180) {
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
    }, 750);

    // end
    setTimeout(() => {
        if (bottle_rotation >= 315 && bottle_rotation <= 405) {
            bottle.style.top = '69.5vh';
        } else if (bottle_rotation >= 0 && bottle_rotation < 45) {
            bottle.style.top = '69.5vh';
        } else if (bottle_rotation >= 45 && bottle_rotation <= 170) {
            bottle.style.top = '73.5vh';
        } else if (bottle_rotation >= 165 && bottle_rotation < 180) {
            bottle.style.top = '69.5vh';
        } else if (bottle_rotation >= 180 && bottle_rotation <= 195) {
            bottle.style.top = '69.5vh';
        } else {
            bottle.style.top = '73.5vh';
        }
    }, 850);
};

// Patch Notes
function open_patch_notes() {
    paper_sound.playbackRate = Math.random() * (1.2 - 0.7) + 0.7;
    paper_sound.volume = 0.69;
    paper_sound.currentTime = 0;
    paper_sound.play();
    if (patch_notes_paper.style.display === 'block') {
        patch_notes_button.style.content = 'url(items/patch_notes/patch_notes_closed.png)';
        patch_notes_paper.style.display = 'none';
    }
    else {
        new_patch_notification.style.display = 'none';
        patch_notes_button.style.content = 'url(items/patch_notes/patch_notes_open.png)';
        patch_notes_paper.style.display = 'block';
    }
}

function toggle_settings() {
    const settings = document.getElementById('settings_menu');
    if (settings.style.display === 'block') {
        settings.style.display = 'none';
    } else {
        settings.style.display = 'block';
    }
}

// new patch indicator
function patch_indicator(settings_patch_indicator) {
    if (settings_patch_indicator.checked) {
        localStorage['patch_indicator_setting'] = true;
    }
    else {
        localStorage['patch_indicator_setting'] = false;
    }
}

// dark mode
function dark_mode(s_dark_mode) {
    if (s_dark_mode.checked) {
        localStorage['dark_mode_setting'] = true;
        alert(patch_notes_paper);
        patch_notes_paper.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
    else {
        localStorage['dark_mode_setting'] = false;
        patch_notes_paper.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
}