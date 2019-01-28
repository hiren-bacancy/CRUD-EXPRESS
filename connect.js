$(document).ready(function(){
  
    //SENDING DATA TO SERVER  
    
    $('#fsb').click(function(){
        if(document.getElementById('fn').value == '' ||
            document.getElementById('ln').value == '' ||
            document.getElementById('mail').value == '' ||
            document.getElementById('contact').value == null){
                document.getElementById("aw").style.display = 'inherit'
                
        }
        else{
            var formdata = $('#uform').serialize();
            $.ajax({
                url:'http://localhost:3000/student/create',
                type:'POST',
                dataType:'JSON',
                data : formdata
            })
            document.getElementById("aw").style.display = 'none';
            document.getElementById("as").style.display = 'inherit';
            document.getElementById('fn').value = '';
            document.getElementById('ln').value = '';
            document.getElementById('mail').value = '';
            document.getElementById('contact').value = '';
        }
    })
    
  

    //RETRIVE ALL DATA FROM SERVER
    
    $.ajax({
        url :'http://localhost:3000/student',
        type : 'GET',
        dataType:'JSON',
        success : function(data){
            data.forEach(element => {
                $('#tb1 tbody').append('<tr class="child"><td>'+element.fname+' '+element.lname+'</td><td>'+element.email+'</td><td>'+element.contact+'</td><td><button class="edit" value="'+element.email+'" onclick="edit(this.value)">EDIT</button><button class="del" value="'+element.email+'" onclick="del(this.value)">DELETE</button></td></tr>');
                
                //PAGINATION IN TABLE

                $(".customer").fancyTable({ 
                    sortColumn:0,
                    sortable: true,
                    pagination: true, // default: false
                    paginationClass: "btn btn-light",
                    paginationClassActive: "active",
                    pagClosest: 3,
                    searchable: false,
                    globalSearch: true,
                    perPage: 5
                });
            });
        }
    })

    //UPDATE DATA

    $('#upd').click(function(){
        var formdata = $('#uform').serialize();
        var x = document.getElementById('mail').value;
        $.ajax({
            url:'http://localhost:3000/student/'+x+'/update',
            type:'PUT',
            dataType:'JSON',
            data : formdata
        })
        $('#fsb').attr('disabled',false);
        document.getElementById('fn').value = '';
        document.getElementById('ln').value = '';
        document.getElementById('mail').value = '';
        document.getElementById('contact').value = '';
    })

    //RETRIVE DATA FOR PERTICULAR EMAIL

    $('#fin').click(function(){
        if(document.getElementById('searchuser').value==''){
            alert('Enter Value')
        }else{
            $.ajax({
                url :'http://localhost:3000/student/'+document.getElementById('searchuser').value,
                type : 'GET',
                dataType:'JSON',
                success : function(data){
                        alert(data)
                        $('#tb2 tbody').append('<tr class="child"><td>'+data.fname+' '+data.lname+'</td><td>'+data.email+'</td><td>'+data.contact+'</td><td><button class="edit" value="'+data.email+'" onclick="edit(this.value)">EDIT</button><button class="del" value="'+data.email+'" onclick="del(this.value)">DELETE</button></td></tr>');
                }
            })
        }  
    })
    

});

//EDIT BUTTON LOGIC

function edit(mail){
    $('#fsb').attr('disabled',true);
    $.ajax({
        url :'http://localhost:3000/student/'+mail,
        type : 'GET',
        dataType:'JSON',
        success : function(data){
            document.getElementById('fn').value = data.fname;
            document.getElementById('ln').value = data.lname;
            document.getElementById('mail').value = data.email;
            document.getElementById('contact').value = data.contact;
        }
    })
}

//DELETE BUTTON LOGIC

function del(mail){
    var t = confirm('Press OK To Delete Data')
    if(t==true){
        $.ajax({
            url :'http://localhost:3000/student/'+mail+'/delete',
            type : 'DELETE',
            dataType:'JSON'
        })
        document.getElementById("ae").style.display = 'inherit';
    }
}