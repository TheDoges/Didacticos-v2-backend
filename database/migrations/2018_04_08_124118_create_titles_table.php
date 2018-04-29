<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTitlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('titles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('short_name');
            $table->string('full_name')->nullable();
            $table->boolean('lab_permission');
            $table->boolean('lec_permission');
            $table->boolean('exe_permission');
            $table->boolean('sem_permission');
            $table->boolean('pro_permission');
            $table->integer('min_hours');
            $table->integer('max_hours');
            $table->integer('warning_percent');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('titles');
    }
}
