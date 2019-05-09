// JavaScript File

$(".search").click(function(){
    var userinput = $("#titles").val();
    var request_url = "https://www.googleapis.com/books/v1/volumes?q=" + userinput ;
    $(".info").show();

  $.ajax({
      url: request_url ,
      method: "GET",
        success: function(response) {
infobook = response.items[0].volumeInfo.description;
infobook1 = response.items[0].volumeInfo.title;
infobook2 = response.items[0].volumeInfo.publisher;
infobook3 = response.items[0].volumeInfo.categories;
infobook4 = response.items[0].volumeInfo.publisher;
infobook5 = response.items[0].volumeInfo.pageCount;
infobook6 = response.items[0].volumeInfo.imageLinks[0];

            $("#description").append(infobook);
            $("#titleofbook").append(infobook1);
            $("#author").append(infobook2);
            $("#category").append(infobook3);
            $("#publisher").append(infobook4);
            $("#pagecount").append(infobook5);
            $("#picture").append("<img src=' + infobook6 + '>");
        }  

   
  });
});
$(".info").hide();
