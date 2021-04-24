function toggleCategory(elem, category) {
    $('.category-btn').removeClass('category-btn-selected');
    $(elem).addClass('category-btn-selected');
    if (category === '') {
        $('.portfolio-item').show();
        return;
    }
    $('.portfolio-item').hide();
    $('.portfolio-item[data-category=' + category + ']').show();
}