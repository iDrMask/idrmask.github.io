var profileIndex = 0;
var profile = "Hewwo Thewe, Wewcome To My Powtfowio!!! :3";
var profileSpeed = 69;

window.onload = profileTypewriter( )

function profileTypewriter(){
    if (profileIndex < profile.length){
        document.getElementById('header').innerHTML += profile.charAt(profileIndex);
        profileIndex++;
        setTimeout(profileTypewriter,profileSpeed);
    }
}