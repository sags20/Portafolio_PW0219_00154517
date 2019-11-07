let carnet_field = document.querySelector("#carnet_field");
let schedule_option = document.querySelector("#schedule_field");
let late_switch = document.querySelector("#late_switch");
let submit_btn = document.querySelector("#submit_btn");
let tbody = document.querySelector("#table_body");
let student_list = []
let serial = 0

let carnet_regex = new RegExp("^[0-9]{8}$")

let printArray = () => {

    table_body.innerHTML = ""

    student_list.forEach(elem => {
        let new_row = document.createElement("tr")
        let datetime = new Date()
        let new_cell = document.createElement("td")
        let new_btn = document.createElement("button")
        


        new_row.classList.add("table-active")
        new_row.innerHTML = `<td>${elem.carnet}</td>
      <td>${elem.horario}</td>
      <td>${datetime.toLocaleString()}</td>
      <td>${elem.tarde}</td>`


        new_btn.className = "btn btn-danger"
        new_btn.innerText = "eliminar"
        new_btn.value = elem.id


        new_btn.addEventListener("click", event => {
            let id_actual = event.target.value
            student_list.forEach((elem, pos) => {
                if (id_actual == elem.id) {
                    student_list.splice(pos, 1)
                    printArray()
                }
            })
        })

        new_cell.appendChild(new_btn)
        new_row.appendChild(new_cell)
        tbody.appendChild(new_row)
    })

}

let addStudent = (carnet, schedule, late) => {

    student_list.push({
        "id": serial,
        "carnet": carnet,
        "horario": schedule,
        "tarde": late
    })

    serial++
}

let parseLateBool = (value) => {

    if (value) {
        return "llego tarde"
    } else {
        return "no llego tarde"
    }

}

submit_btn.addEventListener("click", () => {
    let carnet = carnet_field.value
    let schedule = schedule_option.options[schedule_option.selectedIndex].text
    let late = parseLateBool(late_switch.checked)


    if (carnet_regex.test(carnet)) {
        addStudent(carnet, schedule, late)
        printArray()
    } else {
        alert("no se puede")
    }


});

carnet_field.addEventListener("keyup", (event) => {
    if (event.keyCode == 13) {
        submit_btn.click()
    }
})