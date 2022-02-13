
var non_cliccare = document.getElementById("non_cliccare");

non_cliccare.addEventListener("click", nonCliccareFunction);

function nonCliccareFunction(){
    alert("scemo");
}


const element = document.getElementById("eta");

element.addEventListener("change", (e) => {
    const value = e.target.value;
    const text = element.options[element.selectedIndex].text;
   
    if (value == "bambini") {
        document.getElementById("pick").textContent = `Ciao Elena!`;
    } else if(value){
        document.getElementById("pick").textContent = `Te hai ${value} anni`;
    }
     else {
      document.getElementById("pick").textContent = "";
    }
  });

  function getValueFunction(){
      document.getElementById("riassunto").innerHTML = "Prova";
  }