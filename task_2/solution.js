function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная сумма для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

    let shippingSum;// создайте переменную shippingSum

if (productsSum==0 || productsSum>=freeShippingMinSum) {
    shippingSum=0; 

}else{
    shippingSum=shippingPrice;
}
    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная сумма для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    let discountSum; // создайте переменную discountSum

    if (productsSum>=discountMinSum) {
        discountSum=discountPart*(productsSum/100);
        console.log(discountSum);
    }else{
        discountSum=0; 
    }
    
   

    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    let totalSum=productsSum;
  totalSum=productsSum-discountSum;
  console.log(totalSum);
   
    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
   totalSum=totalSum+shippingSum;
   console.log(totalSum);

    let freeShipping;// создайте переменную freeShipping
    
    freeShipping=shippingSum==0;
    console.log(freeShipping);

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
