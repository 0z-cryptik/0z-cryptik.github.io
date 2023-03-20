if (Modernizr.geolocation){
    navigator.geolocation.getCurrentPosition(success, fail)
}


function success(position){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://weatherapi-com.p.rapidapi.com/current.json?q="+position.coords.latitude+','+position.coords.longitude,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "16fb5aebf3msh2c569b330d21d0fp1df1ccjsna58161aa6041",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
        }
    };
        
    $.ajax(settings).done(function (response) {
        function displayWeather(data){
            const {temp_c} = data.current
            const {name} = data.location
            const {text} = data.current.condition
            const {icon} = data.current.condition
            const {humidity} = data.current
            const {wind_kph} = data.current
            const {temp_f} = data.current
            $('h1#city').text('weather in '+name)
            $('p#degc').html(temp_c+' &deg c')
            $('img#icon').attr('src', 'https:'+icon)
            $('span#b').text(text)
            $('p#humidity').text('Humidity: '+ humidity +'%')
            $('p#ws').text('wind speed: '+wind_kph+'km/h')
            $('p#degf').html(temp_f+' &deg f')   
        }
        displayWeather(response) 
    });

    function searchWeather(search){
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://weatherapi-com.p.rapidapi.com/current.json?q="+search,
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "16fb5aebf3msh2c569b330d21d0fp1df1ccjsna58161aa6041",
                "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
            }
        };
        
        $.ajax(settings).done(function (response) {
            function displayWeather(data){
                const {temp_c} = data.current
                const {name} = data.location
                const {text} = data.current.condition
                const {icon} = data.current.condition
                const {humidity} = data.current
                const {wind_kph} = data.current
                const {temp_f} = data.current
                $('h1#city').text('weather in '+name)
                $('p#degc').html(temp_c+' &deg c</p>')
                $('img#icon').attr('src', 'https:'+icon)
                $('span#b').text(text)
                $('p#humidity').text('Humidity: '+ humidity +'%')
                $('p#ws').text('wind speed: '+wind_kph+'km/h')
                $('p#degf').html(temp_f+' &deg f')
            }
            displayWeather(response) 
        });
    }

    $('button#searchbtn').on('click', function(){
        searchWeather($('#search').val())
    })

    $('#search').on('keyup', function(e){
        if(e.key == 'Enter'){
            searchWeather($(this).val())
        }
    })
}


function fail(){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://weatherapi-com.p.rapidapi.com/current.json?q=moscow",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "16fb5aebf3msh2c569b330d21d0fp1df1ccjsna58161aa6041",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
        }
    };
        
    $.ajax(settings).done(function (response) {
        function displayWeather(data){
            const {temp_c} = data.current
            const {name} = data.location
            const {text} = data.current.condition
            const {icon} = data.current.condition
            const {humidity} = data.current
            const {wind_kph} = data.current
            const {temp_f} = data.current
            console.log(temp_c, name, text)
            $('h1#city').text('weather in '+name)
            $('p#degc').html(temp_c+' &deg c</p>')
            $('img#icon').attr('src', 'https:'+icon)
            $('span#b').text(text)
            $('p#humidity').text('Humidity: '+ humidity +'%')
            $('p#ws').text('wind speed: '+wind_kph+'km/h')
            $('p#degf').html(temp_f+' &deg f')
        }
        displayWeather(response)

        function searchWeather(search){
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://weatherapi-com.p.rapidapi.com/current.json?q="+search,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "16fb5aebf3msh2c569b330d21d0fp1df1ccjsna58161aa6041",
                    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
                }
            };
            
            $.ajax(settings).done(function (response) {
                function displayWeather(data){
                    const {temp_c} = data.current
                    const {name} = data.location
                    const {text} = data.current.condition
                    const {icon} = data.current.condition
                    const {humidity} = data.current
                    const {wind_kph} = data.current
                    const {temp_f} = data.current
                    $('h1#city').text('weather in '+name)
                    $('p#degc').html(temp_c+' &deg c</p>')
                    $('img#icon').attr('src', 'https:'+icon)
                    $('span#b').text(text)
                    $('p#humidity').text('Humidity: '+ humidity +'%')
                    $('p#ws').text('wind speed: '+wind_kph+'km/h')
                    $('p#degf').html(temp_f+' &deg f')
                }
                displayWeather(response) 
            });
        }
    
        $('button#searchbtn').on('click', function(){
            searchWeather($('#search').val())
        })

        $('#search').on('keyup', function(e){
            if(e.key == 'Enter'){
                searchWeather($(this).val())
            }
        })
    });
}


