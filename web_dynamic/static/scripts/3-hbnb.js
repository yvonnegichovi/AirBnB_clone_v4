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

  $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify'{}',
      success: function (data) {
          data.forEach(function (place) {
              const article = `
              <article>
			        <div class="title_box">
			          <h2>Karen</h2>
                    <div class="price_by_night">$110</div>
                  </div>
			            <div class="information">
			            <div class="max_guest">2 Guest</div>
				          <div class="number_rooms">1 Bedroom</div>
				          <div class="number_bathrooms">2 Bathroom</div>
			          </div>
			          <div class="user">
				          <b>Owner:</b> James Goodwin
				        </div>
				      <div class="description">
				          This posh Airbnb retreat offers a tranquil escape in a serene, safe neighborhood. Featuring one bedroom and two bathrooms, it boasts modern furnishings, plush bedding, and upscale amenities. Nestled away from the city, guests can enjoy relaxation on a private patio, surrounded by lush greenery and panoramic views.
				      </div>
              </article>
            `;
            $('section.places').append(<article>>place</article>);
        });
      },
  });
});