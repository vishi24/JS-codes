// Function to simulate fetching data with a delay
async function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data with a delay)
    setTimeout(() => {
      const data = { userId: 1, id: 1, title: "Sample Todo", completed: false };
      resolve(data);
      // If there's an issue fetching data, you can reject the promise
      // reject(new Error('Failed to fetch data'));
    }, 1000); // Simulating a delay of 1 second
  });
}

// Using the async function
async function processData() {
  try {
    // Calling the async function and waiting for the result
    let result = await fetchData();

    // Using the fetched data
    console.log("Fetched data:", result);
    return result;
  } catch (error) {
    // Handling errors from fetchData or any other errors
    console.error("Error processing data:", error.message);
  }
}

async function test() {
  try {
    // Calling the async function and waiting for the result
    let result = processData();

    // Using the fetched data
    console.log("Fetched data in test:", result);
  } catch (error) {
    // Handling errors from fetchData or any other errors
    console.error("Error processing data:", error.message);
  }
}

// Calling the function to initiate the process
processData();
//test();

/* 
The fetchData function now returns a Promise that simulates an asynchronous operation using setTimeout.

The asynchronous operation inside fetchData is still wrapped in a Promise, and the resolve function is called after the simulated delay.

The processData function remains unchanged, and it still uses await to wait for the asynchronous operation in fetchData.
*/
