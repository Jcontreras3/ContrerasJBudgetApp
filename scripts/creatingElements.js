let budgetInject = document.getElementById("budgetInject");
let itemInject = document.getElementById("itemInject");
let priceInject = document.getElementById("priceInject");
let resInject = document.getElementById("resInject");
let clearInject = document.getElementById("clearInject");
let bCrd;
let iCrd;
let pCrd;
let bACrd;
function budgetElement(budval) {
  bCrd = document.createElement("div");
  bCrd.className = "card budgetCardColor";

  let bCrdB = document.createElement("div");
  bCrdB.className = "card-body";

  let crdBodyTxt = document.createElement("p");
  crdBodyTxt.textContent = "Budget: $" + budval;
  crdBodyTxt.className = "budgetTxt";

  let trashBtn1 = document.createElement("button");
  trashBtn1.className = "btn btn-link removeBtn";
  trashBtn1.textContent = "remove";

  trashBtn1.addEventListener("click", () => {
    budgetInject.removeChild(bCrd);
  });

  bCrd.appendChild(trashBtn1);
  bCrd.appendChild(bCrdB);
  bCrdB.appendChild(crdBodyTxt);
  budgetInject.appendChild(bCrd);
}
function itemElement(itemVal) {
  iCrd = document.createElement("div");
  iCrd.className = "card itemCardColor";

  let iCrdB = document.createElement("div");
  iCrdB.className = "card-body";

  let icrdBodyTxt = document.createElement("p");
  icrdBodyTxt.textContent = "Item:" + itemVal;
  icrdBodyTxt.className = "budgetTxt";
  let trashBtn2 = document.createElement("button");
  trashBtn2.className = "btn btn-link removeBtn";
  trashBtn2.textContent = "remove";

  trashBtn2.addEventListener("click", () => {
    itemInject.removeChild(iCrd);
  });
  iCrd.appendChild(trashBtn2);
  iCrd.appendChild(iCrdB);
  iCrdB.appendChild(icrdBodyTxt);
  itemInject.appendChild(iCrd);
}
function priceElement(priceVal) {
  pCrd = document.createElement("div");
  pCrd.className = "card priceCardColor";

  let pCrdB = document.createElement("div");
  pCrdB.className = "card-body";

  let pcrdBodyTxt = document.createElement("p");
  pcrdBodyTxt.textContent = "Price: $" + priceVal;
  pcrdBodyTxt.className = "budgetTxt";

  let trashBtn3 = document.createElement("button");
  trashBtn3.className = "btn btn-link removeBtn";
  trashBtn3.textContent = "remove";

  trashBtn3.addEventListener("click", () => {
    priceInject.removeChild(pCrd);
  });
  pCrd.appendChild(trashBtn3);
  pCrd.appendChild(pCrdB);
  pCrdB.appendChild(pcrdBodyTxt);
  priceInject.appendChild(pCrd);
}
function balanceElement(balanceVal) {
  bACrd = document.createElement("div");
  bACrd.className = "card priceCardColor";

  let bACrdB = document.createElement("div");
  bACrdB.className = "card-body";

  let bAcrdBodyTxt = document.createElement("p");
  bAcrdBodyTxt.textContent = "Total: $" + balanceVal;
  bAcrdBodyTxt.className = "budgetTxt";

  let trashBtn4 = document.createElement("button");
  trashBtn4.className = "btn btn-link removeBtn";
  trashBtn4.textContent = "remove";

  trashBtn4.addEventListener("click", () => {
    resInject.removeChild(bACrd);
  });
  bACrd.appendChild(trashBtn4);
  bACrd.appendChild(bACrdB);
  bACrdB.appendChild(bAcrdBodyTxt);
  resInject.appendChild(bACrd);
}

function clearingElement() {
  let clearBtn = document.createElement("button");
  clearBtn.className = "btn btn-danger";
  clearBtn.textContent = "Clear All";
  clearInject.appendChild(clearBtn);

  clearBtn.addEventListener("click", () => {
    budgetInject.removeChild(bCrd);
    itemInject.removeChild(iCrd);
    priceInject.removeChild(pCrd);
    resInject.removeChild(bACrd);
  });
}

export {
  budgetElement,
  itemElement,
  priceElement,
  balanceElement,
  clearingElement,
};
