// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap-sprockets


let name_of_function = function () {
    var user_id = event.srcElement.getAttribute('user');
    var str = "";
    var $log = $("#products_table");
    var product;
    $.get('users/' + (user_id) + '/products.json', function (data) {
       console.log(data);
       for(var i=0; i<data.length; i++){
           product = data[i];
           if (product.user_id == user_id){
               str += "<tr><td>"+ product.name + "</td><td>" + product.weight + "</td><td>" + product.price + "</td></tr>"
           }
       }
       $log.html($(str));
    });
};