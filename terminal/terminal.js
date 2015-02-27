(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "cb1bf0effd1ae7c441124f3829225f65" })){ return promiseland._getModule("cb1bf0effd1ae7c441124f3829225f65"); };
var PL$10/*console*/;try{PL$10/*console*/ = console;}catch(e){};
var PL$12/*process*/;try{PL$12/*process*/ = process;}catch(e){};
var PL$14/*document*/;try{PL$14/*document*/ = document;}catch(e){};
var PL$40/*window*/;try{PL$40/*window*/ = window;}catch(e){};
var PL$44/*Math*/;try{PL$44/*Math*/ = Math;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$3/*TheTerminal*/;
var PL$17/*local*/;
var _TPL$17/*local*/;

/* ---------------------------- */
/* type TheTerminal */
var PL$2/*type:TheTerminal*/ = classSystem._createProvisionalClass();
PL$3/*TheTerminal*/ = PL$2/*type:TheTerminal*/
var PL$4/*TheTerminal-constructor*/ = undefined;
classSystem.readyPromise(PL$2/*type:TheTerminal*/).then(function(parType){
  PL$2/*type:TheTerminal*/ = parType;
  PL$4/*TheTerminal-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:TheTerminal*/);
});
var PL$5/*type:TheTerminal**/ = classSystem._createPromiseOfClass(PL$2/*type:TheTerminal*/);
var PL$6/*TheTerminal**/ = PL$5/*type:TheTerminal**/;
var PL$7/*TheTerminal*-constructor*/ = undefined;classSystem.readyPromise(PL$5/*type:TheTerminal**/).then(function(parType){
  PL$5/*type:TheTerminal**/ = parType;
  PL$7/*TheTerminal*-constructor*/ = classSystem.getTypeConstructor(PL$5/*type:TheTerminal**/);
});
/* ---------------------------- */

