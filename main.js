menu_list_array=["Chicken Tandoori Pizza,Veg Supreme Pizza,Paneer Tikka Pizza,Delux Veggie Pizza,Veg Extravangaza Pizza"];
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for (var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>'
    }
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;
    }
    function add_item(){
        var htmldata;
        var item=document.getElementById("add_item").value;
        menu_list_array.push(item);
        menu_list_array.sort();
        htmldata="<section class='cards'>"
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<div class="card">'+'<img src="http://127.0.0.1:5500/Pizzaria-C-79-master/images/pizza.png"/>'+menu_list_array[i];
        }
        htmldata=htmldata+"</section>"
        document.getElementById("display_addmenu").innerHTML=htmldata;
    }
