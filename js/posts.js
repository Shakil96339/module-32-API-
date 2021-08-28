function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(result => result.json())
    .then(data => displayPosts(data));
}
loadPosts();

function displayPosts(data) {
  const postContainer = document.getElementById("display-li");
  for (const post of data) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>

    `;
    postContainer.appendChild(div);
  }
}
