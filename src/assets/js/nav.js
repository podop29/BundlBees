// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');
const upArrow = document.querySelector('#back-to-top');

upArrow.addEventListener('click', ()=>{
	window.scrollTo({ top: 0, behavior: 'smooth' });
})

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}



//faq
const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }
                                

//Hex

document.addEventListener(("DOMContentLoaded"), ()=>{

	renderHex();
})
addEventListener("resize", (event) => {
	resetHex();
	renderHex();
});

function resetHex(){
	const hexcontainer =  document.getElementById("hexcontainer");
	if(!hexcontainer)
		return;
	hexcontainer.innerHTML = "";
}

function renderHex(){
	const hex = document.getElementById("hex");
	const main = document.getElementById("main");
	if(!hex || !main)
		return;

	const mainHeight = main.clientHeight;
	const mainWidth = main.clientWidth;

	const footer = document.getElementById("footer");
	if(!footer)
		return;
	const footerHeight = footer.clientHeight;

	const fullHeight = footerHeight + mainHeight;

	const hexHeight = getComputedStyle(hex).getPropertyValue("--s").replaceAll("px","");
	if(hexHeight == "")
		return;

	const rowsNeeded = fullHeight / hexHeight;

	const perRow =( mainWidth / hexHeight) - 1;
	const hexNeeded = (perRow * rowsNeeded / 1.4);
	const hexcontainer =  document.getElementById("hexcontainer");

	if(!hexNeeded || !hexcontainer)
		return;

	let i = 0;
	for(i = 0; i < hexNeeded; i++){
		var div = document.createElement('div');
		hexcontainer.append(div);
	}
	while((i / Math.round(perRow)) % 1 != 0){
		var div = document.createElement('div');
		hexcontainer.append(div);
		i++;
	}
}