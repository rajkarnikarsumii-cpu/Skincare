/* =========================
   LUMORA PRODUCT DETAIL
========================= */


/* =========================
   PRODUCT DATABASE
========================= */

const productData = {


    /* =========================
       SERUMS
    ========================= */

    "Hydrating Serum": {

        price: "$34",

        type: "HYDRATION",

        images: [
            "images/hydratingserum.jpeg"
        ],

        description:
            "A lightweight serum designed to replenish moisture and leave your skin looking fresh and luminous.",

        benefits: [
            "Deep hydration",
            "Boosts natural glow",
            "Suitable for all skin types"
        ],

        ingredients: [
            "Hyaluronic Acid",
            "Aloe Vera",
            "Glycerin"
        ]

    },


    "Radiance Serum": {

        price: "$38",

        type: "RADIANCE",

        images: [
            "images/radianceserum.jpeg"
        ],

        description:
            "A brightening serum that helps create a naturally luminous and refreshed complexion.",

        benefits: [
            "Brightens dull skin",
            "Improves skin texture",
            "Natural-looking glow"
        ],

        ingredients: [
            "Niacinamide",
            "Vitamin C",
            "Aloe Vera"
        ]

    },


    "Dewy Glow Serum": {

        price: "$42",

        type: "GLOW",

        images: [
            "images/dewyglowserum.jpeg"
            
        ],

        description:
            "A silky serum made to give tired-looking skin a soft, healthy and dewy appearance.",

        benefits: [
            "Creates dewy skin",
            "Smooths skin",
            "Boosts radiance"
        ],

        ingredients: [
            "Hyaluronic Acid",
            "Vitamin E",
            "Squalane"
        ]

    },


    "Calm Barrier Serum": {

        price: "$36",

        type: "CALM",

        images: [
            "images/calmserum.jpeg",
          
        ],

        description:
            "A calming serum designed to support the skin barrier while keeping the complexion soft and comfortable.",

        benefits: [
            "Supports skin barrier",
            "Calms the skin",
            "Lightweight hydration"
        ],

        ingredients: [
            "Ceramides",
            "Panthenol",
            "Aloe Vera"
        ]

    },


    "Vitamin Glow Serum": {

        price: "$40",

        type: "VITAMIN GLOW",

        images: [
            "images/vitaminserum.jpeg"
        ],

        description:
            "A refreshing vitamin-rich serum that helps create a brighter and more radiant complexion.",

        benefits: [
            "Boosts radiance",
            "Refreshes skin",
            "Helps smooth texture"
        ],

        ingredients: [
            "Vitamin C",
            "Vitamin E",
            "Glycerin"
        ]

    },


    /* =========================
       CLEANSERS
    ========================= */

    "Cloud Cleanser": {

        price: "$28",

        type: "GENTLE CARE",

        images: [
            "images/cloudcleanser.jpeg"
        ],

        description:
            "A soft and gentle cleanser that removes everyday impurities without leaving the skin feeling dry.",

        benefits: [
            "Gentle cleansing",
            "Removes impurities",
            "Keeps skin soft"
        ],

        ingredients: [
            "Aloe Vera",
            "Glycerin",
            "Chamomile"
        ]

    },


    "Milky Face Cleanser": {

        price: "$30",

        type: "BALANCE",

        images: [
            "images/milkycleanser.jpeg"
        ],

        description:
            "A creamy cleanser that gently cleans the skin while helping maintain its natural balance.",

        benefits: [
            "Gentle formula",
            "Maintains moisture",
            "Fresh feeling skin"
        ],

        ingredients: [
            "Milk Extract",
            "Glycerin",
            "Jojoba Oil"
        ]

    },


    "Blueberry Foam Cleanser": {

        price: "$29",

        type: "FRESH FOAM",

        images: [
            "images/blueberrycleanser.jpeg"
        ],

        description:
            "A soft foaming cleanser that refreshes the skin and leaves it feeling clean and comfortable.",

        benefits: [
            "Refreshing cleanse",
            "Soft foam",
            "Helps remove excess oil"
        ],

        ingredients: [
            "Blueberry Extract",
            "Aloe Vera",
            "Glycerin"
        ]

    },


    "Soft Balance Cleanser": {

        price: "$31",

        type: "BALANCE",

        images: [
            "images/softcleanser.jpeg"
        ],

        description:
            "A gentle everyday cleanser created to leave the skin feeling balanced, soft and refreshed.",

        benefits: [
            "Daily cleansing",
            "Maintains skin balance",
            "Soft finish"
        ],

        ingredients: [
            "Green Tea",
            "Aloe Vera",
            "Glycerin"
        ]

    },


    "Aqua Purity Cleanser": {

        price: "$27",

        type: "PURITY",

        images: [
            "images/aquacleanser.jpeg"
        ],

        description:
            "A refreshing aqua cleanser that gently removes dirt while keeping skin feeling hydrated.",

        benefits: [
            "Fresh feeling",
            "Gentle cleansing",
            "Light hydration"
        ],

        ingredients: [
            "Aqua Extract",
            "Chamomile",
            "Glycerin"
        ]

    },


    /* =========================
       CREAMS
    ========================= */

    "Radiance Cream": {

        price: "$40",

        type: "RADIANCE",

        images: [
            "images/radiancecream.jpeg"
        ],

        description:
            "A nourishing cream that gives your skin lasting moisture and a smooth radiant finish.",

        benefits: [
            "Long-lasting moisture",
            "Softens skin",
            "Healthy glow"
        ],

        ingredients: [
            "Shea Butter",
            "Niacinamide",
            "Ceramides"
        ]

    },


    "Cloud Moisture Cream": {

        price: "$39",

        type: "MOISTURE",

        images: [
            "images/cloudcream.jpeg"
        ],

        description:
            "A soft moisture cream that wraps the skin in lightweight hydration without feeling heavy.",

        benefits: [
            "Deep moisture",
            "Soft skin",
            "Lightweight texture"
        ],

        ingredients: [
            "Hyaluronic Acid",
            "Shea Butter",
            "Glycerin"
        ]

    },


    "Dewy Barrier Cream": {

        price: "$44",

        type: "DEWY SKIN",

        images: [
            "images/dewycream.jpeg"
        ],

        description:
            "A rich yet silky cream designed to support the skin barrier and create a naturally dewy finish.",

        benefits: [
            "Supports skin barrier",
            "Creates dewy finish",
            "Long-lasting hydration"
        ],

        ingredients: [
            "Ceramides",
            "Squalane",
            "Shea Butter"
        ]

    },


    "Silky Night Cream": {

        price: "$45",

        type: "NIGHT CARE",

        images: [
            "images/silkycream.jpeg"
        ],

        description:
            "A silky night cream that helps replenish moisture while you sleep.",

        benefits: [
            "Overnight hydration",
            "Softens skin",
            "Nourishing formula"
        ],

        ingredients: [
            "Peptides",
            "Shea Butter",
            "Vitamin E"
        ]

    },


    "Aqua Glow Cream": {

        price: "$41",

        type: "AQUA GLOW",

        images: [
            "images/aquacream.jpeg"
        ],

        description:
            "A fresh aqua cream that gives the skin a soft hydrated glow and comfortable finish.",

        benefits: [
            "Fresh hydration",
            "Natural glow",
            "Light texture"
        ],

        ingredients: [
            "Aloe Vera",
            "Hyaluronic Acid",
            "Glycerin"
        ]

    },


    /* =========================
       MISTS
    ========================= */

    "Glow Mist": {

        price: "$26",

        type: "FRESH GLOW",

        images: [
            "images/glowmist.jpeg",
            
        ],

        description:
            "A refreshing face mist that instantly gives skin a soft and hydrated feeling.",

        benefits: [
            "Instant refresh",
            "Light hydration",
            "Adds natural glow"
        ],

        ingredients: [
            "Rose Water",
            "Aloe Vera",
            "Glycerin"
        ]

    },


    "Hydra Cloud Mist": {

        price: "$25",

        type: "HYDRATION",

        images: [
            "images/hydracloudmist.jpeg"
        ],

        description:
            "A fine hydrating mist that refreshes the skin throughout the day.",

        benefits: [
            "Quick hydration",
            "Refreshing feel",
            "Easy to use"
        ],

        ingredients: [
            "Hyaluronic Acid",
            "Aloe Vera",
            "Coconut Water"
        ]

    },


    "Rose Dew Mist": {

        price: "$27",

        type: "ROSE DEW",

        images: [
            "images/rosemist.jpeg"
        ],

        description:
            "A delicate rose mist designed to refresh and give the skin a soft dewy appearance.",

        benefits: [
            "Refreshes skin",
            "Soft dewy finish",
            "Light hydration"
        ],

        ingredients: [
            "Rose Water",
            "Aloe Vera",
            "Vitamin E"
        ]

    },


    "Aqua Refresh Mist": {

        price: "$24",

        type: "REFRESH",

        images: [
            "images/aquamist.jpeg"
        ],

        description:
            "A cooling aqua mist perfect for giving tired skin an instant refreshing boost.",

        benefits: [
            "Instant refresh",
            "Cooling feel",
            "Light hydration"
        ],

        ingredients: [
            "Cucumber",
            "Aloe Vera",
            "Glycerin"
        ]

    },


    "Luminous Face Mist": {

        price: "$29",

        type: "LUMINOUS",

        images: [
            "images/luminousmist.jpeg"
        ],

        description:
            "A luminous face mist that helps bring out a soft, fresh-looking glow.",

        benefits: [
            "Boosts glow",
            "Refreshes makeup",
            "Hydrates skin"
        ],

        ingredients: [
            "Pearl Extract",
            "Rose Water",
            "Vitamin E"
        ]

    },


    /* =========================
       SUNSCREEN
    ========================= */

    "Daily Glow Sunscreen": {

        price: "$32",

        type: "PROTECTION",

        images: [
            "images/dailysunscreen.jpeg"
        ],

        description:
            "A lightweight daily sunscreen made to protect your skin while keeping it comfortable and glowing.",

        benefits: [
            "Daily protection",
            "Lightweight texture",
            "No heavy feeling"
        ],

        ingredients: [
            "Zinc Oxide",
            "Vitamin E",
            "Green Tea"
        ]

    },


    "Cloud SPF 50": {

        price: "$34",

        type: "SPF 50",

        images: [
            "images/cloudsunscreen.jpeg"
        ],

        description:
            "A soft lightweight SPF designed for comfortable everyday protection.",

        benefits: [
            "SPF 50 protection",
            "Lightweight finish",
            "Comfortable wear"
        ],

        ingredients: [
            "Zinc Oxide",
            "Vitamin E",
            "Aloe Vera"
        ]

    },


    "Dewy Shield SPF": {

        price: "$36",

        type: "DEWY PROTECTION",

        images: [
            "images/dewysunscreen.jpeg"
        ],

        description:
            "A daily SPF with a fresh dewy finish that leaves skin looking healthy and radiant.",

        benefits: [
            "Daily sun protection",
            "Dewy finish",
            "Hydrating feel"
        ],

        ingredients: [
            "Zinc Oxide",
            "Squalane",
            "Vitamin E"
        ]

    },


    "Aqua Sun Veil": {

        price: "$31",

        type: "LIGHTWEIGHT",

        images: [
            "images/aquasunscreen.jpeg"
        ],

        description:
            "A light aqua sunscreen that blends comfortably into the skin for everyday use.",

        benefits: [
            "Lightweight texture",
            "Daily protection",
            "Fresh finish"
        ],

        ingredients: [
            "Mineral Filters",
            "Aloe Vera",
            "Green Tea"
        ]

    },


    "Radiant SPF 50": {

        price: "$35",

        type: "RADIANT SPF",

        images: [
            "images/radiantsunscreen.jpeg"
        ],

        description:
            "A radiant daily sunscreen designed to provide protection while leaving skin looking fresh and luminous.",

        benefits: [
            "SPF 50 protection",
            "Radiant finish",
            "Comfortable daily wear"
        ],

        ingredients: [
            "Zinc Oxide",
            "Vitamin C",
            "Vitamin E"
        ]

    },


    /* =========================
       MASKS
    ========================= */

    "Cloud Hydration Mask": {

        price: "$33",

        type: "HYDRATION",

        images: [
            "images/cloudmask.jpeg"
        ],

        description:
            "A creamy hydration mask designed to give dry-looking skin a soft and refreshed feel.",

        benefits: [
            "Deep hydration",
            "Softens skin",
            "Refreshing finish"
        ],

        ingredients: [
            "Hyaluronic Acid",
            "Aloe Vera",
            "Glycerin"
        ]

    },


    "Blueberry Glow Mask": {

        price: "$35",

        type: "GLOW",

        images: [
            "images/blueberrymask.jpeg"
        ],

        description:
            "A glow-boosting mask that leaves skin looking fresh, smooth and naturally radiant.",

        benefits: [
            "Boosts glow",
            "Smooths skin",
            "Refreshes complexion"
        ],

        ingredients: [
            "Blueberry Extract",
            "Vitamin C",
            "Aloe Vera"
        ]

    },


    "Calm Recovery Mask": {

        price: "$37",

        type: "CALM CARE",

        images: [
            "images/calmmask.jpeg"
        ],

        description:
            "A calming mask created to give tired-looking skin a soft and comfortable feeling.",

        benefits: [
            "Calms skin",
            "Softens complexion",
            "Comforting hydration"
        ],

        ingredients: [
            "Chamomile",
            "Aloe Vera",
            "Panthenol"
        ]

    },


    "Dewy Sleep Mask": {

        price: "$39",

        type: "OVERNIGHT GLOW",

        images: [
            "images/dewymask.jpeg"
        ],

        description:
            "An overnight mask designed to leave skin looking soft, hydrated and beautifully dewy by morning.",

        benefits: [
            "Overnight hydration",
            "Dewy finish",
            "Softens skin"
        ],

        ingredients: [
            "Squalane",
            "Hyaluronic Acid",
            "Vitamin E"
        ]

    },


    "Radiance Clay Mask": {

        price: "$36",

        type: "RADIANCE",

        images: [
            "images/radiancemask.jpeg"
        ],

        description:
            "A gentle clay mask designed to refresh the complexion while leaving skin feeling smooth and balanced.",

        benefits: [
            "Refreshes skin",
            "Helps remove impurities",
            "Smooth finish"
        ],

        ingredients: [
            "Kaolin Clay",
            "Green Tea",
            "Aloe Vera"
        ]

    }

};


