var usericon = document.querySelector("#user");
var login = document.querySelector(".loginform");
var cart = document.querySelector("#cart");
var cartview = document.querySelector(".cart-view");
var search = document.querySelector("#search");
var find = document.querySelector(".search"); 

var arr = [0,0,0];
var flag = 0;
search.addEventListener("click",function(){
    if(arr[1]==1){
        cartview.style.display = "none";
        arr[1] = 0;
    }
    if(arr[2]==1){
        login.style.display = "none";
        arr[2] = 0;
    }
    if(arr[0]==0){
        find.style.display = "block";
        arr[0] = 1;
    }
    else{
        find.style.display = "none";
        arr[0] = 0;
    }
})
cart.addEventListener("click",function(){
    if(arr[0]==1){
        find.style.display = "none";
        arr[0] = 0;
    }
    if(arr[2]==1){
        login.style.display = "none";
        arr[2] = 0;
    }
    if(arr[1]==0){
        cartview.style.display = "block";
        arr[1] = 1;
    }
    else{
        cartview.style.display = "none";
        arr[1] = 0;
    }
})
usericon.addEventListener("click", function(){
    if(arr[0]==1){
        find.style.display = "none";
        arr[0] = 0;
    }
    if(arr[1]==1){
        cartview.style.display = "none";
        arr[1] = 0;
    }
    if(arr[2]==0){
        login.style.display = "block";
        arr[2] = 1;
    }
    else{
        login.style.display = "none";
        arr[2] = 0;
    }
})
