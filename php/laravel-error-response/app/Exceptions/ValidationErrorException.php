<?php

namespace App\Exceptions;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class ValidationErrorException extends BaseErrorException
{
    private $validationErrors = [];

    /**
     * @param array $validationErrors
     */
    public function setValidationErrors(array $validationErrors): void
    {
        $this->validationErrors = $validationErrors;
    }

    /**
     * @return array
     */
    public function getValidationErrors(): array
    {
        return $this->validationErrors;
    }

    public function toResponse($request)
    {
        return new JsonResponse(
            array_merge(
                $this->getBasicResponse(),
                [
                    'invalid-params' => [
                        $this->createInvalidParams()
                    ]
                ]
            ),
            $this->statusCode
        );
    }

    protected function createInvalidParams(): array
    {
        $invalidParams = [];
        foreach ($this->getValidationErrors() as $key => $values) {
            $invalidParams['name'] = $key;
            $invalidParams['reasons'] = $values;
        }

        return $invalidParams;
    }
}