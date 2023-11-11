import React, { useState } from "react";
import styles from "./styles/index.module.css";
import Layout from "@/layouts/Layout";
import Link from "next/link";

function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [isField, setIsField] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isSumbit, setIsSumbit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const headers = {
    title: "Devify - Feedback",
    description:
      "Feedback - Have an idea? Share it! Your input makes a difference.",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSumbit(true);
    if (!name || !email || !comments) setIsField(true);
    if (name && email && comments) setIsField(false);
    const checkbox = document.getElementById("checkbox");

    !checkbox.checked && isSumbit ? setIsChecked(true) : setIsChecked(false);
  };

  return (
    <Layout title={headers.title} description={headers.description}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.title}>The Power of Constructive Feedback</h1>
            <p className={styles.description}>
              <span>Feedback</span> is a valuable process of providing
              information, opinions, or constructive responses to help
              individuals or entities gauge their performance, make
              improvements, and facilitate growth.
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputWrapper}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Name"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="feedback">Feedback</label>
                <textarea
                  id="feedback"
                  name="feedback"
                  rows="4"
                  value={comments}
                  cols="55"
                  placeholder="Type your comments here..."
                  onChange={(e) => setComments(e.target.value)}
                ></textarea>
              </div>
              {isField ? (
                <div className={styles.emptyField}>
                  The Field Cannot Be Empty.
                </div>
              ) : null}
              <span className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  value="checkboxValue"
                  className={styles.checkbox}
                />
                <label className={styles.checkboxTitle} htmlFor="checkbox">
                  Please read{" "}
                  <Link href="/legal/feedback">
                    Devify Unsolicited Idea Submission Policy
                  </Link>{" "}
                  before you send us your feedback.
                </label>
              </span>
              {isChecked ? (
                <div className={styles.isChecked}>
                  Read submission policy and check box.
                </div>
              ) : null}
              <div>
                <button type="submit" disabled={isLoading}>
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
