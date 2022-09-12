// SF Задание 2.
// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1. Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
function numberAnalyze(inputNumber = 0) {
    let flag = false;
    for (let i = 2; i <= inputNumber; i++) {
        if (inputNumber > 1000) {
            flag = 'данные неверны';
        } else if (i * i <= inputNumber && flag != true) {
            if (inputNumber % i === 0) {
                flag = true;
            }
        }
    }
    if (flag === true) {
        console.log(`Число сложное - ${inputNumber}`);
    } else if (flag === false)  {
        console.log(`Число простое - ${inputNumber}`);
    }
}
numberAnalyze();
