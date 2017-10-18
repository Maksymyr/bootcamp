$(function(){ 
var  goods = {};
$.getJSON("https://spreadsheets.google.com/feeds/list/1dAUB2xc-xc7-IsXOuRlQyFcQSB1MvQ4TSw1RFtHcRtk/od6/public/values?alt=json", function(data) {
        
data = data['feed']['entry'];

for (var key in data) {
            var id = data[key]['gsx$id']['$t'];
            var name = data[key]['gsx$name']['$t'];
            var cost = data[key]['gsx$cost']['$t'];
            var description = data[key]['gsx$description']['$t'];
            var image = data[key]['gsx$img']['$t'];
goods[id] = {};
            goods[id]['name'] = name;
            goods[id]['cost'] = cost;
            goods[id]['description'] = description;
            goods[id]['image'] = image;



}
Show()
});
 function Show(){
var str='';

for(var key in goods){ 
str+="<div class='tovar'>\
<h3>"+goods[key]['name']+"</h3>\
<img src='"+goods[key]['image']+"'>\
</div>"
console.log(goods[key]);
}



$('#tov').html(str)
}



})	