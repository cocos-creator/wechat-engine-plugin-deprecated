System.register(["./json-asset-1f2be75e.js","./index-a996f499.js","./view-368b93a3.js","./texture-buffer-pool-4d3e5972.js","./renderable-2d-549948c8.js","./vertex-format-eb40922d.js"],(function(t){"use strict";var e,i,s,o,n,r,l,h,a,c,u,p,f,d,m,_,b,T,v,g,y,C,E,D,R,L,P,M,O,x,w,S,U,B,N,k;return{setters:[function(t){e=t.cK,i=t.eb,s=t.c3,o=t.cj,n=t.aH,r=t.x,l=t.ee,h=t.ej,a=t.dP,c=t.d,u=t.l,p=t.aq,f=t.z,d=t.G,m=t.dh,_=t.a3,b=t.e1,T=t.ef,v=t.et,g=t.gm,y=t.fY,C=t.g9,E=t.fZ,D=t.fT,R=t.gn,L=t.eg,P=t.ec,M=t.eh},function(t){O=t.d},function(t){x=t.i},function(){},function(t){w=t.M,S=t.R,U=t.I},function(t){B=t.d,N=t.b,k=t.g}],execute:function(){var A,I,z;t({L:void 0,a:void 0,b:void 0}),function(t){t[t.BUTT=0]="BUTT",t[t.ROUND=1]="ROUND",t[t.SQUARE=2]="SQUARE"}(A||(A=t("a",{}))),e(A),function(t){t[t.BEVEL=0]="BEVEL",t[t.ROUND=1]="ROUND",t[t.MITER=2]="MITER"}(I||(I=t("L",{}))),e(I),function(t){t[t.PT_CORNER=1]="PT_CORNER",t[t.PT_LEFT=2]="PT_LEFT",t[t.PT_BEVEL=4]="PT_BEVEL",t[t.PT_INNERBEVEL=8]="PT_INNERBEVEL"}(z||(z=t("b",{}))),e(z);var F=Math.PI,j=Math.min,V=Math.max,W=Math.cos,J=Math.sin,Y=Math.abs,G=Math.sign,X=.5522847493;function q(t,e,i,s,o){t.moveTo(e-s,i),t.bezierCurveTo(e-s,i+o*X,e-s*X,i+o,e,i+o),t.bezierCurveTo(e+s*X,i+o,e+s,i+o*X,e+s,i),t.bezierCurveTo(e+s,i-o*X,e+s*X,i-o,e,i-o),t.bezierCurveTo(e-s*X,i-o,e-s,i-o*X,e-s,i),t.close()}function H(t,e,i,s,o,n,r,l,h,a,c){var u,p,f,d,m,_,b,T,v,g,y,C,E,D,R,L;a>10||(m=.5*(n+l),_=.5*(r+h),b=.5*((u=.5*(e+s))+(f=.5*(s+n))),T=.5*((p=.5*(i+o))+(d=.5*(o+r))),((R=Y((s-l)*(D=h-i)-(o-h)*(E=l-e)))+(L=Y((n-l)*D-(r-h)*E)))*(R+L)<t.tessTol*(E*E+D*D)?t.addPoint(l,h,0===c?c|z.PT_BEVEL:c):(H(t,e,i,u,p,b,T,y=.5*(b+(v=.5*(f+m))),C=.5*(T+(g=.5*(d+_))),a+1,0),H(t,y,C,v,g,m,_,l,h,a+1,c)))}var K,Q,Z,$,tt,et,it,st,ot,nt,rt,lt,ht,at,ct,ut,pt,ft,dt,mt,_t,bt,Tt=t("P",function(t){function e(e,i){var s;return(s=t.call(this,e,i)||this).dx=0,s.dy=0,s.dmx=0,s.dmy=0,s.flags=0,s.len=0,s.reset(),s}return i(e,t),e.prototype.reset=function(){this.dx=0,this.dy=0,this.dmx=0,this.dmy=0,this.flags=0,this.len=0},e}(s)),vt=function(){function t(){this.closed=!1,this.bevel=0,this.complex=!0,this.points=[],this.reset()}return t.prototype.reset=function(){this.closed=!1,this.bevel=0,this.complex=!0,this.points?this.points.length=0:this.points=[]},t}(),gt=function(){function t(){this.dataOffset=0,this.updatePathOffset=!1,this.pathLength=0,this.pathOffset=0,this.paths=[],this.tessTol=.25,this.distTol=.01,this.fillColor=o.WHITE.clone(),this.lineCap=A.BUTT,this.strokeColor=o.BLACK.clone(),this.lineJoin=I.MITER,this.lineWidth=0,this.pointsOffset=0,this._commandX=0,this._commandY=0,this._points=[],this._renderDataList=[],this._curPath=null}var e=t.prototype;return e.moveTo=function(t,e){this.updatePathOffset&&(this.pathOffset=this.pathLength,this.updatePathOffset=!1),this._addPath(),this.addPoint(t,e,z.PT_CORNER),this._commandX=t,this._commandY=e},e.lineTo=function(t,e){this.addPoint(t,e,z.PT_CORNER),this._commandX=t,this._commandY=e},e.bezierCurveTo=function(t,e,i,s,o,n){var r=this._curPath,l=r.points[r.points.length-1];l&&(l.x!==t||l.y!==e||i!==o||s!==n?(H(this,l.x,l.y,t,e,i,s,o,n,0,z.PT_CORNER),this._commandX=o,this._commandY=n):this.lineTo(o,n))},e.quadraticCurveTo=function(t,e,i,s){var o=this._commandX,n=this._commandY;this.bezierCurveTo(o+2/3*(t-o),n+2/3*(e-n),i+2/3*(t-i),s+2/3*(e-s),i,s)},e.arc=function(t,e,i,s,o,n){!function(t,e,i,s,o,n,r){var l,h,a=0,c=0,u=0,p=0,f=0,d=0,m=0,_=0,b=0,T=0,v=0,g=0,y=0,C=0;if(c=n-o,r=r||!1)if(Y(c)>=2*F)c=2*F;else for(;c<0;)c+=2*F;else if(Y(c)>=2*F)c=2*-F;else for(;c>0;)c-=2*F;for(h=0|V(1,j(Y(c)/(.5*F)+.5,5)),u=Y(4/3*(1-W(l=c/h/2))/J(l)),r||(u=-u),C=0;C<=h;C++)d=e+(p=W(a=o+c*(C/h)))*s,m=i+(f=J(a))*s,_=-f*s*u,b=p*s*u,0===C?t.moveTo(d,m):t.bezierCurveTo(T+g,v+y,d-_,m-b,d,m),T=d,v=m,g=_,y=b}(this,t,e,i,s,o,n)},e.ellipse=function(t,e,i,s){q(this,t,e,i,s),this._curPath.complex=!1},e.circle=function(t,e,i){q(this,t,e,i,i),this._curPath.complex=!1},e.rect=function(t,e,i,s){this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+s),this.lineTo(t,e+s),this.close(),this._curPath.complex=!1},e.roundRect=function(t,e,i,s,o){!function(t,e,i,s,o,n){if(n<.1)t.rect(e,i,s,o);else{var r=j(n,.5*Y(s))*G(s),l=j(n,.5*Y(o))*G(o);t.moveTo(e,i+l),t.lineTo(e,i+o-l),t.bezierCurveTo(e,i+o-l*(1-X),e+r*(1-X),i+o,e+r,i+o),t.lineTo(e+s-r,i+o),t.bezierCurveTo(e+s-r*(1-X),i+o,e+s,i+o-l*(1-X),e+s,i+o-l),t.lineTo(e+s,i+l),t.bezierCurveTo(e+s,i+l*(1-X),e+s-r*(1-X),i,e+s-r,i),t.lineTo(e+r,i),t.bezierCurveTo(e+r*(1-X),i,e,i+l*(1-X),e,i+l),t.close()}}(this,t,e,i,s,o),this._curPath.complex=!1},e.clear=function(){this.pathLength=0,this.pathOffset=0,this.pointsOffset=0,this.dataOffset=0,this._curPath=null,this.paths.length=0,this._points.length=0;for(var t=this._renderDataList,e=0,i=t.length;e<i;e++){var s=t[e];s&&w.remove(s)}this._renderDataList.length=0},e.close=function(){this._curPath.closed=!0},e.requestRenderData=function(){var t=w.add();return this._renderDataList.push(t),t},e.getRenderDataList=function(){return 0===this._renderDataList.length&&this.requestRenderData(),this._renderDataList},e.addPoint=function(t,e,i){var s=this._curPath;if(s){var o=this._points,n=s.points,r=o[this.pointsOffset++];r?(r.x=t,r.y=e):(r=new Tt(t,e),o.push(r)),r.flags=i,n.push(r)}},e._addPath=function(){var t=this.pathLength,e=this.paths[t];return e?e.reset():(e=new vt,this.paths.push(e)),this.pathLength++,this._curPath=e,e},t}(),yt=B.concat([new n("a_dist",r.R32F)]),Ct=N(yt),Et=k(yt);t("G",(K=l("cc.Graphics"),Q=y(),Z=C(110),$=E(),tt=h(I),et=D(),it=h(A),st=D(),ot=D(),nt=D(),rt=D(),lt=R(),K(ht=Q(ht=Z(ht=$((bt=_t=function(t){function e(){var e;return(e=t.call(this)||this).impl=null,e.model=null,L(e,"_lineWidth",ct,P(e)),L(e,"_strokeColor",ut,P(e)),L(e,"_lineJoin",pt,P(e)),L(e,"_lineCap",ft,P(e)),L(e,"_fillColor",dt,P(e)),L(e,"_miterLimit",mt,P(e)),e._isDrawing=!1,e._isNeedUploadData=!0,e._graphicsUseSubMeshes=[],e._instanceMaterialType=U.ADD_COLOR,e.impl=new gt,e}i(e,t);var s=e.prototype;return s.onRestore=function(){this.impl||this._flushAssembler()},s.onLoad=function(){this.model=O.root.createModel(x),this.model.node=this.model.transform=this.node,this._flushAssembler()},s.onEnable=function(){t.prototype.onEnable.call(this),this._updateMtlForGraphics()},s.onDisable=function(){t.prototype.onDisable.call(this)},s.onDestroy=function(){t.prototype.onDestroy.call(this),this._sceneGetter=null,this.model&&(O.root.destroyModel(this.model),this.model=null);var e=this._graphicsUseSubMeshes.length;if(e>0){for(var i=0;i<e;++i)this._graphicsUseSubMeshes[i].destroy();this._graphicsUseSubMeshes.length=0}this.impl&&(this._isDrawing=!1,this.impl.clear(),this.impl=null)},s.moveTo=function(t,e){this.impl&&this.impl.moveTo(t,e)},s.lineTo=function(t,e){this.impl&&this.impl.lineTo(t,e)},s.bezierCurveTo=function(t,e,i,s,o,n){this.impl&&this.impl.bezierCurveTo(t,e,i,s,o,n)},s.quadraticCurveTo=function(t,e,i,s){this.impl&&this.impl.quadraticCurveTo(t,e,i,s)},s.arc=function(t,e,i,s,o,n){this.impl&&this.impl.arc(t,e,i,s,o,n)},s.ellipse=function(t,e,i,s){this.impl&&this.impl.ellipse(t,e,i,s)},s.circle=function(t,e,i){this.impl&&this.impl.circle(t,e,i)},s.rect=function(t,e,i,s){this.impl&&this.impl.rect(t,e,i,s)},s.roundRect=function(t,e,i,s,o){this.impl&&this.impl.roundRect(t,e,i,s,o)},s.fillRect=function(t,e,i,s){this.rect(t,e,i,s),this.fill()},s.clear=function(){if(this.impl){if(this.impl.clear(),this._isDrawing=!1,this.model)for(var t=0;t<this.model.subModels.length;t++)this.model.subModels[t].inputAssembler.indexCount=0;this.markForUpdateRenderData()}},s.close=function(){this.impl&&this.impl.close()},s.stroke=function(){this._assembler||this._flushAssembler(),this._isDrawing=!0,this._isNeedUploadData=!0,this._assembler.stroke(this)},s.fill=function(){this._assembler||this._flushAssembler(),this._isDrawing=!0,this._isNeedUploadData=!0,this._assembler.fill(this)},s._updateMtlForGraphics=function(){var t;this._customMaterial?t=this.getMaterialInstance(0):(t=a.get("ui-graphics-material"),this.setMaterial(t,0),(t=this.getMaterialInstance(0)).recompileShaders({USE_LOCAL:!0}))},s.activeSubModel=function(t){if(this.model){if(this.model.subModels.length<=t){var e=u.director.root.device,i=e.createBuffer(new p(f.VERTEX|f.TRANSFER_DST,d.DEVICE,65535*Et,Et)),s=e.createBuffer(new p(f.INDEX|f.TRANSFER_DST,d.DEVICE,131070*Uint16Array.BYTES_PER_ELEMENT,Uint16Array.BYTES_PER_ELEMENT)),o=new m([i],yt,_.TRIANGLE_LIST,s);o.subMeshIdx=0,this.model.initSubModel(t,o,this.getMaterialInstance(0)),this._graphicsUseSubMeshes.push(o)}}else c(4500,this.node.name)},s._uploadData=function(t){var e=this.impl;if(e){var i=e&&e.getRenderDataList();if(!(i.length<=0)&&this.model){for(var s=this.model.subModels,o=0;o<i.length;o++){var n=i[o],r=s[o].inputAssembler;if(n.lastFilledVertex!==n.vertexStart){var l=new Float32Array(n.vData.buffer,0,n.vertexStart*Ct);r.vertexBuffers[0].update(l),r.vertexCount=n.vertexStart;var h=new Uint16Array(n.iData.buffer,0,n.indicesStart);r.indexBuffer.update(h),r.indexCount=n.indicesStart,n.lastFilledVertex=n.vertexStart,n.lastFilledIndices=n.indicesStart}}t.removeUploadBuffersFunc(this),this._isNeedUploadData=!1}}},s._render=function(t){if(this._isNeedUploadData){if(this.impl){var e=this.impl.getRenderDataList(),i=this.model.subModels.length;if(e.length>i)for(var s=i;s<e.length;s++)this.activeSubModel(s)}t.addUploadBuffersFunc(this,this._uploadData)}t.commitModel(this,this.model,this.getMaterialInstance(0))},s._flushAssembler=function(){var t=e.Assembler.getAssembler(this);this._assembler!==t&&(this._assembler=t)},s._canRender=function(){return!!t.prototype._canRender.call(this)&&!!this.model&&this._isDrawing},b(e,[{key:"lineWidth",get:function(){return this._lineWidth},set:function(t){this._lineWidth=t,this.impl&&(this.impl.lineWidth=t)}},{key:"lineJoin",get:function(){return this._lineJoin},set:function(t){this._lineJoin=t,this.impl&&(this.impl.lineJoin=t)}},{key:"lineCap",get:function(){return this._lineCap},set:function(t){this._lineCap=t,this.impl&&(this.impl.lineCap=t)}},{key:"strokeColor",get:function(){return this._strokeColor},set:function(t){this.impl&&(this._strokeColor.set(t),this.impl.strokeColor=this._strokeColor)}},{key:"fillColor",get:function(){return this._fillColor},set:function(t){this.impl&&(this._fillColor.set(t),this.impl.fillColor=this._fillColor)}},{key:"miterLimit",get:function(){return this._miterLimit},set:function(t){this._miterLimit=t}},{key:"color",get:function(){return this._color},set:function(t){this._color!==t&&this._color.set(t)}},{key:"srcBlendFactor",get:function(){return this._srcBlendFactor},set:function(){}},{key:"dstBlendFactor",get:function(){return this._dstBlendFactor},set:function(){}}]),e}(S),_t.LineJoin=I,_t.LineCap=A,T((at=bt).prototype,"lineWidth",[v],Object.getOwnPropertyDescriptor(at.prototype,"lineWidth"),at.prototype),T(at.prototype,"lineJoin",[tt,et],Object.getOwnPropertyDescriptor(at.prototype,"lineJoin"),at.prototype),T(at.prototype,"lineCap",[it,st],Object.getOwnPropertyDescriptor(at.prototype,"lineCap"),at.prototype),T(at.prototype,"strokeColor",[ot],Object.getOwnPropertyDescriptor(at.prototype,"strokeColor"),at.prototype),T(at.prototype,"fillColor",[nt],Object.getOwnPropertyDescriptor(at.prototype,"fillColor"),at.prototype),T(at.prototype,"miterLimit",[rt],Object.getOwnPropertyDescriptor(at.prototype,"miterLimit"),at.prototype),T(at.prototype,"color",[g,lt],Object.getOwnPropertyDescriptor(at.prototype,"color"),at.prototype),ct=T(at.prototype,"_lineWidth",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),ut=T(at.prototype,"_strokeColor",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return o.BLACK.clone()}}),pt=T(at.prototype,"_lineJoin",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return I.MITER}}),ft=T(at.prototype,"_lineCap",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return A.BUTT}}),dt=T(at.prototype,"_fillColor",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return o.WHITE.clone()}}),mt=T(at.prototype,"_miterLimit",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),ht=at))||ht)||ht)||ht)||ht))}}}));