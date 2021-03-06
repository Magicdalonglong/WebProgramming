console.log("Start");

let itemSet = () => {
    let itemCount = 1;

    let items = [
        { id: itemCount++, item: "Sword of Truth" },
        { id: itemCount++, item: "Book of Wisdom" },
        { id: itemCount++, item: "Potion of Healing" },
    ];

    return {
        addItem: (item) => {
            return new Promise((fulfill, reject) => {
                if (!item) reject("You did not provide an item");

                fulfill(items.push({ id: itemCount++, item: item }));
            });
        },
        getItem: () => {
            return new Promise((fulfill, reject) => {
                setTimeout(() => {
                    if (items.length > 0) fulfill(items.shift());

                    reject("No items left!");
                }, 750);
            });
        }
    }
}

let firstItemSet = itemSet();


firstItemSet.addItem("Stone of Strength");
firstItemSet.getItem()
    .then((firstItem) => {
        console.log("You got a new item!");
        console.log(firstItem);
        return firstItemSet.getItem();
     //   throw "No, this is bad, we can't keep getting items or we'll run out!";
    })
    .then((secondItem) => {
        console.log("You got a second item!");
        console.log(secondItem);
        return firstItemSet.getItem()
        // return firstItemSet.getItem()// the return is passing args into the next then method.
    })
    .then((thirdItem) => {
        console.log("the third item  was:");
        console.log(thirdItem);

    })
    .then((lastItemReceied) => {
        console.log("the last item received was:");
        console.log(lastItemReceied);

    })
    .catch((error) => {
        console.error("an error occurred");
        console.error(error);
        
        return "We've survived the error";;
    }).then((message) => {
        console.log("the last then method, ")
        console.log(message);
    });
