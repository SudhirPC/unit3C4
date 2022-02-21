async function apiCall(url) {


    //add api call logic here
    let res=await fetch(url)

    let data=await res.json()
    return data;

}


function appendArticles(articles, main) {

    // //add append logic here
    articles.forEach(function(el){

        let div=document.createElement("div");


        let image=document.createElement("img");
        image.src=el.urlToImage
        image.setAttribute("class","images")

        let title=document.createElement("p")
        title.innerText=el.title

        div.append(image,title)
        
        div.addEventListener("click",function(){

            localStorage.setItem("article",JSON.stringify(el))
            // console.log(el)
            window.location.href="news.html"
        })
        main.append(div);
    }) 

}

function detailesDisplay(data,main){

    main.innerHTML=""
    let div=document.createElement("div");


    let image=document.createElement("img");
    image.src=data.urlToImage
    image.setAttribute("class","images")

    let title=document.createElement("p")
    title.innerText=data.title
    div.append(image,title)

    main.append(div)
}

export { apiCall, appendArticles ,detailesDisplay}