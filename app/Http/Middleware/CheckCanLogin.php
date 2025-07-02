<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckCanLogin
{
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->check() && auth()->user()->can_login == false) {
           
            abort(403, 'Доступ запрещен. Дождитесь одобрения админа.');
        }

        return $next($request);
    }
}
