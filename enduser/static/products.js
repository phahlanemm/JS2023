function loadExternalScript() {
    var script = document.createElement('script');
    script.src = './jquery.store.js'; // Replace with the path to your external script
    script.type = 'text/javascript';
    script.async = true;

    script.onload = function() {
        // The external script has been loaded and executed
        // You can now use its functionality
       // initExternalScript(); // Replace with a function from your external script
    };

    script.onerror = function() {
        // Handle any errors if the script fails to load
        console.error('Failed to load external script');
    };

    // Append the script element to the document's head
    document.head.appendChild(script);
}

// api url
const api_url =
"http://127.0.0.1:8000/api/products?format=json";

// Defining async function
async function getapi(url) {
//    try{



// console.log(data);
return new Promise((resolve, reject) => {
let headers = new Headers();
fetch(url, {
method: 'GET',
headers: headers,
})
.then((response) => {
if (!response.ok) {
throw new Error('Network response was not ok');
}
return response.json();
})
.then((data) => {
resolve(data);
show(data);
})
.catch((error) => {
reject(error);
});
});
// }catch(error){
//     console.error("Error:", error);
// }
// show(data);
}

function show(data) {
try{
     let products= '';     
     var pos = 0;   
for(let i = 0; i<data.length/4; i++){
products +=' <div class="row">' 
let j = 0;  
for(j=pos; j<data.length && j<pos+4; j++){ 

products += '<div class="product col-md-3" data-item="'+data[j].productscode+'">'
                   +' <div class="product-top">'
                    +'   <img src='+'"'+'./images'+data[j].productsimg+'"'+'>'
                    +'  <div class='+'"'+'overlay-right'+'"'+'>'
                        +'      <button type="button" class="btn btn-secondary" title="Quick Shop">'
                            +'      <i class="fa fa-eye"></i>'
                            +' </button>'

                            +' <button type="button" class="btn btn-secondary" title="Add to Wishlist">'
                                +'  <i class="fa fa-heart-o"></i>'
                                +' </button>'

                                +' <!-- <button type="button" class="btn btn-secondary" title="Add to Cart">'
                                    +' <i class="fa fa-shopping-cart"></i>'
                                    +'  </button> -->'
                                    +'  </div>'
                                    +' </div>'

                                    +' <div class="product-bottom text-center">'
                                        +' <i class="fa fa-star"></i>'
                                        +' <i class="fa fa-star"></i>'
                                        +' <i class="fa fa-star"></i>'
                                        +' <i class="fa fa-star"></i>'
                                        +'  <i class="fa fa-star-half-o"></i>'
                                        +'  <h3 style="font-family:Poppins; font-size: 18px;">'+data[j].productsdescription+'</h3>'
                                        +' <div class="product-description" data-name='+data[j].productsname +' data-price='+data[j].productsprice +' data-prodid='+data[j].idproducts+'>'

                                            +' <p class="product-price" style="font-size: 16px">R'+ data[j].productsprice+'</p>'
                                            +' <form class=add-to-cart action="./cart.html" method="post">'
                                                +'  <div>'
                                                    +'   <label for="qty-2">Quantity</label>'
                                                    +'           <input type="text" name="qty-2" id="qty-2" class="qty" value="1" />'
                                                    +'                           </div>'
                                                    +'                               <p><input type="submit" value="Add to cart" data-navigation-url="cart.html" class="btn" /></p>'
                                                    +' </form>'

                                                    +'  </div>'
                                                    +'    </div>'
                                                    +' </div>'

                                                    } 
                                                    pos = j;
                        products+='            </div>';
                                        } 

        
                                    //    console.log(products);
           document.getElementById('content').innerHTML = products;
        }catch(e){
        console.log(e);
    }
    loadExternalScript() ;
 }
        getapi(api_url);
                           
