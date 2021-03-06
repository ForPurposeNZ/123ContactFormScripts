// Sets a form input 'recruiter_id_label' with the parameter 'recruiter_id_parameter'

var recruiter_id_parameter = "recruiter_id";
var recruiter_id_label = "Recruiter ID";

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
  
  // get the recruiter id paramter
  var recruiter_id = getParameterByName(recruiter_id_parameter);

  // ugly fix for embedded contact forms - extract relevant part of url
  if( !recruiter_id) {
    var urlparts = window.location.href.split('ref=');
    if( urlparts.length >= 2 ) {
      urlparts2 = urlparts[1].split('[%ANDCHAR%]'); 
      recruiter_id = getParameterByName(recruiter_id_parameter, decodeURIComponent(urlparts2[0]));   
    }
  }
  
  // get the recruiter
  var label = $("label:contains('" + recruiter_id_label + "')");  
  
  if( recruiter_id && label ) {
    // set the recruiter id form input with the parameter
    var input_id = $(label).attr("for");  
    $("#" + input_id).val(recruiter_id);
  } 
});
