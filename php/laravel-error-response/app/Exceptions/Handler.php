<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        // アプリケーション固有の例外をHTTP系例外に変換する
        $e = $this->prepareException($exception);

        if ($e instanceof ValidationException) {
            $validationErrorException = new ValidationErrorResponseException('', $e->getMessage(), Response::HTTP_UNPROCESSABLE_ENTITY);
            $validationErrorException->setValidationErrors($e->errors());
            return $validationErrorException->toResponse($request);

        // 認証ありエンドポイントでアクセストークンが不正な場合
        } elseif ($e instanceof AuthenticationException) {
            return $this->toResponse($request, $e->getMessage(), Response::HTTP_UNAUTHORIZED);

        // HTTP系例外が発生した場合
        } elseif ($this->isHttpException($e)) {
            return $this->toResponse($request, $e->getMessage(), $e->getStatusCode());
        }

        // それ以外の場合は Internal Server Error とする
        return $this->toResponse($request, 'Internal Server Error', Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    protected function toResponse($request, string $message, int $statusCode)
    {
         return (new BaseErrorResponseException('', $message, $statusCode))
            ->toResponse($request);
    }
}
