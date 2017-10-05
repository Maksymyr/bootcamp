/*
Задача №6
Напишите программу, которая считывает символы пока не встретится точка (знак вопроса , знак восклицания).
Выводить количество предложений, количество слов, количество пробелов.
*/

var a = prompt("Введите текст").trim();

var sent = a.split('.').length - 1;
var sent2 = a.split('?').length - 1;
var sent3 = a.split('!').length - 1;

var sentence = sent + sent2+ sent3;

var space = a.split(' ');

var spaces = space.length - 1;

var words = space.length;


alert("sentences = " + sentence + " spaces = " + spaces + " words = " + words);
