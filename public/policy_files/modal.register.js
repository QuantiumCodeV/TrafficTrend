(function ($) {

    'use strict';

    var MODAL_REGISTER = {

        btn_reg: null,
        modal_register: null,

        search_page_event: function () {

            $(document).on("click", "#btn_reg", function (e) {
                e.preventDefault();
                if (MODAL_REGISTER.modal_register) {
                    MODAL_REGISTER.modal_register.addClass('active');
                }

            });

            $(document).on("click", ".modal_reg_close", function (e) {
                e.preventDefault();
                if (MODAL_REGISTER.modal_register) {
                    MODAL_REGISTER.modal_register.removeClass('active');
                }

            });

            console.log(MODAL_REGISTER);

        },

        init_obj: function () {

            if ($('#btn_reg').lenght) {
                MODAL_REGISTER.btn_reg = $('#btn_reg');
            }

                MODAL_REGISTER.modal_register = $('#modal_register');

            this.search_page_event();

        },

        init: function () {

            this.init_obj();

        }

    }


    jQuery(document).ready(function ($) {

        MODAL_REGISTER.init();

    });

})(jQuery);