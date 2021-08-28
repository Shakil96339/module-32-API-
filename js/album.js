function getAlbum() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then(respons => respons.json())
    .then(data => displayData(data));
}
getAlbum();

function displayData(data) {
  console.log(data);
  const section = document.getElementById("container");
  for (const user of data) {
    const div = document.createElement("div");
    div.innerText = ` 
     ${user.id}  ${user.title}
    `;
    section.appendChild(div);
  }
}
