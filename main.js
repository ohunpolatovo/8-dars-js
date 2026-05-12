// 1. Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv
// qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing.
// (map, filter)
// 5 baho - (85 - 100)
// 4 baho - (70 - 85)
// 3 baho – (60 - 70)   
// const students = [
// { name: "Quincy", percent: 96, grade: 5 },
// { name: "Jason", percent: 84, grade: 4 },
// { name: "Alexis", percent: 100, grade: 5 },
// { name: "Sam", percent: 65, grade: 3 },
// { name: "Katie", percent: 90, grade: 5 },
// { name: "Anna", percent: 75, grade: 4 },
// ];
// Input: getNamesByGrade(students, 5)
// Output: ['Quincy', 'Alexis', 'Katie']
// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// function getNamesByGrade(students, grade) {
//   return students
//     .map(student => {
//       let studentGrade;
//       if (student.percent >= 85 && student.percent <= 100) {
//         studentGrade = 5;
//       } else if (student.percent >= 70 && student.percent < 85) {
//         studentGrade = 4;
//       } else if (student.percent >= 60 && student.percent < 70) {
//         studentGrade = 3;
//       }
    
//       return { ...student, grade: studentGrade };
//     })
//     .filter(student => student.grade === grade) 
//     .map(student => student.name); 
// }

// console.log(getNamesByGrade(students, 5)); 
// console.log(getNamesByGrade(students, 4)); 
//=======================================================================
// 2. Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt
// yarating. (reduce)
// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const animalsCount = animals.reduce((acc, animal) => {
//     if (acc[animal]) {
//         acc[animal]++;
//     } 
//     else {
//         acc[animal] = 1;
//     }
//     return acc;
// }, {}); 

// console.log(animalsCount);
//===================================================================

// 3. Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil
// qiling. (map)
// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]
// let arr =[1,2,3,4,5]
// let newArr=arr.map(el=>el**2)
// console.log(newArr);
//============================================================
// 4. Massivdagi musbat sonlar yig’indisini hisoblang. (filter va
// reduce)
// Input: [ 1, -4, 12, 0, -3, 29, -150]
// let arr=[ 1, -4, 12, 0, -3, 29, -150];
// let sum=arr.filter(el=>{
//     if(el>0){
//         return el
//     }
// }).reduce((acc, el) => acc + el, 0);
// console.log(sum);

//===========================================================
// 5. Satrdagi so’zlarning bosh harflarini oling. (split, map,
// join)
// Input: 'George Raymond Richard Martin'
// Output: 'GRRM'
// let str='George Raymond Richard Martin'
// let newStr=str.split(" ").map(el=>el[0]).join("")
// console.log(newStr);
//==========================================================
// 6. Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini
// farqini toping. (sort).
// const people = [
//   {name: 'John', age: 13},
//   {name: 'Mark', age: 56},
//   {name: 'Rachel', age: 45},
//   {name: 'Nate', age: 67},
//   {name: 'Jeniffer', age: 65}
// ];
// people.sort((a, b) => a.age - b.age);
// const youngest = people[0].age;
// const oldest = people[people.length - 1].age;
// const ageDifference = oldest - youngest;

// console.log(`Eng yosh: ${youngest}, Eng qari: ${oldest}`);
// console.log(`Yoshlaridagi farq: ${ageDifference}`); 
//===================================================================
// 7. N ta elementdan iborat massiv berilgan.
// Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga
// oladigan massivlar hosil qilinsin. (filter)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenArr = arr.filter(el => el % 2 === 0);
// let oddArr = arr.filter(el => el % 2 !== 0);
// console.log("Juftlar:", evenArr); 
// console.log("Toqlar:", oddArr);  
//===================================================================
// 8. N ta elementdan iborat massiv berilgan. Massiv elementlari
// orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur
// tuzilsin. Faqat birinchi uchragani qoldirilsin. (reduce)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5];

// let uniqueArr = arr.reduce((acc, char) => {
//     if (!acc.includes(char)) {
//         acc.push(char);
//     }
//     return acc;
// }, []);

// console.log(uniqueArr); 



