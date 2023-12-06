const url =
  "https://api.jsonbin.io/v3/b/656b45d90574da7622cf41c2";

const fetchPoems =  fetch(url)
  .then((resp) => resp.json())
  .catch((err) => console.log(err));

export { fetchPoems };