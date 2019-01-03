import vuejsToast from './App.vue'

vuejsToast.install = (Vue, globalOption) => {

    //用于将option合并到组件中的data
    let merge = (data, option) => {
        let source = option || {};
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                let value = source[prop];
                if (value !== undefined) {
                    data[prop] = value;
                }
            }
        }
        return data;
    }

    let instance;
    //extend 是构造一个组件的语法器
    let Toastconstructor = Vue.extend(vuejsToast);

    let initInstance = () => {
        //实例化组件
        instance = new Toastconstructor({
            el: document.createElement('div')
        });
        //合并全局option
        merge(instance.$data, globalOption);
        //添加到body
        document.body.appendChild(instance.$el);
    }

    let Toast = {
        show(option) {
            if(window.$isToast === undefined) {
                //组件仅初始化一次
                initInstance();
            }
            else if(window.$isToast) {
                return;
            }
            //合并option
            merge(instance.$data, option);
            //显示toast组件
            instance.state = true;
            window.$isToast = true;
        },
        close() {
            window.$isToast = false;
            //隐藏toast组件
            instance.state = false;
        }
    }

    //注册全局组件
    Vue.component(vuejsToast.name, Toast);

    //添加全局api
    Vue.prototype.$toast = Toast;
}

export default vuejsToast.install;