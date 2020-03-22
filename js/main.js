
const formSearch = document.querySelector('.form-search'),
	  inputCitiesFrom = document.querySelector('.input__cities-from'),
	  dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
	  inputCitiesTo = document.querySelector('.input__cities-to'),
	  dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
	  inputDateDepart = document.querySelector('.input__date-depart'),
	  cheapestTicket = document.getElementById('cheapest-ticket'),
	  otherCheapTickets = document.getElementById('other-cheap-tickets');

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
			return fixItem.startsWith(input.value.toLowerCase());	
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

const createCard = (data) => {
	const ticket = document.createElement('article');
	ticket.classList.add('ticket');

	let deep = '';

	if(data){
		deep = `
		<h3 class="agent">Aviakassa</h3>
		<div class="ticket__wrapper">
			<div class="left-side">
				<a href="https://www.aviasales.ru/search/SVX2905KGD1" class="button button__buy">Купить
					за 19700₽</a>
			</div>
			<div class="right-side">
				<div class="block-left">
					<div class="city__from">Вылет из города
						<span class="city__name">Екатеринбург</span>
					</div>
					<div class="date">29 мая 2020 г.</div>
				</div>

				<div class="block-right">
					<div class="changes">Без пересадок</div>
					<div class="city__to">Город назначения:
						<span class="city__name">Калининград</span>
					</div>
				</div>
			</div>
		</div>
		`;
	}else{
		deep = '<h3>К сожалению на текущую дату бтлетов не нашлось!</h3>'
	}

	ticket.insertAdjacentHTML('afterbegin', deep);

	return ticket;
};

const renderCheapDay = (cheapTicket) => {
	const ticket = createCard(cheapTicket[0]);
	console.log(ticket);
}

const renderCheapYear = (cheapTicket) => {
	cheapTicket.sort((a,b) => a.value - b.value); 
	console.log(cheapTicket);
}

const renderCheap = (data, date) => {
	const cheapTicketYear = JSON.parse(data).best_prices;
	
	const cheapTicketDay = cheapTicketYear.filter((item) => {
		return item.depart_date === date;
	})

	renderCheapDay(cheapTicketDay);
	renderCheapYear(cheapTicketYear);


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

formSearch.addEventListener('submit', (event) => {
	event.preventDefault();

	const cityFrom = city.find((item) => inputCitiesFrom.value === item.name);
	const cityTo = city.find((item) => inputCitiesTo.value === item.name);

	const formData = {
		from: cityFrom,
		to: cityTo,
		when: inputDateDepart.value,
	};

	if(formData.from && formData.to){
		const requestData =`?depart_date=${formData.when}&origin=${formData.from.code}&destination=${formData.to.code}&one_way=true&token=${API_KEY}`;
		
		getData(calendar + requestData, (response) => {
			renderCheap(response, formData.when);
		});
	}else{
		alert('Введите корректное название города');
	}

});

//Вызовы функций
getData(citiesApi, (data) => {
	city = JSON.parse(data).filter((item) => {
		return item.name;
	});
	city.sort((a,b) =>{
		if(a.name > b.name){
			return 1;
		}
		if(a.name < b.name){
			return -1;
		}
		return 0;
	});
	console.log(city);





});

/*getData(proxy + calendar + '?depart_date=2020-05-25&origin=SVX&destination=KGD&one_way=true&token=' + e3884d4f1381cd8f3ab95ee0bbe80c29, (data) 
	const cheapTicket = JSON.parse(data).best_prices.filter(item => item.depart_date === '2020-05-25')
	console.log(cheapTicket);*/

























//includes() - У строки есть метод includes. содержиться 
//Имя переменных - это существительные (отвечае что)
//Имя фенкции - это глагол ( что делать)
//textContent - свойство добавляет текст 
//append() - всавляет в конец документа 

//Делегирование 
//restAPI - это онлайн сервис 

//find() - переберает масив но он возвращает один элемент 


