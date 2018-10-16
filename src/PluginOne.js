export default {
    install : function(Vue, options){
        // 1. 전역 메소드 또는 속성 추가
        Vue.myGlobalMethod = function () { 
            console.log('PluginOne의 myGlobalMethod()');
        };
        // 2. 전역 에셋 추가
        Vue.directive('my-directive', {
            bind (el, binding, vnode, oldVnode) { 
            console.log('PluginOne의 my-directive');
            }
        });
        // 3. 컴포넌트 옵션 주입
        Vue.mixin({
            created: function () { 
                console.log('PluginOne-mixin속성의 created훅');
            },
            methods:  {
                mixinMethod: function () {
                    console.log('PluginOne의 mixinMethod()');
                }
            }
        });
        // 4. 인스턴스 메소드 추가
        Vue.prototype.$myInstanceMethod = function (methodOptions) { 
            console.log('PluginOne의 myInstanceMethod()');
        };
    }
}