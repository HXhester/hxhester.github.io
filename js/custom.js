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

let openModalId = null;
$(function() {
    $('.portfolio-link').click(function() {
        openModalId = $(this).data('modal-id');
    });
    $(window).on('keyup', function(e) {
        if (e.key == "Escape" && openModalId !== null) {
            const openModal = $('#' + openModalId);
            if (openModal) {
                openModal.modal('hide');
            }
        }
    });
})