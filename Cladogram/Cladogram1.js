var labelType, useGradients, nativeTextSupport, animate, recenter;
(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};

function search(event){
	if (event && event.keyCode == 13){
		var input = document.getElementById("searchbar").value;
		var string = finder(json,input);
		document.getElementById("searchresult").innerHTML = string;
		if (document.getElementById("about")){
			document.getElementById("theleft").removeChild(document.getElementById("about"));
		}
	}
}

function finder(obj,item){
	found = false;
	string = "";
	if (obj["id"].toLowerCase().indexOf(item.toLowerCase()) != -1) {
		string += "<a href=javascript:recenter(\'"+obj["id"].replace(/ /g,"_")+"\')>"+obj["id"]+"</a>";
		string += '<br>';
	} else {
		for (var x in obj.data){
			if (obj.data[x].toLowerCase().indexOf(item.toLowerCase()) != -1 && !found){
				string += "<a href=javascript:recenter(\'"+obj["id"]+"\')>"+obj["id"]+"</a>";
				string += '<br>';
				found = true;
			}
		}
	}
	if (obj.children){
		for (var y in obj.children){
			string += finder(obj.children[y],item);
		}
	}
	return string;
}

function init(){
    //init Spacetree
    //Create a new ST instance
    var st = new $jit.ST({
        //show a lot of levels
        constrained: false,
        //id of viz container element
        injectInto: 'infovis',
        //set duration for the animation
        duration: 80,
        //set animation transition type
        transition: $jit.Trans.Quart.easeInOut,
        //set distance between node and its children
        levelDistance: 50,
        //enable panning
        Navigation: {
          enable:true,
          panning:true
        },
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        orientation: "bottom",
        Node: {
            height: 20,
            width: 90,
            type: 'rectangle',
            color: '#aaa',
            overridable: true,
        },
        
        Edge: {
            type: 'bezier',
            overridable: true
        }, 
        Events: { 
        	enable: true, 
        	onClick: function(node){ 
        		if (!node) return; 
        		st.onClick(node.id); 
        	}, 
        	/*onRightClick: function(node){
        		var now = st.graph.getClosestNodeToOrigin('current');
			st.graph.replot();
        		st.onClick(now.id);
        	}*/
        },
        
        onBeforeCompute: function(node){
            Log.write("loading " + node.id);
        },
        
        onAfterCompute: function(){
            Log.write("done");
        },
        
        
        //This method is called on DOM label creation.
        //Use this method to add event handlers and styles to
        //your node.
        onCreateLabel: function(label, node){
            label.id = node.id;            
            label.innerHTML = node.id;
            /*label.onclick = function(){
            	  st.onClick(node.id);
            };*/
            //set label styles
            var style = label.style;
            style.width = 70 + 'px';
            style.height = 17 + 'px';            
            style.cursor = 'pointer';
            style.color = '#333';
            style.fontSize = '0.8em';
            style.textAlign= 'center';
            style.paddingTop = '3px';
        },
        
        //This method is called right before plotting
        //a node. It's useful for changing an individual node
        //style properties before plotting it.
        //The data properties prefixed with a dollar
        //sign will override the global node style properties.
        onBeforePlotNode: function(node){
            //add some color to the nodes in the path between the
            //root node and the selected node.
            if (node.selected) {
                node.data.$color = "#ff7";
            }
            else {
                delete node.data.$color;
                //if the node belongs to the last plotted level
                //if(!node.anySubnode("exist")) {
                    //count children number
                    var count = 0;
                    node.eachSubnode(function(n) { count++; });
                    //assign a node color based on
                    //how many children it has
                    node.data.$color = ['#aaa', '#baa', '#caa', '#daa', '#eaa', '#faa'][count];                    
                //}
            }
        },
        
        //This method is called right before plotting
        //an edge. It's useful for changing an individual edge
        //style properties before plotting it.
        //Edge data proprties prefixed with a dollar sign will
        //override the Edge global style properties.
        onBeforePlotLine: function(adj){
            if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                adj.data.$color = "#eed";
                adj.data.$lineWidth = 3;
            }
            else {
                delete adj.data.$color;
                delete adj.data.$lineWidth;
            }
        },
        onComplete: function(){
	          var node = st.graph.getClosestNodeToOrigin("current");
	          var html = "<h4>" + node.id + "</h4><ul>";
	          if (node.data){
	          	for (x in node.data){
	          		if (x[0] != "$"){
	          			html += "<li><b>" + x + ":</b><div class=\"relation\">"+ node.data[x].replace(/; /g,"<br>") +"</div></li><br>";
	          		}
	          	}
	          }
	          html += "</ul>";
	          $jit.id('inner-details').innerHTML = html;
	      }
    });
    //load json data
    st.loadJSON(json);
    //compute node positions and layout
    st.compute();
    //emulate a click on the root node.
    st.onClick(st.root);
    //end

    recenter = function(theid){
    	st.onClick(theid.replace(/_/g," "));
    }
}
