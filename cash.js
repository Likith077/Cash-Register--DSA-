let price = 19.5;
let cid = [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
];

const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
};

function checkCashRegister(price, cash, cid) {
    let changeDue = Math.round((cash - price) * 100) / 100;
    let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
    totalCid = Math.round(totalCid * 100) / 100;

    if (totalCid < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if (totalCid === changeDue) {
        return { status: "CLOSED", change: cid };
    }

    let change = [];
    for (let i = cid.length - 1; i >= 0; i--) {
        const coinName = cid[i][0];
        let coinTotal = cid[i][1];
        const coinValue = currencyUnit[coinName];
        let coinAmount = 0;

        while (changeDue >= coinValue && coinTotal > 0) {
            changeDue = Math.round((changeDue - coinValue) * 100) / 100;
            coinTotal = Math.round((coinTotal - coinValue) * 100) / 100;
            coinAmount += coinValue;
        }

        if (coinAmount > 0) {
            change.push([coinName, coinAmount]);
        }
    }

    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: change };
}

document.getElementById("purchase-btn").addEventListener("click", function() {
    const cash = parseFloat(document.getElementById("cash").value);
    const changeDue = document.getElementById("change-due");

    if (cash < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }

    if (cash === price) {
        changeDue.textContent = "No change due - customer paid with exact cash";
        return;
    }

    const result = checkCashRegister(price, cash, cid);

    if (result.status === "INSUFFICIENT_FUNDS") {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    } else if (result.status === "CLOSED") {
        changeDue.textContent = `Status: CLOSED ${result.change.filter(item => item[1] > 0).map(item => `${item[0]}: $${item[1].toFixed(2)}`).join(" ")}`;
    } else {
        changeDue.textContent = `Status: OPEN ${result.change.map(item => `${item[0]}: $${item[1].toFixed(2)}`).join(" ")}`;
    }
});