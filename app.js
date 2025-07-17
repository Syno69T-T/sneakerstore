
const products = [
  {
    id: 1,
    title: "AIR FORCE",
    price: 249,
    desc: "The Air Force 1 was created by designer Bruce Kilgore and was the first basketball shoe to use the Nike Air technology.",
    img: "./img/Product/air.png",
    colors: [
      { code: "black", img: "./img/Product/air.png" },
      { code: "darkblue", img: "./img/Product/air2.png" }
    ],
  },
  {
    id: 2,
    title: "JORDAN",
    price: 299,
    desc: "The Air Jordan is a classic sneaker loved by many.",
    img: "./img/Product/jordan.png",
    colors: [
      { code: "lightgray", img: "./img/Product/jordan.png" },
      { code: "green", img: "./img/Product/jordan2.png" }
    ],
  },
  {
    id: 3,
    title: "BLAZER",
    price: 179,
    desc: "Blazer sneakers provide timeless style and comfort.",
    img: "./img/Product/blazer.png",
    colors: [
      { code: "lightgray", img: "./img/Product/blazer.png" },
      { code: "green", img: "./img/Product/blazer2.png" }
    ],
  },
  {
    id: 4,
    title: "CRATER",
    price: 159,
    desc: "Crater shoes are eco-friendly and stylish.",
    img: "./img/Product/crater.png",
    colors: [
      { code: "black", img: "./img/Product/crater.png" },
      { code: "lightgray", img: "./img/Product/crater2.png" }
    ],
  },
  {
    id: 5,
    title: "HIPPIE",
    price: 159,
    desc: "Hippie style shoes with a retro vibe.",
    img: "./img/Product/hippie.png",
    colors: [
      { code: "gray", img: "./img/Product/hippie.png" },
      { code: "black", img: "./img/Product/hippie2.png" }
    ],
  },
  {
    id: 6,
    title: "PHANTOM",
    price: 329,
    desc: "Phantom offers futuristic design and ultimate comfort.",
    img: "./img/Product/phantom.png",
    colors: [
      { code: "black", img: "./img/Product/phantom.png" }
    ],
  },
];

// Default chosen product
let chosenProduct = products[0];

// Product detail elements
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Slide wrapper
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Update chosen product
    chosenProduct = products[index];

    // Update product details
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "RM" + chosenProduct.price;
    currentProductDesc.textContent = chosenProduct.desc;
    currentProductImg.src = chosenProduct.colors[0].img;

    // Update colors UI
    currentProductColors.forEach((colorDiv, colorIndex) => {
      if (chosenProduct.colors[colorIndex]) {
        colorDiv.style.backgroundColor = chosenProduct.colors[colorIndex].code;
        colorDiv.style.display = "inline-block";
      } else {
        colorDiv.style.display = "none";
      }
    });

    // Reset sizes styles on product change
    currentProductSizes.forEach(size => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
  });
});

// Change product image when clicking on color
currentProductColors.forEach((colorDiv, colorIndex) => {
  colorDiv.addEventListener("click", () => {
    if (chosenProduct.colors[colorIndex]) {
      currentProductImg.src = chosenProduct.colors[colorIndex].img;
    }
  });
});

// Size selection styling
currentProductSizes.forEach(sizeDiv => {
  sizeDiv.addEventListener("click", () => {
    currentProductSizes.forEach(size => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    sizeDiv.style.backgroundColor = "black";
    sizeDiv.style.color = "white";
  });
});

// Payment popup controls
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});