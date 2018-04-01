   var form = document.querySelector('form');
   var style = '<span style="font-size: 11pt;">'
   var error_mess = document.querySelector('.valid-message');
   var nb_val = '<span class="val-error">Please use only letters!!</span>';
   var re = /^[a-zA-Z]+$/;



   function validate() {

       if (!re.test(myForm.first_name.value)) {
           if (document.myForm.first_name.value == "") {
               error_mess.innerHTML = '<span class="val-error"> Do not forget to leave your ' + style + 'first</span> name !!</span>';
               form.first_name.focus();
               return false;
           }
           error_mess.innerHTML = nb_val;
           form.first_name.focus();
           return false;
       } else if (!re.test(myForm.last_name.value)) {
           if (document.myForm.last_name.value == "") {
               error_mess.innerHTML = '<span class="val-error"> Do not forget to leave your ' + style + 'last</span> name !!</span>';
               form.last_name.focus();
               return false;
           }
           error_mess.innerHTML = nb_val;
           form.last_name.focus();
           return false;
       } else if (document.myForm.message.value == "") {
           error_mess.innerHTML = '<span class="val-error"> Do not forget to leave your message !!</span>';
           form.message.focus();
           return false;
       }
   }