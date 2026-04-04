#TypeScript 

Today I explored the typescript docs. learnt about the only three things typescript care about : boolean, numbers, strings. 

Infer - typescript automatically guesses your data type

Got along with inference too. i.e

inference Smartphone = {
brand: string 
is5G: boolean
model: string 
unit : number 


}

//Typescript automatically knows
const Brand = {
brand: "Tecno"
is5g: True
model: "KH32"
unit: 6

}

//Learnt about arrays too
const brand:string = ["Ayoola","Sultan"]
console.log ([brand]) 



console.log(Brand) // Run the complier and it translates it to .js cause thats the lang the web understands. You call it with 'node hello.js'. 

let useName: number = (5) 
useName = ("Joe") //typescript returns an error 

Readonly, unknown types
//Learnt about these too, if you declare them in your code,they perform function accroding to thier name.


let newbie:string[] readonly = ["Ayoola","Sultan","Omoniyi"];
newbie.push("Newbie") //Error cause its readonly


One advantage of typescript is that it spots error right in your code 

Learnt a bit about hoisting in Javascript. as a developer, it is best to declare your variables at the top of your code. Const cannot be reassigned or declared but you can add to it using something lile .push in a object or array. 
