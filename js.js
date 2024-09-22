function unit_element(main_array, element_no){
    let unitElement = Array(main_array.length)
    const a = [...main_array]
    for (i = 0; i<a.length; i++){
        while (a[i]>=(10**(5-element_no))){
            a[i] = a[i]%(10**(5-element_no))
        }
        unitElement[i] = parseInt(a[i]/(10**(4-element_no)))
    } 
    return unitElement
}

function getRandomNumberFromArray(arr) {
    randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex];
}

function remainingElementArray(main_array,unit_array, random_number ){
    let j = 0
    let newArray = []
    for (i=0; i<unit_array.length; i++){
        if (random_number == unit_array[i]){
            newArray[j] = main_array[i]
            j++
        }
    } 
    return newArray  
}

function countTo( final , output){
    let from= 0;
    let to = 9;
    let step = 1;
    let interval = 100;

    if(from == to){
        output.textContent = from;
        return;
    }
    let j= 0
    let counter = setInterval(function(){
        from += step;
        output.textContent = from;

        if(from == to || from==0){
            if (step ==1){
                step=-1;
            }
            else{
                step = 1;
            }
        }
        j++
        if (j==30){
            clearInterval(counter);
            output.textContent = final;
        }
    }, interval);
}

let n = [2361, 4486, 2083, 1281, 8776, 3619, 5785, 8024, 2863, 1603, 8853, 6834, 7139, 8144, 8847, 7236, 4572, 7747, 4570, 4596, 1333, 8151, 7495, 7022, 6612, 8273, 7725, 3007, 8368, 7294, 1702, 6445, 7369, 7154, 2404, 6354, 7906, 5575, 1202, 1008, 3007, 4276, 4914, 4065, 7404, 3073, 3581, 5706, 5129, 5856, 6389, 3514, 1103, 2712, 7843, 5272, 8772, 1157, 4252, 7985, 2690, 6194, 6579, 5798, 7528, 2103, 6599, 7408, 8429, 2137, 7853, 5755, 5166, 1871, 2903, 1071, 4974, 8125, 2396, 2120, 6261, 8430, 8157, 8510, 4450, 4523, 2497, 8324, 8534, 3040, 6522, 2252, 4045, 8161, 5628, 5213, 3948, 5263, 4124, 6618]

const firstBtn = document.getElementById("first_btn")
const secondBtn = document.getElementById("second_btn")
const thridBtn = document.getElementById("third_btn")
const fourthBtn = document.getElementById("fourth_btn")

const first_el = document.getElementById("first")
const second_el = document.getElementById("second")
const third_el = document.getElementById("third")
const fourth_el = document.getElementById("fourth")

let congratulation = document.getElementById("congrats")

fourthBtn.addEventListener('click', ()=>{
    fourth = unit_element(n, 4)
    random_fourth = getRandomNumberFromArray(fourth)
    similar_fourth_array = remainingElementArray(n, fourth, random_fourth)
    countTo(random_fourth, fourth_el)
})

thridBtn.addEventListener('click', ()=>{
    third= unit_element(similar_fourth_array, 3)
    random_third = getRandomNumberFromArray(third)
    similar_third_array = remainingElementArray(similar_fourth_array, third, random_third)
    countTo(random_third, third_el)

})

secondBtn.addEventListener('click', ()=>{
    second= unit_element(similar_third_array, 2)
    random_second = getRandomNumberFromArray(second)
    similar_second_array = remainingElementArray(similar_third_array, second, random_second)
    countTo(random_second, second_el)

})

firstBtn.addEventListener('click', ()=>{
    first= unit_element(similar_second_array, 1)
    random_first = getRandomNumberFromArray(first)
    similar_first_array = remainingElementArray(similar_second_array, first, random_first)
    countTo(random_first, first_el)
    setTimeout(function(){
        congratulation.innerHTML ='Lucky Number:' + similar_first_array
    }, 3400)
})

