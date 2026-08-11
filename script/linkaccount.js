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




/* =====================================================
   LINKED ACCOUNTS JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const bankSelect = document.getElementById("bankSelect");
    const linkButton = document.getElementById("linkAccountBtn");



    /* ================================================
       LINK ACCOUNT
    ================================================= */

    linkButton.addEventListener("click", function () {

        const selectedBank = bankSelect.value;

        const selectedAccount = document.querySelector(
            'input[name="accountType"]:checked'
        );


        /* Check bank */

        if (selectedBank === "") {

            alert("Please select a bank.");

            bankSelect.focus();

            return;
        }


        /* Check account type */

        if (!selectedAccount) {

            alert("Please select an account type.");

            return;
        }


        /* Get account type */

        const accountType = selectedAccount.value;


        /* Success */

        alert(
            `Your ${accountType} from ${selectedBank} has been selected for linking.`
        );


        console.log("Bank:", selectedBank);
        console.log("Account Type:", accountType);

    });



    /* ================================================
       THREE DOT MENU
    ================================================= */

    const menuButtons = document.querySelectorAll(".menu-btn");


    menuButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            const bankItem = button.closest(".bank-item");

            const bankName = bankItem.querySelector("h3").textContent;


            const action = prompt(
                `${bankName}\n\nType an option:\n1. Set as Primary\n2. Unlink Account`
            );


            if (action === "1") {

                alert(`${bankName} has been set as Primary.`);

            }
            else if (action === "2") {

                const confirmRemove = confirm(
                    `Are you sure you want to unlink ${bankName}?`
                );

                if (confirmRemove) {

                    bankItem.remove();

                    alert(`${bankName} has been unlinked.`);

                }

            }

        });

    });



    /* ================================================
       SERVICE CLICK
    ================================================= */

    const serviceItems = document.querySelectorAll(".service-item");


    serviceItems.forEach(function (service) {

        service.addEventListener("click", function () {

            const serviceName =
                service.querySelector("h3").textContent;

            alert(
                `${serviceName} service selected.`
            );

        });

    });



    /* ================================================
       VIEW ALL BUTTONS
    ================================================= */

    const viewButtons =
        document.querySelectorAll(".view-all-btn");


    viewButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const text =
                button.querySelector("span").textContent;

            alert(text);

        });

    });

});