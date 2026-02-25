import React, { useEffect }  from  "react";
import { useSelector, useDispatch }  from  "react-redux";
import { Button, Input, Container, Header, Segment, Grid, Card, Image }  from  "semantic-ui-react";
import logo  from  "../resources/V.jpg.svg";
import {setRecipes,setSearchTerm }  from   "../store/recipeSlice"; 
import axios from "axios";
//import { setRecipes ,setSearchTerm } from "../store/recipeSlice";

const HomePages1 = () => {
 /* const dispatch = useDispatch();
  const { recipes, searchTerm } = useSelector((state) => state.recipes);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );*/
const dispatch = useDispatch();
  const { recipes, searchTerm } = useSelector((state) => state.recipes);

  useEffect(() => {
    axios.get("http://localhost:8080/api/recipes")
      .then((response) => {
        dispatch(setRecipes(response.data));
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, [dispatch]);

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
          {/* LEFT — Logo */}
          <Grid.Column width={8}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7em" }}>
              <img src={logo} alt="Swiggy Logo" style={{ width: "60px", height: "60px" }} />
              <Header as="h1" style={{ color: "#ea910cff", fontSize: "3em", fontWeight: "bold" }}>
                Swiggy
              </Header>
            </div>
          </Grid.Column>
          {/* RIGHT — Search Box */}
          <Grid.Column width={6} textAlign="right">
            <Segment
              raised
              style={{
                backgroundColor: "rgba(255,255,255,0.9)",
                width: "500px",
                padding: "1.5em",
                borderRadius: "10px",
              }}
            >
              <p style={{ fontSize: "1.3em", color: "#444", textAlign: "center" }}>
                Find recipes for your favorite meals 🍛
              </p>
              <Input
                fluid
                icon="search"
                placeholder="Search for food..."
                size="large"
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              />
            </Segment>
          </Grid.Column>
        </Grid>
        {/* RECIPE SECTION */}
        <Container style={{ marginTop: "3em" }}>
          <Header as="h2" textAlign="center" style={{ color: "white", marginBottom: "1em" }}>
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
                    style={{ height: "200px", objectFit: "cover" }}
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
              <Header as="h3" textAlign="center" style={{ color: "white", width: "100%" }}>
                No recipes found 😔
              </Header>
            )}
          </Card.Group>
        </Container>
      </Container>
    </Segment>
  );
};

export default HomePages1;
