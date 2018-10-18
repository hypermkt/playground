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
//        return parent::render($request, $exception);

        $e = $this->prepareException($exception);

        // 422 Validation Error
        if ($e instanceof ValidationException) {
            return (new ValidationErrorException($e->errors(), $e->getMessage(), $e->status))
                ->toResponse($request);
        } elseif ($e instanceof AuthenticationException) {
            return (new BaseErrorException('', $e->getMessage(), Response::HTTP_UNAUTHORIZED))
                ->toResponse($request);
        } elseif ($this->isHttpException($e)) {
            return (new BaseErrorException('', $e->getMessage(), $e->getStatusCode()))
                ->toResponse($request);
        }

        return (new BaseErrorException('', 'Internal Server Error', Response::HTTP_INTERNAL_SERVER_ERROR))
            ->toResponse($request);
    }

}
