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

// 6) Double the array and return the even numbers

var my_data=[1,2,3,4,5,6,7,8,9];

var result=my_data.reduce((acc,val)=>{
   
    if(val % 2==0){
        var value= val * 2;
        acc.push(value);
        
    }
   return acc;
    
},[]);

//console.log("The result of even number doubled array is : " + result);

// 7) Find sum in array of objects

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
    acc=acc + val.salary;
    return acc;
},0);
//console.log("The Sum off all the Salaries of the Employees is : " + result);

// 8) Find maximum salary in array of objects

var result=data.reduce((acc,val)=>{
    if(acc < val.salary){
      acc=val;
    }
    return acc;
},0);

//console.log("The maximum salary in the array of the object is : " + result.salary);

// 9) return rthe record of the Employess having maximum salary

var result1=data.reduce((acc,val)=>{
     
    var indexed_associated=val.salary;
    
    if(acc.salary <= val.salary){
        if(acc.salary == val.salary){
           acc[indexed_associated].push(val);    
        }
        else{
            acc=val;  
            if(acc[indexed_associated]==null){
            acc[indexed_associated]=[];
        }
        acc[indexed_associated].push(val);
        }
        
    }
     
    return acc;
});

//console.log(result1);

// 10) count the objects in the array

var result=data.reduce((acc,value)=>{
   acc=acc+1;
return acc;
},0);

//console.log(result);

// 11) Get the array of Names 

var result=data.reduce((acc,val)=>{
    acc.push(val.name);
    
    return acc;
},[]);
//console.log(result);

// 11) Use salary property as Lookup for Employee

var result=data.reduce((acc,value)=>{
    
    var associated_index=value.salary;
    
    if(acc[associated_index]==null){
        acc[associated_index]=[];
    }
    acc[associated_index].push(value);
    
    return acc;
});
//console.log(result);

// 12) Return the employee with name Arslan Shakeel

var result=data.reduce((acc,value)=>{
    if(value.name=="Arslan Shakeel"){
        acc.push(value);
    }
    return acc;
},[]);

//console.log(result);

// 13) Return the employee with age greater than 30

var result=data.reduce((acc,value)=>{
    if(value.age > 30){
        acc.push(value);
    }
    return acc;
},[]);

//console.log(result);

// 14) Occurence / frequency of each ellement

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

// 14) Occurence / frequency of each ellement from array of objects

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

// 15) Flaten array

var unflatten_array=[1,2,3,[4,5],6,7,8,[9,10,[11,12,13]]];
var resultant=flat(unflatten_array);
function flat(arry){
    var result=arry.reduce((acc,val,index,source_array)=>{
    
    if(Array.isArray(val)){
        acc=acc.concat(flat(val));
        
    }
        else{
              acc.push(val);            
        }

    return acc;
},[]);
    return result;
}


console.log(resultant);