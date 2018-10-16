export default {
    install : function(Vue, options){
        Vue.myGlobalMethod = function () { 
            console.log('PluginTwo의 myGlobalMethod()');
        };
        Vue.directive('my-directive', { 
        bind (el, binding, vnode, oldVnode) { 
            console.log('PluginTwo의 my-directive');
        }
        });
        Vue.mixin({ 
            created: function () { 
                console.log('PluginTwo의-mixin속성의 created훅');
            },
            methods:  {
                mixinMethod: function () {
                    console.log('PluginTwo의 mixinMethod()');
                }
            }
        });
        Vue.prototype.$myInstanceMethod = function (methodOptions) {
            console.log('PluginTwo의 myInstanceMethod()');
        };        
    }
}