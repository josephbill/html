

//check if document has loaded
$ (document) .ready(function ()
{
//to do
$("p") .hide(); //hides element
//the code below works if mouse is hovered over heading 
$ ("h1") .mouseenter (function ()
{
$ (this) .fadeOut (2000);
//the code below changes the background color
$("body") .css("background-color", "yellow");
}); //end

//the code below button click
$("#btn1") .click(function()
{
$ ("#content").append("This is my div it has more content");
$ ("#content").animate (
{
height: '400px',
width: '340px'
	});
});

//add a css class to elements 
//leftcontent is a class in css file
//elements are div paragraphs e.t.c
$("#left").addClass ("leftcontent");
$("#right").addClass ("rightcontent");


   
}); 