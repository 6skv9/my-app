import React from "react";
import { Container, Segment, Header, Grid, Image, Button, Icon } from "semantic-ui-react";
import sensorImg from "../resources/d.jpg";

const ProductPage = () => (
  <Segment vertical style={{padding: "5em 0",
      backgroundColor: "#f9f9f9",
      minHeight: "100vh",}}>
    <Container>
      <Grid stackable columns={2} verticalAlign="middle">

        <Grid.Column width={6} textAlign="center">
          <Image
            src={sensorImg}
            alt="TDK Invensense ICM-42370-P"
            bordered
            rounded
            centered
            size="medium"
            style={{
              backgroundColor: "white",
              padding: "1em",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid.Column>

        <Grid.Column  width={10} >
          <Header as="h2" color="black">
            TDK InvenSense ICM-42370-P
          </Header>
          <p  style={{ fontSize: "1.1em", lineHeight: "1.6em", color: "#333" }}>
            High-performance 3-Axis Accelerometer with ultra-low-power wake-on-motion,<br/>
            configurable host interface (I3C, I2C, SPI), and 20,000g shock tolerance.
          </p>

          <ul syle={{ fontSize: "1.05em", color: "#444", lineHeight: "1.7em" }}>
            <li>±2g/±4g/±8g/±16g digital-output accelerometer</li>
            <li>16-bit ADC with low noise</li>
            <li>Wake-on-motion and free-fall detection</li>
            <li>Hermetically sealed MEMS structure</li>
          </ul>

          <Header  as="h4" color="grey" style={{ marginTop: "1.5em" }}>
            <strong>Unit Price: ₹244.36</strong>
          </Header>
          <div style={{ marginTop: "1.5em" }}>
            <Button color="blue" size="large" style={{ marginRight: "1em" }}>
              <Icon name="shopping cart" /> Add to Cart
            </Button>
          <Button color="Blue" size="lagre">
            <Icon name="download"/>view Datasheet
          </Button>
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  </Segment>
);

export default ProductPage;
