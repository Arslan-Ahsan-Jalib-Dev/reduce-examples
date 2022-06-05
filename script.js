//------------------- Reduce Method Examples ---------------//
// 1) sum

var arry=[1,4,8,2,70,4,6,9,10,30];

var result=arry.reduce((acc,val)=>{
   acc=acc+val;
   return acc;
});
//console.log("The result of sum of the array is : " + result);

// 2) Product

var result=arry.reduce((acc,val)=>{
   acc=acc * val;
   return acc;
});
//console.log("The result of Product of the array is : " + result);

// 3) average

var result=arry.reduce((acc,val,index,source_array)=>{
    if(index==source_array.length - 1){
        acc=acc/source_array.length;
    }  
    acc = acc + val;
    
    return acc;
});
//console.log("The result of Average of the array is : " + result);

// 4) Max
var result=arry.reduce((acc,val)=>{
    if(acc < val){
        acc=val;
    }
    return acc;
});

//console.log("The result of Maximum Number in the array is : " + result);

// 5) Min
var result=arry.reduce((acc,val)=>{
    if(acc > val){
        acc=val;
    }
    return acc;
});

//console.log("The result of Minimum Number in the array is : " + result);

// 6) Find sum in array of objects

var data=[
    {
        name:"Arslan Shakeel",
        age: 28,
        salary:80000
    },
    {
        name:"Junaid",
        age: 26,
        salary:56000
    },
    {
        name:"Usman",
        age: 32,
        salary:78000
    },
    {
        name:"Naem",
        age: 33,
        salary:90000
    },
//    {
//        name:"Khalid",
//        age: 55,
//        salary:56000
//    },
//    {
//        name:"Nouman",
//        age: 23,
//        salary:33000
//    },
//    {
//        name:"Saad",
//        age: 43,
//        salary:45000
//    },
    {
        name:"Raja Shaheen",
        age: 28,
        salary:90000
    }
];

var result=data.reduce((acc,val)=>{
    acc=acc + val.salary;
    return acc;
},0);
//console.log("The Sum off all the Salaries of the Employees is : " + result);

// 7) Find maximum salary in array of objects

var result=data.reduce((acc,val)=>{
    if(acc < val.salary){
      acc=val;
    }
    return acc;
},0);

//console.log("The maximum salary in the array of the object is : " + result.salary);

// 8) return rthe record of the Employess having maximum salary

var result=data.reduce((acc,val)=>{
    var asociated_index=val.salary;
    
    if(acc[asociated_index]==null){
        acc[asociated_index]=val;
    }
    else{
        acc[asociated_index].push(val);
    }
    return acc;
},{});
console.log(result);