/* =========================
   GET PRODUCT FROM URL
========================= */

const urlParams =
    new URLSearchParams(window.location.search);


const productName =
    urlParams.get("product");


/* =========================
   GET PAGE ELEMENTS
========================= */

const productImage =
    document.getElementById("productImage");

const productNameElement =
    document.getElementById("productName");

const productPrice =
    document.getElementById("productPrice");

const productType =
    document.getElementById("productType");

const productDescription =
    document.getElementById("productDescription");

const benefits =
    document.getElementById("benefits");

const ingredients =
    document.getElementById("ingredients");

const thumbnail1 =
    document.querySelector("#thumbnail1 img");

const thumbnail2 =
    document.querySelector("#thumbnail2 img");

const dot1 =
    document.getElementById("dot1");

const dot2 =
    document.getElementById("dot2");


/* =========================
   QUANTITY
========================= */

let quantity = 1;


const quantityNumber =
    document.getElementById("quantity");


document.getElementById("plus")
    .addEventListener("click", function () {

        quantity++;

        quantityNumber.textContent =
            quantity;

    });


document.getElementById("minus")
    .addEventListener("click", function () {

        if (quantity > 1) {

            quantity--;

        }

        quantityNumber.textContent =
            quantity;

    });


/* =========================
   LOAD PRODUCT
========================= */

