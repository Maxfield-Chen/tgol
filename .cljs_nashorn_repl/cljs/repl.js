// Compiled by ClojureScript 1.10.520 {:target :nashorn}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11459){
var map__11460 = p__11459;
var map__11460__$1 = (((((!((map__11460 == null))))?(((((map__11460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11460):map__11460);
var m = map__11460__$1;
var n = cljs.core.get.call(null,map__11460__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11460__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11462_11494 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11463_11495 = null;
var count__11464_11496 = (0);
var i__11465_11497 = (0);
while(true){
if((i__11465_11497 < count__11464_11496)){
var f_11498 = cljs.core._nth.call(null,chunk__11463_11495,i__11465_11497);
cljs.core.println.call(null,"  ",f_11498);


var G__11499 = seq__11462_11494;
var G__11500 = chunk__11463_11495;
var G__11501 = count__11464_11496;
var G__11502 = (i__11465_11497 + (1));
seq__11462_11494 = G__11499;
chunk__11463_11495 = G__11500;
count__11464_11496 = G__11501;
i__11465_11497 = G__11502;
continue;
} else {
var temp__5720__auto___11503 = cljs.core.seq.call(null,seq__11462_11494);
if(temp__5720__auto___11503){
var seq__11462_11504__$1 = temp__5720__auto___11503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11462_11504__$1)){
var c__4550__auto___11505 = cljs.core.chunk_first.call(null,seq__11462_11504__$1);
var G__11506 = cljs.core.chunk_rest.call(null,seq__11462_11504__$1);
var G__11507 = c__4550__auto___11505;
var G__11508 = cljs.core.count.call(null,c__4550__auto___11505);
var G__11509 = (0);
seq__11462_11494 = G__11506;
chunk__11463_11495 = G__11507;
count__11464_11496 = G__11508;
i__11465_11497 = G__11509;
continue;
} else {
var f_11510 = cljs.core.first.call(null,seq__11462_11504__$1);
cljs.core.println.call(null,"  ",f_11510);


var G__11511 = cljs.core.next.call(null,seq__11462_11504__$1);
var G__11512 = null;
var G__11513 = (0);
var G__11514 = (0);
seq__11462_11494 = G__11511;
chunk__11463_11495 = G__11512;
count__11464_11496 = G__11513;
i__11465_11497 = G__11514;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11515 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11515);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11515)))?cljs.core.second.call(null,arglists_11515):arglists_11515));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11466_11516 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11467_11517 = null;
var count__11468_11518 = (0);
var i__11469_11519 = (0);
while(true){
if((i__11469_11519 < count__11468_11518)){
var vec__11480_11520 = cljs.core._nth.call(null,chunk__11467_11517,i__11469_11519);
var name_11521 = cljs.core.nth.call(null,vec__11480_11520,(0),null);
var map__11483_11522 = cljs.core.nth.call(null,vec__11480_11520,(1),null);
var map__11483_11523__$1 = (((((!((map__11483_11522 == null))))?(((((map__11483_11522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11483_11522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11483_11522):map__11483_11522);
var doc_11524 = cljs.core.get.call(null,map__11483_11523__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11525 = cljs.core.get.call(null,map__11483_11523__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11521);

cljs.core.println.call(null," ",arglists_11525);

if(cljs.core.truth_(doc_11524)){
cljs.core.println.call(null," ",doc_11524);
} else {
}


var G__11526 = seq__11466_11516;
var G__11527 = chunk__11467_11517;
var G__11528 = count__11468_11518;
var G__11529 = (i__11469_11519 + (1));
seq__11466_11516 = G__11526;
chunk__11467_11517 = G__11527;
count__11468_11518 = G__11528;
i__11469_11519 = G__11529;
continue;
} else {
var temp__5720__auto___11530 = cljs.core.seq.call(null,seq__11466_11516);
if(temp__5720__auto___11530){
var seq__11466_11531__$1 = temp__5720__auto___11530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11466_11531__$1)){
var c__4550__auto___11532 = cljs.core.chunk_first.call(null,seq__11466_11531__$1);
var G__11533 = cljs.core.chunk_rest.call(null,seq__11466_11531__$1);
var G__11534 = c__4550__auto___11532;
var G__11535 = cljs.core.count.call(null,c__4550__auto___11532);
var G__11536 = (0);
seq__11466_11516 = G__11533;
chunk__11467_11517 = G__11534;
count__11468_11518 = G__11535;
i__11469_11519 = G__11536;
continue;
} else {
var vec__11485_11537 = cljs.core.first.call(null,seq__11466_11531__$1);
var name_11538 = cljs.core.nth.call(null,vec__11485_11537,(0),null);
var map__11488_11539 = cljs.core.nth.call(null,vec__11485_11537,(1),null);
var map__11488_11540__$1 = (((((!((map__11488_11539 == null))))?(((((map__11488_11539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11488_11539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11488_11539):map__11488_11539);
var doc_11541 = cljs.core.get.call(null,map__11488_11540__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11542 = cljs.core.get.call(null,map__11488_11540__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11538);

cljs.core.println.call(null," ",arglists_11542);

if(cljs.core.truth_(doc_11541)){
cljs.core.println.call(null," ",doc_11541);
} else {
}


var G__11543 = cljs.core.next.call(null,seq__11466_11531__$1);
var G__11544 = null;
var G__11545 = (0);
var G__11546 = (0);
seq__11466_11516 = G__11543;
chunk__11467_11517 = G__11544;
count__11468_11518 = G__11545;
i__11469_11519 = G__11546;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__11490 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11491 = null;
var count__11492 = (0);
var i__11493 = (0);
while(true){
if((i__11493 < count__11492)){
var role = cljs.core._nth.call(null,chunk__11491,i__11493);
var temp__5720__auto___11547__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___11547__$1)){
var spec_11548 = temp__5720__auto___11547__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11548));
} else {
}


var G__11549 = seq__11490;
var G__11550 = chunk__11491;
var G__11551 = count__11492;
var G__11552 = (i__11493 + (1));
seq__11490 = G__11549;
chunk__11491 = G__11550;
count__11492 = G__11551;
i__11493 = G__11552;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__11490);
if(temp__5720__auto____$1){
var seq__11490__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11490__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11490__$1);
var G__11553 = cljs.core.chunk_rest.call(null,seq__11490__$1);
var G__11554 = c__4550__auto__;
var G__11555 = cljs.core.count.call(null,c__4550__auto__);
var G__11556 = (0);
seq__11490 = G__11553;
chunk__11491 = G__11554;
count__11492 = G__11555;
i__11493 = G__11556;
continue;
} else {
var role = cljs.core.first.call(null,seq__11490__$1);
var temp__5720__auto___11557__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___11557__$2)){
var spec_11558 = temp__5720__auto___11557__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11558));
} else {
}


var G__11559 = cljs.core.next.call(null,seq__11490__$1);
var G__11560 = null;
var G__11561 = (0);
var G__11562 = (0);
seq__11490 = G__11559;
chunk__11491 = G__11560;
count__11492 = G__11561;
i__11493 = G__11562;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__11563 = cljs.core.conj.call(null,via,t);
var G__11564 = cljs.core.ex_cause.call(null,t);
via = G__11563;
t = G__11564;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__11567 = datafied_throwable;
var map__11567__$1 = (((((!((map__11567 == null))))?(((((map__11567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11567):map__11567);
var via = cljs.core.get.call(null,map__11567__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__11567__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__11567__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__11568 = cljs.core.last.call(null,via);
var map__11568__$1 = (((((!((map__11568 == null))))?(((((map__11568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11568):map__11568);
var type = cljs.core.get.call(null,map__11568__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__11568__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__11568__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__11569 = data;
var map__11569__$1 = (((((!((map__11569 == null))))?(((((map__11569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11569):map__11569);
var problems = cljs.core.get.call(null,map__11569__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__11569__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__11569__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__11570 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__11570__$1 = (((((!((map__11570 == null))))?(((((map__11570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11570):map__11570);
var top_data = map__11570__$1;
var source = cljs.core.get.call(null,map__11570__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__11575 = phase;
var G__11575__$1 = (((G__11575 instanceof cljs.core.Keyword))?G__11575.fqn:null);
switch (G__11575__$1) {
case "read-source":
var map__11576 = data;
var map__11576__$1 = (((((!((map__11576 == null))))?(((((map__11576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11576):map__11576);
var line = cljs.core.get.call(null,map__11576__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__11576__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__11578 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__11578__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__11578,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__11578);
var G__11578__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__11578__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__11578__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__11578__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__11578__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__11579 = top_data;
var G__11579__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__11579,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__11579);
var G__11579__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__11579__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__11579__$1);
var G__11579__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__11579__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__11579__$2);
var G__11579__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__11579__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__11579__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__11579__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__11579__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__11580 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__11580,(0),null);
var method = cljs.core.nth.call(null,vec__11580,(1),null);
var file = cljs.core.nth.call(null,vec__11580,(2),null);
var line = cljs.core.nth.call(null,vec__11580,(3),null);
var G__11583 = top_data;
var G__11583__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__11583,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__11583);
var G__11583__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__11583__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__11583__$1);
var G__11583__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__11583__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__11583__$2);
var G__11583__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__11583__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__11583__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__11583__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__11583__$4;
}

break;
case "execution":
var vec__11584 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__11584,(0),null);
var method = cljs.core.nth.call(null,vec__11584,(1),null);
var file = cljs.core.nth.call(null,vec__11584,(2),null);
var line = cljs.core.nth.call(null,vec__11584,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__11584,source__$1,method,file,line,G__11575,G__11575__$1,map__11567,map__11567__$1,via,trace,phase,map__11568,map__11568__$1,type,message,data,map__11569,map__11569__$1,problems,fn,caller,map__11570,map__11570__$1,top_data,source){
return (function (p1__11566_SHARP_){
var or__4131__auto__ = (p1__11566_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__11566_SHARP_);
}
});})(vec__11584,source__$1,method,file,line,G__11575,G__11575__$1,map__11567,map__11567__$1,via,trace,phase,map__11568,map__11568__$1,type,message,data,map__11569,map__11569__$1,problems,fn,caller,map__11570,map__11570__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__11587 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__11587__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__11587,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__11587);
var G__11587__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__11587__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__11587__$1);
var G__11587__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__11587__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__11587__$2);
var G__11587__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__11587__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__11587__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__11587__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__11587__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11575__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__11591){
var map__11592 = p__11591;
var map__11592__$1 = (((((!((map__11592 == null))))?(((((map__11592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11592):map__11592);
var triage_data = map__11592__$1;
var phase = cljs.core.get.call(null,map__11592__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__11592__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__11592__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__11592__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__11592__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__11592__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__11592__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__11592__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__11594 = phase;
var G__11594__$1 = (((G__11594 instanceof cljs.core.Keyword))?G__11594.fqn:null);
switch (G__11594__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11595_11604 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11596_11605 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11597_11606 = true;
var _STAR_print_fn_STAR__temp_val__11598_11607 = ((function (_STAR_print_newline_STAR__orig_val__11595_11604,_STAR_print_fn_STAR__orig_val__11596_11605,_STAR_print_newline_STAR__temp_val__11597_11606,sb__4661__auto__,G__11594,G__11594__$1,loc,class_name,simple_class,cause_type,format,map__11592,map__11592__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__11595_11604,_STAR_print_fn_STAR__orig_val__11596_11605,_STAR_print_newline_STAR__temp_val__11597_11606,sb__4661__auto__,G__11594,G__11594__$1,loc,class_name,simple_class,cause_type,format,map__11592,map__11592__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11597_11606;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11598_11607;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__11595_11604,_STAR_print_fn_STAR__orig_val__11596_11605,_STAR_print_newline_STAR__temp_val__11597_11606,_STAR_print_fn_STAR__temp_val__11598_11607,sb__4661__auto__,G__11594,G__11594__$1,loc,class_name,simple_class,cause_type,format,map__11592,map__11592__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__11595_11604,_STAR_print_fn_STAR__orig_val__11596_11605,_STAR_print_newline_STAR__temp_val__11597_11606,_STAR_print_fn_STAR__temp_val__11598_11607,sb__4661__auto__,G__11594,G__11594__$1,loc,class_name,simple_class,cause_type,format,map__11592,map__11592__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__11589_SHARP_){
return cljs.core.dissoc.call(null,p1__11589_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__11595_11604,_STAR_print_fn_STAR__orig_val__11596_11605,_STAR_print_newline_STAR__temp_val__11597_11606,_STAR_print_fn_STAR__temp_val__11598_11607,sb__4661__auto__,G__11594,G__11594__$1,loc,class_name,simple_class,cause_type,format,map__11592,map__11592__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__11595_11604,_STAR_print_fn_STAR__orig_val__11596_11605,_STAR_print_newline_STAR__temp_val__11597_11606,_STAR_print_fn_STAR__temp_val__11598_11607,sb__4661__auto__,G__11594,G__11594__$1,loc,class_name,simple_class,cause_type,format,map__11592,map__11592__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11596_11605;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11595_11604;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11599_11608 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11600_11609 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11601_11610 = true;
var _STAR_print_fn_STAR__temp_val__11602_11611 = ((function (_STAR_print_newline_STAR__orig_val__11599_11608,_STAR_print_fn_STAR__orig_val__11600_11609,_STAR_print_newline_STAR__temp_val__11601_11610,sb__4661__auto__,G__11594,G__11594__$1,loc,class_name,simple_class,cause_type,format,map__11592,map__11592__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__11599_11608,_STAR_print_fn_STAR__orig_val__11600_11609,_STAR_print_newline_STAR__temp_val__11601_11610,sb__4661__auto__,G__11594,G__11594__$1,loc,class_name,simple_class,cause_type,format,map__11592,map__11592__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11601_11610;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11602_11611;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__11599_11608,_STAR_print_fn_STAR__orig_val__11600_11609,_STAR_print_newline_STAR__temp_val__11601_11610,_STAR_print_fn_STAR__temp_val__11602_11611,sb__4661__auto__,G__11594,G__11594__$1,loc,class_name,simple_class,cause_type,format,map__11592,map__11592__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__11599_11608,_STAR_print_fn_STAR__orig_val__11600_11609,_STAR_print_newline_STAR__temp_val__11601_11610,_STAR_print_fn_STAR__temp_val__11602_11611,sb__4661__auto__,G__11594,G__11594__$1,loc,class_name,simple_class,cause_type,format,map__11592,map__11592__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__11590_SHARP_){
return cljs.core.dissoc.call(null,p1__11590_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__11599_11608,_STAR_print_fn_STAR__orig_val__11600_11609,_STAR_print_newline_STAR__temp_val__11601_11610,_STAR_print_fn_STAR__temp_val__11602_11611,sb__4661__auto__,G__11594,G__11594__$1,loc,class_name,simple_class,cause_type,format,map__11592,map__11592__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__11599_11608,_STAR_print_fn_STAR__orig_val__11600_11609,_STAR_print_newline_STAR__temp_val__11601_11610,_STAR_print_fn_STAR__temp_val__11602_11611,sb__4661__auto__,G__11594,G__11594__$1,loc,class_name,simple_class,cause_type,format,map__11592,map__11592__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11600_11609;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11599_11608;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11594__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
