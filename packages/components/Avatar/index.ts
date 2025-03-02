import { withInstall } from '@qii-ui/utils'
import Avatar from './src/avatar.vue'
import AvatarGroup from './src/avatar-group.vue'

export const QAvatar = withInstall(Avatar)
export const QAvatarGroup = withInstall(AvatarGroup)
export default {
    QAvatar,
    QAvatarGroup
}