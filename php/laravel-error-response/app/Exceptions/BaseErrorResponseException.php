<?php

namespace App\Exceptions;

use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\JsonResponse;
use RuntimeException;

class BaseErrorResponseException extends RuntimeException implements Responsable
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
        422 => 'validation_error',
        500 => 'internal_server_error',
    ];

    /**
     * BaseErrorException constructor.
     *
     * @param string $type (将来的に使用するが今は未使用)
     * @param string $title 簡易エラーメッセージ
     * @param int $statusCode ステータスコード
     */
    public function __construct(string $type = "", string $title = "", int $statusCode = 200)
    {
        $this->type = $type;
        $this->title = $title;
        $this->statusCode = $statusCode;
    }

    /**
     * @return string
     */
    public function getType(): string
    {
        return $this->type;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @return int
     */
    public function getStatusCode(): int
    {
        return $this->statusCode;
    }

    public function toResponse($request)
    {
        return new JsonResponse(
            $this->getBasicResponse(),
            $this->getStatusCode()
        );
    }

    protected function getBasicResponse()
    {
        return [
            'type' => $this->getType(),
            'title' => $this->getTitle(),
            'code' => $this->toCode($this->statusCode),
        ];
    }

    protected function toCode(int $statusCode): string
    {
        return $this->codes[$statusCode];
    }
}