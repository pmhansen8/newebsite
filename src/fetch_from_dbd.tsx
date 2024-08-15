function fetch_from_dbd() {
    return fetch(" https://api.thecatapi.com/v1/images/search")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok');
        })
        .then(data => {
            return data[0];
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        });
}

export default fetch_from_dbd;
