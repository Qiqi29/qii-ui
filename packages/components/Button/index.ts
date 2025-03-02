import { withInstall } from '@qii-ui/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

export const QButton = withInstall(Button)
export const QButtonGroup = withInstall(ButtonGroup)
export default {
    QButton,
    QButtonGroup
}