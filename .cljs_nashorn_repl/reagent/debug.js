// Compiled by ClojureScript 1.10.520 {:target :nashorn}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__12748__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12749__i = 0, G__12749__a = new Array(arguments.length -  0);
while (G__12749__i < G__12749__a.length) {G__12749__a[G__12749__i] = arguments[G__12749__i + 0]; ++G__12749__i;}
  args = new cljs.core.IndexedSeq(G__12749__a,0,null);
} 
return G__12748__delegate.call(this,args);};
G__12748.cljs$lang$maxFixedArity = 0;
G__12748.cljs$lang$applyTo = (function (arglist__12750){
var args = cljs.core.seq(arglist__12750);
return G__12748__delegate(args);
});
G__12748.cljs$core$IFn$_invoke$arity$variadic = G__12748__delegate;
return G__12748;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12751__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12751 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12752__i = 0, G__12752__a = new Array(arguments.length -  0);
while (G__12752__i < G__12752__a.length) {G__12752__a[G__12752__i] = arguments[G__12752__i + 0]; ++G__12752__i;}
  args = new cljs.core.IndexedSeq(G__12752__a,0,null);
} 
return G__12751__delegate.call(this,args);};
G__12751.cljs$lang$maxFixedArity = 0;
G__12751.cljs$lang$applyTo = (function (arglist__12753){
var args = cljs.core.seq(arglist__12753);
return G__12751__delegate(args);
});
G__12751.cljs$core$IFn$_invoke$arity$variadic = G__12751__delegate;
return G__12751;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
