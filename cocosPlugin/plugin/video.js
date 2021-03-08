System.register(["./coordinates-converts-utils-3a9a8fd2.js","./index-f16b6d61.js","./event-enum-ebacbef3.js","./deprecated-3.0.0-284c5db0.js","./renderable-component-522d1e46.js","./transform-utils-9c78354e.js","./view-a5e32ee6.js","./screen-267987a6.js","./json-asset-1ca6f424.js","./camera-component-d884bf8d.js","./find-a3c93ef0.js","./factory-ba494598.js","./renderable-2d-43befc20.js","./deprecated-daffbfc4.js"],(function(t){"use strict";var e,i,n,o,s,r,a,l,h,c,u,p,_,d,m,y,f,v,E,b,A,g,O,w,P,T,k,R,L,S,D,C,U,M,V,F,N,H;return{setters:[function(t){e=t.e2,i=t.e3,n=t.e4,o=t.e5,s=t.e7,r=t.e8,a=t.c5,l=t.ea,h=t.ci,c=t.a,u=t.ck,p=t.bD,_=t.e,d=t.l,m=t.ba,y=t.w,f=t.fW,v=t.d0,E=t.ec,b=t.fr,A=t.fl,g=t.fs,O=t.ft,w=t.fS,P=t.fu,T=t.fn,k=t.bl,R=t.d_,L=t.eb},function(t){S=t.f,D=t.E},function(){},function(){},function(){},function(){},function(t){C=t.g,U=t.v,M=t.j},function(t){V=t.s},function(){},function(){},function(){},function(t){F=t.d,N=t.i},function(t){H=t.U},function(){}],execute:function(){var I,j,x,B,Y=t("VideoClip",e("cc.VideoClip")((B=function(t){function e(){var e;return e=t.call(this)||this,s(e,"_duration",x,r(e)),e._video=null,e.loaded=!1,e}return i(e,t),n(e,[{key:"_nativeAsset",set:function(t){this._video=t,t?(this._duration=t.duration,this.loaded=!0):(this._duration=0,this.loaded=!1)},get:function(){return this._video}}]),e}(a),x=o((j=B).prototype,"_duration",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),I=j))||I);function G(t,e,i){var n=u.__videoSupport,o=n&&n.format;if(!o||0===o.length)return i(new Error(h(7703)));var s=document.createElement("video"),r=document.createElement("source");s.appendChild(r);var a=new XMLHttpRequest;a.open("GET",t,!0),a.responseType="blob",a.onload=function(){200===this.status||0===this.status?(r.src=URL.createObjectURL(this.response),i(null,s)):i(new Error(a.status+"(no response)"))},a.onerror=function(){var e="load video failure - "+t;c(e),i(new Error(e))},a.send()}function z(t,e,i,n){var o=new Y;o._nativeUrl=t,o._nativeAsset=e,n(null,o)}F.register({".mp4":G,".avi":G,".mov":G,".mpg":G,".mpeg":G,".rm":G,".rmvb":G}),N.register({".mp4":z,".avi":z,".mov":z,".mpg":z,".mpeg":z,".rm":z,".rmvb":z});var W,K,q=p({REMOTE:0,LOCAL:1});!function(t){t.NONE="none",t.PLAYING="playing",t.PAUSED="paused",t.STOPPED="stopped",t.COMPLETED="completed",t.META_LOADED="meta-loaded",t.READY_TO_PLAY="ready-to-play",t.ERROR="error",t.CLICKED="clicked"}(W||(W={})),function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(K||(K={}));var Q=function(){function t(t){var e=this;this._componentEventList=new Map,this._state=W.NONE,this._video=null,this._onHide=void 0,this._onShow=void 0,this._interrupted=!1,this._loaded=!1,this._loadedMeta=!1,this._ignorePause=!1,this._fullScreenOnAwake=!1,this._visible=!0,this._playing=!1,this._cachedCurrentTime=-1,this._waitingFullscreen=!1,this._waitingPlay=!1,this._keepAspectRatio=!1,this._component=null,this._uiTrans=null,this._node=null,this._stayOnBottom=!1,this._dirty=!1,this._forceUpdate=!1,this._w=0,this._h=0,this._m00=0,this._m01=0,this._m04=0,this._m05=0,this._m12=0,this._m13=0,this._component=t,this._node=t.node,this._uiTrans=t.node.getComponent(H),this._onHide=function(){e.video&&e._state===W.PLAYING&&(e.video.pause(),e._interrupted=!0)},this._onShow=function(){e._interrupted&&e.video&&(e.video.play(),e._interrupted=!1)},d.game.on(d.Game.EVENT_HIDE,this._onHide),d.game.on(d.Game.EVENT_SHOW,this._onShow)}var e=t.prototype;return e.onLoadedMetadata=function(t){this._loadedMeta=!0,this._forceUpdate=!0,this._visible?this.enable():this.disable(),this.dispatchEvent(W.META_LOADED);var e=t.target;this._keepAspectRatio&&e&&this.syncUITransform(e.videoWidth,e.videoHeight),this.delayedFullScreen(),this.delayedPlay()},e.onCanPlay=function(){this._loaded=!0,this.dispatchEvent(W.READY_TO_PLAY)},e.onPlay=function(){this._playing=!0,this.dispatchEvent(W.PLAYING)},e.onPlaying=function(){this.dispatchEvent(W.PLAYING)},e.onPause=function(){this._ignorePause?this._ignorePause=!1:(this._playing=!1,this.dispatchEvent(W.PAUSED))},e.onStoped=function(){this._playing=!1,this._ignorePause=!1,this.dispatchEvent(W.STOPPED)},e.onEnded=function(){this.dispatchEvent(W.COMPLETED)},e.onClick=function(){this.dispatchEvent(W.CLICKED)},e.onError=function(t){this.dispatchEvent(W.ERROR);var e=t.target;e&&e.error&&_("Error "+e.error.code+"; details: "+e.error.message)},e.play=function(){this._loadedMeta||this._loaded?this.canPlay():this._waitingPlay=!0},e.delayedPlay=function(){this._waitingPlay&&(this.canPlay(),this._waitingPlay=!1)},e.syncFullScreenOnAwake=function(t){this._fullScreenOnAwake=t,this._loadedMeta||this._loaded?this.canFullScreen(t):this._waitingFullscreen=!0},e.delayedFullScreen=function(){this._waitingFullscreen&&(this.canFullScreen(this._fullScreenOnAwake),this._waitingFullscreen=!1)},e.dispatchEvent=function(t){var e=this._componentEventList.get(t);e&&(this._state=t,e.call(this))},e.syncUITransform=function(t,e){this._uiTrans&&(this._uiTrans.width=t,this._uiTrans.height=e)},e.syncCurrentTime=function(){this.video&&-1!==this._cachedCurrentTime&&this.video.currentTime!==this._cachedCurrentTime&&(this.seekTo(this._cachedCurrentTime),this._cachedCurrentTime=-1)},e.destroy=function(){this.removeVideoPlayer(),this._componentEventList.clear(),d.game.off(d.Game.EVENT_HIDE,this._onHide),d.game.off(d.Game.EVENT_SHOW,this._onShow)},n(t,[{key:"fullScreenOnAwake",get:function(){return this._fullScreenOnAwake}},{key:"loaded",get:function(){return this._loaded}},{key:"componentEventList",get:function(){return this._componentEventList}},{key:"video",get:function(){return this._video}},{key:"state",get:function(){return this._state}},{key:"UICamera",get:function(){return S.root.batcher2D.getFirstRenderCamera(this._node)}}]),t}();d.internal.VideoPlayerImpl=Q;var X,J,Z,$,tt,et,it,nt,ot,st,rt,at,lt,ht,ct,ut,pt,_t,dt,mt,yt,ft,vt,Et,bt,At,gt,Ot,wt,Pt,Tt,kt,Rt,Lt,St,Dt,Ct,Ut,Mt,Vt=-Math.pow(2,15),Ft=m(),Nt=function(t){function e(e){var i;return(i=t.call(this,e)||this)._eventList=new Map,i._clearColorA=-1,i._clearFlag=void 0,i}i(e,t);var n=e.prototype;return n.addListener=function(t,e){this._video&&(this._eventList.set(t,e),this._video.addEventListener(t,e))},n.removeAllListeners=function(){var t=this;this._eventList.forEach((function(e,i){t._video&&t._video.removeEventListener(i,e)})),this._eventList.clear()},n.canPlay=function(){var t=this;if(this.video){var e=this.video.play();window.Promise&&e instanceof Promise&&e.catch((function(){})).then((function(){t.syncCurrentTime()}))}},n.pause=function(){this.video&&(this.video.pause(),this._cachedCurrentTime=this.video.currentTime)},n.resume=function(){this.play()},n.stop=function(){var t=this;this.video&&(this._ignorePause=!0,this.video.currentTime=0,this.video.pause(),this._cachedCurrentTime=0,setTimeout((function(){t._ignorePause=!1,t.dispatchEvent(W.STOPPED)}),0))},n.syncClip=function(t){this.removeVideoPlayer(),t&&this.createVideoPlayer(t.nativeUrl)},n.syncURL=function(t){this.removeVideoPlayer(),t&&this.createVideoPlayer(t)},n.syncPlaybackRate=function(t){u.browserType!==u.BROWSER_TYPE_UC?this.video&&(this.video.playbackRate=t):y("playbackRate is not supported by the uc mobile browser.")},n.syncVolume=function(t){this.video&&(this.video.volume=t)},n.syncMute=function(t){this.video&&(this.video.muted=t)},n.syncLoop=function(t){this.video&&(this.video.loop=t)},n.getDuration=function(){return this.video?this.video.duration:0},n.getCurrentTime=function(){return this.video?this.video.currentTime:-1},n.seekTo=function(t){this.video&&(this.video.currentTime=t)},n.canFullScreen=function(t){var e=this,i=this._video;if(i&&i.readyState===K.HAVE_ENOUGH_DATA)return u.os===u.OS_IOS&&u.isBrowser?(t?i.webkitEnterFullscreen&&i.webkitEnterFullscreen():i.webkitExitFullscreen&&i.webkitExitFullscreen(),void(this._fullScreenOnAwake=i.webkitDisplayingFullscreen)):V.supportsFullScreen?void(t?(u.browserType===u.BROWSER_TYPE_IE&&(i.style.transform=""),i.setAttribute("x5-video-player-fullscreen","true"),V.requestFullScreen(i,(function(t){var n=u.browserType===u.BROWSER_TYPE_IE?t.msFullscreenElement:t.fullscreenElement;e._fullScreenOnAwake=n===i}),(function(){e._fullScreenOnAwake=!1}))):(i.removeAttribute("x5-video-player-fullscreen"),V.exitFullScreen())):(this._fullScreenOnAwake=t,this._forceUpdate=!0,void this.syncMatrix())},n.syncStayOnBottom=function(t){this._video&&(this._video.style["z-index"]=t?Vt:0,this._stayOnBottom=t),this._dirty=!0},n.syncKeepAspectRatio=function(t){this._keepAspectRatio=t,t&&this._loadedMeta&&this._video&&this.syncUITransform(this._video.videoWidth,this._video.videoHeight)},n.removeVideoPlayer=function(){var t=this._video;t&&f(C.container,t)&&(C.container.removeChild(t),this.removeAllListeners()),this._cachedCurrentTime=0,this._playing=!1,this._loaded=!1,this._loadedMeta=!1,this._video=null},n.createVideoPlayer=function(t){var e=this._video=document.createElement("video");e.className="cocosVideo",e.style.visibility="hidden",e.style.position="absolute",e.style.bottom="0px",e.style.left="0px",e.style["transform-origin"]="0px 100% 0px",e.style["-webkit-transform-origin"]="0px 100% 0px",e.setAttribute("preload","auto"),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""),e.setAttribute("playsinline",""),this._bindDomEvent(),C.container.appendChild(e);var i=document.createElement("source");e.appendChild(i),i.src=t},n._bindDomEvent=function(){this._video,this.addListener("loadedmetadata",this.onLoadedMetadata.bind(this)),this.addListener("canplay",this.onCanPlay.bind(this)),this.addListener("canplaythrough",this.onCanPlay.bind(this)),this.addListener("play",this.onPlay.bind(this)),this.addListener("playing",this.onPlaying.bind(this)),this.addListener("pause",this.onPause.bind(this)),this.addListener("click",this.onClick.bind(this)),this.addListener("ended",this.onEnded.bind(this)),this.addListener("error",this.onError.bind(this))},n.onCanPlay=function(e){var i=e.target;if(!this._loaded||!i)switch(i.readyState){case K.HAVE_METADATA:case K.HAVE_ENOUGH_DATA:t.prototype.onCanPlay.call(this,e)}},n.enable=function(){if(this._video){if(this._visible=!0,"visible"===this._video.style.visibility)return;this._video.style.visibility="visible"}},n.disable=function(t){if(this._video){if(!t&&this._playing&&this._video.pause(),this._visible=!1,"hidden"===this._video.style.visibility)return;this._video.style.visibility="hidden"}},n.syncMatrix=function(){if(this._video&&this._visible&&this._component){var t=this.UICamera;if(t&&!V.fullScreen()){this._dirty&&(this._dirty=!1,this._stayOnBottom?(this._clearColorA=t.clearColor.w,this._clearFlag=t.clearFlag,t.clearColor.w=0,t.clearFlag=v.ALL):this._clearFlag&&(t.clearColor.w=this._clearColorA,t.clearFlag=this._clearFlag,this._clearColorA=-1,this._clearFlag=null)),this._component.node.getWorldMatrix(Ft),t.update(!0),t.worldMatrixToScreen(Ft,Ft,C.canvas.width,C.canvas.height);var e=0,i=0;if(this._fullScreenOnAwake?(e=M.width,i=M.height):(e=this._uiTrans.contentSize.width,i=this._uiTrans.contentSize.height),this._forceUpdate||this._m00!==Ft.m00||this._m01!==Ft.m01||this._m04!==Ft.m04||this._m05!==Ft.m05||this._m12!==Ft.m12||this._m13!==Ft.m13||this._w!==e||this._h!==i){this._m00=Ft.m00,this._m01=Ft.m01,this._m04=Ft.m04,this._m05=Ft.m05,this._m12=Ft.m12,this._m13=Ft.m13,this._w=e,this._h=i;var n=U.getDevicePixelRatio(),o=1/n,s=1/n,r=C.container,a=Ft.m00*o,l=Ft.m01,h=Ft.m04,c=Ft.m05*s;this._video.style.width=this._w+"px",this._video.style.height=this._h+"px",u.browserType!==u.BROWSER_TYPE_MOBILE_QQ?this._video.style.objectFit=this._keepAspectRatio?"none":"fill":y("keepAspectRatio is not supported by the qq mobile browser.");var p=this._w*o,_=this._h*s,d=this._uiTrans.anchorPoint,m=d.x,f=d.y,E=p*Ft.m00*m,b=_*Ft.m05*f,A=r&&r.style.paddingLeft?parseInt(r.style.paddingLeft):0,g=r&&r.style.paddingBottom?parseInt(r.style.paddingBottom):0,O="matrix("+a+","+-l+","+-h+","+c+","+(Ft.m12*o-E+A)+","+-(Ft.m13*s-b+g)+")";this._video.style.transform=O,this._video.style["-webkit-transform"]=O,u.browserType!==u.BROWSER_TYPE_IE&&(this._forceUpdate=!1)}}}},e}(Q),Ht=function(){function t(){}return t.getImpl=function(t){return new Nt(t)},t}();d.internal.VideoPlayerImplManager=Ht;var It=t("VideoPlayer",(X=e("cc.VideoPlayer"),J=g(),Z=O(),$=w(H),tt=E(Y),et=E(q),it=P(),nt=P(),ot=E(Y),st=P(),rt=P(),at=T(),lt=P(),ht=T(),ct=P(),ut=P(),pt=P(),_t=P(),dt=P(),mt=P(),yt=E([D]),ft=L(),vt=P(),X(Et=J(Et=Z(Et=$(Et=b((Mt=Ut=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n))||this,s(e,"_resourceType",At,r(e)),s(e,"_remoteURL",gt,r(e)),s(e,"_clip",Ot,r(e)),s(e,"_playOnAwake",wt,r(e)),s(e,"_volume",Pt,r(e)),s(e,"_mute",Tt,r(e)),s(e,"_playbackRate",kt,r(e)),s(e,"_loop",Rt,r(e)),s(e,"_fullScreenOnAwake",Lt,r(e)),s(e,"_stayOnBottom",St,r(e)),s(e,"_keepAspectRatio",Dt,r(e)),e._impl=null,e._cachedCurrentTime=0,s(e,"videoPlayerEvent",Ct,r(e)),e}i(e,t);var o=e.prototype;return o.syncSource=function(){this._impl&&(this._resourceType===q.REMOTE?this._impl.syncURL(this._remoteURL):this._impl.syncClip(this._clip))},o.__preload=function(){this._impl=Ht.getImpl(this),this.syncSource(),this._impl.syncLoop(this._loop),this._impl.syncVolume(this._volume),this._impl.syncMute(this._mute),this._impl.seekTo(this._cachedCurrentTime),this._impl.syncPlaybackRate(this._playbackRate),this._impl.syncStayOnBottom(this._stayOnBottom),this._impl.syncKeepAspectRatio(this._keepAspectRatio),this._impl.syncFullScreenOnAwake(this._fullScreenOnAwake),this._impl.componentEventList.set(W.META_LOADED,this.onMetaLoaded.bind(this)),this._impl.componentEventList.set(W.READY_TO_PLAY,this.onReadyToPlay.bind(this)),this._impl.componentEventList.set(W.PLAYING,this.onPlaying.bind(this)),this._impl.componentEventList.set(W.PAUSED,this.onPasued.bind(this)),this._impl.componentEventList.set(W.STOPPED,this.onStopped.bind(this)),this._impl.componentEventList.set(W.COMPLETED,this.onCompleted.bind(this)),this._impl.componentEventList.set(W.ERROR,this.onError.bind(this)),this._playOnAwake&&this._impl.loaded&&this.play()},o.onEnable=function(){this._impl&&this._impl.enable()},o.onDisable=function(){this._impl&&this._impl.disable()},o.onDestroy=function(){this._impl&&(this._impl.destroy(),this._impl=null)},o.update=function(){this._impl&&this._impl.syncMatrix()},o.onMetaLoaded=function(){D.emitEvents(this.videoPlayerEvent,this,W.META_LOADED),this.node.emit("meta-loaded",this)},o.onReadyToPlay=function(){this._playOnAwake&&!this.isPlaying&&this.play(),D.emitEvents(this.videoPlayerEvent,this,W.READY_TO_PLAY),this.node.emit(W.READY_TO_PLAY,this)},o.onPlaying=function(){D.emitEvents(this.videoPlayerEvent,this,W.PLAYING),this.node.emit(W.PLAYING,this)},o.onPasued=function(){D.emitEvents(this.videoPlayerEvent,this,W.PAUSED),this.node.emit(W.PAUSED,this)},o.onStopped=function(){D.emitEvents(this.videoPlayerEvent,this,W.STOPPED),this.node.emit(W.STOPPED,this)},o.onCompleted=function(){D.emitEvents(this.videoPlayerEvent,this,W.COMPLETED),this.node.emit(W.COMPLETED,this)},o.onError=function(){D.emitEvents(this.videoPlayerEvent,this,W.ERROR),this.node.emit(W.ERROR,this)},o.play=function(){this._impl&&this._impl.play()},o.resume=function(){this._impl&&this._impl.resume()},o.pause=function(){this._impl&&this._impl.pause()},o.stop=function(){this._impl&&this._impl.stop()},n(e,[{key:"resourceType",get:function(){return this._resourceType},set:function(t){this._resourceType!==t&&(this._resourceType=t,this.syncSource())}},{key:"remoteURL",get:function(){return this._remoteURL},set:function(t){this._remoteURL!==t&&(this._remoteURL=t,this.syncSource())}},{key:"clip",get:function(){return this._clip},set:function(t){this._clip!==t&&(this._clip=t,this.syncSource())}},{key:"playOnAwake",get:function(){return this._playOnAwake},set:function(t){this._playOnAwake=t}},{key:"playbackRate",get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this._impl&&this._impl.syncPlaybackRate(t)}},{key:"volume",get:function(){return this._volume},set:function(t){this._volume=t,this._impl&&this._impl.syncVolume(t)}},{key:"mute",get:function(){return this._mute},set:function(t){this._mute=t,this._impl&&this._impl.syncMute(t)}},{key:"loop",get:function(){return this._loop},set:function(t){this._loop=t,this._impl&&this._impl.syncLoop(t)}},{key:"keepAspectRatio",get:function(){return this._keepAspectRatio},set:function(t){this._keepAspectRatio!==t&&(this._keepAspectRatio=t,this._impl&&this._impl.syncKeepAspectRatio(t))}},{key:"fullScreenOnAwake",get:function(){return this._impl?(this._fullScreenOnAwake=this._impl.fullScreenOnAwake,this._fullScreenOnAwake):this._fullScreenOnAwake},set:function(t){this._fullScreenOnAwake!==t&&(this._fullScreenOnAwake=t,this._impl&&this._impl.syncFullScreenOnAwake(t))}},{key:"stayOnBottom",get:function(){return this._stayOnBottom},set:function(t){this._stayOnBottom!==t&&(this._stayOnBottom=t,this._impl&&this._impl.syncStayOnBottom(t))}},{key:"nativeVideo",get:function(){return this._impl&&this._impl.video||null}},{key:"currentTime",get:function(){return this._impl?this._impl.getCurrentTime():this._cachedCurrentTime},set:function(t){Number.isNaN(t)?y("illegal video time! value:"+t):(t=k(t,0,this.duration),this._cachedCurrentTime=t,this._impl&&this._impl.seekTo(t))}},{key:"duration",get:function(){return this._impl?this._impl.getDuration():0}},{key:"state",get:function(){return this._impl?this._impl.state:W.NONE}},{key:"isPlaying",get:function(){return this.state===W.PLAYING}}]),e}(R),Ut.EventType=W,Ut.ResourceType=q,At=o((bt=Mt).prototype,"_resourceType",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return q.LOCAL}}),gt=o(bt.prototype,"_remoteURL",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ot=o(bt.prototype,"_clip",[tt,l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),wt=o(bt.prototype,"_playOnAwake",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),Pt=o(bt.prototype,"_volume",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),Tt=o(bt.prototype,"_mute",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),kt=o(bt.prototype,"_playbackRate",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),Rt=o(bt.prototype,"_loop",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Lt=o(bt.prototype,"_fullScreenOnAwake",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),St=o(bt.prototype,"_stayOnBottom",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Dt=o(bt.prototype,"_keepAspectRatio",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),o(bt.prototype,"resourceType",[et,it],Object.getOwnPropertyDescriptor(bt.prototype,"resourceType"),bt.prototype),o(bt.prototype,"remoteURL",[nt],Object.getOwnPropertyDescriptor(bt.prototype,"remoteURL"),bt.prototype),o(bt.prototype,"clip",[ot,st],Object.getOwnPropertyDescriptor(bt.prototype,"clip"),bt.prototype),o(bt.prototype,"playOnAwake",[rt],Object.getOwnPropertyDescriptor(bt.prototype,"playOnAwake"),bt.prototype),o(bt.prototype,"playbackRate",[A,at,lt],Object.getOwnPropertyDescriptor(bt.prototype,"playbackRate"),bt.prototype),o(bt.prototype,"volume",[A,ht,ct],Object.getOwnPropertyDescriptor(bt.prototype,"volume"),bt.prototype),o(bt.prototype,"mute",[ut],Object.getOwnPropertyDescriptor(bt.prototype,"mute"),bt.prototype),o(bt.prototype,"loop",[pt],Object.getOwnPropertyDescriptor(bt.prototype,"loop"),bt.prototype),o(bt.prototype,"keepAspectRatio",[_t],Object.getOwnPropertyDescriptor(bt.prototype,"keepAspectRatio"),bt.prototype),o(bt.prototype,"fullScreenOnAwake",[dt],Object.getOwnPropertyDescriptor(bt.prototype,"fullScreenOnAwake"),bt.prototype),o(bt.prototype,"stayOnBottom",[mt],Object.getOwnPropertyDescriptor(bt.prototype,"stayOnBottom"),bt.prototype),Ct=o(bt.prototype,"videoPlayerEvent",[l,yt,ft,vt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Et=bt))||Et)||Et)||Et)||Et)||Et));d.internal.VideoPlayer=It}}}));