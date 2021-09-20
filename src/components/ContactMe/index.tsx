import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FiSend } from "@react-icons/all-files/fi/FiSend";
import { api } from "../../services/api";

import styles from "./contactme.module.scss";

export function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmitForm(e: FormEvent) {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!pattern.test(email)) {
      return toast.error("Please enter a valid email!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    try {
      const response = await api.post("contact", data);

      if (response.status === 200) {
        setName("");
        setEmail("");
        setMessage("");

        toast.success("Your message was sent successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (response.status === 203) {
        toast.error("Invalid email!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send your message!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <section>
      <h2 id="contactme" className={styles.H2}>
        Let&apos;s work together
      </h2>
      <div className={styles.contactMe}>
        <ToastContainer />
        <form onSubmit={handleSubmitForm}>
          <div>
            <label htmlFor="name">Name*:</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email*:</label>
            <input
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your email"
              required
            />
          </div>
          <div className={styles.textArea}>
            <label htmlFor="message">Message*:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="enter here your message"
              cols={40}
              rows={5}
              required
            />
          </div>

          <button type="submit">
            Send
            <span>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
