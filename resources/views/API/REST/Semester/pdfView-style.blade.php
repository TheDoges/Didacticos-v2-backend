<!doctype html>
<html>
    <head>
        <style>
.title {
    text-align: center;
}

.footer-info {
    width: 98%;
    position: absolute;
    left: 2%;
    bottom: 0px;
}

body {
    font-family: "dejavu sans";
    font-size: 12px;
}
table {
    text-align: center;
    border-collapse: collapse;
    width: 98%;
    margin: auto;
}

th {
    padding-right: 10px;
    padding-left: 10px;
    border: 2px solid black;
}

td {
    padding-right: 10px;
    padding-left: 10px;
}

tr.subject td {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}

tr.subject td:first-child {
    border-left: 1px solid black;
}

tr.subject td:last-child {
    border-right: 1px solid black;
}

div.lecturer-content table:last-child {
    margin-bottom: 10px;
}

.lecturer {
    text-align: left;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 5px;
}

.subject-type {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
}

.lecturer-content {
    width: 98%;
    margin: 10px auto 10px auto;
    page-break-inside:avoid;
}
.border {
    border: 1px solid black;
}

.subject-container {
    page-break-inside:avoid;
}
        </style>
        <link rel="stylesheet" href="/pdfView.css">
    </head>
        <body>
            @yield('content')
        </body>
    </html>
