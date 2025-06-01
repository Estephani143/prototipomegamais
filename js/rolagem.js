document.addEventListener("DOMContentLoaded", function() {
   
    document.getElementById("scrollButton").addEventListener("click", function(event) {
        event.preventDefault(); 
      
        const target = document.getElementById("principal");
       
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        }); 
    }); 
}); 