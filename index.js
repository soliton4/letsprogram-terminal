(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
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
    if (promiseland._hasModule({ hashStr: "6425849438ac37a35ef4c2637b4f2f47" })){ return promiseland._getModule("6425849438ac37a35ef4c2637b4f2f47"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "6425849438ac37a35ef4c2637b4f2f47", "module": PL$1, promising: true });
var PL$12/*__dirname*/;try{PL$12/*__dirname*/ = __dirname;}catch(e){};
var PL$15/*console*/;try{PL$15/*console*/ = console;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$4/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$9/*Fw*/;
var PL$11/*fw*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  var PL$5 = new __Promise();
  var PL$6 = new __Promise();
  var PL$7/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$6.resolve(e); }; }; };
  var PL$8 = function(e){ PL$6.resolve(e); };
  PL$7/*try catch*/(function(){
    __requireFun("promiseland-webframework").then(PL$7/*try catch*/(function(PL$10){PL$9/*Fw*/ = PL$10;
    PL$11/*fw*/ = new PL$9/*Fw*/({
      "loadOnConnect": "terminal/terminal",
      "dirs": [
        {
          "client": "/terminal",
          "server": (PL$12/*__dirname*/ + "/terminal/")
        }, 
        {
          "client": "/term",
          "server": (PL$12/*__dirname*/ + "/term.js/")
        }
      ],
      "css": "terminal/style.css",
      "requireConfig": {
        "shim": {
          "term/src/term": {
            "exports": "Terminal"
          }
        }
      }
    });
    PL$11/*fw*/["listen"](4010);
    __requireFun("./terminal/terminal").then(PL$7/*try catch*/(function(PL$13){PL$13;
    PL$5.resolve();}), PL$8);
  ;}), PL$8);
  ;})();
  PL$6.then(PL$3/*promiseland exception catcher*/(function(PL$14/*e*/){
    PL$15/*console*/["log"](PL$14/*e*/);
    PL$5.resolve();;}));
  PL$5.then(PL$3/*promiseland exception catcher*/(function(){;
  ;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/)
})();return PL$1;
})();
;;
return PL$1};
  
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
