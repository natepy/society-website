/* VARIABLES */
// Getting the page title
let page = document.title;
let pos = 0;// this variable is used to track the current image for the slide show
/* CONSTANTS */
const changeIMG = (x) => {
  document.getElementById("mainIMG").src = images[x].src;
  document.getElementById("mainIMG").alt = images[x].alt;
};
const fade = document.querySelectorAll(".fade");
const options = { 
  threshold: 1, 
  rootMargin: "0px 0px -50px 0px"
};
const popInScroll = new IntersectionObserver((entries, popInScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting)
      return;// finish early if this is true
    else
    {
      entry.target.classList.add("appear"); // makes that entry part of the appear class
      popInScroll.unobserve(entry.target); // This function call stops the process once it has added the entrys to the appear class
    }
  });
}, options);
/* OBJECTS */
const images = [
    {src: "./images/heroa.jpg", alt: "Software development society | project 1 code base | angle 1."},
    {src: "./images/herob.PNG", alt: "Motivational image with a software development theme."},
    {src: "./images/heroc.jpg", alt: "Software development society | project 1 code base | angle 2."},
    {src: "./images/herod.jpg", alt: "Software development society | project 2 code base | angle 1."},
    {src: "./images/lit.jpg", alt: "Exterior of the LIT moylish campus."},
    {src: "./images/projecta.png", alt: "Software development society project 1 | Online portfolio"},
    {src: "./images/projectb.png", alt: "Software development society project 2 | Kanban board"},
    {src: "./images/projectc.png", alt: "Software development society project 3 | Web based video game | Pong"},
    {src: "./images/soc.jpg", alt: "Close up of a computer used within the software development society."},
    {src: "./images/heroe.jpg", alt: "Close up of software development society email."}
];


 
/* FUNCTIONS */
function navControl() 
{
    let nav = document.getElementById("myTopnav");
    if (nav.className === "topnav")
      nav.className += " responsive";
    else
      nav.className = "topnav";
}
// javascript form validation
// checking using REGULAR EXPRESSIONS
function checkExpEmail(email)
{
  // validating email input patterns
  if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    return true;
  return false;
}
function checkExpPhone(phone)
{
  // validating phone input patterns
  if (phone.value.match(/^\d{10}$/))
  {
    const prefix = phone.value.substr(0,3);
    for (let i = 0; i < 4; i++)
    {
      if (prefix == "083" || prefix == "085" || prefix == "086" || prefix == "087" || prefix == "089")
        return true;
    }
  }
  return false;
}
function validate()
{
  // Validation actions - NOTE: regualar expressions have been used to obtain additional marks noted in the assignment spec
  const notValid = (msg) => 
  { 
    alert(msg); 
    return false; 
  };
  // object containg members that refer to the html form
  const form = 
  {
    // reffering to the form itself
    self: document.getElementById("members-form"),
    // reffering to form inputs
    name: document.getElementById("name"),
    address: document.getElementById("address"),
    mobile: document.getElementById("mobile"),
    email1: document.getElementById("email1"),
    email2: document.getElementById("email2"),
    member: document.getElementById("member"),
    query: document.getElementById("query"),
    submit: document.getElementById("submit")
  };
  // validating inputs
  if (form.name.value==null || form.name.value=="")
    return notValid("Please enter name.");
  if (form.email1.value==null || form.email1.value=="")
    return notValid("Please enter email 1.");
  if (form.email2.value!=form.email1.value)
    return notValid("Email 2 must match Email 1.");
  if (form.query.value==null || form.query.value=="")
    return notValid("Please enter your query.");

  // checking the text patterns for email and phone
  if (checkExpEmail(form.email1)==false)
    return notValid("Invalid email 1.");
  if (checkExpEmail(form.email2)==false)
    return notValid("Invalid email 2.");
  if (checkExpPhone(form.mobile)==false)
    return notValid("Invalid phone number.\nWe only accept phone numbers with the following prefix.\n\t- 083\n\t- 085\n\t- 086\n\t- 087\n\t- 089\nAlso ensure your phone number is 10 digits long.");
  // if all previous validation rules have been passed then submit i.e. return true
  return true;
}
// slideshow functions
function changeEVENT(event)
{
  const showcase = 
  {
    title: document.getElementById("eventShowcase-TITLE"),
    description: document.getElementById("eventShowcase-DESC")
  };
  switch(event)
  {
  case 1:
    showcase.title.innerText = "Event 1";
    showcase.description.innerHTML = 
    `<strong>Activity:</strong>Design a firebase database for saving user scores in pong.
    <br>
    <strong>Date:</strong>21/04/2020.
    <br>
    <strong>Status:</strong>Complete ✔️.
    <br>
    <strong>Location:</strong>Video call.`;
    break;
  case 2:
    showcase.title.innerText = "Event 2";
    showcase.description.innerHTML = 
    `<strong>Activity:</strong>Implement database design.
    <br>
    <strong>Date:</strong>08/04/2020.
    <br>
    <strong>Status:</strong>Complete ✔️.
    <br>
    <strong>Location:</strong>Video call.`;
    break;
  case 3:
    showcase.title.innerText = "Event 3";
    showcase.description.innerHTML = 
    `<strong>Activity:</strong>Add PWA functionality to pong.
    <br>
    <strong>Date:</strong>15/04/2020.
    <br>
    <strong>Status:</strong>Complete ✔️.
    <br>
    <strong>Location:</strong>Video call.`;
    break;
  case 4:
    showcase.title.innerText = "Event 4";
    showcase.description.innerHTML = 
    `<strong>Activity:</strong>Add user authentication to pong.
    <br>
    <strong>Date:</strong>21/04/2020.
    <br>
    <strong>Status:</strong>Incomplete.
    <br>
    <strong>Location:</strong>Video call.`;
    break;
  case 5:
    showcase.title.innerText = "Event 5";
    showcase.description.innerHTML = 
    `<strong>Activity:</strong>Stress test pong database internally.
    <br>
    <strong>Date:</strong>29/04/2020.
    <br>
    <strong>Status:</strong>Incomplete.
    <br>
    <strong>Location:</strong>Video call.`;
    break;
  case 6:
    showcase.title.innerText = "Event 6";
    showcase.description.innerHTML = 
    `<strong>Activity:</strong>Deploy pong to firebase server.
    <br>
    <strong>Date:</strong>30/04/2020.
    <br>
    <strong>Status:</strong>Incomplete.
    <br>
    <strong>Location:</strong>Video call.`;
    break;
  };
  // clear all events from the focus class and apply it to the event in question
  for (let i = 1; i < 7; i++)
  {
    document.getElementById(`event-${i}`).style.border = "none";
  }
  document.getElementById(`event-${event}`).style.border = "0.5rem solid black";
}
// Gallery control buttons
function next()
{
    if (pos <= 8)
    {
        pos++;
        changeIMG(pos);
    }
    else if (pos == 9)
    {
        changeIMG(0);
        pos = 0;
    }
    else
        changeIMG(pos);
}
function prev()
{
    if (pos >= 1)
    {
        pos--;
        changeIMG(pos);
    }
    else if (pos == 0)
    {
        changeIMG(9);
        pos = 9;
    }
    else
        changeIMG(pos)
}
// Cross site functions
fade.forEach(item => 
    {
    popInScroll.observe(item);
    }
);
/* PAGE DEPENDANT PROCESSES */
switch(page)
{
case "SDS | Home":
    // No functionality needed
    break;
case "SDS | Background":
    // No functionality needed
    break;
case "SDS | Events":
    // No functionality needed
    break;
case "SDS | Projects":
    const mainEL = 
    { 
        image: document.getElementById("showcase-img"), 
        title: document.getElementById("showcase-title"), 
        description: document.getElementById("showcase-description")
    };
    // elements is an array of objects refering the the attributes of each html element that represents a society project
    const elements = 
    [
        // object for the project-1 element
        {
        element: document.getElementById("project1"), 
        src: "./images/projecta.png", 
        alt: "LIT software development society online portfolio",
        title: "Project 1 | Intro to web development",
        textcontent: 
        `
        For our first project we developed the layout for our online portfolios.
        A base layout is given and each member improves upon it to make it their own.
        The goal of this project is to learn the basics of HTML and CSS.
        Upon completion of future projects members will come back to this portfolio and link society projects and make a note of their contribution.
        `
        },
        // object for the project-2 element
        {
        element: document.getElementById("project2"), 
        src: "./images/projectb.png", 
        alt: "LIT software development society kanban board project",
        title: "Project 2 | Database project",
        textcontent: 
        `
        For our second project we developed a web based kanban board application.
        The motive behind this project was the introduce modern web technologies such as cloud database and javascript.
        
        From this project members were able to read/write to firebase firestore (database technology).
        Create structured layouts with css grids.
        Modify html content dynamically with javascript events.
        `
        },
        // object for the project-3 element
        {
        element: document.getElementById("project3"), 
        src: "./images/projectc.png", 
        alt: "LIT software development society pong video game project",
        title: "Project 3 | Video game development",
        textcontent: 
        `
        For our final project we developed a video game (pong) using javascript.
        We learned how to read keyboard inputs and assign events to each key (such as player movement) as well as how to create basic graphics with html canvas.
        `
        }
    ];
    document.getElementById("showcase-description").innerText = elements[0].textcontent;
    elements.forEach(project => {
        project.element.addEventListener("mousedown", () => {
        // changing the project showcase image
        mainEL.image.src = project.src;
        mainEL.image.alt = project.alt;
        // changing the project showcase title
        mainEL.title.innerText = project.title;
        // chaning the project showcase description
        mainEL.description.innerText = project.textcontent;
        });
    });
    break;
case "SDS | Gallery":
    for (let i = 1; i < 11; i++)
    {
        document.getElementById(`pic${i}_img`).addEventListener("mouseover", () => { changeIMG(i-1); });
        document.getElementById(`pic${i}_img`).addEventListener("mouseout", () => { changeIMG(pos); });
    }
    break;
case "SDS | Contact":
    // Functions for validation created earlier in this script and added to the html file
    break;
case "SDS | Links":
    // No functionality needed for this page
    break;
};