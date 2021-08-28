// load data button er jonno
function loadDate() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data));
}

//load post btn er jonno

function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data));
}

/// display the elements using fetch
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(result => result.json())
    .then(data => displayUsers(data));
}

function displayUsers(data) {
  const ul = document.getElementById("users");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = `name:${user.name}           email:${user.email}`;
    ul.appendChild(li);
  }
}
