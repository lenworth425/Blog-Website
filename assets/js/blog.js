// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const blogPosts = document.querySelector('main');
const backButton = document.getElementById('back');

// TODO: Create a function that builds an element and appends it to the DOM
const buildTitle = document.createElement(Title)
const buildContent = document.createElement(Content)
const buildUsername = document.createElement(Username)
buildTitle.textContent = 'Blog Title'
buildContent.textContent = 'Blog Content'
buildUsername.textContent = 'Blogger Username'

parentElement.appendChild(buildTitle)
parentElement.appendChild(buildContent)
parentElement.appendChild(buildUsername)


// TODO: Create a function that handles the case where there are no blog posts to display
function displayNoPostsMessage() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

    if (!blogPosts || blogPosts.length === 0) {
        const mainElement = document.querySelector('main');
        const messageElement = document.createElement('p');
        messageElement.textContent = "No Blog posts yet...";
        mainElement.appendChild(messageElement);
    }
} 


// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const blogPost = JSON.parse(localStorage.getItem('blogPosts'));

    mainElement.innerHTML = '';

    if (!blogPosts || blogPosts.length === 0) {
        displayNoPostsMessage();
    } else {
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');

            const authorElement = document.createElement('p');
            authorElement.textContent = `Author: ${post.author}`;

            const titleElement = document.createElement('h2');
            titleElement.textContent = post.title;

            const contentElement = document.createElement('p');
            contentElement.textContent = post.content;

            postElement.appendChild(authorElement);
            postElement.appendChild(titleElement);
            postElement.appendChild(contentElement);

            mainElement.appendChild(postElement);
        });
    }
}


// TODO: Call the `renderBlogList` function
const readLocalStorage = function () {
    const blogData = JSON.parse(localStorage.getItem('blogPosts'));
    return blogData ? blogData : [];
    }
    renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

let redirectURL = './index.html';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
