function onChanged() {
    var toggleButton = document.getElementById('flexSwitch');
    const detail = document.getElementById('details');
    const detailItems = detail.querySelectorAll('*');

    const leftPane = document.getElementById('left-pane');
    const leftPaneItems = leftPane.querySelectorAll('*');

    if (toggleButton.checked) {
        // dark
        document.getElementById('mode-name').innerHTML = 'Light';

        document.body.classList.remove('bg-light');
        document.body.classList.add('bg-dark');

        detail.classList.remove('bg-light', 'text-dark');
        detail.classList.add('bg-dark', 'text-white-50');

        detailItems.forEach(descendant => {
            descendant.classList.remove('bg-light', 'text-dark');
            descendant.classList.add('bg-dark', 'text-white-50');
        });

        leftPane.classList.remove('bg-light', 'text-dark');
        leftPane.classList.add('bg-dark', 'text-white-50');

        leftPaneItems.forEach(descendant => {
            descendant.classList.remove('bg-light', 'text-dark');
            descendant.classList.add('bg-dark', 'text-white-50');
        });
    } else {
        // light
        document.getElementById('mode-name').innerHTML = 'Dark';

        document.body.classList.remove('bg-dark');
        document.body.classList.add('bg-light');

        detail.classList.remove('bg-dark', 'text-white-50-50');
        detail.classList.add('bg-light', 'text-dark');

        detailItems.forEach(descendant => {
            descendant.classList.remove('bg-dark', 'text-white-50');
            descendant.classList.add('bg-light', 'text-dark');
        });

        leftPane.classList.remove('bg-dark', 'text-white-50');
        leftPane.classList.add('bg-light', 'text-dark');

        leftPaneItems.forEach(descendant => {
            descendant.classList.remove('bg-dark', 'text-white-50');
            descendant.classList.add('bg-light', 'text-dark');
        });
    }
}
