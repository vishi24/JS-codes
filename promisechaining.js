// Function simulating an asynchronous operation
function getGift() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let gift = "A beautiful book";
      resolve(gift);
      // If there's an issue getting the gift, you can reject the promise
      // reject("Sorry, couldn't find the gift");
    }, 1000);
  });
}

// Function simulating another asynchronous operation
function wrapGift(gift) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let wrappedGift = "Gift is wrapped!";
      resolve(wrappedGift);
    }, 1000);
  });
}

// Function simulating yet another asynchronous operation
function deliverGift(wrappedGift) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let deliveredGift = "Gift is delivered!";
      resolve(deliveredGift);
      // If there's an issue delivering the gift, you can reject the promise
      // reject("Couldn't deliver the gift");
    }, 1000);
  });
}

// Using promise chaining with catch blocks
getGift()
  .then((gift) => {
    console.log("Step 1: Received gift -", gift);
    return wrapGift(gift);
  })
  .catch((error) => {
    console.log("Step 1: Oops! There was an issue:", error);
    // Returning a rejected promise to skip the next steps in the chain
    return Promise.reject(error);
  })
  .then((wrappedGift) => {
    console.log("Step 2: Gift wrapped -", wrappedGift);
    return deliverGift(wrappedGift);
  })
  .catch((error) => {
    console.log("Step 2: Oops! There was an issue:", error);
    // Returning a rejected promise to skip the next steps in the chain
    return Promise.reject(error);
  })
  .then((deliveredGift) => {
    console.log("Step 3: Gift delivered -", deliveredGift);
  })
  .catch((error) => {
    console.log("Step 3: Oops! There was an issue:", error);
  });

/* 
  getGift() returns a promise that resolves with a gift after 1 second.
The first then block handles the received gift, logs a message, and returns the result of wrapGift(gift).
wrapGift(gift) returns a promise that resolves with a wrapped gift after 1 second.
The second then block handles the wrapped gift, logs a message, and returns the result of deliverGift(wrappedGift).
deliverGift(wrappedGift) returns a promise that resolves with a delivered gift after 1 second.
The third then block handles the delivered gift and logs a final message.
  */
