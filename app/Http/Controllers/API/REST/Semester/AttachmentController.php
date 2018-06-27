<?php

namespace App\Http\Controllers\API\REST\Semester;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use PDF;
use App\Models\LecturerSubject;
use App\Models\Lecturer;
use App\Models\Subject;
use App\Models\Title;
use App\Models\Degree;
use App\Models\Field;
use App\Models\Semester;


class AttachmentController extends Controller
{

    public function __construct() {
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Semester $semester)
    {
        $links = LecturerSubject::getLecturerSubjectBySemesterId($semester[Semester::ID]);
        $lecturerIds = $this->getUniqueLecturersIdWithSubjects($links);
        $dataFromIds = $this->getDataFromIds($lecturerIds);
        $data = $this->createDataForPDF($dataFromIds, $lecturerIds);

        $pdf = PDF::loadView('API/REST/Semester/pdfView', compact('data'));
        return $pdf->stream('Obciazenia.pdf');
    }

    private function getUniqueLecturersIdWithSubjects($links) {
        $lecturersIds = [];
        $linksIds = [];
        $subjectsIds = [];
        foreach($links as $link) {
            if(!in_array($link[LecturerSubject::SUBJECT_ID], $subjectsIds)) {
                array_push($subjectsIds, $link[LecturerSubject::SUBJECT_ID]);
            }
            if(!isset($linksIds[$link[LecturerSubject::LECTURER_ID]])) {
                $linksIds[$link[LecturerSubject::LECTURER_ID]] = [];
                array_push($lecturersIds, $link[LecturerSubject::LECTURER_ID]);
            }
            $linkId = [
                LecturerSubject::SUBJECT_ID => $link[LecturerSubject::SUBJECT_ID],
                LecturerSubject::HOURS =>  $link[LecturerSubject::HOURS]
            ];
            array_push($linksIds[$link[LecturerSubject::LECTURER_ID]], $linkId);
        }

        return [
            'lecturersIds' => $lecturersIds,
            'linksIds' => $linksIds,
            'subjectsIds' => $subjectsIds
        ];
    }

    private function getDataFromIds($ids) {
        $lecturers = [];
        $subjects = [];
        foreach($ids['lecturersIds'] as $id) {
            $lecturer = Lecturer::find($id);
            $title = $lecturer->title;
            $lecturers[$id] = $title[Title::NAME] . ' ' . $lecturer[Lecturer::NAME] . ' ' . $lecturer[Lecturer::SURNAME];
        }
        foreach($ids['subjectsIds'] as $id) {
            $subjects[$id] = Subject::find($id);
        }

        return [
            'lecturers' => $lecturers, 
            'subjects' => $subjects
        ];
    }

    private function createDataForPDF($idsData, $linksIds) {
        $lecturers = [];
        foreach($linksIds['linksIds'] as $lecId => $linkId) {
            $types = [];
            foreach($linkId as $link) {
                if(!isset($types[Subject::TYPE_ALIASES[$idsData['subjects'][$link[LecturerSubject::SUBJECT_ID]][Subject::TYPE]]])) {
                    $types[Subject::TYPE_ALIASES[$idsData['subjects'][$link[LecturerSubject::SUBJECT_ID]][Subject::TYPE]]] = [];
                }
                $field = $idsData['subjects'][$link[LecturerSubject::SUBJECT_ID]]->field;
                $subject = [
                    'name' => $idsData['subjects'][$link[LecturerSubject::SUBJECT_ID]][Subject::NAME],
                    'degree' => $idsData['subjects'][$link[LecturerSubject::SUBJECT_ID]]->degree[Degree::PREFIX],
                    'field' => $field[Field::NAME],
                    'stationary' => $field[Field::TYPE] == 'STACJONARNE' ? 'TAK' : 'NIE',
                    'hours' => $link[LecturerSubject::HOURS]
                ];
                array_push($types[Subject::TYPE_ALIASES[$idsData['subjects'][$link[LecturerSubject::SUBJECT_ID]][Subject::TYPE]]], $subject);
            }
            $lecturers[$lecId] = [
                'name' => $idsData['lecturers'][$lecId],
                'types' => $types
            ];
        }
        return $lecturers;
    }
}
