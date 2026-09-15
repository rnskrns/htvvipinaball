// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"9ZvZc":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1235;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4b8ea06834df32e0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gH3Lb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _options = require("./options");
var _optionsDefault = parcelHelpers.interopDefault(_options);
var _roulette = require("./roulette");
const roulette = new (0, _roulette.Roulette)();
window.roulette = roulette;
window.options = (0, _optionsDefault.default);

},{"./options":"jebMA","./roulette":"dWQgg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jebMA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Options {
    constructor(){
        this.useSkills = true;
        /** 0-based, 양끝 포함. 1명 추첨은 start === end */ this.winnerRange = {
            start: 0,
            end: 0
        };
        this.autoRecording = true;
    }
}
const options = new Options();
exports.default = options;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dWQgg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Roulette", ()=>Roulette);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _camera = require("./camera");
var _constants = require("./data/constants");
var _maps = require("./data/maps");
var _fastForwader = require("./fastForwader");
var _marble = require("./marble");
var _minimap = require("./minimap");
var _options = require("./options");
var _optionsDefault = parcelHelpers.interopDefault(_options);
var _particleManager = require("./particleManager");
var _physicsBox2D = require("./physics-box2d");
var _rankRenderer = require("./rankRenderer");
var _rouletteRenderer = require("./rouletteRenderer");
var _skillEffect = require("./skillEffect");
var _boundDecorator = require("./utils/bound.decorator");
var _utils = require("./utils/utils");
var _videoRecorder = require("./utils/videoRecorder");
/** 입력 범위를 실제 구슬 수에 맞춰 자른다. 범위를 넘기면 뒤쪽이 잘린다 */ function clipWinnerRange({ start, end }, marbleCount) {
    const last = Math.max(0, marbleCount - 1);
    const clippedStart = Math.min(Math.max(0, start), last);
    return {
        start: clippedStart,
        end: Math.min(Math.max(clippedStart, end), last)
    };
}
class Roulette extends EventTarget {
    get isReady() {
        return this._isReady;
    }
    createRenderer() {
        return new (0, _rouletteRenderer.RouletteRenderer)();
    }
    createFastForwader() {
        return new (0, _fastForwader.FastForwader)();
    }
    constructor(){
        super(), this._marbles = [], this._lastTime = 0, this._elapsed = 0, this._updateInterval = 10, this._timeScale = 1, this._speed = 1, this._winners = [], this._particleManager = new (0, _particleManager.ParticleManager)(), this._stage = null, this._camera = new (0, _camera.Camera)(), this._effects = [], this._winnerRange = {
            start: 0,
            end: 0
        }, this._goalDist = Infinity, this._isRunning = false, /** 진행 중에는 null, 당첨자가 모두 확정되면 당첨자 배열 */ this._result = null, // 구슬 id(= order)는 매 라운드 재사용된다. 리셋 시 취소하지 않으면 이 타이머가
        // 뒤늦게 발화해 같은 id를 가진 새 라운드의 구슬을 지워버린다
        this._pendingRemovals = [], this._uiObjects = [], this._autoRecording = false, this._isReady = false, this._theme = (0, _constants.Themes).dark;
        this._renderer = this.createRenderer();
        this._renderer.init().then(()=>{
            this._init().then(()=>{
                this._isReady = true;
                this._update();
            });
        });
    }
    getZoom() {
        return (0, _constants.initialZoom) * this._camera.zoom;
    }
    addUiObject(obj) {
        this._uiObjects.push(obj);
        if (obj.onWheel) this._renderer.canvas.addEventListener('wheel', obj.onWheel);
        if (obj.onMessage) obj.onMessage((msg)=>{
            console.log('onMessage', msg);
            this.dispatchEvent(new CustomEvent('message', {
                detail: msg
            }));
        });
    }
    _update() {
        if (!this._lastTime) this._lastTime = Date.now();
        const currentTime = Date.now();
        this._elapsed += (currentTime - this._lastTime) * this._speed * this.fastForwarder.speed;
        if (this._elapsed > 100) this._elapsed %= 100;
        this._lastTime = currentTime;
        // _timeScale 은 _updateMarbles 에서 갱신되지만 물리 스텝 크기는 이 프레임 시작값으로 고정된다.
        // 구슬 정지 판정도 같은 값을 써야 실제 진행된 물리 시간과 맞는다
        const timeScale = this._timeScale;
        const interval = this._updateInterval / 1000 * timeScale;
        while(this._elapsed >= this._updateInterval){
            this.physics.step(interval);
            this._updateMarbles(this._updateInterval, timeScale);
            this._particleManager.update(this._updateInterval);
            this._updateEffects(this._updateInterval);
            this._elapsed -= this._updateInterval;
            this._uiObjects.forEach((obj)=>obj.update(this._updateInterval));
        }
        if (this._marbles.length > 1) this._marbles.sort((a, b)=>b.y - a.y);
        if (this._stage) this._camera.update({
            marbles: this._marbles,
            stage: this._stage,
            needToZoom: this._goalDist < (0, _constants.zoomThreshold),
            targetIndex: this._winners.length > 0 ? this._targetIndex : 0
        });
        this._render();
        window.requestAnimationFrame(this._update);
    }
    _updateMarbles(deltaTime, timeScale) {
        if (!this._stage) return;
        for(let i = 0; i < this._marbles.length; i++){
            const marble = this._marbles[i];
            marble.update(deltaTime, timeScale);
            if (marble.skill === (0, _constants.Skills).Impact) {
                this._effects.push(new (0, _skillEffect.SkillEffect)(marble.x, marble.y));
                this.physics.impact(marble.id);
            }
            if (marble.y > this._stage.goalY) {
                this._winners.push(marble);
                if (this._isRunning && this._isWinningRank(this._winners.length - 1)) this._particleManager.shot(this._renderer.width, this._renderer.height);
                this._pendingRemovals.push(window.setTimeout(()=>{
                    this.physics.removeMarble(marble.id);
                }, 500));
            }
        }
        const targetIndex = this._targetIndex;
        const topY = this._marbles[targetIndex] ? this._marbles[targetIndex].y : 0;
        this._goalDist = Math.abs(this._stage.zoomY - topY);
        this._timeScale = this._calcTimeScale();
        this._marbles = this._marbles.filter((marble)=>marble.y <= this._stage?.goalY);
        this._checkFinish();
    }
    /** 카메라와 슬로우모션이 주목할 구슬 = 당첨 커트라인에 걸쳐있는 구슬 */ get _targetIndex() {
        return this._winnerRange.end - this._winners.length;
    }
    _isWinningRank(rank) {
        return rank >= this._winnerRange.start && rank <= this._winnerRange.end;
    }
    _checkFinish() {
        if (!this._isRunning) return;
        const { start, end } = this._winnerRange;
        // 남은 구슬이 1개면 그 등수는 골인하지 않아도 확정된다. 2개 이상 남았다면 그들 사이의
        // 순위는 물리로만 정해지므로 예측하지 않는다 (당첨 범위 안에서도 순위는 의미를 가진다)
        const early = this._winners.length > 0 && this._marbles.length === 1;
        const ranked = early ? [
            ...this._winners,
            this._marbles[0]
        ] : this._winners;
        if (ranked.length <= end) return;
        if (early && this._isWinningRank(this._winners.length)) this._particleManager.shot(this._renderer.width, this._renderer.height);
        this._result = ranked.slice(start, end + 1);
        this._isRunning = false;
        this.dispatchEvent(new CustomEvent('goal', {
            detail: {
                winner: this._result[0].name,
                winners: this._result.map((m)=>m.name)
            }
        }));
        setTimeout(()=>{
            this._recorder.stop();
        }, 1000);
    }
    _calcTimeScale() {
        if (!this._stage) return 1;
        const targetIndex = this._targetIndex;
        if (this._winners.length < this._winnerRange.end + 1 && this._goalDist < (0, _constants.zoomThreshold)) {
            if (this._marbles[targetIndex].y > this._stage.zoomY - (0, _constants.zoomThreshold) * 1.2 && (this._marbles[targetIndex - 1] || this._marbles[targetIndex + 1])) return Math.max(0.2, this._goalDist / (0, _constants.zoomThreshold));
        }
        return 1;
    }
    _updateEffects(deltaTime) {
        this._effects.forEach((effect)=>effect.update(deltaTime));
        this._effects = this._effects.filter((effect)=>!effect.isDestroy);
    }
    _render() {
        if (!this._stage) return;
        const renderParams = {
            camera: this._camera,
            stage: this._stage,
            entities: this.physics.getEntities(),
            marbles: this._marbles,
            winners: this._winners,
            particleManager: this._particleManager,
            effects: this._effects,
            winnerRange: this._winnerRange,
            result: this._result,
            size: {
                x: this._renderer.width,
                y: this._renderer.height
            },
            theme: this._theme
        };
        this._renderer.render(renderParams, this._uiObjects);
    }
    async _init() {
        this._recorder = new (0, _videoRecorder.VideoRecorder)(this._renderer.canvas);
        this.physics = new (0, _physicsBox2D.Box2dPhysics)();
        await this.physics.init();
        this.addUiObject(new (0, _rankRenderer.RankRenderer)());
        this.attachEvent();
        const minimap = new (0, _minimap.Minimap)();
        minimap.onViewportChange((pos)=>{
            if (pos) {
                this._camera.setPosition(pos, false);
                this._camera.lock(true);
            } else this._camera.lock(false);
        });
        this.addUiObject(minimap);
        this.fastForwarder = this.createFastForwader();
        this.addUiObject(this.fastForwarder);
        this._stage = (0, _maps.stages)[0];
        this._loadMap();
    }
    mouseHandler(eventName, e) {
        const handlerName = `on${eventName}`;
        const sizeFactor = this._renderer.sizeFactor;
        const pos = {
            x: e.offsetX * sizeFactor,
            y: e.offsetY * sizeFactor
        };
        this._uiObjects.forEach((obj)=>{
            if (!obj[handlerName]) return;
            const bounds = obj.getBoundingBox();
            if (!bounds) obj[handlerName]({
                ...pos,
                button: e.button
            });
            else if (bounds && pos.x >= bounds.x && pos.y >= bounds.y && pos.x <= bounds.x + bounds.w && pos.y <= bounds.y + bounds.h) obj[handlerName]({
                x: pos.x - bounds.x,
                y: pos.y - bounds.y,
                button: e.button
            });
            else obj[handlerName](undefined);
        });
    }
    attachEvent() {
        const canvas = this._renderer.canvas;
        const onPointerRelease = (e)=>{
            this.mouseHandler('MouseUp', e);
            window.removeEventListener('pointerup', onPointerRelease);
            window.removeEventListener('pointercancel', onPointerRelease);
        };
        canvas.addEventListener('pointerdown', (e)=>{
            this.mouseHandler('MouseDown', e);
            window.addEventListener('pointerup', onPointerRelease);
            window.addEventListener('pointercancel', onPointerRelease);
        });
        [
            'MouseMove',
            'DblClick'
        ].forEach((ev)=>{
            // @ts-expect-error
            canvas.addEventListener(ev.toLowerCase().replace('mouse', 'pointer'), this.mouseHandler.bind(this, ev));
        });
        canvas.addEventListener('contextmenu', (e)=>{
            e.preventDefault();
        });
        canvas.addEventListener('click', (e)=>{
            // 광고 오버레이가 팝업 위에 그려지므로 먼저 검사한다
            const hit = this.adHitAt(e);
            if (hit) {
                if (hit.type === 'close') this.hideAdOverlay();
                else window.open(hit.url, '_blank', 'noopener');
                return;
            }
            if (this.resultCloseHitAt(e)) this._renderer.closeResultPopup();
        });
        canvas.addEventListener('pointermove', (e)=>{
            canvas.style.cursor = this.adHitAt(e) || this.resultCloseHitAt(e) ? 'pointer' : '';
        });
    }
    _loadMap() {
        if (!this._stage) throw new Error('No map has been selected');
        this.physics.createStage(this._stage);
        this._camera.initializePosition();
    }
    clearMarbles() {
        this._pendingRemovals.forEach((id)=>window.clearTimeout(id));
        this._pendingRemovals = [];
        this.physics.clearMarbles();
        this._result = null;
        this._winners = [];
        this._marbles = [];
    }
    async startRecording() {
        if (!this._autoRecording) return;
        try {
            await this._recorder.start();
        } catch (e) {
            console.error('recording failed to start', e);
        }
    }
    start() {
        this._isRunning = true;
        this._winnerRange = clipWinnerRange((0, _optionsDefault.default).winnerRange, this._marbles.length);
        this._camera.startFollowingMarbles();
        if (this._autoRecording) this._recorder.start().then(()=>{
            this.physics.start();
            this._marbles.forEach((marble)=>marble.isActive = true);
        });
        else {
            this.physics.start();
            this._marbles.forEach((marble)=>marble.isActive = true);
        }
    }
    setSpeed(value) {
        if (value <= 0) throw new Error('Speed multiplier must larger than 0');
        this._speed = value;
    }
    setAd(ad) {
        this._renderer.setAd(ad);
    }
    preloadAdImages(srcs) {
        this._renderer.preloadAdImages(srcs);
    }
    showAdOverlay(mode) {
        this._renderer.showAdOverlay(mode);
    }
    hideAdOverlay() {
        this._renderer.hideAdOverlay();
    }
    adHitAt(e) {
        const sizeFactor = this._renderer.sizeFactor;
        return this._renderer.getAdHitAt(e.offsetX * sizeFactor, e.offsetY * sizeFactor);
    }
    resultCloseHitAt(e) {
        const sizeFactor = this._renderer.sizeFactor;
        return this._renderer.getResultCloseHitAt(e.offsetX * sizeFactor, e.offsetY * sizeFactor);
    }
    setTheme(themeName) {
        this._theme = (0, _constants.Themes)[themeName];
    }
    getSpeed() {
        return this._speed;
    }
    setWinningRank(rank) {
        this.setWinnerRange(rank, rank);
    }
    setWinnerRange(start, end) {
        (0, _optionsDefault.default).winnerRange = {
            start,
            end
        };
        this._winnerRange = clipWinnerRange((0, _optionsDefault.default).winnerRange, this._marbles.length);
    }
    /** 실제 구슬 수에 맞춰 잘린 범위 (0-based, 양끝 포함) */ getWinnerRange() {
        return {
            ...this._winnerRange
        };
    }
    setAutoRecording(value) {
        this._autoRecording = value;
    }
    setMarbles(names) {
        this.reset();
        const arr = names.slice();
        let maxWeight = -Infinity;
        let minWeight = Infinity;
        const members = arr.map((nameString)=>{
            const result = (0, _utils.parseName)(nameString);
            if (!result) return null;
            const { name, weight, count } = result;
            if (weight > maxWeight) maxWeight = weight;
            if (weight < minWeight) minWeight = weight;
            return {
                name,
                weight,
                count
            };
        }).filter((member)=>!!member);
        const gap = maxWeight - minWeight;
        let totalCount = 0;
        members.forEach((member)=>{
            if (member) {
                member.weight = 0.1 + (gap ? (member.weight - minWeight) / gap : 0);
                totalCount += member.count;
            }
        });
        const orders = (0, _utils.shuffle)(Array(totalCount).fill(0).map((_, i)=>i));
        members.forEach((member)=>{
            if (member) for(let j = 0; j < member.count; j++){
                const order = orders.pop() || 0;
                this._marbles.push(new (0, _marble.Marble)(this.physics, order, totalCount, member.name, member.weight));
            }
        });
        // 카메라를 구슬 생성 위치 중앙으로 이동 + 줌인
        if (totalCount > 0) {
            const cols = Math.min(totalCount, 10);
            const rows = Math.ceil(totalCount / 10);
            const lineDelta = -Math.max(0, Math.ceil(rows - 5));
            const centerX = 10.25 + (cols - 1) * 0.3;
            const centerY = (1 + rows) / 2 + lineDelta;
            const spawnWidth = Math.max((cols - 1) * 0.6, 1);
            const spawnHeight = Math.max(rows - 1, 1);
            const margin = 3;
            const viewW = (0, _constants.canvasWidth) / (0, _constants.initialZoom);
            const viewH = (0, _constants.canvasHeight) / (0, _constants.initialZoom);
            const zoom = Math.max(1.5, Math.min(Math.min(viewW / (spawnWidth + margin * 2), viewH / (spawnHeight + margin * 2)), 3));
            this._camera.initializePosition({
                x: centerX,
                y: centerY
            }, zoom);
        }
    }
    _clearMap() {
        this.physics.clear();
        this._marbles = [];
    }
    reset() {
        this.clearMarbles();
        this._clearMap();
        this._loadMap();
        this._goalDist = Infinity;
    }
    getCount() {
        return this._marbles.length;
    }
    getMaps() {
        return (0, _maps.stages).map((stage, index)=>{
            return {
                index,
                title: stage.title
            };
        });
    }
    getCurrentMap() {
        if (!this._stage) return null;
        return {
            index: (0, _maps.stages).indexOf(this._stage),
            title: this._stage.title
        };
    }
    setMap(index) {
        if (index < 0 || index > (0, _maps.stages).length - 1) throw new Error('Incorrect map number');
        const names = this._marbles.map((marble)=>marble.name);
        this._stage = (0, _maps.stages)[index];
        this.setMarbles(names);
        this._camera.initializePosition();
    }
}
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], Roulette.prototype, "_update", null);
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], Roulette.prototype, "mouseHandler", null);

},{"@swc/helpers/_/_ts_decorate":"aPTou","./camera":"eRxgS","./data/constants":"dKlb7","./data/maps":"cUMXH","./fastForwader":"bTlP4","./marble":"jGScz","./minimap":"5BIBs","./options":"jebMA","./particleManager":"7yEm2","./physics-box2d":"Agzxl","./rankRenderer":"ewQVA","./rouletteRenderer":"kaELn","./skillEffect":"LqJb0","./utils/bound.decorator":"auTxm","./utils/utils":"ljVDB","./utils/videoRecorder":"j59yE","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aPTou":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", ()=>(0, _tslib.__decorate));
var _tslib = require("tslib");

},{"tslib":"iC1Dx","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iC1Dx":[function(require,module,exports,__globalThis) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
parcelHelpers.export(exports, "__addDisposableResource", ()=>__addDisposableResource);
parcelHelpers.export(exports, "__disposeResources", ()=>__disposeResources);
parcelHelpers.export(exports, "__rewriteRelativeImportExtension", ()=>__rewriteRelativeImportExtension);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
exports.default = {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __esDecorate: __esDecorate,
    __runInitializers: __runInitializers,
    __propKey: __propKey,
    __setFunctionName: __setFunctionName,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources,
    __rewriteRelativeImportExtension: __rewriteRelativeImportExtension
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eRxgS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Camera", ()=>Camera);
var _constants = require("./data/constants");
class Camera {
    get zoom() {
        return this._zoom;
    }
    set zoom(v) {
        this._targetZoom = v;
    }
    get x() {
        return this._position.x;
    }
    set x(v) {
        this._targetPosition.x = v;
    }
    get y() {
        return this._position.y;
    }
    set y(v) {
        this._targetPosition.y = v;
    }
    get position() {
        return this._position;
    }
    setPosition(v, force = false) {
        if (force) return this._position = {
            x: v.x,
            y: v.y
        };
        return this._targetPosition = {
            x: v.x,
            y: v.y
        };
    }
    lock(v) {
        this._locked = v;
    }
    startFollowingMarbles() {
        this._shouldFollowMarbles = true;
    }
    initializePosition(center, zoom) {
        const x = center?.x ?? 12.95;
        const y = center?.y ?? 2;
        const z = zoom ?? 1;
        this._position = {
            x,
            y
        };
        this._targetPosition = {
            x,
            y
        };
        this._zoom = z;
        this._targetZoom = z;
        this._shouldFollowMarbles = false;
    }
    update({ marbles, stage, needToZoom, targetIndex }) {
        // set target position
        if (!this._locked) this._calcTargetPositionAndZoom(marbles, stage, needToZoom, targetIndex);
        // interpolate position
        this._position.x = this._interpolation(this.x, this._targetPosition.x, 120);
        this._position.y = this._interpolation(this.y, this._targetPosition.y);
        // interpolate zoom
        this._zoom = this._interpolation(this._zoom, this._targetZoom);
    }
    _calcTargetPositionAndZoom(marbles, stage, needToZoom, targetIndex) {
        if (!this._shouldFollowMarbles) return;
        if (marbles.length > 0) {
            const targetMarble = marbles[targetIndex] ? marbles[targetIndex] : marbles[0];
            this.setPosition(targetMarble.position);
            if (needToZoom) {
                const goalDist = Math.abs(stage.zoomY - this._position.y);
                this.zoom = Math.max(1, (1 - goalDist / (0, _constants.zoomThreshold)) * 4);
            } else this.zoom = 1;
        } else this.zoom = 1;
    }
    _interpolation(current, target, delta = 10) {
        const d = target - current;
        if (Math.abs(d) < 1 / (0, _constants.initialZoom)) return target;
        return current + d / delta;
    }
    renderScene(ctx, callback) {
        const zoomFactor = (0, _constants.initialZoom) * 2 * this._zoom;
        ctx.save();
        ctx.translate(-this.x * this._zoom, -this.y * this._zoom);
        ctx.scale(this.zoom, this.zoom);
        ctx.translate(ctx.canvas.width / zoomFactor, ctx.canvas.height / zoomFactor);
        callback(ctx);
        ctx.restore();
    }
    constructor(){
        this._position = {
            x: 0,
            y: 0
        };
        this._targetPosition = {
            x: 0,
            y: 0
        };
        this._zoom = 1;
        this._targetZoom = 1;
        this._locked = false;
        this._shouldFollowMarbles = false;
    }
}

},{"./data/constants":"dKlb7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dKlb7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initialZoom", ()=>initialZoom);
parcelHelpers.export(exports, "canvasWidth", ()=>canvasWidth);
parcelHelpers.export(exports, "canvasHeight", ()=>canvasHeight);
parcelHelpers.export(exports, "zoomThreshold", ()=>zoomThreshold);
parcelHelpers.export(exports, "STUCK_DELAY", ()=>STUCK_DELAY);
parcelHelpers.export(exports, "winnerAreaHeight", ()=>winnerAreaHeight);
parcelHelpers.export(exports, "Skills", ()=>Skills);
parcelHelpers.export(exports, "DefaultEntityColor", ()=>DefaultEntityColor);
parcelHelpers.export(exports, "DefaultBloomColor", ()=>DefaultBloomColor);
parcelHelpers.export(exports, "Themes", ()=>Themes);
const initialZoom = 30;
const canvasWidth = 1600;
const canvasHeight = 900;
const zoomThreshold = 5;
const STUCK_DELAY = 5000;
const winnerAreaHeight = 168;
var Skills = /*#__PURE__*/ function(Skills) {
    Skills[Skills["None"] = 0] = "None";
    Skills[Skills["Impact"] = 1] = "Impact";
    return Skills;
}({});
const DefaultEntityColor = {
    box: 'cyan',
    circle: 'yellow',
    polyline: 'white'
};
const DefaultBloomColor = {
    box: 'cyan',
    circle: 'yellow',
    polyline: 'cyan'
};
const Themes = {
    light: {
        background: '#fffaf0',
        marbleLightness: 42,
        marbleWinningBorder: '#ff7658',
        skillColor: '#ff7658',
        coolTimeIndicator: '#f0b700',
        entity: {
            box: {
                fill: '#ffd95d',
                outline: '#8a6a00',
                bloom: '#fff0a6',
                bloomRadius: 0
            },
            circle: {
                fill: '#ff9d88',
                outline: '#b6432c',
                bloom: '#ffd5ca',
                bloomRadius: 0
            },
            polyline: {
                fill: '#c9f1e6',
                outline: '#397f6d',
                bloom: '#e6faf5',
                bloomRadius: 0
            }
        },
        rankStroke: '#fffaf0',
        minimapBackground: '#fff0bf',
        minimapViewport: '#ff7658',
        winnerBackground: 'rgba(255, 250, 240, 0.94)',
        winnerOutline: '#4b3d17',
        winnerText: '#2f2918'
    },
    dark: {
        background: '#ffd62e',
        marbleLightness: 38,
        marbleWinningBorder: '#18160f',
        skillColor: '#18160f',
        coolTimeIndicator: '#ff6b4a',
        entity: {
            box: {
                fill: '#18160f',
                outline: '#18160f',
                bloom: '#fff4b8',
                bloomRadius: 8
            },
            circle: {
                fill: '#ff6b4a',
                outline: '#18160f',
                bloom: '#fff4b8',
                bloomRadius: 8
            },
            polyline: {
                fill: '#fffdf4',
                outline: '#18160f',
                bloom: '#fff4b8',
                bloomRadius: 8
            }
        },
        rankStroke: '#fffdf4',
        minimapBackground: '#fff4b8',
        minimapViewport: '#18160f',
        winnerBackground: 'rgba(255, 253, 244, 0.92)',
        winnerOutline: '#18160f',
        winnerText: '#18160f'
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cUMXH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stages", ()=>stages);
const stages = [
    {
        title: '행운의 수레바퀴',
        goalY: 111,
        zoomY: 106.75,
        adBoards: [
            {
                x: 15.92,
                y: 104.3,
                w: 5,
                h: 1.25
            }
        ],
        entities: [
            // polyline
            {
                position: {
                    x: 0,
                    y: 0
                },
                shape: {
                    type: 'polyline',
                    points: [
                        [
                            16.5,
                            -300
                        ],
                        [
                            9.25,
                            -300
                        ],
                        [
                            9.25,
                            8.5
                        ],
                        [
                            2,
                            19.25
                        ],
                        [
                            2,
                            26
                        ],
                        [
                            9.75,
                            30
                        ],
                        [
                            9.75,
                            33.5
                        ],
                        [
                            1.25,
                            41
                        ],
                        [
                            1.25,
                            53.75
                        ],
                        [
                            8.25,
                            58.75
                        ],
                        [
                            8.25,
                            63
                        ],
                        [
                            9.25,
                            64
                        ],
                        [
                            8.25,
                            65
                        ],
                        [
                            8.25,
                            99.25
                        ],
                        [
                            15.1,
                            106.75
                        ],
                        [
                            15.1,
                            111.75
                        ]
                    ],
                    rotation: 0
                },
                type: 'static',
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            16.5,
                            -300
                        ],
                        [
                            16.5,
                            9.25
                        ],
                        [
                            9.5,
                            20
                        ],
                        [
                            9.5,
                            22.5
                        ],
                        [
                            17.5,
                            26
                        ],
                        [
                            17.5,
                            33.5
                        ],
                        [
                            24,
                            38.5
                        ],
                        [
                            19,
                            45.5
                        ],
                        [
                            19,
                            55.5
                        ],
                        [
                            24,
                            59.25
                        ],
                        [
                            24,
                            63
                        ],
                        [
                            23,
                            64
                        ],
                        [
                            24,
                            65
                        ],
                        [
                            24,
                            100.5
                        ],
                        [
                            16,
                            106.75
                        ],
                        [
                            16,
                            111.75
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            12.75,
                            37.5
                        ],
                        [
                            7,
                            43.5
                        ],
                        [
                            7,
                            49.75
                        ],
                        [
                            12.75,
                            53.75
                        ],
                        [
                            12.75,
                            37.5
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            14.75,
                            37.5
                        ],
                        [
                            14.75,
                            43
                        ],
                        [
                            17.5,
                            40.25
                        ],
                        [
                            14.75,
                            37.5
                        ]
                    ]
                }
            },
            // boxes
            {
                position: {
                    x: 15.5,
                    y: 30.0
                },
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                type: 'static',
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 32
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 28
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 30
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 32
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 28
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.4,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11.3,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.1,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.9,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 20.699999999999996,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22.7,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.4,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11.3,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.1,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.9,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 20.699999999999996,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22.7,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 92
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12.75,
                    y: 92
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 16,
                    y: 92
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.25,
                    y: 92
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22.5,
                    y: 92
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11,
                    y: 95
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14.25,
                    y: 95
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 95
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 20.75,
                    y: 95
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 98
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12.75,
                    y: 98
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 16,
                    y: 98
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.25,
                    y: 98
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22.5,
                    y: 98
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            // wheels
            {
                position: {
                    x: 8,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 3.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -3.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 16,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 3.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 20,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -3.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 24,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 3.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14,
                    y: 106.75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -1.2,
                    restitution: 0
                }
            }
        ]
    },
    {
        title: '버블팝',
        goalY: 83,
        zoomY: 78,
        adBoards: [
            {
                y: 80.5,
                x: 10
            },
            {
                y: 80.5,
                x: 15.05
            }
        ],
        entities: [
            {
                type: 'static',
                position: {
                    x: 10.375,
                    y: -108.5
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            6.125,
                            -191.5
                        ],
                        [
                            -1.125,
                            -191.5
                        ],
                        [
                            -1.125,
                            108.5
                        ],
                        [
                            -1.125,
                            151.5
                        ],
                        [
                            -6.125,
                            158.5
                        ],
                        [
                            -1.125,
                            161.5
                        ],
                        [
                            -1.125,
                            179.5
                        ],
                        [
                            -0.9128679656440362,
                            179.7498817789222
                        ],
                        [
                            -1.125,
                            179.9997635578444
                        ],
                        [
                            -1.125,
                            183.5
                        ],
                        [
                            1.625,
                            188.5
                        ],
                        [
                            1.625,
                            191.5
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 16.25,
                    y: -108.5
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            0.25,
                            -191.5
                        ],
                        [
                            0.25,
                            158.5
                        ],
                        [
                            3.25,
                            162.5
                        ],
                        [
                            2.25,
                            164.5
                        ],
                        [
                            3.25,
                            166.5
                        ],
                        [
                            0.25,
                            169.5
                        ],
                        [
                            0.25,
                            179.5
                        ],
                        [
                            0.03786796564403616,
                            179.75925677892224
                        ],
                        [
                            0.25,
                            179.9997635578444
                        ],
                        [
                            0.25,
                            183.5
                        ],
                        [
                            -3.25,
                            188.5
                        ],
                        [
                            -3.25,
                            191.5
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 16.5,
                    y: 55.75
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            0,
                            -3.25
                        ],
                        [
                            1,
                            -1.75
                        ],
                        [
                            0,
                            0.25
                        ],
                        [
                            1,
                            2.25
                        ],
                        [
                            0,
                            3.25
                        ],
                        [
                            -1,
                            0.25
                        ],
                        [
                            0,
                            -3.25
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 10.375,
                    y: 48.25
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            -1.125,
                            -2.75
                        ],
                        [
                            -4.125,
                            1.25
                        ],
                        [
                            -1.125,
                            2.75
                        ],
                        [
                            4.125,
                            2.25
                        ],
                        [
                            -1.125,
                            -2.75
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 10.15625,
                    y: 26.75
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            -0.90625,
                            -0.75
                        ],
                        [
                            0.90625,
                            0.75
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 15.59375,
                    y: 26.75
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            0.90625,
                            -0.75
                        ],
                        [
                            -0.90625,
                            0.75
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 12.875,
                    y: 29.25
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            -1.8125,
                            0.75
                        ],
                        [
                            0,
                            -0.75
                        ],
                        [
                            1.8125,
                            0.75
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 10.15625,
                    y: 31.75
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            -0.90625,
                            -0.75
                        ],
                        [
                            0.90625,
                            0.75
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 15.59375,
                    y: 31.75
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            0.90625,
                            -0.75
                        ],
                        [
                            -0.90625,
                            0.75
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 12.875,
                    y: 34.25
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            -1.8125,
                            0.75
                        ],
                        [
                            0,
                            -0.75
                        ],
                        [
                            1.8125,
                            0.75
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 9.25,
                    y: 18
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 11.25,
                    y: 18
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 13.25,
                    y: 18
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 15.25,
                    y: 18
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 10.5,
                    y: 19
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 12.5,
                    y: 19
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 14.5,
                    y: 19
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 16.5,
                    y: 19
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 9.25,
                    y: 20
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 11.25,
                    y: 20
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 13.25,
                    y: 20
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 15.25,
                    y: 20
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 10.5,
                    y: 21
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 12.5,
                    y: 21
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 14.5,
                    y: 21
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 16.5,
                    y: 21
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 9.25,
                    y: 22
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 11.25,
                    y: 22
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 13.25,
                    y: 22
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 15.25,
                    y: 22
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 10.5,
                    y: 23
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 12.5,
                    y: 23
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 14.5,
                    y: 23
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 16.5,
                    y: 23
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 0.15,
                    height: 0.15
                }
            },
            {
                type: 'static',
                position: {
                    x: 9.400000000000002,
                    y: 39
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 3,
                    height: 3
                }
            },
            {
                type: 'static',
                position: {
                    x: 16.5,
                    y: 43
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0.7853981633974483,
                    width: 3,
                    height: 3
                }
            },
            {
                type: 'kinematic',
                position: {
                    x: 10.7,
                    y: 10
                },
                props: {
                    angularVelocity: 10,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0,
                    width: 0.5,
                    height: 0.1
                }
            },
            {
                type: 'kinematic',
                position: {
                    x: 14.7,
                    y: 10
                },
                props: {
                    angularVelocity: -10,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0,
                    width: 0.5,
                    height: 0.1
                }
            },
            {
                type: 'kinematic',
                position: {
                    x: 12.7,
                    y: 10
                },
                props: {
                    angularVelocity: 10,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0,
                    width: 0.5,
                    height: 0.1
                }
            },
            {
                type: 'kinematic',
                position: {
                    x: 10.7,
                    y: 14
                },
                props: {
                    angularVelocity: -3,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0,
                    width: 2,
                    height: 0.1
                }
            },
            {
                type: 'kinematic',
                position: {
                    x: 14.7,
                    y: 14
                },
                props: {
                    angularVelocity: 3,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0,
                    width: 2,
                    height: 0.1
                }
            },
            {
                type: 'kinematic',
                position: {
                    x: 11.2,
                    y: 44
                },
                props: {
                    angularVelocity: -5,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0,
                    width: 0.5,
                    height: 0.1
                }
            },
            {
                type: 'kinematic',
                position: {
                    x: 10.3,
                    y: 75
                },
                props: {
                    angularVelocity: 8,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0,
                    width: 1,
                    height: 0.1
                }
            },
            {
                type: 'kinematic',
                position: {
                    x: 15.462132034355964,
                    y: 75
                },
                props: {
                    angularVelocity: -8,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0,
                    width: 1,
                    height: 0.1
                }
            },
            {
                type: 'static',
                position: {
                    x: 11,
                    y: 65
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                },
                shape: {
                    type: 'circle',
                    radius: 0.5
                }
            },
            {
                type: 'static',
                position: {
                    x: 13,
                    y: 65
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                },
                shape: {
                    type: 'circle',
                    radius: 0.5
                }
            },
            {
                type: 'static',
                position: {
                    x: 15,
                    y: 65
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                },
                shape: {
                    type: 'circle',
                    radius: 0.5
                }
            },
            {
                type: 'static',
                position: {
                    x: 12,
                    y: 67.5
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                },
                shape: {
                    type: 'circle',
                    radius: 0.5
                }
            },
            {
                type: 'static',
                position: {
                    x: 14,
                    y: 67.5
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                },
                shape: {
                    type: 'circle',
                    radius: 0.5
                }
            },
            {
                type: 'static',
                position: {
                    x: 13,
                    y: 69.77058813837772
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                },
                shape: {
                    type: 'circle',
                    radius: 0.8
                }
            },
            {
                type: 'static',
                position: {
                    x: 10.7,
                    y: 77.5
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                },
                shape: {
                    type: 'circle',
                    radius: 0.8
                }
            },
            {
                type: 'static',
                position: {
                    x: 14.7,
                    y: 77.5
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                },
                shape: {
                    type: 'circle',
                    radius: 0.8
                }
            },
            {
                type: 'static',
                position: {
                    x: 12.625,
                    y: 80
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                },
                shape: {
                    type: 'circle',
                    radius: 1.5
                }
            },
            {
                type: 'static',
                position: {
                    x: 12.625,
                    y: 80
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                },
                shape: {
                    type: 'circle',
                    radius: 1.2
                }
            },
            {
                type: 'kinematic',
                position: {
                    x: 12.625,
                    y: 56.00000000000001
                },
                props: {
                    angularVelocity: -8,
                    density: 1,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0,
                    width: 1,
                    height: 0.1
                }
            },
            {
                type: 'static',
                position: {
                    x: 9.947604593262161,
                    y: 62.59581680393866
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                },
                shape: {
                    type: 'circle',
                    radius: 0.5
                }
            },
            {
                type: 'static',
                position: {
                    x: 11.947604593262161,
                    y: 62.59581680393866
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                },
                shape: {
                    type: 'circle',
                    radius: 0.5
                }
            },
            {
                type: 'static',
                position: {
                    x: 13.947604593262161,
                    y: 62.59581680393866
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                },
                shape: {
                    type: 'circle',
                    radius: 0.5
                }
            },
            {
                type: 'static',
                position: {
                    x: 15.828283102570442,
                    y: 62.59581680393866
                },
                props: {
                    angularVelocity: 0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                },
                shape: {
                    type: 'circle',
                    radius: 0.5
                }
            }
        ]
    },
    {
        title: '탐욕의 항아리',
        goalY: 91,
        zoomY: 92.5,
        adBoards: [
            {
                x: 13.0,
                y: 75.5,
                w: 9.5,
                h: 2.375
            }
        ],
        entities: [
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            17,
                            -300
                        ],
                        [
                            9,
                            -300
                        ],
                        [
                            9,
                            8.5
                        ],
                        [
                            2,
                            15
                        ],
                        [
                            6,
                            61.5
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            7,
                            67.2
                        ],
                        [
                            9,
                            85.2
                        ],
                        [
                            8,
                            84.9
                        ],
                        [
                            6,
                            84.6
                        ],
                        [
                            5,
                            78.6
                        ],
                        [
                            4,
                            66.6
                        ],
                        [
                            7,
                            67.2
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            17,
                            -300
                        ],
                        [
                            17,
                            8.5
                        ],
                        [
                            24,
                            15
                        ],
                        [
                            20,
                            61.5
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            19,
                            67.2
                        ],
                        [
                            17,
                            85.2
                        ],
                        [
                            18,
                            84.9
                        ],
                        [
                            20,
                            84.6
                        ],
                        [
                            21,
                            78.6
                        ],
                        [
                            22,
                            66.6
                        ],
                        [
                            19,
                            67.2
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            11,
                            77.4
                        ],
                        [
                            12,
                            78.6
                        ],
                        [
                            12,
                            91.8
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            15,
                            77.4
                        ],
                        [
                            14,
                            78.6
                        ],
                        [
                            14,
                            91.8
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            12,
                            85.8
                        ],
                        [
                            11,
                            86.4
                        ],
                        [
                            9,
                            87
                        ],
                        [
                            8,
                            87
                        ],
                        [
                            6,
                            86.4
                        ],
                        [
                            5,
                            85.8
                        ],
                        [
                            4,
                            84.6
                        ],
                        [
                            3,
                            78.6
                        ],
                        [
                            2,
                            66.6
                        ],
                        [
                            3,
                            63.6
                        ],
                        [
                            4,
                            62.4
                        ],
                        [
                            5,
                            61.8
                        ],
                        [
                            6,
                            61.5
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            14,
                            85.8
                        ],
                        [
                            15,
                            86.4
                        ],
                        [
                            17,
                            87
                        ],
                        [
                            18,
                            87
                        ],
                        [
                            20,
                            86.4
                        ],
                        [
                            21,
                            85.8
                        ],
                        [
                            22,
                            84.6
                        ],
                        [
                            23,
                            78.6
                        ],
                        [
                            24,
                            66.6
                        ],
                        [
                            23,
                            63.6
                        ],
                        [
                            22,
                            62.4
                        ],
                        [
                            21,
                            61.8
                        ],
                        [
                            20,
                            61.5
                        ]
                    ]
                }
            },
            {
                position: {
                    x: 13,
                    y: 20
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 3,
                    height: 3,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13,
                    y: 55
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 3,
                    height: 3,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 8,
                    y: 37
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 2,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18,
                    y: 37
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 2,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11,
                    y: 12
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -3,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15,
                    y: 12
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 3,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 8,
                    y: 87
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 6,
                    y: 86.4
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1.5,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4,
                    y: 84.6
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1.5,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 81.6
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3,
                    y: 78.6
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 2.75,
                    y: 75.6
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 2.5,
                    y: 72.6
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 2.25,
                    y: 69.6
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 2,
                    y: 66.6
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18,
                    y: 87
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 20,
                    y: 86.4
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1.5,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22,
                    y: 84.6
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1.5,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22.5,
                    y: 81.6
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 23,
                    y: 78.6
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 23.25,
                    y: 75.6
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 23.5,
                    y: 72.6
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 23.75,
                    y: 69.6
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 24,
                    y: 66.6
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            }
        ]
    },
    {
        title: '밤을 달리다',
        goalY: 248,
        zoomY: 234.5,
        adBoards: [
            {
                x: 11.5,
                y: 12,
                w: 16,
                h: 4
            },
            {
                x: 11.5,
                y: 155,
                w: 16,
                h: 4
            }
        ],
        entities: [
            {
                position: {
                    x: 2,
                    y: 0
                },
                shape: {
                    type: 'box',
                    width: 1,
                    height: 800,
                    rotation: 0,
                    color: '#222',
                    bloomColor: '#777'
                },
                type: 'static',
                props: {
                    density: 500,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                type: 'static',
                position: {
                    x: 21,
                    y: 0
                },
                props: {
                    density: 500,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0,
                    width: 1,
                    height: 800,
                    color: '#222',
                    bloomColor: '#777'
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 25.0
                },
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                type: 'static',
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 1
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 30.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 35.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 40.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.0,
                    y: 25.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.0,
                    y: 30.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.0,
                    y: 35.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.0,
                    y: 40.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 25.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 30.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 35.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 40.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.0,
                    y: 25.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.0,
                    y: 30.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.0,
                    y: 35.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.0,
                    y: 40.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 27.5
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0,
                    color: '#9bec00'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 37.5
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0,
                    color: '#ff6868'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 32.5
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0,
                    color: '#80b3ff'
                },
                props: {
                    density: 2,
                    angularVelocity: 4.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 27.5
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0,
                    color: '#ff6868'
                },
                props: {
                    density: 1,
                    angularVelocity: -2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 37.5
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0,
                    color: '#9bec00'
                },
                props: {
                    density: 1,
                    angularVelocity: -2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 26.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 26.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 26.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 27.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 27.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 27.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 29.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 29.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 29.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.0,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.0,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.0,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.0,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.0,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.0,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 36.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 36.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 36.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 37.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 37.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 37.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 39.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 39.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 39.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 50.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 6.5,
                    height: 0.1,
                    rotation: 0,
                    color: '#5c5470'
                },
                props: {
                    density: 1,
                    angularVelocity: -2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 20.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 20.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 75.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#ff577f'
                },
                props: {
                    density: 1,
                    angularVelocity: -4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 75.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#ff577f'
                },
                props: {
                    density: 1,
                    angularVelocity: 4.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.8,
                    y: 90.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.2,
                    y: 90.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 5.8,
                    y: 92.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17.2,
                    y: 92.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 7.8,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.2,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.8,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.8,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.2,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 5.8,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17.2,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 7.8,
                    y: 98.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.2,
                    y: 98.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.8,
                    y: 100.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 100.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 90.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.0,
                    y: 90.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 92.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 92.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.0,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.0,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.0,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.0,
                    y: 98.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.0,
                    y: 98.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 100.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 100.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 100.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#5c8374'
                },
                props: {
                    density: 1,
                    angularVelocity: -2.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 100.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#5c8374'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.8,
                    y: 104.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.2,
                    y: 104.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 5.8,
                    y: 106.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17.2,
                    y: 106.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 7.8,
                    y: 108.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.2,
                    y: 108.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.8,
                    y: 110.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 110.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.8,
                    y: 108.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.2,
                    y: 108.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 5.8,
                    y: 110.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17.2,
                    y: 110.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 7.8,
                    y: 112.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.2,
                    y: 112.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.8,
                    y: 114.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 114.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 105.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 105.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 107.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 107.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 107.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 107.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.4,
                    color: '#e6176d'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 5
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.4,
                    color: '#e6176d'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 5
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 1.2,
                    color: '#e64588'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 4
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 1.2,
                    color: '#e64588'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 4
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.0,
                    color: '#e673a3'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 3
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.0,
                    color: '#e673a3'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 3
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.8,
                    color: '#e6a1bd'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 2
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.8,
                    color: '#e6a1bd'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 2
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 3.8,
                    color: '#e6cfd8'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 3.8,
                    color: '#e6cfd8'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 120.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.4,
                    color: '#e6176d'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 5
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 120.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 1.2,
                    color: '#e64588'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 4
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 120.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.0,
                    color: '#e673a3'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 3
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 120.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.8,
                    color: '#e6a1bd'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 2
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 120.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 3.8,
                    color: '#e6cfd8'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 130.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#435585'
                },
                props: {
                    density: 1,
                    angularVelocity: 0.25,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 130.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#5c8374'
                },
                props: {
                    density: 1,
                    angularVelocity: -0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 140.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: 30,
                    color: '#610c9f'
                },
                props: {
                    density: 1,
                    angularVelocity: 0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 140.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: -30,
                    color: '#872341'
                },
                props: {
                    density: 1,
                    angularVelocity: -0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 150.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: 60,
                    color: '#503c3c'
                },
                props: {
                    density: 1,
                    angularVelocity: 0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 150.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: -60,
                    color: '#5c5470'
                },
                props: {
                    density: 1,
                    angularVelocity: -0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 160.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: 90,
                    color: '#1a3636'
                },
                props: {
                    density: 1,
                    angularVelocity: 0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 160.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: -90,
                    color: '#522258'
                },
                props: {
                    density: 1,
                    angularVelocity: -0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 180.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 6.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#ccb1b1'
                },
                props: {
                    density: 1,
                    angularVelocity: 4.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 180.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 7.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#b1ccb1'
                },
                props: {
                    density: 1,
                    angularVelocity: -4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 195.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 8.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#b3ccff'
                },
                props: {
                    density: 1,
                    angularVelocity: 5.5,
                    restitution: 0
                }
            }
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bTlP4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FastForwader", ()=>FastForwader);
class FastForwader {
    constructor(){
        this.bound = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        };
        this.isEnabled = false;
        this.icon = new Image();
        this.icon.src = new URL(require("ed6eacbba593253f")).toString();
    }
    get speed() {
        return this.isEnabled ? 2 : 1;
    }
    update(_deltaTime) {}
    render(ctx, _params, width, height) {
        this.bound.w = width / 2;
        this.bound.h = height / 2;
        this.bound.x = this.bound.w / 2;
        this.bound.y = this.bound.h / 2;
        const centerX = this.bound.x + this.bound.w / 2;
        const centerY = this.bound.y + this.bound.h / 2;
        if (this.isEnabled) {
            ctx.save();
            ctx.strokeStyle = 'white';
            ctx.globalAlpha = 0.5;
            ctx.drawImage(this.icon, centerX - 100, centerY - 100, 200, 200);
            ctx.restore();
        }
    }
    getBoundingBox() {
        return this.bound;
    }
    // 영역 밖에서 누르면 mouseHandler 가 undefined 를 넘긴다. 그때도 켜지면 캔버스 어디를 눌러도 2배속이 된다
    onMouseDown(e) {
        this.isEnabled = e !== undefined;
    }
    onMouseUp(_e) {
        this.isEnabled = false;
    }
}

},{"ed6eacbba593253f":"4QZHP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4QZHP":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("ff.f22e3cf2.svg") + "?" + Date.now();

},{}],"jGScz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Marble", ()=>Marble);
var _constants = require("./data/constants");
var _options = require("./options");
var _optionsDefault = parcelHelpers.interopDefault(_options);
var _transformGuard = require("./utils/transformGuard");
var _utils = require("./utils/utils");
var _vector = require("./utils/Vector");
class Marble {
    get position() {
        return this.physics.getMarblePosition(this.id) || {
            x: 0,
            y: 0,
            angle: 0
        };
    }
    get x() {
        return this.position.x;
    }
    set x(v) {
        this.position.x = v;
    }
    get y() {
        return this.position.y;
    }
    set y(v) {
        this.position.y = v;
    }
    get angle() {
        return this.position.angle;
    }
    constructor(physics, order, max, name, weight = 1){
        this.type = 'marble';
        this.name = '';
        this.size = 0.5;
        this.color = 'red';
        this.hue = 0;
        this.impact = 0;
        this.weight = 1;
        this.skill = (0, _constants.Skills).None;
        this.isActive = false;
        this._skillRate = 0.0005;
        this._coolTime = 5000;
        this._maxCoolTime = 5000;
        this._stuckTime = 0;
        this.lastPosition = {
            x: 0,
            y: 0
        };
        this.theme = (0, _constants.Themes).dark;
        this.name = name || `M${order}`;
        this.weight = weight;
        this.physics = physics;
        this._maxCoolTime = 1000 + (1 - this.weight) * 4000;
        this._coolTime = this._maxCoolTime * Math.random();
        this._skillRate = 0.2 * this.weight;
        const maxLine = Math.ceil(max / 10);
        const line = Math.floor(order / 10);
        const lineDelta = -Math.max(0, Math.ceil(maxLine - 5));
        this.hue = 360 / max * order;
        this.color = `hsl(${this.hue} 100% 70%)`;
        this.id = order;
        physics.createMarble(order, 10.25 + order % 10 * 0.6, maxLine - line + lineDelta);
    }
    /**
   * @param deltaTime 벽시계 기준 경과(ms). 스킬 쿨타임 등 연출 시간에 쓴다
   * @param timeScale 이 틱에서 물리가 실제로 진행된 비율(슬로모션이면 1 미만).
   *   정지 판정은 이동 거리로 하므로 물리 시간에 맞춰 문턱을 줄여야 한다. 안 그러면 슬로모션 중
   *   천천히 구르는 구슬이 멈춘 것으로 오판되어 골인 직전에 랜덤으로 튕겨진다
   */ update(deltaTime, timeScale = 1) {
        const stuckThreshold = 0.00001 * timeScale * timeScale;
        if (this.isActive && (0, _vector.Vector).lenSq((0, _vector.Vector).sub(this.lastPosition, this.position)) < stuckThreshold) {
            // 누적에는 timeScale 을 곱하지 않는다. 이건 화면이 굳는 걸 막는 워치독이라 관객 체감 시간이 기준이다.
            // 물리 시간으로 바꾸면 슬로모션이 깊을수록 발동이 늦어지는데, 타겟 구슬이 멈추면 _goalDist 가 고정되어
            // 슬로모션이 풀리지 않으므로 교착을 깨야 할 상황에서 워치독이 오히려 무뎌진다
            this._stuckTime += deltaTime;
            if (this._stuckTime > (0, _constants.STUCK_DELAY)) {
                this.physics.shakeMarble(this.id);
                this._stuckTime = 0;
            }
        } else this._stuckTime = 0;
        this.lastPosition = {
            x: this.position.x,
            y: this.position.y
        };
        this.skill = (0, _constants.Skills).None;
        if (this.impact) this.impact = Math.max(0, this.impact - deltaTime);
        if (!this.isActive) return;
        if ((0, _optionsDefault.default).useSkills) this._updateSkillInformation(deltaTime);
    }
    _updateSkillInformation(deltaTime) {
        if (this._coolTime > 0) this._coolTime -= deltaTime;
        if (this._coolTime <= 0) {
            this.skill = Math.random() < this._skillRate ? (0, _constants.Skills).Impact : (0, _constants.Skills).None;
            this._coolTime = this._maxCoolTime;
        }
    }
    render(ctx, zoom, outline, isMinimap = false, skin, viewPort, theme) {
        this.theme = theme;
        const viewPortHw = viewPort.w / viewPort.zoom / 2;
        const viewPortHh = viewPort.h / viewPort.zoom / 2;
        const viewPortLeft = viewPort.x - viewPortHw;
        const viewPortRight = viewPort.x + viewPortHw;
        const viewPortTop = viewPort.y - viewPortHh;
        const viewPortBottom = viewPort.y + viewPortHh;
        const halfSize = this.size / 2;
        const isOutsideView = this.x + halfSize < viewPortLeft || this.x - halfSize > viewPortRight || this.y + halfSize < viewPortTop || this.y - halfSize > viewPortBottom;
        if (!isMinimap && isOutsideView) return;
        const transform = ctx.getTransform();
        if (isMinimap) this._renderMinimap(ctx);
        else this._renderNormal(ctx, zoom, outline, skin);
        ctx.setTransform(transform);
    }
    _renderMinimap(ctx) {
        ctx.fillStyle = this.color;
        this._drawMarbleBody(ctx, true);
    }
    _drawMarbleBody(ctx, isMinimap) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, isMinimap ? this.size : this.size / 2, 0, Math.PI * 2);
        ctx.fill();
    }
    _renderNormal(ctx, zoom, outline, skin) {
        const hs = this.size / 2;
        ctx.fillStyle = `hsl(${this.hue} 100% ${this.theme.marbleLightness + 25 * Math.min(1, this.impact / 500)}%`;
        // ctx.shadowColor = this.color;
        // ctx.shadowBlur = zoom / 2;
        if (skin) (0, _transformGuard.transformGuard)(ctx, ()=>{
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.drawImage(skin, -hs, -hs, hs * 2, hs * 2);
        });
        else this._drawMarbleBody(ctx, false);
        ctx.shadowColor = '';
        ctx.shadowBlur = 0;
        this._drawName(ctx, zoom);
        if (outline) this._drawOutline(ctx, 2 / zoom);
        if ((0, _optionsDefault.default).useSkills) this._renderCoolTime(ctx, zoom);
    }
    _drawName(ctx, zoom) {
        (0, _transformGuard.transformGuard)(ctx, ()=>{
            ctx.font = `12pt sans-serif`;
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 0;
            ctx.translate(this.x, this.y + 0.25);
            ctx.scale(1 / zoom, 1 / zoom);
            ctx.strokeText(this.name, 0, 0);
            ctx.fillText(this.name, 0, 0);
        });
    }
    _drawOutline(ctx, lineWidth) {
        ctx.beginPath();
        ctx.strokeStyle = this.theme.marbleWinningBorder;
        ctx.lineWidth = lineWidth;
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.stroke();
    }
    _renderCoolTime(ctx, zoom) {
        ctx.strokeStyle = this.theme.coolTimeIndicator;
        ctx.lineWidth = 1 / zoom;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2 + 2 / zoom, (0, _utils.rad)(270), (0, _utils.rad)(270 + 360 * this._coolTime / this._maxCoolTime));
        ctx.stroke();
    }
}

},{"./data/constants":"dKlb7","./options":"jebMA","./utils/transformGuard":"9MbaE","./utils/utils":"ljVDB","./utils/Vector":"3pOEC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9MbaE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformGuard", ()=>transformGuard);
function transformGuard(ctx, func) {
    const originalTransform = ctx.getTransform();
    func(ctx);
    ctx.setTransform(originalTransform);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ljVDB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rad", ()=>rad);
parcelHelpers.export(exports, "parseName", ()=>parseName);
parcelHelpers.export(exports, "pad", ()=>pad);
parcelHelpers.export(exports, "shuffle", ()=>shuffle);
function rad(degree) {
    return Math.PI * degree / 180;
}
function getRegexValue(regex, str) {
    const result = regex.exec(str);
    return result ? result[1] : '';
}
function parseName(nameStr) {
    const weightRegex = /\/(\d+)/;
    const countRegex = /\*(\d+)/;
    const hasWeight = weightRegex.test(nameStr);
    const hasCount = countRegex.test(nameStr);
    const name = getRegexValue(/^\s*([^/*]+)?/, nameStr);
    if (!name) return null;
    const weight = hasWeight ? parseInt(getRegexValue(weightRegex, nameStr), 10) : 1;
    const count = hasCount ? parseInt(getRegexValue(countRegex, nameStr), 10) : 1;
    return {
        name,
        weight,
        count
    };
}
function pad(v) {
    return v.toString().padStart(2, '0');
}
function shuffle(originalArray) {
    const array = originalArray.slice();
    let currentIndex = array.length;
    let randomIndex;
    // While there remain elements to shuffle.
    while(currentIndex !== 0){
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex]
        ];
    }
    return array;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3pOEC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vector", ()=>Vector);
class Vector {
    static sub(v1, v2) {
        return {
            x: v2.x - v1.x,
            y: v2.y - v1.y
        };
    }
    static lenSq(v) {
        return v.x * v.x + v.y * v.y;
    }
    static len(v) {
        return Math.sqrt(Vector.lenSq(v));
    }
    static mul(v, scalar) {
        return {
            x: v.x * scalar,
            y: v.y * scalar
        };
    }
    static add(v1, v2) {
        return {
            x: v1.x + v2.x,
            y: v1.y + v2.y
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5BIBs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MINIMAP_INSET", ()=>MINIMAP_INSET);
parcelHelpers.export(exports, "MINIMAP_WIDTH", ()=>MINIMAP_WIDTH);
parcelHelpers.export(exports, "Minimap", ()=>Minimap);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _constants = require("./data/constants");
var _boundDecorator = require("./utils/bound.decorator");
const MINIMAP_SCALE = 4;
const MINIMAP_UNITS = 26;
const MINIMAP_INSET = 10;
const MINIMAP_WIDTH = MINIMAP_UNITS * MINIMAP_SCALE;
class Minimap {
    constructor(){
        this.lastParams = null;
        this._onViewportChangeHandler = null;
        this.mousePosition = null;
        this.boundingBox = {
            x: MINIMAP_INSET,
            y: MINIMAP_INSET,
            w: MINIMAP_WIDTH,
            h: 0
        };
    }
    getBoundingBox() {
        return this.boundingBox;
    }
    onViewportChange(callback) {
        this._onViewportChangeHandler = callback;
    }
    update() {
    // nothing to do
    }
    onMouseMove(e) {
        if (!e) {
            this.mousePosition = null;
            if (this._onViewportChangeHandler) this._onViewportChangeHandler();
            return;
        }
        if (!this.lastParams) return;
        this.mousePosition = {
            x: e.x,
            y: e.y
        };
        if (this._onViewportChangeHandler) this._onViewportChangeHandler({
            x: this.mousePosition.x / 4,
            y: this.mousePosition.y / 4
        });
    }
    render(ctx, params) {
        if (!ctx) return;
        const { stage } = params;
        if (!stage) return;
        this.boundingBox.h = stage.goalY * MINIMAP_SCALE;
        this.lastParams = params;
        this.ctx = ctx;
        ctx.save();
        ctx.fillStyle = params.theme.minimapBackground;
        ctx.translate(MINIMAP_INSET, MINIMAP_INSET);
        ctx.beginPath();
        ctx.roundRect(0, 0, MINIMAP_WIDTH, this.boundingBox.h, 18);
        ctx.clip();
        ctx.scale(MINIMAP_SCALE, MINIMAP_SCALE);
        ctx.fillRect(0, 0, MINIMAP_UNITS, stage.goalY);
        this.ctx.lineWidth = 3 / (params.camera.zoom + (0, _constants.initialZoom));
        this.drawEntities(params.entities, params.theme);
        this.drawMarbles(params);
        this.drawViewport(params);
        ctx.restore();
    }
    drawViewport(params) {
        this.ctx.save();
        const { camera, size } = params;
        const zoom = camera.zoom * (0, _constants.initialZoom);
        const w = size.x / zoom;
        const h = size.y / zoom;
        this.ctx.strokeStyle = params.theme.minimapViewport;
        this.ctx.lineWidth = 1 / zoom;
        this.ctx.strokeRect(camera.x - w / 2, camera.y - h / 2, w, h);
        this.ctx.restore();
    }
    drawEntities(entities, theme) {
        this.ctx.save();
        entities.forEach((entity)=>{
            this.ctx.save();
            this.ctx.fillStyle = entity.shape.color ?? theme.entity[entity.shape.type].fill;
            this.ctx.strokeStyle = entity.shape.color ?? theme.entity[entity.shape.type].outline;
            this.ctx.translate(entity.x, entity.y);
            this.ctx.rotate(entity.angle);
            this.ctx.save();
            const shape = entity.shape;
            switch(shape.type){
                case 'box':
                    {
                        const w = shape.width * 2;
                        const h = shape.height * 2;
                        this.ctx.rotate(shape.rotation);
                        this.ctx.fillRect(-w / 2, -h / 2, w, h);
                        break;
                    }
                case 'circle':
                    this.ctx.beginPath();
                    this.ctx.arc(0, 0, shape.radius, 0, Math.PI * 2, false);
                    this.ctx.stroke();
                    break;
                case 'polyline':
                    if (shape.points.length > 0) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(shape.points[0][0], shape.points[0][1]);
                        for(let i = 1; i < shape.points.length; i++)this.ctx.lineTo(shape.points[i][0], shape.points[i][1]);
                        this.ctx.stroke();
                    }
                    break;
            }
            this.ctx.restore();
            this.ctx.restore();
        });
        this.ctx.restore();
    }
    drawMarbles(params) {
        const { marbles } = params;
        const viewPort = {
            x: params.camera.x,
            y: params.camera.y,
            w: params.size.x,
            h: params.size.y,
            zoom: params.camera.zoom * (0, _constants.initialZoom)
        };
        marbles.forEach((marble)=>{
            marble.render(this.ctx, 1, false, true, undefined, viewPort, params.theme);
        });
    }
}
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], Minimap.prototype, "onMouseMove", null);

},{"@swc/helpers/_/_ts_decorate":"aPTou","./data/constants":"dKlb7","./utils/bound.decorator":"auTxm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"auTxm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bound", ()=>bound);
function bound(_target, propertyKey, descriptor) {
    return {
        configurable: true,
        get () {
            const boundMethod = descriptor.value?.bind(this);
            Object.defineProperty(this, propertyKey, {
                value: boundMethod,
                configurable: true,
                writable: true
            });
            return boundMethod;
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7yEm2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParticleManager", ()=>ParticleManager);
var _particle = require("./particle");
class ParticleManager {
    update(deltaTime) {
        this._particles.forEach((particle)=>{
            particle.update(deltaTime);
        });
        this._particles = this._particles.filter((particle)=>!particle.isDestroy);
    }
    render(ctx) {
        this._particles.forEach((particle)=>particle.render(ctx));
    }
    shot(x, y) {
        for(let i = 0; i < 200; i++)this._particles.push(new (0, _particle.Particle)(x, y));
    }
    constructor(){
        this._particles = [];
    }
}

},{"./particle":"1fdhA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1fdhA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Particle", ()=>Particle);
var _utils = require("./utils/utils");
var _vector = require("./utils/Vector");
const lifetime = 3000;
class Particle {
    constructor(x, y){
        this._elapsed = 0;
        this.position = {
            x: 0,
            y: 0
        };
        this.force = {
            x: 0,
            y: 0
        };
        this.color = '';
        this.isDestroy = false;
        this.position.x = x;
        this.position.y = y;
        const force = Math.random() * 250;
        const ang = (0, _utils.rad)(90 * Math.random() - 180);
        const fx = Math.cos(ang) * force;
        const fy = Math.sin(ang) * force;
        this.color = `hsl(${Math.random() * 360} 50% 50%)`;
        this.force = {
            x: fx,
            y: fy
        };
    }
    update(deltaTime) {
        this._elapsed += deltaTime;
        const delta = (0, _vector.Vector).mul(this.force, deltaTime / 100);
        this.position = (0, _vector.Vector).add(this.position, delta);
        this.force.y += 10 * deltaTime / 100;
        if (this._elapsed > lifetime) this.isDestroy = true;
    }
    render(ctx) {
        ctx.save();
        ctx.globalAlpha = 1 - (this._elapsed / lifetime) ** 2;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, 20, 20);
        ctx.restore();
    }
}

},{"./utils/utils":"ljVDB","./utils/Vector":"3pOEC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"Agzxl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Box2dPhysics", ()=>Box2dPhysics);
var _box2DWasm = require("box2d-wasm");
var _box2DWasmDefault = parcelHelpers.interopDefault(_box2DWasm);
class Box2dPhysics {
    async init() {
        this.Box2D = await (0, _box2DWasmDefault.default)();
        this.gravity = new this.Box2D.b2Vec2(0, 10);
        this.world = new this.Box2D.b2World(this.gravity);
        console.log('box2d ready');
    }
    clear() {
        this.clearEntities();
    }
    clearMarbles() {
        Object.values(this.marbleMap).forEach((body)=>{
            this.world.DestroyBody(body);
        });
        this.marbleMap = {};
    }
    createStage(stage) {
        this.createEntities(stage.entities);
    }
    createEntities(entities) {
        if (!entities) return;
        const bodyTypes = {
            static: this.Box2D.b2_staticBody,
            kinematic: this.Box2D.b2_kinematicBody
        };
        entities.forEach((entity)=>{
            const bodyDef = new this.Box2D.b2BodyDef();
            bodyDef.set_type(bodyTypes[entity.type]);
            const body = this.world.CreateBody(bodyDef);
            const fixtureDef = new this.Box2D.b2FixtureDef();
            fixtureDef.set_density(entity.props.density);
            fixtureDef.set_restitution(entity.props.restitution);
            let shape;
            switch(entity.shape.type){
                case 'box':
                    shape = new this.Box2D.b2PolygonShape();
                    shape.SetAsBox(entity.shape.width, entity.shape.height, 0, entity.shape.rotation);
                    fixtureDef.set_shape(shape);
                    body.CreateFixture(fixtureDef);
                    break;
                case 'polyline':
                    shape = new this.Box2D.b2EdgeShape();
                    for(let i = 0; i < entity.shape.points.length - 1; i++){
                        const p1 = entity.shape.points[i];
                        const p2 = entity.shape.points[i + 1];
                        const v1 = new this.Box2D.b2Vec2(p1[0], p1[1]);
                        const v2 = new this.Box2D.b2Vec2(p2[0], p2[1]);
                        const edge = new this.Box2D.b2EdgeShape();
                        edge.SetTwoSided(v1, v2);
                        body.CreateFixture(edge, 1);
                    }
                    break;
                case 'circle':
                    shape = new this.Box2D.b2CircleShape();
                    shape.set_m_radius(entity.shape.radius);
                    fixtureDef.set_shape(shape);
                    body.CreateFixture(fixtureDef);
                    break;
            }
            body.SetAngularVelocity(entity.props.angularVelocity);
            body.SetTransform(new this.Box2D.b2Vec2(entity.position.x, entity.position.y), 0);
            this.entities.push({
                body,
                x: entity.position.x,
                y: entity.position.y,
                angle: 0,
                shape: entity.shape,
                life: entity.props.life ?? -1
            });
        });
    }
    clearEntities() {
        this.entities.forEach((entity)=>{
            this.world.DestroyBody(entity.body);
        });
        this.entities = [];
    }
    createMarble(id, x, y) {
        const circleShape = new this.Box2D.b2CircleShape();
        circleShape.set_m_radius(0.25);
        const bodyDef = new this.Box2D.b2BodyDef();
        bodyDef.set_type(this.Box2D.b2_dynamicBody);
        bodyDef.set_position(new this.Box2D.b2Vec2(x, y));
        const body = this.world.CreateBody(bodyDef);
        body.CreateFixture(circleShape, 1 + Math.random());
        body.SetAwake(false);
        body.SetEnabled(false);
        this.marbleMap[id] = body;
    }
    shakeMarble(id) {
        const body = this.marbleMap[id];
        if (body) body.ApplyLinearImpulseToCenter(new this.Box2D.b2Vec2(Math.random() * 10 - 5, Math.random() * 10 - 5), true);
    }
    removeMarble(id) {
        const marble = this.marbleMap[id];
        if (marble) {
            this.world.DestroyBody(marble);
            delete this.marbleMap[id];
        }
    }
    getMarblePosition(id) {
        const marble = this.marbleMap[id];
        if (marble) {
            const pos = marble.GetPosition();
            return {
                x: pos.x,
                y: pos.y,
                angle: marble.GetAngle()
            };
        } else return {
            x: 0,
            y: 0,
            angle: 0
        };
    }
    getEntities() {
        return this.entities.map((entity)=>{
            return {
                ...entity,
                angle: entity.body.GetAngle()
            };
        });
    }
    impact(id) {
        const src = this.marbleMap[id];
        if (!src) return;
        Object.values(this.marbleMap).forEach((body)=>{
            if (body === src) return;
            const distVector = new this.Box2D.b2Vec2(body.GetPosition().x, body.GetPosition().y);
            distVector.op_sub(src.GetPosition());
            const distSq = distVector.LengthSquared();
            if (distSq < 100) {
                distVector.Normalize();
                const power = 1 - distVector.Length() / 10;
                distVector.op_mul(power * power * 5);
                body.ApplyLinearImpulseToCenter(distVector, true);
            }
        });
    }
    start() {
        for(const key in this.marbleMap){
            const marble = this.marbleMap[key];
            marble.SetAwake(true);
            marble.SetEnabled(true);
        }
    }
    step(deltaSeconds) {
        this.deleteCandidates.forEach((body)=>{
            this.world.DestroyBody(body);
        });
        this.deleteCandidates = [];
        this.world.Step(deltaSeconds, 6, 2);
        for(let i = this.entities.length - 1; i >= 0; i--){
            const entity = this.entities[i];
            if (entity.life > 0) {
                const edge = entity.body.GetContactList();
                if (edge.contact?.IsTouching()) {
                    this.deleteCandidates.push(entity.body);
                    this.entities.splice(i, 1);
                }
            }
        }
    }
    constructor(){
        this.marbleMap = {};
        this.entities = [];
        this.deleteCandidates = [];
    }
}

},{"box2d-wasm":"21GKF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"21GKF":[function(require,module,exports,__globalThis) {
/**
 * @param {Parameters<import('box2d-wasm')>} args
 * @return {ReturnType<import('box2d-wasm')>}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = async (...args)=>{
    /**
   * This validation expression comes from wasm-feature-detect:
   * https://github.com/GoogleChromeLabs/wasm-feature-detect
   * 
   * Copyright 2019 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *     http://www.apache.org/licenses/LICENSE-2.0
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const hasSIMD = WebAssembly.validate(new Uint8Array([
        0,
        97,
        115,
        109,
        1,
        0,
        0,
        0,
        1,
        5,
        1,
        96,
        0,
        1,
        123,
        3,
        2,
        1,
        0,
        10,
        10,
        1,
        8,
        0,
        65,
        0,
        253,
        15,
        253,
        98,
        11
    ]));
    /** @type {{ 'default': import('box2d-wasm') }} */ const Box2DModule = await (hasSIMD ? require("1c9c9cecb712db83") : require("1131b71228caeef3"));
    const { 'default': Box2DFactory } = Box2DModule;
    // awaiting gives us a better stack trace (at the cost of an extra microtask)
    return await Box2DFactory(...args);
};

},{"1c9c9cecb712db83":"P2Zvm","1131b71228caeef3":"4bXPM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"P2Zvm":[function(require,module,exports,__globalThis) {
module.exports = import("./Box2D.simd.7cdb49ce.js").then(()=>module.bundle.root('1SQho'));

},{"1SQho":"1SQho"}],"4bXPM":[function(require,module,exports,__globalThis) {
module.exports = import("./Box2D.a070c79d.js").then(()=>module.bundle.root('66ig1'));

},{"66ig1":"66ig1"}],"ewQVA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RankRenderer", ()=>RankRenderer);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _boundDecorator = require("./utils/bound.decorator");
class RankRenderer {
    onWheel(e) {
        this._targetY += e.deltaY;
        if (this._targetY > this.maxY) this._targetY = this.maxY;
        this._userMoved = 2000;
    }
    onDblClick(e) {
        if (e) {
            if (navigator.clipboard) {
                const tsv = [];
                let rank = 0;
                tsv.push(...[
                    ...this.winners,
                    ...this.marbles
                ].map((m)=>{
                    rank++;
                    return [
                        rank.toString(),
                        m.name,
                        this.isWinningRank(rank - 1) ? "\u2606" : ''
                    ].join('\t');
                }));
                tsv.unshift([
                    'Rank',
                    'Name',
                    'Winner'
                ].join('\t'));
                navigator.clipboard.writeText(tsv.join('\n')).then(()=>{
                    if (this.messageHandler) this.messageHandler('The result has been copied');
                });
            }
        }
    }
    isWinningRank(rank) {
        return rank >= this.winnerRange.start && rank <= this.winnerRange.end;
    }
    onMessage(func) {
        this.messageHandler = func;
    }
    render(ctx, { winners, marbles, winnerRange, theme }, width, height) {
        this.maxY = Math.max(0, (marbles.length + winners.length) * this.fontHeight + this.fontHeight);
        const panelX = width - 238;
        const panelY = 12;
        const panelW = 226;
        const panelH = Math.min(height - 24, Math.max(64, this.maxY + this.fontHeight * 2 + 12));
        const startX = panelX + 48;
        const startY = Math.max(-this.fontHeight, this._currentY - height / 2);
        this._currentWinner = winners.length;
        this.winners = winners;
        this.marbles = marbles;
        this.winnerRange = winnerRange;
        ctx.save();
        ctx.shadowColor = 'rgba(92, 69, 12, 0.12)';
        ctx.shadowBlur = 18;
        ctx.fillStyle = 'rgba(255, 254, 242, 0.96)';
        ctx.beginPath();
        ctx.roundRect(panelX, panelY, panelW, panelH, 24);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.strokeStyle = 'rgba(211, 169, 45, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.textAlign = 'left';
        ctx.font = 'bold 11pt sans-serif';
        ctx.fillStyle = '#403a2f';
        ctx.fillText("\uBAA9\uB85D", panelX + 16, panelY + 23);
        ctx.textAlign = 'right';
        ctx.font = 'bold 8pt sans-serif';
        ctx.fillStyle = '#9a8d75';
        ctx.fillText(`${winners.length + marbles.length} PLAYERS`, panelX + panelW - 16, panelY + 22);
        ctx.strokeStyle = 'rgba(211, 169, 45, 0.25)';
        ctx.beginPath();
        ctx.moveTo(panelX + 14, panelY + 34);
        ctx.lineTo(panelX + panelW - 14, panelY + 34);
        ctx.stroke();
        ctx.beginPath();
        ctx.rect(panelX + 10, panelY + 34, panelW - 20, panelH - 42);
        ctx.clip();
        ctx.translate(0, -startY);
        const listTop = panelY + 53;
        if (winnerRange.end > winnerRange.start) {
            ctx.fillStyle = 'rgba(255, 215, 0, 0.15)';
            const bandY = listTop + winnerRange.start * this.fontHeight - this.fontHeight / 2;
            const bandH = (winnerRange.end - winnerRange.start + 1) * this.fontHeight;
            ctx.fillRect(panelX + 8, bandY, panelW - 16, bandH);
            ctx.fillStyle = 'rgba(255, 215, 0, 0.8)';
            ctx.fillRect(panelX + 8, bandY, 3, bandH);
        }
        ctx.font = 'bold 10pt sans-serif';
        winners.forEach((marble, rank)=>{
            const y = rank * this.fontHeight;
            if (y >= startY && y <= startY + ctx.canvas.height) {
                ctx.fillStyle = '#d59e00';
                ctx.textAlign = 'center';
                ctx.fillText(`${rank + 1}`, panelX + 25, listTop + y);
                ctx.fillStyle = `hsl(${marble.hue} 65% 32%)`;
                ctx.textAlign = 'left';
                ctx.fillText(marble.name, startX, listTop + y);
            }
        });
        ctx.font = '9.5pt sans-serif';
        marbles.forEach((marble, rank)=>{
            const y = (rank + winners.length) * this.fontHeight;
            if (y >= startY && y <= startY + ctx.canvas.height) {
                const displayRank = rank + 1 + winners.length;
                ctx.fillStyle = '#b9a990';
                ctx.textAlign = 'center';
                ctx.fillText(`${displayRank}`, panelX + 25, listTop + y);
                ctx.fillStyle = `hsl(${marble.hue} 45% 34%)`;
                ctx.textAlign = 'left';
                ctx.fillText(marble.name, startX, listTop + y);
            }
        });
        ctx.restore();
    }
    update(deltaTime) {
        if (this._currentWinner === -1) return;
        if (this._userMoved > 0) this._userMoved -= deltaTime;
        else this._targetY = this._currentWinner * this.fontHeight + this.fontHeight;
        if (this._currentY !== this._targetY) this._currentY += (this._targetY - this._currentY) * (deltaTime / 250);
        if (Math.abs(this._currentY - this._targetY) < 1) this._currentY = this._targetY;
    }
    getBoundingBox() {
        return null;
    }
    constructor(){
        this._currentY = 0;
        this._targetY = 0;
        this.fontHeight = 16;
        this._userMoved = 0;
        this._currentWinner = -1;
        this.maxY = 0;
        this.winners = [];
        this.marbles = [];
        this.winnerRange = {
            start: 0,
            end: 0
        };
    }
}
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], RankRenderer.prototype, "onWheel", null);
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], RankRenderer.prototype, "onDblClick", null);

},{"@swc/helpers/_/_ts_decorate":"aPTou","./utils/bound.decorator":"auTxm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kaELn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RouletteRenderer", ()=>RouletteRenderer);
var _adRenderer = require("./adRenderer");
var _constants = require("./data/constants");
var _keywordService = require("./keywordService");
var _minimap = require("./minimap");
const MAX_DISPLAY_WIDTH = 1920;
const RESULT_PANEL_MAX_WIDTH_RATIO = 0.9;
const RESULT_PANEL_MAX_HEIGHT_RATIO = 0.8;
const RESULT_COLUMN_MAX_WIDTH = 280;
const PROGRESS_MAX_WIDTH_RATIO = 0.3;
const PROGRESS_ACCENT = 'rgba(255, 215, 0, 0.8)';
function inRect(rect, x, y) {
    return !!rect && x >= rect.x && x <= rect.x + rect.w && y >= rect.y && y <= rect.y + rect.h;
}
class RouletteRenderer {
    constructor(){
        this.sizeFactor = 1;
        this._images = {};
        this._theme = (0, _constants.Themes).dark;
        this._ad = null;
        this._adImageCache = new Map();
        this._adOverlay = null;
        this._resultCloseRect = null;
        this._resultPopupClosed = false;
        this._lastResult = null;
        this._keywordService = this.createKeywordService();
    }
    createKeywordService() {
        return new (0, _keywordService.KeywordService)();
    }
    get width() {
        return this._sceneCanvas.width;
    }
    get height() {
        return this._sceneCanvas.height;
    }
    get canvas() {
        return this._canvas;
    }
    set theme(value) {
        this._theme = value;
    }
    async init() {
        await this._load();
        this._canvas = document.createElement('canvas');
        this._canvas.width = (0, _constants.canvasWidth);
        this._canvas.height = (0, _constants.canvasHeight);
        this._displayCtx = this._canvas.getContext('2d', {
            alpha: false
        });
        this._sceneCanvas = document.createElement('canvas');
        this._sceneCanvas.width = (0, _constants.canvasWidth);
        this._sceneCanvas.height = (0, _constants.canvasHeight);
        this.ctx = this._sceneCanvas.getContext('2d', {
            alpha: false
        });
        document.body.appendChild(this._canvas);
        const resizing = (entries)=>{
            const realSize = entries ? entries[0].contentRect : this._canvas.getBoundingClientRect();
            if (realSize.width <= 0 || realSize.height <= 0) return;
            const width = Math.max(realSize.width / 2, 640);
            const height = width / realSize.width * realSize.height;
            this._sceneCanvas.width = width;
            this._sceneCanvas.height = height;
            this.sizeFactor = width / realSize.width;
            const displayWidth = Math.min(realSize.width, MAX_DISPLAY_WIDTH);
            this._canvas.width = displayWidth;
            this._canvas.height = displayWidth / realSize.width * realSize.height;
        };
        const resizeObserver = new ResizeObserver(resizing);
        resizeObserver.observe(this._canvas);
        resizing();
    }
    async _loadImage(url) {
        return new Promise((rs)=>{
            const img = new Image();
            img.addEventListener('load', ()=>{
                rs(img);
            });
            img.src = url;
        });
    }
    async _load() {
        const characterUrls = [
            new URL(require("c0c1887b1ea69cc3")),
            new URL(require("fc016d8eb42d31da")),
            new URL(require("89b7b376bd289f37")),
            new URL(require("2b91b9f9834811f3")),
            new URL(require("a43dadcfce6bbba2")),
            new URL(require("ee20d9eb13dff961")),
            new URL(require("edef7fa2b24240c0"))
        ];
        const loadPromises = characterUrls.map((url, index)=>{
            return (async ()=>{
                this._images[`htvvi-${index + 1}`] = await this._loadImage(url.toString());
            })();
        });
        loadPromises.push((async ()=>{
            await this._loadImage(new URL(require("3c1155060c04461c")).toString());
        })());
        await Promise.all(loadPromises);
    }
    getMarbleImage(marble) {
        return this._images[`htvvi-${marble.id % 7 + 1}`];
    }
    onBeforeEntities() {}
    onAfterScene() {}
    setAd(ad) {
        this._ad = ad;
        if (!ad) return;
        this.preloadAdImages([
            ...Object.values(ad.creatives),
            ad.qrImage
        ]);
    }
    /** 소재를 미리 받아둔다. 여기서 만든 엘리먼트를 나중에 그대로 그리므로 캐시 헤더와 무관하게 즉시 뜬다 */ preloadAdImages(srcs) {
        for (const src of srcs)if (src) this.cacheAdImage(src);
    }
    adImage(src) {
        return src ? this._adImageCache.get(src) : undefined;
    }
    cacheAdImage(src) {
        const cached = this._adImageCache.get(src);
        if (cached) return cached;
        const el = new Image();
        el.crossOrigin = 'anonymous';
        el.src = src;
        this._adImageCache.set(src, el);
        return el;
    }
    showAdOverlay(mode) {
        if (!this._ad || !this._ad.slots?.includes(mode)) return;
        this._adOverlay = {
            mode,
            ad: this._ad,
            since: performance.now(),
            endingSince: undefined
        };
    }
    getAdHitAt(x, y) {
        const overlay = this._adOverlay;
        if (!overlay || overlay.endingSince !== undefined) return null;
        if (inRect(overlay.closeRect, x, y)) return {
            type: 'close'
        };
        const link = overlay.ad.linkUrl;
        if (link && inRect(overlay.clickRect, x, y)) return {
            type: 'link',
            url: link
        };
        return null;
    }
    hideAdOverlay() {
        if (this._adOverlay && this._adOverlay.endingSince === undefined) this._adOverlay.endingSince = performance.now();
    }
    renderAdOverlay(renderParameters) {
        const overlay = this._adOverlay;
        if (!overlay) return;
        if (overlay.mode === 'result' && !renderParameters.result) this.hideAdOverlay();
        const scale = this._canvas.width / this._sceneCanvas.width;
        try {
            this._displayCtx.save();
            this._displayCtx.scale(scale, scale);
            const alive = (0, _adRenderer.drawAdOverlay)(this._displayCtx, this._sceneCanvas.width, this._sceneCanvas.height, overlay, {
                preroll: this.adImage(overlay.ad.creatives.preroll),
                result: this.adImage(overlay.ad.creatives.result),
                qr: this.adImage(overlay.ad.qrImage)
            });
            this._displayCtx.restore();
            if (!alive) this._adOverlay = null;
        } catch (e) {
            this._displayCtx.restore();
            console.error("[ads] \uC624\uBC84\uB808\uC774 \uB80C\uB354\uB9C1 \uC2E4\uD328, \uC774\uBC88 \uB178\uCD9C\uC740 \uAC74\uB108\uB701\uB2C8\uB2E4", e);
            this._adOverlay = null;
        }
    }
    renderAdBoards(stage) {
        const ad = this._ad;
        if (!ad || !ad.slots?.includes('goal') || !stage.adBoards?.length) return;
        const img = this.adImage(ad.creatives.goal);
        if (!img?.complete || img.naturalWidth === 0) return;
        try {
            this.ctx.save();
            for (const board of stage.adBoards){
                const w = board.w ?? 4;
                const h = board.h ?? 1;
                const x = board.x - w / 2;
                const y = board.y - h / 2;
                this.ctx.drawImage(img, x, y, w, h);
            }
        } catch (e) {
            console.error("[ads] \uAD11\uACE0\uD310 \uB80C\uB354\uB9C1 \uC2E4\uD328, \uC774\uBC88 \uAC8C\uC7AC\uB294 \uAC74\uB108\uB701\uB2C8\uB2E4", e);
            this._ad = null;
        } finally{
            this.ctx.restore();
        }
    }
    render(renderParameters, uiObjects) {
        this._theme = renderParameters.theme;
        this.ctx.fillStyle = this._theme.background;
        this.ctx.fillRect(0, 0, this._sceneCanvas.width, this._sceneCanvas.height);
        this.ctx.save();
        this.ctx.scale((0, _constants.initialZoom), (0, _constants.initialZoom));
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'top';
        this.ctx.font = '0.4pt sans-serif';
        this.ctx.lineWidth = 3 / (renderParameters.camera.zoom + (0, _constants.initialZoom));
        renderParameters.camera.renderScene(this.ctx, ()=>{
            this.renderAdBoards(renderParameters.stage);
            this.onBeforeEntities();
            this.renderEntities(renderParameters.entities);
            this.renderEffects(renderParameters);
            this.renderMarbles(renderParameters);
        });
        this.ctx.restore();
        this.onAfterScene();
        uiObjects.forEach((obj)=>obj.render(this.ctx, renderParameters, this._sceneCanvas.width, this._sceneCanvas.height));
        renderParameters.particleManager.render(this.ctx);
        this.renderWinnerProgress(renderParameters);
        this.renderResult(renderParameters);
        this._displayCtx.drawImage(this._sceneCanvas, 0, 0, this._canvas.width, this._canvas.height);
        this.renderAdOverlay(renderParameters);
    }
    renderEntities(entities) {
        this.ctx.save();
        entities.forEach((entity)=>{
            const transform = this.ctx.getTransform();
            this.ctx.translate(entity.x, entity.y);
            this.ctx.rotate(entity.angle);
            this.ctx.fillStyle = entity.shape.color ?? this._theme.entity[entity.shape.type].fill;
            this.ctx.strokeStyle = entity.shape.color ?? this._theme.entity[entity.shape.type].outline;
            this.ctx.shadowBlur = this._theme.entity[entity.shape.type].bloomRadius;
            this.ctx.shadowColor = entity.shape.bloomColor ?? entity.shape.color ?? this._theme.entity[entity.shape.type].bloom;
            const shape = entity.shape;
            switch(shape.type){
                case 'polyline':
                    if (shape.points.length > 0) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(shape.points[0][0], shape.points[0][1]);
                        for(let i = 1; i < shape.points.length; i++)this.ctx.lineTo(shape.points[i][0], shape.points[i][1]);
                        this.ctx.stroke();
                    }
                    break;
                case 'box':
                    {
                        const w = shape.width * 2;
                        const h = shape.height * 2;
                        this.ctx.rotate(shape.rotation);
                        this.ctx.fillRect(-w / 2, -h / 2, w, h);
                        this.ctx.strokeRect(-w / 2, -h / 2, w, h);
                        break;
                    }
                case 'circle':
                    this.ctx.beginPath();
                    this.ctx.arc(0, 0, shape.radius, 0, Math.PI * 2, false);
                    this.ctx.stroke();
                    break;
            }
            this.ctx.setTransform(transform);
        });
        this.ctx.restore();
    }
    renderEffects({ effects, camera }) {
        effects.forEach((effect)=>effect.render(this.ctx, camera.zoom * (0, _constants.initialZoom), this._theme));
    }
    renderMarbles({ marbles, camera, winnerRange, winners, size }) {
        const firstIndex = winnerRange.start - winners.length;
        const lastIndex = winnerRange.end - winners.length;
        const viewPort = {
            x: camera.x,
            y: camera.y,
            w: size.x,
            h: size.y,
            zoom: camera.zoom * (0, _constants.initialZoom)
        };
        marbles.forEach((marble, i)=>{
            marble.render(this.ctx, camera.zoom * (0, _constants.initialZoom), i >= firstIndex && i <= lastIndex, false, this.getMarbleImage(marble), viewPort, this._theme);
        });
    }
    renderResult(params) {
        const result = params.result;
        // 새 결과가 나오면(또는 리셋되면) 닫힘 상태를 푼다. _result는 확정될 때마다 새 배열이다
        if (result !== this._lastResult) {
            this._lastResult = result;
            this._resultPopupClosed = false;
        }
        this._resultCloseRect = null;
        if (!result) return;
        // 1명이면 기존 하단 Winner 표시, 여러명이면 화면 중앙 당첨자 목록 팝업
        if (result.length === 1) this.renderWinner(result[0], params.theme);
        else if (!this._resultPopupClosed) this.renderWinnerList(result, params);
    }
    /** 결과 팝업 닫기 버튼을 눌렀는지 */ getResultCloseHitAt(x, y) {
        return inRect(this._resultCloseRect ?? undefined, x, y);
    }
    closeResultPopup() {
        this._resultPopupClosed = true;
    }
    /**
   * 여러명 모드에서 확정된 당첨자를 좌측 상단에 상시 표시한다.
   * 우측은 랭킹 리스트가 구슬 수만큼 내려오므로 겹친다. 좌측은 미니맵이 세로로 긴
   * 스트립이라 그 오른쪽에 붙인다.
   */ renderWinnerProgress({ winners, winnerRange, result, theme }) {
        const { start, end } = winnerRange;
        if (end <= start) return; // 1명 추첨은 기존 하단 Winner 표시를 쓴다
        const ctx = this.ctx;
        const w = this._sceneCanvas.width;
        const h = this._sceneCanvas.height;
        const lineHeight = Math.min(24, Math.max(14, h * 0.042));
        const pad = lineHeight * 0.6;
        const rankWidth = lineHeight * 1.9;
        const headerFont = `bold ${lineHeight * 0.7}px sans-serif`;
        const rankFont = `${lineHeight * 0.6}px sans-serif`;
        const nameFont = `bold ${lineHeight * 0.72}px sans-serif`;
        // 확정 전에는 골인한 당첨자만, 확정 후에는 최종 명단(조기 확정분 포함)을 쓴다
        const confirmed = result ?? winners.slice(start, end + 1);
        const header = `Winners ${confirmed.length} / ${end - start + 1}`;
        // 화면을 넘기면 오래된 쪽을 접는다. 전체 명단은 어차피 중앙 팝업에서 보여준다
        const maxRows = Math.max(1, Math.floor(h * 0.55 / lineHeight) - 2);
        const hidden = Math.max(0, confirmed.length - maxRows);
        const shown = confirmed.slice(hidden);
        const foldLabel = `+${hidden} more`;
        ctx.save();
        ctx.font = headerFont;
        let contentW = ctx.measureText(header).width;
        ctx.font = nameFont;
        for (const marble of shown)contentW = Math.max(contentW, rankWidth + ctx.measureText(marble.name).width);
        if (hidden > 0) {
            ctx.font = rankFont;
            contentW = Math.max(contentW, ctx.measureText(foldLabel).width);
        }
        const panelW = Math.min(contentW + pad * 2, w * PROGRESS_MAX_WIDTH_RATIO);
        const rows = shown.length + (hidden > 0 ? 1 : 0);
        // 헤더와 목록 사이 간격은 목록이 있을 때만 준다. 항상 주면 당첨자가 없을 때
        // 아래쪽에만 빈 공간이 남아 위아래 여백이 어긋난다
        const headerGap = rows > 0 ? lineHeight * 0.35 : 0;
        const panelH = pad * 2 + lineHeight + headerGap + rows * lineHeight;
        const panelX = (0, _minimap.MINIMAP_INSET) + (0, _minimap.MINIMAP_WIDTH) + pad;
        const panelY = (0, _minimap.MINIMAP_INSET); // 미니맵 상단과 맞춘다
        ctx.fillStyle = theme.winnerBackground;
        ctx.fillRect(panelX, panelY, panelW, panelH);
        ctx.strokeStyle = PROGRESS_ACCENT;
        ctx.lineWidth = 2;
        ctx.strokeRect(panelX, panelY, panelW, panelH);
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'left';
        ctx.font = headerFont;
        ctx.fillStyle = theme.winnerText;
        ctx.fillText(header, panelX + pad, panelY + pad + lineHeight / 2);
        let y = panelY + pad + lineHeight + headerGap + lineHeight / 2;
        if (hidden > 0) {
            ctx.font = rankFont;
            ctx.fillStyle = theme.winnerText;
            ctx.fillText(foldLabel, panelX + pad, y);
            y += lineHeight;
        }
        shown.forEach((marble, i)=>{
            ctx.save();
            ctx.beginPath();
            ctx.rect(panelX, y - lineHeight / 2, panelW, lineHeight);
            ctx.clip();
            ctx.font = rankFont;
            ctx.fillStyle = theme.winnerText;
            ctx.fillText(`#${start + hidden + i + 1}`, panelX + pad, y);
            ctx.font = nameFont;
            ctx.fillStyle = `hsl(${marble.hue} 100% ${theme.marbleLightness}%)`;
            ctx.fillText(marble.name, panelX + pad + rankWidth, y);
            ctx.restore();
            y += lineHeight;
        });
        ctx.restore();
    }
    /** 당첨자가 여러명일 때 화면 중앙에 목록 팝업을 그린다 */ renderWinnerList(winners, { theme, winnerRange }) {
        const ctx = this.ctx;
        const w = this._sceneCanvas.width;
        const h = this._sceneCanvas.height;
        const lineHeight = Math.min(32, Math.max(16, h * 0.05));
        const padding = lineHeight;
        const titleHeight = lineHeight * 2;
        // 세로로 다 안 들어가면 열을 늘린다
        const maxRows = Math.max(1, Math.floor((h * RESULT_PANEL_MAX_HEIGHT_RATIO - titleHeight - padding * 2) / lineHeight));
        const cols = Math.max(1, Math.ceil(winners.length / maxRows));
        const rows = Math.ceil(winners.length / cols);
        const colWidth = Math.min(RESULT_COLUMN_MAX_WIDTH, (w * RESULT_PANEL_MAX_WIDTH_RATIO - padding * 2) / cols);
        const panelW = colWidth * cols + padding * 2;
        const panelH = titleHeight + rows * lineHeight + padding;
        const panelX = (w - panelW) / 2;
        const panelY = (h - panelH) / 2;
        ctx.save();
        ctx.fillStyle = theme.winnerBackground;
        ctx.fillRect(0, 0, w, h);
        ctx.shadowColor = 'rgba(77, 55, 0, 0.2)';
        ctx.shadowBlur = 28;
        ctx.fillStyle = '#fffdf7';
        ctx.beginPath();
        ctx.roundRect(panelX, panelY, panelW, panelH, Math.min(34, lineHeight));
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillStyle = theme.winnerText;
        ctx.font = `bold ${lineHeight * 1.05}px sans-serif`;
        ctx.fillText(`\u{D589}\u{C6B4}\u{C758} \u{C8FC}\u{C778}\u{ACF5} ${winners.length}\u{BA85}`, w / 2, panelY + titleHeight / 2);
        // 버튼 중심을 팝업 우상단 꼭지점에 맞춰 걸쳐놓는다. 뒤가 비치지 않게 불투명하게 채우되,
        // 검정으로 채우면 다크 테마에서 배경과 같아져 버튼으로 안 보이므로 대비되는 색을 쓴다
        this._resultCloseRect = (0, _adRenderer.drawCloseCircle)(ctx, panelX + panelW - 8, panelY + 8, (0, _adRenderer.closeButtonSize)(h), '#ff7658');
        const rankWidth = lineHeight * 1.8;
        winners.forEach((marble, i)=>{
            const col = Math.floor(i / rows);
            const row = i % rows;
            const x = panelX + padding + col * colWidth;
            const y = panelY + titleHeight + row * lineHeight + lineHeight / 2;
            ctx.save();
            ctx.beginPath();
            ctx.rect(x, y - lineHeight / 2, colWidth, lineHeight);
            ctx.clip();
            ctx.fillStyle = i % 2 === 0 ? '#fff3ba' : '#ffe2da';
            ctx.beginPath();
            ctx.roundRect(x + 3, y - lineHeight * 0.42, colWidth - 6, lineHeight * 0.84, lineHeight / 2);
            ctx.fill();
            ctx.textAlign = 'right';
            ctx.fillStyle = theme.winnerText;
            ctx.font = `${lineHeight * 0.6}px sans-serif`;
            ctx.fillText(`#${winnerRange.start + i + 1}`, x + rankWidth * 0.8, y);
            ctx.textAlign = 'left';
            ctx.fillStyle = `hsl(${marble.hue} 100% ${theme.marbleLightness}%)`;
            ctx.font = `bold ${lineHeight * 0.75}px sans-serif`;
            ctx.fillText(marble.name, x + rankWidth, y);
            ctx.restore();
        });
        ctx.restore();
    }
    renderWinner(winner, theme) {
        this.ctx.save();
        const centerX = this._sceneCanvas.width / 2;
        const centerY = this._sceneCanvas.height / 2;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.lineJoin = 'round';
        this.ctx.shadowColor = 'rgba(77, 55, 0, 0.2)';
        this.ctx.shadowBlur = 18;
        this.ctx.font = 'bold 42px sans-serif';
        this.ctx.fillStyle = theme.winnerText;
        this.ctx.fillText("\uD589\uC6B4\uC758 \uC8FC\uC778\uACF5!", centerX, centerY - 48);
        this.ctx.font = 'bold 88px sans-serif';
        this.ctx.fillStyle = '#d9a800';
        this.ctx.fillText(winner.name, centerX, centerY + 38);
        this.ctx.restore();
    }
}

},{"./adRenderer":"icFGq","./data/constants":"dKlb7","./keywordService":"6oWe2","./minimap":"5BIBs","c0c1887b1ea69cc3":"92Aa6","fc016d8eb42d31da":"8INXm","89b7b376bd289f37":"d5vl6","2b91b9f9834811f3":"kDbZe","a43dadcfce6bbba2":"iotmE","ee20d9eb13dff961":"gBTfs","edef7fa2b24240c0":"gp74h","3c1155060c04461c":"4QZHP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"icFGq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawAdOverlay", ()=>drawAdOverlay);
parcelHelpers.export(exports, "closeButtonSize", ()=>closeButtonSize);
/**
 * 원형 닫기 버튼(동그라미 + X)을 중심 좌표에 그리고 히트 영역을 돌려준다.
 * 기본 채움은 반투명이다. 광고 밴드 위에서는 밴드와 섞이는 편이 자연스럽지만,
 * 무언가에 걸쳐놓을 때는 뒤가 비치므로 불투명한 색을 넘겨야 한다.
 */ parcelHelpers.export(exports, "drawCloseCircle", ()=>drawCloseCircle);
var _constants = require("./data/constants");
const RESULT_GAP = 16;
const RESULT_NAME_RATIO = 0.13;
const RESULT_TAGLINE_RATIO = 0.1;
const RESULT_TAGLINE_GAP_EM = 0.8;
const RESULT_BAND_PADDING = 12;
const RESULT_BAND_COLOR = 'rgba(0, 0, 0, 0.75)';
const RESULT_LABEL_INSET = 12;
/** 좌상단으로 붙었을 때 '광고' 라벨이 로고와 겹치지 않게 비워두는 왼쪽 여백 */ const RESULT_LABEL_GUTTER = 34;
const QR_TO_LOGO_RATIO = 0.5;
const FADE_IN_MS = 250;
const FADE_OUT_MS = 200;
/** 결과 광고는 한가운데 전체 폭으로 시작해, 이만큼 뒤에 좌상단으로 오므라든다 */ const RESULT_MOVE_DELAY_MS = 2500;
const RESULT_MOVE_MS = 600;
/** 결과 광고를 이만큼 보여준 뒤에 닫기 버튼을 내준다 */ const CLOSE_DELAY_MS = 5000;
const CLOSE_FADE_MS = 250;
const CLOSE_INSET = 12;
const CLOSE_HIT_PADDING = 8;
const SERIF = `'Nanum Myeongjo', 'Noto Serif KR', AppleMyungjo, Batang, serif`;
const SANS = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
function ready(img) {
    return !!img?.complete && img.naturalWidth > 0;
}
function drawAdOverlay(ctx, w, h, state, images) {
    const now = performance.now();
    let alpha = Math.min(1, (now - state.since) / FADE_IN_MS);
    if (state.endingSince !== undefined) {
        const out = 1 - (now - state.endingSince) / FADE_OUT_MS;
        if (out <= 0) return false;
        alpha = Math.min(alpha, out);
    }
    if (alpha <= 0) return true;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    if (state.mode === 'preroll') drawPreroll(ctx, w, h, state.ad, images);
    else {
        const rects = drawResult(ctx, w, h, state.ad, images, now - state.since);
        state.clickRect = rects?.click;
        state.closeRect = rects?.close;
    }
    ctx.restore();
    return true;
}
function drawPreroll(ctx, w, h, ad, images) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(0, 0, w, h);
    const provideSize = clamp(h * 0.04, 14, 52);
    const sponsorSize = clamp(h * 0.026, 14, 30);
    const logoSize = Math.min(w * 0.3, h * 0.34, 360);
    const labelSize = clamp(h * 0.013, 9, 14);
    const gap = h * 0.022;
    const logo = ready(images.preroll) ? images.preroll : undefined;
    const parts = [
        provideSize,
        sponsorSize,
        logo ? logoSize : 0,
        labelSize
    ];
    const total = parts.reduce((a, b)=>a + b, 0) + gap * (parts.filter((p)=>p > 0).length - 1);
    let y = (h - total) / 2;
    const cx = w / 2;
    ctx.font = `700 ${provideSize}px ${SERIF}`;
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.75)';
    ctx.shadowBlur = provideSize * 0.18;
    drawSpaced(ctx, "\uC81C\uACF5", cx, y + provideSize / 2, provideSize * 0.35);
    y += provideSize + gap;
    ctx.shadowBlur = sponsorSize * 0.3;
    ctx.font = `600 ${sponsorSize}px ${SANS}`;
    ctx.fillText(ad.advertiser, cx, y + sponsorSize / 2);
    y += sponsorSize + gap;
    ctx.shadowBlur = 0;
    if (logo) {
        ctx.drawImage(logo, cx - logoSize / 2, y, logoSize, logoSize);
        y += logoSize + gap;
    }
    ctx.font = `${labelSize}px ${SANS}`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fillText("\uAD11\uACE0", cx, y + labelSize / 2);
}
function drawResult(ctx, w, h, ad, images, elapsed) {
    const logo = ready(images.result) ? images.result : undefined;
    const qr = ready(images.qr) ? images.qr : undefined;
    if (!logo && !qr) return undefined;
    const logoSize = (0, _constants.winnerAreaHeight);
    const qrSize = (0, _constants.winnerAreaHeight) * QR_TO_LOGO_RATIO;
    const nameSize = logoSize * RESULT_NAME_RATIO;
    const taglineSize = logoSize * RESULT_TAGLINE_RATIO;
    const bandH = logoSize + RESULT_BAND_PADDING * 2;
    // 오므라든 폭을 알아야 밴드를 먼저 깔 수 있어서, 글자 폭은 그리기 전에 재둔다
    ctx.font = `600 ${nameSize}px ${SANS}`;
    const nameMetrics = ctx.measureText(ad.advertiser);
    let colWidth = nameMetrics.width;
    if (ad.tagline) {
        ctx.font = `${taglineSize}px ${SANS}`;
        colWidth = Math.max(colWidth, ctx.measureText(ad.tagline).width);
    }
    if (qr) colWidth = Math.max(colWidth, qrSize);
    const t = easeInOut(clamp((elapsed - RESULT_MOVE_DELAY_MS) / RESULT_MOVE_MS, 0, 1));
    // 오므라들면 오른쪽 위 구석이 광고주명 자리가 되므로, 닫기 버튼 자리를 따로 비워둔다
    const dockedW = RESULT_LABEL_GUTTER + logoSize + RESULT_GAP + colWidth + RESULT_BAND_PADDING * 2 + closeButtonSize(h) + CLOSE_INSET;
    const bandY = lerp((h - bandH) / 2, 0, t);
    const bandW = lerp(w, Math.min(dockedW, w), t);
    const contentY = bandY + RESULT_BAND_PADDING;
    const logoX = lerp((w - logoSize) / 2, RESULT_BAND_PADDING + RESULT_LABEL_GUTTER, t);
    const colX = logoX + logoSize + RESULT_GAP;
    ctx.fillStyle = RESULT_BAND_COLOR;
    ctx.fillRect(0, bandY, bandW, bandH);
    if (logo) ctx.drawImage(logo, logoX, contentY, logoSize, logoSize);
    ctx.font = `600 ${nameSize}px ${SANS}`;
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    const ascent = nameMetrics.actualBoundingBoxAscent || nameSize * 0.8;
    ctx.fillText(ad.advertiser, colX, contentY + ascent);
    if (ad.tagline) {
        ctx.font = `${taglineSize}px ${SANS}`;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.textBaseline = 'top';
        ctx.fillText(ad.tagline, colX, contentY + nameSize + taglineSize * RESULT_TAGLINE_GAP_EM);
    }
    if (qr) ctx.drawImage(qr, colX, contentY + logoSize - qrSize, qrSize, qrSize);
    const clickLeft = logo ? logoX : colX;
    const clickRect = {
        x: clickLeft,
        y: contentY,
        w: colX + colWidth - clickLeft,
        h: logoSize
    };
    const labelSize = clamp(h * 0.013, 9, 14);
    ctx.font = `${labelSize}px ${SANS}`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    ctx.fillText("\uAD11\uACE0", RESULT_LABEL_INSET, bandY + bandH - RESULT_LABEL_INSET);
    return {
        click: clickRect,
        close: drawCloseButton(ctx, bandW, bandY, h, elapsed)
    };
}
function closeButtonSize(h) {
    return clamp(h * 0.045, 20, 34);
}
function lerp(from, to, t) {
    return from + (to - from) * t;
}
function easeInOut(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}
function drawCloseCircle(ctx, cx, cy, size, fill = 'rgba(0, 0, 0, 0.5)') {
    const arm = size * 0.22;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = Math.max(1.5, size * 0.07);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx - arm, cy - arm);
    ctx.lineTo(cx + arm, cy + arm);
    ctx.moveTo(cx + arm, cy - arm);
    ctx.lineTo(cx - arm, cy + arm);
    ctx.stroke();
    ctx.restore();
    return {
        x: cx - size / 2 - CLOSE_HIT_PADDING,
        y: cy - size / 2 - CLOSE_HIT_PADDING,
        w: size + CLOSE_HIT_PADDING * 2,
        h: size + CLOSE_HIT_PADDING * 2
    };
}
/** 밴드 오른쪽 위 구석의 닫기 버튼. 아직 나올 때가 아니면 그리지도, 누를 수도 없다 */ function drawCloseButton(ctx, w, bandY, h, elapsed) {
    if (elapsed < CLOSE_DELAY_MS) return undefined;
    const size = closeButtonSize(h);
    ctx.save();
    ctx.globalAlpha *= Math.min(1, (elapsed - CLOSE_DELAY_MS) / CLOSE_FADE_MS);
    const rect = drawCloseCircle(ctx, w - CLOSE_INSET - size / 2, bandY + CLOSE_INSET + size / 2, size);
    ctx.restore();
    return rect;
}
function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
}
function drawSpaced(ctx, text, cx, cy, spacing) {
    const chars = [
        ...text
    ];
    const widths = chars.map((c)=>ctx.measureText(c).width);
    const total = widths.reduce((a, b)=>a + b, 0) + spacing * (chars.length - 1);
    const prevAlign = ctx.textAlign;
    ctx.textAlign = 'left';
    let x = cx - total / 2;
    chars.forEach((c, i)=>{
        ctx.fillText(c, x, cy);
        x += widths[i] + spacing;
    });
    ctx.textAlign = prevAlign;
}

},{"./data/constants":"dKlb7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6oWe2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KeywordService", ()=>KeywordService);
const DEFAULT_KEYWORDS_URL = 'https://marblerouletteshop.com/api/external/keywords.json';
const DEFAULT_SPRITE_BASE_URL = 'https://marblerouletteshop.com/api/external/sprites';
const REFRESH_INTERVAL = 60000; // 60 seconds
class KeywordService {
    get _keywordsUrl() {
        return DEFAULT_KEYWORDS_URL;
    }
    get _spriteBaseUrl() {
        return DEFAULT_SPRITE_BASE_URL;
    }
    get _checkExpiry() {
        return true;
    }
    async init() {
        await this.fetchKeywords();
        this._startPeriodicRefresh();
    }
    destroy() {
        if (this._intervalId !== null) {
            clearInterval(this._intervalId);
            this._intervalId = null;
        }
    }
    _startPeriodicRefresh() {
        this._intervalId = window.setInterval(()=>{
            if (document.visibilityState === 'visible') this.fetchKeywords();
        }, REFRESH_INTERVAL);
    }
    async fetchKeywords() {
        try {
            const response = await fetch(this._keywordsUrl);
            if (!response.ok) {
                console.warn(`[KeywordService] Failed to fetch keywords: ${response.status}`);
                return;
            }
            const newData = await response.json();
            console.log(`[KeywordService] Fetched ${Object.keys(newData.keywords ?? {}).length} keywords`);
            // Check if generated_at is newer than last load
            const isNewer = this._lastGeneratedAt === null || new Date(newData.generated_at) > new Date(this._lastGeneratedAt);
            if (isNewer) {
                // Clear sprite caches when data is updated
                this._spriteSheets.clear();
                this._extractedSprites.clear();
                this._loadingSprites.clear();
                console.log('[KeywordService] Data updated, clearing sprite caches');
            }
            this._keywordsData = newData;
            this._lastGeneratedAt = newData.generated_at;
            // Preload sprite sheets for all keywords
            const spriteIds = new Set();
            for (const entry of Object.values(this._keywordsData.keywords))spriteIds.add(entry.sprite);
            await Promise.all([
                ...spriteIds
            ].map((id)=>this._loadSpriteSheet(id)));
        } catch (error) {
            console.warn('[KeywordService] Error fetching keywords:', error);
        }
    }
    async _loadSpriteSheet(spriteId) {
        if (this._spriteSheets.has(spriteId)) return this._spriteSheets.get(spriteId);
        // Check if already loading
        if (this._loadingSprites.has(spriteId)) return this._loadingSprites.get(spriteId);
        const loadPromise = new Promise((resolve)=>{
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = ()=>{
                this._spriteSheets.set(spriteId, img);
                console.log(`[KeywordService] Loaded sprite sheet ${spriteId}`);
                resolve(img);
            };
            img.onerror = ()=>{
                console.warn(`[KeywordService] Failed to load sprite sheet ${spriteId}`);
                resolve(null);
            };
            img.src = `${this._spriteBaseUrl}/${spriteId}.png?generated_at=${encodeURIComponent(this._lastGeneratedAt ?? '')}`;
        });
        this._loadingSprites.set(spriteId, loadPromise);
        const result = await loadPromise;
        this._loadingSprites.delete(spriteId);
        return result;
    }
    _extractSprite(spriteSheet, x, y, width, height) {
        const canvas = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(width, height) : document.createElement('canvas');
        if (!(canvas instanceof OffscreenCanvas)) {
            canvas.width = width;
            canvas.height = height;
        }
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.drawImage(spriteSheet, x, y, width, height, 0, 0, width, height);
        return canvas;
    }
    getSprite(marbleName) {
        if (!this._keywordsData) return undefined;
        const entry = this._keywordsData.keywords[marbleName];
        if (!entry) return undefined;
        // Check expiration
        if (this._checkExpiry && new Date(entry.expires_at) < new Date()) return undefined;
        // Check cache first
        const cacheKey = `${entry.sprite}_${entry.x}_${entry.y}_${entry.width}_${entry.height}`;
        if (this._extractedSprites.has(cacheKey)) return this._extractedSprites.get(cacheKey);
        // Get sprite sheet
        const spriteSheet = this._spriteSheets.get(entry.sprite);
        if (!spriteSheet) return undefined;
        // Extract and cache the sprite
        const sprite = this._extractSprite(spriteSheet, entry.x, entry.y, entry.width, entry.height);
        this._extractedSprites.set(cacheKey, sprite);
        return sprite;
    }
    constructor(){
        this._keywordsData = null;
        this._spriteSheets = new Map();
        this._extractedSprites = new Map();
        this._intervalId = null;
        this._loadingSprites = new Map();
        this._lastGeneratedAt = null;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"92Aa6":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("htvvi-01.52f69531.png") + "?" + Date.now();

},{}],"8INXm":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("htvvi-02.b2543adb.png") + "?" + Date.now();

},{}],"d5vl6":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("htvvi-03.e78ad45f.png") + "?" + Date.now();

},{}],"kDbZe":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("htvvi-04.a4cf8fcc.png") + "?" + Date.now();

},{}],"iotmE":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("htvvi-05.451835ec.png") + "?" + Date.now();

},{}],"gBTfs":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("htvvi-06.0c870980.png") + "?" + Date.now();

},{}],"gp74h":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("htvvi-07.ee223326.png") + "?" + Date.now();

},{}],"LqJb0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SkillEffect", ()=>SkillEffect);
const lifetime = 500;
class SkillEffect {
    constructor(x, y){
        this._size = 0;
        this._elapsed = 0;
        this.isDestroy = false;
        this.position = {
            x,
            y
        };
    }
    update(deltaTime) {
        this._elapsed += deltaTime;
        this._size = this._elapsed / lifetime * 10;
        if (this._elapsed > lifetime) this.isDestroy = true;
    }
    render(ctx, zoom, theme) {
        ctx.save();
        const rate = this._elapsed / lifetime;
        ctx.globalAlpha = 1 - rate * rate;
        ctx.strokeStyle = theme.skillColor;
        ctx.lineWidth = 1 / zoom;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this._size, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j59yE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VideoRecorder", ()=>VideoRecorder);
var _utils = require("./utils");
class VideoRecorder {
    constructor(canvas){
        this.chunks = [];
        this.targetCanvas = canvas;
        this.videoStream = this.targetCanvas.captureStream();
        this.mediaRecorder = new MediaRecorder(this.videoStream, {
            videoBitsPerSecond: 6000000
        });
    }
    get isRecording() {
        return this.mediaRecorder.state === 'recording';
    }
    async start() {
        if (this.isRecording) return;
        return new Promise((rs)=>{
            this.chunks = [];
            this.mediaRecorder.ondataavailable = (e)=>{
                this.chunks.push(e.data);
            };
            this.mediaRecorder.onstop = ()=>{
                const blob = new Blob(this.chunks, {
                    type: 'video/mp4'
                });
                const videoUrl = URL.createObjectURL(blob);
                const downloadLink = document.createElement('a');
                const d = new Date();
                downloadLink.href = videoUrl;
                downloadLink.download = `marble_roulette_${d.getFullYear()}${(0, _utils.pad)(d.getMonth() + 1)}${(0, _utils.pad)(d.getDate())}${(0, _utils.pad)(d.getHours())}${(0, _utils.pad)(d.getMinutes())}${(0, _utils.pad)(d.getSeconds())}.mp4`;
                downloadLink.click();
                downloadLink.remove();
                URL.revokeObjectURL(videoUrl);
            };
            this.mediaRecorder.onstart = ()=>{
                rs();
            };
            this.mediaRecorder.start();
        });
    }
    stop() {
        if (this.mediaRecorder.state === 'recording') this.mediaRecorder.stop();
    }
}

},{"./utils":"ljVDB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["9ZvZc","gH3Lb"], "gH3Lb", "parcelRequire2a60", {}, "./", "/")

//# sourceMappingURL=roulette-main.34df32e0.js.map
