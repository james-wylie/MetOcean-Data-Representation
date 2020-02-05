<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMetOceanDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('met_ocean_data', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('Time');
            $table->integer('lev');
            $table->decimal('hs', 8, 2);
            $table->decimal('hx', 8, 2);
            $table->decimal('tp', 8, 2);
            $table->decimal('tm01', 8, 2);
            $table->decimal('tm02', 8, 2);
            $table->integer('dp');
            $table->integer('dpm');
            $table->decimal('hs_sw1', 8, 2);
            $table->decimal('hs_sw8', 8, 2);
            $table->decimal('tp_sw1', 8, 2);
            $table->decimal('tp_sw8', 8, 2);
            $table->integer('dpm_sw8');// Perhaps discrepancy in the data here. 
            $table->integer('dpm_sw1');
            $table->decimal('hs_sea8', 8, 2);
            $table->decimal('hs_sea', 8, 2);
            $table->decimal('tp_sea8', 8, 2);
            $table->decimal('tp_sea', 8, 2);
            $table->decimal('tm_sea', 8, 2);
            $table->integer('dpm_sea8');
            $table->integer('dpm_sea');
            $table->decimal('hs_ig', 8, 2);
            $table->decimal('hs_fig', 8, 2);
            $table->decimal('wsp', 8, 2);
            $table->decimal('gst', 8, 2);
            $table->integer('wd');
            $table->decimal('wsp100', 8, 2);
            $table->decimal('wsp50', 8, 2);
            $table->decimal('wsp80', 8, 2);
            $table->decimal('precip', 8, 2);
            $table->decimal('tmp', 8, 2);
            $table->decimal('rh', 8, 2);
            $table->decimal('vis', 8, 1);
            $table->decimal('cld', 8, 2);
            $table->decimal('cb', 8, 2);
            $table->decimal('csp0', 8, 1);
            $table->integer('cd0');
            $table->decimal('ss', 8, 2);
            $table->decimal('sst', 8, 2);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('met_ocean_data');
    }
}
