let link="https://fakestoreapi.com/products"
console.log(link);


async function fetchData(){
   let res = await fetch(link)

   let data = await res.json();

    console.log( data);
    let text = document.querySelector(".text")

  data.forEach(element => {

     let div1 = document.createElement("div")
   
          
       let list1 = document.createElement("h4")
        list1.innerText=element.title
//         console.log(element);

        let imge1= document.createElement('img')
        imge1 .src=element.image
//         // console.log(list);
       
     let price1= document.createElement('h5')
     price1.innerHTML=element.price

        div1.append(list1)
       div1.append(imge1)
       div1.append(price1)
        text.append(div1)
        
     });
 }
 fetchData()