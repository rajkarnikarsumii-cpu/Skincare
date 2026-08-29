/* =========================
   LUMORA PRODUCTS PAGE
========================= */


/* =========================
   PRODUCT CARDS
========================= */

const products = document.querySelectorAll(".product-card");


/* =========================
   OPEN PRODUCT PAGE
========================= */

products.forEach((product) => {

    product.addEventListener("click", function () {

        /*
        Ignore the click if the user
        clicked the heart button.
        */

        const productName = product.dataset.name;

        window.location.href =
            "pt.html?product=" +
            encodeURIComponent(productName);

    });

});


/* =========================
   HEART BUTTON
========================= */

const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart) => {

    heart.addEventListener("click", function (event) {

        /*
        Stop the product card
        from opening.
        */

        event.stopPropagation();


        if (heart.textContent.trim() === "♡") {

            heart.textContent = "♥";

            heart.style.color = "#78bccc";

        } else {

            heart.textContent = "♡";

            heart.style.color = "#40545c";

        }

    });

});


/* =========================
   CATEGORY FILTER
========================= */

const categoryButtons =
    document.querySelectorAll(".category");


categoryButtons.forEach((button) => {

    button.addEventListener("click", function () {

        categoryButtons.forEach((btn) => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const selectedCategory =
            button.dataset.category;


        products.forEach((product) => {

            const productCategory =
                product.dataset.category;


            if (
                selectedCategory === "all" ||
                selectedCategory === productCategory
            ) {

                product.style.display = "block";

                setTimeout(() => {

                    product.style.opacity = "1";

                    product.style.transform =
                        "translateY(0)";

                }, 50);

            } else {

                product.style.opacity = "0";

                product.style.transform =
                    "translateY(15px)";


                setTimeout(() => {

                    product.style.display = "none";

                }, 250);

            }

        });

    });

});


/* =========================
   VIEW ALL
========================= */

const viewAll =
    document.querySelector(".view-all");


viewAll.addEventListener("click", function () {

    const allButton =
        document.querySelector(
            '.category[data-category="all"]'
        );

    allButton.click();

});


/* =========================
   SHOP NOW
========================= */

const shopButton =
    document.querySelector(".shop-button");


shopButton.addEventListener("click", function () {

    window.scrollTo({
        top: document.querySelector(".collection").offsetTop,
        behavior: "smooth"
    });

});