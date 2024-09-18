function adicionarTarefa() {    

    let input_tarefa = document.querySelector("input")    

        if (input_tarefa.value == false) {

            alert("Digite uma tarefa!")

        } else {

            let li = document.createElement("li")
            li.innerHTML = input_tarefa.value + "<span onclick='deletarTarefa(this)'>❌</span>"

            document.querySelector("ul").appendChild(li)

            input_tarefa.value = ""  

        }
        
}

function deletarTarefa(li) {

    li.parentElement.remove()

}