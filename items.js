let itemCont=document.querySelector('.items-container');
let items={
    item_img: '1.jpg',
    rating:{
        stars:4.5,
        numRew:1400,
    },
    company_name:'Carlton London',
    item_name:'Rhodium-plated CZ Floral'
}

itemCont.innerHTML=` <div class="item-container">
                <img class="item-img"src="${items.item_img}" alt="item-image">
                <div class="rating">
                    ${items.rating.stars} ★|${items.rating.numRew}
                </div>
                <div class="company-name">${items.company_name}</div>
                <div class="item-name">${items.item_name}</div>
                <div class="price">
                    <span class="Current-Price">Rs.606<span>
                    <span class="Orignal">Rs.1050</span> 
                    <span class="discount">42% OFF</span>
                </div>
                <button class="btn-add-bag">Add to Bag <button>
            </div>
`;
