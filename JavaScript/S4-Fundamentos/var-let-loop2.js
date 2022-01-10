/*const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
*/

const funcs = []

for (let x = 0; x < 10; x++){
    funcs.push(function(){
        console.log(x)
    })
}

funcs[2]()
funcs[8]()