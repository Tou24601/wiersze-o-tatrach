const url =
  "https://api.jsonbin.io/v3/b/656b45d90574da7622cf41c2";


const fetchPoems = async () => {
  try {
    const response = await fetch(url);
    const finalResponse = await response.json();
    console.log(finalResponse);
  } catch(err) {
    console.log(err);
  }
}
export { fetchPoems };

  /*
const fetchPoems = fetch(url)
  .then((resp) => resp.json())
  .catch((err) => console.log(err));

export { fetchPoems };*/