function openTab(event, tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');

    // Remove active class from all buttons
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('active-tab'));

    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';

    // Add active class to the clicked tab button
    event.currentTarget.classList.add('active-tab');
}

// Set the default active tab when the page loads
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tab-link").click();
});

     function updateBar(inputElement) {
            const percentage = Math.min(Math.max(inputElement.value, 0), 100);  // Clamp value between 0 and 100
            const barFill = inputElement.nextElementSibling.querySelector('.bar-fill');
            barFill.style.width = percentage + '%';
            
            // Save the value to localStorage
            localStorage.setItem(inputElement.id, percentage);
        }

        // Load saved values from localStorage on page load
        window.addEventListener('load', () => {
            document.querySelectorAll('.percentage-input').forEach(inputElement => {
                const savedValue = localStorage.getItem(inputElement.id);
                if (savedValue !== null) {
                    inputElement.value = savedValue;
                    const barFill = inputElement.nextElementSibling.querySelector('.bar-fill');
                    barFill.style.width = savedValue + '%';
                }
            });
        });