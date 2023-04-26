//typed js
const typed = new Typed('.multiple-text',{
    strings: [
        'Software Engineering Student',
        'Nigerian',
        'Football Fan'
    ],
    
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
}); 


 /**
   * Skills animation
   */
let skilsContent = select('.skills-content');
if (skilsContent) {
    new Waypoint({
     element: skilsContent,
     offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
}

