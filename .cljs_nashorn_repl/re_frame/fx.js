// Compiled by ClojureScript 1.10.520 {:target :nashorn}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__13328 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13329 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13329;

try{try{var seq__13330 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__13331 = null;
var count__13332 = (0);
var i__13333 = (0);
while(true){
if((i__13333 < count__13332)){
var vec__13340 = cljs.core._nth.call(null,chunk__13331,i__13333);
var effect_key = cljs.core.nth.call(null,vec__13340,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13340,(1),null);
var temp__5718__auto___13362 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13362)){
var effect_fn_13363 = temp__5718__auto___13362;
effect_fn_13363.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13364 = seq__13330;
var G__13365 = chunk__13331;
var G__13366 = count__13332;
var G__13367 = (i__13333 + (1));
seq__13330 = G__13364;
chunk__13331 = G__13365;
count__13332 = G__13366;
i__13333 = G__13367;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13330);
if(temp__5720__auto__){
var seq__13330__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13330__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13330__$1);
var G__13368 = cljs.core.chunk_rest.call(null,seq__13330__$1);
var G__13369 = c__4550__auto__;
var G__13370 = cljs.core.count.call(null,c__4550__auto__);
var G__13371 = (0);
seq__13330 = G__13368;
chunk__13331 = G__13369;
count__13332 = G__13370;
i__13333 = G__13371;
continue;
} else {
var vec__13343 = cljs.core.first.call(null,seq__13330__$1);
var effect_key = cljs.core.nth.call(null,vec__13343,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13343,(1),null);
var temp__5718__auto___13372 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13372)){
var effect_fn_13373 = temp__5718__auto___13372;
effect_fn_13373.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13374 = cljs.core.next.call(null,seq__13330__$1);
var G__13375 = null;
var G__13376 = (0);
var G__13377 = (0);
seq__13330 = G__13374;
chunk__13331 = G__13375;
count__13332 = G__13376;
i__13333 = G__13377;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__12450__auto___13378 = re_frame.interop.now.call(null);
var duration__12451__auto___13379 = (end__12450__auto___13378 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12451__auto___13379,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__12450__auto___13378);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13328;
}} else {
var seq__13346 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__13347 = null;
var count__13348 = (0);
var i__13349 = (0);
while(true){
if((i__13349 < count__13348)){
var vec__13356 = cljs.core._nth.call(null,chunk__13347,i__13349);
var effect_key = cljs.core.nth.call(null,vec__13356,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13356,(1),null);
var temp__5718__auto___13380 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13380)){
var effect_fn_13381 = temp__5718__auto___13380;
effect_fn_13381.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13382 = seq__13346;
var G__13383 = chunk__13347;
var G__13384 = count__13348;
var G__13385 = (i__13349 + (1));
seq__13346 = G__13382;
chunk__13347 = G__13383;
count__13348 = G__13384;
i__13349 = G__13385;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13346);
if(temp__5720__auto__){
var seq__13346__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13346__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13346__$1);
var G__13386 = cljs.core.chunk_rest.call(null,seq__13346__$1);
var G__13387 = c__4550__auto__;
var G__13388 = cljs.core.count.call(null,c__4550__auto__);
var G__13389 = (0);
seq__13346 = G__13386;
chunk__13347 = G__13387;
count__13348 = G__13388;
i__13349 = G__13389;
continue;
} else {
var vec__13359 = cljs.core.first.call(null,seq__13346__$1);
var effect_key = cljs.core.nth.call(null,vec__13359,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13359,(1),null);
var temp__5718__auto___13390 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13390)){
var effect_fn_13391 = temp__5718__auto___13390;
effect_fn_13391.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13392 = cljs.core.next.call(null,seq__13346__$1);
var G__13393 = null;
var G__13394 = (0);
var G__13395 = (0);
seq__13346 = G__13392;
chunk__13347 = G__13393;
count__13348 = G__13394;
i__13349 = G__13395;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__13396 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__13397 = null;
var count__13398 = (0);
var i__13399 = (0);
while(true){
if((i__13399 < count__13398)){
var map__13404 = cljs.core._nth.call(null,chunk__13397,i__13399);
var map__13404__$1 = (((((!((map__13404 == null))))?(((((map__13404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13404):map__13404);
var effect = map__13404__$1;
var ms = cljs.core.get.call(null,map__13404__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__13404__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__13396,chunk__13397,count__13398,i__13399,map__13404,map__13404__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__13396,chunk__13397,count__13398,i__13399,map__13404,map__13404__$1,effect,ms,dispatch))
,ms);
}


var G__13408 = seq__13396;
var G__13409 = chunk__13397;
var G__13410 = count__13398;
var G__13411 = (i__13399 + (1));
seq__13396 = G__13408;
chunk__13397 = G__13409;
count__13398 = G__13410;
i__13399 = G__13411;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13396);
if(temp__5720__auto__){
var seq__13396__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13396__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13396__$1);
var G__13412 = cljs.core.chunk_rest.call(null,seq__13396__$1);
var G__13413 = c__4550__auto__;
var G__13414 = cljs.core.count.call(null,c__4550__auto__);
var G__13415 = (0);
seq__13396 = G__13412;
chunk__13397 = G__13413;
count__13398 = G__13414;
i__13399 = G__13415;
continue;
} else {
var map__13406 = cljs.core.first.call(null,seq__13396__$1);
var map__13406__$1 = (((((!((map__13406 == null))))?(((((map__13406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13406):map__13406);
var effect = map__13406__$1;
var ms = cljs.core.get.call(null,map__13406__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__13406__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__13396,chunk__13397,count__13398,i__13399,map__13406,map__13406__$1,effect,ms,dispatch,seq__13396__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__13396,chunk__13397,count__13398,i__13399,map__13406,map__13406__$1,effect,ms,dispatch,seq__13396__$1,temp__5720__auto__))
,ms);
}


var G__13416 = cljs.core.next.call(null,seq__13396__$1);
var G__13417 = null;
var G__13418 = (0);
var G__13419 = (0);
seq__13396 = G__13416;
chunk__13397 = G__13417;
count__13398 = G__13418;
i__13399 = G__13419;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__13420 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__13421 = null;
var count__13422 = (0);
var i__13423 = (0);
while(true){
if((i__13423 < count__13422)){
var event = cljs.core._nth.call(null,chunk__13421,i__13423);
re_frame.router.dispatch.call(null,event);


var G__13424 = seq__13420;
var G__13425 = chunk__13421;
var G__13426 = count__13422;
var G__13427 = (i__13423 + (1));
seq__13420 = G__13424;
chunk__13421 = G__13425;
count__13422 = G__13426;
i__13423 = G__13427;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13420);
if(temp__5720__auto__){
var seq__13420__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13420__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13420__$1);
var G__13428 = cljs.core.chunk_rest.call(null,seq__13420__$1);
var G__13429 = c__4550__auto__;
var G__13430 = cljs.core.count.call(null,c__4550__auto__);
var G__13431 = (0);
seq__13420 = G__13428;
chunk__13421 = G__13429;
count__13422 = G__13430;
i__13423 = G__13431;
continue;
} else {
var event = cljs.core.first.call(null,seq__13420__$1);
re_frame.router.dispatch.call(null,event);


var G__13432 = cljs.core.next.call(null,seq__13420__$1);
var G__13433 = null;
var G__13434 = (0);
var G__13435 = (0);
seq__13420 = G__13432;
chunk__13421 = G__13433;
count__13422 = G__13434;
i__13423 = G__13435;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__13436 = cljs.core.seq.call(null,value);
var chunk__13437 = null;
var count__13438 = (0);
var i__13439 = (0);
while(true){
if((i__13439 < count__13438)){
var event = cljs.core._nth.call(null,chunk__13437,i__13439);
clear_event.call(null,event);


var G__13440 = seq__13436;
var G__13441 = chunk__13437;
var G__13442 = count__13438;
var G__13443 = (i__13439 + (1));
seq__13436 = G__13440;
chunk__13437 = G__13441;
count__13438 = G__13442;
i__13439 = G__13443;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13436);
if(temp__5720__auto__){
var seq__13436__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13436__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13436__$1);
var G__13444 = cljs.core.chunk_rest.call(null,seq__13436__$1);
var G__13445 = c__4550__auto__;
var G__13446 = cljs.core.count.call(null,c__4550__auto__);
var G__13447 = (0);
seq__13436 = G__13444;
chunk__13437 = G__13445;
count__13438 = G__13446;
i__13439 = G__13447;
continue;
} else {
var event = cljs.core.first.call(null,seq__13436__$1);
clear_event.call(null,event);


var G__13448 = cljs.core.next.call(null,seq__13436__$1);
var G__13449 = null;
var G__13450 = (0);
var G__13451 = (0);
seq__13436 = G__13448;
chunk__13437 = G__13449;
count__13438 = G__13450;
i__13439 = G__13451;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
