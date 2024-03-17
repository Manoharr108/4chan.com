let regex = /\[|\]/g
let word = document.querySelector(".container input")
async function facts(){
    const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word.value}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9bf8a5bef5msh331fca84e552463p13e648jsn3df753fc3a79',
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if(result.list.length == 0){
            alert("The entered word may be incorrect or not available at this moment!!")
            word.innerHTML = ""
            word.value = ""
            document.getElementById("paragraph").innerHTML = ""
        }
        if(result.list.length != 0)
            document.getElementById("paragraph").innerHTML = "Defintions for " +'"'+word.value+'"';
        let r = document.querySelector(".api_output")
        while (r.lastElementChild) {
            r.removeChild(r.lastElementChild);
          }
          
          let arr = ["primary", "secondary", "success", "danger", "warning", "info" , "dark"];
          let y =0;
          let cnt =0;
          cnt = Number.parseInt(cnt)
          console.log(result.list.length)
        for(def in result.list){
            // let color = arr[Math.floor(Math.random()*arr.length)]
            if(y == arr.length-1){
                y = 0
            }
            let color  = arr[y]
            // console.log(color)
            // console.log((def)+":"+result.list[def].definition)
            let temp = document.createElement("div")
            temp.setAttribute("class",`alert alert-${color}`)
            temp.innerHTML = (cnt+1)+". "+result.list[def].definition
            r.append(temp)
            cnt++
            y++
        }

    } catch (error) {
        console.error(error);
    }
	}
document.querySelector(".container button").addEventListener("click",()=>{

        document.getElementById("ux").style.display = "block"
        document.getElementById("ui").style.display = "none"
    setTimeout(()=>{
        document.getElementById("ux").style.display = "none"
        document.getElementById("ui").style.display = "block"
    },1500)
    facts()
    console.log(word.value)
})
document.querySelector(".container input").addEventListener("keypress",(event)=>{
    if(event.key == "Enter"){
        document.getElementById("ux").style.display = "block"
        document.getElementById("ui").style.display = "none"
    setTimeout(()=>{
        document.getElementById("ux").style.display = "none"
        document.getElementById("ui").style.display = "block"
    },1500)
        facts()
    }
})
document.getElementById("icon").addEventListener("click",()=>{
    word.innerHTML = ""
    word.value = ""
    document.getElementById("paragraph").innerHTML = ""
})