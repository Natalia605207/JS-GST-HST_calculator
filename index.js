gsap.from(".top", {delay: 0.5, duration: 2.2, y: -150, ease: "power3.out", opacity: 0})
gsap.from(".main-container", {delay: 1.5, duration: 2.7, y: 50, ease: "power3.out", opacity: 0})

const contents = document.querySelectorAll('.content-container');
const buttons = document.querySelectorAll('.tabBtn');
buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
    buttons.forEach(button => button.classList.remove('active'));
    contents.forEach(content => content.classList.add('hide'));
    button.classList.add('active'); 
    contents[i].classList.remove('hide');
    });
});

const btnButton = document.querySelector('#btn');
const ctaButton = document.querySelector('#cta');

btnButton.addEventListener('click', calculateSum);
ctaButton.addEventListener('click', calculateSumReverse);

function calculateSum (e) {
    e.preventDefault();
    const amountBeforeTaxes = Number(document.querySelector('#amountBeforeTaxes').value);
    const chooseProvince = Number(document.querySelector('#chooseProvince').value);

    const finalTaxes = document.querySelector('#finalTaxes');
    const finalSumAfterTaxes = document.querySelector('#finalSumAfterTaxes');
    
    if (amountBeforeTaxes == "" || amountBeforeTaxes < 1 || isNaN(amountBeforeTaxes)) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Please check and correct your information!',
            showConfirmButton: false,
            timer: 1800
        })

        finalSumAfterTaxes.textContent = 0;
        finalTaxes.textContent = 0;
    }

    else {
    let totalTaxes  = amountBeforeTaxes * chooseProvince;
    let totalAfterTaxes = amountBeforeTaxes + totalTaxes;
    
    totalTaxes = +totalTaxes.toFixed(2);
    totalAfterTaxes = +totalAfterTaxes.toFixed(2);

    finalTaxes.textContent = totalTaxes;
    finalSumAfterTaxes.textContent = totalAfterTaxes;
    }
}

function calculateSumReverse (e) {
    e.preventDefault();
    const amountAfterTaxes = Number(document.querySelector('#amountAfterTaxes').value);
    const chooseYourProvince = Number(document.querySelector('#chooseYourProvince').value);

    const deductedTaxes = document.querySelector('#deductedTaxes');
    const finalSumBeforeTaxes = document.querySelector('#finalSumBeforeTaxes');
    
    if (amountAfterTaxes == "" || amountAfterTaxes < 1 || isNaN(amountAfterTaxes)) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Please check and correct your information!',
            showConfirmButton: false,
            timer: 1800
        })

        finalSumBeforeTaxes.textContent = 0;
        deductedTaxes.textContent = 0;
    }

    else {
    let sumBeforeTaxes = amountAfterTaxes * 100 / (100 + chooseYourProvince);
    let finalDeductedTaxes = amountAfterTaxes - sumBeforeTaxes;

    sumBeforeTaxes = +sumBeforeTaxes.toFixed(2);
    finalDeductedTaxes = +finalDeductedTaxes.toFixed(2);
    
    finalSumBeforeTaxes.textContent = sumBeforeTaxes;
    deductedTaxes.textContent = finalDeductedTaxes;
    }
}
