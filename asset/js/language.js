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
      $('.k-means-algorithm').text(data.k-means-algorithm);
      $('.list-search').text(data.list-search);
      $('.linear-Search').text(data.linear-Search);
      $('.binary-Search').text(data.binary-Search);
      
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
      $('.k-means-algorithm').text(data.k-means-algorithm);
      $('.list-search').text(data.list-search);
      $('.linear-Search').text(data.linear-Search);
      $('.binary-Search').text(data.binary-Search);
      
      //Transalation Will be above here
    });
  }
});