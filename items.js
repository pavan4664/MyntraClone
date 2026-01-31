
let bagItems;
onLoad();

function onLoad(){
  let bagItemsStr=localStorage.getItem('bagItems');
  bagItems=bagItemsStr ? JSON.parse(bagItemsStr): [];
  // let bag
  displayItems();
  displyaIcon();


}



function addToBag(itemId) {
  bagItems.push(itemId);
  console.log("Bag items:", bagItems);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displyaIcon();

}
function displyaIcon(){

  let bag=document.querySelector(".bag-count")
  if(bagItems.length>0){
    bag.style.visibility='visible';
   bag.innerHTML=bagItems.length;
  }
  else{
    bag.style.visibility='hidden';
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
    `
  });

  itemCont.innerHTML = innerHTML;
}
