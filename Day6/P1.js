const rawFlights = { "Londn-Paris:150","New york-Tokyo:invalid","Dubai-Mumbai:450","Berlin-Rome:95"};
const result = rawFlights.map(flight=>{const[route,rawPrice]=rawFlights.split(":");
const [from,to] = split("-");
let Price = Number(rawPrice);
if(isNaN(Price)){
    Price = 0;
}
return{from , to , Price};})
.filter(flight=>fligt.price>=100 && flight.price<=500 )
.sort((a,b)=>a.price - b.price);
const jsonResult = JSON.stringify(result,null,2);
console.log(jsonResult);