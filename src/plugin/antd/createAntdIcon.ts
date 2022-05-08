import type { App } from 'vue';
import * as antIcons from '@ant-design/icons-vue';

export function setupAntdIcon(app: App<Element>): void {
    Object.keys(antIcons).forEach((key) => {
        app.component(key, antIcons[key as keyof typeof antIcons]);
    });
}
