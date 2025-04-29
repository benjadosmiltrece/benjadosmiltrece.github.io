last_update = '2025-04-29'; // Last update date in the format YYYY-MM-DD



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

var current_date = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]; // Adjusted for local timezone


// Cookie Clicker
var cookie = document.getElementById('cookie');
var cookie_click_sound = document.getElementById('cookie_click_sound');
var cookie_counter = 0;
var cookie_text = document.getElementById('cookie_text');
var cookie_enable = false;
var cookie_text_right = 34.3;

// The Wacky TV
youtube_video = document.getElementById('youtube_video');



// Settings

var settings_patch_indicator = document.getElementById('s_patch_indicator')





//                                vvv ---------------- THA CODE -------------------- vvv




// ON LOAD
window.addEventListener('load', function() {

    // Patch indicator
    setTimeout(() => {
        if (localStorage['patch_indicator_setting']) {
            settings_patch_indicator.checked = localStorage['patch_indicator_setting'] === 'true';
        }
    }, 0);

    if(new_patch_notification && current_date && localStorage['patch_indicator_setting'] === 'false') {
    // Today's new patch notification icon
        if (String(current_date) === last_update) {
            new_patch_notification.style.display = 'block';
        } else {
            new_patch_notification.style.display = 'none';
        }
    }
    else if (localStorage['patch_indicator_setting'] === 'true'){
        new_patch_notification.style.display = 'none';
    }

    // cookies
    if (!isNaN(localStorage['cookie_counter'])) {
        cookie_counter = localStorage['cookie_counter'];
        cookie_enable = true;
        cookie_text.textContent = cookie_counter + ' Cookies';
        cookie_text.style.right = (cookie_text_right - (digitCount(cookie_counter) / 3.2)) + 'vw';
    } else {
        setTimeout(() => {
            cookie_enable = true;
            cookie_text.textContent = cookie_counter + ' Cookies';
            cookie_text.style.right = (cookie_text_right - (digitCount(cookie_counter) / 3.2)) + 'vw';
        }, 10);
    }
}
);

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
    whoosh_1_sound.playbackRate = Math.random() * (1.2 - 0.8) + 0.8;
    whoosh_2_sound.playbackRate = Math.random() * (1.2 - 0.8) + 0.8;
    whoosh_flips_sound.playbackRate = Math.random() * (1.3 - 0.9) + 0.9;
    water_bottle_sound.playbackRate = Math.random() * (1.2 - 0.8) + 0.8;

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
    paper_sound.playbackRate = Math.random() * (1.2 - 0.8) + 0.8;
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

function digitCount(num) {
    return Math.abs(num).toString().length;
}

// Cookie Clicker

    // cookie click
