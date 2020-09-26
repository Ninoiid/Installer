
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",20000,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_imgbutton1}","click",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_imgbutton2}","click",function(sym,e){sym.play(5000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_imgbutton3}","click",function(sym,e){sym.play(10000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_imgbutton4}","click",function(sym,e){sym.play(15000);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"image_Slider_");