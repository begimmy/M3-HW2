let getBtn = document.getElementById('getBtn');

getBtn.onclick = () => 
{
    let id = document.getElementById('input').value;
    if (id >= 1 && id <= 10)
        {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => 
            {
                return response.json();
            })
        .then((data) => console.log(data))
        .catch(err => console.log(err))
    }

}
document.addEventListener('keydown', (event) => 
{
        let id = document.getElementById('input').value;
        if (id >= 1 && id <= 10)
        {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => 
            {
                return response.json();
            })
            .then((data => document.getElementById('root').innerHTML = 
            `<p>Name:${data.name}</p>
             <p>Username: ${data.username}</p>
             <p>Phone: ${data.phone}</p>`
        ))
        .catch(err => console.log(err))
        }
});      







