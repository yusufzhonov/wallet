export function render(arr, place, Component) {
    place.innerHTML = ""
    
    for (let item of arr) {
        let elem = Component(item, arr)

        place.append(elem)
    }
}