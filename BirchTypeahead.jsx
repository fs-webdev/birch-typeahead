import React from 'react';
import './birch-typeahead';

class BirchTypeahead extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const {onOptionSelected, onInput } = this.props;

    const typeahead = document.createElement('birch-typeahead');
    this.myRef.current.appendChild(typeahead);

    typeahead.addEventListener('birch-typeahead:input', e => {
      const setOptions = options => {
        typeahead.setAttribute('options', JSON.stringify(options));
      };
      const showOptions = () => typeahead.showOptions();
      onInput(e, setOptions, showOptions);
    });

    typeahead.addEventListener('birch-typeahead:selected', e => {
      onOptionSelected(e);
    });
  }

  render() {
    return <div ref={this.myRef} />;
  }
}

export default BirchTypeahead;
