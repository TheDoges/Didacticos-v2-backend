<?php

namespace App\Http\Resources\Degree;

use Illuminate\Http\Resources\Json\JsonResource;

class DegreeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "prefix" => $this->prefix,
            "alias" => $this->alias,
            "number" => $this->number
        ];
    }
}
