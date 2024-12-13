Script.js
// Get elements
const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');

// Load posts
const posts = [
    {
        title: 'Post 1',
        content: 'This is the content of post 1.'
    },
    {
        title: 'Post 2',
        content: 'This is the content of post 2.'
    }
];

// Render posts
posts.forEach((post, index) => {
    const postHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
    `;
    main.innerHTML += postHTML;
});

// Add event listener for new post submission
const form = document.createElement('form');
form.innerHTML = `
    <input type="text" id="title" placeholder="Title">
    <textarea id="content" placeholder="Content"></textarea>
    <button type="submit">Submit</button>
`;
main.appendChild(form);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const newPost = {
        title,
        content
    };
    posts.push(newPost);
    main.innerHTML = '';
    posts.forEach((post, index) => {
        const postHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        main.innerHTML += postHTML;
    });
});
