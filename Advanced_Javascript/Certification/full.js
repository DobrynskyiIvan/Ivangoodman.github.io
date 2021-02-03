// //===============================================without first
//      arraYStrings.map(el=>el.substring(1)).join(' ')    
 
// //================all upper case
//  arraYStrings.filter(el=>el===el.toUpperCase()).join(' ');
 
//===================== =======Вивести список унікальних слів. 
//       [...new Set(arraYStrings)].join(' ');
 
//============================================== Вивести найдовше слово.
//        arraYStrings.sort((a,b)=>b.length-a.length)[0];
 
// //========================= Math.pow(x,y) . 
 
//==========================================Calculate string  "3+4+5+6"
 
//     let arraYStrings=someString.split('+');
//     return  arraYStrings.reduce((a,b)=>+a+(+b));
 
//========================================= count the same
// function keyValue(someString) {
//   return  someString.reduce((acc,item)=>{
//         if(item in acc){
//             acc[item]++;
//         }
//         else
//         acc[item]=1;
//         return acc;
//     },{})
  
// }
//===================4. Дано список емейлів. Порахувати, скильки повторюються більше, ніж 2 рази.
 
//   function find_duplicate_in_array(arra1) {
//     var object = {};
//     var result = [];
//     arra1.forEach(item=>{ 
//         object[item] =(object[item]|| 0)+1   }
//        )
//     for (var prop in object) {
//        if(object[prop] >= 2) {
//            result.push(prop);
//        }
//     } 
//  return result;  }
 

//==============================================================is Reverse
//   arr.every((val, index) => val === arr2.reverse()[index]));
 
 //========================== 13345, зробити з нього 1, 3, 3, 4, 5
//  var digits = (""+n).split('').map(Number);
 
////=============================== set to current Position
//  arr.splice(index,0,...arr2) ;
 

 //============================ the sum of the absolute value of each element. 
 
//       arr.map(el=>Math.abs(el)).reduce((a,b)=>a+b);
 
// //================================ bind   
// function bind(funct,context ){
  
//   var bindArgs = [].slice.call(arguments, 2);
//   return function() {
     
//     var fnArgs = [].slice.call(arguments);
     
//     return fn.apply(context, bindArgs.concat(fnArgs));
//   };
// }
//============================if string in string
//  str.includes(substring)

 

 
