define( [
    "../main"
], function(
        WidgetButton
    ) {
    return function( UI ) {
        new WidgetButton(
            "#button-first",
            "button-1",
            {
                text: function() {
                    return "Button \"" + this.ID + "\""
                },
                onClick: function() {
                    UI.render.ONLY( "button-2", "button-3" );
                }
            }
        );

        new WidgetButton(
            "#button-second",
            "button-2",
            {
                text: function() {
                    return "Button \"" + this.ID + "\" " + Date.now();
                },
                renderDependence: [ "button-3" ]
            }
        );

        new WidgetButton(
            "#button-third",
            "button-3",
            {
                text: function() {
                    return "Button \"" + this.ID + "\" " + Date.now();
                }
            }
        )
    };
 } );
