var picArray = [
  {
  	name : "bomb",
  	img : "./assents/bomb.png",
  },

  {
    name :"hummer",
    img : "./assents/hummer.jpg",
  },

  { 
    name : "lips",
    img : "./assents/mario2.jpg",
  },

  {
  	name : "mario",
  	img : "./assents/raccon",
  },

  {
  	name : "turtle",
  	img : "./assents/turtle",
  }


]

$("#picName").text(picArray[0].name)
$("#pic").attr("src",picArray[0].img)
