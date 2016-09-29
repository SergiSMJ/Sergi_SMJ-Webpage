"use strict";!function(){function e(){i=$(window).scrollTop(),$(window).scroll(function(){i=$(window).scrollTop(),i>10?$(".masthead").stop(!0,!0).addClass("nav-scrolled",500):$(".masthead").stop(!0,!0).removeClass("nav-scrolled",500)})}function t(){function e(e,t){e.each(function(){$(this).offset().top>$(window).scrollTop()+$(window).height()*t&&$(this).find(".cd-timeline-img, .cd-timeline-content").addClass("is-hidden")})}function t(e,t){e.each(function(){$(this).offset().top<=$(window).scrollTop()+$(window).height()*t&&$(this).find(".cd-timeline-img").hasClass("is-hidden")&&$(this).find(".cd-timeline-img, .cd-timeline-content").removeClass("is-hidden").addClass("bounce-in")})}var i=$(".cd-timeline-block"),n=.8;e(i,n),$(window).on("scroll",function(){window.requestAnimationFrame?window.requestAnimationFrame(function(){t(i,n)}):setTimeout(function(){t(i,n)},100)})}var i;$(document).ready(function(){e(),t()})}(),function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():t()}(this,function(){function e(e){if(null===p){for(var t=e.length,i=0,n=document.getElementById(a),s="<ul>";i<t;)s+="<li>"+e[i]+"</li>",i++;n.innerHTML=s+"</ul>"}else p(e)}function t(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(e,t){return t}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function i(e){e=e.getElementsByTagName("a");for(var t=e.length-1;0<=t;t--)e[t].setAttribute("target","_blank")}function n(e,t){for(var i=[],n=new RegExp("(^| )"+t+"( |$)"),s=e.getElementsByTagName("*"),a=0,l=s.length;a<l;a++)n.test(s[a].className)&&i.push(s[a]);return i}function s(e){if(void 0!==e&&0<=e.innerHTML.indexOf("data-srcset"))return e=e.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0],decodeURIComponent(e).split('"')[1]}var a="",l=20,o=!0,r=[],d=!1,c=!0,m=!0,h=null,u=!0,w=!0,p=null,f=!0,g=!1,v=!0,T=!0,b=!1,C=null,y={fetch:function(e){if(void 0===e.maxTweets&&(e.maxTweets=20),void 0===e.enableLinks&&(e.enableLinks=!0),void 0===e.showUser&&(e.showUser=!0),void 0===e.showTime&&(e.showTime=!0),void 0===e.dateFunction&&(e.dateFunction="default"),void 0===e.showRetweet&&(e.showRetweet=!0),void 0===e.customCallback&&(e.customCallback=null),void 0===e.showInteraction&&(e.showInteraction=!0),void 0===e.showImages&&(e.showImages=!1),void 0===e.linksInNewWindow&&(e.linksInNewWindow=!0),void 0===e.showPermalinks&&(e.showPermalinks=!0),void 0===e.dataOnly&&(e.dataOnly=!1),d)r.push(e);else{d=!0,a=e.domId,l=e.maxTweets,o=e.enableLinks,m=e.showUser,c=e.showTime,w=e.showRetweet,h=e.dateFunction,p=e.customCallback,f=e.showInteraction,g=e.showImages,v=e.linksInNewWindow,T=e.showPermalinks,b=e.dataOnly;var t=document.getElementsByTagName("head")[0];null!==C&&t.removeChild(C),C=document.createElement("script"),C.type="text/javascript",C.src="https://cdn.syndication.twimg.com/widgets/timelines/"+e.id+"?&lang="+(e.lang||"en")+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),t.appendChild(C)}},callback:function(a){function p(e){var t=e.getElementsByTagName("img")[0];return t.src=t.getAttribute("data-src-2x"),e}var C=document.createElement("div");C.innerHTML=a.body,"undefined"==typeof C.getElementsByClassName&&(u=!1),a=[];var k=[],x=[],E=[],N=[],$=[],_=[],I=0;if(u)for(C=C.getElementsByClassName("timeline-Tweet");I<C.length;)0<C[I].getElementsByClassName("timeline-Tweet-retweetCredit").length?N.push(!0):N.push(!1),(!N[I]||N[I]&&w)&&(a.push(C[I].getElementsByClassName("timeline-Tweet-text")[0]),$.push(C[I].getAttribute("data-tweet-id")),k.push(p(C[I].getElementsByClassName("timeline-Tweet-author")[0])),x.push(C[I].getElementsByClassName("dt-updated")[0]),_.push(C[I].getElementsByClassName("timeline-Tweet-timestamp")[0]),void 0!==C[I].getElementsByClassName("timeline-Tweet-media")[0]?E.push(C[I].getElementsByClassName("timeline-Tweet-media")[0]):E.push(void 0)),I++;else for(C=n(C,"timeline-Tweet");I<C.length;)0<n(C[I],"timeline-Tweet-retweetCredit").length?N.push(!0):N.push(!1),(!N[I]||N[I]&&w)&&(a.push(n(C[I],"timeline-Tweet-text")[0]),$.push(C[I].getAttribute("data-tweet-id")),k.push(p(n(C[I],"timeline-Tweet-author")[0])),x.push(n(C[I],"dt-updated")[0]),_.push(n(C[I],"timeline-Tweet-timestamp")[0]),void 0!==n(C[I],"timeline-Tweet-media")[0]?E.push(n(C[I],"timeline-Tweet-media")[0]):E.push(void 0)),I++;a.length>l&&(a.splice(l,a.length-l),k.splice(l,k.length-l),x.splice(l,x.length-l),N.splice(l,N.length-l),E.splice(l,E.length-l),_.splice(l,_.length-l));var C=[],I=a.length,B=0;if(b)for(;B<I;)C.push({tweet:a[B].innerHTML,author:k[B].innerHTML,time:x[B].textContent,image:s(E[B]),rt:N[B],tid:$[B],permalinkURL:void 0===_[B]?"":_[B].href}),B++;else for(;B<I;){if("string"!=typeof h){var N=x[B].getAttribute("datetime"),A=new Date(x[B].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),N=h(A,N);if(x[B].setAttribute("aria-label",N),a[B].textContent)if(u)x[B].textContent=N;else{var A=document.createElement("p"),L=document.createTextNode(N);A.appendChild(L),A.setAttribute("aria-label",N),x[B]=A}else x[B].textContent=N}N="",o?(v&&(i(a[B]),m&&i(k[B])),m&&(N+='<div class="user">'+t(k[B].innerHTML)+"</div>"),N+='<p class="tweet">'+t(a[B].innerHTML)+"</p>",c&&(N=T?N+('<p class="timePosted"><a href="'+_[B]+'">'+x[B].getAttribute("aria-label")+"</a></p>"):N+('<p class="timePosted">'+x[B].getAttribute("aria-label")+"</p>"))):(m&&(N+='<p class="user">'+k[B].textContent+"</p>"),N+='<p class="tweet">'+a[B].textContent+"</p>",c&&(N+='<p class="timePosted">'+x[B].textContent+"</p>")),f&&(N+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+$[B]+'" class="twitter_reply_icon"'+(v?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+$[B]+'" class="twitter_retweet_icon"'+(v?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+$[B]+'" class="twitter_fav_icon"'+(v?' target="_blank">':">")+"Favorite</a></p>"),g&&void 0!==E[B]&&(N+='<div class="media"><img src="'+s(E[B])+'" alt="Image from tweet" /></div>'),C.push(N),B++}e(C),d=!1,0<r.length&&(y.fetch(r[0]),r.splice(0,1))}};return window.twitterFetcher=y});var lastTweets={id:"725025430223360001",domId:"lastTweets",maxTweets:3,enableLinks:!0,showPermalinks:!1,showImages:!1,showRetweet:!1};twitterFetcher.fetch(lastTweets);