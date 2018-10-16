<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

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
        $statusCode = 500;
        $jsonResponse = [
            'type' => '',
            'title' => '',
            'code' => '',
        ];
        // 404 Not Found
        if ($exception instanceof NotFoundHttpException) {
            $jsonResponse['code'] = 'not_found';
            $statusCode = $exception->getStatusCode();
        // 422 Validation Error
        } elseif ($exception instanceof ValidationException) {
            return (new ValidationErrorException($exception->errors(), $exception->getMessage(), $exception->status))
                ->toResponse($request);
        }

        return response()
            ->json($jsonResponse, $statusCode);
    }
}
