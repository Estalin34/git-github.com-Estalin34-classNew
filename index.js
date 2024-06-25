document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre && email && mensaje) {
      // Crear el mensaje para WhatsApp
      const whatsappMessage = `Hola, soy ${nombre}. ${mensaje}`;
      const whatsappUrl = `https://api.whatsapp.com/send?phone=593984641801&text=${encodeURIComponent(
        whatsappMessage
      )}`;

      // Actualizar el enlace de WhatsApp
      const whatsappLink = document.querySelector("#whatsapp-link");
      whatsappLink.href = whatsappUrl;
      whatsappLink.style.display = "inline-block";

      showNotification(
        "Gracias por contactarnos, " + nombre + ". Hemos recibido tu mensaje."
      );

      this.reset(); // Limpiar el formulario
    } else {
      showNotification("Por favor, completa todos los campos.", true);
    }
  });
