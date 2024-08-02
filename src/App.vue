<template>
  <div class="main-content">
    <!-- *HEADER -->
    <header class="header">
      <div class="card">
        <router-link to="/profile">Joël Leimbacher</router-link>
      </div>
    </header>
    <!-- *SIDEBAR -->
    <aside class="sidebar">
      <div class="panel-container card flex justify-center">
        <MegaMenu :model="items" orientation="vertical">
          <template #itemicon="{ item }">
            <i :class="item.icon" style="font-size: 1.5em"></i>
          </template>
        </MegaMenu>
      </div>
    </aside>
    <!-- *MAIN CONTENT -->
    <main class="main-content-area">
      <RouterView />
    </main>
    <!-- *FOOTER -->
    <footer class="footer">
      <Dock :model="dockItems" :position="'bottom'" class="dock">
        <template #itemicon="{ item }">
          <i v-tooltip.top="item.label" :class="item.icon" style="font-size: 2em"></i>
        </template>
      </Dock>
      <AvatarComponent />
    </footer>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { PrimeIcons } from '@primevue/core/api'
import { Profile } from './models/Profile'
import AvatarComponent from '@/components/AvatarComponent.vue'

interface PanelMenuItem {
  label: string
  icon?: string
  items?: PanelMenuItem[]
}

export default {
  components: {
    RouterView,
    RouterLink,
    AvatarComponent
  },
  setup() {
    //* LOAD INITIAL
    const userProfile = ref<any>(null)
    const showDrawer = ref(true)
    const home = ref({ icon: 'pi pi-home', url: '/' })
    const items = ref<PanelMenuItem[]>([])

    onMounted(() => {
      userProfile.value = Profile.getInstance()
      console.log('\x1b[33m%s\x1b[0m', 'userProfile.value --------------------', userProfile.value)

      // Transform user data to MegaMenu items
      items.value = [
        {
          label: 'Personal Info',
          icon: PrimeIcons.USER,
          items: [
            [
              {
                label: `Name: ${userProfile.value.name}`,
                icon: PrimeIcons.ID_CARD
              },
              {
                label: `Title: ${userProfile.value.title}`,
                icon: PrimeIcons.BRIEFCASE
              }
            ]
          ]
        },
        {
          label: 'Skills',
          icon: PrimeIcons.STAR,
          items: [
            userProfile.value.skills.map((skill: string) => ({
              label: skill,
              icon: PrimeIcons.CHECK
            }))
          ]
        },
        {
          label: 'Languages',
          icon: PrimeIcons.GLOBE,
          items: [
            userProfile.value.languages.map((language: any) => ({
              label: language.name,
              icon: PrimeIcons.COG,
              items: [
                [
                  {
                    label: `Proficiency: ${language.proficiency}`,
                    icon: PrimeIcons.COG
                  },
                  {
                    label: `Experience Years: ${language.experienceYears}`,
                    icon: PrimeIcons.CALENDAR
                  },
                  ...language.relevantProjects.map((project: string) => ({
                    label: project,
                    icon: PrimeIcons.FOLDER
                  }))
                ]
              ]
            }))
          ]
        },
        {
          label: 'Hobbies',
          icon: PrimeIcons.HEART,
          items: [
            userProfile.value.hobbies.map((hobby: any) => ({
              label: hobby.name,
              icon: PrimeIcons.IMAGE,
              items: [
                [
                  {
                    label: `Description: ${hobby.description}`,
                    icon: PrimeIcons.INFO
                  },
                  {
                    label: `Years of Experience: ${hobby.yearsOfExperience}`,
                    icon: PrimeIcons.CALENDAR
                  }
                ]
              ]
            }))
          ]
        }
      ]
    })

    const dockItems = ref([
      { label: 'Home' as string, icon: PrimeIcons.HOME },
      { label: 'Users' as string, icon: PrimeIcons.USERS },
      { label: 'Events' as string, icon: PrimeIcons.CALENDAR },
      { label: 'Settings' as string, icon: PrimeIcons.COG }
    ])
    const menuItems = ref<PanelMenuItem[]>([
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ])

    //* RETURN
    return {
      //* VARIABLES
      items,
      menuItems,
      home,
      dockItems
    }
  }
}
</script>

<style scoped>
.main-content {
  display: grid;
  grid-template-rows: 0.5fr 10fr 0.5fr;
  grid-template-columns: 0.5fr 10fr;
  grid-template-areas:
    'header header'
    'sidebar main-content-area'
    'footer footer';
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.persistent-drawer {
  position: relative;
  width: 250px; /* Adjust width as needed */
  height: 100vh;
  z-index: auto;
}

.persistent-drawer .p-drawer-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.header {
  margin-top: 1rem;
  grid-area: header;
  display: flex;
  justify-content: center;
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  padding-bottom: 1rem;
}
div a {
  display: inline-block;
  font-size: 1.5rem;
  padding: 0 1rem;
  border-bottom: 1px solid var(--color-border);
}
div a:hover {
  border-radius: 0.5rem;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}

.sidebar {
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 0.5rem;
  margin-right: 1rem;
  width: 15rem;
}

.main-content-area {
  grid-area: main-content-area;
  position: relative;
  /* background-color: blue; */
  margin: 1rem 1rem 1rem 0;
  border-radius: 1rem;
}

.footer {
  grid-area: footer;
  display: flex;
  justify-content: center;
  position: relative;
  /* margin-bottom: 1rem; */
  height: 6rem;
  .dock {
    position: relative;
    height: 100%;
    margin-bottom: 1rem;
  }
  .p-dock-mobile {
    width: fit-content;
    margin-bottom: 1rem;
  }
  :deep(.p-dock-list-container) {
    background-color: rgba(7, 41, 30, 0.202);
  }
}
:deep(.p-megamenu-mobile) .p-megamenu-root-list {
  display: contents;
}
</style>
