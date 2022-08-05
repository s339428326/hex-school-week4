"use strict";

//header RWD phone menu downList
var menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", function (e) {
  console.log("click");
  var downList = document.querySelector(".down-list");
  downList.classList.toggle("down-list-active");
}); //checkbox style by Button tag
// function checkbox() {
//   const menuBtn = document.querySelector(".menu");
//   const downList = document.querySelector(".down-list");
//   downList.classList.toggle("down-list-active");
// }
//page1 item hover style

function page1() {
  //ul
  var items = document.querySelector(".items"); //each li

  var list = document.querySelectorAll(".items li"); //Now page active

  var NowPage = document.querySelector(".item-active"); //mouse hover ul listener

  items.addEventListener("mouseover", function (e) {
    //mouse target
    var target = e.target.parentElement; //if target == li

    if (target.classList.contains("item") === true) {
      //active remove and mouse target add class active
      list.forEach(function (item) {
        item.classList.remove("item-active");
        target.classList.add("item-active");
      });
    }
  }); //mouse move out ul

  items.addEventListener("mouseout", function (e) {
    list.forEach(function (item) {
      item.classList.remove("item-active");
    });
    NowPage.classList.add("item-active");
  });
} //-----------Page1 RWD card-list pages----------
// function cardList() {
//   let html = "";
//   // Enter all product count there
//   const productCount = 12;
//   // Enter each page view count
//   const pageProductCount = 12;
//   for (let i = 1; i <= productCount; i++) {
//     productList.push({
//       img: `./assets/images/product-${i}.png`,
//       alt: `product-${i}`,
//     });
//   }
//   // First page input
//   for (let i = 0; i < pageProductCount; i++) {
//     html += `
//     <li class="product-card">
//       <a href="#"
//       ><img src="${productList[i].img}" alt="${productList[i].alt}"
//       /></a>
//       <div class="product-titles">
//         <p class="product-number">BJ41600S</p>
//         <p class="product-price">NTD3,490</p>
//       </div>
//       <div class="color-boxs color1"></div>
//       <div class="color-boxs color2"></div>
//     </li>
//     `;
//   }
//   return html;
// }
// function pages() {
//   let newHtml = cardList();
//   const productCards = document.querySelector(".product-cards");
//   productCards.innerHTML += newHtml;
// }
// pages();
//


function cardHtml(width) {
  var html = "";

  if (width <= 414) {
    return html;
  }

  if (width <= 991) {
    return html;
  }

  if (width > 991) {
    return html;
  }
} //--------------------------------------------
//# sourceMappingURL=all.js.map
