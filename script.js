let productInput, productCount, productNewCount, productTotal, phoneCount, caseCount, totalPrice, tax, grandTotal;
function handleProductChange(product, isIncrease) {
    productCount = getInputValue(product);

    if (isIncrease == true)
        productNewCount = productCount + 1;
    if (isIncrease == false && productCount > 0)
        productNewCount = productCount - 1;

    document.getElementById(product + "-count").value = productNewCount;

    if (product == 'phone')
        productTotal = productNewCount * 1219;
    if (product == 'case')
        productTotal = productNewCount * 59;

    document.getElementById(product + "-total").innerText = '$' + productTotal;
    calculateTotal();
}

function getInputValue(product) {
    productInput = document.getElementById(product + "-count");
    productCount = parseInt(productInput.value);
    return productCount;
}

function calculateTotal() {
    phoneCount = getInputValue('phone');
    caseCount = getInputValue('case');

    totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById("total-price").innerText = '$' + totalPrice;

    tax = Math.round(totalPrice * 0.15);
    document.getElementById("tax-total").innerText = '$' + tax;

    grandTotal = totalPrice + tax;
    document.getElementById("grand-total").innerText = '$' + grandTotal;
}
