let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

let sideMenu = document.getElementById("sideMenu");

function openMenu(){
    sideMenu.style.right = "0";
}
function closeMenu(){
    sideMenu.style.right = "-200px";
}
// google form
const scriptURL =
"https://script.google.com/macros/s/AKfycbyIu7ulePTa53z0W64lvqWi3sDR5eDT5US2FWbyXXjq8lyPWMFX-H25A_04kBna3Qon4A/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
e.preventDefault();
msg.innerHTML = "Sending message...";
fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) => {
    msg.innerHTML = "Message sent successfully.";
    setTimeout(function () {
      msg.innerHTML = "";
    }, 2000);
    form.reset();
  })
  .catch((error) => console.error("Error!", error.message));
});


