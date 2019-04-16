'use strict';

// presentation logic
var defaultLanguage = 'en';

var select = document.getElementsByTagName('select')[0];
var langSelector = new LanguageSelector(select, function (lang) {
    signUp.language = lang;
    signUpAdmin.language = lang;
    signUpSuperAdmin.language = lang;
    logIn.language = lang;
    logInUpAdmin.language = lang;
    logInSuperAdmin.language = lang;

});


var forms = document.getElementsByTagName('form');

var signUp = new SignUp(forms[1], register, i18n.signUp, defaultLanguage);

var signUpAdmin = new SignUp(forms[2], registerAdmin, i18n.signUp, defaultLanguage, function (language) {
    var admin = i18n.admin[language];

    this.__form__.children[0].innerText += ' ' + admin;
});

var signUpSuperAdmin = new SignUp(forms[3], registerSuperAdmin, i18n.signUp, defaultLanguage, function (language) {
    var admin = i18n.admin[language];

    this.__form__.children[0].innerText += ' Super ' + admin;
});

var logIn = new LogIn(forms[4], registerlog, i18n.logIn, defaultLanguage);

var logInUpAdmin = new LogIn(forms[5], registerlogAdmin, i18n.logIn, defaultLanguage, function (language) {
    var admin = i18n.admin[language];

    this.__form__.children[0].innerText += ' ' + admin;
});

var logInSuperAdmin = new LogIn(forms[6], registerlogSuperAdmin, i18n.logIn, defaultLanguage, function (language) {
    var admin = i18n.admin[language];

    this.__form__.children[0].innerText += ' Super ' + admin;
});
