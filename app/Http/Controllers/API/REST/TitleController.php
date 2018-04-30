<?php

namespace App\Http\Controllers\API\REST;

use App\Http\Controllers\Controller;
use App\Http\Requests\Title\TitleRequest;
use App\Http\Resources\Title\TitleResource;
use App\Models\Title;
use App\Utils\Controller\ControllerHelper;
use App\Utils\Response\ResponseMessages;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class TitleController extends Controller
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
        return TitleResource::collection(Title::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TitleRequest $request)
    {
        //
        $title = new Title();
        $title->fill($request->validated());
        $title->save();
        return $this->prepareJsonSuccessResponse(new TitleResource($title), Response::HTTP_OK);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Title  $title
     * @return \Illuminate\Http\Response
     */
    public function show(Title $title)
    {
        //
        return new TitleResource($title);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Title  $title
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Title $title)
    {
        //
        unset($request['id']);
        $isUpdated = $this->updateDataInModel($request->all(), $title);
        $message = $isUpdated ? new TitleResource($title) : ResponseMessages::NOTHING_TO_UPDATE;
        return $this->prepareJsonSuccessResponse($message, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Title  $title
     * @return \Illuminate\Http\Response
     */
    public function destroy(Title $title)
    {
        //
        $title->delete();
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
        $response = $this->storeSelectedModels($request->all(), Title::class);
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
        $response = $this->deleteSelectedModels($request->all(), Title::class);
        return $this->prepareLoginSuccessResponse($response, ResponseMessages::OPERATION_SUCCESSFUL);
    }
}
