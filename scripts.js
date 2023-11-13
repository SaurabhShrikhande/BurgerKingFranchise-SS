function randomid () {
  return Math.floor(Math.random() * 5000) +2000;
}

function randomtime(){
    return Math.floor(Math.random()*1000) + 100;
}

document.getElementById("order")
.addEventListener("click", function(){
const selecteditem = [];
const checkbox = document.getElementsByName("fooditem");

checkbox.forEach(element => {
   if(element.checked){
    selecteditem.push(element.value);
   }
});
// console.log(selecteditem);
if(selecteditem.length === 0){
    alert("Plese select at least one item");
    return;
}

const orderbtn = document.getElementById("order");
orderbtn.disabled =true;
const foodimg = document.getElementById("imgf");
const orderidele = document.getElementById("orderid");
const orderidval = document.getElementById("orderval");

orderidele.style.display = "none";
foodimg.style.display = "none";

const prom = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve();
    },randomtime())

});
prom.then(function(){
    const orderid  = randomid();
    orderidval.innerText = orderid;
    orderidele.style.display = "block";
  
    const foodtoshow = selecteditem[Math.floor(Math.random() * selecteditem.length)];
  
    switch(foodtoshow){
        case 'burger' :
            foodimg.src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                   break;
        case 'fries' :
            foodimg.src = 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                 break;
        case 'drink'  :
            foodimg.src = 'https://plus.unsplash.com/premium_photo-1675949335489-f778abf84197?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
            break;  
            default :
            foodimg.src = 'https://media.istockphoto.com/id/1185465221/photo/chilly-chicken.jpg?s=612x612&w=is&k=20&c=XU6Yqk-mqlG7icGBSB_APdlRnUdScRpqUQTUnUDY86M='       
      
        }
          foodimg.style.display = "block";
          orderbtn.disabled = false;

})


});

