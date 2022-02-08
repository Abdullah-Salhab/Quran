var counter=1;

var color_number=0;

function next() {

    if (counter<624) {

    counter++;

    if(counter<10)
    document.getElementById("images").innerHTML="<img id=image src=images/000"+counter+".jpg>";
    
    else if(counter<65)
    document.getElementById("images").innerHTML="<img id=image src=images/00"+counter+".jpg>";

    else if(counter<97)
    document.getElementById("images").innerHTML="<img src=images/00"+counter+".jpg>";

    else 
    document.getElementById("images").innerHTML="<img src=images/0"+counter+".jpg>";

    }
    else
    alert("!! القران انتهى هذه اخر صفحة ");

}

function prev() {

    if(counter==1)
    alert("!! هذه اول صفحة من القران ");

    else{
    counter--;

    if(counter<10)
    document.getElementById("images").innerHTML="<img id=image src=images/000"+counter+".jpg>";

    else if(counter<65)
    document.getElementById("images").innerHTML="<img id=image src=images/00"+counter+".jpg>";

    else if(counter<97)
    document.getElementById("images").innerHTML="<img src=images/00"+counter+".jpg>";
    
    else if(counter<626)
    document.getElementById("images").innerHTML="<img src=images/0"+counter+".jpg>";

    }
}

function search() {

    var val=document.getElementById("quree").value;

    document.getElementById("quree").value="";

    var result=0;

    position="";

    if (val==1) {
        result=1;
    }
    else if (val<=601 && val>0) {
        result=Math.ceil((val-1)/20);
    }
    else if (val==602 || val==603 || val==604) {
        result=30;
    }
    if (val%2==0) {
        position="اليسار";
    }
    else{
        position="اليمين";
    }
    if (result) {
        alert(" رقم الجزء :  "+result +" وتقع في الصفحة "+position);
        get_page(val);
    }
    else{
        if (val=="") {
            alert("لم تدخل رقم  الرجاء ادخال رقم ")
        }
        else { 
            if(val>604){
            alert(" رقم الصفحة غير صحيح أكبر من عدد صفحات القران !!" );

            alert(val+"  أكبر من 604 وهذا غير صحيح");}

            else if(val==0) 
            alert("لا يوجد صفحة رقمها 0 وهذا غير صحيح");

            else{
            alert("!! رقم الصفحة غير صحيح لا يوجد عدد صفحات بالسالب " );
            }
        }
    }
}

function get_page(val) {

    show_main();

    var page=0;

    page=parseInt(val)+3;

    if (val<10) 
    document.getElementById("images").innerHTML="<img id=image src=images/000"+page+".jpg>";

    else if(val<65)
    document.getElementById("images").innerHTML="<img id=image src=images/00"+page+".jpg>";

    else if(val<97)
    document.getElementById("images").innerHTML="<img src=images/00"+page+".jpg>";

    else 
    document.getElementById("images").innerHTML="<img src=images/0"+page+".jpg>";

    counter=page;

}

function show_search() {

    document.getElementById("search").style.display="block";

    document.getElementById("fuhras").style.display="none";

    document.getElementById("all").style.display="none";

    document.getElementById("brightnes").style.display="none";

}

function show_main() {

    document.getElementById("search").style.display="none";

    document.getElementById("fuhras").style.display="block";

    document.getElementById("all").style.display="block";

    document.getElementById("brightnes").style.display="block";
    
}

function get_page_image(val) {

    var page=0;

    page=parseInt(val)+3;

    if (val<10) 
    document.getElementById("images").innerHTML="<img id=image src=images/000"+page+".jpg>";

    else if(val<65)
    document.getElementById("images").innerHTML="<img id=image src=images/00"+page+".jpg>";

    else if(val<97)
    document.getElementById("images").innerHTML="<img src=images/00"+page+".jpg>";

    else 
    document.getElementById("images").innerHTML="<img src=images/0"+page+".jpg>";

    counter=page;

    close_fuhras();

}

function close_fuhras(){

    document.getElementById("fuhras_content").style.display="none";

    document.getElementById("open_fuhras").style.display="block";

    document.getElementById("close_fuhras").style.display="none";
    
}

function open_fuhras(){

    document.getElementById("fuhras_content").style.display="block";

    document.getElementById("close_fuhras").style.display="block";

}

function changebright() {

    var bright=document.getElementById("rangebright").value;

    var color= 'rgb(41, 41, 41,0.' + bright +')';

    document.body.style.backgroundColor=color;

    document.getElementById("brightnes").style.backgroundColor=color;

    document.getElementById("result").innerHTML=parseInt( bright/60);

}


function close_brightnes() {

    document.getElementById("brightnes_range").style.display="none";
    
}

function show_brightnes_range() {

    document.getElementById("brightnes_range").style.display="block";

}

function change_color() {

    color_number++;

    if (color_number%2!==0) {
    document.getElementById("next").style.background="green";

    document.getElementById("next").style.color="white";

    document.getElementById("prev").style.background="green";

    document.getElementById("prev").style.color="white";

    document.getElementById("change_color").style.background="green";

    document.getElementById("change_color").style.color="white";

    document.getElementById("show_range").style.background="green";

    document.getElementById("show_range").style.color="white";

    document.getElementById("show").style.background="green";

    document.getElementById("show").style.color="white";

    document.getElementById("fuhras").style.background="green";

    document.getElementById("fuhras").style.color="white";

    }


    else{

    document.getElementById("next").style.
    background=" linear-gradient(rgb(104, 104, 104),white,white,rgb(104, 104, 104))";

    document.getElementById("next").style.color="black";

    document.getElementById("prev").style.
    background=" linear-gradient(rgb(104, 104, 104),white,white,rgb(104, 104, 104))";

    document.getElementById("prev").style.color="black";

    document.getElementById("change_color").style.
    background=" linear-gradient(rgb(104, 104, 104),white,white,rgb(104, 104, 104))";

    document.getElementById("change_color").style.color="black";

    document.getElementById("show_range").style.
    background=" linear-gradient(rgb(104, 104, 104),white,white,rgb(104, 104, 104))";

    document.getElementById("show_range").style.color="black";

    document.getElementById("show").style.
    background=" linear-gradient(rgb(104, 104, 104),white,white,rgb(104, 104, 104))";

    document.getElementById("show").style.color="black";

    document.getElementById("fuhras").style.
    background=" linear-gradient(rgb(104, 104, 104),white,white,rgb(104, 104, 104))";

    document.getElementById("fuhras").style.color="black";

    }
}
/*   15 hours to do this java script code

the programmer is : Abdullah Salahb   5-6/2020

*/