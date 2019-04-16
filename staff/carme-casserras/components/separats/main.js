'use strict';

// presentation logic
var defaultLanguage = 'en';

var select = document.getElementsByTagName('select')[0];
var langSelector = new LanguageSelector(select, function (lang) {
    logIn.language = lang;
    logInAdmin.language = lang;
    logInSuperAdmin.language = lang;
});


var forms = document.getElementsByTagName('form');

var logIn = new LogIn(forms[1], register, i18n.signUp, defaultLanguage);

var logInAdmin = new LogIn(forms[2], registerAdmin, i18n.signUp, defaultLanguage, function (language) {
    var admin = i18n.admin[language];

    this.__form__.children[0].innerText += ' ' + admin;
});

var logInSuperAdmin = new LogIn(forms[3], registerSuperAdmin, i18n.signUp, defaultLanguage, function (language) {
    var admin = i18n.admin[language];

    this.__form__.children[0].innerText += ' Super ' + admin;
});

