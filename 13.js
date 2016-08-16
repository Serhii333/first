Реализовать функцию sort(list), которая отсортирует список по 2-м параметрам. Все объекты с признаком active равным true должны идти раньше тех, объектов, у которых это свойство равняется false. При этом объекты должны быть отсортированы в убывающем порядке по свойству 'value'. Функция изменяет оригинальный массив, а не создает новый. Пример:

var items = [{
    active: false,
    value: 3
}, {
    active: false,
    value: 1
}, {
    active: true,
    value: 2
}, {
    active: false,
    value: 2
}, {
    active: true,
    value: 1
}];

sort(items);
console.log(items);

/*
 [{
 active: true,
 value: 1
 }, {
 active: true,
 value: 2
 }, {
 active: false,
 value: 1
 }, {
 active: false,
 value: 2
 }, {
 active: false,
 value: 3
 }]
 */


function sort(items) {
    var trueItems = items.filter(function (el) {
        return el.active == true;
    }).sort(function (a, b) {
        return a.value - b.value;
    });

    var falseItems = items.filter(function (el) {
        return el.active == false;
    }).sort(function (a, b) {
        return a.value - b.value;
    });



    this.items = trueItems.concat(falseItems);
}