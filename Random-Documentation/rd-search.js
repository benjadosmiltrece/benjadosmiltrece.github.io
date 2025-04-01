// search-index.js
const searchIndex = [
    {
      "title": "How to Install SM64 Plus",
      "url": "pages/howtoinstallsm64plusonlinux/sm64plus.html",
      "content": "How to install Super Mario 64 Plus on Linux tutorial A with a couble of aclarations that the official Github for SM64 doesn't have Official MorsGames build guide: https://github.com/MorsGames/sm64plus/wiki/Manual-Building-Guide Step 0: Dependencies: Open terminal and required packages depending your distro package manager: On Debian/Ubuntu based distros: Run command: sudo apt -y git build-essential pkg-config libusb-1.0-0-dev libsdl2-dev Arch distros like Manjaro or CachyOS: pacman -S base-devel python sdl2 glew Fedora dnf make gcc python3 glew-devel SDL2-devel libusb1-devel libXrandr-devel 1: Download sm64plus launcher from github: https://github.com/MorsGames/sm64plus-launcher/releases/ (check if system is x64 arm64) (if 32-bits i think you can use 64-bits one anyway change setting in step) 2: original USA ROM .z64 filetype (I downloaded it Archive.org): https://archive.org/details/super-mario-64-usa_202401 Then rename file baserom.us.z64 Example: (USA).z64 → 3: clone repository https://github.com/MorsGames/sm64plus.git move folder 'sm64plus' folder: SM64Plus_x64/bin/ should look like: SM64Plus_x64/bin/assets/ SM64Plus_x64/bin/sm64plus/ SM64Plus_x64/bin/SM64Plus 4: Move Original SM64Plus_x64/bin/sm64plus/baserom.us.z64 inside SM64Plus_x64/bin/sm64plus execute (If you're building game 32-bit, also include TARGET_32BIT=1 after make) 5: You now (personal recomendation) ./SM64Plus_x64/bin/SM64Plus directly skiping (your configurations/mods still be enabled) ./SM64Plus_x64/bin/sm64plus/build/us_pc/sm64.us.f3dex2e ./SM64Plus_x64/bin/sm64plus/build/us_pc/sm64.us 6: Enjoy! :3"
    },
    {
      "title": "placeholder",
      "url": "page2.html",
      "content": "All text from placeholder..."
    },
    {
      "title": "placeholder",
      "url": "page2.html",
      "content": "All text from placeholder..."
    },
    {
      "title": "placeholder",
      "url": "page2.html",
      "content": "All text from placeholder..."
    },
    {
      "title": "placeholder",
      "url": "page2.html",
      "content": "All text from placeholder..."
    },
    {
      "title": "placeholder",
      "url": "page2.html",
      "content": "All text from placeholder..."
    },
    {
      "title": "placeholder",
      "url": "page2.html",
      "content": "All text from placeholder..."
    }
    // etc.
  ];