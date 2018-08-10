<<<<<<< HEAD
$(document).ready(function(){
	
	var $l = $(".modal-toggle img");
	
	$l.click(function(){
		$("#the-image").empty();
		var $theimage= $(this).attr('src');
		var $theimageAlt= $(this).attr('alt');
		var $theimageCaption = $(this).attr('data-caption');
		$(".modal-title").html($theimageAlt);
		$("#the-image").append("<img src ='"+$theimage+"' width =850 height=700></img>");
		//$("#the-image").append("<span><strong>File Name:</strong> "+$theimageAlt+".jpg</span>");
		$("#the-image").append("<div><strong>Caption:</strong> "+$theimageCaption+"</div>");
		$("#the-image").append("<p><a href ='"+$theimage+"' download> <i class='fa fa-download'></i> Download this Image </a></p>");
	});
=======
$(document).ready(function(){
	
	var $l = $(".modal-toggle img");
	
	$l.click(function(){
		$("#the-image").empty();
		var $theimage= $(this).attr('src');
		var $theimageAlt= $(this).attr('alt');
		var $theimageCaption = $(this).attr('data-caption');
		$(".modal-title").html($theimageAlt);
		$("#the-image").append("<img src ='"+$theimage+"' width =850 height=700></img>");
		//$("#the-image").append("<span><strong>File Name:</strong> "+$theimageAlt+".jpg</span>");
		$("#the-image").append("<div><strong>Caption:</strong> "+$theimageCaption+"</div>");
		$("#the-image").append("<p><a href ='"+$theimage+"' download> <i class='fa fa-download'></i> Download this Image </a></p>");
	});
>>>>>>> a40cdef3e9aeab6e774678649268ed06341ef88c
});