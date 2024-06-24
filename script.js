// U63166005
// Coding Challenge #13

addEventListener("DOMContentLoaded", (event) => {  // ensures DOM is loaded before listening for dom elements

async function call(data){
    
    document.getElementById("loadingMessage").textContent=`Loading... please be patient`    // Displays loading message immediately

    try {                                                                                   // Then tries to fetch API data
        await new Promise(resolve => setTimeout(resolve, 2000));                            // 2 second delay to show loading message
        const response = await fetch("https://www.course-api.com/react-store-products")     // waits for API content to load before proceeding
        if(!response.ok){                                                                   // error message if not successful
            throw new Error("There was an issue with your request.")
        }
        const data = await response.json()
        .then((data)=>{                                       // function to place content into html containers
            document.getElementById("productName").textContent=`${data[1].name}`;
            document.getElementById("productPicture").src=`${data[1].image}`;
            document.getElementById("productPicture").width = "400";
            document.getElementById("productDescription").textContent=`${data[1].description}`;
            document.getElementById("productPrice").textContent=`Price: $${data[1].price}`;
            })  
        }   
    finally {
        document.getElementById("loadingMessage").textContent = ""; // Clears error message no matter what
    }
}

const btn = document.querySelector("button")    // button to call previous functions
btn.addEventListener("click",function(){
    call()
})

}) // closes dom content function