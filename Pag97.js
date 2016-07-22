(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1160,
	height: 786,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/sonido1.mp3?1469212253287", id:"sonido1"}
	]
};



// symbols:



(lib.flechas1 = function() {
	this.spriteSheet = ss["Pag97_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FONDOFLASH = function() {
	this.spriteSheet = ss["Pag97_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAVC7IgVgBIgTABIgRACIACg4IABg4IABg9IAAgfIgBg9IgBg4IgCg4IARACIATABIAVgBIAQgCIgCA4IgCA4IAAA9IAAAfIAAA9IACA4IACA4IgQgCg");
	this.shape.setTransform(175.7,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAnB2QgMgLgGgQQgMAPgNALQgPAKgXAAQgZAAgQgJQgQgKgHgPQgIgPABgRQAAgfAUgRQATgPAjgIQAbgGAMgFQAMgEAEgGQAEgFAAgJQgBgSgMgNQgLgMgXAAQgLAAgMADQgMAFgKAFQgKAHgEAHIgEAAIgHgeQAVgRAYgJQAZgJAYAAQAYAAAVAIQAUAIANASQALASAAAdIAAA6IgBA2QAAAQADAHQADAIAGACQAHACAKAAIAAALQgNAIgLADQgKADgMAAQgSAAgLgJgAAAAAQgLAEgKAGQgKAFgGAKQgGALgBATQAAASAIAKQAHAKAOAAQAPAAAJgNQAKgMABgZIAAggIABgSQgLAFgKACg");
	this.shape_1.setTransform(156.5,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgnB0QgZgLgPgTQgPgSgHgWQgHgXAAgXQAAgkARgcQAQgcAdgRQAegRAmAAQAcAAAUAGQAVAHASALQgGAKgGAOQgFAOgDAOIgMAAQgDgXgMgNQgMgOgXgBQgbABgPAaQgQAbAAAwQAAAtATAYQARAZAkgBQAQAAAOgHQAPgHAHgJIAGAFIgGAPIgFAOQgLAJgRAGQgRAHgWAAQgjAAgZgLg");
	this.shape_2.setTransform(131.8,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAVC6IgVgBIgTABIgRABQADgZAAgcIABg5IAAgVIgBg4QAAgagDgbIARACIATABIAVgBIAQgCQgCAbgBAaIgBA4IAAAVIABA5QABAcACAZIgQgBgAgbh3QgLgLAAgRQAAgRALgLQAMgLAPgBQARABAKALQALALABARQgBARgLALQgKALgRAAQgPAAgMgLg");
	this.shape_3.setTransform(111.8,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhLCuQgWgRgJgdQgKgeAAgkQAAgkANgbQANgcAVgQQAWgQAcAAQAUAAARALQASAJAJARIABAAIgBhVIgChSIAQABIAVABIAUgBIARgBIgCA3IgBA4IgBA+IAAAfIABA9IABA4IACA3IgRgBIgUgBIgTABIgPABIACgLIACgSIAAgMIgBgBQgJAWgRANQgRAOgaAAQgiAAgVgSgAgRgTQgLAJgHAUQgGAWgBAlQABAiAFAUQAGAVAKAIQAKAKAKgBQAUABANgYQANgYAAg2QAAgugMgTQgMgWgVAAIgBAAQgIAAgJAIg");
	this.shape_4.setTransform(90.5,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAnB2QgMgLgGgQQgMAPgNALQgPAKgXAAQgZAAgQgJQgQgKgHgPQgIgPABgRQAAgfAUgRQATgPAjgIQAbgGAMgFQANgEADgGQAEgFAAgJQgBgSgMgNQgLgMgXAAQgLAAgMADQgMAFgKAFQgJAHgFAHIgEAAIgGgeQAUgRAZgJQAYgJAYAAQAYAAAVAIQAUAIANASQALASAAAdIgBA6IAAA2QAAAQADAHQADAIAGACQAHACAKAAIAAALQgNAIgLADQgLADgLAAQgSAAgLgJgAAAAAQgLAEgKAGQgKAFgGAKQgGALgBATQAAASAIAKQAHAKAOAAQAPAAAKgNQAJgMABgZIAAggIABgSQgLAFgKACg");
	this.shape_5.setTransform(64.8,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("ABsCqIgWgBIgXABIgXACIhXifIgFAAIAAAUIAAA0IACAsIACArIgSgCIgXgBIgWABIgTACIACgrIACgsIAAg0IAAhBIAAgzIgCgtIgCgrIATABIAWABIAfgBIArgBQAXAAAQABQAQACAKAEQALAEAIAGQAPALAJAQQAIARABAWQgBAlgUAXQgTAWgmAIQAYAqAcArIA3BVIgXgCgAgyiPIgCBFIAABDIAGACIAFAAQAhAAAQgSQARgTAAgjQAAgdgIgOQgIgPgPgDQgQgFgXAAIgFAAg");
	this.shape_6.setTransform(38.7,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag5DEQAjgnAOguQANgvAAg6QAAgsgFgjQgGgkgNgeQgOgdgZgbIAOgNQAfAZAVAdQAYAcANAmQANAnABAzQgBAwgNAlQgMAlgYAeQgVAeggAZg");
	this.shape_7.setTransform(-16.2,21.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("ACHCqIgXgBIgWABIgSACIACgrIABgsIAAg0IAAgcIgmgBIglgBIgkABIgnABIAAAcIAAA0IACAsIADArIgTgCIgXgBIgWABIgSACIABgrIACgsIAAg0IAAhBIAAgzIgCgtIgBgrIASABIAWABIAXgBIATgBIgDArIgCAsIAAAyIAgABIArABIAsgBIAfgBIAAgyIgBgsIgCgrIASABIAWABIAXgBIASgBIgCArIgBAtIAAAzIAABBIAAA0IABAsIACArIgSgCg");
	this.shape_8.setTransform(-42.4,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhfCgQgrgTgZgoQgZgngBg+QAAgxAYgoQAXgoArgYQArgYA5gBQA1AAArAUQArATAZAoQAZAoAAA7QAAAxgYAoQgZApgrAYQgrAYg3AAIgBABQg0AAgqgTgAg5iAQgZAUgMAjQgNAjAAAqQAAA1APAfQAOAgAYAOQAXAOAdgBQAcAAAagRQAZgRAPgjQAQgjAAg1QAAgrgOgfQgNgggZgQQgYgRggAAQghAAgYAVg");
	this.shape_9.setTransform(-82.7,18.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgICZQgYgdgMglQgNgmgBgvQABg0ANgmQANgmAYgcQAVgdAfgZIAOANQgZAbgOAdQgNAegHAkQgDAjgBAsQAAA6ANAuQAOAvAjAnIgOANQgfgZgVgfg");
	this.shape_10.setTransform(-110.2,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AC4CqIgUgBIgVABIgVACQgBgjgEgnIgHhPIgIhNIgBAAIg3ByIg1B0IgFgBIgFAAIgFAAIgEABIg2hxQgbg5gcg3IgBAAQgIA3gEA5IgIBxIgMgCIgMgBIgLABIgMACQAPhWANhWQANhVAKhWIALABIAKABIAKgBIAKgBIAmBRIAnBSIAkBKQAeg5Aeg6IA5h6IALABIAKABIALgBIAKgBIALBcIALBfIALBYIAKBEIgUgCg");
	this.shape_11.setTransform(-198,18.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA3GSQgagCgbABQgagBgcACIg2ADIACgOIABgPIgBgNIgCgOQAYACAfACQAeACAVAAIACgsIADhSIAChqIAAh3QAAhYgBg/IgEhzIgCheIhqAFIACgNIABgOIgBgNIgCgOIBAAEQAhABAfABQAVgBAWgBIAqgEQgDAjAAA8IgCCJIAACkIAACyIACCSQAAA+ADAcIg0gDg");
	this.shape_12.setTransform(199,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA0GSQgbgCgaABQgagBgbACIg0ADQACgcACg+IABiSIAAiyIAAikIgBiJQgCg8gCgjIAqAEQAVABAWABQAfgBAhgBIBAgEIgCAOIgBANIABAOIACANIhrgFIgCBeIgCBzQgCA/AABYIABB3IACBqIABBSIACAsQAWAAAegCQAegCAZgCIgCAOIgBANIABAPIACAOIg3gDg");
	this.shape_13.setTransform(-131,11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgnARIAAghIBPAAIAAAhg");
	this.shape_14.setTransform(214.8,-51.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgnARIAAghIBPAAIAAAhg");
	this.shape_15.setTransform(183.8,-13.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAkBuIgMgBIgNABIgLABIAAgXIABgfIABgkIAAhaIgIAFIgOAIIgOAGIgIgKIgIgIQAZgJAYgKIAtgXIAHADIgCAdIgBAiIgBAiIAAASIAAAgIABAgIACAnIgOgBg");
	this.shape_16.setTransform(-5.7,-17.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgnARIAAghIBPAAIAAAhg");
	this.shape_17.setTransform(-18,-13.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABfB6IgUgBIgWABIgQACQADgbABgkIABhPQAAgfgKgPQgLgPgTAAQgVABgLATQgKATAAAjIAAASIABA5QAAAcADAaIgRgCIgVgBIgVABIgQACQADgaAAgcIABg5IAAgSIgBg6QAAgbgDgaIASABIASABIASgBIASgBIgCAlIABAAQAOgUATgMQARgMAXAAQAmAAAUAWQAUAWABAwIgBArIgBAnIABAjIABAmIgRgCg");
	this.shape_18.setTransform(0.9,48.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgWB+IAAhnIhnAAIAAgtIBnAAIAAhnIAtAAIAABnIBnAAIAAAtIhnAAIAABng");
	this.shape_19.setTransform(-167.3,-15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.2,-76.3,444.5,152.8);


(lib.linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		root2=this;
		root2.stop();
	}
	this.frame_9 = function() {
		root2.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(12.7,1,1).p("AgFAAIALAA");
	this.shape.setTransform(92.8,242.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#660000").ss(12.7,1,1).p("AgzAAIBnAA");
	this.shape_1.setTransform(97.4,242.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#660000").ss(12.7,1,1).p("AhgAAIDBAA");
	this.shape_2.setTransform(102,242.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#660000").ss(12.7,1,1).p("AiOAAIEdAA");
	this.shape_3.setTransform(106.5,242.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#660000").ss(12.7,1,1).p("Ai8AAIF5AA");
	this.shape_4.setTransform(111.1,242.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#660000").ss(12.7,1,1).p("AjqAAIHVAA");
	this.shape_5.setTransform(115.7,242.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#660000").ss(12.7,1,1).p("AkXAAIIvAA");
	this.shape_6.setTransform(120.2,242.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#660000").ss(12.7,1,1).p("AlFAAIKLAA");
	this.shape_7.setTransform(124.8,242.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#660000").ss(12.7,1,1).p("AlzAAILnAA");
	this.shape_8.setTransform(129.4,242.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#660000").ss(12.7,1,1).p("AmgAAINCAA");
	this.shape_9.setTransform(134,242.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(85.8,235.9,14,12.7);


(lib.CopiadeSímbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.flechas1();
	this.instance.setTransform(0,0,1.481,1.481);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.Copiadelinea2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		root4=this;
		root4.stop();
	}
	this.frame_9 = function() {
		root4.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(12.7,1,1).p("AgFAAIALAA");
	this.shape.setTransform(92.8,242.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#660000").ss(12.7,1,1).p("AgzAAIBnAA");
	this.shape_1.setTransform(97.4,242.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#660000").ss(12.7,1,1).p("AhgAAIDBAA");
	this.shape_2.setTransform(102,242.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#660000").ss(12.7,1,1).p("AiOAAIEdAA");
	this.shape_3.setTransform(106.5,242.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#660000").ss(12.7,1,1).p("Ai8AAIF5AA");
	this.shape_4.setTransform(111.1,242.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#660000").ss(12.7,1,1).p("AjqAAIHVAA");
	this.shape_5.setTransform(115.7,242.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#660000").ss(12.7,1,1).p("AkXAAIIvAA");
	this.shape_6.setTransform(120.2,242.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#660000").ss(12.7,1,1).p("AlFAAIKLAA");
	this.shape_7.setTransform(124.8,242.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#660000").ss(12.7,1,1).p("AlzAAILnAA");
	this.shape_8.setTransform(129.4,242.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#660000").ss(12.7,1,1).p("AmgAAINCAA");
	this.shape_9.setTransform(134,242.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(85.8,235.9,14,12.7);


(lib.Copiadelinea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		root3=this;
		root3.stop();
	}
	this.frame_9 = function() {
		root3.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(12.7,1,1).p("AgFAAIALAA");
	this.shape.setTransform(92.8,242.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#660000").ss(12.7,1,1).p("AgzAAIBnAA");
	this.shape_1.setTransform(97.4,242.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#660000").ss(12.7,1,1).p("AhgAAIDBAA");
	this.shape_2.setTransform(102,242.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#660000").ss(12.7,1,1).p("AiOAAIEdAA");
	this.shape_3.setTransform(106.5,242.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#660000").ss(12.7,1,1).p("Ai8AAIF5AA");
	this.shape_4.setTransform(111.1,242.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#660000").ss(12.7,1,1).p("AjqAAIHVAA");
	this.shape_5.setTransform(115.7,242.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#660000").ss(12.7,1,1).p("AkXAAIIvAA");
	this.shape_6.setTransform(120.2,242.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#660000").ss(12.7,1,1).p("AlFAAIKLAA");
	this.shape_7.setTransform(124.8,242.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#660000").ss(12.7,1,1).p("AlzAAILnAA");
	this.shape_8.setTransform(129.4,242.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#660000").ss(12.7,1,1).p("AmgAAINCAA");
	this.shape_9.setTransform(134,242.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(85.8,235.9,14,12.7);


// stage content:
(lib.Pag97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		root=this;
	}
	this.frame_12 = function() {
		root.stop();
		playSound("sonido1");
		root.l1.visible=false;
		root.l2.visible=false;
		root.l3.visible=false;
		setTimeout(function(){
		root.l1.visible=true;	
		root.l1.gotoAndPlay(1);	
		setTimeout(function(){root.l1.visible=false;},2000);	
		},4000);
		
		setTimeout(function(){
		root.l2.visible=true;	
		root.l2.gotoAndPlay(1);	
		setTimeout(function(){root.l2.visible=false;},2000);	
		},6500);
		
		setTimeout(function(){
		root.l3.visible=true;	
		root.l3.gotoAndPlay(1);	
		setTimeout(function(){root.l3.visible=false;},2000);	
		},8500);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(11).call(this.frame_12).wait(41));

	// Capa 5
	this.l3 = new lib.Copiadelinea2();
	this.l3.setTransform(336.5,272.4,1,1,0,0,0,133.9,242.2);

	this.l2 = new lib.Copiadelinea();
	this.l2.setTransform(190.5,272.4,1,1,0,0,0,133.9,242.2);

	this.l1 = new lib.linea();
	this.l1.setTransform(60.3,272.4,1,1,0,0,0,133.9,242.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.l1},{t:this.l2},{t:this.l3}]},12).wait(41));

	// Capa 3
	this.formula = new lib.Símbolo1();
	this.formula.setTransform(-254.5,189.3);
	this.formula._off = true;

	this.timeline.addTween(cjs.Tween.get(this.formula).wait(1).to({_off:false},0).to({x:246.6,y:200.5},11).wait(41));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("EgkKAOYQi4AAAAjFIAA2lQAAjFC4AAMBIVAAAQC4AAAADFIAAWlQAADFi4AAg");
	this.shape.setTransform(-325.4,721.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(52));

	// felcha
	this.sig1 = new lib.CopiadeSímbolo1();
	this.sig1.setTransform(1056.9,722.1,1,1,0,0,0,40,40);
	new cjs.ButtonHelper(this.sig1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.sig1).wait(53));

	// panel
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9966").s().p("EhF2APnQkXABAAguIAA90QAAgsEXgBMCLsAAAQEYABAAAsIAAd0QAAAukYgBg");
	this.shape_1.setTransform(527.7,662.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(53));

	// Capa 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A6E7A").s().p("AhcBrQAAgLAIgHQAJgIAKAAQAFAAAJADQAIAEAIAAQAVAAAVgHQAYgHAHgKQgBgMglgRQgtgXgNgOQgNgQAAgTQAAgnAtgeQArgeAmAAQAmAAAAAhQAAAJgIAHQgJAHgGAAQgDAAgGgDQgGgEgEAAQgUAAgYAOQgWANAAASQAAAJAJAIQAGAJAbAMQAnAQAMAPQAMAPAAASQAAAhgsAWQgsAWg2AAQgoAAAAgeg");
	this.shape_2.setTransform(508,58.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A6E7A").s().p("AAsAsQg5BNg3AAQgUAAgOgQQgPgPAAgZQAAg8A1hBQA1hDA0AAQAbAAAJAbQAaAAAAAUQAAAKgFAYQgJAuAAAaQAAAdAEAMIAFAPQACAEAJAEQAJAEAAAHQAAAMgLAIQgMAHgNAAQgqAAAEhUgAgagdQgkAwAAAjQAAATAHAAQAbAAAlgvQAmgtAAgkQAAgLgFgGQgFgHgGAAQgXAAgiAyg");
	this.shape_3.setTransform(485.3,58.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A6E7A").s().p("AhOBvQgUgUAAgkQAAg3AuhBQAuhCArAAQAVAAAPAVQAPAVAAAXQAAAWgIAIQgIAHgHAAQgWAAgEgeQgCgWgJAAQgRAAgbAyQgdAwAAAlQAAAeAhAAQAiAAAlgZQARgNAKAAQANAAAAANQAAARgoAcQgoAcgpAAQglAAgTgVg");
	this.shape_4.setTransform(460.2,58.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A6E7A").s().p("Ag8COQAAgmALg3IAEgWQAHgoAAgFQAAgRAHgLQAHgLANAAQAOAAAIAHQAJAHAAAJQAAAJgJAaIgBAFQgKAsgDAbQgCAbAAARQAAAOAFAXIAAAHQAAAFgJAIQgKAJgMAAQgdAAAAgtgAAAiAQgLgLAAgLQAAgQALgKQAIgKATAAQAPAAAKAJQAJAJAAALQAAAQgOANQgPAMgKgBQgOAAgIgLg");
	this.shape_5.setTransform(444.3,53.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A6E7A").s().p("AhcBrQAAgLAIgHQAJgIAKAAQAFAAAJADQAIAEAIAAQAVAAAVgHQAYgHAHgKQgBgMglgRQgtgXgNgOQgNgQAAgTQAAgnAtgeQArgeAmAAQAmAAAAAhQAAAJgIAHQgJAHgGAAQgDAAgGgDQgGgEgEAAQgUAAgYAOQgWANAAASQAAAJAJAIQAGAJAbAMQAnAQAMAPQAMAPAAASQAAAhgsAWQgsAWg2AAQgoAAAAgeg");
	this.shape_6.setTransform(425.3,58.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A6E7A").s().p("AAsBsQg5BOg3AAQgUAAgPgQQgOgQAAgZQAAg7A1hDQA1hCA0AAQAbAAAJAcQAZAAAAAUQAAAJgFAXQgIAuAAAcQAAAcAEAMIAFAPQACAEAJAEQAJAEAAAIQAAALgMAIQgLAIgNAAQgqAAAEhVgAgaAiQgkAyAAAjQAAASAHAAQAbAAAlgvQAmgvAAgjQAAgJgFgHQgFgHgGAAQgXAAgiAxgAgIhTQgFgGAAgIQAAgNAegYIAAAAIAQgNQAngfAKgHQALgHAFAAQAGAAAHALQAHALAAAGQAAAFgGAHQgGAIgKAEQgKAFgZATQgFAFggAWIgOAKQgCABgEAAQgHAAgFgFg");
	this.shape_7.setTransform(402.6,52.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A6E7A").s().p("AhSC9QgQgKgBgPQgBgJgDgCIgFgGQgGgHgBgMQAAgOAIgsIAPhbQAViBAKgYQAJgYAYAAQATAAAAAhQAAAWgTBGQgJAjgPBEQAcgjAggXQAggXAaAAQAVAAAOASQAOASABAXQAABFg2A9Qg1A9g6AAQgSAAgPgKgAgWAyQgsA0AAAjQAJAPAMAAQAVAAAYgTQAZgUATgjQATgjAAgXQABgVgIAAQgjAAgrAzg");
	this.shape_8.setTransform(376.7,51.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A6E7A").s().p("AhcBrQAAgLAIgHQAJgIAKAAQAFAAAJADQAIAEAIAAQAVAAAVgHQAYgHAHgKQgBgMglgRQgtgXgNgOQgNgQAAgTQAAgnAtgeQArgeAmAAQAmAAAAAhQAAAJgIAHQgJAHgGAAQgDAAgGgDQgGgEgEAAQgUAAgYAOQgWANAAASQAAAJAJAIQAGAJAbAMQAnAQAMAPQAMAPAAASQAAAhgsAWQgsAWg2AAQgoAAAAgeg");
	this.shape_9.setTransform(333.9,58.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A6E7A").s().p("AhSBrQgVgYAAgqQAAg9Asg3QAtg3AwAAQAZAAAQAQQAPAQAAAWQAAAngmAjQglAig5ANQgHACAAAGQAAALAKAKQAJAJAQAAQAsAAAsguQAJgJAIAAQANAAAAAPQAAAXgnAhQgnAggwAAQgmAAgWgYgAgNg4QgYAdgIAeQAkgFAZgXQAbgXAAgTQAAgIgEgEQgEgGgHAAQgTAAgWAdg");
	this.shape_10.setTransform(312.9,58.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A6E7A").s().p("AgqC4QgGgQAAgkQAAhPAShoQAThsALgTQAKgTAPgBQAYAAAAAbQAAANgDANIgTBGQgLAogFAuQgGAvAAAbQAAAdAEAmIABAOQAAANgKAKQgIAKgLAAQgQAAgHgPg");
	this.shape_11.setTransform(295.9,52.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A6E7A").s().p("AAsAsQg5BNg3AAQgUAAgOgQQgPgPAAgZQAAg8A1hBQA1hDA0AAQAbAAAJAbQAaAAAAAUQAAAKgFAYQgJAuAAAaQAAAdAEAMIAFAPQACAEAJAEQAJAEAAAHQAAAMgLAIQgMAHgNAAQgqAAAEhUgAgagdQgkAwAAAjQAAATAHAAQAbAAAlgvQAmgtAAgkQAAgLgFgGQgFgHgGAAQgXAAgiAyg");
	this.shape_12.setTransform(274.2,58.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A6E7A").s().p("AhcBrQAAgLAIgHQAJgIAKAAQAFAAAJADQAIAEAIAAQAVAAAVgHQAYgHAHgKQgBgMglgRQgtgXgNgOQgNgQAAgTQAAgnAtgeQArgeAmAAQAmAAAAAhQAAAJgIAHQgJAHgGAAQgDAAgGgDQgGgEgEAAQgUAAgYAOQgWANAAASQAAAJAJAIQAGAJAbAMQAnAQAMAPQAMAPAAASQAAAhgsAWQgsAWg2AAQgoAAAAgeg");
	this.shape_13.setTransform(250.6,58.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A6E7A").s().p("Ag8COQAAgmALg3IAEgWQAHgoAAgFQAAgRAHgLQAHgLANAAQAOAAAIAHQAJAHAAAJQAAAJgJAaIgBAFQgKAsgDAbQgCAbAAARQAAAOAFAXIAAAHQAAAFgJAIQgKAJgMAAQgdAAAAgtgAAAiAQgLgLAAgLQAAgQALgKQAIgKATAAQAPAAAKAJQAJAJAAALQAAAQgOANQgPAMgKgBQgOAAgIgLg");
	this.shape_14.setTransform(237,53.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A6E7A").s().p("Ah0CEQgJgHAAgPQAAgOAMgVQAMgUAwgsIAMgLQgrg+AAgjQAAgmAhAAQAWAAACAiQABAiAYAlIAXgZIAHgIQAcgeANgXQAIgOAFgFQAFgEALAAQALAAAJAJQAIAIAAALQAAAZhpBcQAkAsAoAVIAKAHQABAFAAAFQAAALgJAJQgJAJgNgBQgiAAg6hPQgoAlgRAoQgHARgIAJQgTgBgKgHg");
	this.shape_15.setTransform(215.7,59.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A6E7A").s().p("AiICHQgegkAAgnQAAguAdg3QAcg5AsglQAsgkAvAAQAlAAAZAJQAYAJAVASQAUARAHATQAHASAAAhQAAAcgTAnQgSApgjAkQgjAkgkATQgiAVg7gBQgmAAgdgkgAg+hAQgvA/AAA7QAAAbARATQAQASAVAAQA7AAA0g6QA1g5AAg/QAAgXgJgOQgIgOgVgKQgVgJgYAAQgqAAguA+g");
	this.shape_16.setTransform(185.5,55.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A6E7A").s().p("AhcBrQAAgLAIgHQAJgIAKAAQAFAAAJADQAIAEAIAAQAVAAAVgHQAYgHAHgKQgBgMglgRQgtgXgNgOQgNgQAAgTQAAgnAtgeQArgeAmAAQAmAAAAAhQAAAJgIAHQgJAHgGAAQgDAAgGgDQgGgEgEAAQgUAAgYAOQgWANAAASQAAAJAJAIQAGAJAbAMQAnAQAMAPQAMAPAAASQAAAhgsAWQgsAWg2AAQgoAAAAgeg");
	this.shape_17.setTransform(138,58.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A6E7A").s().p("AhSBrQgVgYAAgqQAAg9Asg3QAtg3AwAAQAZAAAQAQQAPAQAAAWQAAAngmAjQglAig5ANQgHACAAAGQAAALAKAKQAJAJAQAAQAsAAAsguQAJgJAIAAQANAAAAAPQAAAXgnAhQgnAggwAAQgmAAgWgYgAgNg4QgYAdgIAeQAkgFAZgXQAbgXAAgTQAAgIgEgEQgEgGgHAAQgTAAgWAdg");
	this.shape_18.setTransform(117,58.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A6E7A").s().p("AgqC4QgGgQAAgkQAAhPAShoQAThsALgTQAKgTAPgBQAYAAAAAbQAAANgDANIgTBGQgLAogFAuQgGAvAAAbQAAAdAEAmIABAOQAAANgKAKQgIAKgLAAQgQAAgHgPg");
	this.shape_19.setTransform(100,52.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A6E7A").s().p("AAsAsQg5BNg3AAQgUAAgOgQQgPgPAAgZQAAg8A1hBQA1hDA0AAQAbAAAJAbQAaAAAAAUQAAAKgFAYQgJAuAAAaQAAAdAEAMIAFAPQACAEAJAEQAJAEAAAHQAAAMgLAIQgMAHgNAAQgqAAAEhUgAgagdQgkAwAAAjQAAATAHAAQAbAAAlgvQAmgtAAgkQAAgLgFgGQgFgHgGAAQgXAAgiAyg");
	this.shape_20.setTransform(78.3,58.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2A6E7A").s().p("Ah1CmQgOgKAAgOQAAgMAGgJQAHgJAIAAQAGgBAEACQAYAKAUAAQAjAAAqgUQAsgTAAgTQAAgIgLgHQgLgHghgMQgvgPgZgLQgYgIgNgRQgNgQAAgYQAAgqAxgkQAxgkBAAAQAmgBAWAQQAWAOAAAUQAAAogrAAQAAgWgMgJQgLgJgXAAQglAAgfASQggATAAAWQAAAOAMALQAMAJAxAPQA2AQAaAQQAZATAAAaQAAArhCAkQhAAlhHAAQgXAAgOgKg");
	this.shape_21.setTransform(50.5,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(53));

	// fondo
	this.instance = new lib.FONDOFLASH();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(580,393,1160,786);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;