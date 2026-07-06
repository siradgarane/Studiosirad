/* Studio Sirad — light interactions */
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Formspree AJAX submission — keeps visitors on the page
  var forms = document.querySelectorAll("form[data-formspree]");

  Array.prototype.forEach.call(forms, function (form) {
    var status = form.querySelector(".form-status");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (status) {
        status.textContent = "Sending...";
      }

      var data = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            if (status) {
              status.textContent =
                form.getAttribute("data-success") ||
                "Thank you. I will be in touch.";
            }
          } else {
            return response.json().then(function (body) {
              var msg = "Something went wrong. Please email me directly.";
              if (body && body.errors && body.errors.length) {
                msg = body.errors
                  .map(function (err) {
                    return err.message;
                  })
                  .join(", ");
              }
              if (status) status.textContent = msg;
            });
          }
        })
        .catch(function () {
          if (status) {
            status.textContent =
              "Something went wrong. Please email me directly.";
          }
        });
    });
  });
})();
