$(document).ready(function(){

    var toggleData = true;
    var toggleDate = true;

    $('#createModal').modal();
    $('#createModal').modal('close');
    
    $('#calendar').modal();
    $('#calendar').modal('close');

    $('#filterModal').modal();
    $('filterModal').modal('close');

    $('#createModal').on('click', function(event) {
    //$(document).on('click', '#createModal', function(event) {
    	$('#createModal').modal('open');
        console.log('createModal clicked');
    });

    $('#dateButton').on('click', function(event) {
    //$(document).on('click', '#dateButton', function(event) {
        console.log('dateButton clicked');
    	$('#calendar').modal('open');
    });

    $('#undo').on('click', function(event) {
    //$(document).on('click', '#undo', function(event) {
        console.log('undo clicked');
    	$('#data').empty();
    	$('#data').append('<i class="small material-icons">shopping_cart</i>&nbsp;&nbsp;&nbsp;<i class="small material-icons">payment</i>&nbsp;&nbsp;&nbsp;<i class="small material-icons">account_balance</i>&nbsp;&nbsp;&nbsp;<i class="small material-icons">dashboard</i>&nbsp;&nbsp;&nbsp;<i class="small material-icons">trending_up</i>');
    	toggleData = false;
    });

    $('#filter').on('click', function(event) {
    //$(document).on('click', '#filterIcon', function(event) {
        console.log('filter clicked');
    	$('filterModal').modal('open');
    });

    $('#data').on('click', function(event) {
    //$(document).on('click', '#data', function(event) {
        console.log('data clicked');
    	if (toggleData) {
    		$('#data').empty();
    		$('#data').append('<i class="small material-icons">shopping_cart</i>&nbsp;&nbsp;&nbsp;<i class="small material-icons">payment</i>&nbsp;&nbsp;&nbsp;<i class="small material-icons">account_balance</i>&nbsp;&nbsp;&nbsp;<i class="small material-icons">dashboard</i>&nbsp;&nbsp;&nbsp;<i class="small material-icons">trending_up</i>');
    		toggleData = false;
    	}
    	else {
    		$('#data').empty();
    		$('#data').append('<i id="undo" class="small material-icons">undo</i>');
    		$('#data').append("<span id='quick'>QuickBooks</span>");
    		$('#data').append('<i id="filterIcon" class="small material-icons">filter_list</i>');
    		toggleData = true;
    	}
    });

    $('.row').on('click', function(event) {
    //$(document).on('click', '.row', function(event) {
        console.log('row clicked');
    	$('#startDate').empty();
    	$('#startDate').text('Pick an End Date');
    });
});


        