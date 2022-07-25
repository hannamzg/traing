let btn = document.getElementById('btn');
let div = document.getElementById('div')

btn.onclick= function(){
    
   /*  let ul = document.createElement(ul);
    div.appendChild(ul); */

    for(let i = 10; i<200; i++){
        if(i%2 === 0){
            div.innerHTML += `<ul>
                        <li>
                            `+i+`
                        </li>
                            </ul>`
        }
    }
}


let obj1={
    name: "dnaile",
    age: 23,
    email: "d@notmyrealmail.com",
    phone: "058666666😈",
    address: {
        city: "tlv",
        street: "not found",
        number: 666
    }
}
let btn2 = document.getElementById('btn2');
let div2 = document.getElementById('div2');

btn2.onclick= function(){
    for(let info1 in  obj1){
        div2.innerHTML += 
        `<ul>
            <li>
               `+info1+ ` ==> `+obj1[info1]+`  
             </li>
        </ul>`
    }
};



let btn3 = document.getElementById('btn3');
let div3 = document.getElementById('div3');

 let obj2 = [
      {
        title: "shampoo",
        price: 23.4,
        category: "shower",
        barcode: "4043945"
    },
    {
        title: "cornflakes",
        price: 60,
        category: "food",
        barcode: "A-5455"
    },
    {
        title: "Cola",
        price: 80.5,
        category: "drinks",
        barcode: "B-986453"
    },
    {
        title: "Bamba red",
        price: 90.3,
        category: "food",
        barcode: "C-68645"
    },  
 
    
] 





btn3.onclick = function(){
    
    for(let i =0 ; i<obj2.length; i++){
        let h1 = document.createElement('h1');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');


        h1.innerHTML = obj2[i].title
        h2.innerHTML = obj2[i].price
        h3.innerHTML = obj2[i].category
        h4.innerHTML = obj2[i].barcode

        div3.appendChild(h1)
        div3.appendChild(h2)

        div3.appendChild(h3)
        div3.appendChild(h4)


   
   } 
        
}
