document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta');
    const overlay = document.getElementById(ctaButton.getAttribute('data-overlay'));
    const closeButton = overlay.querySelector('.close');

    ctaButton.addEventListener('click', function(event) {
        event.preventDefault();
        overlay.style.display = 'flex';
    });

    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});

    document.addEventListener('DOMContentLoaded', function() {
        const navWrapper = document.querySelector('.nav-wrapper');

        // Scroll smoothly when wheel is used
        navWrapper.addEventListener('wheel', (event) => {
            event.preventDefault();
            navWrapper.scrollBy({
                left: event.deltaY < 0 ? -30 : 30,
                behavior: 'smooth'
            });
        });
    });


   /* document.addEventListener('DOMContentLoaded', function() {
        const rentButtons = document.querySelectorAll('.btn.rents');
        const modal = document.getElementById('rentModal');
        const closeModal = document.querySelector('.modal .close');

        rentButtons.forEach(button => {
            button.addEventListener('click', function() {
                modal.style.display = 'block';
            });
        });

        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const rentButtons1 = document.querySelectorAll('.rents2');
        const modal1 = document.getElementById('.rentmodal2');
        const closeModal1 = document.querySelector('.modal2 .close2');

        rentButtons1.forEach(button => {
            button.addEventListener('click', function() {
                modal1.style.display = 'block';
            });
        });

        closeModal1.addEventListener('click', function() {
            modal1.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target == modal1) {
                modal1.style.display = 'none';
            }
        });
    });*/
    document.addEventListener('DOMContentLoaded', function() {
        const rentButtons = document.querySelectorAll('.btn.rent-now');
        const modal = document.getElementById('rentModal');
        const closeModal = document.querySelector('.modal .close');

        rentButtons.forEach(button => {
            button.addEventListener('click', function() {
                const carName = button.getAttribute('data-car-name');
                const carYear = button.getAttribute('data-car-year');
                const carFuel = button.getAttribute('data-car-fuel');
                const carTransmission = button.getAttribute('data-car-transmission');
                const carMileage = button.getAttribute('data-car-mileage');
                const carImage = button.getAttribute('data-car-image');
                const carReviews = button.getAttribute('data-car-reviews');

                document.getElementById('car-name').textContent = carName;
                document.getElementById('car-year').textContent = 'Year: ' + carYear;
                document.getElementById('car-fuel').textContent = 'Fuel Type: ' + carFuel;
                document.getElementById('car-transmission').textContent = 'Transmission: ' + carTransmission;
                document.getElementById('car-mileage').textContent = 'Mileage: ' + carMileage;
                document.getElementById('car-image').src = carImage;
                document.getElementById('car-reviews').textContent = 'Customer Reviews: ' + carReviews;

                modal.style.display = 'block';
            });
        });

        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });