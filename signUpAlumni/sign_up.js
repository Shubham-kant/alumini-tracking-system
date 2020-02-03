// For Color shading icons 
var user = document.getElementById("u");
var pass = document.getElementById("p");
var email = document.getElementById("e");
var re_pass = document.getElementById("rp");
var user_input = document.getElementById("username");
var pass_input = document.getElementById("password");
var email_input = document.getElementById("email");
var re_pass_input = document.getElementById("re-password");
var temp = "check";

// For user input check
var user_check = document.getElementById('user-check');
var pass_check = document.getElementById('password-check');
var re_pass_check = document.getElementById('re-password-check');
var first_name_input = document.getElementById('first-name');
var first_name_check = document.getElementById('first-name-check');
var reg_num_check = document.getElementById('reg-num-check');
var reg_num_input = document.getElementById('reg-num');
var phone_input = document.getElementById('phone');
var phone_check = document.getElementById('phone-check');
var ug_course_input = document.getElementById('ug-course');
var ug_course_check = document.getElementById('ug-course-check');
var year_of_ug_check = document.getElementById('year-of-ug-check');
var year_of_ug_input = document.getElementById('year-of-ug');
var ug_college_name_input = document.getElementById('ug-college-name');
var ug_college_name_check = document.getElementById('ug-college-name-check');
var designation_input = document.getElementById('designation');
var designation_check = document.getElementById('designation-check');
var country_of_residence_input = document.getElementById('country-of-residence');
var country_of_residence_check = document.getElementById("country-of-residence-check");
var city_input = document.getElementById('city');
var city_check = document.getElementById('city-check');
var home_town_input = document.getElementById('home-town');
var home_town_check = document.getElementById('home-town-check');
var submit_button = document.getElementById('form');


// Show other text area when input clicked 
var others_input = document.getElementById('others');
var other_skill_text_area = document.getElementById('other-skills');

others_input.addEventListener('change',() => {
  other_skill_text_area.style.display = "unset";
});


//Submit check
submit_button.addEventListener("submit",() => {
  if(pass_input.value === re_pass_input.value)
  {
    return;
  }else{
    alert("Password are Mis-Matched!");
  }
});

// Home town check 
home_town_input.addEventListener("focusout", () => {
  check(home_town_input, home_town_check);
});

// City check 
city_input.addEventListener("focusout", () => {
  check(city_input, city_check);
});

// country - of - residence check 
country_of_residence_input.addEventListener("focusout", () => {
  check(country_of_residence_input, country_of_residence_check);
});

// designation_check field 
designation_input.addEventListener("focusout", () => {
  check(designation_input, designation_check);
});

// Ug college check 
ug_college_name_input.addEventListener("focusout", () => {
  check(ug_college_name_input,ug_college_name_check);
});

function check(focus_element,icon_element){
   if (focus_element.value === "") {
    //  icon_element.className = "";
     icon_element.innerHTML = "&times";
   } else {
    //  icon_element.className = "fa fa-check";
     icon_element.innerHTML = "&#x2713";
   }
}


// Ug course year field check 
year_of_ug_input.addEventListener("focusout", () => {
  check(year_of_ug_input,year_of_ug_check);
});

// Ug course field check 
ug_course_input.addEventListener("focusout", () => {
  check(ug_course_input,ug_course_check);
});

// Phone number check 
phone_input.addEventListener("focusout", () => {
  check(phone_input,phone_check);
});

//Reg Number check
reg_num_input.addEventListener("focusout", () => {
 check(reg_num_input,reg_num_check);
});

// First Name check 
first_name_input.addEventListener("focusout", () => {
 check(first_name_input,first_name_check);
});

// User name 
user_input.addEventListener("focusout",()=>{
 check(user_input,user_check);
});

// Password
pass_input.addEventListener("focusout",() =>{

 if(pass_input.value === '')
 {
  pass_check.innerHTML = "&times";
 }else{
  temp = pass_input.value;
  pass_check.innerHTML = "&#x2713";
 }
});

// Check Re-enter password 
re_pass_input.addEventListener("focusout",()=>{
 if(temp === re_pass_input.value)
 {
  re_pass_check.innerHTML = "&#x2713";
 }
 else{
  re_pass_check.innerHTML = "&times";
  re_pass_check.style.color = "red";
 }
});


user_input.addEventListener("focus", () => {
  user.style.color = "#34363E";
  pass.style.color = "#ada8a8";
  email.style.color = "#ada8a8";
  re_pass.style.color = "#ada8a8";
});

pass_input.addEventListener("focus", () => {
  pass.style.color = "#34363E";
  user.style.color = "#ada8a8";
  email.style.color = "#ada8a8";
  re_pass.style.color = "#ada8a8";
});

email_input.addEventListener("focus",() => {
  email.style.color = "#34363E";
  pass.style.color = "#ada8a8";
  user.style.color = "#ada8a8";
  re_pass.style.color = "#ada8a8";
});

re_pass_input.addEventListener("focus", () => {
  re_pass.style.color = "#34363E";
  pass.style.color = "#ada8a8";
  user.style.color = "#ada8a8";
  email.style.color = "#ada8a8";
});

