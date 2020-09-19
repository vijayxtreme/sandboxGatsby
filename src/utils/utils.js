export const fixHTMLContent = (html) => {
    //Some regex to help make urls absolute
    let h = html.replace(/\/sites\//g,'https://mrid8.rcg.ninja/sites/' );
    //Strip all classes, styles
    //h = h.replace(/class=\".+?\"/g, '')
    return h
}

export const isNotNull = (item) => {
    return item !== null ? true : false
}


export const itemHasContent = (item) => {
    return isNotNull(item) ? item : false
}

//useful for try/catching unknown values
export const tryFn = (fn, fallback = '') => {
    try {
        return fn();
    }catch(error){
        return fallback;
    }
}


export const breakWordHyphen = (word) => {
  return word.split("-")
}

export const breakWordReturnThree = (word) => {
  let w = word.split(" ")
  let newWord = `${w[0]} ${w[1] ? w[1] : ''} ${w[2] && w[2].length > 5 ? w[2] : ''}`
  return newWord
}
