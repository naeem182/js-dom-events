console.log('separate js')



//star
//op 2 add onclick by fun
function mkyello() {
    document.body.style.backgroundColor = 'yellow'
}



//op 3 add onclick by fun after find id
const blubtn = document.getElementById('mkblue')

blubtn.onclick = fblue
function fblue() {
    document.body.style.backgroundColor = 'blue'
}

//op 3 another add onclick by fun after find id
const purplebtn = document.getElementById('mkpurple')

purplebtn.onclick = function fpurple() {
    document.body.style.backgroundColor = 'purple'
}
//op 4  addeventlistener by fun call after find id 
const pinkbtn = document.getElementById('mkpink')

pinkbtn.addEventListener('click', fpink)

function fpink() {
    document.body.style.backgroundColor = 'pink'
}
//op 4 another addeventlistener by with fun after find id
const greenbtn = document.getElementById('mkgreen')

greenbtn.addEventListener('click', function fgreen() {
    document.body.style.backgroundColor = 'green'
})


//star
//op 4 final addeventlistener by with fun after find id in one line

document.getElementById('mkgoldenrod').addEventListener('click', function fgoldenrod() {
    document.body.style.backgroundColor = 'goldenrod'
})