cookie.addEventListener('click', function() {
    if (cookie_enable) {
        cookie_counter++;
        localStorage['cookie_counter'] = cookie_counter;
        cookie_text.textContent = cookie_counter+' Cookies';
        cookie_text.style.right = (cookie_text_right - (digitCount(cookie_counter) / 3.2)) + 'vw';
    }
    else {
        alert('Hold up, baking cookies...');
    }

    // Create a cookie particle
    const cookieParticle = document.createElement('img');
    cookieParticle.src = 'items/cookies/cookie_particle.png';
    cookie_random_rotation = Math.random() * (360 - 0) + 0;
    cookieParticle.style.transform = `rotate(${cookie_random_rotation}deg)`;
    cookieParticle.style.zIndex = '11';
    cookieParticle.style.position = 'absolute';
    cookieParticle.style.pointerEvents = 'none';
    cookieParticle.style.opacity = '1';

    // Set random size
    const randomSize = Math.random() * (15 - 25) + 25;
    cookieParticle.style.width = `${randomSize}px`;
    cookieParticle.style.height = `${randomSize}px`;

    // Get the mouse position
    document.addEventListener('click', function(event) {
        cookieParticle.style.left = `${event.clientX - randomSize / 2}px`;
        cookieParticle.style.top = `${event.clientY - randomSize / 2}px`;
    }, { once: true });

    // Add the particle to the document
    document.body.appendChild(cookieParticle);

    // Animate the particle with separate X and Y animations
    const jumpHeight = Math.random() * (10 - 20) + 20; // Height of the jump in pixels
    const horizontalShift = Math.random() * (-30 - 30) + 30; // Random horizontal movement

    // Use requestAnimationFrame for separate X and Y animations
    let startTime = null;
    const duration = 1000; // Duration of the animation in milliseconds
    function animateParticle(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        // Calculate progress
        const progress = Math.min(elapsed / duration, 1);

        // Apply easing (ease-out for upward motion, ease-in for downward motion)
        const easeOutProgress = 1 - Math.pow(1 - Math.min(progress * 2, 1), 3); // Ease-out for the first half
        const easeInProgress = Math.pow(Math.max(progress * 2 - 0, 0), 3); // Ease-in for the second half
        const currentY = -jumpHeight * easeOutProgress + jumpHeight * easeInProgress;
        const currentX = horizontalShift * progress;

        // Update particle position
        cookieParticle.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${cookie_random_rotation}deg)`;
        cookieParticle.style.opacity = `${1 - progress * 1.5}`; // Fade out as it moves

        // Continue animation or remove particle
        if (progress < 1) {
            requestAnimationFrame(animateParticle);
        } else {
            cookieParticle.remove();
        }
    }

    requestAnimationFrame(animateParticle);

    // Create a "+1" particle
    const particle = document.createElement('div');
    particle.style.zIndex = '12';
    particle.textContent = '+1';
    particle.style.position = 'absolute';
    particle.style.color = 'white';
    particle.style.fontSize = '1.2vw';
    particle.style.fontWeight = 'bold';
    particle.style.pointerEvents = 'none';
    particle.style.opacity = '1';

    // Get the mouse position
    document.addEventListener('click', function(event) {
        particle.style.left = `${event.clientX - (Math.random() * (6 - 14) + 14)}px`;
        particle.style.top = `${event.clientY}px`;
    }, { once: true });

    // Add the particle to the document
    document.body.appendChild(particle);

    // Animate the "+1" particle
    startTime = null;
    function animateTextParticle(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        // Calculate progress
        const progress = Math.min(elapsed / duration, 1);

        // Apply easing (ease-out for Y)
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        const currentY = -50 * easeOutProgress;

        // Update particle position
        particle.style.transform = `translateY(${currentY}px)`;
        particle.style.opacity = `${1 - progress}`;

        // Continue animation or remove particle
        if (progress < 1) {
            requestAnimationFrame(animateTextParticle);
        } else {
            particle.remove();
        }
    }

    requestAnimationFrame(animateTextParticle);

    cookie_click_sound.playbackRate = Math.random() * (1.2 - 0.7) + 0.7;
    cookie_click_sound.volume = 1;
    cookie_click_sound.currentTime = 0;
    cookie_click_sound.play();

    cookie.style.transform = 'scale(0.95)';
    cookie_text.style.scale = '1.05';
    cookie_text.style.top = '34.4vh';
    
    setTimeout(() => {
        cookie.style.transform = 'scale(1)';
        cookie_text.style.scale = '1';
        cookie_text.style.top = '34.5vh';
        if (cookie.matches(':hover')) {
            cookie.dispatchEvent(new Event('mouseover'));
        }
        else {
            cookie.dispatchEvent(new Event('mouseout'));
        }
    }, 100);

});

    // cookie hover
let cookieHoverTimeouts = [];
cookie.addEventListener('mouseover', function() {
    cookieHoverTimeouts.forEach(timeout => clearTimeout(timeout));
    cookieHoverTimeouts = [];
    cookie.style.transform = 'scale(1.15)';
    cookieHoverTimeouts.push(setTimeout(() => {
        cookie.style.transform = 'scale(1.1)';
    }, 100));
    cookieHoverTimeouts.push(setTimeout(() => {
        cookie.style.transform = 'scale(1.125)';
    }, 200));
    cookieHoverTimeouts.push(setTimeout(() => {
        cookie.style.transform = 'scale(1.1)';
    }, 300));
});

    // cookie unhover
cookie.addEventListener('mouseout', function() {
    cookieHoverTimeouts.forEach(timeout => clearTimeout(timeout));
    cookieHoverTimeouts = [];
    cookie.style.transform = 'scale(0.95)';
    cookieHoverTimeouts.push(setTimeout(() => {
        cookie.style.transform = 'scale(1)';
    }, 100));
    cookieHoverTimeouts.push(setTimeout(() => {
        cookie.style.transform = 'scale(0.975)';
    }, 200));
    cookieHoverTimeouts.push(setTimeout(() => {
        cookie.style.transform = 'scale(1)';
    }, 300));
});

// toggle settings
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

// the wacky TV
function generateRandomYouTubeLink() {
    if (window.location.protocol === 'file:') {
        alert('The Wacky TV is not available when running from a local file. Please run it from a web server, like: https://benjadosmiltrece.github.io/la_sala_del_fondo/index.html');
    }
    // YouTube video IDs are 11 characters long and can contain:
    // A-Z, a-z, 0-9, -, _ 
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    const idLength = 11;
    let videoId = '';
    
    for (let i = 0; i < idLength; i++) {
      videoId += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    youtube_video.src = `https://www.youtube.com/embed/${videoId}?controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0`;
}



// Delete data button
function delete_data() {
    if (confirm('Are you sure you want to delete all data?')) {
        localStorage.removeItem('cookie_counter');
        localStorage.removeItem('patch_indicator_setting');
        localStorage.removeItem('dark_mode_setting');
        alert('All data has been deleted. Please refresh the page to see the changes.');
    }
}