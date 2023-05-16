function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    // product - объект вида {id: id, title: title, count: count, price: price}
    // например, {id: 1, title: 'Пицца', count: 5, price: '500.00'}, где
    // id - идентификатор
    // title - наименование
    // price - цена
    // count - количество

    // сформируйте строку itemCountText вида:
    // количество × цена ₽ = стоимость ₽
    // например,
    // 5 × 500.00 ₽ = 2500 ₽
    let itemCountText ="";
    itemCountText = itemCountText + product.count;
    itemCountText = itemCountText + ' × ';// 1. Создайте переменную itemCountText, равную пустой строке
    itemCountText = itemCountText + product.price;// 2. Присвойте переменной itemCountText результат склеивания itemCountText и количества
    itemCountText = itemCountText + ' ₽ = ';
    let sum = product.count * product.price; // 6. Создайте переменную sum и присвойте ей значение произведения количества и цены
    itemCountText = itemCountText + sum;// 7. Присвойте переменной itemCountText результат склеивания itemCountText и sum
    itemCountText = itemCountText + ' ₽';
  
    
    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
