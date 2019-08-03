
//object constructor
function Item(title,des,price,image,category){
    this.title=title;
    this.description=des;
    this.price=price;
    this.image=image;
    this.category=category;
    this.color='red';
}


function saveItem(){
  //get sate
  var title = $("#txtTitle").val();
  var des = $("#txtDescription").val();
  var price = $("#txtPrice").val();
  var image = $("#txtImage").val();
  var category = $("#txtCat").val();

  console.log(title,des,price,image,category);

  //create object
var theItem = new Item(title,des,price,image,category);
console.log(theItem);

  //save object to back end
}

function init(){
  console.log("Init admin page");

  //initialization

  //events
  $("#btnSave").click(saveItem);
}




window.onload = init;