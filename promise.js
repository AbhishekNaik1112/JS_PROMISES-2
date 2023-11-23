const cookies = [{ name: "Chocolate Cookies" }, { name: "Macaron Cookies" }];
const newCookie = { name: "Biscotti Cookies" };

// Progression 1: create a function to get all the cookies
// Progression 2: using setTimeout()
function getCookies() {
  setTimeout(() => {
    let output = "";
    cookies.forEach((cookie) => {
      output += `<li>${cookie.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

//Progression 3: Create a function to create cookies and create an object of Promise.
// Progression 4: adding two parameters and using setTimeout()
// Progression 5: handling errors and adding new cookie to the list
function createCookie(newCookie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cookies.push(newCookie);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("There are no such cookies");
      }
    }, 2000);
  });
}

// Progression 6: call function using `.then`
createCookie(newCookie).then(getCookies);
