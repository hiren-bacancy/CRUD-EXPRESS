function sub() {
    var userdata = {
        fname : document.getElementById('fn').value,
        lname : document.getElementById('ln').value,
        email : document.getElementById('mail').value,
        contact : document.getElementById('contact').value
    }
    
    
    alert(userdata.fname+'\n'+userdata.lname+'\n'+userdata.email+'\n'+userdata.contact);
}

$(document).ready(function(){
    $('#fsb').click(function(){
        var user = {
        fname : document.getElementById('fn').value,
        lname : document.getElementById('ln').value,
        email : document.getElementById('mail').value,
        contact : document.getElementById('contact').value
    }
      $('#tb1 tbody').append('<tr class="child"><td>'+user.fname+'</td><td>'+user.lname+'</td><td>'+user.email+'</td><td>'+user.contact+'</td></tr>');
      document.getElementById('fn').value = '';
      document.getElementById('ln').value = '';
      document.getElementById('mail').value = '';
      document.getElementById('contact').value = '';
    });
});