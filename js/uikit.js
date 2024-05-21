export function createSlider(object){
    const title = document.createElement("tiny");
    title.innerHTML = object.title

    const slider = document.createElement("calcite-slider");
    slider.id = object.id
    slider.value = object.value
    slider.min = object.min
    slider.max = object.max
    slider.precise = true
    slider.ticks = object.ticks
    slider.labelHandles = true
    slider.minLabel = object.min
    slider.maxLabel = object.max
    slider.snap = true
    slider.step = object.step

    slider.style.marginBottom = "20px"

    document.getElementById("input-panel").appendChild(title).appendChild(slider)
}

export function createNumInput(object){
    const title = document.createElement("tiny");
    title.innerHTML = object.title

    const input = document.createElement("calcite-input-number")
    input.id = object.id
    input.placeholder = object.placeholder
    input.step = object.step
    input.min = object.min
    input.max = object.max

    input.style.marginBottom = "20px"

    document.getElementById("input-panel").appendChild(title).appendChild(input)
}

export function createHeading(text){
    const heading = document.createElement("h3")
    heading.innerHTML = text
    document.getElementById("input-panel").appendChild(heading)
}

export function createButton(object){
    const button = document.createElement("button")
    button.id = object.id
    button.innerHTML = object.text

    button.style.marginBottom = "20px"

    document.getElementById("input-panel").appendChild(button)
}