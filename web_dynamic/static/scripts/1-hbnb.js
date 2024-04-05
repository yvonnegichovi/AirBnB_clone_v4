$(document).ready(function() {
    $('input[type="checkbox"]').change(function() {
        const checkedAmenities = [];
        $('input[type="checkbox"]:checked').each(function() {
            const amenityName = $(this).siblings('label').text().trim();
            checkedAmenities.push(amenityName);
        });
        $('.amenities h4').text(checkedAmenities.join(', '));
    });
});