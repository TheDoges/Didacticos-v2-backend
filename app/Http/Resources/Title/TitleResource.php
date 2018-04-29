<?php

namespace App\Http\Resources\Title;

use Illuminate\Http\Resources\Json\JsonResource;

class TitleResource extends JsonResource
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
            'name' => $this->name,
            'short_name' => $this->short_name,
            'full_name' => $this->full_name,
            'lab_permission' => $this->lab_permission,
            'lec_permission' => $this->lec_permission,
            'exe_permission' => $this->exe_permission,
            'sem_permission' => $this->sem_permission,
            'pro_permission' => $this->pro_permission,
            'min_hours' => $this->min_hours,
            'max_hours' => $this->max_hours,
            'warning_percent' => $this->warning_percent
        ];
    }
}
