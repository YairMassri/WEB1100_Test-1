const bitNum = document.querySelector(".bit");
const bitText = document.querySelector(".bittd");
const th = document.querySelector("th");
const td = document.querySelectorAll("td");
const newPrice = document.querySelector(".newprice");
const table = document.querySelector("tr");
const refresh = document.querySelector("refresh")
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")


class Bitcoin {
    constructor(td) {
        this.td = td;
        this.getPrices()


    }
    setPrices(td, prices) {
        console.log([2].rate)
        td = [2].rate;
    

    }

getPrices() {
    let prices
    $.ajax({
        url: 'https://bitpay.com/api/rates',
        dataTypa: 'json',
        success: (data) => {
            this.prices = data
            this.setPrices(this.td, this.prices)

        },
        error: (error) => {
            console.log("There was an error getting from the API")
        }
    })
}
bitAmount() {

    const amount = window.prompt("How much Bitcoin do you have?");
    console.log(typeof amount);
    if (amount == "" || amount == null) {
        return "nada";
    } else {
        // bitText.remove();
        bitText.innerHTML += `${amount}`;
    }
}
addPrice() {

    const nuevo = window.prompt("What is the currency you are looking for?");
    console.log(typeof nuevo);
    if (nuevo == "" || nuevo == null) {
        return "nada";
    } else {
        line1.innerHTML += `<th>BTC/${nuevo}</th>`;
        line2.innerHTML += '<td>  </td>';
    }
}
Refresh() {
    this.getPrices()
}

}


const bitcoin = new Bitcoin()

bitNum.addEventListener("click", e =>  {
    bitAmount()
})
newPrice.addEventListener("click", e => {
    addPrice()
})
refresh.addEventListener("click", e => {
    Refresh()
})