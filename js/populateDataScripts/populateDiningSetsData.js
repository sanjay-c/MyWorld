$(document).ready(function() {
    $.ajax({
        url: "../../data/diningSetsData.json",
        success: function(data) {
            var product = '';
            $.each(data, function(item) {
                product += '<div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 items-wrapper"><div class="indItem"><img src="' + data[item].itemImg + '"><h4>' + data[item].itemDesc + '</h4></div></div>';
            });
            console.log(product);
            $('.diningSets').html(product);
        }
    });
});
