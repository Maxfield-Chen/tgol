// Compiled by ClojureScript 1.10.520 {:target :nashorn}
goog.provide('tgol.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('tgol.db');
goog.require('day8.re_frame.tracing');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("tgol.events","initialize-db","tgol.events/initialize-db",-1341835115),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null));

var opts__22111__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__22112__auto__ = tgol.db.default_db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__22112__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__22112__auto__;
}catch (e25127){var e = e25127;
throw e;
}}):(function (_,___$1){
return tgol.db.default_db;
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("tgol.events","set-active-panel","tgol.events/set-active-panel",-1196612701),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,p__25128){
var vec__25129 = p__25128;
var _ = cljs.core.nth.call(null,vec__25129,(0),null);
var active_panel = cljs.core.nth.call(null,vec__25129,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)));

var opts__22111__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__22112__auto__ = cljs.core.assoc.call(null,(function (){var opts__22111__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__22112__auto__ = db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__22112__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__22112__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var opts__22111__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__22112__auto__ = active_panel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__22112__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__22112__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__22112__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__22112__auto__;
}catch (e25132){var e = e25132;
throw e;
}}):(function (db,p__25133){
var vec__25134 = p__25133;
var _ = cljs.core.nth.call(null,vec__25134,(0),null);
var active_panel = cljs.core.nth.call(null,vec__25134,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
})));
