// Creating a promise
let giftPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation (e.g., fetching data from a server)
  setTimeout(() => {
    // Imagine your friend successfully gets the gift
    let gift = "A beautiful book";

    // Resolve the promise with the gift
    resolve(gift);

    // If there's an issue getting the gift, you can reject the promise
    // reject("Sorry, couldn't find the gift");
  }, 1000); // Simulating a delay of 1 second
});

// Using the promise
giftPromise
  .then((receivedGift) => {
    console.log("Yay! I got a gift:", receivedGift);
  })
  .catch((error) => {
    console.log("Oops! There was an issue:", error);
  });

/*
  let giftPromise = new Promise((resolve, reject) => {...});: We create a promise using the Promise constructor. The constructor takes a function as an argument, which has two parameters: resolve and reject. These are functions provided by JavaScript to signal the success or failure of the asynchronous operation.

setTimeout(() => {...}, 1000);: Inside the promise, we simulate an asynchronous operation (like waiting for the gift to arrive). After 1 second, we either resolve the promise with the gift or reject it if there's an issue.

giftPromise.then((receivedGift) => {...}).catch((error) => {...});: We use the then method to handle the case when the promise is resolved (gift received) and the catch method to handle the case when the promise is rejected (an issue occurred). The functions inside then and catch are callbacks that are executed based on the outcome of the promise.
  */
