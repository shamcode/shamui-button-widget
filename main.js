define( [
    "shamUI"
], function( shamUI ) {
    var Button = shamUI.Class( shamUI.Widget,
        {
            constructor: function() {
                return Button.$super.apply( this, arguments );
            },

            defaultOptions: {
                actionSequence: [ "render", "bindEvents" ],
                bindOnce: false,
                text: function() { return ""; },
                onClick: function() {}
            },

            html: function() {
                return [
                    "<div class='btn'>",
                    this.options.text.call( this ),
                    "</div>"
                ].join( "" );
            },

            bindEvents: function() {
                this.container.querySelector( ".btn" ).
                    addEventListener( "click", this.options.onClick.bind( this ), false );
            },

            destroy: function() {
                this.container.querySelector( ".btn" ).
                    removeEventListener( "click", this.options.onClick );
            }
        }
    );
    return Button;
} );
