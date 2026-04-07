document.addEventListener('DOMContentLoaded',function(){
  var form=document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var name=document.getElementById('name').value.trim();
    var email=document.getElementById('email').value.trim();
    var message=document.getElementById('message').value.trim();
    if(!name||!email||!message){
      alert('Please complete all fields.');
      return;
    }
    var subject=encodeURIComponent('Website inquiry from '+name);
    var body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message);
    window.location.href='mailto:teacher@example.com?subject='+subject+'&body='+body;
  });
});
