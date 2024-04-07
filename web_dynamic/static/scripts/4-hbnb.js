$(() => {
    $('input[type="checkbox"]').change(function () {
      const checkedAmenities = [];
      $('input[type="checkbox"]:checked').each(function () {
        checkedAmenities.push($(this).data('id'));
      });
      $('.amenities h4').text(checkedAmenities.join(', '));
    });

    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/status/',
      success: function (data) {
        if (data.status == 'OK') {
          $('div#api_status').addClass('available');
        } else {
          $('div#api_status').removeClass('available');
        }
      }
    });

    $('button').click(function () {
        const checkedAmenities = [];
        $('input[type="checkbox"]:checked').each(function () {
            checkedAmenities.push($(this).data('id'));
        });

        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ amenities: checkedAmenities }),
            success: function (data) {
                console.log(data);
            },
            error: function (xhr, status, error) {
                console.error('Error fetching places data:', error);
            }
        });
    });
});