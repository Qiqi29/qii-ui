import { PropType } from "vue"

export const iconProps = {
    /**
     * @description 图标名称
     */
    name: {
        type: String as PropType<string>,
    },
    /**
     * @description 图标大小
     */
    size: {
        type: String as PropType<string>,
        default: "1.5em",
    },
    /**
     * @description 图标颜色
     */
    color: {
        type: String as PropType<string>,
        default: "currentColor",
    },
    /**
     * @description 图标是否为旋转状态
     */
    spin: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    /**
     * @description 自定义图标的旋转角度
     */
    rotate: {
        type: Number as PropType<number>,
    },
} as const;