function sendEmail() {
    let email = document.getElementById("emailId").value;
    let phone = document.getElementById("phoneId").value;
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let description = document.getElementById("descripcionId").value;
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "enviador.boss@gmail.com",
      Password: "1C10ECBFC18E8BDE84054FA5995A0966EAE8",
      To: 'mauricioperessutti@gmail.com',
      From: email,
      Subject: "Envio de mail desde la web de IGRIEGA de " + name + " " + lastName + "Telefono: " + phone,
      Body: description,
    })
      .then(function (message) {
        alert("Mail has been sent successfully")
        location.href = 'index.html'
      });


}

function checkValues(){

}