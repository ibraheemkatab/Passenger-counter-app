let count=0
let countEl=document.getElementById("count-el")
function increment(){
    count+=1
    countEl.textContent=count
}
let res=document.getElementById("result")
function save(){
let countStr=count+" - "
countEl.textContent=0
count=0
res.textContent+=countStr
}
