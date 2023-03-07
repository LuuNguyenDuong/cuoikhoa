const listArrTk = [
  {
      tk : "duong",
      mk : 1
  }
];
const listProduct = [
  {
      id : 1,
      img : "im'good.jpg",
      name : "I'm good",
      producer : "Performed by Bebe RexhaDavid Guetta"
  }
]
//thêm list sản phẩm vào local
let newProduct = JSON.parse(localStorage.getItem("product"));
if(newProduct == null) {
  localStorage.setItem("product",JSON.stringify(listProduct))
}
//thêm list tài khoản vào local
let newList = JSON.parse(localStorage.getItem("login"));
console.log(newList);
if(newList == null) {
  localStorage.setItem("login",JSON.stringify(listArrTk))
}
const login= ()=>{
  let tk = document.querySelector(".input-login-username");
  let mk =    document.querySelector(".input-login-password");
  for(let item of newList) {
      if((item.tk==tk.value) && (item.mk==mk.value)) {
          window.location.href = "t.html";
      }
  }
}
let form_login = document.querySelector("#loginButton");
if(form_login) {
    form_login.addEventListener("submit" , (e)=>{
        e.preventDefault()
        login();
    })
}
let form_signin = document.querySelector("#signupButton");
if(form_signin) {
    form_signin.addEventListener("submit" , (e)=>{
        e.preventDefault()
        signin();
    
    })
}
const signin=()=>{
  let gmail = document.querySelector(".input-signup-username").value;
  let pass = document.querySelector(".input-signup-password").value;
  let passCheck = document.querySelector(".input-signup-repassword").value;
  if(pass==passCheck) {
      let newTk = {
              mail : gmail,
              mk : pass
      }
      newList.push(newTk)
      localStorage.setItem("login",JSON.stringify(newList))
      window.location.href = "dangnhap.html";
  }
}
const showProduct = (app , datas) => {
  if(app) {
      for(let item of datas) {
          app.innerHTML +=`
          <tr class="special">
                <th class="checkbox"><input type="checkbox"></th>
                <th class="m"><img src="${item.img}" alt="" class="img"> <p class="n"> ${item.name}</p></th>
                <th class="special1"><p  class="soluong">1</p></th>
            </tr>
            <tr class="tr">
                <th></th>
                <th></th>
                <th></th>
            </tr>

          `;
      }
  }
}
const addPro = () =>{
  let img = document.querySelector(".img").value;
  let name = document.querySelector(".name").value;
  let price = document.querySelector(".producer").value;
  let newa = {
      id : newProduct.length+1,
      img : img , 
      name : name ,
      producer : producer
  }
  newProduct.push(newa)
  console.log(newProduct);
  localStorage.setItem("product",JSON.stringify(newProduct))
    window.location.href = "t.html";
}
console.log(newProduct);
let formProduct = document.querySelector("#addProduct");
if(formProduct) {
    formProduct.addEventListener("submit", (e)=>{
        e.preventDefault();
        addPro()
    })
}