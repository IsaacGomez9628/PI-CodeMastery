<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Page extends Controller
{
    public function index()
    {
        return Inertia::render('Page');
    }

    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }
}
