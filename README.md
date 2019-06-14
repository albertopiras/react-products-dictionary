# React products dictionary

This application allows you to create several dicionary colors mapping to apply to a list o products.

When you activate a dictionary, all the products rendering will be affected by the new mapping, showing a different colors.

[view live demo]

## Details

State: This app uses native React Context API to manage the state.

Pages:
* HomePage
* Products Page

Custom Components:
* ProductCard
* ProductList
* DictionarySelection
* DictionaryList
* DictionaryTable
* AddDictionary
* BaseDialog
* AlertBox


Providers:
 * ColorDictionariesProvider (Dictionary management)
 * MessagesProvider (app toast messages management)
 * ProductsProvider (products management)


All the insertions/updates and removals are asyncronous Promises to simulate a Backend Interaction.
All these Promises return a `Message` object with the following properties:

```
{
    content:string;
    error:boolean;
}

```

This application exposes a custom Provider called `MessagesProvider` to manage 3 kinds of toast Notification in the entire app.
Toast Notification can be of three types : `INFO, SUCCESS,ERROR`.

## Usage

Install:

```
npm install
```

Run Locally:

```
npm start
```

Tests:

```
npm test
```


## External libraries

[material-table]

## Version
1.0

## License

MIT

[view live demo]: <https://albertopiras.github.io/react-products-dictionary/>

[material-ui.com]: <https://material-ui.com>
[material-table]: <https://github.com/mbrn/material-table>
[materializecss.com]: <https://materializecss.com>