// Compiled by ClojureScript 1.10.520 {:target :nashorn}
goog.provide('breaking_point.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame_fx.dispatch');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),(function (_,p__13737){
var vec__13738 = p__13737;
var ___$1 = cljs.core.nth.call(null,vec__13738,(0),null);
var map__13741 = cljs.core.nth.call(null,vec__13738,(1),null);
var map__13741__$1 = (((((!((map__13741 == null))))?(((((map__13741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13741):map__13741);
var opts = map__13741__$1;
var breakpoints = cljs.core.get.call(null,map__13741__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.call(null,map__13741__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),opts], null);
}));
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814),(function (coeffect){
var screen_width = (function (){var or__4131__auto__ = (function (){var G__13744 = window;
if((G__13744 == null)){
return null;
} else {
return G__13744.innerWidth;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var G__13746 = document;
var G__13746__$1 = (((G__13746 == null))?null:G__13746.documentElement);
if((G__13746__$1 == null)){
return null;
} else {
return G__13746__$1.clientWidth;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var G__13747 = document;
var G__13747__$1 = (((G__13747 == null))?null:G__13747.body);
if((G__13747__$1 == null)){
return null;
} else {
return G__13747__$1.clientWidth;
}
}
}
})();
var screen_height = (function (){var or__4131__auto__ = (function (){var G__13749 = window;
if((G__13749 == null)){
return null;
} else {
return G__13749.innerHeight;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var G__13751 = document;
var G__13751__$1 = (((G__13751 == null))?null:G__13751.documentElement);
if((G__13751__$1 == null)){
return null;
} else {
return G__13751__$1.clientHeight;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var G__13752 = document;
var G__13752__$1 = (((G__13752 == null))?null:G__13752.body);
if((G__13752__$1 == null)){
return null;
} else {
return G__13752__$1.clientHeight;
}
}
}
})();
return cljs.core.assoc.call(null,coeffect,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263),screen_width,new cljs.core.Keyword(null,"screen-height","screen-height",141363033),screen_height);
}));
breaking_point.core.set_screen_dimensions = (function breaking_point$core$set_screen_dimensions(p__13753,_){
var map__13754 = p__13753;
var map__13754__$1 = (((((!((map__13754 == null))))?(((((map__13754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13754):map__13754);
var db = cljs.core.get.call(null,map__13754__$1,new cljs.core.Keyword(null,"db","db",993250759));
var screen_width = cljs.core.get.call(null,map__13754__$1,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263));
var screen_height = cljs.core.get.call(null,map__13754__$1,new cljs.core.Keyword(null,"screen-height","screen-height",141363033));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null),screen_width),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null),screen_height)], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814))], null),breaking_point.core.set_screen_dimensions);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),(function (_,p__13756){
var vec__13757 = p__13756;
var ___$1 = cljs.core.nth.call(null,vec__13757,(0),null);
var debounce_ms = cljs.core.nth.call(null,vec__13757,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("breaking-point.core","calcaulate-width-after-resize","breaking-point.core/calcaulate-width-after-resize",1288445004),new cljs.core.Keyword(null,"timeout","timeout",-318625318),debounce_ms,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null)], null)], null)], null);
}));
breaking_point.core.get_screen_width = (function breaking_point$core$get_screen_width(db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null));
});
breaking_point.core.get_screen_height = (function breaking_point$core$get_screen_height(db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null));
});
breaking_point.core.__GT_get_screen = (function breaking_point$core$__GT_get_screen(breakpoints){
return (function breaking_point$core$__GT_get_screen_$_get_screen(screen_width,_){
if(cljs.core.truth_(screen_width)){
return cljs.core.reduce.call(null,(function (prev_breakpoint,p__13760){
var vec__13761 = p__13760;
var screen_key = cljs.core.nth.call(null,vec__13761,(0),null);
var breakpoint = cljs.core.nth.call(null,vec__13761,(1),null);
if((((breakpoint == null)) || ((((screen_width < breakpoint)) && ((screen_width >= prev_breakpoint)))))){
return cljs.core.reduced.call(null,screen_key);
} else {
return breakpoint;
}
}),(0),cljs.core.partition_all.call(null,(2),breakpoints));
} else {
return null;
}
});
});
breaking_point.core.get_orientation = (function breaking_point$core$get_orientation(p__13764,_){
var vec__13765 = p__13764;
var screen_width = cljs.core.nth.call(null,vec__13765,(0),null);
var screen_height = cljs.core.nth.call(null,vec__13765,(1),null);
if((screen_height > screen_width)){
return new cljs.core.Keyword(null,"portrait","portrait",-9810007);
} else {
return new cljs.core.Keyword(null,"landscape","landscape",1519839253);
}
});
breaking_point.core.register_subs = (function breaking_point$core$register_subs(breakpoints){
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360),breaking_point.core.get_screen_width);

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666),breaking_point.core.get_screen_height);

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null),breaking_point.core.__GT_get_screen.call(null,breakpoints));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666)], null),breaking_point.core.get_orientation);

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","portrait?","breaking-point.core/portrait?",-1731575960),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null),(function (orientation,_){
return cljs.core._EQ_.call(null,orientation,new cljs.core.Keyword(null,"portrait","portrait",-9810007));
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","landscape?","breaking-point.core/landscape?",1510790059),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null),(function (orientation,_){
return cljs.core._EQ_.call(null,orientation,new cljs.core.Keyword(null,"landscape","landscape",1519839253));
}));

