dishArray=["Sabudana Vada","Sabudana Ki Khichadi","Bafla","N.Y. Style Cheese Cake"];

function getMenu(){
    dishArray.sort();
    var list="<ol class='menuList'>";
    for(var i=0; i<dishArray.length; i++){
        list=list+"<li>"+dishArray[i]+"</li>";
    }
    list=list+"</ol>";
    document.getElementById("display_menu").innerHTML=list;
    document.getElementById("add_dishes").style.display="none";
}
function addDishes(){
    document.getElementById("add_dishes").style.display="block";
}
function addItem(){
    var item=document.getElementById("item").value;
    dishArray.push(item);
    getMenu();
}