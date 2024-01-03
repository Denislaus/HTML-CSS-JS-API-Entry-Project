const accessKey="TkQADKAhBSz377rjGggdU-Mak1XiaLwr__YFshbNO7k"
const FormEl = document.querySelector("form")
const InputEl = document.getElementById(search-input)
const SearchRes = document.querySelector(search-result)
const ShowMore = document.getElementById(show-more-button)

let inputData = ""
let page = "1"

asyncfunction SearchImg(){
    //User input into Search box = API looks for sought after image
    inputData = InputEl.value;
    //Dynamic URL
    const url = 'https://api.unplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}'

    const response = await fetch(url)
    const data await response.json()
    const results = data.results

    if (page === 1) {
        searchRes.innerHTML = ""

        results.map(results) =>{
            const imageWrapper = document.createElement("div") 
            imageWrapper.classList.add("search-result")
            const image = document.createElement("img")
            image.src = result.urls.small
            image.alt = result.alt_description
            const.imageLink = document.createElement("a")
            imageLink.href = result.links.html
            imageLink.target = '_blank'
            imageLink.textContent = result.alt_description

            imageWrapper.appendChild(image)
            imageWrapper.appendChild(imageLink)
            imageWrapper.appendChild(imageWrapper)

        }};
    page++
    if(page>1){
        showMore.style.display = "block"
    }

}

FormEl.addEventListener("submit", (event) =>{

    event.preventDefault()
    page = 1;
    SearchImg()

})

ShowMore.addEventListener("click", () =>{

    SearchImg()

})