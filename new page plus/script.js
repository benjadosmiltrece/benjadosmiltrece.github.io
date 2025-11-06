window.addEventListener('load', function() {
    var buttons = document.querySelectorAll(".btn");
    
    function updateShadows() {
        const centerX = window.innerWidth / 2;
        
        buttons.forEach(button => {
            const img = button.querySelector('img');
            if (img) {
                const rect = button.getBoundingClientRect();
                const buttonCenterX = rect.left + rect.width / 2;
                const distanceFromCenter = buttonCenterX - centerX;
                
                // Calculate shadow intensity based on distance
                const shadowX = distanceFromCenter * 0.05;
                const defaultY = button.matches(':hover') ? 50 : 25;
                
                img.style.boxShadow = `${shadowX}px ${defaultY}px 2px #00000015`;
            }
        });
    }
    
    // Update shadows on load and resize
    updateShadows();
    window.addEventListener('resize', updateShadows);
  
    // Update shadows on hover
    buttons.forEach(button => {
        button.addEventListener('mouseenter', updateShadows);
        button.addEventListener('mouseleave', updateShadows);
    });
});