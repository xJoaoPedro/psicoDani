const collapse = document.getElementsByClassName("collapsible")
let id = 0
let content;

for (let i = 0; i < collapse.length; i++) {
    collapse[i].id = id
    id++
    collapse[i].addEventListener("click", function() {
        this.classList.toggle("activeColl")
        console.log(this.innerHTML)
        if (this.innerHTML == "▿") {
            this.innerHTML = "▵"
        } else {
            this.innerHTML = "▿"
        }

        for (let i = 0; i < collapse.length; i++) {
            if (collapse[i].id == this.id) {
                content = this.nextElementSibling
                if (content.style.display === 'block'){
                    content.style.display = ''
                } else {
                    content.style.display = 'block'
                }

            } else {
                content = collapse[i].nextElementSibling
                content.style.display = ''
            }   
        }

    })
}

console.log(collapse)