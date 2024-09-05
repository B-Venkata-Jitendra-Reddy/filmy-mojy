document.addEventListener("DOMContentLoaded", () => {
    // Night Mode Toggle
    const nightModeToggle = document.createElement('button');
    nightModeToggle.textContent = 'Mode';
    nightModeToggle.style.position = 'absolute';
    nightModeToggle.style.top = '10px';
    nightModeToggle.style.right = '10px';
    nightModeToggle.style.padding = '10px';
    nightModeToggle.style.borderRadius = '20px';
    nightModeToggle.style.backgroundColor = 'yellow';
    nightModeToggle.style.color = 'black';
    document.body.appendChild(nightModeToggle);

    nightModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('night-mode');
    });

    // Search Filter
    const searchInput = document.querySelector('#bar-style');
    const movieBoxes = document.querySelectorAll('.box');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        movieBoxes.forEach(box => {
            const title = box.querySelector('h5').textContent.toLowerCase();
            if (title.includes(query)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });

    // Navigation Highlight
    const icons = document.querySelectorAll('#navbar .icon i');

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            icons.forEach(i => i.classList.remove('active'));
            icon.classList.add('active');
        });
    });
});

