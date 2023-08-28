import React, { Component } from 'react';
import { Header, Field, Btn, Form } from './Searchbar.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {
    value: '',
    page: 1,
  };

  // Створюємо методи для контрольованої форми

  handleChange = e => {
    this.setState({ value: e.target.value, page: 1 });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      toast('Write some text', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    this.props.onSubmit(this.state.value);
    // this.setState({ value: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Btn type="submit">
            <BsSearch size="16px" />
          </Btn>

          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};