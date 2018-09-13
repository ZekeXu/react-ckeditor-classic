# react-ckeditor-classic

react-ckeditor-classic

![react-ckeditor-classic](./README.png)

## Usage

```bash
yarn add react-ckeditor-classic
```

```jsx
import ReactEditor from 'react-ckeditor-classic';

<ReactEditor
  data='Hello Editor!'
  config={{uploadUrl: '/your/api/image/upload/url'}}
  onChange={e => console.log(e)}
/>
```

## If you use Webpack, you should config ```webpack.config.js```

```js

const {
  styles
} = require('@ckeditor/ckeditor5-dev-utils');

module: {
  rules: [
    {
      oneOf: [
          {
            test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
            use: ['raw-loader']
          },
          {
            test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/,
            use: [
              {
                loader: 'style-loader',
                options: {
                  singleton: true
                }
              },
              {
                loader: 'postcss-loader',
                options: styles.getPostCssConfig({
                  themeImporter: {
                    themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
                  },
                  minify: true
                })
              }
            ]
          },
          {
            exclude: [
              /\.js$/,
              /\.html$/,
              /\.json$/,
              /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
              /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/,
            ],
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash:8].[ext]'
            }
          }
      ]
    }
  ]
}

```

## LICENSE [LGPL-3.0](./LICENSE)
