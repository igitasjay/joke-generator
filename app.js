document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  console.log("clicked");
  const category = document.querySelector("input[type='text']").value;

  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://api.chucknorris.io/jokes/random?category=${category}`,
    true
  );

  xhr.onload = function () {
    if (this.status == 200 || this.response === 201) {
      const response = this.responseText;
      console.log(response);
    } else if (this.status === 404 || this.status === 400) {
      alert("category not found");
    } else {
      console.log("something went wrong");
    }
  };

  xhr.send();

  e.preventDefault();
}
