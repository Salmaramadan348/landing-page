const container = document.getElementById("cardsContainer");

const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const cardWidth = 360; 

function updateZIndex() {

    const cards = container.querySelectorAll(".product-card");

    cards.forEach(card => {
        card.style.zIndex = "1";
        card.style.position = "relative";
    });

    for(let i = 0; i < 3 && i < cards.length; i++){
        cards[i].style.zIndex = "100";
    }
}

updateZIndex();


// Right Arrow
rightBtn.addEventListener("click", () => {

    container.style.transition = "transform 0.4s ease";
    container.style.transform = `translateX(-${cardWidth}px)`;

    function moveFirstToEnd() {

        container.appendChild(container.firstElementChild);

        container.style.transition = "none";
        container.style.transform = "translateX(0)";

        updateZIndex();

        container.removeEventListener(
            "transitionend",
            moveFirstToEnd
        );
    }

    container.addEventListener(
        "transitionend",
        moveFirstToEnd
    );
});


// Left Arrow
leftBtn.addEventListener("click", () => {

    container.style.transition = "none";

    container.prepend(
        container.lastElementChild
    );

    container.style.transform =
        `translateX(-${cardWidth}px)`;

    updateZIndex();

    requestAnimationFrame(() => {

        container.style.transition =
            "transform 0.4s ease";

        container.style.transform =
            "translateX(0)";
    });

});