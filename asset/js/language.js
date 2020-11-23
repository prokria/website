$(document).ready(function(){
  $('.language-button').click(function () {
    localStorage.setItem('prokria-language', $('.language-button:checked').val());
    location.reload();
  });

  if(localStorage.getItem("prokria-language") === 'bangla'){
    $( "#bangla-button" ).prop("checked", true );
    $("#logobn").show();
    $("#logoen").hide();
    $.getJSON('/lang/bn.json',function(data) {
      //Transalation Will be bellow here
      $('.algorithmexplained').text(data.algorithmexplained);
      $('.sort').text(data.sort);
      $('.simulate').text(data.simulate);
      $('.bubble').text(data.bubble);
      $('.selection').text(data.selection);
      $('.insertion').text(data.insertion);
      $('.heapsort').text(data.heapsort);
      $('.merge').text(data.merge);
      $('.quick').text(data.quick);
      $('.clustering').text(data.clustering);
      $('.kmeansalgorithm').text(data.kmeansalgorithm);
      $('.listsearch').text(data.listsearch);
      $('.linearsearch').text(data.linearsearch);
      $('.binarysearch').text(data.binarysearch);

      //Transalation Will be above here
    });
  }else{
    $( "#english-button" ).prop("checked", true );
    $("#logoen").show();
    $("#logobn").hide();
    $.getJSON('/lang/en.json',function(data) {
      //Transalation Will be bellow here
      $('.algorithmexplained').text(data.algorithmexplained);
      $('.sort').text(data.sort);
      $('.simulate').text(data.simulate);
      $('.bubble').text(data.bubble);
      $('.selection').text(data.selection);
      $('.insertion').text(data.insertion);
      $('.heapsort').text(data.heapsort);
      $('.merge').text(data.merge);
      $('.quick').text(data.quick);
      $('.clustering').text(data.clustering);
      $('.kmeansalgorithm').text(data.kmeansalgorithm);
      $('.listsearch').text(data.listsearch);
      $('.linearsearch').text(data.linearSearch);
      $('.binarysearch').text(data.binarySearch);

      //Transalation Will be above here
    });
  }
});