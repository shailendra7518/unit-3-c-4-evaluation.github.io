


async function apiCall(url) {


    //add api call logic here
    try{

    
        let response=await fetch(url)
      let data= await response.json()
      return data
    
      }catch(error){
        console.log(error)
      }


}


function appendArticles(articles,main) {

 //add append logic here



 articles.map(function({content,description,image,title}){
    let div=document.createElement("div")
    let tex_div=document.createElement("div")
    let content1=document.createElement("p")
    let description1=document.createElement("p")
    let title1=document.createElement("p")
   
    let img=document.createElement("img")
    
     content1.textContent=content
     description1.textContent=description
     title1.textContent=title
     img.src=image
     tex_div.append(title1,description1)
    
     div.append(img,tex_div)
    main.append(div)

    div.addEventListener("click",function(){
  
 
  

          let detail={
             title,
             image,
             content,
        
          }
          localStorage.setItem("full",JSON.stringify(detail))
          window.location.href="news.html"





        })
 })

}


export { apiCall, appendArticles }