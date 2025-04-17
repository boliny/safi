<template>
  <nav
    class="sticky top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md z-50 shadow-md"
  >
    <div
      class="container mx-auto flex justify-between items-center p-4 flex-wrap"
    >
      <!-- Logo & Social Icons -->
      <div class="flex items-center space-x-4">
        <div class="cursor-pointer" @click="goToHome">
          <NuxtImg
            src="/logo-01.png"
            alt="Coach Online Logo"
            class="h-18 w-auto"
          />
        </div>
        <div class="hidden md:flex space-x-3">
          <a href="#" class="text-white transition icon-link">
            <Icon name="mdi:facebook" class="icon-link" />
          </a>
          <a href="#" class="text-white transition icon-link">
            <Icon name="mdi:twitter" class="icon-link" />
          </a>
          <a href="#" class="text-white transition icon-link">
            <Icon name="mdi:linkedin" class="icon-link" />
          </a>
          <a href="#" class="text-white transition icon-link">
            <Icon name="mdi:instagram" class="icon-link" />
          </a>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden text-white focus:outline-none text-2xl"
        @click="toggleMenu"
      >
        <Icon name="mdi:menu" />
      </button>

      <!-- Navigation Links -->
      <div
        :class="{ hidden: !menuOpen, flex: menuOpen }"
        class="md:flex md:items-center md:space-x-6 w-full md:w-auto mt-4 md:mt-0 flex-col md:flex-row"
      >
        <ul
          class="flex flex-col md:flex-row md:space-x-4 items-center w-full md:w-auto"
        >
          <li>
            <a
              :class="{ active: activePage === 'home' }"
              class="nav-link cursor-pointer"
              @click="goToHome"
              >Home</a
            >
          </li>

          <!-- Dropdown Menu -->
          <li class="relative">
            <a
              class="nav-link flex items-center cursor-pointer"
              @click="toggleDropdown"
              >Start Here <Icon name="mdi:chevron-down" class="ml-1" />
            </a>
            <transition name="fade">
              <ul
                v-if="dropdownVisible"
                class="dropdown-menu md:absolute md:left-0 md:top-full w-full md:w-48"
              >
                <li>
                  <a class="dropdown-item cursor-pointer" @click="goToPlan"
                    >For Individuals</a
                  >
                </li>
                <li>
                  <a class="dropdown-item cursor-pointer" @click="goToPlan"
                    >For Business</a
                  >
                </li>
              </ul>
            </transition>
          </li>

          <li>
            <a
              :class="{ active: activePage === 'blog' }"
              class="nav-link cursor-pointer"
              @click="goToBlog"
              >Blog</a
            >
          </li>
          <li><a href="#" class="nav-link">Shop</a></li>
          <li>
            <a
              :class="{ active: activePage === 'contact' }"
              class="nav-link cursor-pointer"
              @click="goToContact"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      dropdownVisible: false,
      activePage: '',
    }
  },
  mounted() {
    window.addEventListener('scroll', this.closeMenuOnScroll)
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.closeMenuOnScroll)
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible
    },
    goToContact() {
      this.activePage = 'contact'
      this.menuOpen = false
      navigateTo('/contact', { external: false })
    },
    goToHome() {
      this.activePage = 'home'
      this.menuOpen = false
      navigateTo('/', { external: false })
    },
    goToPlan() {
      this.menuOpen = false
      navigateTo('/plan', { external: false })
    },
    goToBlog() {
      this.activePage = 'blog'
      this.menuOpen = false
      navigateTo('/blog', { external: false })
    },
    closeMenuOnScroll() {
      this.menuOpen = false
      this.dropdownVisible = false
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.menuOpen = false
        this.dropdownVisible = false
      }
    },
  },
}
</script>

<style scoped>
/* Links */
.nav-link {
  position: relative;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  border-radius: 0.375rem;
  transition: color 0.2s ease-in-out;
}

.nav-link:hover {
  color: #ffa200;
  animation: flash-color 0.3s ease-in-out;
}

@keyframes flash-color {
  0% {
    color: #ffffff;
  }
  50% {
    color: #ff6600;
  }
  100% {
    color: #ffa200;
  }
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: #ffa200;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
  transform: translateX(-50%) scaleX(1.2);
}

.nav-link.active {
  color: #ffa200;
}

/* Dropdown */
.dropdown-menu {
  background-color: rgba(20, 20, 20, 0.95);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
}

.dropdown-item {
  display: block;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  transition: background-color 0.3s ease-in-out;
}

.dropdown-item:hover {
  background-color: rgba(255, 0, 0, 0.2);
}

/* Dropdown Transition */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Icons */
.icon-link {
  font-size: 1.6rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.icon-link:hover {
  transform: scale(1.4);
  color: #ff6600;
}
</style>
