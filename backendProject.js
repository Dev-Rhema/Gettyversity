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



const randomNumber= Math.floor(Math.random()*8)

const recipeList=[
    {id:1, name: "Garri", link: "https://garri.ng"},
    {id:2, name: "Jollof Rice", link: "https://jollofrice.ng"},
    {id:3, name: "Coconut Rice", link: "https://coconutrice.ng"},
    {id:4, name: "Spaghetti", link: "https://spaghetti.ng"},
    {id:5, name: "Amala", link: "https://amala.ng"},
    {id:6, name: "Noodles", link: "https://noodles.ng"},
    {id:7, name: "Croissant", link: "https://croissant.ng"},
    {id:8, name: "Toast Bread", link: "https://toasts.ng"},
]


const randomRecipe = recipeList[randomNumber]

console.log(`${randomRecipe.name}. Recipe link: ${randomRecipe.link}`)

