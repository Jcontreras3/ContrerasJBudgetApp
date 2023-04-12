import { itemElement, budgetElement, priceElement, balanceElement, clearingElement } from "./creatingElements.js";

let limitValue = document.getElementById('limitValue');
let itemValue = document.getElementById('itemValue');
let priceValue = document.getElementById('priceValue')
let limitBtn = document.getElementById('limitBtn');
let itemBtn = document.getElementById('itemBtn');
let priceBtn = document.getElementById('priceBtn');
let resBtn = document.getElementById('resBtn');
clearingElement();
limitBtn.addEventListener('click', () => {
    budgetElement(limitValue.value);
})
itemBtn.addEventListener('click', () => {
    itemElement(itemValue.value);
})
priceBtn.addEventListener('click', () => {
    priceElement(priceValue.value);
})

resBtn.addEventListener('click', () => {
    let addingNum = 0;
    addingNum = parseInt(limitValue.value) - parseInt(priceValue.value);
    balanceElement(addingNum);

})

