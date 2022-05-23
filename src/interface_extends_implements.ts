//Interfaces
interface Person{
    id:number;
    name:string;
}

interface Employee extends Person{
    dept:string;  
}
interface Customer extends Person{
    country:string;  
}
const emp:Employee = {
    id:9,
    name:"Felipe",
    dept:"IT"
}
interface Animal{
    name:string;
    getDogs?:() => void;
    getCats: () => void;
}

class Zoo implements Animal{
    name = "Vaca"
    getCats():void{
    }
}
