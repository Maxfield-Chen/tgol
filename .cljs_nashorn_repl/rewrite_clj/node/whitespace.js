// Compiled by ClojureScript 1.10.520 {:target :nashorn}
goog.provide('rewrite_clj.node.whitespace');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
/**
 * This function is applied to every newline string.
 */
rewrite_clj.node.whitespace._STAR_newline_fn_STAR_ = cljs.core.identity;
/**
 * This function is applied to every newline string and should produce
 * the eventual character count.
 */
rewrite_clj.node.whitespace._STAR_count_fn_STAR_ = cljs.core.count;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rewrite_clj.node.whitespace.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.whitespace.WhitespaceNode = (function (whitespace,__meta,__extmap,__hash){
this.whitespace = whitespace;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k17594,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__17598 = k17594;
var G__17598__$1 = (((G__17598 instanceof cljs.core.Keyword))?G__17598.fqn:null);
switch (G__17598__$1) {
case "whitespace":
return self__.whitespace;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17594,else__4388__auto__);

}
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__17599){
var vec__17600 = p__17599;
var k__4408__auto__ = cljs.core.nth.call(null,vec__17600,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__17600,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#rewrite-clj.node.whitespace.WhitespaceNode{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),self__.whitespace],null))], null),self__.__extmap));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17593){
var self__ = this;
var G__17593__$1 = this;
return (new cljs.core.RecordIter((0),G__17593__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1595850179 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17595,other17596){
var self__ = this;
var this17595__$1 = this;
return (((!((other17596 == null)))) && ((this17595__$1.constructor === other17596.constructor)) && (cljs.core._EQ_.call(null,this17595__$1.whitespace,other17596.whitespace)) && (cljs.core._EQ_.call(null,this17595__$1.__extmap,other17596.__extmap)));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw (new Error("Unsupported operation"));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count.call(null,self__.whitespace);
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.whitespace;
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__17593){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__17603 = cljs.core.keyword_identical_QMARK_;
var expr__17604 = k__4393__auto__;
if(cljs.core.truth_(pred__17603.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),expr__17604))){
return (new rewrite_clj.node.whitespace.WhitespaceNode(G__17593,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__17593),null));
}
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),self__.whitespace,null))], null),self__.__extmap));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__17593){
var self__ = this;
var this__4384__auto____$1 = this;
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,G__17593,self__.__extmap,self__.__hash));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

rewrite_clj.node.whitespace.WhitespaceNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"whitespace","whitespace",300496044,null)], null);
});

rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$type = true;

rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.whitespace/WhitespaceNode",null,(1),null));
});

rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"rewrite-clj.node.whitespace/WhitespaceNode");
});

/**
 * Positional factory function for rewrite-clj.node.whitespace/WhitespaceNode.
 */
rewrite_clj.node.whitespace.__GT_WhitespaceNode = (function rewrite_clj$node$whitespace$__GT_WhitespaceNode(whitespace){
return (new rewrite_clj.node.whitespace.WhitespaceNode(whitespace,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.whitespace/WhitespaceNode, taking a map of keywords to field values.
 */
rewrite_clj.node.whitespace.map__GT_WhitespaceNode = (function rewrite_clj$node$whitespace$map__GT_WhitespaceNode(G__17597){
var extmap__4424__auto__ = (function (){var G__17606 = cljs.core.dissoc.call(null,G__17597,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483));
if(cljs.core.record_QMARK_.call(null,G__17597)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__17606);
} else {
return G__17606;
}
})();
return (new rewrite_clj.node.whitespace.WhitespaceNode(new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483).cljs$core$IFn$_invoke$arity$1(G__17597),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rewrite_clj.node.whitespace.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.whitespace.NewlineNode = (function (newlines,__meta,__extmap,__hash){
this.newlines = newlines;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.whitespace.NewlineNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k17609,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__17613 = k17609;
var G__17613__$1 = (((G__17613 instanceof cljs.core.Keyword))?G__17613.fqn:null);
switch (G__17613__$1) {
case "newlines":
return self__.newlines;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17609,else__4388__auto__);

}
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__17614){
var vec__17615 = p__17614;
var k__4408__auto__ = cljs.core.nth.call(null,vec__17615,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__17615,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#rewrite-clj.node.whitespace.NewlineNode{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"newlines","newlines",-1185451518),self__.newlines],null))], null),self__.__extmap));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17608){
var self__ = this;
var G__17608__$1 = this;
return (new cljs.core.RecordIter((0),G__17608__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newlines","newlines",-1185451518)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (979711303 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17610,other17611){
var self__ = this;
var this17610__$1 = this;
return (((!((other17611 == null)))) && ((this17610__$1.constructor === other17611.constructor)) && (cljs.core._EQ_.call(null,this17610__$1.newlines,other17611.newlines)) && (cljs.core._EQ_.call(null,this17610__$1.__extmap,other17611.__extmap)));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"newline","newline",1790071323);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw (new Error("Unsupported operation"));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.whitespace._STAR_count_fn_STAR_.call(null,self__.newlines);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.whitespace._STAR_newline_fn_STAR_.call(null,self__.newlines);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"newlines","newlines",-1185451518),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__17608){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__17618 = cljs.core.keyword_identical_QMARK_;
var expr__17619 = k__4393__auto__;
if(cljs.core.truth_(pred__17618.call(null,new cljs.core.Keyword(null,"newlines","newlines",-1185451518),expr__17619))){
return (new rewrite_clj.node.whitespace.NewlineNode(G__17608,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__17608),null));
}
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"newlines","newlines",-1185451518),self__.newlines,null))], null),self__.__extmap));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__17608){
var self__ = this;
var this__4384__auto____$1 = this;
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,G__17608,self__.__extmap,self__.__hash));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

