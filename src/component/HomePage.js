import React from "react";
import { Container, Header, Segment, Card, Icon } from "semantic-ui-react";

const categories = [
  { icon: "microchip", title: "Embedded Solutions" },
  { icon: "bolt", title: "Industrial Automation" },
  { icon: "lightbulb", title: "LED Lighting" },
  { icon: "database", title: "Memory & Storage" },
];

const HomePage = () => (
  <Segment vertical style={{ padding: "6em 0em",
      backgroundColor: "#f9f9f9", 
      minHeight: "100vh",  
  }}
  >
    <Container textAlign="center">
      <Header as="h1" color="black" style={{ fontSize: "3em" }}>
        Welcome to StockeX
      </Header>
      <p style={{ fontSize: "1.3em", color: "black", marginBottom: "2em" }}>
        Your trusted source for industrial electronic components</p>

      <Card.Group centered itemsPerRow={4}>
        {categories.map((c, i) => (
          <Card key={i}>
            <Card.Content textAlign="center">
              <Icon name={c.icon} size="huge" color="black" />
              <Card.Header style={{ marginTop: "0.8em" }}>{c.title}</Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  </Segment>
);

export default HomePage;
