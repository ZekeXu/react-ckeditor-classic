import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Link from '@ckeditor/ckeditor5-link/src/link';

import List from '@ckeditor/ckeditor5-list/src/list';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import UploadAdapterPlugin from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';

ClassicEditor
  .create(document.querySelector('#editor'), {
    plugins: [Essentials, Paragraph, Bold, Italic, Link, Code, Heading, BlockQuote, List,
      EasyImage,
      ImagePlugin,
      ImageCaptionPlugin,
      ImageStylePlugin,
      ImageToolbarPlugin,
      ImageUploadPlugin,
      UploadAdapterPlugin,
      Alignment,
      Autoformat,
    ],
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'code',
      'bulletedList',
      'numberedList',
      'blockQuote',
      'undo',
      'redo',
      'imageUpload',
      'alignment',
    ],
    heading: {
      options: [{
          model: 'paragraph',
          title: 'Paragraph',
          class: 'ck-heading_paragraph'
        },
        {
          model: 'heading1',
          view: 'h1',
          title: 'Heading 1',
          class: 'ck-heading_heading1'
        },
        {
          model: 'heading2',
          view: 'h2',
          title: 'Heading 2',
          class: 'ck-heading_heading2'
        },
        {
          model: 'heading3',
          view: 'h3',
          title: 'Heading 3',
          class: 'ck-heading_heading3'
        },
      ]
    },
    image: {
      toolbar: [
        'imageStyle:alignLeft',
        'imageStyle:full',
        'imageStyle:alignRight',
        // 'imageStyle:side',
        '|',
        'imageTextAlternative'
      ],
      styles: [
        'full',
        'alignLeft',
        'alignRight',
      ],
    },
    alignment: {
      options: ['left', 'right', 'center', 'justify']
    },
  })
  .then(editor => {
    console.log('Editor was initialized', editor);
    editor.setData('<p>Welcome</p>');
    console.log(editor.getData());
  })
  .catch(error => {
    console.error(error.stack);
  });

// editor.destroy()
// .catch( error => {
//     console.log( error );
// } );