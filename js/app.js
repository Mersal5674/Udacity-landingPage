
// Making the fa bar using effective 

// Define global variables
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const sections = document.querySelectorAll("section");
const navBar = document.querySelector("#nav--bar");
const fragment = document.createDocumentFragment();
// End of Defining

// Using the elemnts we created to make an event 
burger.addEventListener("click", function() {
    menu.classList.toggle("active");
})

// creating the navBar using js

// declaring what the <a> tag should looks like using "itemHTML"
function buildNavBar(id, name){
  const itemHTML = `<a href="#" class ="${id}">${name}</a>`;
  // we use the return to say that this events is what the fun does
  return itemHTML;
}

// calling the function "buildNavigation" so it can be used by the webPage
window.buildNavigation()

function buildNavigation(){
  // building the sections of the navBar accoriding to the number of existing sections
  for (let i=0; i < sections.length; i++){
    const newMenuItem = document.createElement("li");
    const sectionName = sections[i].getAttribute("id")
    const sectionId = sections[i].getAttribute("id");
    newMenuItem.innerHTML = buildNavBar(sectionId, sectionName)
    fragment.appendChild(newMenuItem);
  }
  const navBarList = document.querySelector("#nav--bar")
  navBarList.appendChild(fragment);
}

// scrolling to specific section clicking the navBar
menu.addEventListener("click", (event) => {
  event.preventDefault();
  if(event.target.nodeName === 'A'){
    console.log("meow")
    // we chossed the attribute class according the one contain "Id" in the navBar
    const sectionId = event.target.getAttribute("class");
    const section = document.getElementById(sectionId);
    section.scrollIntoView({behavior: "smooth"});
  }
});

// Scrolling event (The page tracks your current position)
window.addEventListener("scroll", function(){
  const navList = document.querySelectorAll(".menu li a")
  /* setting the current <section> for an empty value as a start
  making the page understand that we are the top of it */
  let current ="";
  
  // Looping through all of our sections
  sections.forEach(section =>{
    // measuring the space bettween the pageTop to the <section>Top using "offsetTop"
    const sectionTop = section.offsetTop;
    // measuring how heigh the <section> is using "clientHeight"
    const sectionHeight = section.clientHeight;
    /* "pageYOffset >= sectionTop" this equation means you need to scroll enough space 
     either the sectionTop get exactly as the pageTop or even going below so
     we use (sectionTop - sectionHeight / n) to fix that problem
     ** you can use measurments in "px" instead of sectionHeight / n) */
    if(pageYOffset >= (sectionTop - sectionHeight / 5)){
      current = section.getAttribute("id");
    }
  })
  
  // Having our lighter interaction
  navList.forEach(li =>{
    /* removing the active class from any <li> that my have it so it can be add
    and removed while scrolling through the page */
    li.classList.remove("active");
    // Checking if the <li> has the same class as the <section> we standing on while scrolling
    if(li.classList.contains(current)){
      li.classList.add("active");
    }
  })
})
