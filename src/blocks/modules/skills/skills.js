const skillPercents = document.querySelectorAll('.skills-range-item__percent');
const skillLines = document.querySelectorAll('.skills-range-item__full-line');

skillPercents.forEach((percent, i) => {
    let strippedSkillPercent = percent.innerHTML.replace(/\D/g, '');
    let finalPercent = 0;
    if (strippedSkillPercent) {
        if (parseInt(strippedSkillPercent) > 100) {
            finalPercent = 100
        } else {
            finalPercent = strippedSkillPercent;
        }
    }
    skillLines[i].style.width = finalPercent + '%';
});