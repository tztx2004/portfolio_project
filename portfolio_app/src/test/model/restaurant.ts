// let data  = {
//     name:'찬 식당 ',
//     category:"western",
//     address:{
//         city:"incheoi",
//         detail:'somewhere',
//         zipCode:234234234
//     },
//     menu:[{name:"rose pasta", price:2000, category:"pasta"},{name:"garlic steak", price:3000, category:"steak"},]
// }

export type Restaurant = {
    name: string,
    category:string,
    address:Address
    menu:Menu[]
}

export type Address = {
    city:string;
    detail:string;
    zipCode:Number
}

export type AddressWithoutZip = Omit<Address,'zipCode'>
export type RestaurantOnly = Pick<Restaurant,'category'>

export type Menu = {
    name:string;
        price:number;
        category:string
}


export type ApiResponse<T> = {
    data:T[],
    totalPage?:number,
    page?:number
}