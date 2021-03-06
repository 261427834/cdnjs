if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/querystring-stringify-simple/querystring-stringify-simple.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/querystring-stringify-simple/querystring-stringify-simple.js",
    code: []
};
_yuitest_coverage["build/querystring-stringify-simple/querystring-stringify-simple.js"].code=["YUI.add('querystring-stringify-simple', function (Y, NAME) {","","/*global Y */","/**"," * <p>Provides Y.QueryString.stringify method for converting objects to Query Strings."," * This is a subset implementation of the full querystring-stringify.</p>"," * <p>This module provides the bare minimum functionality (encoding a hash of simple values),"," * without the additional support for nested data structures.  Every key-value pair is"," * encoded by encodeURIComponent.</p>"," * <p>This module provides a minimalistic way for io to handle  single-level objects"," * as transaction data.</p>"," *"," * @module querystring"," * @submodule querystring-stringify-simple"," */","","var QueryString = Y.namespace(\"QueryString\"),","    EUC = encodeURIComponent;","","","QueryString.stringify = function (obj, c) {","    var qs = [],","        // Default behavior is false; standard key notation.","        s = c && c.arrayKey ? true : false,","        key, i, l;","","    for (key in obj) {","        if (obj.hasOwnProperty(key)) {","            if (Y.Lang.isArray(obj[key])) {","                for (i = 0, l = obj[key].length; i < l; i++) {","                    qs.push(EUC(s ? key + '[]' : key) + '=' + EUC(obj[key][i]));","                }","            }","            else {","                qs.push(EUC(key) + '=' + EUC(obj[key]));","            }","        }","    }","","    return qs.join('&');","};","","","}, '@VERSION@', {\"requires\": [\"yui-base\"]});"];
_yuitest_coverage["build/querystring-stringify-simple/querystring-stringify-simple.js"].lines = {"1":0,"17":0,"21":0,"22":0,"27":0,"28":0,"29":0,"30":0,"31":0,"35":0,"40":0};
_yuitest_coverage["build/querystring-stringify-simple/querystring-stringify-simple.js"].functions = {"stringify:21":0,"(anonymous 1):1":0};
_yuitest_coverage["build/querystring-stringify-simple/querystring-stringify-simple.js"].coveredLines = 11;
_yuitest_coverage["build/querystring-stringify-simple/querystring-stringify-simple.js"].coveredFunctions = 2;
_yuitest_coverline("build/querystring-stringify-simple/querystring-stringify-simple.js", 1);
YUI.add('querystring-stringify-simple', function (Y, NAME) {

/*global Y */
/**
 * <p>Provides Y.QueryString.stringify method for converting objects to Query Strings.
 * This is a subset implementation of the full querystring-stringify.</p>
 * <p>This module provides the bare minimum functionality (encoding a hash of simple values),
 * without the additional support for nested data structures.  Every key-value pair is
 * encoded by encodeURIComponent.</p>
 * <p>This module provides a minimalistic way for io to handle  single-level objects
 * as transaction data.</p>
 *
 * @module querystring
 * @submodule querystring-stringify-simple
 */

_yuitest_coverfunc("build/querystring-stringify-simple/querystring-stringify-simple.js", "(anonymous 1)", 1);
_yuitest_coverline("build/querystring-stringify-simple/querystring-stringify-simple.js", 17);
var QueryString = Y.namespace("QueryString"),
    EUC = encodeURIComponent;


_yuitest_coverline("build/querystring-stringify-simple/querystring-stringify-simple.js", 21);
QueryString.stringify = function (obj, c) {
    _yuitest_coverfunc("build/querystring-stringify-simple/querystring-stringify-simple.js", "stringify", 21);
_yuitest_coverline("build/querystring-stringify-simple/querystring-stringify-simple.js", 22);
var qs = [],
        // Default behavior is false; standard key notation.
        s = c && c.arrayKey ? true : false,
        key, i, l;

    _yuitest_coverline("build/querystring-stringify-simple/querystring-stringify-simple.js", 27);
for (key in obj) {
        _yuitest_coverline("build/querystring-stringify-simple/querystring-stringify-simple.js", 28);
if (obj.hasOwnProperty(key)) {
            _yuitest_coverline("build/querystring-stringify-simple/querystring-stringify-simple.js", 29);
if (Y.Lang.isArray(obj[key])) {
                _yuitest_coverline("build/querystring-stringify-simple/querystring-stringify-simple.js", 30);
for (i = 0, l = obj[key].length; i < l; i++) {
                    _yuitest_coverline("build/querystring-stringify-simple/querystring-stringify-simple.js", 31);
qs.push(EUC(s ? key + '[]' : key) + '=' + EUC(obj[key][i]));
                }
            }
            else {
                _yuitest_coverline("build/querystring-stringify-simple/querystring-stringify-simple.js", 35);
qs.push(EUC(key) + '=' + EUC(obj[key]));
            }
        }
    }

    _yuitest_coverline("build/querystring-stringify-simple/querystring-stringify-simple.js", 40);
return qs.join('&');
};


}, '@VERSION@', {"requires": ["yui-base"]});
