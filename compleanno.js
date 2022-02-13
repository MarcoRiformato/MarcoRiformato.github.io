
var non_cliccare = document.getElementById("non_cliccare");

non_cliccare.addEventListener("click", nonCliccareFunction);

function nonCliccareFunction(){
    alert("scemo");
}

// <------------------Get età ----------------------------------->
const element = document.getElementById("eta");

element.addEventListener("change", (e) => {
    const value = e.target.value;
    const text = element.options[element.selectedIndex].text;
   
    if (value == "bambini") {
        document.getElementById("pick").textContent = `Ciao Elena!`;
    } else if (value == "anziani") {
        document.getElementById("pick").textContent = "bugiardo";
    } else if(value){
        document.getElementById("pick").textContent = `Te hai ${value} anni`;
    }else {
      document.getElementById("pick").textContent = "";
    }
  });

  function getValueFunction(){
      document.getElementById("riassunto").innerHTML = "Prova";
  }
// <---------------------------------------------------------------->

const e_email = document.getElementById("exampleInputEmail1");
const e_pass = document.getElementById("email_input");

e_email.addEventListener("click", (e_email)  => {
    const email_value = email.target.email_value;
    const email_text = element.options[e_email.selectedIndex].email_text;

    if (email_value == "nome") {
        document.getElementById("email_input").textContent = "Funziona";
    } else {
        alert("sono qui")
    }
})

e_pass.addEventListener("change", (e_pass)  => {
    const e_pass = pass.target.pass_value;
    const pass_text = element.options[e_pass.selectedIndex].pass_text;

    if (pass_value == "nome") {
        document.getElementById("email_input").textContent = "Funziona";
    } else {
        alert("sono qui")
    }
})