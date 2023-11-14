
const container = document.querySelector("#container")
const paragraph = document.createElement("p")
paragraph.textContent = "Hey im red"
paragraph.style.cssText = "color: red;"
container.appendChild(paragraph)
const header = document.createElement('h3')
header.textContent = 'Im a blue h3!'
header.style.cssText = 'color: blue;'
container.appendChild(header)



const content = document.createElement('div')
content.classList.add("content")
content.style.cssText = "border: 10px solid black; background-color: pink"
const secondHeader = document.createElement("h1")
secondHeader.textContent = "Im in a div"
const secondParagraph = document.createElement("p")
secondParagraph.textContent = "ME TOO!"
content.appendChild(secondHeader)
content.appendChild(secondParagraph)

container.appendChild(content)

const buttons = document.querySelectorAll("button")

let i = 0 
    while(i<buttons.length){
    let current_index = i
        buttons[i].addEventListener('click', () => {
            alert(buttons[current_index].id);
          });
    i+=1
    }

buttons.forEach((buttons) => {

    // and for each one we add a 'click' listener
    buttons.addEventListener('click', () => {
      alert(buttons.id);
    });
  });
  