for (let j = 1; j < 11; j++) {
	document.querySelector(`.people__item--${j}`).addEventListener('click', () => {
		setTimeout(() => {
			if (window.innerWidth < 768) {
				for (let i = 1; i < 11; i++) {
					document.querySelector(`.people__description--${i}`).style.display = 'none';
				}
				document.querySelector(`.people__description--${j}`).style.display = 'block';
			}
			let person = document.querySelector(`.people__item--${j}`);
			for (let i = 1; i < 11; i++) {
				document.querySelector(`.people__item--${i}`).classList.remove('people__item-activ');
				person.classList.add('people__item-activ');
				document.querySelector('.people__benefits-number').innerHTML = person.querySelector('.people__number').innerHTML;
				document.querySelector('.people__income-amount').innerHTML = person.querySelector('.people__amount').innerHTML;
				document.querySelector('.people__benefits-name').innerHTML = person.querySelector('.people__name').innerHTML;
				document.querySelector('.people__benefits-company').innerHTML = person.querySelector('.people__company').innerHTML;
				document.querySelector('.people__benefits-text').innerHTML = document.querySelector(`.people__description--${j}`).innerHTML;
			}
		}, 100)

	})
}


document.querySelector('.menu__close').addEventListener('click', () => {
	document.querySelector('.menu').style.display = 'none';
})

document.querySelector('.subwey').addEventListener('click', () => {
	document.querySelector('.menu').style.display = 'block';
})






