$(document).ready(function(){
  $('.language-button').click(function () {
    localStorage.setItem('prokria-language', $('.language-button:checked').val());
    location.reload();
  });

  if(localStorage.getItem("prokria-language") === 'bangla'){
    $( "#bangla-button" ).prop("checked", true );
    $.getJSON('/lang/bn.json',function(data) {
      //Transalation Will be bellow here
      $('.algorithmexplained').text(data.algorithmexplained);
      $('.sort').text(data.sort);
      $('.simulate').text(data.simulate);
      $('.bubble').text(data.bubble);
      $('.selection').text(data.selection);
      $('.inser').text(data.inser);
      $('.heapsort').text(data.heapsort);
      $('.merge').text(data.merge);
      $('.quick').text(data.quick);
      $('.clustering').text(data.clustering);
      $('.kmeans').text(data.k-means);
      $('.listsearch').text(data.listsearch);
      $('.linear').text(data.linear);
      $('.binary').text(data.binary);
      
      //Transalation Will be above here
    });
  }else{
    $( "#english-button" ).prop("checked", true );
    $.getJSON('/lang/en.json',function(data) {
      //Transalation Will be bellow here
      $('.algorithmexplained').text(data.algorithmexplained);
      $('.sort').text(data.sort);
      $('.simulate').text(data.simulate);
      $('.bubble').text(data.bubble);
      $('.selection').text(data.selection);
      $('.inser').text(data.inser);
      $('.heapsort').text(data.heapsort);
      $('.merge').text(data.merge);
      $('.quick').text(data.quick);
      $('.clustering').text(data.clustering);
      $('.kmeans').text(data.k-means);
      $('.listsearch').text(data.listsearch);
      $('.linear').text(data.linear);
      $('.binary').text(data.binary);
      
      //Transalation Will be above here
    });
  }
});
