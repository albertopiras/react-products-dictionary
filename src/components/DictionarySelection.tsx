import React, { Component } from 'react';
import { ColorDictionariesConsumer } from '../providers/ColorDictionariesProvider';
import { Grid, Button } from '@material-ui/core';
import './DictionarySelection.scss';

class DictionarySelection extends Component {

  render() {
    return (
      <ColorDictionariesConsumer>
        {(context) => {

          function handleClick(newDictionary: string) {
            context.activateDictionary(newDictionary);
          }
          return (
            <Grid className="text-center">
              {context.getDictionaries().map((el: any, i: number) =>
                <Button key={i} onClick={() => handleClick(el.dictionaryName)} variant="contained" className={(el.dictionaryName === context.currentDictionary)?'dictionary-active': 'dictionary-default'} >
                  {el.dictionaryName}
                </Button>
              )}
            </Grid>
          )
        }}
      </ColorDictionariesConsumer>
    );
  }
}
export default DictionarySelection;