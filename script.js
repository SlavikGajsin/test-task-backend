 let modalBlock = document.querySelector(".modal-block");
 let modalButton = document.querySelector("#modal-button");

 modalButton.addEventListener("click", function() {
     if (modalBlock.classList.contains("hidden")) {
         modalBlock.classList.remove("hidden");

     } else {
         modalBlock.classList.add("hidden");
     }
 });