//====================================================================
// 9. Products massivini id, name, price, rating va discount
// bo'yicha sortlash; (sort)
//  let products = [
// {
// id: 6,
// name: "Smarthpone",
// price: 12000,
// rating: 4.5,
// discount: 20,
// },
// {
// id: 2,
// name: "Acer",
// price: 10000,
// rating: 4.3,
// discount: 10,
// },
// {
// id: 1,
// name: "Mac book",
// price: 17000,
// rating: 4.7,
// discount: 40,
// },
// {
// id: 4,
// name: "HP",
// price: 21000,
// rating: 4.1,
// discount: 30,
// },
// {
// id: 5,
// name: "Dell",
// price: 35000,
// rating: 4.9,
// discount: 30,
// },
// ];
// let sortedByid=products.sort((a,b) => a.id -b.id)
// console.log(sortedByid);
// let sortedByName=products.sort((a,b)=> a.name.localeCompare(b.name))
// console.log(sortedByName);
// let sortedByPrice=products.sort((a,b) => a.price -b.price)
// console.log(sortedByPrice);
// let sortedByRating=products.sort((a,b)=>a.rating-b.rating)
// console.log(sortedByRating);
// let sortedByDiscount=products.sort((a,b)=>a.discount-b.discount)
// console.log(sortedByDiscount);
//==============================================================
// 10. Rating bo'yicha eng kuchli product topilsin. (sort)
// let byProduct=products.sort((a,b)=>b.rating-a.rating)
// console.log(byProduct[0]);
//=============================================================
// 11. Narxi eng past bo'lgan product topilsin. (sort)
//  let byProduct=products.sort((a,b)=>a.rating-b.rating)
//  console.log(byProduct[0]);
// 12. Barcha products narxlari yig'indisi topilsin. (reduce)
// let sum = products.reduce((acc, el) => {
//     if (el.price) {
//         return acc + el.price;
//     }
//     return acc; 
// }, 0); 

// console.log(sum);
//===================================================================
// 13. Faqatgina products nomlaridangina iborat bo'lgan massiv
// qaytaring. (map)
// let names=products.map(el=>{
//     return el.name
// });console.log(names);
//==================================================================
// 14. Id si 5 bo'lgan elementni nomini qaytaruvchi dastur yozing.
// (find)
// let byId=products.find(el=>{
//     if(el.id===5){
//         return el.name
//     }
// });console.log(byId);
//===================================================================
// 15. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
let products = [
{
id: 6,
name: "Smarthpone",
price: 12000,
rating: 4.5,
discount: 20,
},
{
id: 2,
name: "Acer",
price: 10000,
rating: 4.3,
discount: 10,
},
{
id: 1,
name: "Mac book",
price: 17000,
rating: 4.7,
discount: 40,
},
{
id: 4,
name: "HP",
price: 21000,
rating: 4.1,
discount: 30,
},
{
id: 5,
name: "Dell",
price: 35000,
rating: 4.9,
discount: 30,
},
];
// let byId=products.filter(el=>{
//     if(el.id!==4){
//         return el
//     }
// });console.log(byId);
//=======================================================
// 16. Berilgan satrni faqatgina harflardan iborat ekanligiga
// tekshiring (split, every)
// let str = "SalomDunyoo";
// let isAllLetters = str.split("").every(char => {
//     return char.toLowerCase() !== char.toUpperCase();
// });
// console.log(isAllLetters); 
//=======================================================
// 17. Massiv truthy va falsy elementlardan tuzilgan. O’sha
// massivdagi truthy va falsy elementlarni alohida massivlarga
// ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing.
// (filter)
// Input: [false, 1, 10, "", null, "abdulaziz", 1.13, 0]
// Output: {truthy: [1, 10, "abdulaziz", 1.13], falsy: [false, "",
// null, 0]}
// const input = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];

// function getTruthyFalsy(arr) {
//   return {
//     truthy: arr.filter(el => el), 
//     falsy: arr.filter(el => !el)
//   };
// }

// console.log(getTruthyFalsy(input));
//========================================================
// 18. Satr berilgan.
// Satrdagi so'zlar uzunligidan iborat bo'lgan massiv qaytaring.
// (split, map)
// Input: "Men Abdulaziz Programmerman"
// Outpu: [3, 9, 13]
// let str = "Men Abdulaziz Programmerman";
// let wordLengths = str.split(" ").map(word => word.length);

