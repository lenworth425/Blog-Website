const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const form = document.querySelector('form');


// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
const handleFormSubmit = function (event) {
    event.preventDefault();
    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;
    
    if (!username || !title || !content) {
        alert('You are missing a required field!');
        return;
    }
    
    const newPost = {
        username,
        title,
        content,
    };
    
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
    
    redirectPage('./blog.html');
    }

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handleFormSubmit);

