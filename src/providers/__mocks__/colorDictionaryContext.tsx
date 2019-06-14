
const colorProviderContext = {
    onAddToCartClick: jest.fn(),
    getColorDescription: jest.fn(),
    getColorMutation: jest.fn(x => x),
    getColorList: [],
    currentDictionary: '',
    getDictionaries:jest.fn(),
    dictionaries: [],
    createDictionary: jest.fn(),
    deleteDictionary: jest.fn(),
    activateDictionary: jest.fn(),
    addDictionaryItem: jest.fn(),
    updateDictionaryItem: jest.fn(),
    removeDictionaryItem: jest.fn()
  };

  export default colorProviderContext;