(function() {
    const redirectUrl = "https://www.youtube.com/watch?v=xvFZjo5PgG0";

    function isMobileDevice() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    function redirectToYoutube() {
        
        window.location.href = redirectUrl;
    }

    function detectDevTools() {
        if (isMobileDevice()) return;

     
        const threshold = 150; 
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
            redirectToYoutube();
        }

        
        const element = new Image();
        Object.defineProperty(element, 'id', {
            get: function() {
                redirectToYoutube();
            }
        });
        console.log(element);
    }

    setInterval(detectDevTools, 1000);

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function(e) {
        if (isMobileDevice()) return;

        const blockedKeys = [
            123,
            73,   
            74,  
            67, 
            85,   
            83, 
            75,   
            69,   
            77    
        ];

        const isBlockedCombination = 
            (e.ctrlKey && e.shiftKey && blockedKeys.includes(e.keyCode)) || 
            (e.ctrlKey && blockedKeys.includes(e.keyCode)) || 
            e.keyCode === 123;

        if (isBlockedCombination) {
            e.preventDefault();
            redirectToYoutube();
        }
    });

    document.addEventListener('mousedown', function(e) {
        if (e.button === 2) { 
            e.preventDefault();
        }
    });
})();
