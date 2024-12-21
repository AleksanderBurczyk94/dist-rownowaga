<?php
// Konfiguracja
$accessToken = 'ya29.a0ARW5m76OY_opC6gvL4aKt-Fi1Bfm31YoyW4CPkZOlFDm3UATomxCjHLlzwdMoKhRhJ2c0EhJ0JPcb9D5ZmWrrSHMLATlxIUQN9_kNk466swsJAsTz73nPEAcTxhOh3apI6R1eldhQr64tmNRU9R_8RxPx7Gmxf4V6JmvPOuYaCgYKAaQSARMSFQHGX2MixquLPSD8EP451_U8TkM_Dw0175'; // Wstaw swój Access Token
$apiUrl = 'https://mybusiness.googleapis.com/v4/accounts/116065612763631439113/locations/12860324278736494521/reviews';

// Funkcja do pobierania recenzji
function fetchReviews($url, $token) {
    $headers = [
        'Authorization: Bearer ' . $token,
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode === 200) {
        return json_decode($response, true);
    } elseif ($httpCode === 401) {
        return ['error' => 'Access token expired or invalid.'];
    } else {
        return ['error' => 'Error: HTTP ' . $httpCode];
    }
}

// Pobieranie recenzji
$reviews = fetchReviews($apiUrl, $accessToken);

// Wyświetlenie wyniku
header('Content-Type: application/json');
echo json_encode($reviews, JSON_PRETTY_PRINT);