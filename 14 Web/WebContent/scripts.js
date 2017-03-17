$(document).ready(function() {
    
    // Validates empty inputs
    var validateEmpty = function(element) {
        var input = $(element);
        var value = input.val();
        if(value) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    }
    
    var validatePhone = function(element) {
        var input = $(element);
        var value = input.val();
        
        if(!isNaN(value) && value.length == 9)
        {
	       input.removeClass("invalid").addClass("valid");
        }
        else
        {
            input.removeClass("valid").addClass("invalid");
        }
    }
    
    var validateEmailId = function (element)
    {
    	var input = $(element);
    	var email = input.val();
    	var posAt = email.indexOf("@");
    	var posLastDot = email.lastIndexOf(".");
    	
    	if (posAt < 1 || posLastDot < posAt + 2 || posLastDot + 2 >= email.length)
    	{
    		input.removeClass("valid").addClass("invalid");
    	}
    	else
    	{
    		input.removeClass("invalid").addClass("valid");
    	}
    };
    
    var validateSubmission = function(event, element) {
        var errorFree = true;
        
        $('input[type=text]').each(function() {
            validateEmpty(this);
            var id = '#' + $(this).attr('id') + 'Error';
            
            if($(this).hasClass('invalid')) {
                $(id).removeClass('error').addClass('error_show');
                $(id).html('Invalid data');
                errorFree = false;
            } else {
                $(id).removeClass('error_show').addClass('error');
                $(id).html('');
            }
        });
        
        $('input[type=password]').each(function() {
            validateEmpty(this);
            var id = '#' + $(this).attr('id') + 'Error';
            
            if($(this).hasClass('invalid')) {
                $(id).removeClass('error').addClass('error_show');
                $(id).html('Invalid data');
                errorFree = false;
            } else {
                $(id).removeClass('error_show').addClass('error');
                $(id).html('');
            }
        });
        
        $('#emailAddress').each(function() {
            validateEmailId(this);
            var id = '#' + $(this).attr('id') + 'Error';
            
            if($(this).hasClass('invalid')) {
                $(id).removeClass('error').addClass('error_show');
                $(id).html('Invalid data');
                errorFree = false;
            } else {
                $(id).removeClass('error_show').addClass('error');
                $(id).html('');
            }
        });
        
        $('#phoneNumber').each(function() {
            validatePhone(this);
            var id = '#' + $(this).attr('id') + 'Error';
            
            if($(this).hasClass('invalid')) {
                $(id).removeClass('error').addClass('error_show');
                $(id).html('Invalid data');
                errorFree = false;
            } else {
                $(id).removeClass('error_show').addClass('error');
                $(id).html('');
            }
        });
        
        if(!errorFree) {
            event.preventDefault();
        }
    }
    
    var validatePin = function (element)
    {
    	var input = $(element);
    	var pinNum = input.val();
    	
    	    	if(isNaN(pinNum))
    	{
    		input.removeClass("valid").addClass("invalid");
    		return false;
    	}
    	else if(pinNum.length!=6)
    	{
    		input.removeClass("valid").addClass("invalid");

    	}
    	else
    	{
    		input.removeClass("invalid").addClass("valid");
    	}
    };
    
    // Attach envent handlers to input elements
    $('input[type=text]').on('input', function() {
       validateEmpty(this); 
    });
    
    $('input[type=text]').focusout(function() {
        validateEmpty(this);
    });

    $('#login').submit(function(event) {     
        validateSubmission(event, this);    
    });
    
    $('#regInfo').submit(function(event) {
       validateSubmission(event, this); 
    });
    
    $('#emailAddress').on('input', function() {
    	validateEmailId(this);
    });
    
    $('#emailAddress').focusout('input', function() {
    	validateEmailId(this);
    });
    
    $('#zipcode').on('input', function() {
    	validatePin(this);
    });
    
    $('#zipcode').focusout('input', function() {
    	validatePin(this);
    });

    $('#phoneNumber').on('input', function() {
    	validatePhone(this);
    });
    
    $('#phoneNumber').focusout('input', function() {
    	validatePhone(this);
    });
    
    /*$('#email').on('input', function() {
	   var input = $(this);
	   var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	   var is_email = re.test(input.val());
	   if(is_email) {
           input.removeClass("invalid").addClass("valid");
       }
	   else {
           input.removeClass("valid").addClass("invalid");
       }
    });*/
    

});