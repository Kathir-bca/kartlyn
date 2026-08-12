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












document.addEventListener("DOMContentLoaded", () => {

    const themeSelect = document.getElementById("theme");

    if (themeSelect) {
        const savedTheme = localStorage.getItem("bankTheme") || "light";

        themeSelect.value = savedTheme;

        function applyTheme(theme) {
            document.body.style.backgroundColor =
                theme === "dark" ? "#1b2438" : "#fff";

        }

        applyTheme(savedTheme);

        themeSelect.addEventListener("change", () => {
            const selectedTheme = themeSelect.value;

            localStorage.setItem("bankTheme", selectedTheme);
            applyTheme(selectedTheme);
        });
    }




    const languageSelect = document.getElementById("language");

    if (languageSelect) {

        const savedLanguage = localStorage.getItem("bankLanguage");

        if (savedLanguage) {
            languageSelect.value = savedLanguage;
        }

        languageSelect.addEventListener("change", () => {

            const language = languageSelect.value;

            localStorage.setItem("bankLanguage", language);

            console.log("Language changed to:", language);
        });
    }



    const switches = document.querySelectorAll(".switch input");

    switches.forEach((toggle, index) => {

        const savedState = localStorage.getItem(`setting-${index}`);

        if (savedState !== null) {
            toggle.checked = savedState === "true";
        }

        toggle.addEventListener("change", () => {

            localStorage.setItem(
                `setting-${index}`,
                toggle.checked
            );

            console.log(
                `Setting ${index + 1}:`,
                toggle.checked ? "ON" : "OFF"
            );
        });
    });


    const clickableRows = document.querySelectorAll(".clickable-row");

    clickableRows.forEach(row => {

        row.addEventListener("click", function (event) {

            if (
                event.target.tagName === "INPUT" ||
                event.target.tagName === "SELECT"
            ) {
                return;
            }

            const title = this.querySelector("h3");

            if (title) {
                console.log("Selected:", title.textContent);


                alert(`${title.textContent} clicked`);
            }
        });
    });

});



