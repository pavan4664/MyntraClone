let itemCont=document.querySelector('.items-container');
let innerHTML='';

items.forEach(items=>{
    innerHTML+=`
    <div class="item-container">
                <img class="item-img"src="${items.image}" alt="item-image">
                <div class="rating">
                    ${items.rating.stars} ★|${items.rating.count}
                </div>
                <div class="company-name">${items.company}</div>
                <div class="item-name">${items.item_name}</div>
                <div class="price">
                    <span class="Current-Price">Rs.${items.current_Price}<span>
                    <span class="Orignal">Rs.${items.Orignal}</span> 
                    <span class="discount">${items.discount_percentage}% OFF</span>
                </div>
                <button class="btn-add-bag">Add to Bag <button>
            </div>`



});
itemCont.innerHTML=innerHTML;
// let items={
//     item_img: '1.jpg',
//     rating:{
//         stars:4.5,
//         numRew:1400,
//     },
//     company_name:'Carlton London',
//     item_name:'Rhodium-plated CZ Floral',
//     Current_Price: 606,
//     Orignal:1045,
//     discount:42,
    

// }

