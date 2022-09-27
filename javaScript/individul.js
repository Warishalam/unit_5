let id=JSON.parse(localStorage.getItem('berweryid'))
    async function get(){
        try {
           let res=await fetch(`https://api.openbrewerydb.org/breweries/${id}`) 
           let data= await res.json()
           console.log(data)
           display(data)
        } catch (error) {
            console.log(error)
        }
    }
    get()

    const  display=(data)=>{
      let box=document.getElementById("box")
      box.innerHTML=``
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

       box.append(type,city,country,name,phone,state,website_url)
    }