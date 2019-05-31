// Compiled by ClojureScript 1.10.520 {:target :nashorn}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__13070 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__13071 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__13071;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR__orig_val__13070,_STAR_always_update_STAR__temp_val__13071){
return (function (){
var _STAR_always_update_STAR__orig_val__13072 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__13073 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__13073;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__13072;
}});})(_STAR_always_update_STAR__orig_val__13070,_STAR_always_update_STAR__temp_val__13071))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__13070;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__13075 = arguments.length;
switch (G__13075) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__13077_13081 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__13078_13082 = null;
var count__13079_13083 = (0);
var i__13080_13084 = (0);
while(true){
if((i__13080_13084 < count__13079_13083)){
var v_13085 = cljs.core._nth.call(null,chunk__13078_13082,i__13080_13084);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_13085);


var G__13086 = seq__13077_13081;
var G__13087 = chunk__13078_13082;
var G__13088 = count__13079_13083;
var G__13089 = (i__13080_13084 + (1));
seq__13077_13081 = G__13086;
chunk__13078_13082 = G__13087;
count__13079_13083 = G__13088;
i__13080_13084 = G__13089;
continue;
} else {
var temp__5720__auto___13090 = cljs.core.seq.call(null,seq__13077_13081);
if(temp__5720__auto___13090){
var seq__13077_13091__$1 = temp__5720__auto___13090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13077_13091__$1)){
var c__4550__auto___13092 = cljs.core.chunk_first.call(null,seq__13077_13091__$1);
var G__13093 = cljs.core.chunk_rest.call(null,seq__13077_13091__$1);
var G__13094 = c__4550__auto___13092;
var G__13095 = cljs.core.count.call(null,c__4550__auto___13092);
var G__13096 = (0);
seq__13077_13081 = G__13093;
chunk__13078_13082 = G__13094;
count__13079_13083 = G__13095;
i__13080_13084 = G__13096;
continue;
} else {
var v_13097 = cljs.core.first.call(null,seq__13077_13091__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_13097);


var G__13098 = cljs.core.next.call(null,seq__13077_13091__$1);
var G__13099 = null;
var G__13100 = (0);
var G__13101 = (0);
seq__13077_13081 = G__13098;
chunk__13078_13082 = G__13099;
count__13079_13083 = G__13100;
i__13080_13084 = G__13101;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map
