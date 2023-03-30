function sendEmail() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "enviador.boss@gmail.com",
      Password: "1C10ECBFC18E8BDE84054FA5995A0966EAE8",
      To: 'enviador.boss@gmail.com',
      From: "enviador.boss@gmail.com",
      Subject: "TESTING TO MAIL",
      Body: "Well that was easy TESTING to mail!!",
    })
      .then(function (message) {
        alert("Mail has been sent successfully")
      });

}