//1 
//async function getTodos(url){
//let data = await fetch("https://catfact.ninja/facts")
   //data = data.json();
    //return data;
//}
 
 //getTodos().then(data => console.log(data));

 //2
 //async function getTodos(url){
    //let data = await fetch("http://universities.hipolabs.com/search?country=India")
    //data = data.json();
    //return data;
 //}
 //getTodos().then(data => console.log(data));

 //3
 async function getTodos(url){
    let data = fetch("https://randomuser.me/api/?results=10")
    data = (await data).json();
    return data ;
 }
 getTodos().then(data => console.log(data));

 //4
  async function getTodos(url){
    let data = fetch("https://jsonplaceholder.typicode.com/posts")
    data = (await data).json();
    return data ;
 }
 getTodos().then(data => console.log(data));

 //5
  async function getTodos(url){
    let data = fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
    data = (await data).json();
    return data ;
 }
 getTodos().then(data => console.log(data));

//6
 async function getTodos(url){
    let data = fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    data = (await data).json();
    return data ;
 }
 getTodos().then(data => console.log(data));

 //7
  async function getTodos(url){
    let data = fetch("https://dogapi.dog/api/v2/facts")
    data = (await data).json();
    return data ;
 }
 getTodos().then(data => console.log(data));

 //8
  async function getTodos(url){
    let data = fetch("http://api.open-notify.org/astros.json")
    data = (await data).json();
    return data ;
 }
 getTodos().then(data => console.log(data));

//9
async function getTodos(url){
    let data = fetch("https://zenquotes.io/api/quotes")
    data = data.json();
    return data;
}
getTodos().then(data =>console.log(data));

//10
await function getTodos(url){
    let data = fetch("https://restcountries.com/v3.1/all?fields=name,population")
    data = data.json();
    return data;

}
getTodos().then(data=> console.log(data));