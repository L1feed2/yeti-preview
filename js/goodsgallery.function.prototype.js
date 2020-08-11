;(function() {
	'use strict';

	var Gallery = function(id) {
		// объект галерея
		var gallery	= document.getElementById(id);
		// коллекция маленьких картинок (тумб)
		this.thumbs = gallery.querySelectorAll('.thumbs img');
		// объект, в который будем выводить большую картинку
		this.image = gallery.querySelector('.photo-box img');
		// кол-во фотографий в галереи
		this.count = this.thumbs.length;
		// индекс отображаемой фотографии, при инициализации скрипта
		// он по умолчанию равен 0
		this.current = 0;
		// регистрируем обработчики событий на странице с фотогалерей 
		this.registerEvents();
	};

	// записшем конструктор в свойство 'window.Gallery', чтобы обеспечить
	// доступ к нему снаружи анонимной функции
	window.Gallery = Gallery;

	// для сокращения записи, создадим переменную, которая будет ссылаться
	// на прототип 'Gallery'
	var fn = Gallery.prototype;

	// регистрация обработчиков событий
	fn.registerEvents = function() {
		// чтобы не потерять контекст, при переборе коллекции тумб,
		// сохраняем его в переменной
		var self = this;
		// перебираем коллекцию тумб (маленьких картинок)
		// n - это индекс элемента 'thumb' в коллекции 'thumbs'
		[].forEach.call(this.thumbs, function(thumb, n) {
			// вешаем на элемент обработчик события
			thumb.addEventListener('mouseenter', self.showPhoto.bind(self, n));
		});
	};

	fn.showPhoto = function(index) {
		// используя полученный в качестве аргумента индекс
		// получаем 'src' тумбы в коллекции
		var src = this.thumbs[index].getAttribute('src');
		// полученный 'src' прописываем у большой картинки, предварительно
		// изменив путь (название папки)
		this.image.setAttribute('src', src.replace('thumbnails', 'photos'));
		// устанавливаем текущий индекс равным индексу тумбы в коллекции
		this.current = index;
	};

})();