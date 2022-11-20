let count=0
let point=0
let score
let result=document.getElementById("home-score")
let result1=document.getElementById("guest-score")

function home1(){
    count+=1
    score=result.textContent=count       
}

function home2(){
    count+=2
  score=result.textContent=count   
}

function home3(){
    count+=3
    score=result.textContent=count    
}
function guest1(){
    point+=1
    score=result1.textContent=point 
        
}
function guest2(){
    point+=2
    score=result1.textContent=point 
        
}
function guest3(){
    point+=3
    score=result1.textContent=point 
        
}