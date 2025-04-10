const prompt= require('prompt-sync')();

// 
// ASSIGNMENT 1 WEIGHt CONVERTER
// 

// const weight= prompt('How much do you weigh?(lbs)')
//     if(weight<0||isNaN(weight)){
//         console.log("Please enter a valid number")
//     }else{
//         console.log(`Your weight is ${weight/2.2} kg`)
// }


// 
// ASSIGNMENT 2 AGE CONVERTER
// 

// const birthYear= prompt('what year were you born?')
// const currentYear = new Date().getFullYear();
// const age= (currentYear- birthYear)
//     if(birthYear<0||isNaN(birthYear)||birthYear>currentYear){
//         console.log("Please enter a valid year")
//     }else if(age <= 1){
//             console.log(`You are ${age} year old`)
//         }else{
//         console.log(`You are ${age} years old`)
//         }


// 
// ASSIGNMENT 3 Recipie book
// 

const recipeList=[
    {name: "Garri", link: "https://garri.ng"},
    {name: "Jollof Rice", link: "https://jollofrice.ng"},
    {name: "Coconut Rice", link: "https://coconutrice.ng"},
    {name: "Spaghetti", link: "https://spaghetti.ng"},
    {name: "Amala", link: "https://amala.ng"},
    {name: "Noodles", link: "https://noodles.ng"},
    {name: "Croissant", link: "https://croissant.ng"},
    {name: "Toast Bread", link: "https://toasts.ng"},
]

recipeList.forEach((recipe)=>{
  console.log(  recipe.name)
  
})

