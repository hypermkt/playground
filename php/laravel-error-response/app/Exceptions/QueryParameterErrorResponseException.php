<?php

namespace App\Exceptions;

class QueryParameterErrorResponseException extends BaseErrorResponseException
{
    public function toResponse($request)
    {
        // TODO: どのクエリパラメーターに問題があったのか詳細なメッセージを返したい
        $this->title = 'Bad Request';
        $this->statusCode = 400;
        return parent::toResponse($request);
    }
}