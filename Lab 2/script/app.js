
var catalog = [];

function getCatalog(){
  this.catalog = [
    {
        title: "first item",
        description: "This is the long decription of the item",
        price: 19.99,
        image: "https://cdn.shopify.com/s/files/1/0496/1029/files/Freesample.svg?5153",
        catagory: "cat 1"
    },
    {
        title: "second item",
        description: "This is just another description",
        price: 9.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnLotZiQQ_CgDlbv7w12SD1uwCItnwhtZ-h8WljFwFJ_-YhLVcA",
        catagory: "cat 2"
    }
  ];
}

function displayCatalog(){

// get the reference to UL
var ul = $("#catalog");

// for every item on the catalog array
for(let i=0; i< catalog.length; i++){
  var item = catalog[i];


// create an LI
var li = `
<div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.description}</p>
    <a href="#" class="btn btn-primary">Add to Cart</a>
    <h6>Price: ${item.price}</h6>
  </div>
</div>`;

// add the li to ul
ul.append(li);

}
}
 




function init(){
  console.log("Init Catalog page");

  getCatalog();
  displayCatalog();
}



window.onload = init;