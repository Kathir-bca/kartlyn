document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sideBar = document.getElementById('sideBar');
    const overlay = document.getElementById('sidebarOverlay');

    function openSidebar() {
        sideBar.classList.add('is-open');
        overlay.classList.add('is-visible');
        menuToggle.setAttribute('aria-expanded', 'true');
    }

    function closeSidebar() {
        sideBar.classList.remove('is-open');
        overlay.classList.remove('is-visible');
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    if (menuToggle && sideBar && overlay) {
        menuToggle.addEventListener('click', () => {
            const isOpen = sideBar.classList.contains('is-open');
            isOpen ? closeSidebar() : openSidebar();
        });

        // Tapping the dimmed overlay closes the drawer
        overlay.addEventListener('click', closeSidebar);

        // Close on Escape for keyboard users
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeSidebar();
        });

        // If the viewport is resized back up to desktop, reset the drawer state
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1023) closeSidebar();
        });
    }
});