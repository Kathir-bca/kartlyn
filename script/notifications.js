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








document.addEventListener("DOMContentLoaded", function () {

    const selectAll = document.getElementById("selectAll");

    const notificationToggles =
        document.querySelectorAll(".notification-toggle");


    

    function updateSummary() {

        const emailToggles =
            document.querySelectorAll(
                '.notification-toggle[data-channel="email"]'
            );

        const smsToggles =
            document.querySelectorAll(
                '.notification-toggle[data-channel="sms"]'
            );

        const pushToggles =
            document.querySelectorAll(
                '.notification-toggle[data-channel="push"]'
            );


        

        let emailCount = 0;
        let smsCount = 0;
        let pushCount = 0;


        emailToggles.forEach(function (toggle) {
            if (toggle.checked) {
                emailCount++;
            }
        });


        smsToggles.forEach(function (toggle) {
            if (toggle.checked) {
                smsCount++;
            }
        });


        pushToggles.forEach(function (toggle) {
            if (toggle.checked) {
                pushCount++;
            }
        });


    

        document.getElementById("emailCount").textContent =
            emailCount;

        document.getElementById("smsCount").textContent =
            smsCount;

        document.getElementById("pushCount").textContent =
            pushCount;




        updateStatus(
            "emailStatus",
            emailCount
        );

        updateStatus(
            "smsStatus",
            smsCount
        );

        updateStatus(
            "pushStatus",
            pushCount
        );


        const allEnabled =
            Array.from(notificationToggles)
                .every(toggle => toggle.checked);

        selectAll.checked = allEnabled;
    }



    function updateStatus(elementId, count) {

        const status =
            document.getElementById(elementId);

        status.classList.remove(
            "active",
            "partial"
        );


        if (count === 7) {

            status.textContent = "Active";
            status.classList.add("active");

        } else if (count > 0) {

            status.textContent = "Partial";
            status.classList.add("partial");

        } else {

            status.textContent = "Off";
            status.classList.add("partial");
        }
    }



    notificationToggles.forEach(function (toggle) {

        toggle.addEventListener("change", function () {

            updateSummary();

        });

    });



    selectAll.addEventListener("change", function () {

        notificationToggles.forEach(function (toggle) {

            toggle.checked = selectAll.checked;

        });

        updateSummary();

    });



    const quietHours =
        document.getElementById("quietHours");

    const quietFrom =
        document.getElementById("quietFrom");

    const quietTo =
        document.getElementById("quietTo");


    quietHours.addEventListener("change", function () {

        if (this.checked) {

            console.log("Quiet Hours Enabled");

            quietFrom.disabled = false;
            quietTo.disabled = false;

        } else {

            console.log("Quiet Hours Disabled");

            quietFrom.disabled = true;
            quietTo.disabled = true;
        }

    });



    quietFrom.addEventListener("change", function () {

        console.log(
            "Quiet Hours From:",
            this.value
        );

    });


    quietTo.addEventListener("change", function () {

        console.log(
            "Quiet Hours To:",
            this.value
        );

    });




    updateSummary();

});










