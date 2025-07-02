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
           
            abort(403, 'Access denied. Please contact the administrator for approval.');
        }

        return $next($request);
    }
}
