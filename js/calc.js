const productQuantity = document.querySelector('#products');
const orders = document.querySelector('#orders');
const inputsArr = new Array(productQuantity, orders);

const packageSelect = document.querySelector('#package');

const summaryPackage = document.querySelector('[data-id="package"]');
const selectedPrice = summaryPackage.querySelector('.item__price');
const selectedText = summaryPackage.querySelector('.item__calc');

const productsItem = document.querySelector('[data-id="products"]');
const productsCalc = productsItem.querySelector('.item__calc');
const productsPrice = productsItem.querySelector('.item__price');

const ordersItem = document.querySelector('[data-id="orders"]');
const ordersCalc = ordersItem.querySelector('.item__calc');
const ordersPrice = ordersItem.querySelector('.item__price');

const accountingItem = document.querySelector('[data-id="accounting"]');
const accountingPrice = accountingItem.querySelector('.item__price');

const terminalItem = document.querySelector('[data-id="terminal"]');
const terminalPrice = terminalItem.querySelector('.item__price');

const totalItem = document.querySelector('#total-price');
const totalPrice = totalItem.querySelector('.summary__total-price');

const accountingLabel = document.querySelector('#accounting');
const terminalLabel = document.querySelector('#terminal');
const labelsArr = new Array(accountingLabel, terminalLabel);

inputsArr.forEach((input) => {
  input.addEventListener('input', (e) => {
    if (e.target.id === 'products') {
      productsCalc.textContent = `${e.target.value} * $0.5`;
      productsPrice.textContent = `$${e.target.value * 0.5}`;
      updateTotal();
    }
    if (e.target.id === 'orders') {
      ordersCalc.textContent = `${e.target.value} * $0.25`;
      ordersPrice.textContent = `$${e.target.value * 0.25}`;
      updateTotal();
    }
  });
});

packageSelect.addEventListener('change', (e) => {
  const packagePrices = { basic: 0, professional: 25, premium: 60 };
  selectedText.textContent = e.target.value;
  if (e.target.value === 'Basic') {
    selectedPrice.textContent = `$${packagePrices.basic}`;
    updateTotal();
  }
  if (e.target.value === 'Professional') {
    selectedPrice.textContent = `$${packagePrices.professional}`;
    updateTotal();
  }
  if (e.target.value === 'Premium') {
    selectedPrice.textContent = `$${packagePrices.premium}`;
    updateTotal();
  }
});

labelsArr.forEach((label) => {
  label.addEventListener('click', (e) => {
    const labelsPrice = { accounting: 35, terminal: 5 };
    if (e.currentTarget.id == 'accounting') {
      accountingItem.classList.toggle('hidden');
      accountingPrice.textContent = `$${labelsPrice.accounting}`;
      updateTotal();
    }
    if (e.currentTarget.id == 'terminal') {
      terminalItem.classList.toggle('hidden');
      terminalPrice.textContent = `$${labelsPrice.terminal}`;
      updateTotal();
    }
  });
});

function updateTotal() {
  const summaryList = document.querySelector('.calc__summary-list');
  const [...summaryFields] = summaryList.querySelectorAll('.item__price');
  const pricesArr = [];
  summaryFields.forEach((item) => {
    pricesArr.push(Number(item.outerText.substring(1)));
  });

  if(!accountingLabel.checked) {
    pricesArr.splice(3, 1);
  };
  
  if(!terminalLabel.checked) {
    pricesArr.pop();
  };

  let score = pricesArr.reduce((a, b) => {
    return a + b;
  }, 0);
  totalPrice.textContent = `$${score}`;
}
updateTotal();
