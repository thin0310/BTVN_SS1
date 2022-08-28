//Tìm kiêm
{
const search_item = document.getElementById('search');
const information = document.querySelectorAll('.information');
search_item.addEventListener('keyup', seachItem);

function seachItem() {
  let valueItem = search_item.value.toLowerCase();
  Array.from(information).forEach(function (ele) {
    let nameItem = ele.querySelector('h4').textContent;
    if (nameItem.toLowerCase().indexOf(valueItem) !== -1) {
      ele.style.display = 'flex';
    }
    else {
      ele.style.display = 'none';
    }
  })
}


}





//Thêm
{
var data =[]
function add(e){
    event.preventDefault();
    var item_name = document.querySelector('#name').value
    var item_phone = document.querySelector('#phone').value
    
    var Item = {
        name  :item_name,
        phone :item_phone,
       

    }
    data.push(Item)
    render()
    
    
}
function render(){
    table = `
    <div class="information">
    <div class="if__name"> <h4>Alice</h4></div>
    <div class="if__phone"><h4>(816)-403-5456</h4></div>
       
   </div>
   <div class="information">
       <div class="if__name"> <h4>Bob</h4></div>
       <div class="if__phone"><h4>(572)-566-2397</h4></div>
       
   </div>
   <div class="information">
       <div class="if__name"><h4>Cris</h4></div>
       <div class="if__phone"><h4>(864)-309-4841</h4></div>
       
       
   </div>
   <div class="information">
       <div class="if__name"><h4>Daniel</h4></div>
       <div class="if__phone"><h4>(816)-403-5456</h4></div>    
   </div>
  `
  for( let i = 0; i < data.length; i++){
    table += `
  <div class="information">
  <div class="if__name"> <h4>${data[i].name}</h4></div>
  <div class="if__phone"><h4>${data[i].phone}</h4></div>
     
 </div>
  `
  }
  document.querySelector("main").innerHTML = table
}



}

















