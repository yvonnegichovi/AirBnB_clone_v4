$(document).ready(function () {
  $('input[type="checkbox"]').change(function () {
    const checkedAmenities = [];
    $('input[type="checkbox"]:checked').each(function () {
      checkedAmenities.push($(this).data('id'));
    });
    $('.amenities h4').text(checkedAmenities.join(', '));
  });
});
