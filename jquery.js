$(document).ready(function() {
    $("#b").click(function(){
        var text = $('#data').val();
        $(".container").append("<div class=child>"+text+"</div>")
    }); 
});