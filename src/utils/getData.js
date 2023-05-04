const getData = async (API, id) => {
    const apiURL = id ? `${API}?ID=${id}` : API;
    
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(apiURL, data);
        return data
    }catch (error){
        console.error('Fetch Error', error)
    }
};

export default getData;