<template>
  <div>
    Hi my name is: {{ userProfile.getName() }} <br />
    and I'm {{ userProfile.getAbout() }}
  </div>
  <AvatarComponent />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { Profile } from '@/models/Profile'
import AvatarComponent from '@/components/AvatarComponent.vue'

export default defineComponent({
  name: 'ParentComponent',
  components: {
    AvatarComponent
  },
  setup() {
    // Load initial profile instance
    const userProfile = ref<Profile>(Profile.getInstance())

    return {
      userProfile
    }
  }
})
</script>

<style lang="scss" scoped></style>
