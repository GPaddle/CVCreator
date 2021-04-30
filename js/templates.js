export const LearnsAndDiplomaTemplate = function (element, lang) {
	return element.reduce((mainAccumulator, valueIndexN) => (
		mainAccumulator + `
<div class="dataTime breakHere">
	<div class="time">${valueIndexN.time}</div>
	<div class="data">${valueIndexN.data[lang] || valueIndexN.data["fr"]}</div>
</div>
`), "")
}

export const WorkExperiencesTemplate = function (element, lang) {
	return element.reduce((mainAccumulator, valueIndexN) => (
		mainAccumulator + `
<div class="dataTime breakHere">
	<div class="time">${valueIndexN.time}</div>
	<div class="data">${valueIndexN.data[lang] || valueIndexN.data["fr"]}${valueIndexN.employeur ? ", " + valueIndexN.employeur : ""}</div>
</div>
`), "")
}

export const SkillsTemplate = function (element, lang) {
	return `
	<div class="breakHere">
	<h4>${element.title[lang] || element.title["fr"]}</h4><ul>` + element.items.reduce((mainAccumulator, valueIndexN) => (
		mainAccumulator + `
		<li>
		${valueIndexN.link ? '<a href="' + valueIndexN.link + '" target="_blank" rel="noopener noreferrer" data-print-text="' + valueIndexN.altLinkPrint + '">' : ""}
		${valueIndexN.text[lang] || valueIndexN.text["fr"]}
		${valueIndexN.link && '</a>'}
		</li>
		
		`), "") + "</ul></div>"
}

export const MajorWorkTemplate = function (element, lang) {
	return element.reduce((mainAccumulator, valueIndexN) => (
		mainAccumulator + `
		<div class="breakHere">
<li>
${valueIndexN.languages && valueIndexN.languages[0] ? '<span class="hoverable" data-tooltip="' + valueIndexN.languages.join(', ') + '">' : ""}
	${valueIndexN.icon ? valueIndexN.icon + " " : ""} 
		${valueIndexN.link ? '<a href="' + valueIndexN.link + '" target="_blank" rel="noopener noreferrer" data-print-text="' + valueIndexN.altLinkPrint + '">' : ""}
			${valueIndexN.text[lang] || valueIndexN.text["fr"]}
		${valueIndexN.link && '</a>'}
	${valueIndexN.languages && valueIndexN.languages[0] ? "</div>" : ""}
</li></div>
	`), "")
}

export const PersonnalWorkTemplate = function (element, lang) {
	return element.reduce((mainAccumulator, valueIndexN) => (
		mainAccumulator + `
		<div class="breakHere">

	<li> ${valueIndexN.icon + " " || ""} ${valueIndexN.link && '<a href="' + valueIndexN.link + '" target="_blank" rel="noopener noreferrer" data-print-text="' + valueIndexN.altLinkPrint + '">'}
${valueIndexN.languages && valueIndexN.languages[0] ? '<span class="hoverable" data-tooltip="' + valueIndexN.languages.join(', ') + '">' : ""} ${valueIndexN.text[lang] || valueIndexN.text["fr"]}</span> ${valueIndexN.link && '</a>'}
</li></div>
	`), "")
}

export const LanguagesTemplate = function (element, lang) {
	return element.reduce((mainAccumulator, valueIndexN) => (
		mainAccumulator + `
		<div class="breakHere">
		<ul>
		<li>${valueIndexN.language[lang] || valueIndexN.language["fr"]}</li>
		<li>${valueIndexN.level[lang] || valueIndexN.level["fr"]}</li>
		</ul></div>
		`), "")
}

export const SportTemplate = function (element, lang) {
	return element.reduce((mainAccumulator, valueIndexN) => (
		mainAccumulator +
		`
	<div class="breakHere">
	<h4 class="year">${valueIndexN.year}</h4>
	<ul>
		${valueIndexN.results.reduce((accumulator, currentValue) => (
			accumulator + `<li class="${currentValue.specialClass}">${currentValue.text[lang] || currentValue.text["fr"]}</li>`
		), "")
		}
	</ul>
	</div>
	`), "")

}

export const InformationTemplate = function (element, lang) {
	return `<ul>${element.reduce((accumulator, currentValue) => (
		accumulator + `
		<li class="${currentValue.class}">
			${currentValue.link && `<a href="${currentValue.link}">`}
				${currentValue.text[lang] || currentValue.text["fr"]}
			${currentValue.link && `</a>`}
		</li>`
	), "")
		}</ul>`;
}

export const InternationalTemplate = function (element) {
	return `${element.reduce((accumulator, currentValue) => (
		accumulator + `
		<button class="countryButton" id="${currentValue.name}Flag">
			${currentValue.flag}
		</button>`
	), "")
		}`;
}