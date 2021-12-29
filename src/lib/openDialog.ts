import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'
interface DialogOptionsType {
    title: string,
    content: string
}
export const openDialog = (options: DialogOptionsType) => {
    const { title, content } = options;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const app = createApp({
        render() {
            // h函数第二个参数传递插槽的内容
            return h(Dialog, {
                visible: true, 'onUpdate:visible': (newVisible: boolean) => {
                    if (!newVisible) {
                        app.unmount();
                        div.remove();
                    }
                }
            }, { title, content })
        }
    });
    app.mount(div);
}