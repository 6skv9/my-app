import React, { useState } from "react";
import { Container, Header, Form, Button, Segment, Message, Icon, TextArea } from "semantic-ui-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e, { name, value }) => setForm({ ...form, [name]: value });
  const handleSubmit = () => {
    console.log("Contact form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Segment
      vertical
      style={{
        padding: "6em 0",
        background: "linear-gradient(135deg, #f0f4f7, #e6f2f0)",
        minHeight: "100vh",
      }}
    >
      <Container text>
        <Header
          as="h1"
          textAlign="center"
          color="teal"
          style={{
            color: "#009688",
            fontSize: "2.2em",
            marginBottom: "1em",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          <Icon name="mail" color="teal" /> Contact Us
        </Header>
        <Segment
          raised
          padded="very"
          style={{
             background: "#ffffff",
            borderRadius: "12px",
            padding:"2em",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
        <Form onSubmit={handleSubmit}>
            <Form.Input
              label="Full Name"
              placeholder="Enter your name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Form.Input
              label="Email Address"
              placeholder="Enter your email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          <Form.Field
             control={TextArea}
              label="Message"
              placeholder="Type your message..."
              name="message"
              value={form.message}
              onChange={handleChange}
              style={{ minHeight: 120 }}
              required
          />
           <div style={{ textAlign: "center", marginTop: "2em" }}>
          <Button color="teal"
                size="large"
                icon
                labelPosition="right"
                style={{
                  borderRadius: "30px",
                  padding: "0.8em 2em",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",}}>
                    Send Message
            <Icon name="send" /> Submit
          </Button>
          </div>
        </Form>
         </Segment>
        {submitted && (
          <Message 
           positive
            size="large"
            style={{
              marginTop: "2em",
              textAlign: "center",
              borderRadius: "10px",
            }}
            >
            <Message.Header>Thank you!</Message.Header>
            <p>Your message has been sent successfully.</p>
          </Message>
        )}
      </Container>
    </Segment>
  );
};

export default ContactPage;
