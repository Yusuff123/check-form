let input = document.getElementById('input');
let code = document.getElementById('code');
let alertsection = document.getElementById('alertsection');
let button = document.getElementById('button');

function controlFunc(){
    code.innerHTML = (((Math.floor(Math.random() * 10000) + 1)) + ((Math.floor(Math.random() * 1000) + 1)))
}

controlFunc()

button.addEventListener('click', function(){
    if(input.value === code.innerHTML){
        console.log(true)
        alertsection.innerHTML = `<div class="alert alert-primary" role="alert">
        Başarılı bir şekilde giriş yapıldı ! </div>`
        location.reload()
    }
    else {
        alertsection.innerHTML = `<div class="alert alert-danger" role="alert">
        Kodu yanlış girdiniz !
      </div>`
      location.reload()
    }
})