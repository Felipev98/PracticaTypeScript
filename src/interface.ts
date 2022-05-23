interface Book{
    id: number;
    title: string;
    author:string;
    coAuthor?:string;
    isLoan?: (id:number) => void
}
const book:Book = {
    id:1,
    title:"Felipe libro",
    author:"Felipe"
};
function createBook(book:Book):Book{
    return book;
}
const newBook: Book ={
    id:2,
    title:"Felipe libro",
    author:"FelipeVargas",
}
createBook(newBook);