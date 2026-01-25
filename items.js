let itemCont=document.querySelector('.items-container');
let items={
    item_img: '1.jpg',
    rating:{
        stars:4.5,
        numRew:1400,
    },
}

itemCont.innerHTML=` <div class="item-container">
                <img class="item-img"src="${items.item_img}" alt="item-image">
                <div class="rating">
                    ${items.rating.stars} ★|${items.rating.numRew}
                </div>
                <div class="company-name">Carlton London</div>
                <div class="item-name">Rhodium-plated CZ Floral </div>
                <div class="price">
                    <span class="Current-Price">Rs.606<span>
                    <span class="Orignal">Rs.1050</span> 
                    <span class="discount">42% OFF</span>
                </div>
                <button class="btn-add-bag">Add to Bag <button>
            </div>
`;
