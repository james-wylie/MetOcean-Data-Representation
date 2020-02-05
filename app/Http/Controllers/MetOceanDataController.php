<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MetOceanData;

class MetOceanDataController extends Controller
{

    // Hidden function
    public function removeMeasures($arr) 
    {
        
    }

    public function index()
    {
    $OceanData = MetOceanData::paginate(25);
    
    // $OceanData


    return $OceanData;
    }
    
    public function IndexByDay()
    {
    $particularDay = MetOceanData::where('date', $date)->paginate(25);
    // Index by day function needs work.
    return $particularDay;
    }

    public function show()
    {
        $particularHour = MetOceanData::where('id', $productId)->first();
    }
}
