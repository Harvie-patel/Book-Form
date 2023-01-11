function CalcuateScore()
        {
            var genre = document.querySelector('input[type=radio][name="Genre"]:checked');

            if(genre.value == "horror")
            {
                var a = "horror";
            }

            if(genre.value == "fantasy")
            {
                var a = "fantasy";
            }

            if(genre.value == "fantasy")
            {
                var a = "fantasy";
            }

            if(genre.value == "fiction")
            {
                var a = "fiction";
            }

            if(genre.value == "fiction")
            {
                var a = "fiction";
            }

            if(genre.value == "sci-fi")
            {
                var a = "sci-fi";
            }

            if(genre.value == "suspense")
            {
                var a = "suspense";
            }

            if(genre.value == "other")
            {
                var a = "";
            }

            alert("Your "+a +" book has been successfully saved");
        }

        var p = document.getElementById("display");

        function Book(){
        var Donations = document.getElementById("Donations").value;
        var a = " Has Been Successfully Delivered";
        var element = document.createElement("h4");
        p.innerText = Donations + a;
        }