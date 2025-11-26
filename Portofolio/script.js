document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');
    const projectsSection = document.getElementById('projects');
    const contactForm = document.getElementById('contact-form');

    // 1. Fungsi untuk tombol CTA yang mengarah ke bagian Proyek
    if (ctaButton && projectsSection) {
        ctaButton.addEventListener('click', function() {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. Simulasi pengiriman form kontak
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah form dikirim secara default (reload halaman)

            // Di dunia nyata, Anda akan mengirim data ke server di sini.
            alert('Terima kasih atas pesan Anda! Saya akan segera membalasnya.');
            
            // Mengosongkan form setelah pesan simulasi
            contactForm.reset();
        });
    }

    // 3. Tambahkan efek scroll-spy atau animasi lainnya di sini jika diperlukan
});