rewrite_clj.node.whitespace.NewlineNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newlines","newlines",455080009,null)], null);
});

rewrite_clj.node.whitespace.NewlineNode.cljs$lang$type = true;

rewrite_clj.node.whitespace.NewlineNode.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.whitespace/NewlineNode",null,(1),null));
});

rewrite_clj.node.whitespace.NewlineNode.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"rewrite-clj.node.whitespace/NewlineNode");
});

/**
 * Positional factory function for rewrite-clj.node.whitespace/NewlineNode.
 */
rewrite_clj.node.whitespace.__GT_NewlineNode = (function rewrite_clj$node$whitespace$__GT_NewlineNode(newlines){
return (new rewrite_clj.node.whitespace.NewlineNode(newlines,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.whitespace/NewlineNode, taking a map of keywords to field values.
 */
rewrite_clj.node.whitespace.map__GT_NewlineNode = (function rewrite_clj$node$whitespace$map__GT_NewlineNode(G__17612){
var extmap__4424__auto__ = (function (){var G__17621 = cljs.core.dissoc.call(null,G__17612,new cljs.core.Keyword(null,"newlines","newlines",-1185451518));
if(cljs.core.record_QMARK_.call(null,G__17612)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__17621);
} else {
return G__17621;
}
})();
return (new rewrite_clj.node.whitespace.NewlineNode(new cljs.core.Keyword(null,"newlines","newlines",-1185451518).cljs$core$IFn$_invoke$arity$1(G__17612),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

/**
 * Create whitespace node.
 */
rewrite_clj.node.whitespace.whitespace_node = (function rewrite_clj$node$whitespace$whitespace_node(s){
return rewrite_clj.node.whitespace.__GT_WhitespaceNode.call(null,s);
});
/**
 * Create newline node.
 */
rewrite_clj.node.whitespace.newline_node = (function rewrite_clj$node$whitespace$newline_node(s){
return rewrite_clj.node.whitespace.__GT_NewlineNode.call(null,s);
});
/**
 * Check whether a character represents a linebreak.
 */
rewrite_clj.node.whitespace.newline_QMARK_ = (function rewrite_clj$node$whitespace$newline_QMARK_(c){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\n",null,"\r",null], null), null),c);
});
/**
 * Convert a string of whitespace to whitespace/newline nodes.
 */
rewrite_clj.node.whitespace.whitespace_nodes = (function rewrite_clj$node$whitespace$whitespace_nodes(s){
return cljs.core.map.call(null,(function (char_seq){
var s__$1 = cljs.core.apply.call(null,cljs.core.str,char_seq);
if(rewrite_clj.node.whitespace.newline_QMARK_.call(null,cljs.core.first.call(null,char_seq))){
return rewrite_clj.node.whitespace.newline_node.call(null,s__$1);
} else {
return rewrite_clj.node.whitespace.whitespace_node.call(null,s__$1);
}
}),cljs.core.partition_by.call(null,rewrite_clj.node.whitespace.newline_QMARK_,s));
});
/**
 * Create node representing the given number of spaces.
 */
rewrite_clj.node.whitespace.spaces = (function rewrite_clj$node$whitespace$spaces(n){
return rewrite_clj.node.whitespace.whitespace_node.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n," ")));
});
/**
 * Create node representing the given number of newline characters.
 */
rewrite_clj.node.whitespace.newlines = (function rewrite_clj$node$whitespace$newlines(n){
return rewrite_clj.node.whitespace.newline_node.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"\n")));
});
var comma_17623 = rewrite_clj.node.whitespace.whitespace_node.call(null,", ");
/**
 * Interleave the given seq of nodes with `", "` nodes.
 */
rewrite_clj.node.whitespace.comma_separated = ((function (comma_17623){
return (function rewrite_clj$node$whitespace$comma_separated(nodes){
return cljs.core.butlast.call(null,cljs.core.interleave.call(null,nodes,cljs.core.repeat.call(null,comma_17623)));
});})(comma_17623))
;
var nl_17624 = rewrite_clj.node.whitespace.newline_node.call(null,"\n");
/**
 * Interleave the given seq of nodes with newline nodes.
 */
rewrite_clj.node.whitespace.line_separated = ((function (nl_17624){
return (function rewrite_clj$node$whitespace$line_separated(nodes){
return cljs.core.butlast.call(null,cljs.core.interleave.call(null,nodes,cljs.core.repeat.call(null,nl_17624)));
});})(nl_17624))
;
var space_17625 = rewrite_clj.node.whitespace.whitespace_node.call(null," ");
/**
 * Interleave the given seq of nodes with `" "` nodes.
 */
rewrite_clj.node.whitespace.space_separated = ((function (space_17625){
return (function rewrite_clj$node$whitespace$space_separated(nodes){
return cljs.core.butlast.call(null,cljs.core.interleave.call(null,nodes,cljs.core.repeat.call(null,space_17625)));
});})(space_17625))
;
/**
 * Check whether a node represents whitespace.
 */
rewrite_clj.node.whitespace.whitespace_QMARK_ = (function rewrite_clj$node$whitespace$whitespace_QMARK_(node){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null,new cljs.core.Keyword(null,"newline","newline",1790071323),null], null), null),rewrite_clj.node.protocols.tag.call(null,node));
});
/**
 * Check whether a ndoe represents linebreaks.
 */
rewrite_clj.node.whitespace.linebreak_QMARK_ = (function rewrite_clj$node$whitespace$linebreak_QMARK_(node){
return cljs.core._EQ_.call(null,rewrite_clj.node.protocols.tag.call(null,node),new cljs.core.Keyword(null,"newline","newline",1790071323));
});

//# sourceMappingURL=whitespace.js.map