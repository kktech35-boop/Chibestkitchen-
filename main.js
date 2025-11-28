<script>

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function changeSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  setInterval(changeSlide, 4000); // Change every 4 seconds
});
</script>

  
  
  

  <script>  
    const btn = document.querySelector('.nav-toggle');  
    const list = document.getElementById('nav-list');  
    btn.addEventListener('click', () => {  
      const expanded = btn.getAttribute('aria-expanded') === 'true';  
      btn.setAttribute('aria-expanded', String(!expanded));  
      list.classList.toggle('open');  
    }):  
  </script> 
  
  
  
  

<script>  
window.addEventListener('load', () => {  
  const preloader = document.getElementById('preloader');  
  preloader.style.opacity = '1';  
  preloader.style.transition = 'opacity 1s ease';  
  setTimeout(() => preloader.style.display = 'none', 500);  
});  
</script> 



<script>
    document.addEventListener("DOMContentLoaded", () => {
      const orderButtons = document.querySelectorAll(".order-btn");
      const popup = document.getElementById("orderPopup");
      const closePopup = document.getElementById("closePopup");
      const mealInput = document.getElementById("meal");
      const form = document.getElementById("orderForm");
      const thankYou = document.getElementById("thankYouMessage");
      const whatsappNumber = "2349065183456";

      // Open popup
      orderButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const meal = btn.getAttribute("data-meal") || "";
          mealInput.value = meal === "Custom" ? "" : meal; // Empty if custom
          popup.style.display = "flex";
          form.style.display = "block";
          thankYou.style.display = "none";
        });
      });

      // Close popup
      closePopup.addEventListener("click", () => popup.style.display = "none");
      window.addEventListener("click", e => { if (e.target === popup) popup.style.display = "none"; });

      // Form submission
      form.addEventListener("submit", e => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const meal = mealInput.value.trim();
        const quantity = document.getElementById("quantity").value.trim();
        const orderType = document.getElementById("orderType").value;
        const address = document.getElementById("address").value.trim();

        if(!name || !phone || !meal || !quantity || !orderType) {
          alert("Please fill all required fields.");
          return;
        }

        let message = `🍽️ *New Order from Chibest Kitchen* 🍽️%0A%0A` +
                      `*Name:* ${name}%0A` +
                      `*Phone:* ${phone}%0A` +
                      `*Meal:* ${meal}%0A` +
                      `*Quantity:* ${quantity}%0A` +
                      `*Order Type:* ${orderType}`;

        if(address && orderType.toLowerCase() === "delivery") {
          message += `%0A*Delivery Address:* ${address}`;
        }

        message += `%0A%0APlease confirm the order. ✅`;

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappURL, "_blank");

        // Hide form, show thank you
        form.style.display = "none";
        thankYou.style.display = "block";

        // Auto-close popup after 3 seconds
        setTimeout(() => popup.style.display = "none", 3000);

        // Reset form after closing
        form.reset();
      });
    });
  </script>
  
  
  
  
  
  <script>
document.addEventListener("DOMContentLoaded", () => {
  const orderButtons = document.querySelectorAll(".order-btn");
  const popup = document.getElementById("orderPopup");
  const closePopup = document.getElementById("closePopup");
  const mealInput = document.getElementById("meal");
  const form = document.getElementById("orderForm");

  const whatsappNumber = "2349065183456"; // Your WhatsApp number (no + sign)

  // Show popup when order button is clicked
  orderButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const meal = btn.getAttribute("data-meal") || "";
      mealInput.value = meal;
      popup.style.display = "flex";
    });
  });

  // Close popup
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Close popup when clicking outside it
  window.addEventListener("click", e => {
    if (e.target === popup) popup.style.display = "none";
  });

  // Handle form submission
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const meal = mealInput.value.trim();
    const quantity = document.getElementById("quantity").value.trim();
    const orderType = document.getElementById("orderType").value.trim();
    const address = document.getElementById("address").value.trim();

    // Build WhatsApp message
    let message = 
      `🍽️ *New Order from Chibest Kitchen* 🍽️%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Meal:* ${meal}%0A` +
      `*Quantity:* ${quantity}%0A` +
      `*Order Type:* ${orderType}`;

    if (address && orderType.toLowerCase() === "delivery") {
      message += `%0A*Delivery Address:* ${address}`;
    }

    message += `%0A%0APlease confirm the order. ✅`;

    // Open WhatsApp chat
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");

    // Reset and close popup
    form.reset();
    popup.style.display = "none";
  });
});
</script>


<script>
// ✅ Chibest Kitchen JS — Preloader + Order Form
document.addEventListener("DOMContentLoaded", () => {
  
  /* ------------------ PRELOADER ------------------ */
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
    }, 1200);
  });
  
  /* ------------------ ORDER POPUP ------------------ */
  const orderButtons = document.querySelectorAll(".order-btn");
  const popup = document.getElementById("orderPopup");
  const closePopup = document.getElementById("closePopup");
  const mealInput = document.getElementById("meal");
  const form = document.getElementById("orderForm");
  const thankYou = document.getElementById("thankYouMessage");
  
  const whatsappNumber = "2349065183456"; // Your WhatsApp number (no + sign)
  
  orderButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const meal = btn.getAttribute("data-meal") || "";
      mealInput.value = meal;
      popup.style.display = "flex";
    });
  });
  
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });
  
  window.addEventListener("click", e => {
    if (e.target === popup) popup.style.display = "none";
  });
  
  form.addEventListener("submit", e => {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const meal = mealInput.value.trim();
    const quantity = document.getElementById("quantity").value.trim();
    const orderType = document.getElementById("orderType").value.trim();
    const address = document.getElementById("address").value.trim();
    
    let message =
      `🍽️ *New Order from Chibest Kitchen* 🍽️%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Meal:* ${meal}%0A` +
      `*Quantity:* ${quantity}%0A` +
      `*Order Type:* ${orderType}`;
    
    if (address && orderType.toLowerCase() === "delivery") {
      message += `%0A*Delivery Address:* ${address}`;
    }
    
    message += `%0A%0APlease confirm the order. ✅`;
    
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
    
    form.reset();
    popup.style.display = "none";
    
    thankYou.style.display = "block";
    setTimeout(() => {
      thankYou.style.display = "none";
    }, 2500);
  });
});
  
</script>
