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

One advantage of typescript is that it spots error right in your code 
