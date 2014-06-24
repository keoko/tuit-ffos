// Compiled by ClojureScript 0.0-2234
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__262237__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__262236 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__262236,0,null);var body = cljs.core.nthnext.call(null,vec__262236,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__262237 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__262237__delegate.call(this,args);};
G__262237.cljs$lang$maxFixedArity = 0;
G__262237.cljs$lang$applyTo = (function (arglist__262238){
var args = cljs.core.seq(arglist__262238);
return G__262237__delegate(args);
});
G__262237.cljs$core$IFn$_invoke$arity$variadic = G__262237__delegate;
return G__262237;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4263__auto__ = (function iter__262243(s__262244){return (new cljs.core.LazySeq(null,(function (){var s__262244__$1 = s__262244;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__262244__$1);if(temp__4126__auto__)
{var s__262244__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__262244__$2))
{var c__4261__auto__ = cljs.core.chunk_first.call(null,s__262244__$2);var size__4262__auto__ = cljs.core.count.call(null,c__4261__auto__);var b__262246 = cljs.core.chunk_buffer.call(null,size__4262__auto__);if((function (){var i__262245 = 0;while(true){
if((i__262245 < size__4262__auto__))
{var args = cljs.core._nth.call(null,c__4261__auto__,i__262245);cljs.core.chunk_append.call(null,b__262246,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__262247 = (i__262245 + 1);
i__262245 = G__262247;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__262246),iter__262243.call(null,cljs.core.chunk_rest.call(null,s__262244__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__262246),null);
}
} else
{var args = cljs.core.first.call(null,s__262244__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__262243.call(null,cljs.core.rest.call(null,s__262244__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4263__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4263__auto__ = (function iter__262252(s__262253){return (new cljs.core.LazySeq(null,(function (){var s__262253__$1 = s__262253;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__262253__$1);if(temp__4126__auto__)
{var s__262253__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__262253__$2))
{var c__4261__auto__ = cljs.core.chunk_first.call(null,s__262253__$2);var size__4262__auto__ = cljs.core.count.call(null,c__4261__auto__);var b__262255 = cljs.core.chunk_buffer.call(null,size__4262__auto__);if((function (){var i__262254 = 0;while(true){
if((i__262254 < size__4262__auto__))
{var style = cljs.core._nth.call(null,c__4261__auto__,i__262254);cljs.core.chunk_append.call(null,b__262255,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__262256 = (i__262254 + 1);
i__262254 = G__262256;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__262255),iter__262252.call(null,cljs.core.chunk_rest.call(null,s__262253__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__262255),null);
}
} else
{var style = cljs.core.first.call(null,s__262253__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__262252.call(null,cljs.core.rest.call(null,s__262253__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4263__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__262257){
var styles = cljs.core.seq(arglist__262257);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to262258 = (function() { 
var link_to262258__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to262258 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to262258__delegate.call(this,url,content);};
link_to262258.cljs$lang$maxFixedArity = 1;
link_to262258.cljs$lang$applyTo = (function (arglist__262259){
var url = cljs.core.first(arglist__262259);
var content = cljs.core.rest(arglist__262259);
return link_to262258__delegate(url,content);
});
link_to262258.cljs$core$IFn$_invoke$arity$variadic = link_to262258__delegate;
return link_to262258;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to262258);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to262260 = (function() { 
var mail_to262260__delegate = function (e_mail,p__262261){var vec__262263 = p__262261;var content = cljs.core.nth.call(null,vec__262263,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3538__auto__ = content;if(cljs.core.truth_(or__3538__auto__))
{return or__3538__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to262260 = function (e_mail,var_args){
var p__262261 = null;if (arguments.length > 1) {
  p__262261 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to262260__delegate.call(this,e_mail,p__262261);};
mail_to262260.cljs$lang$maxFixedArity = 1;
mail_to262260.cljs$lang$applyTo = (function (arglist__262264){
var e_mail = cljs.core.first(arglist__262264);
var p__262261 = cljs.core.rest(arglist__262264);
return mail_to262260__delegate(e_mail,p__262261);
});
mail_to262260.cljs$core$IFn$_invoke$arity$variadic = mail_to262260__delegate;
return mail_to262260;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to262260);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list262265 = (function unordered_list262265(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4263__auto__ = (function iter__262270(s__262271){return (new cljs.core.LazySeq(null,(function (){var s__262271__$1 = s__262271;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__262271__$1);if(temp__4126__auto__)
{var s__262271__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__262271__$2))
{var c__4261__auto__ = cljs.core.chunk_first.call(null,s__262271__$2);var size__4262__auto__ = cljs.core.count.call(null,c__4261__auto__);var b__262273 = cljs.core.chunk_buffer.call(null,size__4262__auto__);if((function (){var i__262272 = 0;while(true){
if((i__262272 < size__4262__auto__))
{var x = cljs.core._nth.call(null,c__4261__auto__,i__262272);cljs.core.chunk_append.call(null,b__262273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__262274 = (i__262272 + 1);
i__262272 = G__262274;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__262273),iter__262270.call(null,cljs.core.chunk_rest.call(null,s__262271__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__262273),null);
}
} else
{var x = cljs.core.first.call(null,s__262271__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__262270.call(null,cljs.core.rest.call(null,s__262271__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4263__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list262265);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list262275 = (function ordered_list262275(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4263__auto__ = (function iter__262280(s__262281){return (new cljs.core.LazySeq(null,(function (){var s__262281__$1 = s__262281;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__262281__$1);if(temp__4126__auto__)
{var s__262281__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__262281__$2))
{var c__4261__auto__ = cljs.core.chunk_first.call(null,s__262281__$2);var size__4262__auto__ = cljs.core.count.call(null,c__4261__auto__);var b__262283 = cljs.core.chunk_buffer.call(null,size__4262__auto__);if((function (){var i__262282 = 0;while(true){
if((i__262282 < size__4262__auto__))
{var x = cljs.core._nth.call(null,c__4261__auto__,i__262282);cljs.core.chunk_append.call(null,b__262283,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__262284 = (i__262282 + 1);
i__262282 = G__262284;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__262283),iter__262280.call(null,cljs.core.chunk_rest.call(null,s__262281__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__262283),null);
}
} else
{var x = cljs.core.first.call(null,s__262281__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__262280.call(null,cljs.core.rest.call(null,s__262281__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4263__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list262275);
/**
* Create an image element.
*/
sablono.core.image262285 = (function() {
var image262285 = null;
var image262285__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image262285__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image262285 = function(src,alt){
switch(arguments.length){
case 1:
return image262285__1.call(this,src);
case 2:
return image262285__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image262285.cljs$core$IFn$_invoke$arity$1 = image262285__1;
image262285.cljs$core$IFn$_invoke$arity$2 = image262285__2;
return image262285;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image262285);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__262286_SHARP_,p2__262287_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__262286_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__262287_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__262288_SHARP_,p2__262289_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__262288_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__262289_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field262290 = (function() {
var color_field262290 = null;
var color_field262290__1 = (function (name__5006__auto__){return color_field262290.call(null,name__5006__auto__,null);
});
var color_field262290__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__5006__auto__,value__5007__auto__);
});
color_field262290 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return color_field262290__1.call(this,name__5006__auto__);
case 2:
return color_field262290__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field262290.cljs$core$IFn$_invoke$arity$1 = color_field262290__1;
color_field262290.cljs$core$IFn$_invoke$arity$2 = color_field262290__2;
return color_field262290;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field262290);
/**
* Creates a date input field.
*/
sablono.core.date_field262291 = (function() {
var date_field262291 = null;
var date_field262291__1 = (function (name__5006__auto__){return date_field262291.call(null,name__5006__auto__,null);
});
var date_field262291__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__5006__auto__,value__5007__auto__);
});
date_field262291 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return date_field262291__1.call(this,name__5006__auto__);
case 2:
return date_field262291__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field262291.cljs$core$IFn$_invoke$arity$1 = date_field262291__1;
date_field262291.cljs$core$IFn$_invoke$arity$2 = date_field262291__2;
return date_field262291;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field262291);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field262292 = (function() {
var datetime_field262292 = null;
var datetime_field262292__1 = (function (name__5006__auto__){return datetime_field262292.call(null,name__5006__auto__,null);
});
var datetime_field262292__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__5006__auto__,value__5007__auto__);
});
datetime_field262292 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return datetime_field262292__1.call(this,name__5006__auto__);
case 2:
return datetime_field262292__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field262292.cljs$core$IFn$_invoke$arity$1 = datetime_field262292__1;
datetime_field262292.cljs$core$IFn$_invoke$arity$2 = datetime_field262292__2;
return datetime_field262292;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field262292);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field262293 = (function() {
var datetime_local_field262293 = null;
var datetime_local_field262293__1 = (function (name__5006__auto__){return datetime_local_field262293.call(null,name__5006__auto__,null);
});
var datetime_local_field262293__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__5006__auto__,value__5007__auto__);
});
datetime_local_field262293 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return datetime_local_field262293__1.call(this,name__5006__auto__);
case 2:
return datetime_local_field262293__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field262293.cljs$core$IFn$_invoke$arity$1 = datetime_local_field262293__1;
datetime_local_field262293.cljs$core$IFn$_invoke$arity$2 = datetime_local_field262293__2;
return datetime_local_field262293;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field262293);
/**
* Creates a email input field.
*/
sablono.core.email_field262294 = (function() {
var email_field262294 = null;
var email_field262294__1 = (function (name__5006__auto__){return email_field262294.call(null,name__5006__auto__,null);
});
var email_field262294__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__5006__auto__,value__5007__auto__);
});
email_field262294 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return email_field262294__1.call(this,name__5006__auto__);
case 2:
return email_field262294__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field262294.cljs$core$IFn$_invoke$arity$1 = email_field262294__1;
email_field262294.cljs$core$IFn$_invoke$arity$2 = email_field262294__2;
return email_field262294;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field262294);
/**
* Creates a file input field.
*/
sablono.core.file_field262295 = (function() {
var file_field262295 = null;
var file_field262295__1 = (function (name__5006__auto__){return file_field262295.call(null,name__5006__auto__,null);
});
var file_field262295__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__5006__auto__,value__5007__auto__);
});
file_field262295 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return file_field262295__1.call(this,name__5006__auto__);
case 2:
return file_field262295__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field262295.cljs$core$IFn$_invoke$arity$1 = file_field262295__1;
file_field262295.cljs$core$IFn$_invoke$arity$2 = file_field262295__2;
return file_field262295;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field262295);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field262296 = (function() {
var hidden_field262296 = null;
var hidden_field262296__1 = (function (name__5006__auto__){return hidden_field262296.call(null,name__5006__auto__,null);
});
var hidden_field262296__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__5006__auto__,value__5007__auto__);
});
hidden_field262296 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return hidden_field262296__1.call(this,name__5006__auto__);
case 2:
return hidden_field262296__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field262296.cljs$core$IFn$_invoke$arity$1 = hidden_field262296__1;
hidden_field262296.cljs$core$IFn$_invoke$arity$2 = hidden_field262296__2;
return hidden_field262296;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field262296);
/**
* Creates a month input field.
*/
sablono.core.month_field262297 = (function() {
var month_field262297 = null;
var month_field262297__1 = (function (name__5006__auto__){return month_field262297.call(null,name__5006__auto__,null);
});
var month_field262297__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__5006__auto__,value__5007__auto__);
});
month_field262297 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return month_field262297__1.call(this,name__5006__auto__);
case 2:
return month_field262297__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field262297.cljs$core$IFn$_invoke$arity$1 = month_field262297__1;
month_field262297.cljs$core$IFn$_invoke$arity$2 = month_field262297__2;
return month_field262297;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field262297);
/**
* Creates a number input field.
*/
sablono.core.number_field262298 = (function() {
var number_field262298 = null;
var number_field262298__1 = (function (name__5006__auto__){return number_field262298.call(null,name__5006__auto__,null);
});
var number_field262298__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__5006__auto__,value__5007__auto__);
});
number_field262298 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return number_field262298__1.call(this,name__5006__auto__);
case 2:
return number_field262298__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field262298.cljs$core$IFn$_invoke$arity$1 = number_field262298__1;
number_field262298.cljs$core$IFn$_invoke$arity$2 = number_field262298__2;
return number_field262298;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field262298);
/**
* Creates a password input field.
*/
sablono.core.password_field262299 = (function() {
var password_field262299 = null;
var password_field262299__1 = (function (name__5006__auto__){return password_field262299.call(null,name__5006__auto__,null);
});
var password_field262299__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__5006__auto__,value__5007__auto__);
});
password_field262299 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return password_field262299__1.call(this,name__5006__auto__);
case 2:
return password_field262299__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field262299.cljs$core$IFn$_invoke$arity$1 = password_field262299__1;
password_field262299.cljs$core$IFn$_invoke$arity$2 = password_field262299__2;
return password_field262299;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field262299);
/**
* Creates a range input field.
*/
sablono.core.range_field262300 = (function() {
var range_field262300 = null;
var range_field262300__1 = (function (name__5006__auto__){return range_field262300.call(null,name__5006__auto__,null);
});
var range_field262300__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__5006__auto__,value__5007__auto__);
});
range_field262300 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return range_field262300__1.call(this,name__5006__auto__);
case 2:
return range_field262300__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field262300.cljs$core$IFn$_invoke$arity$1 = range_field262300__1;
range_field262300.cljs$core$IFn$_invoke$arity$2 = range_field262300__2;
return range_field262300;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field262300);
/**
* Creates a search input field.
*/
sablono.core.search_field262301 = (function() {
var search_field262301 = null;
var search_field262301__1 = (function (name__5006__auto__){return search_field262301.call(null,name__5006__auto__,null);
});
var search_field262301__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__5006__auto__,value__5007__auto__);
});
search_field262301 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return search_field262301__1.call(this,name__5006__auto__);
case 2:
return search_field262301__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field262301.cljs$core$IFn$_invoke$arity$1 = search_field262301__1;
search_field262301.cljs$core$IFn$_invoke$arity$2 = search_field262301__2;
return search_field262301;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field262301);
/**
* Creates a tel input field.
*/
sablono.core.tel_field262302 = (function() {
var tel_field262302 = null;
var tel_field262302__1 = (function (name__5006__auto__){return tel_field262302.call(null,name__5006__auto__,null);
});
var tel_field262302__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__5006__auto__,value__5007__auto__);
});
tel_field262302 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return tel_field262302__1.call(this,name__5006__auto__);
case 2:
return tel_field262302__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field262302.cljs$core$IFn$_invoke$arity$1 = tel_field262302__1;
tel_field262302.cljs$core$IFn$_invoke$arity$2 = tel_field262302__2;
return tel_field262302;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field262302);
/**
* Creates a text input field.
*/
sablono.core.text_field262303 = (function() {
var text_field262303 = null;
var text_field262303__1 = (function (name__5006__auto__){return text_field262303.call(null,name__5006__auto__,null);
});
var text_field262303__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__5006__auto__,value__5007__auto__);
});
text_field262303 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return text_field262303__1.call(this,name__5006__auto__);
case 2:
return text_field262303__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field262303.cljs$core$IFn$_invoke$arity$1 = text_field262303__1;
text_field262303.cljs$core$IFn$_invoke$arity$2 = text_field262303__2;
return text_field262303;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field262303);
/**
* Creates a time input field.
*/
sablono.core.time_field262304 = (function() {
var time_field262304 = null;
var time_field262304__1 = (function (name__5006__auto__){return time_field262304.call(null,name__5006__auto__,null);
});
var time_field262304__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__5006__auto__,value__5007__auto__);
});
time_field262304 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return time_field262304__1.call(this,name__5006__auto__);
case 2:
return time_field262304__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field262304.cljs$core$IFn$_invoke$arity$1 = time_field262304__1;
time_field262304.cljs$core$IFn$_invoke$arity$2 = time_field262304__2;
return time_field262304;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field262304);
/**
* Creates a url input field.
*/
sablono.core.url_field262305 = (function() {
var url_field262305 = null;
var url_field262305__1 = (function (name__5006__auto__){return url_field262305.call(null,name__5006__auto__,null);
});
var url_field262305__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__5006__auto__,value__5007__auto__);
});
url_field262305 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return url_field262305__1.call(this,name__5006__auto__);
case 2:
return url_field262305__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field262305.cljs$core$IFn$_invoke$arity$1 = url_field262305__1;
url_field262305.cljs$core$IFn$_invoke$arity$2 = url_field262305__2;
return url_field262305;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field262305);
/**
* Creates a week input field.
*/
sablono.core.week_field262306 = (function() {
var week_field262306 = null;
var week_field262306__1 = (function (name__5006__auto__){return week_field262306.call(null,name__5006__auto__,null);
});
var week_field262306__2 = (function (name__5006__auto__,value__5007__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__5006__auto__,value__5007__auto__);
});
week_field262306 = function(name__5006__auto__,value__5007__auto__){
switch(arguments.length){
case 1:
return week_field262306__1.call(this,name__5006__auto__);
case 2:
return week_field262306__2.call(this,name__5006__auto__,value__5007__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field262306.cljs$core$IFn$_invoke$arity$1 = week_field262306__1;
week_field262306.cljs$core$IFn$_invoke$arity$2 = week_field262306__2;
return week_field262306;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field262306);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box262307 = (function() {
var check_box262307 = null;
var check_box262307__1 = (function (name){return check_box262307.call(null,name,null);
});
var check_box262307__2 = (function (name,checked_QMARK_){return check_box262307.call(null,name,checked_QMARK_,"true");
});
var check_box262307__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box262307 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box262307__1.call(this,name);
case 2:
return check_box262307__2.call(this,name,checked_QMARK_);
case 3:
return check_box262307__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box262307.cljs$core$IFn$_invoke$arity$1 = check_box262307__1;
check_box262307.cljs$core$IFn$_invoke$arity$2 = check_box262307__2;
check_box262307.cljs$core$IFn$_invoke$arity$3 = check_box262307__3;
return check_box262307;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box262307);
/**
* Creates a radio button.
*/
sablono.core.radio_button262308 = (function() {
var radio_button262308 = null;
var radio_button262308__1 = (function (group){return radio_button262308.call(null,group,null);
});
var radio_button262308__2 = (function (group,checked_QMARK_){return radio_button262308.call(null,group,checked_QMARK_,"true");
});
var radio_button262308__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button262308 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button262308__1.call(this,group);
case 2:
return radio_button262308__2.call(this,group,checked_QMARK_);
case 3:
return radio_button262308__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button262308.cljs$core$IFn$_invoke$arity$1 = radio_button262308__1;
radio_button262308.cljs$core$IFn$_invoke$arity$2 = radio_button262308__2;
radio_button262308.cljs$core$IFn$_invoke$arity$3 = radio_button262308__3;
return radio_button262308;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button262308);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options262309 = (function() {
var select_options262309 = null;
var select_options262309__1 = (function (coll){return select_options262309.call(null,coll,null);
});
var select_options262309__2 = (function (coll,selected){var iter__4263__auto__ = (function iter__262318(s__262319){return (new cljs.core.LazySeq(null,(function (){var s__262319__$1 = s__262319;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__262319__$1);if(temp__4126__auto__)
{var s__262319__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__262319__$2))
{var c__4261__auto__ = cljs.core.chunk_first.call(null,s__262319__$2);var size__4262__auto__ = cljs.core.count.call(null,c__4261__auto__);var b__262321 = cljs.core.chunk_buffer.call(null,size__4262__auto__);if((function (){var i__262320 = 0;while(true){
if((i__262320 < size__4262__auto__))
{var x = cljs.core._nth.call(null,c__4261__auto__,i__262320);cljs.core.chunk_append.call(null,b__262321,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__262324 = x;var text = cljs.core.nth.call(null,vec__262324,0,null);var val = cljs.core.nth.call(null,vec__262324,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__262324,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options262309.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__262326 = (i__262320 + 1);
i__262320 = G__262326;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__262321),iter__262318.call(null,cljs.core.chunk_rest.call(null,s__262319__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__262321),null);
}
} else
{var x = cljs.core.first.call(null,s__262319__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__262325 = x;var text = cljs.core.nth.call(null,vec__262325,0,null);var val = cljs.core.nth.call(null,vec__262325,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__262325,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options262309.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__262318.call(null,cljs.core.rest.call(null,s__262319__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4263__auto__.call(null,coll);
});
select_options262309 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options262309__1.call(this,coll);
case 2:
return select_options262309__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options262309.cljs$core$IFn$_invoke$arity$1 = select_options262309__1;
select_options262309.cljs$core$IFn$_invoke$arity$2 = select_options262309__2;
return select_options262309;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options262309);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down262327 = (function() {
var drop_down262327 = null;
var drop_down262327__2 = (function (name,options){return drop_down262327.call(null,name,options,null);
});
var drop_down262327__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down262327 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down262327__2.call(this,name,options);
case 3:
return drop_down262327__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down262327.cljs$core$IFn$_invoke$arity$2 = drop_down262327__2;
drop_down262327.cljs$core$IFn$_invoke$arity$3 = drop_down262327__3;
return drop_down262327;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down262327);
/**
* Creates a text area element.
*/
sablono.core.text_area262328 = (function() {
var text_area262328 = null;
var text_area262328__1 = (function (name){return text_area262328.call(null,name,null);
});
var text_area262328__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area262328 = function(name,value){
switch(arguments.length){
case 1:
return text_area262328__1.call(this,name);
case 2:
return text_area262328__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area262328.cljs$core$IFn$_invoke$arity$1 = text_area262328__1;
text_area262328.cljs$core$IFn$_invoke$arity$2 = text_area262328__2;
return text_area262328;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area262328);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label262329 = (function label262329(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label262329);
/**
* Creates a submit button.
*/
sablono.core.submit_button262330 = (function submit_button262330(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button262330);
/**
* Creates a form reset button.
*/
sablono.core.reset_button262331 = (function reset_button262331(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button262331);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to262332 = (function() { 
var form_to262332__delegate = function (p__262333,body){var vec__262335 = p__262333;var method = cljs.core.nth.call(null,vec__262335,0,null);var action = cljs.core.nth.call(null,vec__262335,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to262332 = function (p__262333,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to262332__delegate.call(this,p__262333,body);};
form_to262332.cljs$lang$maxFixedArity = 1;
form_to262332.cljs$lang$applyTo = (function (arglist__262336){
var p__262333 = cljs.core.first(arglist__262336);
var body = cljs.core.rest(arglist__262336);
return form_to262332__delegate(p__262333,body);
});
form_to262332.cljs$core$IFn$_invoke$arity$variadic = form_to262332__delegate;
return form_to262332;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to262332);

//# sourceMappingURL=core.js.map