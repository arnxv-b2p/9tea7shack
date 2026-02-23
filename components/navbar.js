class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <!-- Logo -->
          <a href="index.html" class="heading-font text-2xl text-[#c6a15b] tracking-wide">
            9Tea7 Shack
          </a>

          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-8 text-sm font-medium">
            <a href="index.html" class="hover:text-[#c6a15b] transition">Home</a>
            <a href="#about" class="hover:text-[#c6a15b] transition">About</a>
            <a href="#gallery" class="hover:text-[#c6a15b] transition">Gallery</a>
            <a href="menu.html" class="hover:text-[#c6a15b] transition">Menu</a>
          </div>

          <!-- CTA Button -->
          <a href="menu.html"
             class="hidden md:inline-block bg-[#c6a15b] hover:bg-[#b8924a] text-black px-5 py-2 rounded-full text-sm font-semibold transition">
            Order Now
          </a>

          <!-- Mobile Menu Button -->
          <button id="menu-btn" class="md:hidden text-[#c6a15b]">
            ☰
          </button>
        </div>

        <!-- Mobile Dropdown -->
        <div id="mobile-menu" class="hidden md:hidden bg-black/80 backdrop-blur-md px-6 py-4 space-y-4 text-sm">
          <a href="index.html" class="block hover:text-[#c6a15b]">Home</a>
          <a href="#about" class="block hover:text-[#c6a15b]">About</a>
          <a href="#gallery" class="block hover:text-[#c6a15b]">Gallery</a>
          <a href="menu.html" class="block hover:text-[#c6a15b]">Menu</a>
        </div>
      </nav>
    `;

    // Mobile toggle
    const btn = this.querySelector("#menu-btn");
    const menu = this.querySelector("#mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
}

customElements.define("custom-navbar", Navbar);
