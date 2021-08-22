// typings.d.ts or router.ts
import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        // 标题
        title: string
        // 是否有子菜单
        hasChildren?: boolean
        // 是否隐藏该菜单
        hidden?: boolean
    }
}