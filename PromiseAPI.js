let btc=document.getElementById("fetch");
let result=document.getElementById("result");
let st=document.getElementById("status");

btc.addEventListener("click",()=>{
    
let url="https://dog.ceo/api/breeds/image/random";
result.innerHTML=`<h3>Waits few second</h3>`;

fetch(url).then(response=>{
    return response.json();
  }).then(data=>{
    new Promise((res,rej)=>{

        if(data.message){
            let src=(data.message);
            res(result.innerHTML=`<img src=${src}>`);
        }
        else{
            rej(st.innerHTML=`<h1> ${data.status} </h1>`)
        }
    })


  })


})





