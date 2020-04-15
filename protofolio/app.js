$(document).ready(function(){
  flag=1;
  $("#nex").click(function(){
    console.log("I got clicked");
    if(flag==0){
      $("#card1").css("z-index","999");
      $("#card2").css("z-index","9");
      $("#card3").css("z-index","9");
      $("#card1").css("transform","translateX(0px) scale(1)");;
      $("#card2").css("transform","translateX(-20px) scale(1)");
      $("#card3").css("transform","translateX(20px) scale(1)");
      flag=1;
    }
    else if(flag==1){
      $("#card1").css("z-index","9");
      $("#card2").css("z-index","9");
      $("#card3").css("z-index","999");
      $("#card1").css("transform","translateX(-20px) scale(1)");;
      $("#card2").css("transform","translateX(20px) scale(1)");
      $("#card3").css("transform","translateX(0px) scale(1)");
      flag=2;
    }
    else if(flag==2){
      $("#card").css("z-index","9");
      $("#card2").css("z-index","999");
      $("#card3").css("z-index","9");
      $("#card1").css("transform","translateX(20px) scale(1)");;
      $("#card2").css("transform","translateX(0px) scale(1)");
      $("#card3").css("transform","translateX(-20px) scale(1)");
      flag=0;
    }
  })
})
