(function ($) {

    'use strict';

    var MAIN = {

        search_page_event: function(){

            $(document).on("change", "#lang", function(e){
                e.preventDefault();
               let self = $(this);
               let op = self.find('option[value="' + self.val() + '"]');

               console.log(op);

               window.location.href = op[0].dataset.url;
            });

            console.log(MAIN);

        },

        init_obj: function(){


            this.search_page_event();

        },

        init: function () {

            this.init_obj();

        }

    }


    jQuery(document).ready(function ($) {

        MAIN.init();

    });

})(jQuery);