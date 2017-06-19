$(document).ready(function() {
    $.ajax({
        url: "../../data/wardrobesData.json",
        success: function(data) {
            var product = '';
            $.each(data, function(item) {
                product += '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 indItem"><img src="' + data[item].itemImg + '"><h4>' + data[item].itemDesc + '</h4></div>';
            });
            console.log(product);
            $('.almirah').html(product);
        }
    });
});
