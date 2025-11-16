const formatValue = (value:string) : string =>{
    if(typeof value === "string"){
       return value.toUpperCase()
    }
    else{
        return ""
    }
}

const result = formatValue("hello")




const getLength = (value:string) : number =>{
    if(typeof value === "string"){
        return value.length
    }else{
        return 0
    }
}

const length = getLength("typescript")





class Person {
    name: string;
    age:number;

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}

const person1 = new Person('John Doe', 30);

const person2 = new Person('Alice', 25);

    



type Item = {
    title: string;
    rating:number;
}

const books : Item[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
]

const filterByRating = (items: Item[]):Item[]=>{
        return items.filter(item=> item.rating >= 4)
}

const book = filterByRating(books) 





type Users = {
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}

const users : Users[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

const filterActiveUsers = (users:Users[]) : Users[] =>{
    return users.filter(user=> user.isActive === true)
}

const user = filterActiveUsers(users)




interface Book{
    title:string,
    author:string,
    publishedYear:number,
    isAvailable:boolean
}

const printBookDetails = (book:Book)=>{
    return (`Title: ${book.title}, Author: ${book.author}, Published: ${book
        .publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`)
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

const bookDetails = printBookDetails(myBook)





const getUniqueValues = (array1:number[], array2:number[]) : number[]=>{
    const unique = Array.from(new Set ([...array1 , ...array2]))
    return unique
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const uniqueValue = getUniqueValues(array1,array2)





type Products = {
    name:string;
    price:number;
    quantity:number;
    discount?: number;
}

const products : Products[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

const calculateTotalPrice = (product: Products[]): Number=>{
    const totalPrice = product.reduce((sum,total)=> (total.price * total.quantity + sum)  , 0)
    return totalPrice
}

const totalProductPrice = calculateTotalPrice(products)

