const acordeonTrigger = document.querySelectorAll(".acordeon .trigger");

acordeonTrigger.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
        const acordeon = trigger.parentElement; // Pegue o elemento .acordeon
        const isOpen = acordeon.classList.contains("open");

        if (isOpen) {
            acordeon.classList.remove("open");
            acordeon.querySelector(".content").style.height = "0"; // Fecha o conteúdo
        } else {
            acordeon.classList.add("open");
            acordeon.querySelector(".content").style.height = "auto"; // Abre o conteúdo
        }
    });
});
