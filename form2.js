function getData() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let city = document.getElementById("city").value;
    let result = "Name: " + name + "<br>" +
                 "Email: " + email + "<br>" +
                 "Age: " + age + "<br>" +
                 "Phone: " + phone + "<br>" +
                 "City: " + city;
    document.getElementById("output").innerHTML = result;
}
