
(function( $ ){ 
  $this = null;
  $allShowObject = new Array();

  $.fn.showIn = function() {    
      $this = this;
      getShowDom(this);
  };

  $.fn.showOut = function() { 
	  $.each($allShowObject,function(n,value){
		var parames= value.p;
		var speed = parseInt(parames["speed"]);
		$(this.o).animate(parames,speed);
	  });
  };

    function dump_obj(myObject) {  
		var s = "";  
		for (var property in myObject) {  
			s = s + "\n "+property +": " + myObject[property] ;  
		}  
		alert(s);  
	}  
  function getShowDom($object){
      $object.css("position","relative");
      var allChild = $object.children("[item*='show']");
      runAnimate(allChild);
  }

  function runAnimate($objs){
	  $.each($objs,function(){
		$(this).css("position","absolute");  
		var tmpObject = getAttrs($(this));
		var parames= tmpObject.f;

		$allShowObject.push({"o":this,"p":tmpObject.n});

		var speed = parseInt(parames["speed"]);
		$(this).animate(parames,speed,function(){
		  if(typeof($(this).attr("next"))!="undefined"){
			  var obj = ($this.find("[sub='"+$(this).attr("next")+"']"));            
			  runAnimate(obj);              
		  }
		});	  
	});
  }

  function getAttrs($obj){
      var attrs= $obj.get(0).attributes;
      var _fparames = {"speed":1000};
      var _nparames = {"speed":1000};
      for(var i=0; i < attrs.length ; i++){
          att = attrs[i];
          if((att.name).indexOf("_")!=-1){
              var key=(att.name).replace("_","");
              _fparames[key] = $obj.attr(att.name);
			  _nparames[key] = $obj.css(key);
          }
      }
	  _nparames["speed"] = _fparames["speed"];
      return {"f":_fparames,"n":_nparames};
  }

})( jQuery );  