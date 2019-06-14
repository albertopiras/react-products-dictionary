const dictionaries = [
  {
      dictionaryName: "Dictionary 1",
      mutations: {
          "#008000": "#00FF00",
          "#008080": "#0000FF"
      }
  },
  {
      dictionaryName: "Dictionary 2",
      mutations: {
          "#800080": "#FF00FF",
          "#008000": "#800000"
      }
  }
]

const colorProviderContext = {
    getColorDescription: jest.fn(),
    getColorMutation: jest.fn(x => x),
    getColorList: [],
    currentDictionary: '',
    getDictionaries:jest.fn(()=>dictionaries),
    dictionaries: [],
    createDictionary: jest.fn(),
    deleteDictionary: jest.fn(),
    activateDictionary: jest.fn(),
    addDictionaryItem: jest.fn(),
    updateDictionaryItem: jest.fn(),
    removeDictionaryItem: jest.fn()
  };

  export default colorProviderContext;