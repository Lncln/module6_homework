// SF Задание 1. 
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
function getNumberOfElements() {
    let arr = [1, 3, 4, 5, 54, 233, null, NaN, 'asdf', true, Infinity, undefined];
    let counterOther = 0;
    let counterEven = 0;
    let counterOdd = 0;
    for (elem of arr) {
        if ((typeof elem !== 'number') || isNaN(elem) || elem == null || elem == Infinity || elem == -Infinity) {
            counterOther++;
        } else if (elem % 2 === 0) {
            counterEven++;
        } else if (elem % 2 !== 0) {
            counterOdd++;
        }
    }
    console.log(`Количество четных = ${counterEven}, количество нечетных = ${counterOdd}, количество остальных элементов = ${counterOther}`);
};
getNumberOfElements();
// В циклах я делал для каждого типа элемента свой массив.