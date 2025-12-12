console.log('TODAY LEC 02');

//OBJECT IN JS
// const rectangle = {
//     length:2,
//     breadth:20,
//     draw: function(){
//         console.log('draw'); //method not function
    
//     }

// };

//OBJECT CREATION -- HOW???....
//01 FACTORY FUNCTION
// function createRectangle(Len,Bre) {
//     return rectangle = {
//         length:Len,
//         breadth:Bre,

//         draw: function() {
//             console.log('drawing rectangle');
//         }
//     };
// }

// let rectangleObj01 = createRectangle(45,82);

// let rect02 =createRectangle(55.89,5856.65);

//02 method CONSTRUCTOR FUNCTION ---> pascal notation 
function Rectangle(len,bre) {
    this.length=len;
    this.breadth=bre;
    this.draw = function() {
        console.log('drawing');
    }
}

//creation of rectangle using constrcutor function
let rectangleObject = new Rectangle(55,98);




//dynamic nature of object

rectangleObject.color = 'Yellow';

//delet object 
 delete rectangleObject.color;

//Primitive and referance value
// let a=10;
// let b=a;

// a++;
// console.log(a);
// console.log(b);


//refrence 
// let a ={value:10};
// let b=a;

// a.value++;


// console.log(a.value);
// console.log(b.value);

//iterating THROUGH OBJECT 

//FOR-of
//FOR -in

//for in loop
// for(let key in rectangleObject){
//     console.log(key,rectangleObject[key]);
// }

 //for--of loop

// for(let key of Object.entries[rectangleObject]){
//     console.log(key);

// }



//how do check any prop  are exist or not 
// if('draw' in rectangleObject){
//     console.log('Present');
// }
// else {
//     console.log('Absent');
// }


//Object Coloning
//01_Iteration
//02_ASsign
//03_Spread

//01
let src ={
    a:10,
    k:15,
    l:99

};

// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);


//02
// let dest = Object.assign({},src);

// console.log(dest);

// src.a++;

// console.log(dest);

//03
let dest = {...src};

console.log(dest);



 






