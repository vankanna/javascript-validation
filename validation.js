$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName:
                {
                    required: true,
                    digits: false
                },

            grade:
                {
                    required: true,
                    min: 5,
                    max: 8,
                    digits: true
                }
        };

    // Object containing the error messages
    var myMessages =
        {
            firstName:
                {
                    required: "First name is required.",
                    digits: "Your name can't contain numbers."
                },

            grade:
                {
                    required: "Grade is required.",
                    min: "It should be above 4",
                    max: "It should be blow 9",
                    digits: "Whole numbers only"
                }
        };

    // Pass the configuration to the form's validate() method
    function runMyProgram(event) {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        event.preventDefault();
        var name = $("#firstName").val();
        var numgrade =$("#grade").val();
        $("p").text(`${name} is currently ${numgrade} in school.`)


    }


    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );




});