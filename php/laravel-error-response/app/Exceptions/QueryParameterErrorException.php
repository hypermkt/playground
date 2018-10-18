<?php

namespace App\Exceptions;

class QueryParameterErrorException extends BaseErrorException
{
    public function toResponse($request)
    {
        // TODO: どのクエリパラメーターに問題があったのか詳細なメッセージを返したい
        $this->title = 'Bad Request';
        $this->statusCode = 400;
        return parent::toResponse($request);
    }
}