import React, { Component, state } from 'react';
import Button from '@enact/sandstone/Button';
import { Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import recipes from '../recipeData/recipes.json';
import recipe from './recipe';



class RecommendedRecipes extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const ingre = this.props;
    //const { comedy, action, adventure,war } = this.props;
    //console.log(comedy);
    let noRecommendations = "No recommendations!!!";
    return (
      <div style={{ color: "white" }}>
        Recommended Recipes{ ingre ? "" : noRecommendations}
        <Row>
          {
            recipes.map(recipe => {
              if (recipe.ingre == " " && ingre == true) {
                return (
                  <Col md={3}>
                    <recipe data={recipe} ></recipe>
                  </Col>
                );
              } else {
                return "";
              }
            })
          }
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  console.log(state);
  return (
      ingre: state.ingre;
  );

};
export default connect(mapStateToProps, null)(Recommendedrecipes);