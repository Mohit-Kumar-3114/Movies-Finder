let icon = document.getElementsByClassName("icon")
let searchelement = document.querySelector("#searchelement")
let display = document.querySelector(".display")


function deletemovie(display){
    display.innerText = ""
}


function deletetext(searchelement){
    searchelement.value=""
}


icon[0].addEventListener("click",(e)=>{
    let data = searchelement.value;

    let url = `https://api.tvmaze.com/search/shows?q=${data}`

    fetch(url,{
        method: "get"
    }).then((response)=>{
        return response.json()
    }).then((data)=>{

        deletemovie(display)
        deletetext(searchelement)
        
        for(data of data){
            let image =document.createElement("img")
            image.setAttribute("src",data.show.image.original)
            display.append(image)
        }
    })
})