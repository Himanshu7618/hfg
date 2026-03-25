import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-8 py-10 mt-10">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo / Brand */}
        <div>
          <h1 className="text-2xl font-bold text-orange-500">Foodie</h1>
          <p className="mt-3 text-gray-400">
            Delicious food delivered to your doorstep 🍔🍕
          </p>
        </div>

        {/* About */}
        <div>
          <h2 className="font-semibold mb-3">About Foodie</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Who we are</li>
            <li>Blog</li>
            <li>Work with us</li>
          </ul>
        </div>

        {/* For Restaurants */}
        <div>
          <h2 className="font-semibold mb-3">For Restaurants</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Partner with us</li>
            <li>Apps for you</li>
          </ul>
        </div>

        {/* Learn More */}
        <div>
          <h2 className="font-semibold mb-3">Learn More</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
          </ul>
        </div>

      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        © 2026 Foodie. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;