var Responsive =
{
	init: function()
	{
		var link = document.getElementsByClassName("topnav");
		$ (link).bind("click", clickListener);
		
		function clickListener()
		{
			document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
		}
	}
};
Responsive.init();// JavaScript Document