<?php

$base_url = 'xxx';

$data = [
    "text" => "Let's get a productive conversation going",
    "response_type" => "in_channel",
    "attachments" => [
        [
            "fallback" => "Upgrade your Slack client to use messages like these.",
            "color" => "#3AA3E3",
            "attachment_type" => "default",
            "callback_id" => "conversations_123",
            "actions" => [
                [
                    "name" => "conversations_list",
                    "text" => "Who did you talk to last?",
                    "type" => "select",
                    "data_source" => "conversations"
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
