let main_str = "Я изучаю JavaScript";
//first task
console.log(main_str[2], main_str.at(0), main_str[main_str.length - 1]);
// second task
let new_str = main_str.replace("ю", "л");
console.log(new_str);
new_str = main_str.split("JavaScript").join("Frontend");
console.log(new_str);
//third task
let new_mas = ["cat", "dog", "parrot", "horse"];
hide_elem = new_mas.indexOf("parrot");
console.log(hide_elem);
//task 4
let new_mas_task4_first = ["cat", "dog", "parrot", "horse", "fish", "chicken", "lion"];
let new_mas_task4_second = new_mas_task4_first.concat();
let new_mas_task4_third = new_mas_task4_first.concat();
new_mas_task4_first.splice(4,1);
console.log(new_mas_task4_first);
new_mas_task4_second.shift();
console.log(new_mas_task4_second);
new_mas_task4_third.pop();
new_mas_task4_third.pop();
console.log(new_mas_task4_third);
//task5
let new_task5 = [31, 10, 'chicken', 9, 'fish', 10];
let result_1 = new_task5.filter(function(item, index, array){
    return typeof item === "string"
});
console.log(result_1);
let result_2 = new_task5.filter(item => item === 10);
console.log(result_2);