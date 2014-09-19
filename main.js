// $(document).on('ready', function() {
// 	var textarea = $("<textarea></textarea>");
// 	$('h1').after(textarea);
	
// 	$('textarea').hide();

	// $('p').hover (
	// 	function() {
	// 		$(this).css('background-color', '#FFFFCC');
	// 	}, function () {
	// 		$(this).css('background-color', '');
	// });

// 	$('textarea').blur();
// 	var pVal = $('p').text();
// 	textarea.val(pVal);
	

// 	$('p').on('click', function() {
// 		$('p').hide();
// 		$('textarea').show();
// 	});
	
// });

$(document).on('ready', function() {
	// $('textarea').hide();

	$('p').hover (
		function() {
			$(this).css('background-color', '#FFFFCC');
		}, function () {
			$(this).css('background-color', '');
	});

	$('p').on('click', function() {
		var textarea = $('<textarea></textarea>');
		$('p').after(textarea);
		$('p').hide();
		var pVal = $('p').text();
		$('textarea').val(pVal);
		$('textarea').focus()
	});

	$(document).on('blur', 'textarea', function() {
		var newtext = $(this).val()
		$('p').text(newtext);
		$('p').show();
		$('textarea').remove();
});

	});

// $(document).on('ready', function() {
// 	$('p').on('click', function() {
// 		var original = $(this);
// 		var textarea = $('<textarea></textarea>');

// 		$('original').after(textarea);
// 		$('textarea').val(original.text());

// 		$('original').hide();

// 		$('textarea').on('blur', function() {
// 			$('original').text(textarea.val());
// 			$('original').show();
// 			$('textarea').remove();
// 		});
// 	});
// });