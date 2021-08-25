System.register("chunks:///_virtual/get-version.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,i,n,o,s,l,a;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,l=e.Label,a=e.Component}],execute:function(){var c,u,p,f,b;o._RF.push({},"440224T/YJJFbtQZ+7t+/4A","get-version",void 0);var g=s.ccclass,v=s.property;e("GetVersion",(c=g("GetVersion"),u=v(l),c((b=t((f=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o))||this,i(n(t),"label",b,n(t)),t}return r(t,e),t.prototype.start=function(){this.label.string="v"+CocosEngine},t}(a)).prototype,"label",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=f))||p));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./get-version.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});