var PL$19/*getTerm*/ = (function(f){
promiseland.registerRemote("server", "cb1bf0effd1ae7c441124f3829225f65", "PL$24", f, (classSystem.createFunctionType({ "return": PL$5/*type:TheTerminal**/, arguments: []})));
if (promiseland.profileHas("server")){
return function(){
var i = 0; var l = arguments.length; var newArgs = [undefined];
for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
return f.apply(this, newArgs);
};
}else{
return function(){
return promiseland.remoteExec("cb1bf0effd1ae7c441124f3829225f65", "PL$24", arguments);
}
};
})((function(t){return t;})(function (PL$20/*session*/){
var PL$21;
var _TPL$21;
(function(){ var vAr = new PL$7/*TheTerminal*-constructor*/(); PL$21 = vAr[0]; _TPL$21 = vAr[1]; })();var PL$22/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$21.reject(e);
    };
  };
};
var PL$23/*catch rejected*/ = function(e){
  PL$21.reject(e);
};
PL$22/*promiseland exception catcher*/(function(){

  ;
  if(! PL$18/*init*/){
    /*temp tracked assign*/(function(vAr){
      if (_TPL$17/*local*/){ _TPL$17/*local*/(); };
      if(vAr){
        var v = vAr[0];
        PL$17/*local*/ = v;
        _TPL$17/*local*/ = vAr[1];
        return v;
      }else{
        PL$17/*local*/ = undefined; 
        _TPL$17/*local*/ = undefined;
        return;
      };
    })(new PL$4/*TheTerminal-constructor*/())/*end temp assign*/;
    PL$18/*init*/ = true;
  };
  ;
  PL$21.resolve((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$17/*local*/)); return;
  PL$21.resolve(); return;
})();return [PL$21, _TPL$21];
}));

  ;
  var PL$8/*pty*/;
  ;
  var PL$9/*Terminal*/;
  ;
  classSystem._resolveProvisional(PL$2/*type:TheTerminal*/, classSystem.createClass({className: "TheTerminal",members: [{"name":"constructor","type":classSystem.getBuiltinType("var")},{"name":"data","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var")]}))},{"name":"input","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var")]}))},{"name":"frontEndResize","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var"), classSystem.getBuiltinType("var")]}))},{"name":"resize","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var"), classSystem.getBuiltinType("var")]}))}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":5,"column":12,"offset":36}, "hashStr": "cb1bf0effd1ae7c441124f3829225f65", "name": "TheTerminal"}, {"constructor": (function(){
  var PL$11/*self*/;
  var _TPL$11/*self*/;
  
    try{;
    PL$10/*console*/["log"]("i am being created");
    /*tracked assign*/(function(v){
    if (_TPL$11/*self*/){ _TPL$11/*self*/(); };
    PL$11/*self*/ = v;
    if (v){
    _TPL$11/*self*/ = v[2]();
    }else{
    _TPL$11/*self*/ = undefined;
    };
    return v;
    })(this)/*end assign*/
    ;
    if(PL$8/*pty*/){
      this[5]["pty"] = PL$8/*pty*/["spawn"]("bash", [
        
      ], {
        "name": "xterm-color",
        "cols": 80,
        "rows": 30,
        "cwd": PL$12/*process*/["env"]["HOME"],
        "env": PL$12/*process*/["env"]
      });
      this[5]["pty"]["on"]("data", (function(PL$13/*data*/){
      
        ;
        PL$11/*self*/[9](PL$13/*data*/);
        ;}));
      this[5]["pty"]["write"]("ls\r");
    };
    ;
    if(PL$9/*Terminal*/){
      this[5]["term"] = new PL$9/*Terminal*/({
        "cols": 80,
        "rows": 30,
        "useStyle": true
      });
      this[5]["term"]["open"](PL$14/*document*/["body"]);
      this[5]["term"]["on"]("data", (function(PL$13/*data*/){
      
        ;
        PL$11/*self*/[11](PL$13/*data*/);
        ;}));
    };
    ;
    if (_TPL$11/*self*/){ _TPL$11/*self*/();};}catch(e){if (_TPL$11/*self*/){ _TPL$11/*self*/();};throw e};;}), "data": (function(PL$13/*data*/){
  
    ;
    if(this[5]["term"]){
      this[5]["term"]["write"](PL$13/*data*/);
    };
    ;
    ;}), "input": (function(PL$13/*data*/){
  
    ;
    if(this[5]["pty"]){
      this[5]["pty"]["write"](PL$13/*data*/);
    };
    ;
    ;}), "frontEndResize": (function(PL$15/*x*/, PL$16/*y*/){
  
    ;
    if(this[5]["pty"]){
      PL$10/*console*/["log"](((("resize: " + PL$15/*x*/) + " ") + PL$16/*y*/));
      this[5]["pty"]["resize"](PL$15/*x*/, PL$16/*y*/);
      this[15](PL$15/*x*/, PL$16/*y*/);
    };
    ;
    ;}), "resize": (function(PL$15/*x*/, PL$16/*y*/){
  
    ;
    if(this[5]["term"]){
      this[5]["term"]["resize"](PL$15/*x*/, PL$16/*y*/);
    };
    ;
    ;})}));PL$3/*TheTerminal*/;
  PL$17/*local*/;
  var PL$18/*init*/ = false;
  ;
  /* function getTerm (){} - hoisted */;
  (function(){
  if (!promiseland.profileHas("server")){
  var p = new __Promise();
  p.reject({id: 14, msg: "function does not execute in this frame."});
  return p;
  };
  var PL$25 = new __Promise();
  var PL$27/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$25.reject(e);
      };
    };
  };
  var PL$28/*catch rejected*/ = function(e){
    PL$25.reject(e);
  };
  PL$27/*promiseland exception catcher*/(function(){
  
    ;
    __requireFun("pty.js").then(PL$27/*promiseland exception catcher*/(function(PL$29){PL$8/*pty*/ = PL$29;
    PL$25.resolve(); return;}), PL$28/*catch rejected*/);
    ;
  })();return PL$25;
  })();
  (function(){
  if (!promiseland.profileHas("client")){
  var p = new __Promise();
  p.reject({id: 14, msg: "function does not execute in this frame."});
  return p;
  };
  var PL$30 = new __Promise();
  var PL$32/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$30.reject(e);
      };
    };
  };
  var PL$33/*catch rejected*/ = function(e){
    PL$30.reject(e);
  };
  PL$32/*promiseland exception catcher*/(function(){
  
    ;
    var PL$34 = new __Promise();
    var PL$35 = new __Promise();
    var PL$36/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$35.resolve(e); }; }; };
    var PL$37 = function(e){ PL$35.resolve(e); };
    PL$36/*try catch*/(function(){
      PL$10/*console*/["log"]("hi");
      __requireFun("term/src/term").then(PL$36/*try catch*/(function(PL$38){PL$9/*Terminal*/ = PL$38;
      /*temptracked promise*/(function(vAr){
      var r = vAr[0].thenReuse(vAr[1], PL$36/*try catch*/(function(PL$39){/*temp tracked assign*/(function(vAr){
        if (_TPL$17/*local*/){ _TPL$17/*local*/(); };
        if(vAr){
          var v = vAr[0];
          PL$17/*local*/ = v;
          _TPL$17/*local*/ = vAr[1];
          return v;
        }else{
          PL$17/*local*/ = undefined; 
          _TPL$17/*local*/ = undefined;
          return;
        };
      })(PL$39)/*end temp assign*/;
      PL$40/*window*/["onresize"] = (function(PL$41/*event*/){
      
        ;
        var PL$42/*h*/ = PL$40/*window*/["innerHeight"];
        ;
        var PL$43/*w*/ = PL$40/*window*/["innerWidth"];
        ;
        PL$42/*h*/ = (PL$44/*Math*/["floor"]((PL$42/*h*/ / 13)) - 2);
        PL$43/*w*/ = (PL$44/*Math*/["floor"]((PL$43/*w*/ / 6.8)) - 1);
        PL$17/*local*/[13](PL$43/*w*/, PL$42/*h*/);
        ;});
      PL$34.resolve();}), PL$37);
    return r;
    })(PL$19/*getTerm*/());/*temptracked promise end*/
    ;}), PL$37);
    ;})();
    PL$35.then(PL$32/*promiseland exception catcher*/(function(PL$45/*e*/){
      PL$10/*console*/["log"](PL$45/*e*/);
      PL$34.resolve();;}));
    PL$34.then(PL$32/*promiseland exception catcher*/(function(){;
    ;
    PL$30.resolve(); return;}), PL$33/*catch rejected*/)
  })();return PL$30;
  })();
  ;})();
;return PL$1;
};
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    module.exports = __modFun(function(modulesAr, callback, errBack){
      // the require function for CommonJs
      var args = [];
      try{
        var i = 0;
        var l = modulesAr.length;
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    }, require("promiseland"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
