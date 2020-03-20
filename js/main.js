
const formSearch = document.querySelector('.form-search'),
	  inputCitiesFrom = document.querySelector('.input__cities-from'),
	  dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
	  inputCitiesTo = document.querySelector('.input__cities-to'),
	  dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
	  inputDateDepart = document.querySelector('.input__date-depart');

//Данные 
const citiesApi = '../dataBase/cities.json',
			proxy = 'https://cors-anywhere.herokuapp.com/',
			API_KEY = 'e3884d4f1381cd8f3ab95ee0bbe80c29',
			calendar = 'http://min-prices.aviasales.ru/calendar_preload';

let city = [];

//Функция API получение городов
const getData = (url, callback) => {
	//объект запроса
	const request = new XMLHttpRequest();
	request.open('GET', url);

	request.addEventListener('readystatechange', () => {
		if(request.readyState !== 4) return;

		if(request.status === 200){
			callback(request.response);
		}else{
			console.error(request.status);
		}
	});
	request.send();
}

const showCity = (input, list) => {
	list.textContent = ''; // очищаем выпадающее меню

	if(input.value !== ''){ 
		const filterСity = city.filter((item) => {
			const fixItem = item.name.toLowerCase();
			return fixItem.includes(input.value.toLowerCase());	
		})
		filterСity.forEach((item) => {
			const li = document.createElement('li');
			li.classList.add('dropdown__city');
			li.textContent = item.name;
			list.append(li);
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
dropdownCitiesFrom.addEventListener('click', (event) => {
	selectCity(event, inputCitiesFrom, dropdownCitiesFrom);
});

dropdownCitiesTo.addEventListener('click', (event) => {
	selectCity(event, inputCitiesTo, dropdownCitiesTo);
});

//Вызовы функций
getData(citiesApi, (data) => {
	city = JSON.parse(data).filter((item) => {
		return item.name;
	});
});

getData(proxy + calendar + '?depart_date=2020-05-25&origin=SVX&destination=KGD&one_way=true&token=' + e3884d4f1381cd8f3ab95ee0bbe80c29, (data) 
	const cheapTicket = JSON.parse(data).best_prices.filter(item => item.depart_date === '2020-05-25')
	console.log(cheapTicket);

























//includes() - У строки есть метод includes. содержиться 
//Имя переменных - это существительные (отвечае что)
//Имя фенкции - это глагол ( что делать)
//textContent - свойство добавляет текст 
//append() - всавляет в конец документа 

//Делегирование 
//restAPI - это онлайн сервис 


