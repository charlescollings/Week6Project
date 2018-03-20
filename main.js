    

    

    $(".js-search").on("click", function() {
        event.preventDefault();
        // console.log('click');
        let searchTerm = 'chicago';
        let numberRecords = '0';
        let startYear = '19900101';
        let endYear = '20000101';
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + '?' + 'q=' + searchTerm + '&?page=' + numberRecords + '&begin_date=' + startYear + '&end_date=' + endYear + '&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931' ;

    $.ajax({
          url: queryURL,
          method: "GET"
        })
        // Promise function with our response
        .then(function(response) {
            
          // Create a results variable and store all of the response data to it
            console.log(response);
    });
});