var screen_keys = (function (){var G__13768 = breakpoints;
var G__13768__$1 = (((G__13768 == null))?null:cljs.core.map_indexed.call(null,cljs.core.vector,G__13768));
var G__13768__$2 = (((G__13768__$1 == null))?null:cljs.core.filter.call(null,((function (G__13768,G__13768__$1){
return (function (p__13769){
var vec__13770 = p__13769;
var i = cljs.core.nth.call(null,vec__13770,(0),null);
var k = cljs.core.nth.call(null,vec__13770,(1),null);
return cljs.core.even_QMARK_.call(null,i);
});})(G__13768,G__13768__$1))
,G__13768__$1));
if((G__13768__$2 == null)){
return null;
} else {
return cljs.core.mapv.call(null,cljs.core.second,G__13768__$2);
}
})();
var seq__13773 = cljs.core.seq.call(null,screen_keys);
var chunk__13774 = null;
var count__13775 = (0);
var i__13776 = (0);
while(true){
if((i__13776 < count__13775)){
var screen_key = cljs.core._nth.call(null,chunk__13774,i__13776);
re_frame.core.reg_sub.call(null,cljs.core.keyword.call(null,"breaking-point.core",[cljs.core.name.call(null,screen_key),"?"].join('')),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null),((function (seq__13773,chunk__13774,count__13775,i__13776,screen_key,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.call(null,screen,screen_key);
});})(seq__13773,chunk__13774,count__13775,i__13776,screen_key,screen_keys))
);


var G__13777 = seq__13773;
var G__13778 = chunk__13774;
var G__13779 = count__13775;
var G__13780 = (i__13776 + (1));
seq__13773 = G__13777;
chunk__13774 = G__13778;
count__13775 = G__13779;
i__13776 = G__13780;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13773);
if(temp__5720__auto__){
var seq__13773__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13773__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13773__$1);
var G__13781 = cljs.core.chunk_rest.call(null,seq__13773__$1);
var G__13782 = c__4550__auto__;
var G__13783 = cljs.core.count.call(null,c__4550__auto__);
var G__13784 = (0);
seq__13773 = G__13781;
chunk__13774 = G__13782;
count__13775 = G__13783;
i__13776 = G__13784;
continue;
} else {
var screen_key = cljs.core.first.call(null,seq__13773__$1);
re_frame.core.reg_sub.call(null,cljs.core.keyword.call(null,"breaking-point.core",[cljs.core.name.call(null,screen_key),"?"].join('')),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null),((function (seq__13773,chunk__13774,count__13775,i__13776,screen_key,seq__13773__$1,temp__5720__auto__,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.call(null,screen,screen_key);
});})(seq__13773,chunk__13774,count__13775,i__13776,screen_key,seq__13773__$1,temp__5720__auto__,screen_keys))
);


var G__13785 = cljs.core.next.call(null,seq__13773__$1);
var G__13786 = null;
var G__13787 = (0);
var G__13788 = (0);
seq__13773 = G__13785;
chunk__13774 = G__13786;
count__13775 = G__13787;
i__13776 = G__13788;
continue;
}
} else {
return null;
}
}
break;
}
});
breaking_point.core.set_breakpoints = (function breaking_point$core$set_breakpoints(p__13789){
var map__13790 = p__13789;
var map__13790__$1 = (((((!((map__13790 == null))))?(((((map__13790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13790):map__13790);
var opts = map__13790__$1;
var breakpoints = cljs.core.get.call(null,map__13790__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.call(null,map__13790__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
breaking_point.core.register_subs.call(null,breakpoints);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null));

return window.addEventListener("resize",((function (map__13790,map__13790__$1,opts,breakpoints,debounce_ms){
return (function (){
if(cljs.core.truth_(debounce_ms)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),debounce_ms], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null));
}
});})(map__13790,map__13790__$1,opts,breakpoints,debounce_ms))
,true);
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),breaking_point.core.set_breakpoints);

//# sourceMappingURL=core.js.map
