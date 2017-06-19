$(document).ready(function() {
    $.ajax({
        url: "../../data/officeChairsData.json",
        success: function(data) {
            var product = '';
            $.each(data, function(item) {
                product += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 items-wrapper"><div class="indItemOfficeChairs"><img src="' + data[item].itemImg + '"><h4>' + data[item].itemDesc + '</h4></div></div>';
            });
            console.log(product);
            $('.officeChairs').html(product);
        }
    });
});
