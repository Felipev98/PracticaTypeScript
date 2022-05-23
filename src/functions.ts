// function greet (name:string):void{
//      console.log(`Hola ${name}`);
// }
// greet("Felipe");
// function getNumber():number{
//     return Math.floor(Math.random()*100);
// }
// console.log(getNumber());

function printPosition(position: {lat:number,long:number | string}):void{
    console.log(position.lat,position.long);
}
printPosition({lat:10,long:20});
