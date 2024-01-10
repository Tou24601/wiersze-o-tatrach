 let dataPoems;

const newFetchPoems = async () => {
    const result = await fetch(url);
    result.json().then((json) => {
      return dataPoems = json.record.poems;
    });
  };

  export default {dataPoems};