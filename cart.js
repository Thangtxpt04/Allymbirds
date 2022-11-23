
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const cartsList = $(".carts__list");



const productsCartList = [
    {
        img: "./assets/img/shoes/sneaker-01.webp",
        name: "Giày Sneaker Adidas Ultra4d “Hurricanes”",
        size: "Size: 42",
        price: "1.349.999đ",
        color: "Màu: Xanh lục",
        
    },
    {
        img: "./assets/img/shoes/nike-01.webp",
        name: "Giày Sneaker Adidas Ultra4d “Hurricanes”",
        size: "Size: 42",
        price: "1.349.999đ",
        color: "Màu: Xanh lục",
    },
    {
        img: "./assets/img/shoes/nike-01.webp",
        name: "Giày Sneaker Adidas Ultra4d “Hurricanes”",
        size: "Size: 42",
        price: "1.349.999đ",
        color: "Màu: Xanh lục",
    },
    {
        img: "./assets/img/shoes/nike-01.webp",
        name: "Giày Sneaker Adidas Ultra4d “Hurricanes”",
        size: "Size: 42",
        price: "1.349.999đ",
        color: "Màu: Xanh lục",
    }
]

function render() {
    var htmls = productsCartList.map((productsCartItem, index) => {
        return `
        <li class="carts__item">
            <input type="checkbox" name="" id="" class ="carts__item-input">
            <img src="${productsCartItem.img}" alt="" class="carts__item-img">
            <div class="carts__item-body">
                <h3 class="cart__item-name">${productsCartItem.name}</h3>
                <div class="cart__item-infor">
                    <div class="cart__item-size">
                        ${productsCartItem.size}
                    </div>
                    <div class="cart__item-price">
                        ${productsCartItem.price}
                    </div>
                </div>
                <div class="cart__item-infor">
                    <div class="cart__item-color">
                        ${productsCartItem.color}
                    </div>
                    <div class="cart__item-fav">
                        Thêm vào danh sách yêu thích
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
                <div class="cart__item-infor">
                    <div class="product__amout">
                        <h3 class="product__amout-heading">
                            Số lượng: 1
                        </h3>
                        
                    </div>

                    <div class="cart__item-clear">
                        <span>Xoá khỏi</span>
                        <i class="fa-regular fa-trash-can"></i>
                    </div>

                </div>
            </div>  
        </li>
        ` 
    } )
    cartsList.innerHTML = htmls.join('');
}

render();

const cartAllBtn = $(".carts__all-input");
const cartListItemInput = $$(".carts__item-input");

const isCheck = false;

cartAllBtn.onclick = function (){
    if(cartAllBtn.checked == true)
    {
        for(const cartItemInput of cartListItemInput){
            cartItemInput.checked = true;
        }
    }
    else
    {
        for(const cartItemInput of cartListItemInput){
            cartItemInput.checked = false;
        }
    }
}

const payBtn = $('.product__pay-btn');
const modal = $('.modal');
function showModal()
{
    modal.classList.add('open');
}

payBtn.addEventListener('click', showModal);

