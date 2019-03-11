const theInput = document.createElement("input");
const createButton = document.createElement("button");
const createContainer = document.createElement("article");
const cards = document.createElement("div");
cards.id = "allCards";
createContainer.id = "createContainer";

createButton.textContent = "New Card";
document.body.appendChild(createContainer);
document.body.appendChild(cards);
createContainer.appendChild(theInput);
createContainer.appendChild(createButton);

let i = 1;

const deleteFunction = (cardToDelete) => {
    cards.removeChild(cardToDelete);
    i--;
}




createButton.addEventListener("click", function() {
    builder(theInput.value);
})

const builder = (input) => {
    const cardContainer = document.createElement("article");
    cardContainer.id = `card--${i}`;
    cardContainer.className = "card";
    cardContainer.style.border = "2px dotted purple";
    document.body.appendChild(cardContainer);

    cardContainer.innerHTML =
        `
        <div>${input}</div>
        <div>
            <button>Delete</button>
        </div>
        `;
    
    const deleteButton = cardContainer.querySelector("button");
    deleteButton.id = `delete--${i}`;
    cards.appendChild(cardContainer);
    deleteButton.addEventListener("click", function () {
        deleteFunction(cardContainer);
    });
    i++;
}
