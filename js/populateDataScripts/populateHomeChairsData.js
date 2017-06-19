$(document).ready(function() {
    $.ajax({
        url: "../../data/homeChairsData.json",
        success: function(data) {
            var product = '';
            $.each(data, function(item) {
                product += '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 items-wrapper"><div class="indItem"><img src="' + data[item].itemImg + '"><h4>' + data[item].itemDesc + '</h4></div></div>';
            });
            console.log(product);
            $('.homeChairs').html(product);
        }
    });
});
