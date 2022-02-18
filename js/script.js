'use strict';


let slider = document.querySelector('.slider');
let selector = document.querySelector('.selector');
let selectValue = document.querySelector('.selectValue');
let progressBar = document.querySelector('.progressBar');
let pageViews = document.querySelector('.page-views');
let checkbox = document.querySelector('.checkbox');

let pricePerMonth = document.querySelector('.price-per-month--value');

let monthlyPrices = {'0':'$8.00','20':'$10.00', '40':'$12.00', '60':'$16.00', '80':'$24.00', '100': '$36.00'}
// let yearlyPrices = {'0':'$24.00','20':'$30.00', '40':'$36.00', '60':'$48.00', '80':'$72.00', '100': '$108.00'}
let yearlyPrices = {'0':'$2.00','20':'$2.50', '40':'$3.00', '60':'$4.00', '80':'$6.00', '100': '$9.00'}


checkbox.oninput = function() {
    // selectValue.innerHTML = this.value;
    selector.style.left = slider.value + '%';
    progressBar.style.width = slider.value + '%';
    let finalPricesArr = [];
    if(checkbox.checked) finalPricesArr = yearlyPrices;
    if(!checkbox.checked) finalPricesArr = monthlyPrices;

    if(slider.value === '0'){
        pageViews.innerHTML = '10K PAGEVIEWS';
        pricePerMonth.innerHTML = finalPricesArr[slider.value];
    } else if(slider.value === '20') {
        pageViews.innerHTML = '25K PAGEVIEWS';
        pricePerMonth.innerHTML = finalPricesArr[slider.value];
    } else if(slider.value === '40') {
        pageViews.innerHTML = '50K PAGEVIEWS';
        pricePerMonth.innerHTML = finalPricesArr[slider.value];
    } else if(slider.value === '60') {
        pageViews.innerHTML = '100K PAGEVIEWS';
        pricePerMonth.innerHTML = finalPricesArr[slider.value];
    } else if(slider.value === '80') {
        pageViews.innerHTML = '500K PAGEVIEWS';
        pricePerMonth.innerHTML = finalPricesArr[slider.value];
    } else if(slider.value === '100') {
        pageViews.innerHTML = '1M PAGEVIEWS';
        pricePerMonth.innerHTML = finalPricesArr[slider.value];
    }
}



slider.oninput = function() {
    // selectValue.innerHTML = this.value;
    selector.style.left = this.value + '%';
    progressBar.style.width = this.value + '%';
    let finalPricesArr = [];
    if(checkbox.checked) finalPricesArr = yearlyPrices;
    if(!checkbox.checked) finalPricesArr = monthlyPrices;

    if(this.value === '0'){
        pageViews.innerHTML = '10K PAGEVIEWS';
        pricePerMonth.innerHTML = finalPricesArr[this.value];
    } else if(this.value === '20') {
        pageViews.innerHTML = '25K PAGEVIEWS';
        pricePerMonth.innerHTML = finalPricesArr[this.value];
    } else if(this.value === '40') {
        pageViews.innerHTML = '50K PAGEVIEWS';
        pricePerMonth.innerHTML = finalPricesArr[this.value];
    } else if(this.value === '60') {
        pageViews.innerHTML = '100K PAGEVIEWS';
        pricePerMonth.innerHTML = finalPricesArr[this.value];
    } else if(this.value === '80') {
        pageViews.innerHTML = '500K PAGEVIEWS';
        pricePerMonth.innerHTML = finalPricesArr[this.value];
    } else if(this.value === '100') {
        pageViews.innerHTML = '1M PAGEVIEWS';
        pricePerMonth.innerHTML = finalPricesArr[this.value];
    }
}
