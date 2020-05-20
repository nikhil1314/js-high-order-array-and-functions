const companies=[
    {name: "company one", category:"finance",start:1981, end:2003},
    {name: "company two", category:"retail",start:1982, end:2008},
    {name: "company three", category:"auto",start:1999, end:2007},
    {name: "company four", category:"retail",start:1989, end:2010},
    {name: "company five", category:"technology",start:2009, end:2014},
    {name: "company six", category:"finance",start:1987, end:2010},
    {name: "company seven", category:"auto",start:1986, end:1996},
    {name: "company eight", category:"technology",start:2011, end:2016},
    {name: "company nine", category:"retail",start:1981, end:1989},

];
const ages=[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
// for(let i=0;i< companies.length;i++){
//     console.log(companies[i]);
// }
//foreach
// companies.forEach(function(company) {
//     console.log(company.name);

// });
//filter
//get 21 and above
// let candrink=[];
// for(let i=0;i< ages.length;i++){
//     if(ages[i]>=21){
//         candrink.push([i]);
//     }
// }
// const candrink=ages.filter(function(age){
//     if(age >=21){
//         return true;
//     }
// });
const candrink=ages.filter(age => age >=21);
// //filter the retail companies
// var retailcompanies=ages.filter(function(company) {
//     if(company.category === 'retail'){
//         return true;
//     }
//     });
    // const retailcompanies =companies.filter(company => company.category === "retail");
    // console.log(retailcompanies);

//get 80s companies
const eightycompanies = companies.filter(company => (company.start >= 1980 && company.start <1990));
console.log(eightycompanies);
const lasttenyears=companies.filter(company =>(company.end-company.start >=10));
console.log(lasttenyears);

//map
//create company names
// const companynames = companies.map(function (company) {
//     return company.name;

// });
// const testMap = companies.map(function (company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });
// //squareroot
// const agesquare=ages.map(ages => Math.sqrt(ages));
// //two
// const agestimestwo=ages.map(ages => ages * 2);
// console.log(agestimestwo);
// //sort
// const sortedcompanies =companies.sort(function(c1,c2) {
// if(c1.start > c2.start){
//     return 1;
// }
// else{
//     return -1;

// }
 const sortedcompanies=companies.sort((a,b) => (a.start > b.start ? 1 : -1));


// });
console.log(sortedcompanies);

//sort ages
const sortages =  ages.sort((a,b) => a -b);
console.log(sortages);
//reduce
// let agesum=0;
// for(let i=0;i < ages.length; i++){
//     agesum +=ages[i];

//}

// const agesum=ages.reduce(function(total, age){
//     return total + age;

// });
const agesum=ages.reduce((total,age) => total + age,0);

//total years for all companies
// const totalyears =companies.reduce(function(total, company){
//     return total + (company.end - company.start);

// },0);
const totalyears =companies.reduce((total, company) => total + (company.end - company.start)
,0);
console.log(totalyears);
//combine methods
const combined = ages
.map(ages => ages *2)
.filter(ages => ages >=40)
.sort((a,b) => a-b)
.reduce((a,b) => a+b,0);
console.log(combined);