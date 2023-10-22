//your JS code here. If required.
let textn=document.getElementById("text");
let numbert=document.getElementById("delay");
let button=document.getElementById("btn");
let divd=document.getElementById("output");
async function displayf(textv,delay) {
	try{
		await new Promise((resolve)=>{
			setTimeout(()=>{
				divd.textContent=textv;
			},delay);
		})
	}
	catch{
		
	}
	
}
button.addEventListener("click",(e)=>{
	e.preventDefault();
	let textv=textn.value;
	let delay=parseInt(numbert.value)*1000;
	displayf(textv,delay);
})