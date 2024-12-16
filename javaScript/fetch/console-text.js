let options = {
    method: "GET"
};

let url = "https://gorest.co.in/public-api/users";

fetch(url, options)
    .then(function(response){
        return response.text();
    })
    .then(function(text){
        try {
            // Try to parse the response as JSON
            const jsonData = JSON.parse(text);
            // If successful, log a property of the JSON data
            console.log(jsonData.someProperty);
        } catch (error) {
            // If parsing as JSON fails, log the raw text
            console.log(text);
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
