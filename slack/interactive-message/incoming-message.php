<?php

require_once './config.php';

$data = [
    "text" => "いついつに飲み会をしますー",
    "attachments" => [
        [
            "text" => "終わったら「完了」ボタンを押してください〜 @hypermkt",
            "fallback" => "You are unable to choose a game",
            "callback_id" => "wopr_game",
            "color" => "#3AA3E3",
            "attachment_type" => "default",
            "actions" => [
                [
                    "name" => "yes",
                    "text" => "完了",
                    "type" => "button",
                    "value" => "yes"
                ],
            ]
        ]
    ]
];

$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, INCOMING_WEBHOOK_URL);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST'); // post
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data)); // jsonデータを送信
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HEADER, true);

$response = curl_exec($curl);

$header_size = curl_getinfo($curl, CURLINFO_HEADER_SIZE); 
$header = substr($response, 0, $header_size);
$body = substr($response, $header_size);
$result = json_decode($body, true); 

curl_close($curl);
