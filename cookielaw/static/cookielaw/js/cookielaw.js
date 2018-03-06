var Cookielaw = {

    _create_cookie: function(name, value, days) {
        var date = new Date(),
            expires = '';
        if (days) {
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    },

    accept: function() {
        this._create_cookie('cookielaw_accepted', '1', 10 * 365);
        this.close()
    },

    show: function() {
        jQuery('#cookielaw-banner .message').slideDown("slow");
    },

    close: function() {
        jQuery('#cookielaw-banner .message').slideUp("slow");
    }

};

jQuery(document).ready(function() {
    Cookielaw.show();
});
