//**** Reduce Method Examples *********************///

//* 1) Sum 
var array=[20,3,4,5,6,7,8,9,7,6,30,100];

var result=array.reduce((acc,val)=>{
    acc=acc+val;
    return acc;
});
//console.log(result);

//* 2) product 

var result=array.reduce((acc,val)=>{
    acc=acc*val;
    return acc;
});
//console.log(result);

//* 3) Average 

var result=array.reduce((acc,val,index,source_array)=>{
    if(source_array.length-1 === index){
        acc=acc+val;
        acc=acc/source_array.length;
    }
    else{
        acc=acc+val;
    }
    
    return acc;
});
//console.log(result);

//* 4) Max

var result=array.reduce((acc,val)=>{
    if(acc<val){
        acc=val;
    }
    return acc;

            
});
//console.log(result);

//* 5) Min

var result=array.reduce((acc,val)=>{
    if(acc>val){
        acc=val;
        
    }
    return acc;

            
});
//console.log(result);

//* 6) double the even number 

var result=array.reduce((acc,val)=>{
   if(val%2==0){
       val=val*2;
       acc.push(val);
   }
    return acc;

            
},[]);
//console.log(result);

//* 7) Total the Salaries of all the Employees
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
    {
        name:"Khalid",
        age: 55,
        salary:56000
    },
    {
        name:"Nouman",
        age: 23,
        salary:33000
    },
    {
        name:"Saad",
        age: 43,
        salary:45000
    },
    {
        name:"Raja Shaheen",
        age: 28,
        salary:90000
    }
];

var result=data.reduce((acc,val)=>{
   acc=acc+val.salary;
   return acc;
},0);

//console.log(result);

//* 8) Find Maximum Salary among the employes

var result=data.reduce((acc,val)=>{
    if(acc.salary < val.salary){
        acc=acc.salary;
    }
    return acc;
});
//console.log(result);

//* 9) Details of Employe With Maximum Salary among all Employees

var result=data.reduce((acc,val)=>{
     
   if(acc.salary <=val.salary){
      var associated_index=val.salary;
       
       if(acc.salary ==val.salary){
           acc[associated_index].push(val);
       }
       else{
           acc=val;
           if(acc[associated_index]==null){
               acc[associated_index]=[];
           }
       acc[associated_index].push(val);
       }
       
   }
    return acc;
});
//console.log(result);

//* 10) Count Number of Employees

var result1=data.reduce((acc,val)=>{
   acc=acc+1;
   return acc;
},0);
//console.log(result1);

//* 11) Get the names of all employess

var result=data.reduce((acc,val)=>{
    acc.push(val.name);
    return acc;
},[]);
//console.log(result);

 //* 12)Use salary property as Lookup for Employee // Grouping Employee With Salary

var result=data.reduce((acc,val)=>{
    var associated_index=val.salary;
    if(acc[associated_index]==null){
        acc[associated_index]=[];
    }
    acc[associated_index].push(val);
    return acc;
},{});
//console.log(result);

 //* 13) return the employee with name Arslan Shakeel

var result=data.reduce((acc,val)=>{
   if(val.name=="Arslan Shakeel")
    {
        acc.push(val);
    }
    return acc;
});
//console.log(result);

//* 14) Employe with age greater than 30

var result=data.reduce((acc,val)=>{
   if(val.age>30)
    {
        acc.push(val);
    }
    return acc;
},[]);
//console.log(result);

//* 15) Occurence / frequency of each ellement

var my_array=[1,2,3,34,5,5,6,7,7,7,7,8];

var result=my_array.reduce((acc,val)=>{
   if(acc[val]==null){
       acc[val]=1;
   } 
    else{
        acc[val]=acc[val]+1;
    }
    return acc;
},{});
//console.log(result);

//* 16) Employe Salary Occurence

var result=data.reduce((acc,val)=>{
    var associated_index=val.salary;
    if(acc[associated_index]==null){
        acc[associated_index]=1;
    }
    else{
        acc[associated_index]=acc[associated_index]+1;
    }
    return acc;
},{});
//console.log(result);
// 17) Occurence / frequency of each ellement from array of objects

var order=[
    {
        id:1,
        status:"pending"
    },
    {
        id:2,
        status:"pending"
    },
    {
        id:3,
        status:"shipped"
    },
    {
        id:4,
        status:"complete"
    }
];

