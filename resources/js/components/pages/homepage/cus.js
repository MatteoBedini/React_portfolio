const changeColorOnHover = () => {

    const iconLinkedin = document.getElementById('icon-linkedin');
    const iconGithub = document.getElementById('icon-github');
    const iconFacebook = document.getElementById('icon-facebook');
    let iconLabelLinkedin = document.getElementById('icon-label-linkedin');
    let iconLabelGithub = document.getElementById('icon-label-github');
    let iconLabelFacebook = document.getElementById('icon-label-facebook');

    /* icona linkedin */
    iconLinkedin.addEventListener('mouseover', () => {
        iconLinkedin.style.color = 'var(--black)';
        iconLabelLinkedin.style.color = 'var(--black)';
        iconLabelLinkedin.style.animation = 'labelAnimation 0.5s';
        iconLabelLinkedin.style.transform = 'translate(59px, -40px) scale(1.5)';
        iconLabelLinkedin.style.opacity = '1';

    });
    iconLinkedin.addEventListener('mouseout', () => {
        iconLinkedin.style.color = '';
        iconLabelLinkedin.style.color = 'var(--black)';

        iconLabelLinkedin.style.animation = 'labelAnimation2 0.5s';
        iconLabelLinkedin.style.transform = 'translate(50px, 50px)';
        iconLabelLinkedin.style.opacity = '0';

    });

    /* icona github */
    iconGithub.addEventListener('mouseover', () => {
        /* iconGithub.style.color = 'var(--red)';
        iconLabelGithub.style.color = 'var(--red)'; */
        iconLabelGithub.style.opacity = '1';
        iconLabelGithub.style.transform = 'translate(66px, -40px) scale(1.5)';
    });
    iconGithub.addEventListener('mouseout', () => {
        iconGithub.style.color = '';
        iconLabelGithub.style.color = 'var(--black)';
        iconLabelGithub.style.opacity = '0';
        iconLabelGithub.style.transform = 'translate(67px, 0px)';
    });


    /* icona facebook */
   

    iconFacebook.addEventListener('mouseover', () => {
        iconFacebook.style.color = 'var(--black)';
        iconLabelFacebook.style.color = 'var(--black)';
        iconLabelFacebook.style.opacity = '1';
        iconLabelFacebook.style.transform = 'rotate(270deg) translate(40px,55px) rotate(-270deg)  scale(1.5)';


    });


    iconFacebook.addEventListener('mouseout', () => {
        iconFacebook.style.color = '';
        iconLabelFacebook.style.color = 'var(--black)';
        iconLabelFacebook.style.opacity = '0';
        iconLabelFacebook.style.transform = ' rotate(0deg) translate(50px,50px)';

    });




};

export default changeColorOnHover;