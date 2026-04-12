export const menu = (() => {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");

    const topLeftDiv = document.createElement("div");
    topLeftDiv.classList.add("menucat");
    const topLeftHeading = document.createElement("h3");
    topLeftHeading.textContent = "Appetizers";
    const topLeftItems = document.createElement("ul");
    topLeftItems.classList.add("items");
    const topLeftPrices = document.createElement("ul");
    topLeftPrices.classList.add("prices");
    const TLitems = ["Garlic Bread", "Bruschetta", "Stuffed Mushrooms", "Shrimp Cocktail", "Caprese Salad"];
    const TLPrices = ["$50", "$45", "$48", "$52", "$47"]

    for (let i = 0; i < TLitems.length; i++) {
        const item = document.createElement("li");
        item.textContent = TLitems[i];
        topLeftItems.appendChild(item);
    }

    for (let i = 0; i < TLPrices.length; i++) {
        const price = document.createElement("li");
        price.textContent = TLPrices[i];
        topLeftPrices.appendChild(price);
    }

    topLeftDiv.append(topLeftHeading, topLeftItems, topLeftPrices);

    const topRightDiv = document.createElement("div");
    topRightDiv.classList.add("menucat");
    const topRightHeading = document.createElement("h3");
    topRightHeading.textContent = "Entrees";
    const topRightItems = document.createElement("ul");
    topRightItems.classList.add("items");
    const topRightPrices = document.createElement("ul");
    topRightPrices.classList.add("prices");
    const TRitems = ["Grilled Salmon", "Filet Mignon", "Chicken Piccata", "Vegetable Stir-Fry", "Eggplant Parmesan"];
    const TRPrices = ["$50", "$45", "$48", "$52", "$47"];

    for (let i = 0; i < TRitems.length; i++) {
        const item = document.createElement("li");
        item.textContent = TRitems[i];
        topRightItems.appendChild(item);
    }

    for (let i = 0; i < TRPrices.length; i++) {
        const price = document.createElement("li");
        price.textContent = TRPrices[i];
        topRightPrices.appendChild(price);
    }

    topRightDiv.append(topRightHeading, topRightItems, topRightPrices);

    const bottomLeftDiv = document.createElement("div");
    bottomLeftDiv.classList.add("menucat");
    const bottomLeftHeading = document.createElement("h3");
    bottomLeftHeading.textContent = "Desserts";
    const bottomLeftItems = document.createElement("ul");
    bottomLeftItems.classList.add("items");
    const bottomLeftPrices = document.createElement("ul");
    bottomLeftPrices.classList.add("prices");
    const BLitems = ["Tiramisu", "Chocolate Lava Cake", "Créme Brúlée", "Cheesecake", "Apple Pie"];
    const BLPrices = ["$50", "$45", "$48", "$52", "$47"];

    for (let i = 0; i < BLitems.length; i++) {
        const item = document.createElement("li");
        item.textContent = BLitems[i];
        bottomLeftItems.appendChild(item);
    }

    for (let i = 0; i < BLPrices.length; i++) {
        const price = document.createElement("li");
        price.textContent = BLPrices[i];
        bottomLeftPrices.appendChild(price);
    }

    bottomLeftDiv.append(bottomLeftHeading, bottomLeftItems, bottomLeftPrices);

    const bottomRightDiv = document.createElement("div");
    bottomRightDiv.classList.add("menucat");
    const bottomRightHeading = document.createElement("h3");
    bottomRightHeading.textContent = "Beverages";
    const bottomRightItems = document.createElement("ul");
    bottomRightItems.classList.add("items");
    const bottomRightPrices = document.createElement("ul");
    bottomRightPrices.classList.add("prices");
    const BRitems = ["Soft drinks", "Juices", "Iced Tea", "Hot Tea", "Coffee"];
    const BRPrices = ["$50", "$45", "$48", "$52", "$47"];

    for (let i = 0; i < BRitems.length; i++) {
        const item = document.createElement("li");
        item.textContent = BRitems[i];
        bottomRightItems.appendChild(item);
    }

    for (let i = 0; i < BRPrices.length; i++) {
        const price = document.createElement("li");
        price.textContent = BRPrices[i];
        bottomRightPrices.appendChild(price);
    }

    bottomRightDiv.append(bottomRightHeading, bottomRightItems, bottomRightPrices);

    containerDiv.appendChild(topLeftDiv);
    containerDiv.appendChild(topRightDiv);
    containerDiv.appendChild(bottomLeftDiv);
    containerDiv.appendChild(bottomRightDiv);

    return { containerDiv };
})();