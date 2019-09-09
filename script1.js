// Написать метод jQuery.prototype.html(), который возвращает или изменяет html-содержимое выбранных элементов.
jQuery.prototype.html = function(html_value){
	if (html_value !== undefined) {
		this.each(element => element.innerHTML = html_value)
	}
	return this;
}
