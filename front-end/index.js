console.log('Hello From javascript')

// Function to do an Ajax call
const doAjax = async () => {
  const response = await fetch('http://localhost:3000/'); // Generate the Response object
  if (response.ok) {
    const jsonValue = await response.json(); // Get JSON value from the response body
    return Promise.resolve(jsonValue);
  } else {
    return Promise.reject('*** PHP file not found');
  }
}

// Call the function and output value or error message to console
doAjax().then(console.log).catch(console.log);

fetch('https://animechan.vercel.app/api/random')
.then(res => res.json())
.then(res => console.log(res))
.catch(() => console.log('Something went wrong with res'))