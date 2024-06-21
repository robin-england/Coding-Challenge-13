// U63166005
// Coding Challenge #13

addEventListener("DOMContentLoaded", (event) => {  // ensures DOM is loaded before listening for dom elements


function call(data){
    const request = fetch("https://www.course-api.com/react-store-products").then((response)=>{ // function to retrieve API
        return response.json()
    })
    
    .then((data)=>{             // function to place content into html containers
        document.getElementById("productName").textContent=`${data[1].name}`;
        document.getElementById("productPicture").src=`${data[1].image}`;
        document.getElementById("productPicture").width = "400";
        document.getElementById("productDescription").textContent=`${data[1].description}`;
        document.getElementById("productPrice").textContent=`Price: $${data[1].price}`;
    })
}

const btn = document.querySelector("button")    // button to call previous functions
btn.addEventListener("click",function(){
    call()
})

}) // closes dom content function