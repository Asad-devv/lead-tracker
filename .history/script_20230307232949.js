let leads = []
let button = document.getElementById("button")
let input = document.getElementById("input")
let ul = document.getElementById("ul")
let listitems = ""
let del = document.getElementById("delete")
const getleads = JSON.parse(localStorage.getItem("lead"))
let save = document.getElementById("save")
// console.log("LInked IN")

if (getleads) {
  leads = getleads
  render()

}
save.addEventListener("click", function() {
  chrome.tabs.query({ active: true, currentwindow: true }, function(tabs) {
    leads.push(tabs[0].url)
    console.log()
    localStorage.setItem("lead", JSON.stringify(leads))
    render()


  })




})
del.addEventListener("dblclick", function() {
  localStorage.clear()
  leads = []
  render()

})
button.addEventListener("click", function() {
  leads.push(input.value)

  input.value = ""
  // leads = JSON.stringify(leads)
  localStorage.setItem("lead", JSON.stringify(leads))
  // JSON.parse(leads)
  render();
  localStorage.getItem("lead")
  // JSON.parse(leads)


})
function render() {
  let listitems = ""
  for (let i of leads) {

    listitems += `<li>
   <a target = '_blank' href= ${i}> ${i}
   </a>
   </li>`
  }
  ul.innerHTML = listitems
}
