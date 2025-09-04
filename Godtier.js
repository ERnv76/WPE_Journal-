    // Disable right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
    // Disable keyboard copy, cut, paste
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && 
            (e.key === 'c' || e.key === 'x' || e.key === 'v' || e.key === 'a')) {
            e.preventDefault();
        }
    });
    
    // Disable paste into input fields
    document.addEventListener('paste', function(e) {
        e.preventDefault();
    });
    document.addEventListener('copy', e => e.preventDefault());
    document.addEventListener('cut', e => e.preventDefault());
    document.addEventListener('paste', e => e.preventDefault());
