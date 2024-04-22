const collapse = document.getElementsByClassName("btn_pergunta")
let id = 0
let content;

for (let i = 0; i < collapse.length; i++) {
    collapse[i].id = id
    id++
    collapse[i].addEventListener("click", function() {
        this.classList.toggle("activeColl")
        
        let pergunta = this.innerHTML.split(" ")
        if (pergunta[0] == "▾") {
            pergunta[0] = "▴"
        } else {
            pergunta[0] = "▾"
        }

        pergunta = pergunta.join(" ")
        this.innerHTML = pergunta

        for (let i = 0; i < collapse.length; i++) {
            if (collapse[i].id == this.id) {
                
                console.log(collapse[i].style.borderRadius)
                if (collapse[i].style.borderRadius == "15px 15px 0px 0px") {
                    collapse[i].style.borderRadius = "15px"
                    collapse[i].style.borderBottom = "solid 1px #000"
                } else {
                    collapse[i].style.borderRadius = "15px 15px 0 0"
                    collapse[i].style.borderBottom = "0"
                }

                content = this.nextElementSibling
                if (content.style.display === 'block'){
                    content.style.display = ''
                } else {
                    content.style.display = 'block'
                }

            } else {
                content = collapse[i].nextElementSibling
                content.style.display = ''

                let arruma = collapse[i].innerHTML.split(" ")
                arruma[0] = "▾"
                arruma = arruma.join(" ")
                collapse[i].innerHTML = arruma

                collapse[i].style.borderRadius = "15px"
                collapse[i].style.borderBottom = "solid 1px #000"
            }   
        }

    })
}
