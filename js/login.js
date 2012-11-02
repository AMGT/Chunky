// Login Form
$(function() {    
    var button = $('.bot-login-panel');
    var box = $('.box-login-drop-down');
    var form = $('.login-form-panel');
    box.hide();
    button.removeAttr('href');
    button.click(function(login) {
        box.toggle();
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('.bot-login-panel').length > 0)) {
            box.hide();
        }
    });
});