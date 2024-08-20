// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.getElementById('toggle');
const saveMode = localStorage.getItem('mode');
let isToggled = false;
let darkBg = document.querySelector('body');

if (saveMode === 'dark') {
  document.body.classList.add('dark');
}

toggle.addEventListener('click', function () {
  document.body.classList.toggle('dark');
  const currentMode = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('mode', currentMode);
});

function change() {
  var elem = document.getElementById("toggle");
  if (elem.value == "☀️") {
    elem.value = "🌙";
  } else {
    elem.value = "☀️";
  }
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function () {
  const blogData = JSON.parse(localStorage.getItem('blogData'));
  return blogData ? blogData : [];
};


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = function (newBlogData) {
  const blogData = readLocalStorage();
  blogData.push(newBlogData);
  localStorage.setItem('blogData', JSON.stringify(blogData));
};
// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

