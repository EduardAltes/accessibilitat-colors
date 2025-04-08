
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        const dropdownToggle = dropdown.querySelector(".nav-link");
        const dropdownMenu = dropdown.querySelector(".dropdown-content");

        dropdownToggle.addEventListener("click", (e) => {
            e.preventDefault();
            toggleDropdown(dropdown);
        });

        dropdownToggle.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleDropdown(dropdown);
            }
        });

        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target)) {
                closeDropdown(dropdown);
            }
        });

        dropdownMenu.addEventListener("keydown", (e) => {
            const menuItems = dropdownMenu.querySelectorAll(".dropdown-item");
            const firstMenuItem = menuItems[0];
            const lastMenuItem = menuItems[menuItems.length - 1];

            if (e.key === "Escape") {
                closeDropdown(dropdown);
                dropdownToggle.focus();
            } else if (e.key === "Tab" && !e.shiftKey) {
                if (e.target === lastMenuItem) {
                    closeDropdown(dropdown);
                }
            } else if (e.key === "Tab" && e.shiftKey) {
                if (e.target === firstMenuItem) {
                    closeDropdown(dropdown);
                }
            }
        });
    });

    function toggleDropdown(dropdown) {
        const isOpen = dropdown.getAttribute("data-open") === "true";
        if (isOpen) {
            closeDropdown(dropdown);
        } else {
            openDropdown(dropdown);
        }
    }

    function openDropdown(dropdown) {
        dropdown.setAttribute("data-open", "true");
        dropdown.querySelector(".nav-link").setAttribute("aria-expanded", "true");
        dropdown.querySelector(".dropdown-content").style.display = "block";
    }

    function closeDropdown(dropdown) {
        dropdown.setAttribute("data-open", "false");
        dropdown.querySelector(".nav-link").setAttribute("aria-expanded", "false");
        dropdown.querySelector(".dropdown-content").style.display = "none";
    }
});