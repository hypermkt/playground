<?php

namespace App\Exceptions;

use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\JsonResponse;
use RuntimeException;
use Illuminate\Http\Response;
use Throwable;

class ValidationErrorException extends RuntimeException implements Responsable
{
    private $validationErrors = [];

    public function __construct(array $validationErrors, string $message = "", int $code = 0, Throwable $previous = null)
    {
        $this->validationErrors = $validationErrors;
        parent::__construct($message, $code, $previous);
    }

    public function toResponse($request)
    {
        return new JsonResponse([
            'type' => '',
            'title' => $this->getMessage(),
            'code' => 'validation_error',
            'invalid-params' => [
                $this->createInvalidParams()
            ]
        ], Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    protected function createInvalidParams(): array
    {
        $invalidParams = [];
        foreach ($this->validationErrors as $key => $values) {
            $invalidParams['name'] = $key;
            $invalidParams['reasons'] = $values;
        }

        return $invalidParams;
    }
}