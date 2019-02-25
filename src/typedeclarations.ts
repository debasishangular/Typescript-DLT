//TYPES  getting started

//string
let myname="debasish"; // let - Es6 feature
// myname=10; //not supported in typescript as typescript infers name to be string implicitly,
              // this was possible in js due to dynamic typing but here static typing
  console.log(myname);            

  //---number---
let num = 10.5; //number accepts both integers and floating point numbers

//---boolean(present in js also)---
let angularisClientside = true;
//angularisClientside=0;

//---any---
let age; // when we dont assign any value it takes type as any 
age ="debasish";
age=10;

//======================Assign DataTypes=========================

let myage:number;
let b:boolean;
let c: string;
let d:any;
//myage="xxx";

//---enum---

enum color {
    blue, //0
    yellow,//1
    red//2
 }

 // behind the scenes integer values are assigned for these enums sequentially

 let mycolor:color=color.yellow
 console.log(mycolor);

//suppose you want to assign your numbers then,

enum color1 {
    blue=100, 
    yellow=22,
    red
 }
 let mycolor1:color1=color1.red  
 console.log(mycolor1);//23 as it contibues incrementing with the latest number

 //----any ---
 let car:any ="BMW" ;
  car={brand:"BMW",series:3}
  console.log(car);


    //-------------------------------------------------------------------
    //                             ADVANCE TYPES
    //-------------------------------------------------------------------

//functions

function returnName():string{
    return myname;
}

function sayHello():void{

    console.log("Hello world");
    //return myname;
}
//argument types

function add(num1, num2):number{
    return num1 +num2;
}

console.log(add("deb",2));

function add1(num1:number, num2:number):number{
    return num1 +num2;
}

//console.log(add1("deb",2));


//==================function types===================

//---function types ---- -
let addNum;
addNum=sayHello; addNum();
addNum=add1; 
console.log(addNum(1,2));

//addNum is accepting any type of function so we will assign specific function type that i can accept

let addNum1:(val1:number,val2:number)=>number;//order is imp not arg names
//addNum1=sayHello;
addNum1=add1; console.log(addNum1(1,2));

// =========== Objects =================

let myData={

    name:"deb",
    age:28
};

//Behind the scenes typescript infers this to be of type object having name (string type)
//and age(number) property 

//This gives error as names of the property names does notmatch
// myData{
//     a:"xxx",
//     b:12
// }

let myData1:{name:string,age:number}=
{

    name:"deb",
    age:28
};


//================Creating Custom Types with type aliases  ================================

type myDatatype= {name:string,age:number};
type myFunType= (val1:number,val2:number)=> number;
//so above example can be changed like

let myData2:myDatatype=
{

    name:"deb",
    age:28
};

let addNum3:(val1:number,val2:number)=>number;//order is imp not arg names
//addNum1=sayHello;
addNum1=add1; console.log(addNum3(1,2));

//changed to 

let addNum4:myFunType;//order is imp not arg names
//addNum1=sayHello;
addNum1=add1; console.log(addNum4(1,2));


// ============ Allowing multiple types with Union types ====================

let myRealAge:number | string;
myRealAge="xxx";
myRealAge=2;
//myRealAge=true; cant be assigned


//------------ checking for types during runtime -------------------

let finalValue="debasish";
if(typeof finalValue == "string"){
    console.log("Tested");
}

// ---------------------Never type (ts 2.0) -------------

function neverReturns():never{

    throw new Error('Error');
}



//=================Array and tuples=========================

let myhobbies =["cook","play",1]; // typescript infers it as any myhobbies:any[]
myhobbies=[1]; // so we can assign number ,string etc
myhobbies=["Hello"];

let myhobbies1 =["cook","play"]; // typescript infers it as string myhobbies:string[]
//myhobbies1=[1]; // so we cannot assign number
myhobbies1=["Hello"];


//Mentioning the types explicitly for Array
    
let myhobbies2:string[] =["cook","play"]; //
//myhobbies1=[1]; // so we cannot assign number
myhobbies1=["Hello"];

//===================Tuples=============================

// when we want an array to contain more then 1 types we can be explicit using tuple
// values must be in order

let myAddress:[string,number]=["Sydney",10] ;
//let myAddress1:[string,number]=[1,"xxx"] ; //error as order imp 

