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
const students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
];

function getNamesByGrade(students, grade) {
  return students
    .map(student => {
      let studentGrade;
      if (student.percent >= 85 && student.percent <= 100) {
        studentGrade = 5;
      } else if (student.percent >= 70 && student.percent < 85) {
        studentGrade = 4;
      } else if (student.percent >= 60 && student.percent < 70) {
        studentGrade = 3;
      }
    
      return { ...student, grade: studentGrade };
    })
    .filter(student => student.grade === grade) 
    .map(student => student.name); 
}

console.log(getNamesByGrade(students, 5)); 
console.log(getNamesByGrade(students, 4)); 

// 2. Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt
// yarating. (reduce)
// Input: const animals = ['dog', 'chicken', 'cat', 'dog',
// 'chicken', 'chicken', 'rabbit'];
// Output: {
// dog: 2,
// chicken: 3,
// cat: 1,
// rabbit: 1
// }
// 3. Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil
// qiling. (map)
// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]
// Abdulaziz Programmer
// 4. Massivdagi musbat sonlar yig’indisini hisoblang. (filter va
// reduce)
// Input: [ 1, -4, 12, 0, -3, 29, -150]
// Output: 42
// 5. Satrdagi so’zlarning bosh harflarini oling. (split, map,
// join)
// Input: 'George Raymond Richard Martin'
// Output: 'GRRM'
// 6. Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini
// farqini toping. (sort).
// Input: [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54
// 7. N ta elementdan iborat massiv berilgan.
// Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga
// oladigan massivlar hosil qilinsin. (filter)
// 8. N ta elementdan iborat massiv berilgan. Massiv elementlari
// orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur
// tuzilsin. Faqat birinchi uchragani qoldirilsin. (reduce)
// 9. Products massivini id, name, price, rating va discount
// bo'yicha sortlash; (sort)
// 10. Rating bo'yicha eng kuchli product topilsin. (sort)
// 11. Narxi eng past bo'lgan product topilsin. (sort)
// 12. Barcha products narxlari yig'indisi topilsin. (reduce)
// 13. Faqatgina products nomlaridangina iborat bo'lgan massiv
// qaytaring. (map)
// 14. Id si 5 bo'lgan elementni nomini qaytaruvchi dastur yozing.
// (find)
// Abdulaziz Programmer
// 15. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
// let products = [
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
// 16. Berilgan satrni faqatgina harflardan iborat ekanligiga
// tekshiring (split, every)
// 17. Massiv truthy va falsy elementlardan tuzilgan. O’sha
// massivdagi truthy va falsy elementlarni alohida massivlarga
// ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing.
// (filter)
// Abdulaziz Programmer
// Input: [false, 1, 10, "", null, "abdulaziz", 1.13, 0]
// Output: {truthy: [1, 10, "abdulaziz", 1.13], falsy: [false, "",
// null, 0]}
// 18. Satr berilgan.
// Satrdagi so'zlar uzunligidan iborat bo'lgan massiv qaytaring.
// (split, map)
// Input: "Men Abdulaziz Programmerman"
// Outpu: [3, 9, 13]
// 19. Satrni bo'sh joy bor yoki yo'qligini tekshiring. (split,
// some)
// Input: "Men Abdulaziz Programmerman"
// Output: true
// 20. Objectning kalit va qiymatlarining string ko'rinishidagi
// yig'indisidan iborat massiv qaytaring. (Object.entries, map,
// join)
// Input: {a: 2, b: 5, c: 7}
// Output: ['a2', 'b5', 'c7']
// 21. Sonning raqamlari yig'indisini hisoblab beradigan digitSum()
// funksiya yozing. (rekursiv funksiya)
// 22. Quyidagi pupils massividagi barcha o'quvchilarni
// protcentlarining o'rtacha qiymatini toping. (reduce)
// Pupils massividagi ojectlarga quyidagi propertylarni qo'shib
// yangi massiv qaytaring. (map)
// 23. grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90
// o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan
// holatlarda 2 bahoni o'zlashtiring.(map)
// 24. isPassed propertyga protcent 70 dan o'tsa true, aks holda
// false qiymat o'zlashtirilsin. (map)
// 25. Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta
// olmadi shuni ham hisoblang. (reduce)
// const pupils = [
// {
// name: "Elbek",
// protcent: 95,
// },
// {
// name: "Zafar",
// Abdulaziz Programmer
// protcent: 78,
// },
// {
// name: "Aziz",
// protcent: 83,
// },
// {
// name: "Jasur",
// protcent: 88,
// },
// {
// name: "Bobur",
// protcent: 66,
// },
// {
// name: "Kamron",
// protcent: 75,

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
let totalPrice = products.reduce((acc, char) => {
  return acc + char.price;
}, 0);
console.log(totalPrice);
