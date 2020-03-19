const formSearch = document.querySelector('.form-search'),
	  inputCitiesFrom = document.querySelector('.input__cities-from'),
	  dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
	  inputCitiesTo = document.querySelector('.input__cities-to'),
	  dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
	  inputDateDepart = document.querySelector('.input__date-depart');

const city = ['Москва', 'Санкт-Петербург', 'Минск', 'Караганда', 'Челябинск', 'Керчь', 'Волгоград', 'Самара', 'Днепропетровск', 'Киев', 'Екатеринбург', 'Одесса', 'Ухань', 'Шымкент', 'Нижний Новгород'
, 'Калининград', 'Вроцлав', 'Ростов на Дону'];

//Функция API получение городов
const getData = (url) => {
	//объект запроса
	const request = new XMLHttpRequest();
	request.open('GET', url);

	request.addEventListener('readystatechange', () => {
		if(request.readyState !== 4) return;

		if(request.status === 200){
			console.log(request);
		}else{
			console.error(request.status);
		}
	});

	request.send();
};

getData('https://jsonplaceholder.typicode.com/todos/1');

const showCity = (input, list) => {
	list.textContent = '';

	if(input.value !== ''){ 
		
		const filterСity = city.filter((item) => {
			const fixItem = item.toLowerCase();

			return fixItem.includes(input.value.toLowerCase());
		})
		filterСity.forEach((item) => {
			const li = document.createElement('li');
			li.classList.add('dropdown__city');
			li.textContent = item;
			list.append(li)
		});
	}
};

const selectCity = (event, input, list) => {
	const target = event.target;
	if(target.tagName.toLowerCase() === 'li'){
		input.value = target.textContent;
		list.textContent = '';
	}
};

inputCitiesFrom.addEventListener('input', () => {
	showCity(inputCitiesFrom, dropdownCitiesFrom);
});

inputCitiesTo.addEventListener('input', () => {
	showCity(inputCitiesTo, dropdownCitiesTo);
});


//Выбираем город по клику
dropdownCitiesFrom.addEventListener('click', () => {
	selectCity(event, inputCitiesFrom, dropdownCitiesFrom);
});

dropdownCitiesTo.addEventListener('click', () => {
	selectCity(event, inputCitiesTo, dropdownCitiesTo);
});


























//includes() - У строки есть метод includes. содержиться 
//Имя переменных - это существительные (отвечае что)
//Имя фенкции - это глагол ( что делать)
//textContent - свойство добавляет текст 
//append() - всавляет в конец документа 

//Делегирование 
//restAPI - это онлайн сервис 


