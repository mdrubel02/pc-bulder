console.log('hello i am connenting');
document.getElementById('eightGB').addEventListener('click', function(){
    console.log('clicked');
    const memoryCost=document.getElementById('memory-cost');
    memoryCost.innerText=300;
})