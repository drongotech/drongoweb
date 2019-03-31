<!DOCTYPE html>
<html lang="en-US">
    <head>
        <!-- Meta info -->
        @include('mainlayout.metainfo')
        
    </head>
    
    <body>
        <!-- HEAADER -->
        @include('mainlayout.header')
        <!-- END HEADER -->
        
        @yield('content')
        
        <!-- FOOTER -->
        @include('mainlayout.footer')
        <!-- END FOOTER -->
    </body>
    <!-- Scripts -->
    @include("mainlayout.scripts")
</html>