console.log('hello i am connenting');
document.getElementById('eightGB').addEventListener('click', function(){
    console.log('clicked');
    const memoryCost=document.getElementById('memory-cost');
    memoryCost.innerText=300;
    const bestPrice=document.getElementById('best-price').innerText;
    // console.log(bestPrice.innerText);
    const memoryPrice=document.getElementById('memory-cost').innerText;
    const storagePrice=document.getElementById('storage-cost').innerText;
    const deliveryPrice=document.getElementById('delivery-cost').innerText;

    // totalPrice addition 
    const totalPrice=parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice)
    console.log(totalPrice);

    const grantTotal=document.getElementById('total-price').innerText=totalPrice;



})