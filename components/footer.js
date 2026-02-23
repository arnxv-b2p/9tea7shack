class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-black/80 backdrop-blur-lg border-t border-white/10 text-gray-400 mt-20">

        <div class="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

          <div>
            <h3 class="text-2xl text-[#c6a15b] heading-font mb-4">9Tea7 Shack</h3>
            <p class="text-sm leading-relaxed">
              Serving coffee, chai and campus conversations at IIT Bombay.
            </p>
          </div>

          <div>
            <h4 class="text-lg text-white mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="index.html" class="hover:text-[#c6a15b] transition">Home</a></li>
              <li><a href="menu.html" class="hover:text-[#c6a15b] transition">Menu</a></li>
              <li><a href="#about" class="hover:text-[#c6a15b] transition">About</a></li>
              <li><a href="#gallery" class="hover:text-[#c6a15b] transition">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg text-white mb-4">Contact</h4>
            <p>IIT Bombay, Powai, Mumbai</p>
            <p>12:00 PM – 12:00 AM</p>
            <div class="flex gap-4 mt-4 text-[#c6a15b]">
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="phone"></i></a>
            </div>
          </div>

        </div>

        <div class="border-t border-white/10 text-center py-6 text-sm">
          © 2025 9Tea7 Shack. Crafted with ❤️ by Arnav.
        </div>

      </footer>
    `;
  }
}

customElements.define("custom-footer", Footer);
