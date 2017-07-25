<?php

$base_url = 'xxx';

$data = [
    "text" => "Would you like to play a game?",
    "response_type" => "in_channel",
    "attachments" => [
        [
            "text" => "Choose a game to play",
            "fallback" => "If you could read this message, you'd be choosing something fun to do right now.",
            "color" => "#3AA3E3",
            "attachment_type" => "default",
            "callback_id" => "game_selection",
            "actions" => [
                [
                    "name" => "games_list",
                    "text" => "Pick a game...",
                    "type" => "select",
                    "options" => [
                        [
                            "text" => "Hearts",
                            "value" => "hearts"
                        ],
                        [
                            "text" => "Bridge",
                            "value" => "bridge"
                        ],
                        [
                            "text" => "Checkers",
                            "value" => "checkers"
                        ],
                        [
                            "text" => "Chess",
                            "value" => "chess"
                        ],
                        [
                            "text" => "Poker",
                            "value" => "poker"
                        ],
                        [
                            "text" => "Falken's Maze",
                            "value" => "maze"
                        ],
                        [
                            "text" => "Global Thermonuclear War",
                            "value" => "war"
                        ]
                    ]
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
