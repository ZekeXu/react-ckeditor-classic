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
    const { data } = this.props;
    if (this.editor && this.editor.getData() !== data) {
      this.editor.setData(data);
    }
  }

  componentWillUnmount() {
    this.destroyEditor();
  }

  initializeEditor() {
    const { data, config, onChange } = this.props;
    const mergedConfig = {
      ...editorConfig,
      ckfinder: {
        uploadUrl: config.url,
      },
      uploadConfig: {
        ...config,
      },
    };
    ClassicEditor.create(this.editorRef.current, mergedConfig)
      .then((editor) => {
        this.editor = editor;

        if (data) {
          this.editor.setData(data);
        }

        const { document } = this.editor.model;

        document.on('change:data', (event) => {
          /* istanbul ignore else */
          if (onChange) {
            onChange(editor.getData(), editor, event);
          }
        });
      })
      .catch((error) => {
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
  config: PropTypes.shape({
    url: PropTypes.string,
    headers: PropTypes.shape(PropTypes.any),
    fileName: PropTypes.string,
  }),
  onChange: PropTypes.func,
};

ReactEditor.defaultProps = {
  data: '',
  config: {
    url: '',
    headers: {},
    fileName: 'file',
  },
  onChange: () => {},
};

export default ReactEditor;
