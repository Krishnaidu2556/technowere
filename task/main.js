

function showQuestion1() {
    // Hide the current question (assuming its ID is 'question')
    document.getElementById('question').classList.add('hidden');
    // Show the next question (assuming its ID is 'question1')
    document.getElementById('question1').classList.remove('hidden');
}


let selectedOption = null;
let currentQuestionIndex = 0;
const questions = document.querySelectorAll('.question');

// JavaScript function to select an option
function selectOption(option, nextButtonId) {
    // Deselect all options first
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.remove('bg-green-200');
    });

    // Select the clicked option
    option.classList.add('bg-green-200');
    selectedOption = option;

    // Enable the next button if an option is selected
    const nextButton = document.getElementById(nextButtonId);
    if (nextButton !== null) { // Check if nextButton is not null
        nextButton.removeAttribute('disabled');
    } else {
        if (nextButton) { // Check if nextButton is not null
            nextButton.setAttribute('disabled', true);
        }
    }
}


function nextPage(sectionId) {
    document.getElementById('question').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
}


function nextPage(nextButtonId) {
    if (selectedOption) {
        questions[currentQuestionIndex].classList.add('hidden');
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            questions[currentQuestionIndex].classList.remove('hidden');
        }
        selectedOption = null;
        const nextButton = document.getElementById(nextButtonId);
        nextButton.classList.remove('next-button-enabled'); // Reset next button style
    } else {
        alert('Please select an option before proceeding.'); // Show an alert if no option is selected
    }
}


document.addEventListener("DOMContentLoaded", function () {

    const prevButtons = document.querySelectorAll('.prev');

    prevButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                showQuestion(currentQuestionIndex);
            }
        });
    });
});

const skipButton = document.getElementById('complete');
const questionDiv = document.getElementById('question4');
const dataContainer = document.getElementById('question5');
const loadingMessage = document.getElementById('loadingMessage');
const loader = document.getElementById('loader');

skipButton.addEventListener('click', function () {
    // Hide the question div
    questionDiv.classList.add('hidden');

    // Show loading message and data container
    loadingMessage.textContent = 'Loading Data...';
    dataContainer.classList.remove('hidden');

    // Show loader for loading data
    loader.classList.remove('hidden');

    // Simulate loading data (1 second delay)
    setTimeout(() => {
        loadingMessage.textContent = 'Gathering Data...';

        // Simulate gathering data (1 second delay)
        setTimeout(() => {
            loadingMessage.textContent = 'Processing Data...';

            // Simulate processing data (1 second delay)
            setTimeout(() => {
                // Hide loader and show success message
                loader.classList.add('hidden');

                // Replace loading message with success message
                dataContainer.innerHTML = `
          <div class="bg-white p-4 ">
            <h2 class="text-lg font-bold mb-2">Calculations completed for this home!</h2>
            <p class="text-gray-600">We have saved your responses for <span class="font-bold">222 DEMO ST, SACRAMENTO, CA 95822</span>. You can access this home anytime under <span class="text-blue-600">'MY ACCOUNT'</span> after signing in.</p>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
              <circle class="path circle" fill="#4FC3F7" stroke="#ffffff" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
              <polyline class="path check" fill="#4FC3F7" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
            </svg>
            <div class="flex justify-center items-center mt-4">
              <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold text-lg font-semibold py-2 px-4 rounded">Ready</button>
            </div>
          </div>`;
            }, 1000); // Simulating processing data for 1 second
        }, 1000); // Simulating gathering data for 1 second
    }, 1000); // Simulating loading data for 1 second
});
