<?php

namespace App\Http\Controllers\API\REST;

use App\Http\Controllers\Controller;
use App\Http\Requests\Field\FieldRequest;
use App\Http\Resources\Field\FieldResource;
use App\Models\Degree;
use App\Models\Field;
use App\Utils\Controller\ControllerHelper;
use App\Utils\Response\ResponseMessages;
use Illuminate\Http\Request;
use Validator;
use Symfony\Component\HttpFoundation\Response;

class FieldController extends Controller
{
    use ControllerHelper;

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
        return FieldResource::collection(Field::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(/*Degree $degree,*/ FieldRequest $request)
    {
        //
        $field = new Field();
        $field->fill($request->validated());
        //$field->degree_id = $degree->id;
        $field->save();
        return $this->prepareJsonSuccessResponse(new FieldResource($field), Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Field  $field
     * @return \Illuminate\Http\Response
     */
    public function show(/*Degree $degree,*/ Field $field)
    {
        //
        return new FieldResource($field);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Field  $field
     * @return \Illuminate\Http\Response
     */
    public function update(/*Degree $degree,*/ Request $request, Field $field)
    {
        //
        unset($request['id']);
        $isUpdated = $this->updateDataInModel($request->all(), $field);
        $message = $isUpdated ? new FieldResource($field) : ResponseMessages::NOTHING_TO_UPDATE;
        return $this->prepareJsonSuccessResponse($message, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Field  $field
     * @return \Illuminate\Http\Response
     */
    public function destroy(/*Degree $degree,*/ Field $field)
    {
        //
        $field->delete();
        return $this->prepareJsonSuccessResponse(ResponseMessages::OPERATION_SUCCESSFUL, Response::HTTP_OK);
    }

    /**
     * Store all a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeAll(Request $request)
    {
        //
        $response = $this->storeSelectedModels($request->all(), Field::class);
        return $this->prepareLoginSuccessResponse($response, ResponseMessages::OPERATION_SUCCESSFUL);
    }

    /**
     * Destroy all a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function deleteAll(Request $request)
    {
        //
        $response = $this->deleteSelectedModels($request->all(), Field::class);
        return $this->prepareLoginSuccessResponse($response, ResponseMessages::OPERATION_SUCCESSFUL);
    }
}
