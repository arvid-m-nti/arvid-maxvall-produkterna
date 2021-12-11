//Ta bort produkt från varukorgen (fungerar halft)
let removeCartItem = document.getElementsByClassName('remove')
console.log(removeCartItem)
for (let i = 0; i < removeCartItem.length; i++){
    let button = removeCartItem[i]
    button.addEventListener('click', function(event){
        console.log('clicked')
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    })
}
//Uppdatera priset när man ändrar varukorgen (fungerar ej)
function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerHTML)
        console.log(price)
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('total-price')[0]
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-row-price')[0].innerHTML = total
}
