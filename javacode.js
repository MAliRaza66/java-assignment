 //pG 1
// function hello()
// {
  
//  return function(num)
//   {
//  console.log(8+num);
 
//   }
// }
// let result = hello();
// result(3);
//result(10);

//PG 2
 
// let arr =[1,2,3,4,7,8,9,112,23,31,23,11,442,3,123] ;
// let length = arr.length;
// let find = +prompt("enter a number to Search : ")
// let a =0;

// function arrsearch(a,length)
// {
   
//   if(a > length )
//   {
//     return false;
//   }
// if (arr[a] === find)
// {
//   return true;
// }

//   return arrsearch( a+1,length);


// }
// console.log( arrsearch(a,length) ) ;

// pG 3

// function addPara (text) 
// {
//     let newPara = document.createElement('p');  
//     newPara.textContent = text;  
//     document.body.appendChild(newPara);  
    
//   }
//   text= prompt(" write the content of new created paragraph")
// console.log(addPara(text));

// Pg 4
 
// function addList(text) { 
//     let unorderedList = document.getElementById("unorder");
//     let listItem = document.createElement("li");
//     listItem.textContent = text;
 
//     unorderedList.appendChild(listItem);
//  }
 
//  let text = prompt("Type a string");
//  addList(text);

//PG 5
// function newcolor(element, color) {
//     element.style.backgroundColor = color;
//   }
   
// var myElement = document.getElementById("p1");

//  newcolor(myElement, "purple");

//  Pg 6
// let obj = {
//     name: "ali",
//     no :1334,
//     gander:"male",

// }
//  function saveObj(a,b)
//  { 
//   let stringify = JSON.stringify(obj);
//     localStorage.setItem(a,stringify);
//     console.log(b);


//  }

//  saveObj("object",obj);

// //Pg 7
 
// function retrieveobj (a)
// {
 
//     let str = localStorage.getItem("object")
//     if (str=== null)
//     {
//         console.log("not found")
//     }
//     return JSON.parse(str);
// };

// console.log( retrieveobj("object")) 
 
//Pg 8

let obj = {
    name: "ali",
    no :1334,
    gander:"male",

}


function getobj(b)
{
    localStorage.setItem("name", "ali")
    localStorage.setItem("no", "1334")
    localStorage.setItem("gander","male")
     let newObj = {};
    for (let i = 0; i < localStorage.length; i++)
     {
        let key = localStorage.key(i);
        
         newObj[key] =  localStorage.getItem(key);
      }
    
      
      return newObj;

}

let newObj =getobj(obj);
console.log( newObj);