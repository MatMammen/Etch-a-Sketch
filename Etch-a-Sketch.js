const flexContainer = document.querySelector(".flex-container");

for (let i = 0; i < (16 * 16); i++) {
    addFlexChild();
}
const flexItems = document.querySelectorAll('.flex-item');
flexItems.forEach((Item) => {
    Item.addEventListener('mouseover',() => {
        Item.style.background = 'green'; 
    });
    Item.addEventListener('touchmove',() => {
        Item.style.background = 'green'; 
    });
});
const reload = document.createElement('button');
reload.textContent = 'Press me to restart!';
reload.style.fontSize = '100px';
document.body.appendChild(reload);
reload.addEventListener('click', () => {
    let reloadPrompt = prompt("How many squares per size on the new grid?"); 
    flexItems.forEach((Item) => {
        Item.style.background = 'white';
    });
});
function addFlexChild() {
    const flexItem = document.createElement('div');
    flexItem.className = "flex-item";
    flexContainer.appendChild(flexItem);
}
