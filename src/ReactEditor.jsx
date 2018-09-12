import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import editorConfig from './editor-config';

class ReactEditor extends PureComponent {
  constructor(props) {
    super(props);

    this.editorRef = React.createRef();
    this.editor = null;
  }

  componentDidMount() {
    this.initializeEditor();
  }

  componentDidUpdate() {
		if ( this.editor && this.editor.getData() !== this.props.data ) {
			this.editor.setData( this.props.data );
		}
	}

  componentWillUnmount() {
    this.destroyEditor();
  }

  initializeEditor() {
    ClassicEditor.create(this.editorRef.current, editorConfig)
      .then((editor) => {
        this.editor = editor;

        if ( this.props.data ) {
					this.editor.setData( this.props.data );
				}

				const document = this.editor.model.document;

				document.on( 'change:data', event => {
					/* istanbul ignore else */
					if ( this.props.onChange ) {
						this.props.onChange( event, editor );
					}
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  destroyEditor() {
    if (this.editor) {
      this.editor.destroy().then(() => {
        this.editor = null;
      });
    }
  }

  render() {
    return (
      <div ref={this.editorRef} />
    );
  }
}

ReactEditor.propTypes = {
  data: PropTypes.string,
  onChange: PropTypes.func,
};

ReactEditor.defaultProps = {
  data: '',
};

export default ReactEditor;
