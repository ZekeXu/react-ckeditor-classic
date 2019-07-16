import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';

import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

import List from '@ckeditor/ckeditor5-list/src/list';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
// import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import UploadAdapterPlugin from './UploadAdapterPlugin';


const editorConfig = {
  plugins: [
    Essentials,
    Paragraph,
    Indent,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Subscript,
    Superscript,
    Link,
    Code,
    Heading,
    BlockQuote,
    List,
    Table,
    TableToolbar,
    ImagePlugin,
    ImageCaptionPlugin,
    ImageStylePlugin,
    ImageToolbarPlugin,
    ImageUploadPlugin,
    // CKFinderUploadAdapter,
    UploadAdapterPlugin,
    Alignment,
    Autoformat,
    Font,
    RemoveFormat,
  ],
  toolbar: [
    'heading',
    '|',
    'outdent',
    'indent',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'subscript',
    'superscript',
    'fontSize',
    'fontFamily',
    'fontColor',
    'fontBackgroundColor',
    'alignment',
    'link',
    'code',
    'bulletedList',
    'numberedList',
    'insertTable',
    'blockQuote',
    'undo',
    'redo',
    'imageUpload',
    'removeFormat',
  ],
  heading: {
    options: [{
      model: 'paragraph',
      title: 'Paragraph',
      class: 'ck-heading_paragraph',
    },
    {
      model: 'heading1',
      view: 'h1',
      title: 'Heading 1',
      class: 'ck-heading_heading1',
    },
    {
      model: 'heading2',
      view: 'h2',
      title: 'Heading 2',
      class: 'ck-heading_heading2',
    },
    {
      model: 'heading3',
      view: 'h3',
      title: 'Heading 3',
      class: 'ck-heading_heading3',
    },
    ],
  },
  fontSize: {
    options: [
      10,
      12,
      14,
      16,
      18,
      22,
      24,
      28,
      32,
      64,
    ],
  },
  fontFamily: {
    options: [
      'default',
      'Arial, Helvetica, sans-serif',
      'Courier New, Courier, monospace',
      'Georgia, serif',
      'Lucida Sans Unicode, Lucida Grande, sans-serif',
      'Tahoma, Geneva, sans-serif',
      'Times New Roman, Times, serif',
      'Trebuchet MS, Helvetica, sans-serif',
      'Verdana, Geneva, sans-serif',
    ],
  },
  fontColor: {
    columns: 6,
    documentColors: 12,
  },
  fontBackgroundColor: {
    columns: 6,
    documentColors: 12,
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
  },
  image: {
    toolbar: [
      'imageStyle:alignLeft',
      'imageStyle:full',
      'imageStyle:alignRight',
      // 'imageStyle:side',
      '|',
      'imageTextAlternative',
    ],
    styles: [
      'full',
      'alignLeft',
      'alignRight',
    ],
  },
  alignment: {
    options: ['left', 'right', 'center', 'justify'],
  },
  indentBlock: {
    offset: 1,
    unit: 'em',
  },
};

export default editorConfig;
