<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MetOceanData;

class MetOceanDataController extends Controller
{
    public function index()
    {
    $OceanData = MetOceanData::all();

    return $OceanData;
    }
}
