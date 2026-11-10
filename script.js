document.addEventListener('DOMContentLoaded', () => {

    const filterButtons = document.querySelectorAll('.filter-btn');
    const brandItems = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {

        button.addEventListener('click', () => {

            // Mengatur tombol aktif
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            button.classList.add('active');

            // Mengambil kategori filter
            const filterValue = button.getAttribute('data-filter');

            // Menampilkan produk sesuai brand
            brandItems.forEach(item => {

                const brand = item.getAttribute('data-brand');

                if (filterValue === 'all' || brand === filterValue) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }

            });

        });

    });

});