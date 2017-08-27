$(document).ready(function(){

    var srcStates = [ 1, 2, 1, 2, 3 ];
    var currentState = 0;

    $('#createModal').modal();
    $('#createModal').modal('close');
    
    $('#calendar').modal();
    $('#calendar').modal('close');

    $('#filterModal').modal();
    $('filterModal').modal('close');

    $('#createbutton').on('click', function(event) {
        console.log('createButton clicked');
        console.log(event);
    	$('#createModal').modal('open');
    });

    $('#dateButton').on('click', function(event) {
        console.log('dateButton clicked');
        console.log(event);
    	$('#calendar').modal('open');
    });

    $('#data').on('click', function(event) {
        console.log('data clicked, state: ' + srcStates[currentState]);
        console.log('currentState: ' + currentState);
        //console.log(event);
        switch (srcStates[currentState]) {
            case 1:
                // show all of the data sources
                $('#data').empty();
                $('#data').append('<i class="small material-icons">shopping_cart</i>&nbsp;&nbsp;&nbsp;<i class="small material-icons">payment</i>&nbsp;&nbsp;&nbsp;<i class="small material-icons">account_balance</i>&nbsp;&nbsp;&nbsp;<i class="small material-icons">dashboard</i>&nbsp;&nbsp;&nbsp;<i class="small material-icons">trending_up</i>');
                currentState++;
                break;

            case 2:
                // show the selected/hard-coded data src
                $('#data').empty();
                $('#data').append('<i id="undo" class="small material-icons">undo</i>');
                $('#data').append("<span id='quick'>QuickBooks</span>");
                $('#data').append('<i id="filterIcon" class="small material-icons">filter_list</i>');
                currentState++;
                break;

            case 3:
                // show the filter page
                $('#filterModal').modal('open');
                currentState++;
                break;

            default:
                // start over
                $('#data').empty();
                $('#data').append('<a id="dataButton" class="btn white"> <i class="small material-icons left">add</i>Add a Data Source</a>');
                currentState = 0;
        }
    });

    $('.row').on('click', function(event) {
        console.log('row clicked');
        console.log(event);
    	$('#startDate').empty();
    	$('#startDate').text('Select an End Date');
    });
});


        