//typed js
const typed = new Typed('.multiple-text',{
    strings:['Nigerian', 'Student', '20 year old', 'Enginering student', 'Football fan'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
}); 

//button click 

function showInfo() {
    var infoContainer = document.getElementById("info");
    infoContainer.innerHTML = "<table>\
                                    <tr>\
                                        <td><strong>Name:</strong></td>\
                                        <td>Ahmed Mohammed Alkali</td>\
                                    </tr>\
                                    <tr>\
                                        <td><strong>Birthday:</strong></td>\
                                        <td>11 March 2003</td>\
                                    </tr>\
                                    <tr>\
                                        <td><strong>Nationality:</strong></td>\
                                        <td>Nigerian</td>\
                                    </tr>\
                                    <tr>\
                                        <td><strong>Phone:</strong></td>\
                                        <td>+48 882 106 523</td>\
                                    </tr>\
                                    <tr>\
                                        <td><strong>City:</strong></td>\
                                        <td>Rzsezow,Poland</td>\
                                    </tr>\
                                    <tr>\
                                        <td><strong>School:</strong></td>\
                                        <td>University Of Information Technology and Management (UITM) Rzsezow,Poland</td>\
                                    </tr>\
                                    <tr>\
                                        <td><strong>Degree:</strong></td>\
                                        <td>Bachelor</td>\
                                    </tr>\
                                    <tr>\
                                        <td><strong>Email:</strong></td>\
                                        <td>hmmalkali@gmail.com</td>\
                                    </tr>\
                                    <tr>\
                                        <td><strong>Occupation:</strong></td>\
                                        <td>Student</td>\
                                    </tr>\
                               </table>";
  
    // Triggering a reflow before applying opacity and transform styles
    // to ensure that the animation is smooth
    infoContainer.offsetHeight;
    infoContainer.style.opacity = 1;
    infoContainer.style.transform = "scale(1)";
  }


  function toggleSkills() {
    var skillsSection = document.getElementById("skills");
    if (skillsSection.style.display === "none") {
      skillsSection.style.display = "block";
    } else {
      skillsSection.style.display = "none";
    }
    
  }

  
//scroll reveal
ScrollReveal({ 
    //reset: true ,
    distance:'80px',
    duration:2000,
    delay:200

});

ScrollReveal().reveal('.home-content, .heading', { origin:'top ' });
ScrollReveal().reveal('.himg, .Education-container, .Hobbies-container', { origin:'bottom ' });
ScrollReveal().reveal('.home-content h1', { origin:'left ' });
ScrollReveal().reveal('.home-content p, .abcont', { origin:' right ' });



