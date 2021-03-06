Функция, в общем смысле, это "подпрограмма", которую можно вызывать из внешнего (или внутреннего, в случае рекурсии) по отношению к функции кода.

Функции позволяют избежать избыточности кода, тк функцию создают один раз, а вызывать ее на выполнение можно многократно из разных точек программы.

Часто используемые функции можно объединять в библиотеки.

### В JavaScript функции являются объектами - Function

Функция состоит из последовательности инструкций, называемой телом функции.
При вызове функции эти интсрукции начинают выполнятся.
Значения могут быть переданы в функцию, а функция может возвращать результат своей работы.

## Функции могут быть:
1. именоваными (Function Declaration).

Именованные функции доступны везде в области видимости т.е к ней можно обращаться и до ее создания и после, тк они создаются интерпретатором до выполнения кода.
        
        // Объявление функции:
        function doSomething(a, b, operator = "+") {
            let res = 0;
            switch (operator){
                case "+":
                    res = a + b;
                    break;
                case "-":
                    res = a - b;
                    break;
                case "*":
                    res = a * b;
                    break;
                case "/":
                    if (b === 0) break;
                    res = a / b;
                    break;
                default:
                    res = false;
            }
            return res; // Функция возвращает результат
        }

        // Вызов функции, передача аргументов
        let result = doSomething(3, 6);
        console.log(result); // 9

        result = doSomething(3, 6, "-");
        console.log(result); // -3

   
2. анонимными (Function Expression)

Могут быть либо присвоены переменной, либо быть переданы аргументом в другую функцию.
Такие функции можно вызвать только после объявления.

        // Объявление функции
        let multi = function (a, b){
            return a + b; // Функция возвращает результат
        }

        // Вызов функции, передача аргументов
        let res = multi(5, 100);
        console.log(res); // 105

3. анонимными-стрелочными (Function Expression)

Анонимные функции, не имеющие arguments и this.

        // Если функция принимает 0 или 2 и более аргументов использование круглых скобок обязательно
        // Если в теле функции одна инструкция, функция автоматически возвращает результат, return указан неявно
        let sum = (a, b) => a + b;
        console.log(sum(45, 11)); // 56
        
        // Если функция принимает 1 аргумент круглые скобки можно опустить
        let lessZero = x => x < 0;
        console.log(lessZero(-12));
        
        // Если в теле функции более одной инструкции, тело функции необходимо заключить в фигурные скобки,
        // return нужно указывать явно
        let div = (a, b) => {
            if (b === 0) return false;
            return a / b;
        };
        console.log(div(1241, 0));
             
## Параметры функции
Параметры указываются при объявлении функции и позволяют передать в функцию данные при ее вызове.

Нельзя указать тип данных передаваемых параметров. 

Можно задать параметры по умолчанию, такие необязательны параметры должны указываться после обязательных.

Переменное количество аргументов (...) должно идти после всех остальных параметров.

Объекты (ссылочные типы) передаются в функцию по ссылке, примитивы по значению.

        // При вызове в функцию можно будет передать 2 аргумента
        function multi(a, b) {
            return a * b;
        }
        
        // при вызове функции в переменную 'a' скопируется 5, в переменную 'b' 100
        let res = multi(5, 100);

        // при вызове функции в переменную 'a' скопируется 8, в переменную 'b' 31
        res = multi(8, 31);

        function getGreetingStr(message, name="Гость") {
            return `${message}, ${name.toUpperCase()}!`;
        }
        
        // "Добро пожаловать" скопируется в 'message', "Павел" - в 'name'
        let str = getGreetingStr("Добро пожаловать", "Павел");
        console.log(str); // Добро пожаловать, ПАВЕЛ!
        
        // "Здравствуйте" скопируется в 'message', значение 'name' не передано и будет равно "Гость"
        str = getGreetingStr("Здравствуйте");
        console.log(str); // Здравствуйте, ГОСТЬ!

        // аргументы, переданные при вызове функции будут собраны в массив nums
        function getSum(...nums) {
            let sum = 0;
            for (let num of nums) sum += num;
            return sum;
        }
        
        let sum = getSum(3, 7, 90, 2);
        console.log(sum); // 102
        sum = getSum(6, 111, -98);
        console.log(sum); // 19    

## return

Позволяет прервать работу функции и вернуть результат работы функции. Позволяет вернуть только одно значение. По умолчанию функции возвращают undefined.

        // return используется неявно, чтобы вернуть результат
        let lessZero = x => x < 0;
        
        function getAnswer(exp){
            // используется, чтобы прервать работу функции
            if (lessZero(exp)) return;
            // используется, чтобы прервать работу функции и вернуть результат
            if (exp < 5) return "Вы приняты на должность стажера";
            // используется, чтобы вернуть результат
            return "Вы приняты на должность разработчика";
        }
        
        let answer = getAnswer(7);
        console.log(answer); // "Вы приняты на должность разработчика"
        
        answer = getAnswer(2);
        console.log(answer); // "Вы приняты на должность стажера"    

Функциям доступны переменные объявленные вне функции, но их использование необходимо свести к минимуму!
