$(function () {
    // Make sure JQuery loaded successfully before coding.
    console.log('JQuery loaded');

    const updateItemCount = () => {
        $('#totalItems').text("Total Items: " + $("#toDoList").children().length);
    }

    const showHideItemCountClearAll = () =>{
        if ($("#toDoList").children().length > 0) {
            $("#btnClearAll").show();
            $("#totalItems").show();
        } else {
            $("#btnClearAll").hide();
            $("#totalItems").hide();
        }
    }

    

    // Create the EventListener to listen
    // to click event for Add button
    $('#btnAdd').click(function () {
        console.log('Add button clicked');

        var toDoItem = $('#todo').val();
        if (toDoItem === "" || toDoItem.length === 0) {
            return;
        }
        console.log(toDoItem);

        $('#btnClearAll').show();
        
        // Create a new object with a pair of list tag
        // Insert toDoItem into it
        // Note: Here the $ is a 'creation', not 'selection'
        var toDoItemElement = $('<li></li>').text(toDoItem);
        // Output will be 
        // <li>test data</li>

        // Append a delete button
        $(toDoItemElement).append("<button class='del'>x</button>");

        // Append it to ol tag. 
        $('#toDoList').append(toDoItemElement);
        // Output will be 
        // <ol>
        //     <li>test data</li>
        // </ol>

        // Test it

        // Go back to toDoItemElement to append delete button tag 
        // before append to toDoList ol tag.

        // Clear the textbox once done
        $('#todo').val("");

        // Go back delete button and add a class called 'del'
        // Create the event handler for delete button click
        $('.del').click(function () {
            console.log('Delete button clicked');
            $(this).parent().remove();
            updateItemCount();            
            showHideItemCountClearAll();
        })

        // Go back to validate textbox before process

        // Beautify the delete button css

        // Add Delete All button and Show item count

        updateItemCount();
        showHideItemCountClearAll();
    })

    $('#btnClearAll').click(function () {
        $('.mesg').show();        
        if ($("#toDoList").children().length > 0) {            
            $("#toDoList").empty();
            // or $("#toDoList").children().remove();

            $('.mesg').text("All items deleted.").fadeOut(2000);
        } else {
            $('.mesg').text("No item to delete.").fadeOut(2000);
        }
        showHideItemCountClearAll();
    })

    // Initialize
    const init = () => {
        showHideItemCountClearAll();

        if ($('.mesg').text() === "") {
            $('.mesg').hide();
        }
    }
    init();

})