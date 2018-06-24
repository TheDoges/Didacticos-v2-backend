@extends('API.REST.Semester.pdfView-style')

@section('content')
<h1 class="title"> Obciążenia </h1>
    @foreach($data as $lecturer)
        <div class="lecturer-content">
                    <div class="lecturer"> {{$lecturer['name']}} </div>
                    <div class="border">
                        @foreach($lecturer['types'] as $type => $subjects)
                            <div class="subject-type"> {{$type}} </div>
                            <table align="center">
                                <tbody>
                                    <tr class="header">
                                        <th>Przedmiot</th>
                                        <th>Stopien</th>
                                        <th>Kierunek</th>
                                        <th>Stacjonarne</th>
                                        <th>Liczba godzin</th>
                                    </tr>
                                    @foreach($subjects as $subject)
                                        <tr class="subject">
                                            <td>{{$subject['name']}}</td>
                                            <td>{{$subject['degree']}}</td>
                                            <td>{{$subject['field']}}</td>
                                            <td>{{$subject['stationary']}}</td>
                                            <td>{{$subject['hours']}}</td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        @endforeach
                    </div>
                </div>
            @endforeach
            <div class="footer-info">
                <h6> Didacticos 2.0 - Copyright by PiesełNonProfitOrganization</h6>
            </div>
@endsection