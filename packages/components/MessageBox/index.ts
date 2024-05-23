import messageBox from './src/msgBox.vue'
import { withInstall } from '../../utils/install'

export default withInstall(messageBox)

export type MsgBoxInstance = InstanceType<typeof messageBox>

export {
  messageBox
}