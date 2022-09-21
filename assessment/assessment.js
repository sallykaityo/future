'use strict';
const userNameInput=document.getElementById('user-name');
const assessmentButton=document.getElementById('assessment');
const resultDivided=document.getElementById('result-area');

assessmentButton.onclick=()=>{
	const userName=userNameInput.value;
	if(userName.length===0){
		return;
	}
	const header=document.createElement('h3');
	header.innerText='診断結果';
	resultDivided.appendChild(header);

	const paragraph=document.createElement('p')
	const result =assessment(userName);
	paragraph.innerText=result;
	resultDivided.appendChild(paragraph);
};
const answers=[
	'{userName}の人生は痴漢で終わります',
	'{userName}の人生は痴漢冤罪で終わります',
	'{userName}の人生は万引きで終わります',
	'{userName}の人生は結婚詐欺に引っかかって終わります',
	'{userName}の人生は横領で終わります',
	'{userName}の人生は平凡に終わります',
	'{userName}の人生は無能として疎まれて終わります',
	'{userName}の人生は彼女が陽キャに寝取られて終わります',
	'{userName}の人生は成功します',

];
function assessment(userName){
	let sumOfCharCode=0;
	for (let i=0;i<userName.length;i++){
		sumOfCharCode=sumOfCharCode+userName.charCodeAt(i);
	}
	const index =sumOfCharCode%answers.length;
	let result = answers[index];

	result=result.replace(/\{userName\}/g,userName);
	return result;
}
