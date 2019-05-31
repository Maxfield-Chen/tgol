// Compiled by ClojureScript 1.10.520 {:target :nashorn}
goog.provide('rewrite_clj.parser.string');
goog.require('cljs.core');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.reader');
goog.require('goog.string');
/**
 * Flush buffer and add string to the given vector.
 */
rewrite_clj.parser.string.flush_into = (function rewrite_clj$parser$string$flush_into(lines,buf){
var s = buf.toString();
buf.set("");

return cljs.core.conj.call(null,lines,s);
});
rewrite_clj.parser.string.read_string_data = (function rewrite_clj$parser$string$read_string_data(reader){
rewrite_clj.reader.ignore.call(null,reader);

var buf = (new goog.string.StringBuffer());
var escape_QMARK_ = false;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = rewrite_clj.reader.read_char.call(null,reader);
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
if((((!(escape_QMARK_))) && ((c === "\"")))){
return rewrite_clj.parser.string.flush_into.call(null,lines,buf);
} else {
if((c === "\n")){
var G__17923 = escape_QMARK_;
var G__17924 = rewrite_clj.parser.string.flush_into.call(null,lines,buf);
escape_QMARK_ = G__17923;
lines = G__17924;
continue;
} else {
buf.append(c);

var G__17925 = (((!(escape_QMARK_))) && ((c === "\\")));
var G__17926 = lines;
escape_QMARK_ = G__17925;
lines = G__17926;
continue;

}
}
} else {
return rewrite_clj.reader.throw_reader.call(null,reader,"Unexpected EOF while reading string.");
}
break;
}
});
rewrite_clj.parser.string.parse_string = (function rewrite_clj$parser$string$parse_string(reader){
return rewrite_clj.node.string_node.call(null,rewrite_clj.parser.string.read_string_data.call(null,reader));
});
rewrite_clj.parser.string.parse_regex = (function rewrite_clj$parser$string$parse_regex(reader){
var vec__17927 = rewrite_clj.parser.string.read_string_data.call(null,reader);
var seq__17928 = cljs.core.seq.call(null,vec__17927);
var first__17929 = cljs.core.first.call(null,seq__17928);
var seq__17928__$1 = cljs.core.next.call(null,seq__17928);
var h = first__17929;
var _ = seq__17928__$1;
return rewrite_clj.node.token_node.call(null,cljs.core.re_pattern.call(null,h),["#\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"\""].join(''));
});

//# sourceMappingURL=string.js.map
