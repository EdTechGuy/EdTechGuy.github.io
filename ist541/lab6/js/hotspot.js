// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "text_tool") {
         $("#feedback").css("color","black");
         $("#feedback").html("This tool will allow participants to type in an answer or response");
      }

      if ($(this).attr("id") == "choice_tool") {
         $("#feedback").css("color","black");
         $("#feedback").html("This tool allows you to create a multiple choice question");
      }

      if ($(this).attr("id") == "number_tool") {
         $("#feedback").css("color","black");
         $("#feedback").html("The number tool allows the participant input numbers. This could be used for the answer to a math problem, as an example.");
      } 
if ($(this).attr("id") == "number_tool") {
         $("#feedback").css("color","black");
         $("#feedback").html("Creators use this tool to allow participants to respond with number. An example would be for the answer to a math problem");
      }

      if ($(this).attr("id") == "website_tool") {
         $("#feedback").css("color","black");
         $("#feedback").html("If the creator wants to embed a hyperlink for participants to use, this is the tool.");
      }

      if ($(this).attr("id") == "draw_tool") {
         $("#feedback").css("color","black");
         $("#feedback").html("If you want your participants to respond with a drawing, to circle something in the presentation, or add creativity, use the Draw Tool.");
   }  
	if ($(this).attr("id") == "drag_tool") {
         $("#feedback").css("color","black");
         $("#feedback").html("This is a great tool to allow your participants to vote for the right answer, to place a flag on the capital of California, or to put items in order.");
   }
	
  $("#feedback").css("backgroundColor","white");

   });
}); //end main jQuery function
