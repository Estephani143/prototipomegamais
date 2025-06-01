
document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const button = item.querySelector("button");
        const content = item.querySelector(".accordion-content");

        button.addEventListener("click", () => {
            const isOpen = item.classList.contains("active");
            accordionItems.forEach(i => i.classList.remove("active"));
            
            if (!isOpen) {
                item.classList.add("active");
                openAccordion(content);
            } else {
                closeAccordion(content);
            }
        });
    });

    function openAccordion(panel) {
        panel.style.display = "block";
        const height = panel.scrollHeight + "px";
        panel.style.maxHeight = height;
        panel.style.transition = "max-height 1.5s ease";
    }

    function closeAccordion(panel) {
        panel.style.transition = "max-height 1.5s ease";
        panel.style.maxHeight = "0";
        setTimeout(() => {
            panel.style.display = "none";
        }, 500);
    }
});

