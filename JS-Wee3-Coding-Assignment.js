// Jose Jauregui
// JS Week 3 Coding Assignment

//Step 1
let ages = [3,9,23,64,2,8,28,93];
console.log(ages);
//Step 1a
console.log("The last value minus the first value is: " + (ages[ages.length-1]-ages[0]));
//Step 1b
ages.push(100);
console.log("New value added to ensure its dynamic: " + (ages[ages.length-1]-ages[0]));
//Step 1c
let sum = 0;
let average = 0;
for(let i = 0;i < ages.length-1; i++){
   sum += ages[i];
   
   average = sum / (ages.length-1);
   
}
console.log("The average age in the array is: " +average);
//Step 2
let namesArray = ['Sam','Tommy','Tim','Sally','Buck','Bob'];
//Step 2a
sumOfNames =0

for(let i = 0;i < namesArray.length; i ++){
    sumOfNames = sumOfNames + namesArray[i].length;
}
console.log("The average letters per name in names array is : "+ sum/namesArray.length);
//Step 2b
let newNames = "";
for(let i = 0 ;i < namesArray.length; i++){
    newNames += namesArray[i] + " ";
}
console.log("The names concatenated sepreated by spaces: " +newNames);
//Step 3
let nameLength = namesArray.length;
console.log("The last element of the array: " + (namesArray[nameLength-1]));
//Step 4 
console.log("The first elemetn of the array: " + namesArray[0]);
//Step 5
let nameLengths = [];
for ( let i = 0; i < namesArray.length;i++){
    nameLengths[i] = namesArray[i].length;
}
console.log("NameLengths array : " +nameLengths);
//Step 6
sumOfNameLengths = 0;
for(let i = 0 ; i < nameLengths.length;i ++){
    sumOfNameLengths = sumOfNameLengths + nameLengths[i]
}
console.log("Sum of the elements in nameLength: " + sumOfNameLengths);
//Step 7
function nameTimes (name , num){
    let tempName= "";
    for (let i = 0; i<num; i ++){
        tempName += name;
    }
    return tempName;
}
console.log(nameTimes("Jose", 5));
//Step 8
function fullname(firstName,lastName){
    return firstName + " " + lastName;
}
console.log(fullname("Jose","Jauregui"));
//Step 9
let array = [2,5,100,6,4];

function greaterThanHundred (x){
    let sum = 0;
    for(let i = 0; i < x.length; i ++){
        let num = x[i];
        sum += num; 
    }
    if (sum > 100){
        return true;
    } else {
        return false;
    }
    
}
console.log(greaterThanHundred(array));

//Step 10
function arrayAverage(x){
    let sum = 0;
    let average = 0;
    for (let i = 0; i < x.length; i ++){
        let num = x[i];
        sum += num;
        average = sum / x.length;
    }
    return average;
    
}
console.log(arrayAverage(array));

//Step 11
function averageOfTwoArrays (x, y){
    let sum = 0;
    let average = 0;
    for (let i = 0; i < x.length; i ++){
        let num = x[i];
        sum += num;
        average = sum / x.length;
    }
    return average;
    
    

    
}

//step 12
function willBuyDrink (isHotOutside, moneyInPocket){
    if(isHotOutside == true && moneyInPocket > 10.50){
        return true;
    }
    else {
        return false;
    }
}

console.log(willBuyDrink(true,11));
//Step 13
//This function will return the profit made on a remodel job given the estimate, the cost of materials, and wages of workers
//I Created this function because I currently work in Home Remodeling.
function ProfitOfJob ( estimate, materials, wages){
    let profit = 0;
    profit = estimate - (materials + wages);
    return profit;
}
console.log("The profit earned on the remodeling job is: " + ProfitOfJob(6000,1800,2000));
