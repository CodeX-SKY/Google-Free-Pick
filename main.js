let search = document.querySelector(".search-button");
let input = document.querySelector(".search-input");

search.onclick = function(){
    url = "https://www.google.com/search?q="+input.value;
    window.open(url);
}