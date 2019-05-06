import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  text-decoration: none;
  background-color: lightseagreen;
  margin: 10% auto;
  height: 30px;
  display: flex;
  justify-content: center;
  padding: 2%;
  width: 80%;
  font-weight: bold;
  padding-top: 10px;
`;

const H1 = styled.h1`
  margin: 5%;
`;

const InputTitle = styled.input`
  height: 30px;
  width: 200px;
  margin: 5%;
`;

const InputBody = styled.input`
  width: 90%;
  height: 445px;
  margin: 5%;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postToEdit: {},
      updatedTitle: null,
      updatedText: null,
      loading: true
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchPost(id);
  }

  fetchPost = id => {
    axios
      .get(`/post/get/${id}`)
      .then(response => {
        this.setState({
          postToEdit: response.data,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      });
  };

  submitEditedPost = e => {
    e.preventDefault();
    axios
      .put(
        `/post/edit/${
          this.props.match.params.id
        }`,
        {
          title: this.state.updatedTitle,
          description: this.state.updatedText
        }
      )
      .then(response => {
        this.props.history.push(`/post/${this.props.match.params.id}`);
      })
      .catch(err => console.log(err));
  };

  updatedTitle = e => {
    this.setState({
      updatedTitle: e.target.value,
      postToEdit: { textTitle: e.target.value }
    });
  };

  updateTextBody = e => {
    this.setState({
      updatedText: e.target.value,
      postToEdit: { description: e.target.value }
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="contentContainer">
        <H1>Edit Post:</H1>
        <Form className="form" onSubmit={this.submitEditedPost}>
          <InputTitle
            className="title"
            type="text"
            name="title"
            onChange={this.updatedTitle}
            value={this.state.postToEdit.title}
          />

          <InputBody
            className="description"
            type="text"
            name="description"
            onChange={this.updateTextBody}
            value={this.state.postToEdit.description}
          />
          <Button className="button" type="submit">
            Update
          </Button>
        </Form>
      </div>
    );
  }
}
export default EditPost;
