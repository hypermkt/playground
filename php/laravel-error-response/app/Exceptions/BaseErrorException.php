<?php

namespace App\Exceptions;

use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\JsonResponse;
use RuntimeException;
use Illuminate\Http\Response;

class BaseErrorException extends RuntimeException implements Responsable
{
    protected $type;
    protected $title;
    protected $code;
    protected $statusCode;

    protected $codes = [
        400 => 'bad_request',
        401 => 'unauthorized',
        403 => 'forbidden',
        404 => 'not_found',
        405 => 'method_not_allowed',
        500 => 'internal_server_error',
    ];

    public function __construct(string $type = "", string $title = "", int $statusCode = 200)
    {
        $this->type = $type;
        $this->title = $title;
        $this->statusCode = $statusCode;
    }

    public function toResponse($request)
    {
        return new JsonResponse([
            'type' => $this->type,
            'title' => $this->title,
            'code' => $this->toCode($this->statusCode),
        ], $this->statusCode);
    }

    protected function toCode($statusCode)
    {
        return $this->codes[$statusCode];
    }
}