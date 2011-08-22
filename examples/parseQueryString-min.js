/*!
 * Parse Query String v 0.1
 *
 * Copyright 2011, George Walters II
 * Licensed under MIT Version 2
 *
 * Date: Fri Aug 19 2011 8:58 AM -0500
 */
var parseQueryString=(function(){"use strict";var d={},qs=location.search.substring(1,location.search.length),i=0,args,pair,name,value,getKeys=function(){var a=[],key;for(key in d){if(typeof key==="string"){a.push(key)}}return a},getValue=function(a,b){var c=d[a];return(c!==null)?c:b},contains=function(a){window.console.log("Key Exists: "+d[a]);return(d[a]!==undefined)};if(qs.length>0){qs=qs.replace(/\+/g,' ');args=qs.split('&');for(i=0;i<args.length;i=i+1){pair=args[i].split('=');name=decodeURIComponent(pair[0]);value=(pair.length===2)?decodeURIComponent(pair[1]):null;d[name]=value}}return{getKeys:getKeys,getValue:getValue,contains:contains}}());