/*!
 * Parse Query String v 1.0
 *
 * Copyright 2011, George Walters II
 * Licensed under MIT Version 2
 *
 * Date: Fri Aug 19 2011 8:58 AM -0500
 */
(function(){"use strict";function QueryStringConstructor(){this.params={};var qs=location.search.substring(1,location.search.length),i=0,args,pair,name,value;if(qs.length>0){qs=qs.replace(/\+/g,' ');args=qs.split('&');for(i=0;i<args.length;i=i+1){pair=args[i].split('=');name=decodeURIComponent(pair[0]);value=(pair.length===2)?decodeURIComponent(pair[1]):null;this.params[name]=value}}return this}function parseQueryString(){return new QueryStringConstructor(arguments)}QueryStringConstructor.prototype={getValue:function(key,defaultText){var value=this.params[key];return(value!==null)?value:defaultText},contains:function(key){var value=this.params[key];return(value!==null)},getKeys:function(){var keys=[],key;for(key in this.params){if(typeof key==="string"){keys.push(key)}}return keys}};window.parseQueryString=parseQueryString}());