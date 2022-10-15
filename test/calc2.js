function updatePrice() {
    let slct = document.getElementsByName("prodType");
    let selectNow = slct[0];

    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = (selectNow.value === "2" ? "table-row" : "none");

    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (selectNow.value === "3" ? "table-row" : "none");

    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(selectNow.value) - 1;
    price = prices.prodTypes[priceIndex];
    let prodPrice = document.getElementById("result");

    let prodOp = document.getElementsByName("prodOptions");
    let op = 0;
    if (selectNow.value === "2") {
        prodOp.forEach(function (radio) {
            if (radio.checked) {
                op = prices.prodOptions[radio.value];
            }
        });
    } else {
        prodOp.forEach(function(radio){
            if (radio.checked) {
                radio.checked = false;
            }
        });
    }

    let prodPr = document.getElementsByName("prodProperties");
    let pr = 0;
    if (selectNow.value === "3") {
        prodPr.forEach(function (checkbox) {
            if (checkbox.checked) {
                pr += prices.prodProperties[checkbox.value];
            }
        });
    } else {
        prodPr.forEach(function (checkbox) {
            if (checkbox.checked) {
                checkbox.checked = false;
            }
        });
    }

    let count = document.getElementsByName("prodCount");
    let regexp = /\D/;
    if (regexp.test(String(count[0].value))) {
        prodPrice.innerHTML = "Error";
    } else {
        prodPrice.innerHTML = (price + pr + op) * count[0].value + " рыбов";
    }
}


function getPrices() {
    return {
        prodOptions: {
            op1: 10,
            op2: 20
        },
        prodProperties: {
            pr1: 1,
            pr2: 2,
            pr3: 3
        },
        prodTypes: [300, 200, 100]
    };
}


window.addEventListener("DOMContentLoaded", function (event) {

    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";

    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = "none";

    let s = document.getElementsByName("prodType");
    let select = s[0];

    select.addEventListener("change", updatePrice);

    let prodOp = document.getElementsByName("prodOptions");
    prodOp.forEach(function (radio) {
        radio.addEventListener("change", updatePrice);
    });

    let prodPr = document.getElementsByName("prodProperties");
    prodPr.forEach(function (checkbox) {
        checkbox.addEventListener("change", updatePrice);
    });

    let count = document.getElementsByName("prodCount");
    count[0].addEventListener("input", updatePrice);
});