
$(document).ready (function(){



$("#formvalidation").validate({
    rules:{
        firstname:{
            required:true,
            minlength:3,
        },
        email:{
            required:true,
            email:true
        },
        numberphone:{
            required:true,
            minlength:3,
            number:true
        },

    }, 
    messages:{
        firstname:{
            required:"fill this part",
            minlength:"valid name please"
        },
        email:{
            required:"fill this part",
            email:"valid email please"
        },
        numberphone:{
            required:"fill this part",
            number:"number please",
            minlength:"valid number please",
            maxlength:" valid number please"
        }
    }

    })

})