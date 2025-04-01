// search-index.js
const searchIndex = [
    {
      "title": "How to Install SM64 Plus",
      "url": "pages/howtoinstallsm64plusonlinux/sm64plus.html",
      "content": "How to install Super Mario 64 Plus on Linux tutorial A with a couble of aclarations that the tutorial of the official Github for SM64 Plus doesn't have Official MorsGames SM64 Plus build guide: https://github.com/MorsGames/sm64plus/wiki/Manual-Building-Guide Step 0: Dependencies: Open the terminal and install the required packages depending on your Linux distro and package manager: On Debian/Ubuntu based distros: Run the command: sudo apt install -y git build-essential pkg-config libusb-1.0-0-dev libsdl2-dev On Arch based distros like Manjaro or CachyOS: Run the command: sudo pacman -S base-devel python sdl2 glew On Fedora based distros: Run the command: sudo dnf install make gcc python3 glew-devel SDL2-devel libusb1-devel libXrandr-devel Step 1: Download the sm64plus launcher from the official github: https://github.com/MorsGames/sm64plus-launcher/releases/ (check if your system is x64 or arm64) (if your system is 32-bits i think you can use the 64-bits one anyway and change a setting in the make build step) Step 2: Download the original Super Mario 64 USA ROM with the .z64 filetype (I downloaded it from Archive.org): https://archive.org/details/super-mario-64-usa_202401 Then rename the file to baserom.us.z64 Example: Super Mario 64 (USA).z64 → baserom.us.z64 Step 3: Open your terminal and clone the sm64plus repository with the command: git clone https://github.com/MorsGames/sm64plus.git move the folder 'sm64plus' to the launcher folder: SM64Plus_x64/bin/ How it should look like: SM64Plus_x64/bin/assets/ SM64Plus_x64/bin/sm64plus/ SM64Plus_x64/bin/SM64Plus Step 4: Move the Original Super Mario 64 ROM to the sm64plus folder SM64Plus_x64/bin/sm64plus/baserom.us.z64 Step 4: Open the terminal inside the sm64plus folder SM64Plus_x64/bin/sm64plus and execute the command: make (If you're building the game for 32-bit, you should also include TARGET_32BIT=1 after make) make TARGET_32BIT=1 Step 5: You now can execute the launcher (personal recomendation) ./SM64Plus_x64/bin/SM64Plus or execute the game directly skiping the launcher (your launcher configurations/mods with still be enabled) ./SM64Plus_x64/bin/sm64plus/build/us_pc/sm64.us.f3dex2e or ./SM64Plus_x64/bin/sm64plus/build/us_pc/sm64.us Step 6: Enjoy! :3"
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