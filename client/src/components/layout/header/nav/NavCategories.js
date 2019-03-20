import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../../../actions/categoryAction";

class NavCategories extends Component {
  state = {
    visible: false
  };
  async componentDidMount() {
    await this.props.getCategories();
  }
  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible
    });
  };
  render() {
    const category = this.props.categories.map(category => (
      <a href="#" key={category._id}>
        {category.name}
      </a>
    ));
    return (
      <div className="dropdown nav-one">
        <button className="dropbtn" onClick={this.toggleMenu}>
          Categories
          <i className="fa fa-caret-down" />
        </button>
        {this.state.visible ? (
          <div className="dropdown-content">{category}</div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  categories: state.category.categories,
  loading: state.category.loading,
  errors: state.errors.error
});
export default connect(
  mapStateToProps,
  { getCategories }
)(NavCategories);

/*        state = {
        categories: [],
    };

    componentDidMount() {
        let initialCategories = [];
        fetch('https://swapi.co/api/planets/')
            .then(response => {
                return response.json();
            }).then(data => {
                initialCategories = data.results.map(category => category)
                console.log(initialCategories);
                this.setState({
                    categories: initialCategories,
                });
            });
    }

    render() {
        return (
            <Category state={this.state} />
        );
    }
<nav className='nav-bar nav-one  wrapper'>
                <ul>
                    <li>Categories{' '}<i className="fas fa-caret-down" /></li>
                </ul>
            </nav>
   */
