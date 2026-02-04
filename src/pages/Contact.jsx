import emailjs from "emailjs-com";
import { useState } from "react";
import { BiMailSend } from "react-icons/bi";

function Contact() {
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hqs68ka",
        "template_zw3bzz9",
        e.target,
        "So2q4l6lk213DuI6b",
      )
      .then(() => {
        setStatus("success");
        e.target.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const inputStyle = "outline-none rounded-xl bg-card p-3";

  return (
    <section className="w-full max-w-xl mx-auto">
      <h1>Contáctame</h1>

      <form onSubmit={sendEmail} className="flex flex-col gap-4 mt-4">
        <input
          className={inputStyle}
          type="email"
          name="email"
          placeholder="Tu correo"
          required
        />
        <textarea
          className={inputStyle}
          name="message"
          placeholder="Tu mensaje"
          rows={5}
          required
        />
        <button
          type="submit"
          className="rounded-xl flex items-center justify-center gap-2 p-3 bg-card bg-btn font-semibold"
        >
          <BiMailSend className="text-2xl" />
          Enviar mensaje
        </button>
      </form>

      {status === "success" && (
        <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-green-400 text-center">
          ✔ Mensaje enviado correctamente. Te responderé pronto.
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-red-400 text-center">
          ✖ Ocurrió un error. Intenta de nuevo más tarde.
        </div>
      )}
    </section>
  );
}

export default Contact;
