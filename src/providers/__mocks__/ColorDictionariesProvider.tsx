import colorProviderContext from "./colorDictionaryContext";

export const ColorDictionariesContext = ({
  Consumer(props:any) {
    return props.children(colorProviderContext)
  } 
})