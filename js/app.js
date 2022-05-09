const allBtnFilter = document.getElementById("btnFilter");
allBtnFilter.addEventListener("click", getCategory);

function getCategory(e) {
    e.preventDefault();
    const category = e.target.dataset.filter;

    if (!category) {
        return
    }
const cardList = Array.from(document.querySelectorAll('[data-item]'));
// filter
// for
// map


}

