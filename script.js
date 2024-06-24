// U63166005
// Coding Challenge #13

let count       // Defines count without assigning initial value

addEventListener("DOMContentLoaded", (event) => {  // ensures DOM is loaded before listening for dom elements

async function call(count){
    
    document.getElementById("loadingMessage").textContent=`Loading... please be patient`    // Displays loading message immediately

    try {                                                                                   // Then tries to fetch API data
        await new Promise(resolve => setTimeout(resolve, 50));                            // 2 second delay to show loading message
        const response = await fetch("https://www.course-api.com/react-store-products")     // waits for API content to load before proceeding
        if(!response.ok){                                                                   // error message if not successful
            throw new Error("There was an issue with your request.")
        }
        const data = await response.json()
        .then((data)=>{                                       // function to place content into html containers
            document.getElementById("productName").textContent=`${data[count].name}`;
            document.getElementById("productPicture").src=`${data[count].image}`;
            document.getElementById("productPicture").width = "400";
            document.getElementById("productDescription").textContent=`${data[count].description}`;
            document.getElementById("productPrice").textContent=`Price: $${data[count].price}`;
            })
        .catch((error)=>{
            console.log(error);
            alert("Sorry, there was an error. Try again later.")
            })
        }   
    finally {
        document.getElementById("loadingMessage").textContent = ""; // Clears error message no matter what
    }
}

const previousBtn = document.getElementById("previous")    // button to call previous item
previousBtn.addEventListener("click",function(){
    count = (count > 0) ? --count : 21                      // count goes down by 1, goes to max value when at zero
    call(count)
})

const nextBtn = document.getElementById("next")    // button to call next item
nextBtn.addEventListener("click",function(){
    count = (count < 21) ? ++count : 0                      // count goes up by 1, goes to zero when at max value
    call(count)
})

}) // closes dom content function