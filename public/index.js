


let user = generateId(); 

document.getElementById('btn-danger').onclick = async()=>{

    let url = 'http://localhost:3000/api/start';
    const resp = await fetch(url,{
        method:'POST',
        body: JSON.stringify({user}),
        headers: {
            'Content-Type': 'application/json'
          },
    })

    if(resp.ok){
        const data = await resp.json();

        console.log(data.msg);

        showAlert(data.msg)
    }
}


function showAlert(msg) {

    const alertBox = document.getElementById("alert"); 
    alertBox.innerHTML = msg;
    alertBox.style.display = "block";    
}

function generateId(params) {
    
    let numberIdentifier ="";
    numberIdentifier += Math.floor(Math.random() * 10);
    numberIdentifier += Math.floor(Math.random() * 10);
    numberIdentifier += Math.floor(Math.random() * 10);
    numberIdentifier += Math.floor(Math.random() * 10);

    return generateRandomLetter()+numberIdentifier;

}

function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"  
    
    return alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
  }


