<?php

namespace App\Exceptions;

use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\JsonResponse;
use RuntimeException;

class BaseErrorException extends RuntimeException implements Responsable
{
    protected $type;
    protected $title;
    protected $code;
    protected $statusCode;

    public function __construct(string $type = "", string $title = "", string $code = "", int $statusCode = 200)
    {
        $this->type = $type;
        $this->title = $title;
        $this->code = $code;
        $this->statusCode = $statusCode;
    }

    public function toResponse($request)
    {
        return new JsonResponse([
            'type' => $this->type,
            'title' => $this->title,
            'code' => $this->code,
        ], $this->statusCode);
    }
}