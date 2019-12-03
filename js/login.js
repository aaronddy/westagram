const clickBtn = document.getElementById("logIn");
const typeId = document.getElementById("userId");
const typePw = document.getElementById("userPw");

typeId.addEventListener('keypress', (event) => {
   
   typePw.addEventListener('keypress', (event) => {

    clickBtn.style.backgroundColor = "#4082ed";
   })
    
});



/*clickBtn.addEventListener('click', function() {
    clickBtn.innerHTML = "working well!";
    alert("Is there something wrong?")
})   잘 작동쓰*/ 