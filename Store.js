// const content2 = [];
// const addBtn = document.querySelector('.add-btn');


// //events

// addBtn.addEventListener('click', addItem);


// //functions

// function addItem () {
//     addBtn.parentElement = content2.push;
// }

const products = [
    {
        name: "Player Unknown Part1",
        price: "$6.00",
        img: "photos/Arcane.jpg",
        id: 1
    },
    {
        name: "Player Unknown Part1",
        price: "$6.00",
        img: "photos/Arcane.jpg",
        id: 2
    },
    {
        name: "Player Unknown Part1",
        price: "$6.00",
        img: "photos/Arcane.jpg",
        id: 3
    },
    {
        name: "Player Unknown Part1",
        price: "$6.00",
        img: "photos/Arcane.jpg",
        id: 4
    },
    {
        name: "Player Unknown Part1",
        price: "$6.00",
        img: "photos/Arcane.jpg",
        id: 5
    },
    {
        name: "Player Unknown Part1",
        price: "$6.00",
        img: "photos/Arcane.jpg",
        id: 6
    },
    {
        name: "Player Unknown Part1",
        price: "$6.00",
        img: "photos/PUBG.png",
        id: 7
    },   
]

const content = document.querySelector(".content")

const cart = []

const addToCart = (product)=>{
    cart.push(product)
}

const setItems = ()=>{
    
    products.forEach((product, index)=>{
        const {name, price, img} = product;

            const item = document.createElement("div")
            item.classList.add("items")
            item.innerHTML= `<img src=${img} />
             <h3> ${name} </h3>
             <label> Price: ${price} </label>
             <button class="add-btn btn2" onclick="addToCart(index)">Add to cart</button>`
            content.append(item)
             
    })
}
setItems()


// const addBtn = document.querySelector('.add-btn');
// addBtn.addEventListener("click", ()=>{

// })





