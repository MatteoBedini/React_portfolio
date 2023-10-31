const changeColorOnHover = () => {
    const iconElement = document.querySelectorAll('.icon');
    let iconLabels = document.querySelectorAll('.icon-label');

    iconElement.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.color = 'var(--black)';
            iconLabels.forEach(label => {
                label.style.color = 'var(--black)';
                label.style.display = 'block';
                
            });
        });

        element.addEventListener('mouseout', () => {
            element.style.color = ''; // Reset to the default color
            iconLabels.forEach(label => {
                label.style.color = 'var(--black)';
                label.style.display = 'none';
            });
        });
    });


};

export default changeColorOnHover;