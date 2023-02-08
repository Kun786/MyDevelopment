//********** Leet code problem no 2 from Programing-Skills-1-certification **********/
//********** Problem Title: 1491. Average Salary Excluding the Minimum and Maximum Salary **********/
//********** Problem Explanation: You are given an array of unique integers salary where salary[i] is the salary of the ith employee.Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted. **********/



// There are three ways to to get maximum and minimum value form an Array

// Method 1 using sorting

let salary = [1000,2000,3000];
salary.sort((a, b) => a - b); //sort array in ascending order
let maximum1 = salary.pop(); // remove the last (maximum) value
let minimum2 = salary.shift(); // remove the first (maxium) value

// console.log(maximum1,minimum2);

//Method 2 using Math fucntion
let salary2 = [30000, 50000, 20000, 10000, 40000];
let min = Math.min(...salary2); //spreading all the values and gets the minimum value
let max = Math.max(...salary2); //spreading all the values and gets the maximum value

// console.log(min,max);

//Method 3 using core javascript

let salary3 = [30000, 50000, 20000, 10000, 40000];
//now we need two flags lets say both will contain the starting value
let maximum = salary3[0];
let minimum = salary3[0]

//logic: abb hoo ga kaya lets sya hum max say shuru kartay hai jo iss waqt starting point pay khara hai
//abb wo starting point ke value ley ga aur har next point pae jae ga aur dekhay ga kaya next point ke 
//value starting poin sat bari hai if yes than replace it aur uss step ke value utha ley ga
//issi tarah wo karta rahay ga aur max value ley aye ga chalo lets code vice versa for minimum

for (let i = 0; i < salary3.length; i++) {
    if (salary3[i] > maximum) { maximum = salary3[i] }
    if (salary3[i] < minimum) { minimum = salary3[i] }
}

// console.log(maximum,minimum);

// There are three ways to to get maximum and minimum value form an Array

//Once we found out the maximum and minimum we can easily calculate the average lets code!!!
let averageSalary = 0;
let n = 0;
salary.forEach(elements => {
    averageSalary = averageSalary + elements;
    n++;
})
let result = averageSalary / n;
console.log(result);
//Once we found out the maximum and minimum we can easily calculate the average lets code!!!