let currentProduct =
    productData[productName];


if (!currentProduct) {

    currentProduct =
        productData["Hydrating Serum"];

}


/* =========================
   PRODUCT INFORMATION
========================= */

productNameElement.textContent =
    productName || "Hydrating Serum";

productPrice.textContent =
    currentProduct.price;

productType.textContent =
    currentProduct.type;

productDescription.textContent =
    currentProduct.description;


/* =========================
   PRODUCT IMAGES
========================= */

let currentImage = 0;


productImage.src =
    currentProduct.images[0];


thumbnail1.src =
    currentProduct.images[0];


thumbnail2.src =
    currentProduct.images[1];


/* =========================
   BENEFITS
========================= */

benefits.innerHTML = "";


currentProduct.benefits.forEach((benefit) => {

    const item =
        document.createElement("div");

    item.className =
        "benefit";

    item.innerHTML = `

        <span class="benefit-icon">
            ✧
        </span>

        <span>
            ${benefit}
        </span>

    `;

    benefits.appendChild(item);

});


/* =========================
   INGREDIENTS
========================= */

ingredients.innerHTML = "";


currentProduct.ingredients.forEach((ingredient) => {

    const item =
        document.createElement("span");

    item.className =
        "ingredient";

    item.textContent =
        ingredient;

    ingredients.appendChild(item);

});


