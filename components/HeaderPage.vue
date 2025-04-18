<template>
  <nav
    :class="[
      'sticky top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg',
      isScrolled ? 'bg-gray-900/95 shadow-lg py-2' : 'bg-gray-950/80 py-5',
    ]"
  >
    <div
      class="container mx-auto flex justify-between items-center flex-wrap px-4"
    >
      <!-- Logo & Social Icons -->
      <div class="flex items-center space-x-4">
        <div
          class="cursor-pointer transition-transform duration-300"
          @click="goToHome"
        >
          <NuxtImg
            src="/logo-01.png"
            alt="Coach Online Logo"
            :class="[
              'transition-all duration-300',
              isScrolled ? 'h-12' : 'h-20',
            ]"
          />
        </div>
        <div class="hidden md:flex space-x-3">
          <a href="#" class="text-orange-400 hover:text-orange-300 transition">
            <Icon name="mdi:facebook" class="icon-link" />
          </a>
          <a href="#" class="text-orange-400 hover:text-orange-300 transition">
            <Icon name="mdi:twitter" class="icon-link" />
          </a>
          <a href="#" class="text-orange-400 hover:text-orange-300 transition">
            <Icon name="mdi:linkedin" class="icon-link" />
          </a>
          <a href="#" class="text-orange-400 hover:text-orange-300 transition">
            <Icon name="mdi:instagram" class="icon-link" />
          </a>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden text-white focus:outline-none text-3xl"
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
              class="nav-link"
              @click="goToHome"
              >Home</a
            >
          </li>

          <!-- Dropdown -->
          <li class="relative">
            <a class="nav-link flex items-center" @click="toggleDropdown">
              Start Here <Icon name="mdi:chevron-down" class="ml-1" />
            </a>
            <transition name="fade">
              <ul
                v-if="dropdownVisible"
                class="dropdown-menu md:absolute md:left-0 md:top-full w-full md:w-48"
              >
                <li>
                  <a class="dropdown-item" @click="goToPlan">For Individuals</a>
                </li>
                <li>
                  <a class="dropdown-item" @click="goToPlan">For Business</a>
                </li>
              </ul>
            </transition>
          </li>

          <li>
            <a
              :class="{ active: activePage === 'blog' }"
              class="nav-link"
              @click="goToBlog"
              >Blog</a
            >
          </li>
          <li><a class="nav-link" href="#">Shop</a></li>
          <li>
            <a
              :class="{ active: activePage === 'contact' }"
              class="nav-link"
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
      isScrolled: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
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
      navigateTo('/contact')
    },
    goToHome() {
      this.activePage = 'home'
      this.menuOpen = false
      navigateTo('/')
    },
    goToPlan() {
      this.menuOpen = false
      navigateTo('/plan')
    },
    goToBlog() {
      this.activePage = 'blog'
      this.menuOpen = false
      navigateTo('/blog')
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10
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
.nav-link {
  position: relative;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #f3f3f3;
  border-radius: 0.375rem;
  transition: all 0.3s ease-in-out;
}

.nav-link:hover {
  color: #ff9f1c;
  transform: translateY(-2px);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: #ff9f1c;
  transition: all 0.3s ease-in-out;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
  transform: translateX(-50%) scaleX(1);
}

.nav-link.active {
  color: #ff9f1c;
}

/* Dropdown */
.dropdown-menu {
  background-color: #1f1f1f;
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.dropdown-item {
  display: block;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #f3f3f3;
  transition: all 0.3s ease-in-out;
}

.dropdown-item:hover {
  background-color: #ff9f1c22;
  color: #ff9f1c;
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Icons */
.icon-link {
  font-size: 1.8rem;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}
.icon-link:hover {
  transform: scale(1.3);
  color: #ff9f1c;
}
</style>
