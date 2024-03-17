let searchInput = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result){
    //Destructuring the result object
    let {title,link,description} = result;

    //1.Div container -- Create a result Item
    let resultItem = document.createElement("div");
    resultItem.classList.add("result-item");
    searchResultsEl.appendChild(resultItem);


    //2.Anchor Title -- result Title
    let resultTitleEl = document.createElement(("a"));
    resultTitleEl.classList.add("result-title");
    resultTitleEl.textContent = result.title;
    resultTitleEl.href = result.link;
    resultTitleEl.target = "_blank";
    resultItem.appendChild(resultTitleEl);

    //3.Title Break
    let titleBreak = document.createElement("br");
    resultItem.appendChild(titleBreak);

    //4. Anchor URL -- result URL
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = result.link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItem.appendChild(urlEl);


    //5. Line break
    let lineBreakEl = document.createElement("br");
    resultItem.appendChild(lineBreakEl);

    //6.Paragraph Description -- result Description
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("line-description");
    descriptionEl.textContent = description;
    resultItem.appendChild(descriptionEl);

}





function displayResults(searchResults){
    //Here the toggle adds the d-none in the classList
    spinnerEl.classList.toggle("d-none");
   for(let result of searchResults){
       createAndAppendSearchResult(result);
   }




}
function searchWikipedia(event){
    if(event.key === "Enter"){
        //here the toggle removes the d-none in the classList
        spinnerEl.classList.toggle("d-none");
        searchResultsEl.textContent = "";
        let searchInputValue = searchInput.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputValue;
        let options = {
            method : "GET"
        }
        fetch(url,options)
            .then(function(response){
                return response.json();
            })
            .then(function(jsonData){
                 let {search_results} = jsonData;
                 displayResults(search_results);
            })



    }
}


searchInput.addEventListener("keydown",searchWikipedia)