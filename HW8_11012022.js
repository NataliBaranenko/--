/*####Задача 8

Написать код который посчитает сумму всех четных элементов в массиве, в суммировании уча́ствуют только элементы больше 3.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов. */

// ОТВЕТ
var arr = [1,2,3,4];
var result = 0
for (let i= 0; i< arr.length; i++){
if (arr[i] %2 ==0 && arr[i]>=3){
result += arr[i]
    }
}
console.log (result)