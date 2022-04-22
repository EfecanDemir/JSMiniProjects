const services = [
    {
    task: "Wash Car",
    price:"10"
    },
    {
    task: "Mow Lawn",
    price:"20"
    },
    {
    task: "Pull Weeds",
    price:"30"
    },

]

const addBtnSection = document.getElementById("btn-section")
const taskArr = services.map(obj => (obj.task))
const priceArr = services.map(obj => parseInt(obj.price))
const selectedSection = document.getElementById("selected-section")
const noteText = document.getElementById("note-text")
const totalAmount = document.getElementById("total-amount")
const sendBtn = document.getElementById("send-btn")
let notification = document.getElementById("notification")
let selectedTasks = []
let selectedAmount = []
let addButtons = ""
let addTasks = []
let sum = 0

for(let i=0;i<taskArr.length;i++){
    addButtons += `<button class="add-btn" id="add-btn${i}">${taskArr[i]}: $${priceArr[i]}</button>`
    
}
addBtnSection.innerHTML =  addButtons


for(let i=0;i<taskArr.length;i++){
    window['addBtn'+i] = document.getElementById('add-btn'+i)
    window[`addBtn${i}`].addEventListener("click",function(){
        renderTasks(i) 
     })
}

function renderTasks(num) {
    if(selectedTasks.includes(taskArr[num])){
        notification.innerHTML = `<p class="notification-orange">"${taskArr[num]}" has already been added!`
    }
    else{
        selectedTasks.push(taskArr[num])
        selectedAmount.push(priceArr[num])
        
        addTasks.push (`
        <tr>
            <td class="table-left">
                ${taskArr[num]}
                <button id="remove-btn${num}" class="remove-btn">Remove</button>
            </td>
            <td class="table-right">   
                <span class="currency">$</span>${priceArr[num]}
            </td>
        </tr>`)
        
    
        renderTask()

        
        notification.innerHTML = `<p class="notification-green">"${taskArr[num]}" has been added successfully!`

        
        sumAmounts(num)

        getRmvBtnId()

    }
}

function renderTask(){

    selectedSection.innerHTML = ""  
    for(i=0;i<addTasks.length;i++){ 
        selectedSection.innerHTML += `${addTasks[i]}`
    }
}

function getRmvBtnId(){
    let RmvBtnTaskIndex = 0

  
    for(let i=0;i<selectedTasks.length;i++){
        RmvBtnTaskIndex = taskArr.indexOf(selectedTasks[i])
        
        
        window[`rmvBtn${RmvBtnTaskIndex}`] = document.getElementById(`remove-btn${RmvBtnTaskIndex}`)
        window[`rmvBtn${RmvBtnTaskIndex}`].addEventListener("click",function(){
        
            subAmounts(i)
            removeTask(i)
            
        })
        
    }
     
}       


function sumAmounts(num){
    sum += priceArr[num]
    noteText.textContent = "We accept cash, credit card, or PayPal"
    totalAmount.innerHTML = `<span class="currency">$</span>${sum}`
}

function removeTask(num){
    
        
    notification.innerHTML = `<p class="notification-red">"${selectedTasks[num]}" has been removed successfully!`

    addTasks.splice(num,1)
    selectedTasks.splice(num,1)
    selectedAmount.splice(num,1)
    
    renderTask()
    
    
     getRmvBtnId()
}

function subAmounts(num){
    sum -= selectedAmount[num]
    totalAmount.innerHTML = `<span class="currency">$</span>${sum}`
    if(sum === 0){
        noteText.textContent = ""
    }

    }

sendBtn.addEventListener("click",function(){
    location.reload(true)
})