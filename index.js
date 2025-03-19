// Add your code here
function submitData(userName, userEmail){
    const userData = {
        name: userName,
        email: userEmail
    } ;
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    }).then(res => res.json())
    .then(user=>{
        const body = document.querySelector('body')
        const p = document.createElement('p')
        p.textContent=user.id
        body.appendChild(p)
    }).catch((err)=>{
        const body = document.querySelector('body')
        const p = document.createElement('p')
        p.textContent= err.message
        body.appendChild(p)
    })
}

submitData("frank", "frank@example.com")