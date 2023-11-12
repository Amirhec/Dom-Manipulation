
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