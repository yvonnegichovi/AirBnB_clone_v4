$(() => {
  $('input[type="checkbox"]').change(function () {
    const checkedAmenities = [];
    $('input[type="checkbox"]:checked').each(function () {
      checkedAmenities.push($(this).data('id'));
    });
    $('.amenities h4').text(checkedAmenities.join(', '));
  });
  $.get({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    success: function (data) {
      if (data.status = 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    }
  });
});
