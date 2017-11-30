// Sets a form element labelled recruiter ID with the 

var recruiter_id_parameter = "recruiter_id";
var recruiter_id_label = "RecruiterID";

function getParameterByName(name, url) {
  console.log("made it to getParameterByName");
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).ready(function() {

  debugger;
  var recruiter_id = getParameterByName(recruiter_id_parameter);
  
  var label = $("label:contains('" + recruiter_id_label + "')");  
  var input_id = $(label).attr("for");
  
  $("#" + input_id).value(recruiter_id);
 
});
