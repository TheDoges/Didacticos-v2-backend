<?php

namespace App\Http\Controllers;

use App\Http\Requests\Degree\DegreeRequest;
use App\Http\Resources\Degree\DegreeResource;
use App\Models\Degree;
use App\Utils\Controller\ControllerHelper;
use App\Utils\Response\ResponseHelper;
use App\Utils\Response\ResponseMessages;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DegreeController extends Controller
{
    use ResponseHelper, ControllerHelper;

    public function __construct() {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return DegreeResource::collection(Degree::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DegreeRequest $request)
    {
        //
        $degree = new Degree();
        $degree->fill($request->validated());
        $degree->save();
        return $this->prepareJsonSuccessResponse(new DegreeResource($degree), Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Degree  $degree
     * @return \Illuminate\Http\Response
     */
    public function show(Degree $degree)
    {
        //
        return new DegreeResource($degree);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Degree  $degree
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Degree $degree)
    {
        //
        unset($request['id']);
        $isUpdated = $this->updateDataInModel($request->all(), $degree);
        $message = $isUpdated ? new DegreeResource($degree) : ResponseMessages::NOTHING_TO_UPDATE;
        return $this->prepareJsonSuccessResponse($message, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Degree  $degree
     * @return \Illuminate\Http\Response
     */
    public function destroy(Degree $degree)
    {
        //
        $degree->delete();
        return $this->prepareJsonSuccessResponse(ResponseMessages::OPERATION_SUCCESSFUL, Response::HTTP_OK);
    }
}
