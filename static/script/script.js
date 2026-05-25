function onChanged() {
    var toggleButton = document.getElementById('flexSwitch');
    const job = document.getElementById('career-history');
    const allJobs = job.querySelectorAll('*');

    if (toggleButton.checked) {
        // dark
        document.getElementById('mode-name').innerHTML = 'Light';

        document.body.classList.remove('bg-secondary', 'bg-opacity-25');
        document.body.classList.add('bg-dark');

        document.getElementById('about-me').classList.remove('bg-light', 'text-dark');
        document.getElementById('about-me').classList.add('bg-dark', 'text-white-50');


        job.classList.remove('bg-light', 'text-dark');
        job.classList.add('bg-dark', 'text-white-50');

        allJobs.forEach(descendant => {
            descendant.classList.remove('bg-light', 'text-dark');
            descendant.classList.add('bg-dark', 'text-white-50');
        });

        document.getElementById('my-certification').classList.remove('bg-light', 'text-dark');
        document.getElementById('my-certification').classList.add('bg-dark', 'text-white-50');

        document.getElementById('copyright').classList.remove('bg-secondary', 'text-light');
        document.getElementById('copyright').classList.add('bg-light', 'text-dark');
    } else {
        // light
        document.getElementById('mode-name').innerHTML = 'Dark';

        document.body.classList.remove('bg-dark');
        document.body.classList.add('bg-secondary', 'bg-opacity-25');

        document.getElementById('about-me').classList.remove('bg-dark', 'text-white-50');
        document.getElementById('about-me').classList.add('bg-light', 'text-dark');

        job.classList.remove('bg-dark', 'text-white-50');
        job.classList.add('bg-light', 'text-dark');

        allJobs.forEach(descendant => {
            descendant.classList.remove('bg-dark', 'text-white-50');
            descendant.classList.add('bg-light', 'text-dark');
        });

        document.getElementById('my-certification').classList.remove('bg-dark', 'text-white-50');
        document.getElementById('my-certification').classList.add('bg-light', 'text-dark');

        document.getElementById('copyright').classList.remove('bg-light', 'text-dark');
        document.getElementById('copyright').classList.add('bg-secondary', 'text-light');
    }
}
