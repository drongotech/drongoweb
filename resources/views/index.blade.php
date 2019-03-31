@extends('mainlayout.layout')
@section ('titlePage')
DRONGO | SUCCESS PARTNER
@endsection
@section('content')
		<main>
           <!-- SERVICES SECTION -->
            @include('mainlayout.services')
            <!-- END SERVICE SECTION -->
            
            <!-- SHOWCASE SECTION -->
            @include('mainlayout.showcase')
            <!-- END SHOWCASE SECTION -->
            
            <!-- TESTIMONIAL SECTION -->
            @include('mainlayout.testimony')
            <!-- END TESTIMONIAL SECTION -->
        </main>
@endsection