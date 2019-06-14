import React, { Component } from 'react';
import { ColorDictionariesContext } from '../providers/ColorDictionariesProvider';
import { Grid, Button } from '@material-ui/core';
import './DictionarySelection.scss';

class DictionarySelection extends Component {

  render() {
    return (
      <ColorDictionariesContext.Consumer>
        {(context) => {

          function handleClick(newDictionary: string) {
            context.activateDictionary(newDictionary);
          }
          return (
            <Grid className="text-center dictionary-list-selection">
              {context.getDictionaries().map((el: any, i: number) =>
                  <Button key={i} onClick={() => handleClick(el.dictionaryName)} variant="contained" className={(el.dictionaryName === context.currentDictionary)?'primary-btn': 'dictionary-default'} >
                    {el.dictionaryName}
                  </Button>
              )}
            </Grid>
          )
        }}
      </ColorDictionariesContext.Consumer>
    );
  }
}
export default DictionarySelection;