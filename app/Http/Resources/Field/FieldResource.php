<?php

namespace App\Http\Resources\Field;

use App\Http\Resources\Degree\DegreeResource;
use Illuminate\Http\Resources\Json\JsonResource;

class FieldResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'type' => $this->type,
            'degree' => new DegreeResource($this->degree())
        ];
    }
}
