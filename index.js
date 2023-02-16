
const form = document.querySelector('form')
const body = document.getElementById('body')
form.addEventListener('submit', (e) => {
    
    e.preventDefault()
    const name = document.getElementById('name')
    const dep = document.getElementById('dep')
    const registration = document.getElementById('registration')
    const email = document.getElementById('email')
    const age = document.getElementById('age')
    const car = document.getElementById('car')


    const data = {
        name: name.value,
        department: dep.value,
        registration: registration.value,
        email: email.value,
        age: age.value,
        car: car.value
    }



    const html = `
    <tr>
        <td>${data.name}</td>
        <td>${data.department}</td>
        <td>${data.registration}</td>
        <td>${data.email}</td>
        <td>${data.age}</td>
        <td>${data.car}</td>
    </tr> 
    `

    body.innerHTML = html

    console.log(data)



    console.log('Clicked')
})