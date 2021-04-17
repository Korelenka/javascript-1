'use strict';

// написать функцию, которая принимает
// на вход переменное количество аргументов (слов),
// создает и возвращает массив, состоящий из уникальных слов

// написать функцию, которая принимает на вход предложение
// и возвращает самое длинное слово в предложении

function getUniqueWords(...words) {
    let uniqueWordsArr = [];

    for (let word of words) {
        let isWordUnique = !uniqueWordsArr.includes(word);
        if (isWordUnique) {
            uniqueWordsArr.push(word);
        }
    }

    return uniqueWordsArr;
}

console.log(getUniqueWords("one", "two", "one"));


let getLongestWord = sentence => {
    let currentLongestWord = "";
    let sentenceArr = sentence.split(" ");

    for (let word of sentenceArr) {
        if (word.length > currentLongestWord.length) {
            currentLongestWord = word;
        }
    }

    return `${currentLongestWord} (${currentLongestWord.length} letters)`;
}
let sentence = "A fast brown fox jumped over a lazy dog";
console.log(getLongestWord(sentence));

/*
3. Написать функцию проверки на спам checkSpam(text, ...words)
Функция принимает на вход текст и ...спам - слова
(переменное количество аргументов).
Определить по 5ти бальной шкале, как часто в тексте встречается спам.
    Результат вернуть из функции.*/

let text = "Lorem error ipsum dolor sit amet consectetur adipisicing " +
    "elit Aut corporis dolor delectus ducimus dolor error iusto laudantium officia" +
    "officiis vero tumble voluptatibus Aliquam ea ipsa quasi dolor sapiente error ullam " +
    "A dolore dolorum minima provident error  voluptas Aliquam" +
    "aut fugiat hic mumble error tumble provident ratione sed";

let checkSpam = (text, ...spamWords) => {
    let frequency = [];
    frequency.length = spamWords.length;
    let wordsArr = text.split(" ");

    for (
        let spamWordIndex = 0;
        spamWordIndex < spamWords.length;
        spamWordIndex++
    ) {
        for (let textWord of wordsArr) {
            if (textWord === spamWords[spamWordIndex]) {
                if (frequency[spamWordIndex]) {
                    frequency[spamWordIndex]++;
                } else {
                    frequency[spamWordIndex] = 1;
                }

            }
        }
    }

    return frequency;
}

console.log(checkSpam(text, "tumble", "mumble"));






