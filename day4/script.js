const inventors=[
    {first:'Albert',    last:'Einstein',    year:1879,  passed:1955},
    {first:'Isaac',     last:'Newton',      year:1643,  passed:1727},
    {first:'Galileo',   last:'Galilei',     year:1564,  passed:1642},
    {first:'Marie',     last:'Curie',       year:1867,  passed:1934},
    {first:'Johannes',  last:'Kepler',      year:1571,  passed:1630},
    {first:'Nicolaus',  last:'Copernicus',  year:1473,  passed:1543},
    {first:'Max',       last:'Planck',      year:1858,  passed:1947}
];

const people=[
    'Beck,Glenn','Becker,Carl','Beckett,Samuel','Beddoes,Mick',
    'Beecher,Henry','Beethoven,Ludwig','Begin,Menachem','Belloc,Hilaire',
    'Bellow,Saul','Benchley,Robert','Benenson,Peter','Ben-Gurion,David',
    'Benjamin,Walter','Benn,Tony','Bennington,Chester','Benson,Leana','Bent,Silas',
    'Bentsen,Lloyd','Berger,Ric','Bergman,Ingmar','Berio,Luciano',
    'Berle,Milton','Berlin,Irving','Berne,Eric','Bernhard,Sandra','Berra,Yogi',
    'Berry,Halle','Berry,Wendell','Bethea,Erin','Bevan,Aneurin','Bevel,Ken',
    'Biden,Joseph','Bierce,Ambrose','Biko,Steve','Billings,Josh','Biondo,Frank',
    'Birrell,Augustine','Black Elk','Blair,Robert','Blair,Tony','Blake, William'
];

// 1. Filter the list of inventors for those who were born in the 1500
const result1 = inventors.filter(inventor=>inventor.year>1500 && inventor.year<1600);
console.log(result1);

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const result2 = inventors.map(inventor=>inventor.first +' '+ inventor.last);
console.log(result2);

// 3. Sort the inventors by birthdate,oldest to youngest
const result3 = inventors.sort(function(a,b){
    return a.year>b.year ? -1 : 1;
});
console.log(result3);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const result4 = inventors.reduce(function(total,inventor){
    return total+(inventor.passed-inventor.year);
},0);
console.log(result4);

// 5. Sort the inventors by years lived
const result5 = inventors.sort(function(a,b){
    return (a.passed-a.year)>(b.passed-b.year) ? 1 : -1;
});
console.log(result5); 
// 6. createalist of Boulevards in Paris that contain'de'anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/** this should be used on the console of the link above
 * 
const category=document.querySelector('.mw-category');
const links=Array.from(category.querySelectorAll('a'));
const de = links
            .map(link=>link.textContent)
            .filter(streetName=>streetName.includes('de'));
            console.log(category);
 */

 // 7. sort Exercise
    // Sort the people alphabetically by last name
const result7 = inventors.sort(function (a,b){
    return a.last>b.last ? 1: -1;
});
console.table(result7);
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const result8 = data.reduce(function(obj,item){
    if(!obj[item]){//when i meet a new instance i init it with 0
        obj[item]=0;
    }
    obj[item]++;//then i increment it
    return obj;
},{});
console.log(result8);