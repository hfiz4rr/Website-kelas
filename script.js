function showEra(eraId) {
    // 1. Sembunyikan semua section
    const sections = document.querySelectorAll('.era-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Tampilkan section yang dipilih
    document.getElementById(eraId).classList.add('active');

    // 3. Update status active pada navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.textContent.toLowerCase().includes(eraId)) {
            link.classList.add('active');
        }
    });

    // 4. Scroll ke atas section secara halus
    window.scrollTo({ top: 400, behavior: 'smooth' });
}

// Efek scroll navbar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.style.padding = '10px 10%';
        nav.style.background = 'black';
    } else {
        nav.style.padding = '20px 10%';
        nav.style.background = 'rgba(0,0,0,0.85)';
    }
});