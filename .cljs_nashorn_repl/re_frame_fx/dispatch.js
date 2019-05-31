// Compiled by ClojureScript 1.10.520 {:target :nashorn}
goog.provide('re_frame_fx.dispatch');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame_fx.dispatch.deferred_actions = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
re_frame_fx.dispatch.dispatch_debounce = (function re_frame_fx$dispatch$dispatch_debounce(dispatch_map_or_seq){
var cancel_timeout = (function (id){
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5720__auto__)){
var deferred = temp__5720__auto__;
clearTimeout(new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(deferred));

return cljs.core.swap_BANG_.call(null,re_frame_fx.dispatch.deferred_actions,cljs.core.dissoc,id);
} else {
return null;
}
});
var run_action = ((function (cancel_timeout){
return (function (action,event){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),action)){
return re_frame.core.dispatch.call(null,event);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),action)){
var seq__13675 = cljs.core.seq.call(null,event);
var chunk__13676 = null;
var count__13677 = (0);
var i__13678 = (0);
while(true){
if((i__13678 < count__13677)){
var e = cljs.core._nth.call(null,chunk__13676,i__13678);
re_frame.core.dispatch.call(null,e);


var G__13701 = seq__13675;
var G__13702 = chunk__13676;
var G__13703 = count__13677;
var G__13704 = (i__13678 + (1));
seq__13675 = G__13701;
chunk__13676 = G__13702;
count__13677 = G__13703;
i__13678 = G__13704;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13675);
if(temp__5720__auto__){
var seq__13675__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13675__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13675__$1);
var G__13705 = cljs.core.chunk_rest.call(null,seq__13675__$1);
var G__13706 = c__4550__auto__;
var G__13707 = cljs.core.count.call(null,c__4550__auto__);
var G__13708 = (0);
seq__13675 = G__13705;
chunk__13676 = G__13706;
count__13677 = G__13707;
i__13678 = G__13708;
continue;
} else {
var e = cljs.core.first.call(null,seq__13675__$1);
re_frame.core.dispatch.call(null,e);


var G__13709 = cljs.core.next.call(null,seq__13675__$1);
var G__13710 = null;
var G__13711 = (0);
var G__13712 = (0);
seq__13675 = G__13709;
chunk__13676 = G__13710;
count__13677 = G__13711;
i__13678 = G__13712;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});})(cancel_timeout))
;
var seq__13679 = cljs.core.seq.call(null,(function (){var G__13692 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_.call(null,dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__13692],null));
} else {
return G__13692;
}
})());
var chunk__13680 = null;
var count__13681 = (0);
var i__13682 = (0);
while(true){
if((i__13682 < count__13681)){
var map__13693 = cljs.core._nth.call(null,chunk__13680,i__13682);
var map__13693__$1 = (((((!((map__13693 == null))))?(((((map__13693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13693):map__13693);
var id = cljs.core.get.call(null,map__13693__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__13693__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.call(null,map__13693__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.call(null,map__13693__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null).call(null,action))){
cancel_timeout.call(null,id);

cljs.core.swap_BANG_.call(null,re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__13679,chunk__13680,count__13681,i__13682,map__13693,map__13693__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout.call(null,id);

return run_action.call(null,action,event);
});})(seq__13679,chunk__13680,count__13681,i__13682,map__13693,map__13693__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout.call(null,id);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5720__auto___13713 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5720__auto___13713)){
var map__13695_13714 = temp__5720__auto___13713;
var map__13695_13715__$1 = (((((!((map__13695_13714 == null))))?(((((map__13695_13714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13695_13714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13695_13714):map__13695_13714);
var action_13716__$1 = cljs.core.get.call(null,map__13695_13715__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_13717__$1 = cljs.core.get.call(null,map__13695_13715__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout.call(null,id);

run_action.call(null,action_13716__$1,event_13717__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__13718 = seq__13679;
var G__13719 = chunk__13680;
var G__13720 = count__13681;
var G__13721 = (i__13682 + (1));
seq__13679 = G__13718;
chunk__13680 = G__13719;
count__13681 = G__13720;
i__13682 = G__13721;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13679);
if(temp__5720__auto__){
var seq__13679__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13679__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13679__$1);
var G__13722 = cljs.core.chunk_rest.call(null,seq__13679__$1);
var G__13723 = c__4550__auto__;
var G__13724 = cljs.core.count.call(null,c__4550__auto__);
var G__13725 = (0);
seq__13679 = G__13722;
chunk__13680 = G__13723;
count__13681 = G__13724;
i__13682 = G__13725;
continue;
} else {
var map__13697 = cljs.core.first.call(null,seq__13679__$1);
var map__13697__$1 = (((((!((map__13697 == null))))?(((((map__13697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13697):map__13697);
var id = cljs.core.get.call(null,map__13697__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__13697__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.call(null,map__13697__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.call(null,map__13697__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null).call(null,action))){
cancel_timeout.call(null,id);

cljs.core.swap_BANG_.call(null,re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__13679,chunk__13680,count__13681,i__13682,map__13697,map__13697__$1,id,timeout,action,event,seq__13679__$1,temp__5720__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout.call(null,id);

return run_action.call(null,action,event);
});})(seq__13679,chunk__13680,count__13681,i__13682,map__13697,map__13697__$1,id,timeout,action,event,seq__13679__$1,temp__5720__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout.call(null,id);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5720__auto___13726__$1 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5720__auto___13726__$1)){
var map__13699_13727 = temp__5720__auto___13726__$1;
var map__13699_13728__$1 = (((((!((map__13699_13727 == null))))?(((((map__13699_13727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13699_13727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13699_13727):map__13699_13727);
var action_13729__$1 = cljs.core.get.call(null,map__13699_13728__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_13730__$1 = cljs.core.get.call(null,map__13699_13728__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout.call(null,id);

run_action.call(null,action_13729__$1,event_13730__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__13731 = cljs.core.next.call(null,seq__13679__$1);
var G__13732 = null;
var G__13733 = (0);
var G__13734 = (0);
seq__13679 = G__13731;
chunk__13680 = G__13732;
count__13681 = G__13733;
i__13682 = G__13734;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020),re_frame_fx.dispatch.dispatch_debounce);

//# sourceMappingURL=dispatch.js.map
