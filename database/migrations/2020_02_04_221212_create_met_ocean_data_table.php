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
            $table->string('Time[UTC+0]');
            $table->integer('lev[m]');
            $table->decimal('hs[m]', 8, 2);
            $table->decimal('hx[m]', 8, 2);
            $table->decimal('tp[s]', 8, 2);
            $table->decimal('tm01[s]', 8, 2);
            $table->decimal('tm02[s]', 8, 2);
            $table->integer('dp[deg]');
            $table->integer('dpm[deg]');
            $table->decimal('hs_sw1[m]', 8, 2);
            $table->decimal('hs_sw8[m]', 8, 2);
            $table->decimal('tp_sw1[s]', 8, 2);
            $table->decimal('tp_sw8[s]', 8, 2);
            $table->integer('dpm_sw8[deg]');// Perhaps discrepancy in the data here. 
            $table->integer('dpm_sw1[deg]');
            $table->decimal('hs_sea8[m]', 8, 2);
            $table->decimal('hs_sea[m]', 8, 2);
            $table->decimal('tp_sea8[s]', 8, 2);
            $table->decimal('tp_sea[s]', 8, 2);
            $table->decimal('tm_sea[s]', 8, 2);
            $table->integer('dpm_sea8[deg]');
            $table->integer('dpm_sea[deg]');
            $table->decimal('hs_ig[m]', 8, 2);
            $table->decimal('hs_fig[m]', 8, 2);
            $table->decimal('wsp[kts]', 8, 2);
            $table->decimal('gst[kts]', 8, 2);
            $table->integer('wd[deg]');
            $table->decimal('wsp100[kts]', 8, 2);
            $table->decimal('wsp50[kts]', 8, 2);
            $table->decimal('wsp80[kts]', 8, 2);
            $table->decimal('precip[mm/hr]', 8, 2);
            $table->decimal('tmp[C]', 8, 2);
            $table->decimal('rh[%]', 8, 2);
            $table->decimal('vis[km]', 8, 1);
            $table->decimal('cld[%]', 8, 2);
            $table->decimal('cb[m]', 8, 2);
            $table->decimal('csp0[kts]', 8, 1);
            $table->integer('cd0[deg]');
            $table->decimal('ss[m]', 8, 2);
            $table->decimal('sst[C]', 8, 2);

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
