// Set global variable for rating result

let ratingValue;

const elRatingComponentForm = document.querySelector('.rating-component_form');
const elRatingcomponentResultLabel = document.querySelector('.rating-component_result-label');

// When there is a form
if (elRatingComponentForm) {
    // Listen for this submit event
    elRatingComponentForm.addEventListener('submit', function (evt) {
        // Prevent form submission
        evt.preventDefault();
        // Get rating value from the form
        let ratingFormData = new FormData(elRatingComponentForm);
        ratingValue =parseInt( ratingFormData.get('rating'), 10);
        // set the result label text to the rating
        elRatingcomponentResultLabel.textContent = ratingValue;
        // Find the currect active step
        let currentStep = elRatingComponentForm.closest('.rating-component_step');
        // Listen for currentStep's animation end, so the thank you section will appear in a needed time
        currentStep.addEventListener('animationend', function (evt) {
            // When the fade out animation is done, remov e the active class from the currect step
            currentStep.classList.remove('rating-component_step-active');
            // Make the thank you section appear with animation
            currentStep.nextElementSibling.classList.add('rating-component_step-active', 'rating-component_step-in');
        })

        // Start fade out animation of the currect step
        currentStep.classList.add('rating-component_step-out')
    });
}
