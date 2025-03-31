document.addEventListener('DOMContentLoaded', function() {
    const whoWeAreBtn = document.getElementById('whoWeAreBtn');
    const whoWeAreDropdown = document.getElementById('whoWeAreDropdown');
    
    // Toggle dropdown saat "Who we are" diklik
    whoWeAreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (whoWeAreDropdown.style.display === 'flex') {
            whoWeAreDropdown.style.display = 'none';
        } else {
            whoWeAreDropdown.style.display = 'flex';
        }
    });
    
    // Tutup dropdown saat klik di luar
    document.addEventListener('click', function(e) {
        if (!e.target.closest('#whoWeAreBtn') && !e.target.closest('#whoWeAreDropdown')) {
            whoWeAreDropdown.style.display = 'none';
        }
    });
});
