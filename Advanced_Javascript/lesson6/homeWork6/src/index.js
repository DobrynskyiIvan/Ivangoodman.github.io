import  './scss/style.scss'
const URL = "https://jsonplaceholder.typicode.com/";

const output = document.getElementById("list");
const spinner = document.getElementById('spinner');
const userInfo = document.getElementById('userInfo');

output.innerHTML = "Loading ...";

 

function queryApi(endpoint) {
  return fetch(
      URL+endpoint
  ).then(response=>{
    //console.log(response.json())
      return response.ok?response.json():Promise.reject(' Unsuccessfull response');
  })
}
 
//======== fetch caller function

async function main(text,fn ) {
  try{
          const [ result]= await Promise.all(
              [
                  queryApi(text) 
              ]
          )
          
          fn(result );
     }
      catch(error){
              console.log(error)
              output.textContent='OOps'
      }

}


 main('posts',outputHtml)
.finally(()=>{
  spinner.remove();
});






function outputHtml(arr){
  
        
      console.log("Inside:",arr);
        let outText = ` <tr>
        <th>Title</th>
        <th>Body</th>
        <th>Link</th>
      </tr>`;
      
        for(let i=0;i<100;i+=10){
          outText+=`
          <tr>
          <td>${arr[i].title} </td>
          <td>${arr[i].body}</td>
          <td   ><a id=${arr[i].userId} class="link" >Link to user...</a></td>
          <tr>
        </tr>  `
        }
        output.innerHTML=outText;
        setEventListener();
}




function setUpFile(event) {
 let id=event.target.id;
let str=`users/${id}`
  main(str,showUser);
  let el=document.getElementById(id);
  document.querySelectorAll('.link').forEach(it=>it.parentElement.classList.remove('current'));
  el.parentElement.classList.add('current');
 
  
}
function showUser(arr) {
  console.log(arr);
  userInfo.innerHTML=`<form  >
  <label for="fname">Name:</label>
  <input type="text" id="fname" name="fname" disabled value="${arr.name}"><br><br>
  <label for="lname">Username:</label>
  <input type="text" id="Sname" name="lname" disabled value="${arr.username}"><br><br>
   <label for="lname">Email:  ${arr.email}</label>
 
 
</form>`
  
}


function setEventListener() {
  const link=document.querySelectorAll('.link');
   link.forEach(el=>{
    el.addEventListener("click",setUpFile);
  })
 
};
 




 
 
