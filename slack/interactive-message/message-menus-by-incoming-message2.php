<?php

$base_url = 'xxx';

$data = [
    "text" => "I hope the tour went well, Mr. Wonka.",
    "response_type" => "in_channel",
    "attachments" => [
        [
            "text" => "Who wins the lifetime supply of chocolate?",
            "fallback" => "You could be telling the computer exactly what it can do with a lifetime supply of chocolate.",
            "color" => "#3AA3E3",
            "attachment_type" => "default",
            "callback_id" => "select_simple_1234",
            "actions" => [
                [
                    "name" => "winners_list",
                    "text" => "Who should win?",
                    "type" => "select",
                    "data_source" => "users"
                ]
            ]
        ]
    ]
];


$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, $base_url);
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
