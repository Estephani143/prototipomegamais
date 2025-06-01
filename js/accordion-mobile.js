document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) {
        const accordionItems = document.querySelectorAll(".accordion-item");

        accordionItems.forEach(item => {
            const button = item.querySelector("button");
            const content = item.querySelector(".accordion-content");

            button.addEventListener("click", function() {
                const isOpen = item.classList.contains("active");

         
                accordionItems.forEach(i => {
                    if (i !== item) {
                        i.classList.remove("active");
                        i.querySelector(".accordion-content").style.display = "none";
                    }
                });

            
                if (!isOpen) {
                    item.classList.add("active");
                    content.style.display = "block"; 
                } else {
                    item.classList.remove("active");
                    content.style.display = "none";  
                }
            });
        }); 
    } 
});