<?php

namespace App\Http\Requests\Interfaces;

interface IFormRequest {
    function getRulesByRequestMethods($method);
}