var result=order.reduce((acc,val)=>{
    var index_stat=val.status;
    
    if(acc[val.status]==null){
        acc[val.status]=1;
    }
    else{
        acc[val.status]=acc[val.status]+1;
    }
    return acc;
    
},[]);
//console.log(result);

// 18) Flatten array

var unflatten_array=[1,2,3,[4,5],6,7,8,[9,10,[11,12,13]]];

var result=flat(unflatten_array);
function flat(arr){
var resulant=arr.reduce((acc,val)=>{
    if(Array.isArray(val)){
        acc= acc.concat(flat(val));
       }
    else{
      acc.push(val);    
    }
    
    return acc;
},[]);
    return resulant;
}
//console.log(result);

// 19) Implement Reduce

var arr=[1,2,3,4,45,5,6,9,6];

var res=reduce(arr,sum,0);

function reduce(arr,callback,initial_value){
    acc=initial_value;
    
    for(i=0;i<arr.length;i++){
        acc=callback(acc,arr[i],i,arr)
    }
    return acc;
}
function sum(acc,val,index,source_array){
    acc=acc+val;
    return acc;
}
//console.log(res);

// 20) array of books using spread operator

var authors=[
    {
        name:"Arslan",
        books:["javascript","jquery"],
        age:26
    },
    {
        name:"Iltaf",
        books:["html","css"],
        age:26
    },
    {
        name:"Hamza",
        books:["Sass","less"],
        age:26
    },
    {
        name:"Yasar",
        books:["DLD"],
        age:26
    },
    {
        name:"Shakeel",
        books:["javascript","jquery","Artifical Intellegence","Machine learning"],
        age:26
    }
]

var resultt=authors.reduce((acc,val)=>{
    acc.push(...val.books)
    return acc;
},["digital logic gate"]);
//console.log(resultt);

// 21) Remove Duplicate item in an array

var dub_array=[20,3,4,5,6,7,8,9,7,7,1,1,2,2,6,30,100];

var ress=dub_array.reduce((acc,val,index,source_array)=>{
    if(source_array.indexOf(val)==index){
        acc.push(val);
    }
    return acc;
},[]);
//console.log(ress);

// 22) Reverse string
var my_str="Hello World";

var resut=my_str.split("").reduce((acc,val)=>{
   return val + acc; 
});
//console.log(resut);

// 23) Validating paranthesis

var str="((()";

var res=str.split("").reduce((acc,val)=>{
   if(val==="("){
       acc=acc+1;
   }
    else if(val===")" && acc>0){
        acc=acc-1;
    }
    return acc;
},0);
//console.log(res);

// 24) Binary to decimal

var str="1101";

var res=str.split("").reverse().reduce((acc,val,index)=>{
    val=Number(val);
  acc=acc+val*Math.pow(2,index);
    return acc;
},0);
//console.log(res);

// 25) Function piping
function increment(number){
    number=number+1;
    return number;
}
function double_increment(number){
    number=number+2;
    return number;
}
function multiplyby_2(number){
    number=number*2;
    return number;
}
function dividedby_2(number){
    number=number/2;
    return number;
}

var pipe=[increment,double_increment,multiplyby_2,dividedby_2];

var result=pipe.reduce((acc,val)=>{
    return val(acc);
    
},8);
//console.log(result);

// 26) Implement map using reduce
var my_array=[1,2];
var map_result=map(my_array,increment);

function increment(number){
    number=number+1;
    return number;
}
function map(arr,calback){
    var res=arr.reduce((acc,val)=>{
        acc=acc.concat(calback(val));
        return acc;
    },[]);
    return res;
}
//console.log(map_result);

// 27) Intersection of arrays

var arr1=[1,2,3,4,5];
var arr2=[5,6,7,8,9];

var result=arr1.reduce((acc,val)=>{
   if(arr2.includes(val)){
       acc.push(val);
   }
    return acc;
},[]);
//console.log(result);

// 28) Union of arrays

var arr3=[...arr1,...arr2];
var result=arr3.reduce((acc,val,index,source_array)=>{
    if(source_array.indexOf(val)==index){
        acc.push(val);
    }
    return acc;
},[]);
//console.log(result);

// 29) Union of arrays 2nd method

var result=arr2.reduce((acc,val,index,source_array)=>{
    acc.push(val);
    return acc;
},arr1); 
result=[...new Set(result)];
console.log(result);