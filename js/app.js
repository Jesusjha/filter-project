const allBtnFilter = document.getElementById("btnFilter");
allBtnFilter.addEventListener("click", getCategory);
const cardList = Array.from(document.querySelectorAll('[data-item]'));

// cardList.map(card => {
//     console.log(card.dataset.item);
// });

function getCategory(e) {
    e.preventDefault();
    const category = e.target.dataset.filter;

    if (!category) {
        return
    }

    filterCards(category);
}

function filterCards(category){
    let filteredCards = cardList.filter(card => {
        if(card.dataset.item === category){
            return card
        }
    })
    cardList.forEach(card => {
        card.classList.toggle('hidden');
    })
    filteredCards.forEach(card => {
        card.classList.toggle('hidden');
    })
    
}