/* =========================
   CHANGE IMAGE
========================= */

function changeImage(index) {

    currentImage = index;


    productImage.style.opacity = "0";


    setTimeout(() => {

        productImage.src =
            currentProduct.images[currentImage];

        productImage.style.opacity = "1";

    }, 150);


    thumbnail1.parentElement
        .classList.remove("active");

    thumbnail2.parentElement
        .classList.remove("active");


    if (currentImage === 0) {

        thumbnail1.parentElement
            .classList.add("active");

        dot1.classList.add("active");

        dot2.classList.remove("active");

    } else {

        thumbnail2.parentElement
            .classList.add("active");

        dot2.classList.add("active");

        dot1.classList.remove("active");

    }

}


/* =========================
   NEXT IMAGE
========================= */

document.getElementById("nextImage")
    .addEventListener("click", function () {

        currentImage++;

        if (currentImage >= 2) {

            currentImage = 0;

        }

        changeImage(currentImage);

    });


/* =========================
   PREVIOUS IMAGE
========================= */

document.getElementById("previousImage")
    .addEventListener("click", function () {

        currentImage--;

        if (currentImage < 0) {

            currentImage = 1;

        }

        changeImage(currentImage);

    });


/* =========================
   THUMBNAILS
========================= */

document.getElementById("thumbnail1")
    .addEventListener("click", function () {

        changeImage(0);

    });


document.getElementById("thumbnail2")
    .addEventListener("click", function () {

        changeImage(1);

    });


/* =========================
   ADD TO CART
========================= */

const addCart =
    document.getElementById("addCart");


const cartCount =
    document.getElementById("cartCount");


let cart =
    Number(localStorage.getItem("lumoraCart")) || 0;


cartCount.textContent =
    cart;


addCart.addEventListener("click", function () {

    cart += quantity;


    localStorage.setItem(
        "lumoraCart",
        cart
    );


    cartCount.textContent =
        cart;


    const oldText =
        addCart.textContent;


    addCart.textContent =
        "Added ✓";


    addCart.style.background =
        "#65b7a9";


    setTimeout(() => {

        addCart.textContent =
            oldText;

        addCart.style.background =
            "";

    }, 1500);

});