let arr
async function all(){
    try {
       let res=await fetch(`https://api.openbrewerydb.org/breweries`) 
       let data=await res.json()
       console.log(data)
       arr=data
       display(data)
    } catch (error) {
        console.log(error)
    }
}
all()

async function show()
{
  try
  {
     let res  = await fetch(`https://api.openbrewerydb.org/breweries?by_type=${document.getElementById("sel").value}`)
     let data = await res.json();
     console.log(data)
     display(data)
  }
  catch(error)
  {
     console.log(error)
  }
}








const display =(data)=>{
   const tbody=document.getElementById("tablebody")
   tbody.innerHTML=``
   data.forEach((ele) => {
       let tr=document.createElement("tr")
       let name=document.createElement("td")
       name.innerHTML=ele.name

       let type=document.createElement("td")
       type.innerHTML=ele.brewery_type

       let city=document.createElement("td")
       city.innerHTML=ele.city

       let state=document.createElement("td")
       state.innerHTML=ele.state

       let a=document.createElement("a")
       a.href='individual.html'
    //    let more=document.createElement("td")
    //    more.innerHTML=`More Details`

       more.onclick=()=>{
           let id=localStorage.setItem("berweryid",JSON.stringify(ele.id))
       }
       a.append(more)
       more.setAttribute("class",'red')
       tr.append(name,type,city,state,a)
       tbody.append(tr)
   });
}