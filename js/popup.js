$(document).ready(() => {
	$('.portfolio-item').on('click', function(e) 
	{
		e.stopPropagation();
		createPopup($(this));
	});
	
});

function createPopup(item) {
	if(!item)
	{
		return;
	}
	const container = $('<div>',{'class':'popup-container'});
	const srce = item.data('src');
	const img = $('<img>',{'class':'popup'});
	$(img).attr('src', srce)
	container.append(img);
	$('body').append(container);
	

	setTimeout(() => 
	{
		container.addClass('ready');
	});

	img.on('click', () => 
	{
		container.removeClass('ready');
		setTimeout(() =>
		{
			container.remove();
		}, 250);
	});
}