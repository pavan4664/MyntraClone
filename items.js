// let bagItems=[];

// displyItems();
// function  addToBag(itmesId)
// {
//     bagItems.push(itmesId );
// } 









// function displyItems(){
//     let itemCont=document.querySelector('.items-container');
//     let innerHTML='';
//     items.forEach(items=>{
//         innerHTML+=`
//         <div class="item-container">
//                 <img class="item-img"src="${items.image}" alt="item-image">
//                 <div class="rating">
//                     ${items.rating.stars} ★|${items.rating.count}
//                 </div>
//                 <div class="company-name">${items.company}</div>
//                 <div class="item-name">${items.item_name}</div>
//                 <div class="price">
//                     <span class="Current-Price">Rs.${items.current_Price}</span>
//                     <span class="Orignal">Rs.${items.original_price}</span> 
//                     <span class="discount">${items.discount_percentage}% OFF</span>
//                 </div>
//                 <button class="btn-add-bag" onclick="addTag() ${items.id}">Add to Bag </button>
//             </div>`



// });
// itemCont.innerHTML=innerHTML;




// }



let bagItems = [];

displayItems();

function addToBag(itemId) {
  bagItems.push(itemId);
  console.log("Bag items:", bagItems);
  displyaIcon();
}
function displyaIcon(){

  let bag=document.querySelector(".bag-count")
  if(bagItems.length>0 && bagItems.innerHTML!=bag.innerHTML){
  bag.innerHTML=bagItems.length;}
  else{
    bagItems.style.visibility='hidden';
  }
}

function displayItems() {
  const itemCont = document.querySelector('.items-container');
  let innerHTML = '';

  items.forEach(item => {
    innerHTML += `
      <div class="item-container">
        <img class="item-img" src="${item.image}" alt="item-image">

        <div class="rating">
          ${item.rating.stars} ★ | ${item.rating.count}
        </div>

        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>

        <div class="price">
          <span class="current-price">Rs.${item.current_price}</span>
          <span class="original-price">Rs.${item.original_price}</span>
          <span class="discount">${item.discount_percentage}% OFF</span>
        </div>

        <button class="btn-add-bag" onclick="addToBag('${item.id}')">
          Add to Bag
        </button>
      </div>
    `;
  });

  itemCont.innerHTML = innerHTML;
}
