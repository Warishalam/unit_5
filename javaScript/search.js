let x;
const do_it=()=>{
    if(x){
        clearTimeout(x)
    }
    x=setTimeout("get()",1000)
}
async function get(){
    let name=document.getElementById("inp").value
    let res= await fetch(`https://api.openbrewerydb.org/breweries?by_name=${name}`)
    let data=await res.json()
    console.log(data)
    display(data)
}

 const  display=(ele)=>{
  let box=document.getElementById("box")
  box.innerHTML=``
  ele.forEach((data)=> {
      let div=document.createElement('div')
    let type=document.createElement("p")
  type.innerHTML=`Type : ${data.brewery_type} `

  let city=document.createElement("p")
   city.innerHTML=` City : ${data.city} `

   let country=document.createElement("p")
   country.innerHTML=` Country : ${data.country} `

   let name=document.createElement("p")
   name.innerHTML=` Name : ${data.name} `

   let phone=document.createElement("p")
   phone.innerHTML=` Phone : ${data.phone} `

   let state=document.createElement("p")
   state.innerHTML=` State : ${data.state} `

   let website_url=document.createElement("p")
   website_url.innerHTML=` Website_url : ${data.website_url} `
   let a=document.createElement("a")
   a.href="individul.html"
   div.append(type,city,country,name,phone,state,website_url,a)
   box.append(div)
  });
}