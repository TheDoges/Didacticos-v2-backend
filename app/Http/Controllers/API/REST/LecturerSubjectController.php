<?php

namespace App\Http\Controllers\API\REST;

use App\Models\LecturerSubject;
use Illuminate\Http\Request;
use App\Http\Resources\LecturerSubject\LecturerSubjectResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\LecturerSubject\LecturerSubjectRequest;
use App\Models\Lecturer;
use App\Utils\Controller\ControllerHelper;
use Symfony\Component\HttpFoundation\Response;
use App\Utils\Response\ResponseMessages;

class LecturerSubjectController extends Controller
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
        return LecturerSubjectResource::collection(LecturerSubject::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LecturerSubjectRequest $lsRequest)
    {
        //
        $lecturerSubject = new LecturerSubject();
        $lecturerSubject->fill($lsRequest->all());
        $lecturerSubject->save();

        return $this->prepareJsonSuccessResponse(new LecturerSubjectResource($lecturerSubject), Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LecturerSubject  $lecturerSubject
     * @return \Illuminate\Http\Response
     */
    public function show(LecturerSubject $lecturerSubject)
    {
        //
        return new LecturerSubjectResource($lecturerSubject);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LecturerSubject  $lecturerSubject
     * @return \Illuminate\Http\Response
     */
    public function update(LecturerSubjectRequest $lsRequest, LecturerSubject $lecturerSubject)
    {
        //
        $message = ResponseMessages::MODEL_NOT_FOUND;
        $lecturerSubject = LecturerSubject::find($lsRequest[LecturerSubject::ID]);
        if($lecturerSubject != null) {
            $isUpdated = $this->updateDataInModel($lsRequest->all(), $lecturerSubject);
            $message = $isUpdated ? new LecturerSubjectResource($lecturerSubject) : ResponseMessages::NOTHING_TO_UPDATE;
        }
        return $this->prepareJsonSuccessResponse($message, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LecturerSubject  $lecturerSubject
     * @return \Illuminate\Http\Response
     */
    public function destroy(LecturerSubjectRequest $lecturerSubject)
    {
        //
        $message = ResponseMessages::MODEL_NOT_FOUND;
        $lecturerSubject = LecturerSubject::find($lecturerSubject[LecturerSubject::ID]);
        if($lecturerSubject != null) {
            $lecturerSubject->delete();
            $message = ResponseMessages::OPERATION_SUCCESSFUL;
        }

        return $this->prepareJsonSuccessResponse($message, Response::HTTP_OK);
    }
}
