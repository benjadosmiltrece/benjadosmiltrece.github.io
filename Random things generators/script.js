function random_ip() {
    var ip = document.getElementById("ip");
    ip.textContent = rip() + "." + rip() + "." + rip() + "." + rip();
}
function rip() {
    return String(Math.round(Math.random() * (255 - 0)));
}