import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';

import List from '@ckeditor/ckeditor5-list/src/list';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';

const editorConfig = {
  plugins: [Essentials, Paragraph, Bold, Italic, Underline, Strikethrough, Link, Code, Heading, BlockQuote, List,
    ImagePlugin,
    ImageCaptionPlugin,
    ImageStylePlugin,
    ImageToolbarPlugin,
    ImageUploadPlugin,
    CKFinderUploadAdapter,
    Alignment,
    Autoformat,
    Highlight,
  ],
  toolbar: [
    'heading',
    '|',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'highlight',
    'alignment',
    'link',
    'code',
    'bulletedList',
    'numberedList',
    'blockQuote',
    'undo',
    'redo',
    'imageUpload',
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
  highlight: {
    options: [{
        model: 'yellowMarker',
        class: 'marker-yellow',
        title: 'Yellow Marker',
        color: 'var(--ck-highlight-marker-yellow)',
        type: 'marker'
      },
      {
        model: 'greenMarker',
        class: 'marker-green',
        title: 'Green marker',
        color: 'var(--ck-highlight-marker-green)',
        type: 'marker'
      },
      {
        model: 'pinkMarker',
        class: 'marker-pink',
        title: 'Pink marker',
        color: 'var(--ck-highlight-marker-pink)',
        type: 'marker'
      },
      {
        model: 'blueMarker',
        class: 'marker-blue',
        title: 'Blue marker',
        color: 'var(--ck-highlight-marker-blue)',
        type: 'marker'
      },
      {
        model: 'redPen',
        class: 'pen-red',
        title: 'Red pen',
        color: 'var(--ck-highlight-pen-red)',
        type: 'pen'
      },
      {
        model: 'greenPen',
        class: 'pen-green',
        title: 'Green pen',
        color: 'var(--ck-highlight-pen-green)',
        type: 'pen'
      }
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
};

export default editorConfig