// console.log(wordLengths);   
//=======================================================
// 19. Satrni bo'sh joy bor yoki yo'qligini tekshiring. (split,
// some)
// let str = "Men Abdulaziz Programmerman";
// let hasSpace = str.split("").some(char => char === " ");

// console.log(hasSpace); 
//==========================================================
// 20. Objectning kalit va qiymatlarining string ko'rinishidagi
// yig'indisidan iborat massiv qaytaring. (Object.entries, map,
// join)
// Input: {a: 2, b: 5, c: 7}
// Output: ['a2', 'b5', 'c7']
// const obj = {a: 2, b: 5, c: 7};
// const result = Object.entries(obj).map(entry => entry.join(""));

// console.log(result); 
//===========================================================
// 21. Sonning raqamlari yig'indisini hisoblab beradigan digitSum()
// funksiya yozing. (rekursiv funksiya)
// function digitSum(n) {
//     if (n === 0) {
//         return 0;
//     }
//     return (n % 10) + digitSum(Math.floor(n / 10));
// }

// console.log(digitSum(123)); 
// console.log(digitSum(4567)); 
//===============================================================
// 22. Quyidagi pupils massividagi barcha o'quvchilarni
// protcentlarining o'rtacha qiymatini toping. (reduce)
// const pupils = [
//   { name: "Elbek", protcent: 95 },
//   { name: "Zafar", protcent: 78 },
//   { name: "Aziz", protcent: 83 },
//   { name: "Jasur", protcent: 88 },
//   { name: "Bobur", protcent: 66 },
//   { name: "Kamron", protcent: 75 }
// ];

// const totalPercent = pupils.reduce((acc, pupil) => {
//     return acc + pupil.protcent;
// }, 0);
// const averagePercent = totalPercent / pupils.length;

// console.log("O'rtacha qiymat:", averagePercent.toFixed(1)); 
//==================================================================
// Pupils massividagi ojectlarga quyidagi propertylarni qo'shib
// yangi massiv qaytaring. (map)
// 23. grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90
// o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan
// holatlarda 2 bahoni o'zlashtiring.(map)
// const pupils = [
//   { name: "Elbek", protcent: 95 },
//   { name: "Zafar", protcent: 78 },
//   { name: "Aziz", protcent: 83 },
//   { name: "Jasur", protcent: 88 },
//   { name: "Bobur", protcent: 66 },
//   { name: "Kamron", protcent: 75 }
// ];

// const gradedPupils = pupils.map(pupil => {
    // let grade;
    
    
    // if (pupil.protcent >= 90 && pupil.protcent <= 100) {
    //     grade = 5;
    // } else if (pupil.protcent >= 80 && pupil.protcent < 90) {
//         grade = 4;
//     } else if (pupil.protcent >= 70 && pupil.protcent < 80) {
//         grade = 3;
//     } else {
//         grade = 2;
//     }

    
//     return {
//         ...pupil, 
//         grade: grade 
//     };
// });

// console.log(gradedPupils);
//==================================================================
// 24. isPassed propertyga protcent 70 dan o'tsa true, aks holda
// false qiymat o'zlashtirilsin. (map)
// const pupils = [
//   { name: "Elbek", protcent: 95 },
//   { name: "Zafar", protcent: 78 },
//   { name: "Aziz", protcent: 83 },
//   { name: "Jasur", protcent: 88 },
//   { name: "Bobur", protcent: 66 },
//   { name: "Kamron", protcent: 75 }
// ];

// const updatedPupils = pupils.map(pupil => {
//   return {
//     ...pupil,
    
//     isPassed: pupil.protcent >= 70 
//   };
// });

// console.log(updatedPupils);
//===================================================================
// 25. Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta
// olmadi shuni ham hisoblang. (reduce)

const pupils = [
  { name: "Elbek", protcent: 95 },
  { name: "Zafar", protcent: 78 },
  { name: "Aziz", protcent: 83 },
  { name: "Jasur", protcent: 88 },
  { name: "Bobur", protcent: 66 },
  { name: "Kamron", protcent: 75 }
];

const stats = pupils.reduce((acc, pupil) => {
    if (pupil.protcent >= 70) {
        acc.passed++; 
    } else {
        acc.failed++; 
    }
    return acc;
}, { passed: 0, failed: 0 }); 

console.log(stats); 


