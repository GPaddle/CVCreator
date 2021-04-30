import * as templates from "./templates.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let urlLang = urlParams.get('lang');

if (!urlLang || !["fr", "en"].includes(urlLang)) {
	urlLang = "fr";
};
let dataGlobal;

window.addEventListener("load", () => {

	const getDatasParam = ((p_url) =>
		fetch(p_url).then(function (response) {
			if (response.status / 10 !== 20) {
				console.log('Problème avec la réponse : ' + response.status);
				return;
			}

			return response.json();

		}).catch(function (error) {
			return fetch("./data.json").then(function (response) {
				return response.json();
			})
		})
	);


	getDatasParam('data.json').then(function (data) {
		document.querySelector("#International").innerHTML = templates.InternationalTemplate(data.SupportedLanguages)
		data.SupportedLanguages.forEach(element => {
			document.querySelector(`#${element.name}Flag`).addEventListener("click", (lang) => {
				proceedData(data, element.name);
			})
		});
		dataGlobal = data;
		proceedData(data);
	});



})

const proceedData = function (data, lang = urlLang) {
	let learnsAndDiploma = templates.LearnsAndDiplomaTemplate(
		data.FormationDiplomes.items,
		lang
	);

	document.querySelector("#FormationDiplomes").innerHTML = `<h3>${data.FormationDiplomes.title[lang]}</h3>` + learnsAndDiploma;

	let workExperiences = templates.WorkExperiencesTemplate(
		data.ExperiencesProfessionnelles.items,
		lang
	);

	document.querySelector("#ExperiencesProfessionnelles").innerHTML = `<h3>${data.ExperiencesProfessionnelles.title[lang]}</h3>` + workExperiences;

	let skills = `<div>` +
		data.Competences.items.reduce((mainAccumulator, valueIndexN) => (
			mainAccumulator + templates.SkillsTemplate(
				valueIndexN,
				lang
			)), "") + `</div> `;
			
	document.querySelector("#Competences").innerHTML = `<h3>${data.Competences.title[lang]}</h3>` + skills;

	let majorWork = templates.MajorWorkTemplate(
		data.Travaux.items,
		lang
	);

	document.querySelector("#Travaux").innerHTML = `<h3>${data.Travaux.title[lang]}</h3>` + "<ul>" + majorWork + "</ul>";

	let personnalWork = templates.PersonnalWorkTemplate(
		data.ProjetsPersonnels.items,
		lang
	);

	document.querySelector("#ProjetsPersonnels").innerHTML = `<h3>${data.ProjetsPersonnels.title[lang]}</h3>` + personnalWork;

	let languages = templates.LanguagesTemplate(
		data.Langues.items,
		lang
	);

	document.querySelector("#Langues").innerHTML = `<h3>${data.Langues.title[lang]}</h3>` + languages;

	let palmares = templates.SportTemplate(
		data.Palmares.items,
		lang
	);

	document.querySelector("#Palmares").innerHTML = `<h3>${data.Palmares.title[lang]}</h3>` + palmares;

	let details = templates.InformationTemplate(
		data.Informations.listInformations,
		lang
	);

	document.querySelector("#informations").innerHTML = details;

	document.querySelector("#APropos").innerHTML = `<h3>${data.Informations.title[lang] || data.Informations.title["fr"]}</h3>
	<p>${data.Informations.aboutMe[lang] || data.Informations.aboutMe["fr"]}
	</p>`
	document.querySelector("#profilePic").src = data.Informations.ProfilePicLink;
	document.querySelector("#JobDescription").innerHTML = data.Informations.description[lang] || data.Informations.description["fr"];
	document.querySelector("#name").innerHTML = data.Informations.name;

}