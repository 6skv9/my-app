import React, { useState } from "react";
import { Button,Input,  Container,  Header,  Segment,  Grid,  Card,Image,} from "semantic-ui-react";
import logo from "../resources/V.jpg.svg";
//import paneer from "../image/paneer.jpg";
//import Biryani from "../image/Biryani.jpg";


const Homepages = () => {  
  const recipes = [
  {
    id: 1,
    title: "Paneer Butter Masala",
    description:
      "Rich, creamy curry made with paneer and aromatic Indian spices.",
    //image:
     // "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/paneer-butter-masala.jpg",
     image:"paneer",
  },
  {
    id: 2,
    title: "Chicken Biryani",
    description:  "Fragrant basmati rice cooked with marinated chicken and saffron.",
      //  image:
     // "https://www.cubesnjuliennes.com/wp-content/uploads/2020/01/Hyderabadi-Chicken-Biryani.jpg",
      image:"Biryani",
  },
  {
    id: 3,
    title: "Veg Pulao",
    description:
      "Delicious rice dish made with vegetables and Indian spices.",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/vegetable-pulao-recipe.jpg",
  },
  {
    id: 4,
    title: "Chole Bhature",
    description:
      "A North Indian favorite — spicy chickpeas with fluffy fried bread.",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/chole-bhature.jpg",
  },
  {
    id: 5,
    title: "Butter Chicken",
    description:
      "Classic North Indian dish with grilled chicken in creamy tomato gravy.",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/08/butter-chicken-recipe.jpg",
  },
  {
    id: 6,
    title: "Idli Sambar",
    description:
      "Soft steamed rice cakes served with tangy lentil-based vegetable stew.",
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/idli-sambar-1-500x500.jpg",
  },
  
];

  const [searchTerm, setSearchTerm] = useState("");
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Segment
      vertical
      style={{
        padding: "0.5em 0em",
        backgroundImage: `url("https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1500&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
        color: "white",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0,
        }}
      ></div>

      <Container style={{ zIndex: 1, position: "relative" }}>
        <Grid columns={2} verticalAlign="top" style={{ marginTop: "1em" }}>
          {/* LEFT SIDE — Swiggy Logo */}
          <Grid.Column width={8} textAlign="left" style={{ paddingTop: "1em" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7em" }}>
              <img
                src={logo}
                alt="Swiggy Logo"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 2px 4px rgba(255, 255, 255, 0.6))",
                }}
              />
              <Header
                as="h1"
                style={{
                  color: "#ea910cff",
                  fontSize: "3em",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                Swiggy
              </Header>
            </div>
          </Grid.Column>

          {/* RIGHT SIDE — Search Box */}
          <Grid.Column width={5} textAlign="right">
            <Segment
              raised
              padded="very"
              style={{
                display: "inline-block",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                width: "500px",
                padding: "1.5em",
                marginTop: "0.5em",
              }}
            >
              <p
                style={{
                  fontSize: "1.3em",
                  color: "#444",
                  marginBottom: "0.5em",
                  textAlign: "center",
                }}
              >
                Find recipes for your favorite meals 🍛
              </p>
              <Input
                fluid
                iconPosition="left"
                placeholder="Search for food..."
                size="large"
                onChange={(e) => setSearchTerm(e.target.value)}
                action={{
                  color: "orange",
                  labelPosition: "right",
                  icon: "search",
                  content: "Search",
                  style: {
                    borderRadius: "0 25px 25px 0",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  },
                }}
                style={{
                  height: "45px",
                  borderRadius: "25px",
                }}
              />
            </Segment>
          </Grid.Column>
        </Grid>

        {/* FOOTER MESSAGE */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3em",
            color: "white",
            fontSize: "1.3em",
          }}
        >
          🍽️ Discover delicious meals in seconds!
        </div>

        {/* RECIPE SECTION */}
        <Container style={{ marginTop: "3em" }}>
          <Header
            as="h2"
            textAlign="center"
            style={{
              color: "white",
              marginBottom: "1em",
              fontWeight: "bold",
            }}
          >
            Popular Recipes 🍲
          </Header>

          <Card.Group itemsPerRow={3} stackable centered>
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <Card key={recipe.id} raised>
                  <Image
                   src={recipe.image}
                    alt={recipe.title}
                    wrapped
                    ui={false}
                    style={{
                       height: "200px",
                       objectFit: "cover",
                       borderRadius: "5px 5px 0 0",
                    }}
                  />
                  <Card.Content>
                    <Card.Header>{recipe.title}</Card.Header>
                    <Card.Description>{recipe.description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra textAlign="center">
                    <Button color="orange">View Recipe</Button>
                  </Card.Content>
                </Card>
              ))
            ) : (
              <Header
                as="h3"
                textAlign="center"
                style={{ color: "white", width: "100%" }}
              >
                No recipes found 😔
              </Header>
            )}
          </Card.Group>
        </Container>
      </Container>
    </Segment>
  );
};

export default Homepages;
