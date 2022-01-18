/* #### Задача 9

Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов. */

//ОТВЕТ
var arr = [1,2,3,4,5,6];
for (let a = 0; a< arr.length; a++){
    for (let b = 0; b< arr.length + 1 -a; b++)
        if (arr[b]> arr[b-1] ) {
            let sort = arr[b]
            arr[b] = arr[b-1]
            arr[b-1] = sort
    }
} 
console.log (arr)