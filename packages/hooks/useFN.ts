import { VNode, Fragment } from 'vue'

/**
 * 过滤节点
 * @param children - VNode 数组
 */
export const useFilterNodes = function (children: VNode[] = []) {
    const nodes: VNode[] = []
    // 遍历节点，拆分数组和 Fragment 格式的节点
    children.forEach(child => {
        if (Array.isArray(child)) {
            nodes.push(...child)
        } else if (child.type === Fragment) {
            nodes.push(...useFilterNodes(child.children as VNode[]))
        } else {
            nodes.push(child)
        }
    })
    // 过滤空节点，注释、空文本等节点会过滤掉，不渲染
    return nodes.filter(node => !(
        node && (node.type === Comment
            || (node.type === Fragment && node.children?.length === 0)
            || (node.type === Text && (node.children as string).trim() === '')
        )
    ))
}